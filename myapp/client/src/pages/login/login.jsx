import React from 'react';
import NavBar from '../../Components/navbar/navbarPage';
import Footer from '../../Components/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/userAction';
import { PropTypes } from 'prop-types';
import './styles.css'
// funcion de validacion
const validate = values => {
  const errors = {};
  console.log(values);
  var keys = Object.keys(values);

  for (let i = 0; i < keys.length; i++) {
    console.log(values[`${keys[i]}`]);
    if (!values[`${keys[i]}`]) {
      errors[`${keys[i]}`] = 'Required!';
    }
  }
  console.log(errors, 'validate');
  return errors;
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      userName: '',
      password: '',
      rememberMe: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { errors, ...sinErrors } = this.state;

    var results = validate(sinErrors);

    this.setState({
      errors: results
    });

    if (!Object.keys(results).length) {
      //enviar formulario
      console.log('formulario valido');

      await this.props.login(sinErrors);
    } else {
      //mostrar mensaje de error
      console.log('error de validacion');
    }
  }

  render() {
    console.log(this.state.errors, 'render');
    return (
      <div>
        <NavBar location={this.props.location}/>
        <div className='container-fluid p-3 mt-5'>
          <div className='text-center my-3'>
            <h4>Login</h4>{' '}
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor='userName'>Username</label>
                <input
                  type='text'
                  className='form-control'
                  name='userName'
                  onChange={this.handleChange}
                  placeholder='Username'
                />
                {this.state.errors.userName && (
                  <span className='text-danger'>
                    {this.state.errors.userName}
                  </span>
                )}
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  onChange={this.handleChange}
                  placeholder='Password'
                />
                {this.state.errors.password && (
                  <span className='text-danger'>
                    {this.state.errors.password}
                  </span>
                )}
              </div>
            </div>

            <div className='form-group text-center '>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  onChange={this.handleChange}
                  name='rememberMe'
                />
                <label
                  className='form-check-label text-center'
                  htmlFor='rememberMe'
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div className='text-center m-2 '>
              <button type='submit' className='btn btn-primary bg-dark'>
                Login
              </button>
            </div>
          </form>

          <div className='container-fluid px-5'>

            <div className="text-center ">
              <a href="#" className="btn btn-primary btn-block "><i className="fab fa-facebook-f"></i> Sign in with <b>Facebook</b></a>
              <a href="#" className="btn btn-info btn-block"><i className="fab fa-twitter"></i> Sign in with <b>Twitter</b></a>
              <a href="http://localhost:5000/user/auth/google" target="_self" className="btn btn-danger btn-block"><i class="fab fa-google"></i> Sign in with <b>Google</b></a>
            </div>

          </div>
        </div>

        <Footer/>
        
      </div>

      
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  item: state.user
});

export default connect(mapStateToProps, { login })(Login);
