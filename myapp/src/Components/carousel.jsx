import React from "react";
import Prueba from './resources/prueba.jpg'
import { MDBCarousel, MDBContainer, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
const Carousel = () => {
  return (
        <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={false}
        showIndicators={false}
        className="py-2"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBRow>
               <MDBCol size="6">
                    <MDBView className="my-3">
                        <img
                        className=" rounded-2 img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
              </MDBCol>
              <MDBCol size="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
              </MDBCol> 
            </MDBRow>
            <MDBRow>
               <MDBCol size="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
              </MDBCol>
              <MDBCol size="6">
                    <MDBView className="my-3">
                        <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                        />
                    <MDBMask overlay="black-light" />
                    </MDBView>
              </MDBCol> 
            </MDBRow>  
          </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBRow>
                <MDBCol  size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src={Prueba}
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src={Prueba}
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol> 
                </MDBRow>
                <MDBRow>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src={Prueba}
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src={Prueba}
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView >
                </MDBCol> 
                </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <MDBRow>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol> 
                </MDBRow>
                <MDBRow>
                <MDBCol size="6">
                        <MDBView className="my-3">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol>
                <MDBCol size="6">
                        <MDBView className="my-3 ">
                            <img
                            className="d-block w-100"
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                            alt="First slide"
                            />
                        <MDBMask overlay="black-light" />
                        </MDBView>
                </MDBCol> 
                </MDBRow>
            </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
  );
}

export default Carousel;