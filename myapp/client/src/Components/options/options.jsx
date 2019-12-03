import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardText } from "mdbreact";

class Options extends Component {
    constructor (props){
        super(props)
        this.state = {
            id : 0
        }
    }
    
    render() { 
        console.log(this.props)
        return (
            <div >
                {this.props.itinerary.map(item => (
                    <div className="container-fluid border shadow-sm rounded mb-2">
                    <div className="row">
                        <div className="col-4">
                            <div className="text-center pt-4">
                                <i className="fas fa-user-circle fa-4x "></i>
                                <p>GaudiLover</p>  
                            </div>            
                        </div>
                        <div className="col-8">
                            <div className="row p-3">
                                <div className="text-center">
                                    <h4>{item.title}</h4>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-4 text-center">Likes: {item.likes}</div>
                                <div className="col-4 text-center">Hours: {item.duration}</div>
                                <div className="col-4 text-center">$ {item.price}</div>
                            </div>
                            <div className="row p-3">
                                <p>{item.hashtag.map(hashtag => ( <strong>{hashtag} </strong>))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p >
                            <a data-toggle="collapse" href={`#collapseExample${this.state.id}`}  aria-expanded="false" aria-controls="collapseExample">
                                View All
                            </a>
                        </p>
                        </div>
                        <div class="collapse container-fluid" id={`collapseExample${this.state.id}`}>
                            <div class="container-fluid ">
                                <div className="row">
                                    <h5>Activities:</h5>
                                </div>
                                <div className="row">
                                <MDBContainer>
                                    <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} >
                                        <MDBCarouselInner>
                                        <MDBRow >
                                            <MDBCarouselItem itemId="1">
                                                <MDBRow >
                                                    <MDBCol size="3" >
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3">
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3" >
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCarouselItem>


                                            <MDBCarouselItem itemId="2">
                                                <MDBRow>
                                                    <MDBCol size="3">
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3">
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3" >
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCarouselItem>
                                            <MDBCarouselItem itemId="3">
                                            <MDBRow >
                                                    <MDBCol size="3">
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3">
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                    <MDBCol size="3" >
                                                        <MDBCard >
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                                        </MDBCard>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCarouselItem>
                                        </MDBRow>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                    </MDBContainer>
                                </div>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Options;