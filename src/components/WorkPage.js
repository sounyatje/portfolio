import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import loadingIcon from '../assets/Images/loading-icon.png';
import backgroundImage from '../assets/Images/background.jpg';

import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 200vh;
  position: relative;
  display: flex;
  align-items: center;
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
            url(${backgroundImage}) center center / cover no-repeat;

`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  @media (max-width: 768px) {
  min-height:150vh;
  display: flex;
  position:absolute;
  flex-direction: column;
  align-items: center; /* pour centrer horizontalement */
   left: 15%;
  gap: 2rem; /* espacement entre les cards */
  padding: 0 1rem;

}
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(() => {
    let element = ref.current;
  
    const rotate = () => {
      if (window.innerWidth > 768) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
        yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
      } else {
        element.style.transform = "none";
        yinyang.current.style.transform = "none";
      }
    };
  
    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
        <motion.img
  src={loadingIcon}
  alt="loading-icon"
  style={{ width: 80, height: 80 }}
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
/>

</Rotate>


        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
