import React from 'react';
import Logo from './resources/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './navbar'

class Header extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <div>
                <header>
                    <div className="row p-3">
                        <div className="col text-center">
                            <img src={Logo} alt="logo" className="img-fluid"/>
                        </div>
                    </div>
                </header>                
            </div>

        )
    }
}

export default Header;