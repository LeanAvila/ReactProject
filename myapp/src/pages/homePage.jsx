import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Users from '../Components/users'
import Content from '../Components/content'
import Title from '../Components/title'
import Login from './pageLogin'
import SignUp from './signup'
import Carousel from '../Components/carousel'
import NavBar from '../Components/navbar'
import Carouself from '../Components/carouself'
class HomePage extends React.Component {
    constructor () {
        super () 
    }

    render () {
        return (
            <div>
                <NavBar/>
                <Header/>
                <Title/>
                <Content/>
                <Carouself/>
                <Footer/> 
            </div>
        )
    }
}

export default HomePage;