import getId from "../utils/getId.js";
import Song from "./belongs-to.js"
// import Book from "./belongs-to.js"


export class Playlist {
  static #allPlaylists = [];
  #songs = [];

  constructor(name) {
    this.id = getId();
    this.name = name; // Array to store songs
    Playlist.#allPlaylists.push(this);
  };

  addSong(title) {
    this.#songs.push(new Song(title, this.name));
  };

  getSongs() {
    return [...this.#songs];
  };

  static getAllPlaylists() {
    return [...Playlist.#allPlaylists];
  }

  static findBy(id) {
    return Playlist.#allPlaylists.find((playlist) => playlist.id === id);
  }
}

// build the class that would have many things
// export class Author {
//   static #allAuthors = [];
//   #books = [];

//   constructor(name) {
//     this.id = getId();
//     this.name = name; // Array to store books
//     Author.#allAuthors.push(this);
//   };

//   addBook(title) {
//     this.#books.push(new Book(title, this.name));
//   };

//   getBooks() {
//     return [...this.#books];
//   };

//   static getAllAuthors() {
//     return [...Author.#allAuthors];
//   }

//   static findBy(id) {
//     return Author.#allAuthors.find((author) => author.id === id);
//   }
// }
