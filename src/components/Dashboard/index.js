import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import Link from '../shared/Link';
import Background from '../shared/Background';
import Paper from '../shared/Paper';
import Input from '../shared/Input';
import { ReactComponent as EggIcon }  from '../../assets/img/eggIcon.svg';

const NewWikiButton = styled.button`
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0;
    outline: none;

    &:hover svg {
        fill: #fffc96 !important;
        filter: drop-shadow( 0px 0px 5px #fffc96aa);
    }

    & span {
        transition: color 300ms ease-in;
    }

    &:hover span {
        color: #fffc96;
    }

    ${props => props.extraStyles }
`;

const Text = styled.p`
    margin: 0 0 30px 0;
`;

const eggIconStyle = {
    fill: 'white',
    width: 32,
    height: 32,
    marginRight: 10,
};

const NewWikiForm = styled.div`
    display: flex;
    align-items: flex-start;
`;

const newWikiFormInputStyle = {
    flexGrow: 1
};

const newWikiFormButtonStyle = `
    margin: 8px 0 0 20px;
`;

const newWikiFormPaperStyle = `
    padding: 30px 20px 0 20px;
`;

const Dashboard = () => {
    const [showNewWikiPaper, setShowNewWikiPaper] = useState(false);

    return (
        <Background>
            <Link to="/login">login</Link>
            <Collapse in={ !showNewWikiPaper } timeout={ 1000 }>
                <Paper>
                    <Text>You have no wikis :(</Text>
                    <NewWikiButton onClick={ () => setShowNewWikiPaper(!showNewWikiPaper) }>
                        <EggIcon style={ eggIconStyle} />
                        <span>Create one</span>
                    </NewWikiButton>
                </Paper>
            </Collapse>

            <Collapse in={ showNewWikiPaper } timeout={ 1000 }>
                <Paper extraStyles={ newWikiFormPaperStyle }>
                    <NewWikiForm>    
                        <Input label="New Wiki Name" style={ newWikiFormInputStyle } />
                        <NewWikiButton extraStyles={ newWikiFormButtonStyle }>
                            <EggIcon style={ eggIconStyle} />
                            <span>Get Started</span>
                        </NewWikiButton>
                    </NewWikiForm>
                </Paper>
            </Collapse>
        </Background>
    );
};

export default Dashboard;
