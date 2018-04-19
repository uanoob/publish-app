import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import Falcor from 'falcor';

// import falcorModel from '../falcorModel';

class LoginView extends Component {
  render() {
    return (
      <div>
        <h1>Login view</h1>
        FORM GOES HERE
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});
// You can add your reducers here
// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(LoginView);
