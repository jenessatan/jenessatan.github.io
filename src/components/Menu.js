import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/about" aria-label="link to about page">
        About
      </Link>
      <Link to="/projects" aria-label="link to projects page">
        Projects
      </Link>
    </StyledMenu>
  )
}
export default Menu

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: 100vh;
  text-align: center;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "5" : "-500")};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 4rem 1rem 0 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    box-shadow: 0 0 0 transparent;
    width: fit-content;

    &:hover {
      box-shadow: 0 -1.25rem 0 inset #a9f9fe;
    }
  }
`
