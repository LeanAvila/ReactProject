import React from "react";
import NavBar from '../../Components/navbar/navbar'
import Footer from "../../Components/footer/footer";
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import { addUser } from '../../redux/actions/userAction'
import {PropTypes} from 'prop-types'

const validate = values => {
  const errors = {}
  console.log(values)
  var keys = Object.keys(values)

  for (let i = 0; i < keys.length; i++) {
    console.log(values[`${keys[i]}`])
    if (!values[`${keys[i]}`]){
      errors[`${keys[i]}`] = 'este campo es obligatorio'
    }
  }
  console.log(errors, "validate")
  return errors;
}


class SignUp extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      errors: {},
      username : "",
      password: "",
      passwordConfirmation: "",
      email: "",
      lastName: "",
      firstName: "",
      country: "",
      termsAndConditions: false

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value 
    this.setState({[name] : value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {errors, ...sinErrors } = this.state

    var results = validate(sinErrors)
    
    this.setState({
      errors: results
    })

    if (!Object.keys(results).length){
      //enviar formulario
      console.log('formulario valido');

      await this.props.addUser(sinErrors)
      
    }else{
      console.log('error de validacion');
      
    }

  }

  render (){
    console.log(this.state.errors, "render")
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
                <div className="form-group col-md-12">
                  <label  htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleChange} placeholder="Username"/>
                  {this.state.errors.username && <span className="text-muted">{this.state.errors.username}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <label  htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password"/>
                  {this.state.errors.password && <span className="text-muted">{this.state.errors.password}</span>}
                </div>
                <div className="form-group col-md-12">
                  <label  htmlFor="passwordConfirmation">Confirm Password</label>
                  <input type="password" className="form-control" name="passwordConfirmation" onChange={this.handleChange} placeholder="Confirm Password"/>
                  {this.state.errors.passwordConfirmation && <span className="text-muted">{this.state.errors.passwordConfirmation}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label  htmlFor="email">Email</label>
                  <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email"/>
                  {this.state.errors.email && <span className="text-muted">{this.state.errors.email}</span>}
                </div>
                <div className="form-group col-md-6">
                  <label  htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" name="firstName" onChange={this.handleChange} placeholder="First Name"/>
                  {this.state.errors.firstName && <span className="text-muted">{this.state.errors.firstName}</span>}
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
                  {this.state.errors.lastName && <span className="text-muted">{this.state.errors.lastName}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12">
                  <label  htmlFor="country">Country</label>
                  <select name="country" onChange={this.handleChange} className="form-control">
                    <option defaultValue="">Choose...</option>
                    <option value="argentina">Argentina</option>
                  </select>
                </div>
              </div>
              <div className="form-group text-center ">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" onChange={this.handleChange} name="termsAndConditions"/>
                  <label className="form-check-label text-center" htmlFor="termsAndConditions">
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
SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  item: state.user
})

export default connect(mapStateToProps, { addUser })(SignUp);