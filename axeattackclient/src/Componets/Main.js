import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from './Home/home'
import About from './About/About'
import Contact from './Contact/Contact'
import {Switch, Route} from 'react-router-dom'
const styles = {};

function Main(props){
    const {classes}= props;
    return(
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
       </Switch>
    );
}

Home.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)