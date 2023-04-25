import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavbarLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    margin-top:20px;
    margin-left:8px;
    justify-content:cemter;
    align-items:center;
    top: 64px;
    left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
    width:96.5%;
    background-color: #333;
    transition: all 0.3s ease;
  }
`;

const NavbarLink = styled.li`
  margin-left: 1rem;

  & > a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavbarBurger = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarLogo to="/">My App</NavbarLogo>
      <NavbarBurger onClick={toggleMenu}>{isOpen ? '✕' : '☰'}</NavbarBurger>
      <NavbarLinks isOpen={isOpen}>
        <NavbarLink>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="/task" onClick={toggleMenu}>
            Tasks
          </Link>
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
