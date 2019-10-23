import React from 'react'
import Button from './resources/button.png'
import './styles/styles.css'

class Content extends React.Component {
    constructor () {
        super () 

    }
    
    render () {
        return (
            <div className="content text-center">
                <h4>Start browsing</h4>
                <img src={Button} alt="boton-flecha" className="img-button"/>
            </div>
        )
    }
}

export default Content;