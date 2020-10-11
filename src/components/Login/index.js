import React, { useEffect, useRef, useState } from 'react';
import {
    calculateFormLeft,
    Background,
    LoginButton,
    LoginForm,
    LoginInput,
    StyledParticles as Particles
} from './styles';
import Link from '../shared/Link';

const Login = () => {
    const [formLeft, setFormLeft] = useState('60%');
    const backgroundRef = useRef();

    useEffect(() => {
        setFormLeft(calculateFormLeft(backgroundRef.current));
        window.addEventListener('resize', () => setFormLeft(calculateFormLeft(backgroundRef.current)));
    }, []);

    return (
        <>
            <Background ref={ backgroundRef }>
                <Particles />
                <LoginForm left={ formLeft }>
                    <LoginInput label="Login" />
                    <LoginInput label="Password" type="password" />
                    <Link to="/dashboard" noUnderline>
                        <LoginButton>Enter</LoginButton>
                    </Link>
                </LoginForm>
            </Background>
        </>
    );
};

export default Login;
