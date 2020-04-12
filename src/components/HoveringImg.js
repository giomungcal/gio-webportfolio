import React from 'react'

import hover from '../imgs/hover.png'

const HoveringImg = () => {
    return (
        <React.Fragment>
            <img className="hoverimg show-desktop hide-mobile" src={hover} alt="hover"/>
        </React.Fragment>
    )
}

export default HoveringImg
