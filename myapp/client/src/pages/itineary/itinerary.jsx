import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Options from '../../Components/options/options'
import ImageBarcelona from '../../Components/resources/barcelona.jpg'
class Itinerary extends Component {
    constructor (props){
        super (props) 
    }
    render() { 
        return (
            <header>
                <div className="container-fluid p-2">
                    
                    <div class="card bg-dark text-white">
                        <img src={ImageBarcelona} className="img-fluid rounded shadow-lg" alt="Barcelona"/>
                        <div class="card-img-overlay p-4">
                            <h1 class="card-text text-center m-5 ">Barcelona</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <h4>Available MYtineraries:</h4>
                </div>
                <div className="container-fluid p-2">
                    <Options itinerary = {this.props.itinerary}/>
                </div>
            </header>
        )
    }
}
 
export default Itinerary;