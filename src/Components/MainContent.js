import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: #89be9c;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 200px 200px;
    padding-bottom: 100px;
    width: 100vw;

    div.intro-container{
        grid-column-start: 1;
        grid-column-end: 3;
    }

    h1{
        margin: 30px;
        width:85%;
    }

    p{
        margin-left: 30px;
        padding: 30px 0;
        width: 65%;
    }

    .project-link,
    .contact-link{
        background-color: #99e9ff;
        border: 2px solid black;
        border-radius: 10px;
        color: #000;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 80%;
        margin-left: 30px;
        text-decoration: none;
        width: 90%;
    }

    div.button{
        align-items: center;
        display: grid;
        font-size: 2rem;
        height: 100%;
        justify-items: center;
        width: 100%;
    }

`

class MainContent extends Component {
    render() {
        return (
            <StyledWrapper>
                <div className="intro-container">
                    <h1>Welcome to my website!</h1>
                    <p>My name is Caleb. I have been a carpenter for 8 years, but I have always been drawn to development. 
                    Starting in August 2019, I began learning programming. </p>
                </div>
                <Link class="project-link" to="/Projects">
                    <div className="button">Projects</div>
                </Link>
                <Link class="contact-link" to="/Contact">
                    <div className="button">Contact</div>
                </Link>
                
            </StyledWrapper>
        )
    }
}

export default MainContent;
