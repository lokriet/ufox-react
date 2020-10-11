import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Particles from 'react-tsparticles';
import img from '../../assets/img/backgroundSky.jpg';

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

const backgroundImageDimensions = {
    width: 1000,
    height: 563,
    ratio: 1000 / 563
};

export const calculateFormLeft = backgroundElement => {
    if (backgroundElement) {
        const screenRect = backgroundElement.getBoundingClientRect();
        const imageScaleFactor = Math.min(backgroundImageDimensions.width / screenRect.width, backgroundImageDimensions.height / screenRect.height);
        const imageWidth = backgroundImageDimensions.width / imageScaleFactor;
        const moonMiddleOnImage = imageWidth * 0.72;
        const backgroundCutOffOnTheLeft = 0.8 * (imageWidth - screenRect.width);
        const formLeft = Math.round(moonMiddleOnImage - backgroundCutOffOnTheLeft);

        return `${formLeft}px`;
    }
    return '60%';
};

export const LoginForm = styled.form`
    position: fixed;
    top: 30%;
    left: ${props => props.left};
    width: 300px;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    @media (max-width: 500px) {
        left: 50%;
        width: 80%;
    }
`;

const inputClasses = makeStyles({
    root: {
        marginBottom: 30,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ddd6d370',
            transition: 'all 300ms ease-in',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fffc9680',
            animation: `$pulsate 3s ease-in-out infinite`
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fffc96',
            borderWidth: 1,
            boxShadow: '0px 0px 10px 4px rgba(255,252,150,0.5)',
            animation: 'unset'
        },

        '& .MuiFormLabel-root': {
            color: '#ddd6d3',
            transition: 'color 300ms ease-in,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        '&:hover .MuiFormLabel-root': {
            color: '#fffc96'
        },
        '& .Mui-focused.MuiFormLabel-root': {
            color: '#fffc96'
        },

        '& .MuiOutlinedInput-input': {
            color: '#fffffb',
            transition: 'background 300ms ease-in'
        },
        '& .Mui-focused .MuiOutlinedInput-input': {
            background: 'linear-gradient(90deg, rgba(10,27,76,0.7) 0%, rgba(6,17,61,0.7) 100%)',
        }
    },
    "@keyframes pulsate": {
        "0%": {
            boxShadow: '0px 0px 5px 1px rgba(255,255,250,0.3)'
        },
        "50%": {
            boxShadow: '0px 0px 20px 6px rgba(255,252,150,1)'
        },
        "100%": {
            boxShadow: '0px 0px 5px 1px rgba(255,255,250,0.3)'
        },
    }
});

export const LoginInput = ({ ...otherProps }) => {
    const classes = inputClasses();
    return <TextField classes={ classes } variant="outlined" { ...otherProps } />;
};

const buttonClasses = makeStyles({
    root: {
        background: 'linear-gradient(90deg, rgba(10,27,76,1) 0%, rgba(6,17,61,1) 100%)',
        color: '#fffffb',
        opacity: 0.7,
        transition: 'all 300ms ease-in',
        width: '100%',
        '&:hover': {
            animation: `$pulsate 3s ease-in-out infinite`,
            background: 'linear-gradient(90deg, rgba(10,27,76,1) 0%, rgba(6,17,61,1) 100%)',
            color: '#fffc96',
            opacity: 0.9,
        },
        '& span': {
            letterSpacing: 1,
            opacity: 1,
        },
    },
    "@keyframes pulsate": {
        "0%": {
            textShadow: '0 0 20px #fffc96'
        },
        "50%": {
            textShadow: '0 0 6px #fffc96'
        },
        "100%": {
            textShadow: '0 0 20px #fffc96'
        },
    }
});


export const LoginButton = ({ ...otherProps }) => {
    const classes = buttonClasses();
    return <Button
        classes={ classes }
        disableElevation
        disableRipple
        variant="contained"
        { ...otherProps } />;
};

export const StyledParticles = () => (
    <Particles
        style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }}
        options={{
            fpsLimit: 60,
            interactivity: {
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                },
            },
            particles: {
                color: {
                    value: "#fffc96",
                },
                shadow: {
                    blur: 20,
                    color: {
                        value: "#fffc96"
                    },
                    enable: true,
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                links: {
                    enable: false,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    enable: true,
                    random: true,
                    speed: 1,
                    direction: "top",
                    out_mode: "out"
                },
                number: {
                    density: {
                    enable: false,
                    },
                    value: 100,
                },
                opacity: {
                    random: true,
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 15,
                },
            },
            detectRetina: true,
        }}
    />
);
