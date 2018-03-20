import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const Container = styled.div`
  background-color: white;
`;

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.75rem 1.0875rem;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 120px;
  margin: 10px 0px 0px 0px;
`;

const Menu = styled.ul`
  font-weight: 300;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin: 0px 20px;

  :hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <Container>
    <Wrap>
      <Left>
        <Link to="/">
          <Logo alt="Tikiphee" src={logo} />
        </Link>
      </Left>
      <Menu>
        <li>
          <MenuLink to="#services">Servicios</MenuLink>
        </li>
        <li>
          <MenuLink to="#clients">Clientes</MenuLink>
        </li>
        <li>
          <MenuLink to="#contact">Contacto</MenuLink>
        </li>
      </Menu>
    </Wrap>
  </Container>
);

export default Header
