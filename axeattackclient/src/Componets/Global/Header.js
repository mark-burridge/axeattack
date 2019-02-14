import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../Global/AppBar.js'

const styles = {};

function Header(props){
    const {classes}= props;
    return(
        <AppBar />
    );
}

Header.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)