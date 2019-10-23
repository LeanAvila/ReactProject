import React from 'react';
import Logo from './resources/logo.png'
import './styles/styles.css'
class Header extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <header className="header text-center">
                <div><img src={Logo} alt="logo" className="img-logo"/></div>
            </header>
        )
    }
}

export default Header;