import React from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
import Content from '../Components/content/content'
import Title from '../Components/title'
import NavBar from '../Components/navbar/navbar'
import Carouself from '../Components/carousel/carouself'
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