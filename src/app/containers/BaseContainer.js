import React, { Component } from 'react';
import BaseComponent from '../components/BaseComponent';
import { connect } from 'react-redux';

class PreviewContainer extends Component {

  render() {
    return <BaseComponent />
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(PreviewContainer);