import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Whirligig from 'react-whirligig'
import './styles.css'
import Activities from '../activities/pageActivities'
class Options extends Component {
    constructor (props){
        super(props)
    }
    
    render() { 
        console.log(this.props)
        let whirligig
        const next = () => whirligig.next()
        const prev = () => whirligig.prev()
        return (
            <div >
                {this.props.itinerary.map((item, index) => { 
                    return (
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
                    <div className="row bg-light justify-content-center">
                        <p>
                            <a style={{textDecoration: 'none'},{color: 'black'}} data-toggle="collapse" href={`#collapseExample${index}`}  aria-expanded="false" aria-controls="collapseExample">
                                View All
                            </a>
                        </p>
                    </div>
                    <div class="collapse container-fluid" id={`collapseExample${index}`}>
                        <div class="container-fluid ">
                                <h5>Activities:</h5>
                                <div>
                                    <Activities id ={item._id}/>
                                </div>
                                <Whirligig
                                            visibleSlides={3}
                                            gutter="1em"
                                            ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                                        >   
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
                                            </div>
                                        </Whirligig>
                            </div>  
                        </div>
                    </div>
                )})}
            </div>
        );
    }
}
 
export default Options;