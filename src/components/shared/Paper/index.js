import React from 'react';
import styled from 'styled-components';

const Paper = styled.div`
    background: radial-gradient(circle, rgba(10,27,76,0.8) 0%, rgba(6,17,61,0.8) 100%);
    border-radius: 4px;
    box-shadow: 2px 2px 3px 2px #2d6da880;
    padding: 20px;
    margin: 20px auto;
    width: 80%;
    max-width: 600px;
    position: relative;

    ${props => props.extraStyles }
`;

const FrostedGlass = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    backdrop-filter: blur(3px);
`;

export default ({ children, ...otherProps }) => (
    <Paper { ...otherProps }>
        <FrostedGlass />
        { children }
    </Paper>
)