import React, { Component } from 'react'
import Whirligig from 'react-whirligig'
import {PropTypes} from 'prop-types'


export default class Activity extends Component {
    constructor (props){
        super(props)
        this.state={
            activities:props.activities
        }
       
    }
    componentDidMount(){
        console.log(this.props,"pepe")
    }

    render() {
       
        let whirligig
        const next = () => whirligig.next()
        const prev = () => whirligig.prev()
        return (
            <div>
                <Whirligig
                    visibleSlides={3}
                    gutter="1em"
                    ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                >

                    {this.state.activities.map(item => {
                        return (
                            <div class="card bg-dark">
                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                <div class="card-img-overlay">
                                    <p class="card-title">{item.details[0].title}</p>
                                </div>
                            </div>
                        )
                    })}
                                            {/* <div class="card bg-dark">
                                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card</p>
                                                </div>
                                            </div>
                                            <div class="card bg-dark">
                                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card</p>
                                                </div>
                                            </div>
                                            <div class="card bg-dark">
                                            <img className="img-fluid" src="http://www.fillmurray.com/500/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card</p>
                                                </div>
                                            </div>
                                            <div class="card bg-dark">
                                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card</p>
                                                </div>
                                            </div>
                                            <div class="card bg-dark">
                                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card</p>
                                                </div>
                                            </div>
                                            <div class="card bg-dark">
                                                <img className="img-fluid border" src="http://www.fillmurray.com/400/300" />
                                                <div class="card-img-overlay">
                                                    <p class="card-title">Card title</p>
                                                </div>
                                            </div> */}
                                        </Whirligig>
            </div>
        )
    }
    
}
