import React from 'react';
import NavBar from '../../Components/navbar'
import Header from '../../Components/header'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

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
                    <ul>
                        {this.props.cities.map((item) =>{
                            return <li key={item._id}>{item.city}, {item.country}</li>
                        })}
                    </ul>
                </MDBContainer>
            </div>

        )
    }
}


export default PageCities;