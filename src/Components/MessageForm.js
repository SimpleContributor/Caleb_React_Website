import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`

    background-color: #89BE9C;
    display: grid;
    grid-template-rows: 150px 900px;
    padding-left: 10%;
    min-width: 98%;

    div.contact-heading{
        margin-top: 30px;
    }

    div.contact-heading h1{
        font-size: 2.3rem;
    }

    div.contact-heading p,
    label p{
        font-size: 1.6rem;
    }


    form.contact-form{
        background-color: #62a87c;
        border-radius: 10px;
        display: grid;
        grid-template-rows: 1fr 1fr 2fr 1fr;
        height: 50%;
        justify-items: center;
        padding: 20px;
        width: 800px;

        @media (max-width: 1000px){
            width: 75%;
        }
    }

    form.contact-form div{
        display: grid;
        padding-left: 20px;
        width: 100%;
    }

    label{
        width: 80%;
    }

    label p{
        padding-bottom: 5px;
    }


    input,
    textarea{
        border: 1px solid #000;
        border-radius: 8px;
        background-color: #70e0ff;
        box-sizing: border-box;
        outline: none;
        padding: 10px;
        width: 100%;
    }

    textarea{
        height: 70%;
        resize: none;
    }
    

    div.submit-button button{
        align-self: end;
        background-color: #70e0ff;
        border: 1.5px solid #000;
        border-radius: 8px;
        font-size: 1.2rem;
        height: 65px;
        margin-bottom: 10px;
        width: 80%;
    }
`

const MessageForm = () => {

    return (
        <>
                    <FormContainer className="contact-container">
                        <div className="contact-heading">
                            <h1>Want to tell me a secret?</h1>
                            <p>Fill out this form to send me an email!</p>
                            <p>Or send one directly to calebcoecode@gmail.com.</p>
                        </div>
                        <form action="submit" className="contact-form">
                            <div className="contact-name"> 
                                <label for="name">
                                    <p>Name:</p>
                                    <input placeholder="What is your name?" type="text" required></input>
                                </label>
                            </div>
                            <div className="contact-email"> 
                                <label for="email">
                                    <p>Email:</p>
                                    <input placeholder="What is your email?" type="email" required></input>
                                </label>
                            </div>
                            <div className="contact-message"> 
                                <label for="name">
                                    <p>Message:</p>
                                    <textarea placeholder="Enter your message here" required></textarea>
                                </label>
                            </div>
                            <div className="submit-button">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </FormContainer>
        </>
    )
}

export default MessageForm;
