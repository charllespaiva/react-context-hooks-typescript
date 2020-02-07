import React from 'react';

import useMusicPlayer from '../../hooks/useMusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

import { Container, Button, DisplayName, BoxControls } from './style';

function PlayerControls() {
    const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();

    return (
        <Container>
            <DisplayName>
                {currentTrackName}
            </DisplayName>
            <BoxControls>
                <Button onClick={playPreviousTrack} disabled={!currentTrackName}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </Button>

                <Button onClick={togglePlay} disabled={!currentTrackName}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Button>

                <Button onClick={playNextTrack} disabled={!currentTrackName}>
                    <FontAwesomeIcon icon={faStepForward} />
                </Button>                 
            </BoxControls>
        </Container>
    )
}

export default PlayerControls;