import React from 'react';
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import {Link} from 'react-router-dom'
import NavBar from '../../Components/navbar/navbarPage'
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import { getUserActive } from '../../redux/actions/userAction'
import { getCities } from '../../redux/actions/action'
import {PropTypes} from 'prop-types'
import './styles.css'

class HomePage extends React.Component {
    constructor (props) {
        super (props)
        
        this.state = {
            user: {}
        }
    }
    async componentDidMount(){
        await this.props.getCities()
    }
    render () {
        console.log(this.props, "props")
        console.log(this.state, "state");
        
        return (
            <div>
                <NavBar location={this.props.location}/>
                <div  className="p-3 mt-3 mb-5 mt-5 overflow-auto ">
                    <Header/>
                    
                    {/* <--------------------------- Title -----------------------------> */}
                    <div className="text-center mt-3 shadow-sm border rounded-pill p-3">
                        <em className="text-muted">Find your perfect trip, designed by insiders who know and love their cities.</em>
                    </div>
                    {/* </Title> */}

                    {/* <------------------------- Search Button ---------------------------> */}
                    <div className="my-3">
                        <div className="border-top border-bottom">
                            <div className="card-title text-center">
                                <h4 className="text-dark mt-3">Start browsing</h4>
                            </div>
                            <div className="card-text text-center mb-3">
                                <Link to="/cities"><i className="fas fa-arrow-circle-right text-dark fa-7x rounded-circle shadow-sm img-thumbnail"></i></Link>
                            </div>
                        </div>
                    </div>
                    {/* </Search Button> */}

                    <div className="container-fluid py-3 text-center">
                        <div className="row">
                            <div className="col text-dark">
                                <h5>Popular Itineraries</h5>
                            </div>
                        </div>
                        
                    </div>
                    {/* <--------------------------- Carousel -----------------------------> */}

                    <div>
                        {this.props.cities.cities?

                            <div id="carousel" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="row mb-4">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[0].pic} className="d-block w-100 rounded-lg " alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[1].pic} className="d-block w-100 rounded-lg " alt="..."/></div>
                                        </div>
                                        <div className="row ">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[2].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[3].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                <div className="container-fluid ">
                                        <div className="row mb-4">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[4].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[5].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                        </div>
                                        <div className="row ">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[6].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[7].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="container-fluid ">
                                        <div className="row mb-4">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[8].pic}className="d-block w-100 rounded-lg" alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[9].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col img-fluid"><img src={this.props.cities.cities[10].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                            <div className="col img-fluid"><img src={this.props.cities.cities[11].pic} className="d-block w-100 rounded-lg" alt="..."/></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            {/*<--------------------- Buttons from Carousel ---------------------> */}
                            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span className="fas fa-chevron-left text-dark" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                <span className="fas fa-chevron-right text-dark" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                            :
                            null
                        }
                    </div>
                </div> 
                {/* </Carousel> */}

                <Footer/> 
            </div>
        )
    }
}
HomePage.propTypes = {
    getUserActive : PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  }
  const mapStateToProps = (state) => ({
    item: state.user,
    cities : state.cities
  })
  
  export default connect(mapStateToProps, { getUserActive, getCities })(HomePage);