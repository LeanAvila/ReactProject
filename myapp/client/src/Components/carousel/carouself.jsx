import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const NavBar2 = () => {
  return (
    <div className="container-fluid mt-2 mb-2">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

  );
}

export default NavBar2;