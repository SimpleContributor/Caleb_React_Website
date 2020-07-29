import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Img/c-logo.png';
import Menu from './Menu';
import styled from 'styled-components';

const StyledNav = styled.div`
    align-items: center;
    background-color: wheat;
    display: grid;
    grid-template-columns: 120px auto;
    height: 120px;

    &:nth-child(1){
        justify-items: end;
    }

    .img-link{
        align-items: center;
        display: grid;
        height: 120px;
        justify-items: center;
    }

    .logo-img{
        height: 100px;
    }
`;

//navbar
class Navbar extends Component {
    render() {
        return (
            <StyledNav>
                <Link to="/Caleb_React_Website" className="img-link">
                    <img alt="Letter C logo" className="logo-img" src={Logo}></img>
                </Link>
                <Menu />
            </StyledNav>
        )
    }
}

export default Navbar;
