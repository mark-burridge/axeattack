import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RegisterCard from './RegisterCard'
import CustomTextField from '../Global/CustomTextField';
import {withStyles,MuiThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from '@material-ui/core/colors/red'; 
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
      primary: {main: '#212121'}
    },
    typography: { useNextVariants: true }
});

const styles = {
  
};

function Register(props){
    const {classes} = props; 
    return(
    <MuiThemeProvider theme={theme}>  
        <Grid container>
            <Grid item xs={12} align="center">
                <RegisterCard></RegisterCard>
            </Grid>
        </Grid>
    </MuiThemeProvider>          
    );
}

Register.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Register);