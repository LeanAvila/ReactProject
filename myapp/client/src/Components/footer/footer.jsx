import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
class Footer extends React.Component {
    constructor () {
        super ()
    }

    render () {
        
        return (
            <footer className="shadow-lg border-top bg-light fixed-bottom">
                {window.location == 'http://localhost:3000/' ?
                <div className="p-2">
                        <div className="row text-center">
                            <Link className="col text-dark" to="/"></Link>
                            <Link className="col text-dark" to="/"><i className="fas fa-home fa-2x"></i></Link>
                            {(window.history.length == 1) ? 
                            <div className="col"></div>
                            :
                            <div onClick={() => { window.history.go(1);}} className="col text-dark"><i className="fas fa-chevron-right fa-2x"></i></div>
                            }
                            
                        </div>
                </div>
                :
                <div className="p-2 ">
                        <div className = "row text-center mt-1">
                            <div onClick={() => { window.history.go(-1);}} className="col text-dark"><i className="fas fa-chevron-left fa-2x"></i></div>
                            <Link className="col text-dark" to="/"><i className="fas fa-home fa-2x"></i></Link>
                            <div onClick={() => { window.history.go(1);}} className="col text-dark"><i className="fas fa-chevron-right fa-2x"></i></div>
                        </div>
                </div>  
                }  
            </footer>
            
        )
    }
}

export default Footer;