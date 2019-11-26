import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Barcelona from '../resources/barcelona.jpg'
class Options extends Component {


    render() { 
        return (
            <div >
                <div className="container-fluid border shadow-sm mb-2 rounded">
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
                                    <h4>Gaudi In A Day</h4>
                                </div>    
                            </div>
                            <div className="row">
                                    <div className="col-4 text">Likes: 34</div>
                                    <div className="col-4 text-center">12 Hours</div>
                                    <div className="col-4 text-center">$$</div>
                            </div>
                            <div className="row p-3">
                                    <p className="text-center">#Art #Architecture #History</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <a href="#" >View All</a>   
                        </div>
                    </div>
                </div>
                <div className="container-fluid border shadow-sm rounded">
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
                                    <h4>Gaudi In A Day</h4>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-4 text">Likes: 34</div>
                                <div className="col-4 text-center">12 Hours</div>
                                <div className="col-4 text-center">$$</div>
                            </div>
                            <div className="row p-3">
                                <p className="text-center">#Art #Architecture #History</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p >
                            <a data-toggle="collapse" href="#collapseExample"  aria-expanded="false" aria-controls="collapseExample">
                                View All
                            </a>
                        </p>
                        <div class="collapse container-fluid" id="collapseExample">
                            <div class="container-fluid border">
                                <div className="row">
                                    <h5>Activities:</h5>
                                </div>
                                <div className="row">
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Options;