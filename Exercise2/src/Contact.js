import React from 'react'

function Contact(props) {
    return (
        <div>
            <p>Contact Us</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Contact