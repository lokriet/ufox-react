import styled from 'styled-components';
import img from '../../assets/img/backgroundSky.png';

export const Background = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80% 100%;
    background-image: url(${img});
`;

export const LoginForm = styled.form`
    position: fixed;
    top: 30%;
    left: ${props => props.left};
    width: 300px;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
`;
