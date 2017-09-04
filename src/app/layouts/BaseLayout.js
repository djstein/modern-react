import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BaseLayout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}
export default connect(mapStateToProps)(BaseLayout);