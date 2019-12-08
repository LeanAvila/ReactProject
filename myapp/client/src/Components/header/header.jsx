import React from 'react';
import Logo from '../resources/logo.png'
import 'bootstrap/dist/css/bootstrap.css'

class Header extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <div>
                <header>
                    <div className="row text-center">
                        <div className="col">
                            <img src={Logo} alt="logo" className="img-fluid rounded"/>
                        </div>
                    </div>
                </header>                
            </div>

        )
    }
}

export default Header;