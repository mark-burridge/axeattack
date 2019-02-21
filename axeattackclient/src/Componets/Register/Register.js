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
        <Grid container>
            <Grid item xs={12} align="center">
                <RegisterCard></RegisterCard>
            </Grid>
        </Grid>
           
    );
}

Register.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register);