import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from './Home/home'
import About from './About/About'
import {Switch, Route} from 'react-router-dom'
const styles = {};

function Main(props){
    const {classes}= props;
    return(
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/about' component={About}/>
       </Switch>
    );
}

Home.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)