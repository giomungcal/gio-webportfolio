import React from 'react'

import idpic from '../imgs/idpic.png'
import fb from '../imgs/fb.png'
import linkedin from '../imgs/linkedin.png'
import github from '../imgs/github.png'
import gmail from '../imgs/gmail.png'

const About = () => {
    return (
        <div className="about" id="about">
            <img className="about__photo" src={idpic} alt="idpic"/>
            <div className="about__info">
            <h1 className="about__name">Giomar C. Mungcal</h1>
            <h3 className="about__school">BS Computer Engineering<br />Pamantasan ng Lungsod ng Maynila</h3>
            <ul className="about__list">
                <li className="about__links"><a href="https://www.messenger.com/t/gio.mungcal" target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb"/></a></li>
                <li className="about__links"><a href="https://www.linkedin.com/in/giomungcal" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a></li>
                <li className="about__links"><a href="https://github.com/giomungcal" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a></li>
                <li className="about__links"><a href="mailto:gcmungcal@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="gmail"/></a></li>
            </ul>
            </div>
        </div>
    )
}

export default About
