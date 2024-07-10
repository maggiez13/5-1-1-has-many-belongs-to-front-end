import './style.css'
// import { renderMain, renderBooks, renderAuthor, updateDropDown } from './utils/render-functions.js';
// import { Author } from './models/has-many.js';
import { Playlist } from './models/has-many.js';
import { renderMain, renderSongs, renderPlaylist, updateDropDown } from './utils/render-functions.js';


const handlePlaylistSubmit = (e) => {
  e.preventDefault();
  const { name } = Object.fromEntries(new FormData(e.target));
  // data: making a new author through the Author class
  const playlist = new Playlist(name);
  // rendering data of author after creation from Author class 
  renderPlaylist(playlist);
  updateDropDown();

  e.target.reset();
}

const handleSongSubmit = (e) => {
  e.preventDefault();
  const { id, title } = Object.fromEntries(new FormData(e.target));

  const playlist = Playlist.findBy(Number(id));
  playlist.addSong(title);

  renderSongs(document.querySelector(`#playlist-ul-${id}`), playlist);

  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('playlist-form').addEventListener('submit', handlePlaylistSubmit);
  document.getElementById('song-form').addEventListener('submit', handleSongSubmit);
}

main();

// const handleAuthorSubmit = (e) => {
//   e.preventDefault();
//   const { name } = Object.fromEntries(new FormData(e.target));
//   // data: making a new author through the Author class
//   const author = new Author(name);

//   // rendering data of author after creation from Author class
//   renderAuthor(author);
//   updateDropDown();

//   e.target.reset();
// }

// const handleBookSubmit = (e) => {
//   e.preventDefault();
//   const { id, title } = Object.fromEntries(new FormData(e.target));

//   const author = Author.findBy(Number(id));
//   author.addBook(title);

//   renderBooks(document.querySelector(`#author-ul-${id}`), author);

//   e.target.reset();
// }

// const main = () => {
//   renderMain();

//   document.getElementById('author-form').addEventListener('submit', handleAuthorSubmit);
//   document.getElementById('book-form').addEventListener('submit', handleBookSubmit);
// }

// main();