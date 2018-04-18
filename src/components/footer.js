import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerWrapper">
                    <div className="container text-center">
                         <div className="row">
                            <div className="col-md-12" id="social-networks">
                                <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
                                <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
                            </div>
                          </div>
                          <div className="row">
                              <div className="col-md-12">
                                  <p>&copy; 2018</p>
                              </div>
                           </div>
                     </div>
                 </div>
            </footer>
        );
    }
}
