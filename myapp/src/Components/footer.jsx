import React from 'react';
import homeIcon from './resources/homeIcon.png'
import './styles/styles.css'
class Footer extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <footer className="footer text-center ">
                <img src={homeIcon} alt="homeIcon" className="img-home-icon"/>
            </footer>
        )
    }
}

export default Footer;