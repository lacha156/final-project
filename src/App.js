import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Songs from './components/songs';
import Customers from './components/customers';
import Reviews from './components/songReviews';
import NotFound from "./components/notFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar';

class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
     <NavBar />
      <main className="container">
        <Switch>
          <Route path="/songs" component={Songs}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/songReviews" component={Reviews}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;
