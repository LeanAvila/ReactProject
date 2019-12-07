import React from 'react';
import homeIcon from '../resources/homeIcon.png'
import '../styles/styles.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <footer className="footer text-center ">
                
                <Link to="/"><img src={homeIcon} alt="homeIcon" className="img-home-icon"/></Link>
                
            </footer>
        )
    }
}

export default Footer;