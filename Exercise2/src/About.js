import React from 'react'

function About(props) {
    return (
        <div>
            <p>About Us</p>
            <p>{props.message}</p>
        </div>
    )
}

export default About