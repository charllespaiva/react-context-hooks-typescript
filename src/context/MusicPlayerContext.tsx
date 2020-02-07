import React, { useState } from 'react';

import { LostChameleon, Rock, Tobu } from '../assets';

type Tracks = {
  name?: string;
  file?: any;
}

export interface IMusicPlayerContext {
  audioPlayer?: any;
  tracks: Tracks[];
  currentTrackIndex?: any;
  isPlaying?: Boolean; 
}    

const INITIAL_VALUE: IMusicPlayerContext = {
  audioPlayer: null,
  tracks: [],
  currentTrackIndex: null,
  isPlaying: false 
}

const getTracks = () => ([
  {
    name: 'Lost Chameleon - Genesis',
    file: LostChameleon,
  },
  {
    name: 'The Hipsta - Shaken Soda',
    file: Rock,
  },
  {
    name: 'Tobu - Such Fun',
    file: Tobu,
  },
])

const MusicPlayerContext = React.createContext<[IMusicPlayerContext, any]>([INITIAL_VALUE, () => {}]);

const MusicPlayerProvider = (props: any) => {

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: getTracks(),
    currentTrackIndex: null,
    isPlaying: false,
  });  
  
  const { children } = props;

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
