import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <div className="header">
        <div className="logo" href="/">
          <img src="assets/images/logo_innoloft.png" alt="Innoloft" />
        </div>
        <div className="header-right">
          <span className="fa fa-globe"></span>
          <p>EN</p>
          <span className="fa fa-envelope"></span>
          <span className="fa fa-bell"></span>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Header; 