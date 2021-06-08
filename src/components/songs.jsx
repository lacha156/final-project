import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import { getSongs } from '../services/fakeSongService'
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService'
import  { paginate }  from './utlis/paginate';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Songs extends Component {
    state = { 
        songs: [],
        currentPage:1,
        pageSize: 4,
        genres: []
    };

    componentDidMount() {
        const genres = [{name: 'All Genres'},...getGenres()]
        this.setState({songs: getSongs(), genres});
    }

    handleDelete = (song) => {
        const songs = this.state.songs.filter(s => s._id !== song._id);
        this.setState({ songs:songs });
    };

    handleLike = song => {
        const songs = [...this.state.songs];
        const index = songs.indexOf(song);
        songs[index] = {...songs[index]};
        songs[index].liked =!songs[index].liked;
        this.setState({ songs });
    }

    handlePageChange = page => {
        this.setState({ currentPage:page })
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre})
    }

    render() { 
        const { length: count } = this.state.songs;
        const { pageSize, currentPage, songs: allSongs} = this.state

        if (count === 0) return <p>There are no songs in the database.</p>;

        const songs = paginate(allSongs, currentPage, pageSize)

        return (
            <React.Fragment>
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres}
                    selectedItem={this.state.selectedGenre}
                    onItemSelect = {this.handleGenreSelect}/>
                </div>
                <div className="col">
                <p>Showing {count} songs in the database.</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.songs.map(song => (
                <tr key={song._id}>
                    <td>{song.title}</td>
                    <td>{song.genre.name}</td>
                    <td>{song.numberInStock}</td>
                    <td>{song.dailyRentalRate}</td>
                    <td>
                        <Like liked={song.liked} onClick={ () => this.handleLike(song)}/>
                    </td>
                    <td>
                        <Button onClick={() => this.handleDelete(song)} 
                        variant="danger"
                        >Delete
                        </Button>
                        </td>
                      </tr>
                ))}
            </tbody>
        </Table>
        <Pagination 
        itemsCount={count} 
        pageSize={this.state.pageSize} 
        currentPage={currentPage}
        onPageChange={this.handlePageChange}/>
                </div>
                </div>
                 
           </React.Fragment>
        );
    }
}
 
export default Songs ;