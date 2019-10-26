import React from "react";
import '../Components/styles/styles.css'
import NavBar from '../Components/navbar'
import CreateAccount from "../Components/createAccount";
import Footer from "../Components/footer";
import Header from "../Components/header"
const SignUp = () => {
  return (
      <div>
          <NavBar/>
            <Header/>
            <CreateAccount/>
            <Footer/>
      </div>
    
  );
};

export default SignUp;