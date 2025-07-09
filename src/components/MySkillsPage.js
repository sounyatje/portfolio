import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';

import TitanBackground from './TitanBackground';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import './MySkillsPage.css'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
z-index: 1;

 @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    padding-top: 2rem;
    gap: 1rem;
  }

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 85vh;
margin-top:100px;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

 @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
{/* <ParticleComponent theme='light' />  */}
            <Main>
<Title>
    <Design width={40} height={40}/> UX/UI
</Title>
 <Description>
I like to create interfaces that are practical and easy to use. Simplicity and functionality matter most to me.
</Description>

<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Websites in React with javascript or typescript
    </li>
    <li>
        Mobile Apps with React native and expo
    </li>
</ul>
</Description>
<Description>
  <strong>Tools</strong>
</Description>
<Description>
  <div className="tech-icons">
    <div className="tech-item">
    <i className="devicon-photoshop-plain tech-icon" title="Photoshop"> </i>
      <span className="tech-label">Photoshop</span>
    </div>
    <div className="tech-item">
      <i className="devicon-illustrator-plain tech-icon" title="Illustrator"></i>
      <span className="tech-label">Illustrator</span>
    </div>
    <div className="tech-item">
      <i className="devicon-figma-plain tech-icon" title="Figma"></i>
      <span className="tech-label">Figma</span>
    </div>
  </div>
</Description>


            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
{/* <Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description> */}
<Description>
<strong>Skills</strong>
<div className="tech-icons">
  <div className="tech-item">
    <i className="devicon-html5-plain tech-icon" ></i>
    <span className="tech-label">HTML5</span>
  </div>
  <div className="tech-item">
    <i className="devicon-css3-plain tech-icon" ></i>
    <span className="tech-label">CSS3</span>
  </div>
  <div className="tech-item">
    <i className="devicon-javascript-plain tech-icon" ></i>
    <span className="tech-label">JavaScript</span>
  </div>
  <div className="tech-item">
    <i className="devicon-typescript-plain tech-icon" ></i>
    <span className="tech-label">TypeScript</span>
  </div>
  <div className="tech-item">
    <i className="devicon-react-original tech-icon" ></i>
    <span className="tech-label">React</span>
  </div>
  <div className="tech-item">
    <i className="devicon-express-original-wordmark tech-icon" ></i>
    <span className="tech-label">Express.js</span>
  </div>
  <div className="tech-item">
    <i className="devicon-redux-original tech-icon" ></i>
    <span className="tech-label">Redux</span>
  </div>
  <div className="tech-item">
    <i className="devicon-sass-original tech-icon" ></i>
    <span className="tech-label">SASS</span>
  </div>
  <div className="tech-item">
  <i className="devicon-tailwindcss-plain tech-icon" ></i>

    <span className="tech-label">Tailwind</span>
  </div>
  <div className="tech-item">
    <i className="devicon-nodejs-plain tech-icon" ></i>
    <span className="tech-label">Node.js</span>
  </div>
  <div className="tech-item">
    <i className="devicon-docker-plain tech-icon" ></i>
    <span className="tech-label">Docker</span>
  </div>
  <div className="tech-item">
    <i className="devicon-jest-plain tech-icon" ></i>
    <span className="tech-label">Jest</span>
  </div>
  <div className="tech-item">
  <i className="devicon-mongodb-plain tech-icon" ></i>
  <span className="tech-label">MongoDB</span>
</div>
<div className="tech-item">
  <i className="devicon-wordpress-plain tech-icon" ></i>
  <span className="tech-label">WordPress</span>
</div>

</div>

</Description>
<Description>
<strong>Tools</strong>

<div className="tech-icons">
  <div className="tech-item">
    <i className="devicon-vscode-plain tech-icon" ></i>
    <span className="tech-label">VSCode</span>
  </div>
  <div className="tech-item">
    <i className="devicon-github-original tech-icon" ></i>
    <span className="tech-label">GitHub</span>
  </div>
  <div className="tech-item">
    <i className="devicon-codepen-plain tech-icon" ></i>
    <span className="tech-label">Codepen</span>
  </div>
  <div className="tech-item">
  <i className="devicon-git-plain tech-icon"></i>
  <span className="tech-label">Git</span>
</div>
</div>


<TitanBackground/>


</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
