import React, { Component } from 'react';
 
class NotFound extends Component {
    render() { 
        return (
                <div class="card">

                <div class="dropdown card-dropdown">
                <a href="#!" class="dropdown-ellipses dropdown-toggle text-white" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a href="#!" class="dropdown-item">
                    Action
                    </a>
                    <a href="#!" class="dropdown-item">
                    Another action
                    </a>
                    <a href="#!" class="dropdown-item">
                    Something else here
                    </a>
                </div>
                </div>

                <img src="https://picsum.photos/1000/1000?grayscale" alt="..." class="card-img-top"/>

                <div class="card-body text-center">

                <a href="profile-posts.html" class="avatar avatar-xl card-avatar card-avatar-top">
                    <img src="https://picsum.photos/100/100?grayscale" class="avatar-img rounded-circle border border-4 border-card" alt="..."/>
                </a>

                <h2 class="card-title">
                    <a href="profile-posts.html">Ab Hadley</a>
                </h2>

                <p class="card-text text-muted">
                    <small>
                    Working on the latest API integration.
                    </small>
                </p>
                
                <p class="card-text">
                    <span class="badge badge-soft-secondary">
                    UX Team
                    </span>
                    <span class="badge badge-soft-secondary">
                    Research Team
                    </span>
                </p>
                
                <hr/>

                <div class="row align-items-center justify-content-between">
                    <div class="col-auto">
                    
                    <small>
                        <span class="text-success">●</span> Online
                    </small>

                    </div>
                    <div class="col-auto">
                    
                    <a href="#!" class="btn btn-sm btn-primary">
                        Subscribe
                    </a>

                    </div>
                </div> 

                </div>

                </div>
        );
    }
}
 
export default NotFound;