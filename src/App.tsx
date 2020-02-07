import React from 'react';
import { MusicPlayerProvider } from './context/MusicPlayerContext';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';

const App = () => (
  <MusicPlayerProvider>
    <div className="App">
      <TrackList />
      <PlayerControls />
    </div>
  </MusicPlayerProvider>
);

export default App;
