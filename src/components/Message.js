import React from 'react'

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

const Message = () => {
    return (
        <div className="message">
            <h1>let's<br/>talk.</h1>
            <h3><Emoji symbol="📠" label="telephone"/> +639953650731<br/><Emoji symbol="📪" label="mail"/> gcmungcal@gmail.com</h3>
        </div>
    )
}

export default Message
