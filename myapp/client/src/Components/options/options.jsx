import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Barcelona from '../resources/barcelona.jpg'
class Options extends Component {
    constructor (props){
        super(props)
    }
    
    render() { 
        console.log(this.props)
        return (
            <div >
                {this.props.itinerary.map(item => (
                    <div className="container-fluid border shadow-sm rounded mb-2">
                    <div className="row">
                        <div className="col-4">
                            <div className="text-center pt-4">
                                <i className="fas fa-user-circle fa-4x "></i>
                                <p>GaudiLover</p>  
                            </div>            
                        </div>
                        <div className="col-8">
                            <div className="row p-3">
                                <div className="text-center">
                                    <h4>{item.title}</h4>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-4 text-center">Likes: {item.likes}</div>
                                <div className="col-4 text-center">Hours: {item.duration}</div>
                                <div className="col-4 text-center">$ {item.price}</div>
                            </div>
                            <div className="row p-3">
                                <p>{item.hashtag.map(hashtag => ( <strong>{hashtag} </strong>))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p >
                            <a data-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">
                                View All
                            </a>
                        </p>
                        </div>
                        <div class="collapse container-fluid" id="collapseExample">
                            <div class="container-fluid ">
                                <div className="row">
                                    <h5>Activities:</h5>
                                </div>
                                <div className="row">
                                    
                                </div>
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Options;