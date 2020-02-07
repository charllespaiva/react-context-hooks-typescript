import React from 'react';
import { MusicPlayerProvider } from './context/MusicPlayerContext';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';

import GlobalStyle, { AppContainer } from './styles/global';

const App = () => (
  <MusicPlayerProvider>
    <GlobalStyle />
   
    <AppContainer>
      <TrackList />
      <PlayerControls />
    </AppContainer>

    
  </MusicPlayerProvider>
);

export default App;
