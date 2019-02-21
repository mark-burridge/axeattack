import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RegisterCard from './RegisterCard'
import CustomTextField from '../Global/CustomTextField';
const styles = {
  
};

function Register(props){
    const {classes} = props; 
    return(
        <RegisterCard></RegisterCard>
    );
}

Register.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register);