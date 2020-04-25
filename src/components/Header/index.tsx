import React, { useState } from 'react';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  menuSelected?: number;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  menuSelected = 1,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <StyledLink selected={menuSelected === 1} to="/">
            Listagem
          </StyledLink>
          <StyledLink selected={menuSelected === 2} to="/import">
            Importar
          </StyledLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
