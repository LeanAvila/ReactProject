import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Activities from '../activities/pageActivities'
class Options extends Component {
    constructor (props){
        super(props)
        this.state = {
            flag: true
        }
    }
    
    render() { 
        console.log(this.props, "options")
        let whirligig
        const next = () => whirligig.next()
        const prev = () => whirligig.prev()
        return (
            <div >
                {
                this.props.itinerary.map((item, index) => { 
                    console.log(item._id)
                    return (
                    <div className="container-fluid border shadow-sm rounded mb-2">
                        <div className="row">
                            <div className="col-4 pt-4">
                                <div className="">
                                    <div className="text-center ">
                                        <img  class="rounded-circle" src={`https://picsum.photos/100/100?random=${index}`} alt=""/>
                                        <p className="mt-2 text-muted">GaudiLover</p>  
                                    </div>   
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
                            <p className={this.state.flag? "mt-3" : "d-none"}>
                                <a className="text-decoration-none text-muted" data-toggle="collapse" href={`#collapseExample${index}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${index}`}>
                                    View All
                                </a>
                            </p>
                        </div>
                        <div className="collapse container-fluid p-1" id={`collapseExample${index}`}>
                            <div className="container-fluid">
                                <h5 className="text-center m-4">Activities</h5>
                                <div>
                                    <Activities id={item._id}/>
                                </div>
                            </div>
                            <div className="row bg-light justify-content-center">
                                    <i className="fas fa-chevron-up fa-2x text-muted" data-toggle="collapse" data-target={`#collapseExample${index}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${index}`}></i>
                            </div>
                        </div>

                    </div>
                )})}
            </div>
        );
    }
}
 
export default Options;