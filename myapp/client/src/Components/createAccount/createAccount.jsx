import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class CreateAccount extends React.Component {

    constructor () {
        super ()
    }

    render () {
        return (
        <MDBContainer className=" my-5">
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <p className="h5 text-center mb-4">Create Account</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn>Create Account</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}


export default CreateAccount