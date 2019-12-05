import React from 'react';
import NavBar from '../../Components/navbar/navbar'
import Header from '../../Components/header/header'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom'
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
            <div>
                <NavBar/>
                <Header/> 
                <MDBContainer >
                    <MDBRow md="12">
                        <MDBCol md="6" className="offset-md-3">
                            <form className="form-inline mt-4 mb-4" >
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" 
                                    id="filter" 
                                    value={this.state.cityFilter} 
                                    onChange={this.handleChange}
                                />
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                        {this.props.cities.map((item) =>{
                            return <Link to={`/itinerary/${item._id}`}>
                                
                                <div className="container-fluid border shadow p-3 m-2 text-center">
                                        {item.city}, {item.country}
                                </div>
                                
                                </Link>
                        })}
                </MDBContainer>
            </div>

        )
    }
}


export default PageCities;