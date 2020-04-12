import React from 'react'
// Skills
import html5 from '../imgs/html5.png'
import css3 from '../imgs/css3.png'
import javascript from '../imgs/javascript.png'

import context from '../imgs/context.png'
import hooks from '../imgs/hooks.png'
import router from '../imgs/router.png'

import adobexd from '../imgs/adobe-xd.png'
import adobeps from '../imgs/adobe-ps.png'

import unity from '../imgs/unity.png'
import csharp from '../imgs/csharp.png'

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="skills__title">Skills</h1>
            <ul className="skills__list">
                <li className="skills__items skills__items--web">
                    <h3>Web Development Basics</h3>
                    <img src={html5} alt="html5"/>
                    <img src={css3} alt="css3"/>
                    <img src={javascript} alt="js"/>
                </li>
                <li className="skills__items skills__items--react">
                    <h3>React JS</h3>
                    <img src={context} alt="context"/>
                    <img src={hooks} alt="hooks"/>
                    <img src={router} alt="router"/>
                </li>
                <li className="skills__items skills__items--ui">
                    <h3>User Interface Design</h3>
                    <img src={adobeps} alt="adobeps"/>
                    <img src={adobexd} alt="adobexd"/>
                    <h4>Responsive Web Design</h4>
                </li>
                <li className="skills__items skills__items--mobileapp">
                    <h3>Mobile Application Development</h3>
                    <img src={unity} alt="unity"/>
                    <img src={csharp} alt="csharp"/>
                </li>
            </ul>
      </div>
    )
}

export default Skills
