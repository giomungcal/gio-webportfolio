import React from 'react'

import hover from '../imgs/hover.png'

const HoveringImg = () => {
    return (
        <React.Fragment>
            <a href="#skills"><img className="hoverimg show-desktop hide-mobile" src={hover} alt="hover"/></a>
        </React.Fragment>
    )
}

export default HoveringImg
