import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Yellow, White } from '../../../constants/colors';

const inputClasses = makeStyles({
    root: {
        marginBottom: 30,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ddd6d370',
            transition: 'all 300ms ease-in',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${Yellow}80`,
            boxShadow: '0px 0px 5px 1px rgba(255,255,250,0.3)'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: Yellow,
            borderWidth: 1,
            boxShadow: '0px 0px 10px 4px rgba(255,252,150,0.5)',
            animation: 'unset'
        },

        '& .MuiFormLabel-root': {
            color: White,
            fontFamily: 'Quicksand, sans-serif',
            transform: 'translate(14px, 15px) scale(1)',
            transition: 'color 300ms ease-in,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        '&:hover .MuiFormLabel-root': {
            color: Yellow
        },
        '& .Mui-focused.MuiFormLabel-root': {
            color: Yellow,
            transform: 'translate(14px, -6px) scale(0.75)',
        },
        '& .MuiFormLabel-filled': {
            transform: 'translate(14px, -6px) scale(0.75)',
        },

        '& .MuiOutlinedInput-input': {
            color: White,
            fontFamily: 'Quicksand, sans-serif',
            padding: 14,
            transition: 'background 300ms ease-in'
        },
        '& .Mui-focused .MuiOutlinedInput-input': {
            background: 'linear-gradient(90deg, rgba(10,27,76,0.7) 0%, rgba(6,17,61,0.7) 100%)',
        }
    }
});

export default ({ ...otherProps }) => {
    const classes = inputClasses();
    return <TextField classes={ classes } variant="outlined" { ...otherProps } />;
};