import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBMask, MDBView, MDBCarouselCaption } from "mdbreact";
const Carousel = () => {
  return (
    <div className="container-fluid borderless">
        <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        className="py-3"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBRow>
               <MDBCol md="6">
                    <MDBView className="my-3">
                        <img
                        className="rounder img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
              </MDBCol>
              <MDBCol md="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
              </MDBCol> 
            </MDBRow>
            <MDBRow>
               <MDBCol md="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
              </MDBCol>
              <MDBCol md="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                    </MDBCarouselCaption>
              </MDBCol> 
            </MDBRow>  
          </MDBCarouselItem>




        <MDBCarouselItem itemId="2">
            <MDBRow>
                <MDBCol  className="col-sm-2">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol>
                <MDBCol md="4" >
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol> 
                </MDBRow>
                <MDBRow>
                <MDBCol md="4">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol>
                <MDBCol md="4">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView >
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol> 
                </MDBRow>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
                <MDBRow>
                <MDBCol md="4">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol>
                <MDBCol md="4">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol> 
                </MDBRow>
                <MDBRow>
                <MDBCol md="4">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol>
                <MDBCol md="4">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                </MDBCol> 
                </MDBRow>
            </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;