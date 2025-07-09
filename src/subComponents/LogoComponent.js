import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import logoDark from '../assets/Images/logo-sa-dark.png';
import logoLight from '../assets/Images/logo-sa-light.png';




const Logo = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;

  img {
    width: 70px;
    height: auto;
  }
`;

const LogoComponent = ({ theme }) => {
  const logo = theme === 'dark' ? logoLight : logoDark;

  return (
    <Logo>
      <img src={logo} alt="SA Logo" />
    </Logo>
  );
};

export default LogoComponent
