import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/" aria-label="link to home page">
        JT
      </NavLogo>
      <NavMenu>
        <NavLink to="/about" aria-label="link to about page">
          About
        </NavLink>
        <NavLink to="/projects" aria-label="link to projects page">
          Projects
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLogo = styled(Link)`
  color: #fff;
  font-weight: 600;
  font-size: 2em;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
