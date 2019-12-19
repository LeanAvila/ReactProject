import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Activities from '../activities/pageActivities'
import { connect } from 'react-redux';
import { addFavourite, deleteFavourite, getFavourites } from '../../redux/actions/favouriteActions'
import { addLike, deleteLike, getLikes } from '../../redux/actions/likeActions'

import {PropTypes} from 'prop-types'

class Options extends Component {
    constructor (props){
        super(props)
        this.state = {
            flag: true,
            favourites: []
        }
    }

    async componentDidMount(){

        if (localStorage.getItem('token')){
            //await this.props.getFavourite(this.props.itinerary[0]._id, localStorage.getItem('token'))
           await this.props.getFavourites(localStorage.getItem('token'))
        }
    }

    componentWillMount(){
        this.setState({
            favourites: this.props.favourites.favourites
        })
    }
    render() { 
        console.log(this.props.favourites.favourites, "options")
        
        return (
            <div >
                {
                this.props.itinerary.map((item, index) => {

                    return (
                    <div className="container-fluid border shadow-sm rounded mb-2">
                        <div className="row">
                            <div className="col-4 pt-4">
                                <div className="">
                                    <div className="text-center ">
                                        <img  className="rounded-circle" src={`https://picsum.photos/100/100?random=${index}`} alt=""/>
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
                                    <div className="col">
                                        <p>{item.hashtag.map(hashtag => ( <strong>{hashtag} </strong>))}</p>
                                    </div>
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
                            
                            <div className="row my-3">
                                <div className="col text-center">
                                    {null?
                                    <button className="btn btn-danger rounded-pill" type="button"><i className="fas fa-heart fa-1x"></i></button>
                                    :
                                    <button className="btn btn-danger rounded-pill" type="button"><i className="far fa-heart fa-1x"></i></button>
                                    }
                                    
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

Options.propTypes = {
    //favourites
    addFavourite : PropTypes.func.isRequired,
    deleteFavourite : PropTypes.func.isRequired,
    getFavourites : PropTypes.func.isRequired,
    favourites: PropTypes.object.isRequired,
    //likes
    addLike : PropTypes.func.isRequired,
    deleteLike : PropTypes.func.isRequired,
    getLikes : PropTypes.func.isRequired,
    likes: PropTypes.object.isRequired,
    
    user: PropTypes.object.isRequired
  }
  const mapStateToProps = (state) => ({
    favourites: state.favourites,
    user: state.user,
    likes: state.likes
  })
  
  export default connect(mapStateToProps, { addFavourite, deleteFavourite, getFavourites, addLike, deleteLike, getLikes })(Options);