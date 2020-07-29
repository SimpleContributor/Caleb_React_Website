import React, { useState } from 'react';
import styled from 'styled-components';
import MenuNav from './MenuNav';

const StyledBurger = styled.div`
    width: 60px;
    height: 60px;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 30;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        flex-flow: column nowrap;
    }

    div{
        width: 60px;
        height: 8px;
        background-color: ${({ open }) => open ? '#000' : '#000'};
        border-radius: 10px;
        transform-origin: 8px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg) translateX(25%)' : 'rotate(0)'};
        }

        
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg) translateX(25%)' : 'rotate(0)'}
        }
    }
`;


const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <MenuNav open={open}/>
        </>
    )
}

export default Menu;