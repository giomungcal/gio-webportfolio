import React from 'react';

//Header
import hamburger from './imgs/hamburger.png'

// Hero
import profilephoto from './imgs/profile-photo.png'
import hi from './imgs/hi.png'

//Hover
import hover from './imgs/hover.png'

// Skills
import html5 from './imgs/html5.png'
import css3 from './imgs/css3.png'
import javascript from './imgs/javascript.png'

import context from './imgs/context.png'
import hooks from './imgs/hooks.png'
import router from './imgs/router.png'

import adobexd from './imgs/adobe-xd.png'
import adobeps from './imgs/adobe-ps.png'

import unity from './imgs/unity.png'
import csharp from './imgs/csharp.png'

//Projects
import ekimgs from './imgs/ekimgs.png'
import cedulaimgs from './imgs/cedulaimgs.png'

import ektitle from './imgs/ek-title.png'
import cedulatitle from './imgs/cedula-title.png'
import portfoliotitle from './imgs/portfolio-title.png'

//About
import idpic from './imgs/idpic.png'
import fb from './imgs/fb.png'
import linkedin from './imgs/linkedin.png'
import github from './imgs/github.png'
import gmail from './imgs/gmail.png'


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <h1 className="header__title">gio-portfolio</h1>
          <nav className="header__nav">
            <a className="header__hamburger hide-desktop" href="#"><img src={hamburger} alt="hamburger"/></a>
            <ul className="header__list show-desktop hide-mobile">
              <li className="hide-desktop"><a href="#">X</a></li>
              <li className="header__link header__link--active"><a href="#">home</a></li>
              <li className="header__link"><a href="#">skills</a></li>
              <li className="header__link"><a href="#">projects</a></li>
              <li className="header__link"><a href="#">about</a></li>
            </ul>
          </nav>
        </div>
  
        <div className="hero">
          <img className="hero__photo" src={profilephoto} alt="profilephoto"/>
          <div className="hero__header">
            <img className="hero__hi" src={hi} alt="hi"/>
            <h2 className="hero__name">gio mungcal</h2>
            <p className="hero__desc">I am a graduating student who wants to pursue my passion, eager to hone <span>front-end</span> web development, <span>UI</span> designing , and <span>project management</span> skills as early as possible in order to contribute to my fullest potential in any organization that I will join.
            </p>
            <ul className="hero__btnlist">
              <li className="hero__btn hero__btn--active" href="#">resume</li>
              <li className="hero__btn" href="#">projects</li>
            </ul>
          </div>
        </div>

        <img className="hover hide hide-mobile" src={hover} alt="hover"/>
  
        <div className="skills">
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
  
        <div className="projects">
          <h1 className="projects__title"><span>proj</span>ects<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>so</span> far..</h1>
          <div className="projects__mobile hide-desktop">
            <div className="projects__tile">
              <img className="projects__tile--title" src={ektitle} alt="ek-title"/>
              <img  className="projects__tile--scs" src={ekimgs} alt="electroknight"/><br />
              <p><strong>Developed with <span>Unity Engine</span></strong><br /><br />An adventure-based, interactive mobile quiz game that aims to assess the player's knowledge in the fundamentals of electronics related subjects.<br /><br />
                Includes 5 game types: <br />
                Multiple Choice, True or False, Guess the Symbol,  Identify the Resistance, and Word Translation (Filipino-English)</p>
            </div>
            <div className="projects__tile">
              <img className="projects__tile--title" src={cedulatitle} alt="cedula-title"/>
              <img  className="projects__tile--scs" src={cedulaimgs} alt="cedula"/><br />
              <p><strong>Developed with <span><br />HTML, CSS, JS</span></strong><br /><br />A system which provides a digital filing of forms for community tax certificate or cedula application, a computerized queueing stub, and a centralized database that will serve as a repository for all related transactions. 
              </p>
            </div>
            <div className="projects__tile">
              <img className="projects__tile--title" src={portfoliotitle} alt="portfolio-title"/>
              {/* <img  className="projects__tile--scs" src={cedulaimgs} alt="cedula"/><br /> */}
              <p><strong>Developed with <span><br />HTML, CSS, JS</span></strong><br /><br />A system which provides a digital filing of forms for community tax certificate or cedula application, a computerized queueing stub, and a centralized database that will serve as a repository for all related transactions. 
              </p>
            </div>
          </div>
          <div className="projects__desktop hide-mobile show-desktop">
            <h1>DESKTOP</h1>
          </div>
        </div>
  
        <div className="about">
          <img className="about__photo" src={idpic} alt="idpic"/>
          <div className="about__info">
            <h1 className="about__name">Giomar C. Mungcal</h1>
            <h3 className="about_school">BS Computer Engineering<br />Pamantasan ng Lungsod ng Maynila</h3>
            <ul className="about_list">
              <li className="about_links"><a href="https://www.messenger.com/t/gio.mungcal" target="_blank"><img src={fb} alt="fb"/></a></li>
              <li className="about_links"><a href="https://www.linkedin.com/in/giomungcal" target="_blank"><img src={linkedin} alt="linkedin"/></a></li>
              <li className="about_links"><a href="https://github.com/giomungcal" target="_blank"><img src={github} alt="github"/></a></li>
              <li className="about_links"><a href="mailto:gcmungcal@gmail.com" target="_blank"><img src={gmail} alt="gmail"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
