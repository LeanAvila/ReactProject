import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Itinerary from '../../Components/itinerary/pageItinerary'
import Footer from '../../Components/footer/footer'
import Navbar from '../../Components/navbar/navbarPage'

class PageItineraries extends Component {
    constructor (props){
        super (props) 
    }

    render() { 
        return (
            <div className="mt-5 pt-3">
                <Navbar location={this.props.location}/>
                    {/*<-------------------------- Header Itinerary --------------------------> */}
                    <header>
                        <div className="container-fluid p-2">
                            <div className="card bg-dark text-white">

                                <img src={this.props.city.pic} className="img-fluid rounded shadow-lg" alt={this.props.city.city}/>
                                <div className="card-img-overlay ">
                                    <div className="d-flex justify-content-center">
                                        <h1 className="card-text">{this.props.city.city}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/*<-------------------------- Content from Itinerary --------------------------> */}
                    <div className="container-fluid p-3">
                        <h4>Available MYtineraries:</h4>
                    </div>

                    <div className="container-fluid p-2 mb-5" id="container">
                        {
                        this.props.itinerary.length?
                        <div>
                            <Itinerary itinerary={this.props.itinerary} location={this.props.location}/>
                        </div>
                        
                        :
                        <h3 className="text-muted text-center my-5"> There not are itineraries</h3>
                        }
                        
                    </div>
                <Footer/>
            </div>
            
        )
    }
}
 
export default PageItineraries;