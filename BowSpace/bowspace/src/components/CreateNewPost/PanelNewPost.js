import React, { Component } from 'react';
import './Panel-New-Post.css';

class PanelPost extends Component {
    render(){
        return( 
            <div className="wrapper-panel">
                <div className="container"> 
                    <div className="form-group mb-3">
                        <div className="input-group-prepend">
                            <h1 className="text-panel">Create Post</h1>
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Title</span>
                            </div>
                            <input className="form-control"></input>
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Recipient</span>
                            </div>
                            <input className="form-control"></input>
                        </div> 
                    </div>

                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Post content</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelPost;