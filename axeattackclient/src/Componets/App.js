import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './Global/Header';
import img from '../Images/backgroundOne.jpg'
import css from '../../src/index.css'
import Main from './Main'

const styles = { 
    root: {
    backgroundImage: `url(${img})`, 
    backgroundPosition: 'center center',
    backgroundRepeat:  'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize:  'cover',
    backgroundColor: '#999', 
    height: '100vh'
  }
}; 

function App(props){
    const { classes } = props;
    return ( 
       <div className={classes.root}>
           <Header/>
           <Main/>
       </div>
    );
}

App.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)