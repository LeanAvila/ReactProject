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

    componentDidMount(){

        if (localStorage.getItem('token')){
            // this.getFavouritesDidMount()
            // this.getLikesDidMount()
            this.props.getLikes(localStorage.getItem('token'))
            this.props.getFavourites(localStorage.getItem('token'))
        }

    }

    render() { 
        console.log(this.props, "options")
        let isFavouriteThisItinerary = []
        let isLikedThisItinerary = []
        return (
            <div >
                {
                this.props.itinerary.map((item, index) => {
                    //antes de hacer el map pregunto si los favouritos estan, para no estar preguntando cada vez que lo quiera utilizar en una parte del codigo

                    if(this.props.likes.length){
                        //en la variable "isFavouriteThisItinerary" el id del itinerary si es que esta entre los favoritos
                        isFavouriteThisItinerary = this.props.favourites.filter(itineraryIsFavourite => itineraryIsFavourite == item._id)
                        isLikedThisItinerary = this.props.likes.filter(itineraryLiked => itineraryLiked == item._id)
                        console.log(item._id, 'id ');
                        
                        console.log(isFavouriteThisItinerary, 'isFavouroteThisItinerary')
                        return (
                        //<----------------------------------------------  ITINERARY ---------------------------------------------->
                        <div className="container-fluid border shadow-sm rounded mb-2">

                            <div className="row">

                                {/*<- DATA OF THE USER -> */}
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
                                        <div className="col-9">

                                            {/*<- TITLE OF THE ITINERARY -> */}
                                            <div className="text-center">
                                                <h4>{item.title}</h4>
                                            </div>  

                                        </div>

                                        {/*<- BUTTONS OF THE LIKES AND FAVOURITES -> */}
                                        <div className="col-3 pl-3">

                                            {/*<- BUTTON OF THE FAVOURITE -> */}
                                            <div className="d-inline mr-2">
                                                {isFavouriteThisItinerary.length?

                                                    <i className="fas fa-heart fa-1x" onClick={() => this.props.deleteFavourite(item._id, localStorage.getItem('token'))}></i>
                                                    :
                                                    <i className="far fa-heart fa-1x" onClick={() => this.props.addFavourite(item._id, localStorage.getItem('token'))} ></i>
                                                }
                                            </div>

                                            {/*<- BUTTON OF THE LIKES -> */}
                                            <div className="d-inline ml-3">
                                                {isLikedThisItinerary.length?

                                                    <i class="fas fa-thumbs-up" onClick={()=> this.props.deleteLike(item._id, localStorage.getItem('token'))}></i>
                                                    :
                                                    <i class="far fa-thumbs-up" onClick={()=> this.props.addLike(item._id, localStorage.getItem('token'))}></i>
                                                }
                                            </div>

                                        </div>
                                        
                                    </div>

                                    {/*<- DATA OF THE ITINERARY -> */}
                                    <div className="row">
                                        <div className="col-4 text-center">Likes: {item.likes.total}</div>
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
                            {/*<----------------- COLLAPSE ---------------> */}
                            <div className="collapse container-fluid p-1" id={`collapseExample${index}`}>
                                <div className="container-fluid">
                                    <h5 className="text-center m-4">Activities</h5>
                                    <div>
                                        <Activities id={item._id}/>
                                    </div>
                                </div>
                                
                                {/*<----------------- COMMENTS ---------------> */}
                                <div className="mt-5 px-1">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-9 text-center">
                                            <input type="text" className="form-control" name="userName" placeholder="Your Comment"/>
                                        </div>
                                        <div className="col-2">
                                            <i class="fas fa-caret-right fa-2x"></i>
                                        </div>
                                    </div>
                                </div>



                                <div className="row bg-light justify-content-center">
                                        <i className="fas fa-chevron-up fa-2x text-muted" data-toggle="collapse" data-target={`#collapseExample${index}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${index}`}></i>
                                </div>
                            </div>
                            {/*<- COLLAPSE -> */}

                        </div>
                    )
                    }
                })}
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
    favourites: state.favourites.favourites,
    user: state.user,
    likes: state.likes.likes
  })
  
  export default connect(mapStateToProps, { addFavourite, deleteFavourite, getFavourites, addLike, deleteLike, getLikes })(Options);