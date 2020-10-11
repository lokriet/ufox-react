import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const inputClasses = makeStyles({
    root: {
        marginBottom: 30,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ddd6d370',
            transition: 'all 300ms ease-in',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fffc9680',
            boxShadow: '0px 0px 5px 1px rgba(255,255,250,0.3)'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fffc96',
            borderWidth: 1,
            boxShadow: '0px 0px 10px 4px rgba(255,252,150,0.5)',
            animation: 'unset'
        },

        '& .MuiFormLabel-root': {
            color: '#ddd6d3',
            fontFamily: 'Quicksand, sans-serif',
            transform: 'translate(14px, 15px) scale(1)',
            transition: 'color 300ms ease-in,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        '&:hover .MuiFormLabel-root': {
            color: '#fffc96'
        },
        '& .Mui-focused.MuiFormLabel-root': {
            color: '#fffc96',
            transform: 'translate(14px, -6px) scale(0.75)',
        },
        '& .MuiFormLabel-filled': {
            transform: 'translate(14px, -6px) scale(0.75)',
        },

        '& .MuiOutlinedInput-input': {
            color: '#fffffb',
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