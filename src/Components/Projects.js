import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import FCCTribute from './Img/FCCTribute.png';
import FCCSurvey from './Img/FCCSurvey.png';
import FCCLandingPage from './Img/FCCLandingPage.png';
import GuessingGame from './Img/JSGuessGame.png';

const ProjectsWrapper = styled.div`
    background-color: #89BE9C;
    display: grid;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    max-width: 100vw;

    div.project-grid{
        align-items: center;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(3, 350px);
        grid-template-rows: repeat(3, 350px);
        min-height: 130vh;
        justify-items: center;
        justify-self: center;
        margin-top: 50px;
        padding-bottom: 100px;

    }

    div.project{
        background-color: #99E9FF;
        border-radius: 10px;
        padding: 10px;
    }

    div.project a{
        color: #000;
        text-decoration: none;
    }

    img.project-tile{
        border: 2px solid #000;
        border-radius: 10px;
        cursor: pointer;
        height: 300px;
    }

    p{
        text-align: center;
    }

`

const Projects = () => {

    return (
        <>
            <ProjectsWrapper>
                <Navbar />
        
                    <div className="project-grid">


                        <div className="project project5">
                            <a href="https://calebcoe.bitbucket.io/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img alt="JavaScript Guessing Game" className="project-tile" src={GuessingGame}></img>
                                <p>JavaScript Guessing Game</p>
                            </a>
                            
                        </div>

                        <div className="project project6">
                            <a href="https://codepen.io/UsernameChosen/pen/eYJPOMj?editors=0110"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img alt="A landing page template for Free Code Camp" className="project-tile" src={FCCLandingPage}></img>
                                <p>FCC Landing Page</p>
                            </a>
                        </div>

                        <div className="project project7">
                            <a href="https://codepen.io/UsernameChosen/pen/ExPQNPN?editors=0100"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img alt="A survey form template for Free Code Camp" className="project-tile" src={FCCSurvey}></img>
                                <p>FCC Survey Form</p>
                            </a> 
                        </div>

                        <div className="project project8">
                            <a href="https://codepen.io/UsernameChosen/pen/OJMxbrW?editors=0100"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img alt="Tribute Page to Nikola Tesla for Free Code Camp" className="project-tile" src={FCCTribute}></img>
                                <p>FCC Tribute Page</p>
                            </a>
                        </div>
                    </div>
            </ProjectsWrapper>
        </>
        )
}

export default Projects;
