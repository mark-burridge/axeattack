import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const styles = {

};

function Contact(props){
    const {classes} = props;
    return(
        <Grid container 
                spacing={0} 
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
            <Grid item xs={3}>
                Starting the Contact card
            </Grid>   
        </Grid>
    );
}

Contact.PropTypes = {
    classes: PropTypes.object.isRequired, 
}

export default withStyles(styles)(Contact);