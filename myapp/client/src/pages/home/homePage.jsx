import React from 'react';
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import {Link} from 'react-router-dom'
import NavBar from '../../Components/navbar/navbarPage'
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import { getUserActive } from '../../redux/actions/userAction'

import {PropTypes} from 'prop-types'

export function detectCookie (name) {
    let cookie = document.cookie.split(';')
    
    for (var i = 0; i<cookie.length; i++){
        var oneCookie = cookie[i].split('=');
  
        if (oneCookie[0] == name){
            return {
                name : oneCookie[0],
                content : oneCookie[1]
            }
        }
    }
    return false
  }

class HomePage extends React.Component {
    constructor (props) {
        super (props)
        
        this.state = {
            user: {}
        }
    }

    async componentDidMount(){
        console.log(this.props, 'props from homepage')
        let existCookie = detectCookie('token')
      
      
        console.log('cookie', existCookie)
      
        if (existCookie){
            await this.props.getUserActive(existCookie.content)
      
            this.setState({
                user : this.props.item.user
            })
        }
      }

    render () {
        console.log(this.props, "props")
        console.log(this.state, "state");
        
        return (
            <div>
                <NavBar/>
                <div className="container-fluid p-3">
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

                    {/* <--------------------------- Carousel -----------------------------> */}
                    <div id="carousel" className="carousel slide" data-ride="carousel">
            
                        {/* <ol className="carousel-indicators mb-0">
                            <li data-target="#carousel" data-slide-to="0" className="active bg-dark"></li>
                            <li data-target="#carousel" data-slide-to="1" className="bg-dark "></li>
                            <li data-target="#carousel" data-slide-to="2" className="bg-dark "></li>
                        </ol> */}

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="row mb-4">
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg " alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg " alt="..."/></div>
                                    </div>
                                    <div className="row ">
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                            <div className="container-fluid ">
                                    <div className="row mb-4">
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                    </div>
                                    <div className="row ">
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="container-fluid ">
                                    <div className="row mb-4">
                                        <div className="col"><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
                                        <div className="col "><img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="d-block w-100 rounded-lg" alt="..."/></div>
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
                </div>
                {/* </Carousel> */}

                <Footer/> 
            </div>
        )
    }
}
HomePage.propTypes = {
    getUserActive : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  }
  const mapStateToProps = (state) => ({
    item: state.user
  })
  
  export default connect(mapStateToProps, { getUserActive })(HomePage);