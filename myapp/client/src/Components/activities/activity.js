import React, { Component } from 'react'
import Whirligig from 'react-whirligig'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Activity extends Component {
    constructor (props){
        super(props)
        this.state={
            activities:props.activities
        }
       
    }
    componentDidMount(){
        console.log(this.props.activities,"pepe")
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
                    className="mb-2"
                >
                    {this.props.activities.map(item => {
                        return (
                            <div class="card ">
                                <img className="img-fluid border " src={item.pic} />
                                <div class="card-img-overlay p-3 pt-5">
                                    <p class="card-text text-white text-center m-3">{item.details}</p>
                                </div>
                            </div>
                        )
                    })}
                </Whirligig>
            </div>
        )
    }
    
}