import styled from 'styled-components';
import BgImage from '../assets/img/bg.png';

export const Container = styled.div`
    background-color: ${props => props.theme.mainBackground};
    min-height: 100vh;
    background-image: url(${BgImage});
    font-size: 30px;
    color: white;
`