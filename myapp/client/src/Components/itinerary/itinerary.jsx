import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import Activities from '../activities/pageActivities'
import { connect } from 'react-redux';
// import { addFavourite, deleteFavourite, getFavourites } from '../../redux/actions/favouriteActions'
// import { addLike, deleteLike, getLikes } from '../../redux/actions/likeActions'

import Comments from '../comments/commentsPage'
import {PropTypes} from 'prop-types'
import { getUserActive } from '../../redux/actions/userAction';
// import NavBar from '../navbar/navbarPage';

class Itinerary extends Component {
    constructor (props){
        super(props)
        // this.state = {
        //     flag: true,
        //     favourites: [],
        //     likes: [],
        //     user: {},
        //     show: false,
        //     setShow: false,
        //     itinerary: [],
        //     likesTotal: 0
        // }
        this.state ={
            flag: true,
            favourites: [],
            likes: [],
            user: this.props.user,
            show: false,
            setShow: false,
            asdf: this.props.itinerary.likes.users,
            itinerary: this.props.itinerary,
            likesTotal: this.props.likesTotal,
            isLikedThisItinerary: [],
            isFavouriteThisItinerary: []
        }
    }


    // async componentDidMount(){

        // if (localStorage.getItem('token')){
        //   await this.props.getUserActive(localStorage.getItem('token'))
        // }

    //     this.setState({ 
    //         user: this.props.user,
    //         likes: this.props.user.likes,
    //         favourites: this.props.user.favourites,
    //         likesTotal: this.props.likesTotal
    //     })

    // }

