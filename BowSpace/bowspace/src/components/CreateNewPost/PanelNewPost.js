import React, { Component } from 'react';
import './Panel-New-Post.css';

class PanelPost extends Component {
    render(){
        return( 
            <div id="wrapper-panel">
                <div className="container">
                <div className="row"> 
                    <div className="form-group mb-3 col-12">
                        <div className="input-group-prepend">
                            <h1 id="text-panel">Create Post</h1>
                        </div>
                    </div>

                    <div className="form-group mb-4 col-12">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-buysellads"></i> Title</span>
                            </div>
                            <input className="form-control" required></input>
                        </div>
                    </div>

                    <div className="form-group mb-4 col-12">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user-plus"></i> Receipient</span>
                            </div>
                            <input className="form-control" required></input>
                        </div> 
                    </div>

                    <div class="input-group mb-4 col-12">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i className="fa fa-comments"></i>Post content</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea" required></textarea>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelPost;