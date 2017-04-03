import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">      
          <h2 className="logo__text">
            David <span className="logo__text--green">Faby</span>
          </h2>
        </Link>  
      </div>
    );
  }
}

export default Logo;