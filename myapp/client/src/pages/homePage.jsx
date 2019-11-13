import React from 'react';
import Header from '../Components/header'
import Footer from '../Components/footer'
import Content from '../Components/content'
import Title from '../Components/title'
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