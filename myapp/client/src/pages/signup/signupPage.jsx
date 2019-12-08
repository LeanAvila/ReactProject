import React from "react";
import NavBar from '../../Components/navbar/navbar'
import Footer from "../../Components/footer/footer";
import 'bootstrap/dist/css/bootstrap.css'

class SignUp extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      values: {
        username : "",
        password : "",
        email : "",
        lastName : "",
        firstName : "",
        city: ""
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("tus parametros",this.state)
    event.preventDefault();
  }

  render (){
  return (
      <div>
          <NavBar/>
          <div className="container-fluid text-center">
            <div className="text-center mb-2 mt-2"><h4>Create Account</h4> </div>
            <img className="img-fluid rounded-circle bg-black shadow-sm img-thumbnail mb-2 mt-2" src="https://picsum.photos/150/150/" alt=""/>
          </div>
          <div className="container-fluid">
            <form onSubmit={this.handleSubmit} >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" value={this.state.value.username} onChange={this.handleChange} placeholder="Username"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" value={this.state.value.password} onChange={this.handleChange} placeholder="Password"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4"  value={this.state.value.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputCity">First Name</label>
                  <input type="text" className="form-control" id="inputCity" value={this.state.value.firstName} onChange={this.handleChange} placeholder="First Name"/>
                </div>

                <div className="form-group col-md-12">
                  <label for="lastName">Last Name</label>
                  <input type="email" className="form-control" id="lastName" value={this.state.value.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <label for="inputState">City</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group text-center ">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label text-center" for="gridCheck">
                    I agree to MYtinerary's <a href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <div className="text-center m-2 ">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
              
            </form>
          </div>
          <Footer/>
      </div>
    
    )
  };
};

export default SignUp;