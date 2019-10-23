import React from 'react';
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'

class Users extends React.Component {
    constructor () {
        super ()
    }

    render () {
        return (
            <div className="users">
                <div className="text-center">
                <p><strong>want to build your own MYtinerary?</strong></p>  
                </div>
                <div className="text-center justify-content-center">
                    <Router>
                        <div className="row">
                            <div className="col">
                                <Link to="/login">Log In</Link>
                            </div>
                           <div className="col">
                                <Link to="/signup">Create Account</Link>
                           </div>
                        </div>
                    </Router>
                    
                </div>
                
            </div>
        )
    }
}

export default Users;