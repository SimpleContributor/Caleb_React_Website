import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: lightblue;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100vw;



`

const Footer = () => {

    return (
        <>
            <StyledFooter>
                <h1>I am footer</h1>
            </StyledFooter>
        </>
    ) 
}

export default Footer;