    async componentDidMount(){
        console.log(this.state.asdf, 'likestotal')
        var total = this.state.asdf.reduce((previusValue, currentValue) => { return currentValue} , 0)
        console.log(total, 'total')
        
        if (localStorage.getItem('token')){
            await this.props.getUserActive(localStorage.getItem('token'))
        }

        this.setState({
            user: this.props.user,
            favourites: this.props.user.favourites,
            likes: this.props.user.likes
        })
    }
    /*
    this.props = {
        favourites: Array,
        likes: Array,
        Itinerary: Array,
        comments: Array
    }
    
    */
    render() { 
        console.log(this.props, 'el estado de los itineraries')
        var key=0

        var isLikedThisItinerary = []
        var isFavouriteThisItinerary = []

        if(Object.keys(this.state.user).length){
            isFavouriteThisItinerary = this.state.favourites.filter(favourite => favourite === this.state.itinerary._id)
            console.log(isFavouriteThisItinerary, 'favourites')
            isLikedThisItinerary = this.state.likes.filter(like => like === this.state.itinerary._id)
        }


        return (
            <div >

{/* //<----------------------------------------------  ITINERARY ----------------------------------------------> */}
                        <div className="container-fluid border shadow-sm rounded mb-2" >

                            <div className="row">

                                {/*<- DATA OF THE USER -> */}
                                <div className="col-4 pt-4">
                                    <div>
                                        <div className="text-center ">
                                            <img  className="rounded-circle" src={`https://picsum.photos/100/100?random=${this.state.itinerary._id}`} alt=""/>
                                            <p className="mt-2 text-muted">GaudiLover</p>  
                                        </div>   
                                    </div>         
                                </div>

                                
                                <div className="col-8">

                                    <div className="row p-3">
                                        <div className="col-9">

                                            {/*<- TITLE OF THE ITINERARY -> */}
                                            <div className="text-center">
                                                <h4>{this.state.itinerary.title}</h4>
                                            </div>  

                                        </div>

                                        {/*<- BUTTONS OF THE LIKES AND FAVOURITES -> */}

                                            {/*<- BUTTON OF THE FAVOURITE -> */}
                                            {Object.keys(this.state.user).length?
                                                <div>
                                                    {isFavouriteThisItinerary.length?
                                                        <div className="col-1">
                                                            <i className="fas fa-heart " onClick={() => {
                                                                this.props.deleteFavourite(this.state.itinerary._id, localStorage.getItem('token'))
                                                                var newFavourites = this.state.favourites.filter(favourite => favourite != this.state.itinerary._id)
                                                                this.setState({
                                                                    favourites: newFavourites,
                                                                })
                                                            }}></i>
                                                        </div>
                                                        :
                                                        <div className="col-1">
                                                            <i className="far fa-heart" onClick={() => {
                                                                this.props.addFavourite(this.state.itinerary._id, localStorage.getItem('token'))
                                                                this.setState({
                                                                    favourites: [...this.state.favourites, this.state.itinerary._id],
                                                                })
                                                                }} ></i>
                                                        </div>
                                                    }
                                                </div>
                                                :
                                                <div className="col-1">
                                                        <i className="far fa-heart" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                                </div>
                                            }

                                            {/*<- BUTTON OF THE LIKES -> */}
                                            {Object.keys(this.state.user).length?
                                                <div>
                                                {isLikedThisItinerary.length?
                                                    <div className="col-1">
                                                        <i className="fas fa-thumbs-up" onClick={()=> {
                                                            this.props.deleteLike(this.state.itinerary._id, localStorage.getItem('token'))
                                                            var newLikes = this.state.likes.filter(like => like != this.state.itinerary._id)
                                                            this.setState({
                                                                likes: newLikes,
                                                                likesTotal: this.state.likesTotal-1
                                                            })
                                                            }}></i>
                                                    </div>
                                                    :
                                                    <div className="col-1">
                                                        <i className="far fa-thumbs-up" onClick={()=> {
                                                            this.props.addLike(this.state.itinerary._id, localStorage.getItem('token'))
                                                            this.setState({
                                                                likes: [...this.state.likes, this.state.itinerary._id],
                                                                likesTotal: this.state.likesTotal+1
                                                            })
                                                            }}></i>
                                                    </div>
                                                    
                                                }
                                                </div>
                                                :
                                                <div className="col-1">
                                                        <i className="far fa-thumbs-up" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                                    </div>
                                            }
                                    </div>

                                    {/*<- DATA OF THE ITINERARY -> */}
                                    <div className="row">                                        
                                        <div className="col-4 text-center">Likes: {this.state.likesTotal}</div>
                                        <div className="col-4 text-center">Hours: {this.state.itinerary.duration}</div>
                                        <div className="col-4 text-center">$ {this.state.itinerary.price}</div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col">
                                            <p>{this.state.itinerary.hashtag.map(hashtag => {
                                                
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
                                    <a className="text-decoration-none text-muted" data-toggle="collapse" href={`#collapseExample${this.state.itinerary._id}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${this.state.itinerary._id}`}>
                                        View All
                                    </a>
                                </p>
                            </div>
                            {/*<----------------- COLLAPSE ---------------> */}
                            <div className="collapse container-fluid p-1" id={`collapseExample${this.state.itinerary._id}`}>
                                <div className="container-fluid mb-4">
                                    <h5 className="text-center m-4">Activities</h5>
                                    <div>
                                        <Activities id={this.state.itinerary._id}/>
                                    </div>
                                </div>
                                
                                {/*<----------------- COMMENTS SECCION ---------------> */}
                                <div className="container-fluid text-center px-1 my-4">
                                    <h5>Comments</h5>
                                </div>


                                {/* <-- COMMENTS --> */}
                                <Comments itineraryId={this.state.itinerary._id} />


                                <div className="row bg-light justify-content-center">
                                        <i className="fas fa-chevron-up fa-2x text-muted" data-toggle="collapse" data-target={`#collapseExample${this.state.itinerary._id}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${this.state.itinerary._id}`}></i>
                                </div>
                            </div>
                            {/*<- COLLAPSE -> */}

                        </div>
                    
                {/* <!-------------------------- Modal of the Pleace login --------------------------> */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">You're Welcome!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <h3>Sign In</h3>
                                </div>
                                <div className="text-center my-5">
                                    <a href="#" className="btn btn-primary btn-block "><i className="fab fa-facebook-f"></i> Sign in with <b>Facebook</b></a>
                                    <a href="#" className="btn btn-info btn-block"><i className="fab fa-twitter"></i> Sign in with <b>Twitter</b></a>
                                    <a href="#" className="btn btn-danger btn-block"><i className="fab fa-google"></i> Sign in with <b>Google</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






















































                {/* <NavBar location={this.props.location}/> */}
                {/* {
                this.state.itinerary?
                this.state.itinerary.map((item, index) => { */}
                    {/* //si el usuario fue cargado, entonces compruebo si los itinerarios de esta ciudad fueron agregados como favoritos y/o les dio like */}
                    {/* if (Object.keys(this.state.user).length){

                    isFavouriteThisItinerary =  
                    this.state.favourites.filter(itineraryIsFavourite => itineraryIsFavourite == item._id)

                    isLikedThisItinerary = 
                    this.state.likes.filter(itineraryLiked => itineraryLiked == item._id)

                    } */}


                        {/* return (
                        //<----------------------------------------------  ITINERARY ---------------------------------------------->
                        <div className="container-fluid border shadow-sm rounded mb-2" key={key++}>

                            <div className="row"> */}

                                {/*<- DATA OF THE USER -> */}
                                {/* <div className="col-4 pt-4">
                                    <div>
                                        <div className="text-center ">
                                            <img  className="rounded-circle" src={`https://picsum.photos/100/100?random=${index}`} alt=""/>
                                            <p className="mt-2 text-muted">GaudiLover</p>  
                                        </div>   
                                    </div>         
                                </div> */}

                                
                                {/* <div className="col-8">

                                    <div className="row p-3">
                                        <div className="col-9"> */}

                                            {/*<- TITLE OF THE ITINERARY -> */}
                                            {/* <div className="text-center">
                                                <h4>{item.title}</h4>
                                            </div>  

                                        </div> */}

                                        {/*<- BUTTONS OF THE LIKES AND FAVOURITES -> */}

                                            {/*<- BUTTON OF THE FAVOURITE -> */}
                                            {/* {Object.keys(this.state.user).length?
                                                <div>
                                                    {isFavouriteThisItinerary.length?
                                                        <div className="col-1">
                                                            <i className="fas fa-heart " onClick={() => {
                                                                this.props.deleteFavourite(item._id, localStorage.getItem('token'))
                                                                var newFavourites = this.state.favourites.filter(favourite => favourite != item._id)
                                                                this.setState({favourites: newFavourites})
                                                            }}></i>
                                                        </div>
                                                        :
                                                        <div className="col-1">
                                                            <i className="far fa-heart" onClick={() => {
                                                                this.props.addFavourite(item._id, localStorage.getItem('token'))
                                                                this.setState({
                                                                    favourites: [...this.state.favourites, item._id],
                                                                })
                                                                }} ></i>
                                                        </div>
                                                    }
                                                </div>
                                                :
                                                <div className="col-1">
                                                        <i className="far fa-heart" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                                </div>
                                            } */}

                                            {/*<- BUTTON OF THE LIKES -> */}
                                            {/* {Object.keys(this.state.user).length?
                                                <div>
                                                {isLikedThisItinerary.length?
                                                    <div className="col-1">
                                                        <i className="fas fa-thumbs-up" onClick={()=> {
                                                            this.props.deleteLike(item._id, localStorage.getItem('token'))
                                                            var newLikes = this.state.likes.filter(like => like != item._id)
                                                            this.setState({
                                                                likes: newLikes,
                                                                likesTotal: this.state.likesTotal--
                                                            })
                                                            }}></i>
                                                    </div>
                                                    :
                                                    <div className="col-1">
                                                        <i className="far fa-thumbs-up" onClick={()=> {
                                                            this.props.addLike(item._id, localStorage.getItem('token'))
                                                            this.setState({
                                                                likes: [...this.state.likes, item._id],
                                                            })
                                                            }}></i>
                                                    </div>
                                                    
                                                }
                                                </div>
                                                :
                                                <div className="col-1">
                                                        <i className="far fa-thumbs-up" data-toggle="modal" data-target="#exampleModalCenter"></i>
                                                    </div>
                                            }
                                    </div> */}

                                    {/*<- DATA OF THE ITINERARY -> */}
                                    {/* <div className="row">                                        
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
                            </div> */}
                            {/*<----------------- COLLAPSE ---------------> */}
                            {/* <div className="collapse container-fluid p-1" id={`collapseExample${index}`}>
                                <div className="container-fluid mb-4">
                                    <h5 className="text-center m-4">Activities</h5>
                                    <div>
                                        <Activities id={item._id}/>
                                    </div>
                                </div> */}
                                
                                {/*<----------------- COMMENTS SECCION ---------------> */}
                                {/* <div className="container-fluid text-center px-1 my-4">
                                    <h5>Comments</h5>
                                </div>
 */}

                                {/* <-- COMMENTS --> */}
                                {/* <Comments itineraryId={item._id} />


                                <div className="row bg-light justify-content-center">
                                        <i className="fas fa-chevron-up fa-2x text-muted" data-toggle="collapse" data-target={`#collapseExample${index}`} onClick={() => {this.setState({flag: !this.state.flag})}} aria-expanded="false" aria-controls={`collapseExample${index}`}></i>
                                </div>
                            </div> */}
                            {/*<- COLLAPSE -> */}

                        {/* </div>
                    )
                    }
                )
                :
                null
                } */}

                {/* <!-------------------------- Modal of the Pleace login --------------------------> */}
                {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">You're Welcome!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    <h3>Sign In</h3>
                                </div>
                                <div className="text-center my-5">
                                    <a href="#" className="btn btn-primary btn-block "><i className="fab fa-facebook-f"></i> Sign in with <b>Facebook</b></a>
                                    <a href="#" className="btn btn-info btn-block"><i className="fab fa-twitter"></i> Sign in with <b>Twitter</b></a>
                                    <a href="#" className="btn btn-danger btn-block"><i className="fab fa-google"></i> Sign in with <b>Google</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                

            </div>
        );
    }
}

// Options.propTypes = {
//     //favourites
//     addFavourite : PropTypes.func,
//     deleteFavourite : PropTypes.func,
//     getFavourites : PropTypes.func,
//     favourites: PropTypes.array,
//     //likes
//     addLike : PropTypes.func,
//     deleteLike : PropTypes.func,
//     getLikes : PropTypes.func,
//     //likes: PropTypes.array,
//     //users
//     getUserActive : PropTypes.func,
//     user: PropTypes.object,
//   }

Itinerary.propTypes = {
    //favourites
    addFavourite : PropTypes.func,
    deleteFavourite : PropTypes.func,
    getFavourites : PropTypes.func,
    favourites: PropTypes.array,
    //likes
    addLike : PropTypes.func,
    deleteLike : PropTypes.func,
    getLikes : PropTypes.func,
    //likes: PropTypes.array,
    //users
    getUserActive : PropTypes.func,
    user: PropTypes.object,
  }
//   const mapStateToProps = (state) => ({
//     favourites: state.favourites.favourites,
//     user: state.user.user,
//     likes: state.likes,
//     comments: state.comments.comments
//   })
  
const mapStateToProps = (state) => ({
        user: state.user.user,
      })
//   export default connect(mapStateToProps, { addFavourite, deleteFavourite, getFavourites, 
//                                             addLike, deleteLike, getLikes, getUserActive })(Options);
  export default connect(mapStateToProps, { getUserActive })(Itinerary);
//   export default Itinerary;
