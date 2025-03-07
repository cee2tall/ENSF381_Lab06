import React from 'react'

function Home(props) {
    return (
        <div>
            <p>Welcome to the Home Page</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Home