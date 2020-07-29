import React, { Component } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';
import styled from 'styled-components';

const Homepage = styled.div`
    background-color: lightgray;
    display: grid;
    grid-template-rows: 120px 100vh 100px;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;

    div.main-content{
        
    }


`;

//home-page
class Home extends Component {
    render() {
        return (
            <Homepage>
                <Navbar />
                <MainContent />
                <Footer />
            </Homepage>
        )
    }
}

export default Home;