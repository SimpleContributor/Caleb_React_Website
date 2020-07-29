import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Placeholder from './Img/placeholder-img.jpg';
import FCCTribute from './Img/FCCTribute.png';
import FCCSurvey from './Img/FCCSurvey.png';
import FCCLandingPage from './Img/FCCLandingPage.png';
import GuessingGame from './Img/JSGuessGame.png';

const ProjectsWrapper = styled.div`
    background-color: lightgray;
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
        background-color: gray;
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
                        <div className="project project0">
                            <img className="project-tile" src={Placeholder}></img>
                        </div>

                        <div className="project project1">
                            <img className="project-tile" src={Placeholder}></img>
                        </div>

                        <div className="project project2">
                            <img className="project-tile" src={Placeholder}></img>
                        </div>

                        <div className="project project3">
                            <img className="project-tile" src={Placeholder}></img>
                        </div>

                        <div className="project project4">
                            <img className="project-tile" src={Placeholder}></img>
                        </div>

                        <div className="project project5">
                            <a href="https://calebcoe.bitbucket.io/"
                                target="_blank">
                                <img className="project-tile" src={GuessingGame}></img>
                                <p>JavaScript Guessing Game</p>
                            </a>
                            
                        </div>

                        <div className="project project6">
                            <a href="https://codepen.io/UsernameChosen/pen/eYJPOMj?editors=0110"
                                target="_blank">
                                <img className="project-tile" src={FCCLandingPage}></img>
                                <p>FCC Landing Page</p>
                            </a>
                        </div>

                        <div className="project project7">
                            <a href="https://codepen.io/UsernameChosen/pen/ExPQNPN?editors=0100"
                                target="_blank">
                                <img className="project-tile" src={FCCSurvey}></img>
                                <p>FCC Survey Form</p>
                            </a> 
                        </div>

                        <div className="project project8">
                            <a href="https://codepen.io/UsernameChosen/pen/OJMxbrW?editors=0100"
                                target="_blank">
                                <img className="project-tile" src={FCCTribute}></img>
                                <p>FCC Tribute Page</p>
                            </a>
                        </div>
                    </div>
  
                <Footer />
            </ProjectsWrapper>
        </>
        )
}

export default Projects;
