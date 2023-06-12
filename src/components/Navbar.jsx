import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

//Narvar styles
const NavbarContainer = styled.nav`
    height: 10vh;
    background-color : gray;
    display: flex;
    justify-content : center;
    align-items : center;

    > .nav-link {
    margin : 1rem;
    color: white;
    text-decoration : none;

    &:hover {
      color: blue;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Genre" className="nav-link">Genre</Link>
    </NavbarContainer>
  )
}
