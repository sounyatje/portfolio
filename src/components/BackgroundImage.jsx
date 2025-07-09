// src/components/BackgroundImage.jsx
import React from 'react'
import styled from 'styled-components'
import background1 from '../assets/Images/background1.jpg'

const Bg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${background1});
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 0;
`;

export default Bg;
