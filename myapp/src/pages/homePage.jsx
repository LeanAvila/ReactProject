import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Users from '../Components/users'
import Content from '../Components/content'
import Title from '../Components/title'
import Login from './login'
import SignUp from './signup'
import Carousel from '../Components/carousel'
class HomePage extends React.Component {
    constructor () {
        super () 
    }

    render () {
        return (
            <div>
                <Header/>
                <Title/>
                <Content/>
                <Users/>
                <Carousel/>
                <Footer/> 
            </div>
        )
    }
}

export default HomePage;