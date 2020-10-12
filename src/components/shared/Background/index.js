import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import img from 'assets/img/starsBackground.jpg';

const BackgroundImage = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-image: url(${img});
    z-index: -2;
`;

const nightSkyParticlesSetup = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1500
            }
        },
        links: {
            enable: true,
            opacity: 0.2,
            distance: 50,
        },
        move: {
            direction: "right",
            speed: 0.2
        },
        size: {
            value: 3,
            random: true,
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
            }
        }
    },
    retina_detect: true
}

const particlesStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '70%',
    zIndex: -1
}

export default ({ children }) => (
    <>
        <BackgroundImage />
        <Particles
            style={ particlesStyle }
            options = { nightSkyParticlesSetup }
        />
        { children }
    </>
);
