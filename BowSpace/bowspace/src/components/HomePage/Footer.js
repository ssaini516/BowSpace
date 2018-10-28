import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <footer id="footer">
            <div className="container">
                <ul className="list-inline text-center mt-5 pt-1">
                    <i className="fa fa-google-plus-square mr-3"></i>
                    <i className="fa fa-linkedin-square mr-3"></i>
                    <i className="fa fa-facebook-square mr-3"></i>
                    <i className="fa fa-twitter-square mr-3"></i>
                </ul>
                <div className="footer-copyright">
                    <p>©2018 Copyright <a target="_blank" href=""> Reactnators</a></p>
                </div>
            </div>
        </footer>
      );
    }
  }
export default Footer;