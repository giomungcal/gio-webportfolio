import React from 'react'

import profilephoto from '../imgs/profile-photo.png'
import hi from '../imgs/hi.png'

import resume from '../downloadable/GioMungcal-CV.pdf'

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero__photo" src={profilephoto} alt="profilephoto"/>
            <div className="hero__header">
                <img className="hero__hi" src={hi} alt="hi"/>
                <h2 className="hero__name">gio mungcal</h2>
                <p className="hero__desc">I am a graduating student who wants to pursue my passion, eager to hone <span>front-end</span> web development, <span>UI</span> designing , and <span>project management</span> skills as early as possible in order to contribute to my fullest potential in any organization that I will join.
                </p>
                <ul className="hero__btnlist">
                <a href="#projects"><li className="hero__btn hero__btn--projects" href="#">projects</li></a>
                <a href={resume} download="GioMungcal-CV"><li className="hero__btn hero__btn--resume" href="#">resume</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Hero
