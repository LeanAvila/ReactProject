import React from 'react'
import Button from './resources/button.png'
import './styles/styles.css'

class Content extends React.Component {
    constructor () {
        super () 

    }
    
    render () {
        return (
            <div className="container-fluid p-3">
                <div className="row ">
                    <div className="col text-center">
                        <h4>Start browsing</h4>
                    </div>
                    
                </div>
                <div className="row m-5">
                    <div className="col text-center">
                        <img src={Button} alt="boton-flecha" className="img-button"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Content;