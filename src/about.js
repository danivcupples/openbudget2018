import React from 'react';
import './about.css';

class About extends Component {
  render () {
    return (
      <div className="About">
        <h2>The Open Budget Project</h2>
        <p>The Open Budget Project is a Code for Charlotte intiative that uses data provided by the city of Charlotte to create accessible charts and data visualizations for the public. Data is available on our <a href="#">resources page</a> and on the <a href="#">city open data portal</a>.</p>
        <h2>About Code for Charlotte</h2>
        <p>Code for Charlotte is a brigade of <a href="#">Code for America</a>. We are a volunteer citizen brigade.  We  use technology and advocacy as a tool for open government, open data and civic engagement.</p>
        <p>We work with our local government and community to use design, technology and open data to transform our city.</p>
        <a href="https://www.meetup.com/Code-For-Charlotte"><div>Join us at our weekly meetings or community events!</div></a>
        <a href="http://codeforcharlotte.org/projects"><div>We develop open-source tools to make our community work for the 21st century.</div></a>
        <a href="http://codeforcharlotte.org/advocacy"><div>We advocate to make government open and transparent.</div></a>
      </div>
    );
  }
}
