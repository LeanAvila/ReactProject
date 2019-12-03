import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardText } from "mdbreact";

const NavBar2 = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} >
        <MDBCarouselInner>
          <MDBRow >
            <MDBCarouselItem itemId="1">
                <MDBRow >
                    <MDBCol size="6" >
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow >
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem>


            <MDBCarouselItem itemId="2">
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow >
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBRow >
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                            Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow >
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBCard className="mb-2">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                        <MDBCardBody>
                            <MDBCardText>
                                Some quick example text to build on the card title.
                            </MDBCardText>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default NavBar2;