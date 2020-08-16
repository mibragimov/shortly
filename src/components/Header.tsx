import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from 'styled-components';

import { CustomButton } from './button/CustomButton';

const StyledBrand = styled(NavbarBrand)`
  font-size: 2.35rem;
  font-weight: 700;
  color: hsl(260, 8%, 14%) !important;
`;
const StyledLink = styled(NavLink)`
  font-weight: 500;
  &:hover {
    color: hsl(260, 8%, 14%);
  }
  @media only screen and (max-width: 992px) {
    color: #fff !important;
  }
`;

const StyledNav = styled(Nav)`
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 992px) {
    background-color: hsl(257, 27%, 26%);
    border-radius: 5px;
    padding: 2rem 0;
  }
`;

const StyledNavItem = styled(NavItem)`
  margin-left: auto;
  margin-right: 1rem;
  @media only screen and (max-width: 992px) {
    margin: 0.7rem 0;
    padding-top: 0.7rem;
    border-top: 1px solid hsla(225, 33%, 95%, 0.34);
    width: 90%;
    text-align: center;

    & > * {
      color: #fff !important;
    }
  }
`;

const Header = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light expand="lg" className="px-0">
      <StyledBrand href="/">Shortly</StyledBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <StyledNav navbar>
          <NavItem>
            <StyledLink href="/components/">Features</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="/">Pricing</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href="/">Resources</StyledLink>
          </NavItem>
          <StyledNavItem>
            <CustomButton color="faded">Login</CustomButton>
          </StyledNavItem>
          <NavItem>
            <CustomButton color="primary">Sign Up</CustomButton>
          </NavItem>
        </StyledNav>
      </Collapse>
    </Navbar>
  );
};

export { Header };
