import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [{ name: 'yo Perrro sola', artist: 'Bad Bunny', album: 'PereeoLand', id: 11 }, { name: 'song1', artist: "artist1", album: 'album1', id: 22 }, { name: 'song2', artist: "artist2", album: 'album2', id: 33}],
      playlistName: 'myPlaylistName',
      playlistTracks: [ { name: 'name1', artist: 'artist1', album: 'album1', id: 1 }, { name: 'name2', artist: 'artist2', album: 'album2', id: 2 }, { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }, { name: 'name4', artist: 'artist4', album: 'album4', id: 4 }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track) {
    // new array after filtering for the track to delete.
    const tracks = this.state.playlistTracks.filter((trackInfo) => trackInfo.id !== track.id) 
    console.log(tracks);
    this.setState({ playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          < SearchBar />
          <div className="App-playlist">
            < SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            < Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}
