import React, { useEffect, useRef, useState } from 'react';
import { Background, LoginButton, LoginForm, LoginInput } from './styles';

const backgroundImageDimensions = {
    width: 1000,
    height: 563,
    ratio: 1000 / 563
};

const calculateFormLeft = backgroundElement => {
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

const Login = () => {
    const [formLeft, setFormLeft] = useState('60%');
    const backgroundRef = useRef();

    useEffect(() => {
        setFormLeft(calculateFormLeft(backgroundRef.current));

        window.addEventListener('resize', () => setFormLeft(calculateFormLeft(backgroundRef.current)));
    }, []);

    return (
        <Background ref={ backgroundRef }>
            <LoginForm left={ formLeft }>
                <LoginInput label="Login" />
                <LoginInput label="Password" />
                <LoginButton>Enter</LoginButton>
            </LoginForm>
        </Background>
    );
};

Login.propTypes = {};

export default Login;
