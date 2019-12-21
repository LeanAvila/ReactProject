import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

class Footer extends React.Component {
    constructor () {
        super ()
    }

    render () {
        
        return (
            <footer>
                {window.location == 'http://localhost:3000/' ?
                <div className="p-2 bg-dark shadow-dark">
                        <footer className="row text-center">
                            <Link className="col text-muted" to="/"></Link>
                            <Link className="col text-white" to="/"><i className="fas fa-home fa-2x"></i></Link>
                            {(window.history.length == 1) ? 
                            <div className="col"></div>
                            :
                            <div onClick={() => { window.history.go(1);}} className="col text-white"><i className="fas fa-chevron-right fa-2x"></i></div>
                            }
                            
                        </footer>
                </div>
                :
                <div className="p-2 bg-dark shadow-dark">
                        <footer className = "row text-center mt-1">
                            <div onClick={() => { window.history.go(-1);}} className="col text-white"><i className="fas fa-chevron-left fa-2x"></i></div>
                            <Link className="col text-white" to="/"><i className="fas fa-home fa-2x"></i></Link>
                            <div onClick={() => { window.history.go(1);}} className="col text-white"><i className="fas fa-chevron-right fa-2x"></i></div>
                        </footer>
                </div>  
                }  
            </footer>

            
        )
    }
}

export default Footer;