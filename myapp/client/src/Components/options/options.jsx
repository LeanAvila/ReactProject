import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Activities from '../activities/pageActivities'
import { connect } from 'react-redux';
import { addFavourite, deleteFavourite, getFavourites } from '../../redux/actions/favouriteActions'
import { addLike, deleteLike, getLikes } from '../../redux/actions/likeActions'
import {PropTypes} from 'prop-types'
import { getUserActive } from '../../redux/actions/userAction';

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
            this.props.getUserActive(localStorage.getItem('token'))
        }

    }



    /*
    this.props = {
        favourites: Array,
        likes: Array,
        Itinerary: 
    }
    
    */
    render() { 
        console.log(this.props, "options")
        let isFavouriteThisItinerary = []
        let isLikedThisItinerary = []
        let key = 0
        return (
            <div >
                {
                this.props.itinerary.map((item, index) => {
                    //antes de hacer el map pregunto si los favouritos estan, para no estar preguntando cada vez que lo quiera utilizar en una parte del codigo

                    if(this.props.favourites || this.props.likes){
                        //en la variable "isFavouriteThisItinerary" el id del itinerary si es que esta entre los favoritos
                        isFavouriteThisItinerary = this.props.favourites.filter(itineraryIsFavourite => itineraryIsFavourite == item._id)

                        //lo mismo con "isLikedThisItinerary"
                        isLikedThisItinerary = this.props.likes.filter(itineraryLiked => itineraryLiked == item._id)

                        return (
                        //<----------------------------------------------  ITINERARY ---------------------------------------------->
                        <div className="container-fluid border shadow-sm rounded mb-2" key={key++}>

                            <div className="row">

                                {/*<- DATA OF THE USER -> */}
                                <div className="col-4 pt-4">
                                    <div>
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

                                            {/*<- BUTTON OF THE FAVOURITE -> */}
                                                {isFavouriteThisItinerary.length?
                                                    <div className="col-1">
                                                        <i className="fas fa-heart " onClick={() => this.props.deleteFavourite(item._id, localStorage.getItem('token'))}></i>
                                                    </div>
                                                    :
                                                    <div className="col-1">
                                                        <i className="far fa-heart" onClick={() => this.props.addFavourite(item._id, localStorage.getItem('token'))} ></i>
                                                    </div>
                                                }

                                            {/*<- BUTTON OF THE LIKES -> */}
                                                {isLikedThisItinerary.length?
                                                    <div className="col-1">
                                                        <i className="fas fa-thumbs-up" onClick={()=> this.props.deleteLike(item._id, localStorage.getItem('token'))}></i>
                                                    </div>
                                                    :
                                                    <div className="col-1">
                                                        <i className="far fa-thumbs-up" onClick={()=> this.props.addLike(item._id, localStorage.getItem('token'))}></i>
                                                    </div>
                                                    
                                                }
                                    </div>

                                    {/*<- DATA OF THE ITINERARY -> */}
                                    <div className="row">
                                        <div className="col-4 text-center">Likes: {item.likes.total}</div>
                                        <div className="col-4 text-center">Hours: {item.duration}</div>
                                        <div className="col-4 text-center">$ {item.price}</div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col">
                                            <p>{item.hashtag.map(hashtag => {
                                                
                                                
                                                return (
                                                    <strong key={key++}>{hashtag} </strong>
                                                )

                                            })}</p>
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
                                <div className="container-fluid mb-4">
                                    <h5 className="text-center m-4">Activities</h5>
                                    <div>
                                        <Activities id={item._id}/>
                                    </div>
                                </div>
                                
                                {/*<----------------- COMMENTS SECCION ---------------> */}
                                <div className="container-fluid text-center px-1 my-4">
                                    <h5>Comments</h5>
                                </div>

                                {/* <-- INPUT COMMENT --> */}
                                <div className="my-4 px-1">
                                    <div className="row">
                                        <div className="col-2 text-center">
                                            <img className="rounded-circle img-thumbnail" id="avatar-comments" src={this.props.user.avatarPicture} alt={this.props.user.firstName}/>
                                        </div>
                                        <div className="col-9 text-center pt-2">
                                            <input type="text" className="form-control" name="userName" placeholder="Your Comment"/>
                                        </div>
                                        <div className="col-1 pt-2">
                                            <i className="fas fa-caret-right fa-2x"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* <-- COMMENTS --> */}
                                <div className="my-3 container-fluid  border-bottom">
                                    <div className="row py-3 border-top">
                                        <div className="col-2">
                                            <div className="row">
                                                <div className="col">
                                                    <img  className="rounded-circle img-thumbnail" src={`https://picsum.photos/80?random=${index}`} alt=""/> 
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h6>Usuario</h6>
                                                </div>
                                                <div className="col-5 ">
                                                    <p className="text-muted">12:00:00 10-10-2019</p>
                                                </div>
                                            </div>
                                            <div className="row px-3">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tortor accumsan, venenatis diam vitae, rutrum nibh.
                                                     Maecenas turpis leo, varius quis lobortis eu, placerat id diam</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-1">
                                                    <i className="fas fa-pen"></i>
                                                </div>
                                                <div className="col-1 ">
                                                    <i className="fas fa-trash"></i>
                                                </div>
                                                <div className="col-7">

                                                </div>
                                                <div className="col-1">
                                                    <i className="fas fa-comment"></i>
                                                </div>
                                                <div className="col-1">
                                                    <i className="fas fa-share"></i>
                                                </div>
                                                <div className="col-1">
                                                    <i className="far fa-thumbs-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row py-3 border-top">
                                        <div className="col-2">
                                            <img  className="rounded-circle img-thumbnail" src={`https://picsum.photos/80?random=${index}`} alt=""/> 
                                        </div>

                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h6>Usuario</h6>
                                                </div>
                                                <div className="col-5 ">
                                                    <p className="text-muted">12:00:00 10-10-2019</p>
                                                </div>
                                            </div>
                                            <div className="row px-3">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tortor accumsan, venenatis diam vitae, rutrum nibh.
                                                     Maecenas turpis leo, varius quis lobortis eu, placerat id diam</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-1">
                                                    <i class="fas fa-pen"></i>
                                                </div>
                                                <div className="col-1 ">
                                                    <i class="fas fa-trash"></i>
                                                </div>
                                                <div className="col-7">
                                                    
                                                </div>
                                                <div className="col-1">
                                                    <i class="fas fa-comment"></i>
                                                </div>
                                                <div className="col-1">
                                                    <i class="fas fa-share"></i>
                                                </div>
                                                <div className="col-1">
                                                    <i className="far fa-thumbs-up"></i>
                                                </div>
                                            </div>
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
    favourites: PropTypes.array.isRequired,
    //likes
    addLike : PropTypes.func.isRequired,
    deleteLike : PropTypes.func.isRequired,
    getLikes : PropTypes.func.isRequired,
    likes: PropTypes.array.isRequired,
    //users
    getUserActive : PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }
  const mapStateToProps = (state) => ({
    favourites: state.favourites.favourites,
    user: state.user.user,
    likes: state.likes.likes
  })
  
  export default connect(mapStateToProps, { addFavourite, deleteFavourite, getFavourites, addLike, deleteLike, getLikes, getUserActive })(Options);