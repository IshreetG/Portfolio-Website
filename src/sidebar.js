import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ishreet2 from './Images/IMG_8031.jpg';
import linkedin from './Images/logolink.png';
import github from './Images/github.jpeg';
import instr from './Images/instructables.png';
import './App.css';

const Sidebar = () => {
  return (
    <Menu>
    <img id="author" src={ishreet2} alt = "author" />

    <a id="Ishreet">
        Ishreet Grewal
      </a>
      <a id="email"> ishreetgrewal2003@gmail.com </a>

      <a className="menu-item" href="/Home">
        Home
      </a>


      <a className="menu-item" href="/Resume">
        Resume
      </a>

      <a className="menu-item" href="/Projects">
        Projects 
      </a>

      <a className="menu-item" href="/About">
        About Me
      </a>

      <a href="https://www.linkedin.com/in/ishreet-grewal-2450b0225/" target="_blank" rel="noreferrer">
  <img id="link2" src={linkedin} />
</a>

<a href="https://github.com/IshreetG" target="_blank" rel="noreferrer"> 
  <img id="link1" src={github} />
</a>

<a href="https://www.instructables.com/member/ishreetgrewal1/?publicPreview=true" target="_blank" rel="noreferrer"> 
  <img id="link3" src={instr} />
</a>

    </Menu>

  );
};

export default Sidebar;

