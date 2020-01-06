import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { connect } from 'react-redux';
import { addFavourite, deleteFavourite, getFavourites } from '../../redux/actions/favouriteActions'
import { addLike, deleteLike, getLikes } from '../../redux/actions/likeActions'

import Itinerary from './itinerary.jsx'
import {PropTypes} from 'prop-types'
import { getUserActive } from '../../redux/actions/userAction';

class ContentItinerary extends Component {
    constructor (props){
        super(props)
        this.state = {
            itinerary: props.itinerary,
            user: {
                flag: false,
                user: {}
            },
            likes: [],
            favourites: []
        }
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
        console.log(this.state.user.user.favourites, 'options')
        return (
            <div >
                {
                    this.state.itinerary?
                        this.state.itinerary.map(item => {
                            return (
                            <div key={item._id}>
                                <Itinerary
                                    addFavourite={this.props.addFavourite} 
                                    deleteFavourite={this.props.deleteFavourite}
                                    getFavourites={this.props.getFavourites}

                                    addLike={this.props.addLike}
                                    deleteLike={this.props.deleteLike}
                                    getLikes={this.props.getLikes}
                                    itinerary={item}
                                    
                                    getUserActive={this.props.getUserActive}
                                    likesTotal={item.likes.total}

                                />
                            </div>
                            );
                        })
                    :
                    null
                }
            </div>
        );
    }
}

ContentItinerary.propTypes = {
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
    itinerary: PropTypes.array,
    getUserActive : PropTypes.func,
    user: PropTypes.object,
  }
  const mapStateToProps = (state) => ({
    favourites: state.favourites.favourites,
    user: state.user,
    likes: state.likes,
    comments: state.comments.comments
  })
  
  export default connect(mapStateToProps, { addFavourite, deleteFavourite, getFavourites, 
                                            addLike, deleteLike, getLikes, 
                                            getUserActive })(ContentItinerary);