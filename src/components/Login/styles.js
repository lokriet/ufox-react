import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
            transition: 'border-color 300ms ease-in',
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
        opacity: 0.7,
        color: '#fffffb',
        transition: 'all 300ms ease-in',
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(10,27,76,1) 0%, rgba(6,17,61,1) 100%)',
            opacity: 0.9,
            color: '#fffc96',
            animation: `$pulsate 3s ease-in-out infinite`
        },
        '& span': {
            opacity: 1,
            letterSpacing: 1,
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


