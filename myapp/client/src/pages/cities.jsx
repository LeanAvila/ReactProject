import React from 'react';
import NavBar from '../Components/navbar'
import Header from '../Components/header'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux'
import { getCities } from '../redux/actions/action'
import {PropTypes} from 'prop-types'
class Cities extends React.Component {

    componentDidMount(){
        this.props.getCities();
    }

    render () {

        const items = this.props;

        console.log (items)
        return (
            <div>
                <NavBar/>
                <Header/> 
                <MDBContainer >
                    <MDBRow md="12">
                        <MDBCol md="6" className="offset-md-3">
                            <form className="form-inline mt-4 mb-4" styles={{margin: 'auto'}}>
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                    
                </MDBContainer>
            </div>

        )
    }
}
Cities.propTypes = {
    getCities: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    item: state.cities
})

export default connect(mapStateToProps, { getCities })(Cities);