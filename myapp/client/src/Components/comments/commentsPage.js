import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Activities from '../activities/pageActivities'
import { connect } from 'react-redux';

import { addComment, deleteComment, getComments } from '../../redux/actions/commentActions'
import Comments from './comments'
import {PropTypes} from 'prop-types'
import { getUserActive } from '../../redux/actions/userAction';

class CommentsPage extends Component {
    constructor (props){
        super(props)
        this.state = {
            flag: false,
            favourites: [],
            comments: [],
            likes: [],
            user: {}
        }

    }

    async componentDidMount(){

        if (localStorage.getItem('token')){
            this.props.getUserActive(localStorage.getItem('token'))
        }
        await this.props.getComments(this.props.itineraryId)
        

        this.setState({
            comments: this.props.comments.comments,
            flag: this.props.comments.flag
        })
    }



    /*
    this.props = {
        user: Object,
        comments: Array
    }
    
    */
    render() { 
        // console.log(this.props, "CommentsPage")
        // console.log(this.state, 'state from commentPage')


        
        return (
            <div >

                {/* <-- INPUT COMMENT --> */}
                <div className="my-4 px-1">
                    <div className="row">
                        {/*<--- IMG OF THE USER'S COMMENT ---> */}
                        <div className="col-2 text-center">
                            {Object.keys(this.props.user).length?
                                <img className="rounded-circle img-thumbnail" id="avatar-comments" src={this.props.user.avatarPicture} alt={this.props.user.firstName} style={{width: '50px', heigth: '50px'}}/>
                            :
                                <i className="fas fa-user-circle fa-3x"/>
                            }
                            
                        </div>
                        
                        {/*<--- INPUT TO COMMENT THE ITINERARY ---> */}
                        <div className="col-9 text-center pt-2">
                            <input type="text" className="form-control" name="addComment" placeholder="Your Comment"/>
                        </div>

                        <div className="col-1 pt-2">
                            <i className="fas fa-caret-right fa-2x"></i>
                        </div>

                    </div>
                </div>

                {/* <-- COMMENTS --> */}
                <div className="my-3 container-fluid  border-bottom">

                    {this.state.comments.length?
                        this.state.comments.map((comment, index) => {
                            return (
                            //<--- COMMENT --->    
                            <div className="row py-3 border-top" key={index}>


                                <div className="col-2">

                                    {/*<--- IMAGE OF THE USER'S COMMENT  */}
                                    <div className="row">
                                        <div className="col">
                                            <img  className="rounded-circle img-thumbnail" src={comment.avatarPicture} alt={comment.userName} style={{height: '70px', width: '70px'}}/> 
                                        </div>
                                    </div>
                                                    
                                </div>

                                <div className="col-10">
                                    
                                    <div className="row">
                                        {/*<--- NAME OF THE USER'S COMMENT  */}
                                        <div className="col-8">
                                            <h6>{comment.userName}</h6>
                                        </div>

                                        {/*<--- DATE OF THE USER'S COMMENT  */}
                                        <div className="col-4 ">
                                            <p className="text-muted">{comment.publicationDate}</p>
                                        </div>
                                    </div>

                                    {/*<--- CONTENT OF THE USER'S COMMENT */}
                                    <div className="row px-3">
                                        <p>{comment.content}</p>
                                    </div>

                                    {/*<--- OPTIONS OF THE USER'S COMMENT (LIKE, UPDATE, DELETE, SHARE, COMMENT) */}
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
                            );
                        })
                    :
                        // <--- in case there are no comments -->
                        <h5 className="text-muted text-center">There are not comments</h5>
                    }

                </div>
            </div>
        );
    }
}

CommentsPage.propTypes = {
    //users
    getUserActive : PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    //comments
    addComment : PropTypes.func.isRequired,
    deleteComment : PropTypes.func.isRequired,
    // comments: PropTypes.object.isRequired
    // comments: PropTypes.arrayOf(PropTypes.object)
  }
  const mapStateToProps = (state) => ({
    user: state.user.user,
    comments: state.comments
  })
  
  export default connect(mapStateToProps, { getUserActive, 
                                            addComment, deleteComment, getComments })(CommentsPage);