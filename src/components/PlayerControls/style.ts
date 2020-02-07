import styled from 'styled-components';
import { shade } from 'polished'; 

export const Container = styled.div`
    background: #282828;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DisplayName = styled.div`
    margin-top:10px;
    width: 500px; 
    font-weight: 600;
    text-align: center;
`

export const BoxControls = styled.div` 
    width: 500px;
    text-align: center;
`;

export const Button = styled.button(props => { 
        return ({
            background: shade(0.5, '#282828'),
            borderRadius: '10%',
            padding: '15px',
            margin: '10px 5px',
            border: '0',
            color: props.disabled ? shade(0.5, '#FFFFFF') : '#FFFFFF'
        });
    }   
);