import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
      {
        name: 'yo Perrro sola',
        artist: 'Bad Bunny',
        album: 'PereeoLand',
        id: 1
      },
      {
        name: 'song1',
        artist: "artist1",
        album: 'album1',
        id: 2
      },
      {
        name: 'song2',
        artist: "artist2" ,
        album: 'album2',
        id: 3
      }
    ]}
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar />
          <div className="App-playlist">
            < SearchResults searchResults={this.state.searchResults}/>
            < Playlist />
          </div>
        </div>
      </div>
    )
  }
}
