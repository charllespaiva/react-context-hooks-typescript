import React from 'react';

import { Container, Item, SongTitle } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import useMusicPlayer from '../../hooks/useMusicPlayer'
import { Button } from '../PlayerControls/style';

const TrackList: React.FC = ()=> {
    const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

    return (
        <Container>
           {trackList.map((track, index) => (
               <Item key={index}>
                    <Button onClick={() => playTrack(index)}>
                        {
                            currentTrackName === track.name && isPlaying 
                                ? <FontAwesomeIcon icon={faPause} /> 
                                : <FontAwesomeIcon icon={faPlay} />
                        }
                    </Button>
                    <SongTitle>
                        {track.name}
                    </SongTitle>
               </Item>
            ))}
        </Container>
    );
}

export default TrackList;