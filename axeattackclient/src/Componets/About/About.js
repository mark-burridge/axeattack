import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const styles = {
   
};

function About(props){
    const {classes} = props; 
    return(
        <div>
            This is the start of the about page.
        </div>
    );
}

About.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About);
