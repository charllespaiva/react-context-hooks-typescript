import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props: any) => {
  const [state, setState] = useState({
    audio: new Audio(),
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
        file: '',
      },
      {
        name: 'The Hipsta - Shaken Soda',
        file: '',
      },
      {
        name: 'Tobu - Such Fun',
        file: '',
      },
    ],
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
