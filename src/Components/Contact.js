import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import MessageForm from './MessageForm';

const ContactWrapper = styled.div`
    display: grid;
    grid-template-rows: 120px 90vh;
    min-height: 100vh;
    overflow-x: hidden;
    width: 99vw;

    @media (max-width: 768px){

    }

    
`

const Contact = () => {

        return (
            <>
                <ContactWrapper>
                    <Navbar />
                    <MessageForm />
                </ContactWrapper>
            </>
        )
    
}

export default Contact;
