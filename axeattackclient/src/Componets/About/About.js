import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../Global/CustomTextField';
const styles = {
  
};

function About(props){
    const {classes} = props; 
    return(
        <div>Hello</div>
    );
}

About.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About);
