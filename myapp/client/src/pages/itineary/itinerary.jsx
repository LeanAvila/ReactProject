import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Options from '../../Components/options/options'
class Itinerary extends Component {
    constructor (props){
        super (props) 
    }

    render() { 
        let city = [...this.props.itinerary]
        city = {...city[0]}
        city = {...city.cityId}
        
        console.log(city.pic)

        return (
            <header>
                <div className="container-fluid p-2">
                    
                    <div class="card bg-dark text-white">
                        <img src={city.pic} className="img-fluid rounded shadow-lg" alt={city.city}/>
                        <div class="card-img-overlay">
                            <h1 class="card-text text-center ">{city.city}</h1>
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