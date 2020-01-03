import React from 'react';
import NavBar from '../../Components/navbar/navbarPage'
import Header from '../../Components/header/header'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'
import Footer from '../../Components/footer/footer'
class PageCities extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            cityFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
          cityFilter: e.target.value
        })
        this.props.onChange(e.target.value)
      }

    render () {

        console.log( this.props )
        return (
            <div className="mt-5">
                <NavBar location={this.props.location}/>
                <Header/> 
                <div className="container-fluid" >
                    <div className="row my-3">
                        <div className="col pl-3">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" 
                                    id="filter" 
                                    value={this.state.cityFilter} 
                                    onChange={this.handleChange}
                                />
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-1 mb-5">
                        {this.props.cities.map((item) =>{
                            return <Link className="text-decoration-none" to={`/itinerary/${item._id}`} key={item._id}>
                                
                                <div className="container-fluid border shadow-sm pb-2 pt-2 mb-2 text-center text-dark overflow-hidden">
                                    <div className="">
                                        {item.city}, {item.country}
                                    </div>
                                </div>

                                {/* <div class="card bg-dark text-white overflow-hidden">
                                    <img src={item.pic} class="card-img" alt={item.city}/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title text-center">Card title</h5>
                                    </div>
                                </div> */}
                                
                                </Link>
                        })}
                </div>
                <Footer/>
            </div>

        )
    }
}


export default PageCities;