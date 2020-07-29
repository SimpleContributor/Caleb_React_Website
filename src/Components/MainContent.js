import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 250px 200px 100px 100px;
    padding-bottom: 100px;
    width: 100vw;

    h1{
        grid-column-start: 1;
        grid-column-end: 1;
        margin: 30px;
        width:85%;
    }

    p{
        grid-column-start: 2;
        grid-column-end: 3;
        margin-left: 50px;
        padding: 30px;
        width: 90%;
    }

    .button-link{
        grid-column-start: 1;
        grid-column-end: 2;
    }

`

class MainContent extends Component {
    render() {
        return (
            <StyledWrapper>
                <h1>Welcome to my website!</h1>
                <p>My name is Caleb. I have been a carpenter for 8 years, but I have always been drawn to development. 
                    Starting in August 2019, I began learning programming. </p>
                <Link class="button-link" to="/Projects">
                    <button type="button">Projects</button>
                </Link>
                <Link class="button-link" to="/Contact">
                    <button type="button">Contact</button>
                </Link>
                
            </StyledWrapper>
        )
    }
}

export default MainContent;
