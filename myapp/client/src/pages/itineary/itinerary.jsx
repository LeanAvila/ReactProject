import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Options from '../../Components/options/options'
import Footer from '../../Components/footer/footer'
class Itinerary extends Component {
    constructor (props){
        super (props) 
    }

    render() { 
        console.log(this.props.itinerary[0], 'itineary de la pagina original')
        
        return (
            <div>
                    {/*<-------------------------- Header Itinerary --------------------------> */}
                    <header>
                        <div className="container-fluid p-2">
                            <div className="card bg-dark text-white">

                                <img src={this.props.itinerary[0].cityId.pic} className="img-fluid rounded shadow-lg" alt={this.props.itinerary[0].cityId.pic}/>
                                <div className="card-img-overlay ">
                                    <div className="d-flex justify-content-center">
                                        <h1 className="card-text">{this.props.itinerary[0].cityId.city}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/*<-------------------------- Content from Itinerary --------------------------> */}
                    <div className="container-fluid p-3">
                        <h4>Available MYtineraries:</h4>
                    </div>

                    <div className="container-fluid p-2" id="container">
                        {
                        this.props.itinerary.length?
                        <Options itinerary = {this.props.itinerary}/>
                        :
                        null
                        }
                        
                    </div>
                <Footer/>
            </div>
            
        )
    }
}
 
export default Itinerary;