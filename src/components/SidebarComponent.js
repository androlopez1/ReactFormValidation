import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return(
    <React.Fragment>
      <div className="sidebar">
        <nav>
          <a href="/"><i className="fa fa-home"></i>Home</a>
          <a href="/"><i className="fa fa-user"></i>My Account</a>
          <a href="/"><i className="fa fa-building"></i>My Company</a>
          <a href="/"><i className="fa fa-cog"></i>Settings</a>
          <a href="/"><i className="fa fa-envelope"></i>News</a>
          <a href="/"><i className="fa fa-signal"></i>Analitycs</a>
        </nav>
      </div>
    </React.Fragment>
    );
  }
}

export default Sidebar;