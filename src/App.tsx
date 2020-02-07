import React from 'react';
import { MusicPlayerProvider } from './MusicPlayerContext';

const App = () => (
  <MusicPlayerProvider>
    <div className="App">hello world!</div>
  </MusicPlayerProvider>
);

export default App;
