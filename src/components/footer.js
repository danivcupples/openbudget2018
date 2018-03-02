import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerWrapper">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-4">
                                <li>&copy; 2015</li>
                                <li>Contact Us</li>
                                <li>About</li>
                            </div>
                            <div className="col-md-4">
                                <li>&copy; 2015</li>
                                <li>Contact Us</li>
                                <li>About</li>
                            </div>
                            <div className="col-md-4" id="social-networks">
                                <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-vimeo-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>                  
        );
    }
}
