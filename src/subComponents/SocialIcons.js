import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, LinkedIn } from "../components/AllSvgs"; // Ajoute LinkedIn ici
import { DarkTheme } from "../components/Themes";
import { Vercel } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>

<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: [0, 1, 1.5, 1] }}
  transition={{ type: "spring", duration: 1, delay: 1.8 }}
>
  <a
    style={{ color: "inherit" }}
    target="_blank"
    href="https://vercel.com/sounyas-projects"
  >
    <Vercel
      width={25}
      height={25}
      fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
    />
  </a>
</motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/sounyatje"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://linkedin.com/in/sounya-abattouy"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
