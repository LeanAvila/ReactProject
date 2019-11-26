import React from "react";
import '../Components/styles/styles.css'
import NavBar from '../Components/navbar/navbar'
import CreateAccount from "../Components/createAccount/createAccount";
import Footer from "../Components/footer/footer";
import Header from "../Components/header/header"
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