import * as genresAPI from "./fakeGenreService";

const songs = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "50 cent -In the Club",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "HipHop" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Tupac-Changes",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "HipHop" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Kane Brown -Famous Friends",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Country" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "AC/DC - Shot in the Dark",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Green Day - Oh Yeah!",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Harry Styles - Golden",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rock" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Carrie Underwood - Before He Cheats",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Country" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Blake Shelton - God's Country",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Country" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Beastie Boys - Fight For Your Right",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "HipHop" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getSongs() {
  return songs;
}

export function getSong(id) {
  return songs.find(m => m._id === id);
}

export function saveSong(song) {
  let songInDb = songs.find(m => m._id === song._id) || {};
  songInDb.name = song.name;
  songInDb.genre = genresAPI.genres.find(g => g._id === song.genreId);
  songInDb.numberInStock = song.numberInStock;
  songInDb.dailyRentalRate = song.dailyRentalRate;

  if (!songInDb._id) {
    songInDb._id = Date.now();
    songs.push(songInDb);
  }

  return songInDb;
}

export function deleteSong(id) {
  let songInDb = songs.find(s => s._id === id);
  songs.splice(songs.indexOf(songInDb), 1);
  return songInDb;
}
