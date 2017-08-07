import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../components/Home';

class LoadHome extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return <Home />;
    }
}

export default LoadHome;
