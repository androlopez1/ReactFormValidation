import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Sidebar from './SidebarComponent';
import Header from './HeaderComponent';
import User from './UserComponent';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { postForm1, postForm2 } from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
  postForm1: (email, password, confirmPassword) => dispatch(postForm1(email, password, confirmPassword)),
  postForm2: (firstname, lastname, address, postal, country) => dispatch(postForm2(firstname, lastname, address, postal, country)),
  resetForm1: () => { dispatch(actions.reset('form1'))},
  resetForm2: () => { dispatch(actions.reset('form2'))},
});

class Main extends Component {

  render() {
    const UserPage = () => {
      return(
          <User 
          postForm1={this.props.postForm1}
          postForm2={this.props.postForm2}
          resetForm1={this.props.resetForm1}
          resetForm2={this.props.resetForm2}
          />
      )
    }

    return (
      <div className="main-container">
        <Header />
        <section>
          <Sidebar />
          <div className="form-container">
            <Switch>
                <Route path="/user" component={UserPage} />
                <Redirect to="/user" />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));