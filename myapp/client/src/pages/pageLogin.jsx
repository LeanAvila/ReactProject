import React from "react"
import '../Components/styles/styles.css'
import Footer from '../Components/footer'
import Header from '../Components/header'
import NavBar from '../Components/navbar'
import Login from '../Components/login.jsx'


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
