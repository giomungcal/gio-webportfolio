import React from 'react'

import ekimgs from '../imgs/ekimgs.png'
import cedulaimgs from '../imgs/cedulaimgs.png'

import ektitle from '../imgs/ek-title.png'
import cedulatitle from '../imgs/cedula-title.png'
import portfoliotitle from '../imgs/portfolio-title.png'

const Projects = () => {
    return (
    <div className="projects" id="projects">
        <h1 className="projects__title"><span>proj</span>ects<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>so</span> far..</h1>
        <div className="projects__container hide-desktop">
          <div className="projects__tile">
            <img className="projects__tile--title" src={ektitle} alt="ek-title"/>
            <img  className="projects__tile--scs" src={ekimgs} alt="electroknight"/><br />
            <p><strong>Developed with <span>Unity Engine</span></strong><br /><br />An adventure-based, interactive mobile quiz game that aims to assess the player's knowledge in the fundamentals of electronics related subjects.<br /><br />
              Includes 5 game types: <br />
              Multiple Choice, True or False, Guess the Symbol,  Identify the Resistance, and Word Translation (Filipino-English)</p>
            <a className="projects__tile--repo" href="https://github.com/giomungcal/electro-knight" target="_blank"  rel="noopener noreferrer">open <span>github</span><br />repository</a>
          </div>
          <div className="projects__tile">
            <img className="projects__tile--title" src={cedulatitle} alt="cedula-title"/>
            <img  className="projects__tile--scs" src={cedulaimgs} alt="cedula"/><br />
            <p><strong>Developed with <span><br />HTML, CSS, JS</span></strong><br /><br />A system which provides a digital filing of forms for community tax certificate or cedula application, a computerized queueing stub, and a centralized database that will serve as a repository for all related transactions. 
            </p>
            <a className="projects__tile--repo" href="https://github.com/giomungcal/cedula" target="_blank"  rel="noopener noreferrer">open <span>github</span><br />repository</a>
          </div>
          <div className="projects__tile">
            <img className="projects__tile--title" src={portfoliotitle} alt="portfolio-title"/>
            {/* <img  className="projects__tile--scs" src={cedulaimgs} alt="cedula"/><br /> */}
            <div className="projects__tile--space">spacespacespacespacespacespace</div>
            <p><strong>Developed with <span><br />HTML, CSS, React JS <br /></span>Designed with <span className="adobexd">Adobe XD</span></strong><br /><br />
            This is my personal web portfolio developed and designed with the collective knowledge i have of web developmment so far.<br/><br/> I've applied my self-directed learnings, ranging from the different principles of UI designing to typography and color scheming, also, this webpage is designed responsive for different viewports, without the use of any framework.<br /><br />Used SASS, and applied BEM practice.<br /><br /><i>All built from scratch.</i>
            </p>
            <br />
            <a className="projects__tile--repo" href="https://github.com/giomungcal/gio-webportfolio" target="_blank"  rel="noopener noreferrer">open <span>github</span><br />repository</a>
          </div>
        </div>
    </div>
    )
}

export default Projects
