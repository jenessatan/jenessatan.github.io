import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu"
import Menu from "./Menu"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <NavLogo to="/" aria-label="link to home page">
        JT
      </NavLogo>
      <BurgerMenu open={open} setOpen={setOpen} />
      <Menu open={open} />
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
  background: #0d0c1d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1850px) / 2);
  z-index: 100;
  position: relative;
  text-transform: uppercase;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 200;

  &:hover {
    box-shadow: 0 -0.5rem 0 inset #a9f9fe;
  }
`

const NavLogo = styled(NavLink)`
  font-weight: 600;
  font-size: 1.5rem;

  &:hover {
    box-shadow: 0 0rem 0 transparent;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
