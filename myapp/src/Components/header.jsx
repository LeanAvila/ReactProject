import React from 'react';
import Logo from './resources/logo.png'
import './styles/styles.css'
import NavBar from './navbar'

class Header extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <div>
                <NavBar/>
                <header className="header text-center">
                    <div><img src={Logo} alt="logo" className="img-logo"/></div>
                </header>                
            </div>

        )
    }
}

export default Header;