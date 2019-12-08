import React from 'react';
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import {Link} from 'react-router-dom'
import NavBar from '../../Components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css'
class HomePage extends React.Component {
    constructor () {
        super () 
    }

    render () {
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
                        <div className="border-x rounded-lg border-top border-bottom">
                            <div className="card-title text-center">
                                <h4 className="text-dark mt-3">Start browsing</h4>
                            </div>
                            <div className="card-text text-center mb-3">
                                <Link to="/cities"><i class="fas fa-arrow-circle-right text-dark fa-7x rounded-circle shadow-sm img-thumbnail"></i></Link>
                            </div>
                        </div>
                    </div>
                    {/* </Search Button> */}

                    {/* <--------------------------- Carousel -----------------------------> */}
                    <div id="carousel" className="carousel slide" data-ride="carousel">
            
                        {/* <ol class="carousel-indicators mb-0">
                            <li data-target="#carousel" data-slide-to="0" class="active bg-dark"></li>
                            <li data-target="#carousel" data-slide-to="1" class="bg-dark "></li>
                            <li data-target="#carousel" data-slide-to="2" class="bg-dark "></li>
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

export default HomePage;