import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';

import backgroundImage from '../assets/Images/background2.jpg'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), 
            url(${backgroundImage}) center center / cover no-repeat;

`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
  position: absolute;
  top: 10%; /* ajuste selon besoin */
  right: 3%;
  width: 500px;  // 🔁 augmente ici
  height: auto;

  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
    @media (max-width: 768px) {
   top:55%;
   left50%;
     width: 75%;  // 🔁 augmente ici
  height: auto;
  }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 768px) {
   
     width: 80%;  // 🔁 augmente ici
  height:35%;
  top:20%;
  left:10%;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
{/* <ParticleComponent theme='dark' /> */}

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
<Main>
  I'm a front-end developer based in Belgium. I enjoy building functional websites with a focus on performance and usability.  

  I'm curious by nature and always eager to learn new tools and technologies in the frontend ecosystem. I like to work on meaningful projects and continuously improve my skills.  
  
  Outside of coding, I enjoy watching anime — especially Attack on Titan, which is my favorite — as well as reading, training, and discovering new places when I travel.  
  
  Feel free to reach out through my social links.
</Main>


        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
