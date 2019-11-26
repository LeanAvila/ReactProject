import React from "react"
import '../Components/styles/styles.css'
import Footer from '../Components/footer/footer'
import Header from '../Components/header/header'
import NavBar from '../Components/navbar/navbar'
import Login from '../Components/login/login'


const PageLogin = () => {
  return (
    <div className="container">
      <NavBar/>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
};

export default PageLogin
