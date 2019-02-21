import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GavelIcon from '@material-ui/icons/Gavel'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white'
  },
  routerLink:{
    textDecoration: 'none',
  },
  appBarBtn:{
    color: 'white'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'black', boxShadow: 'none', marginBottom: '50px'}}>
        <Toolbar>
          <Link to='/'>
            <IconButton className={classes.menuButton}aria-label="Menu">
              <GavelIcon />
            </IconButton>
          </Link>
          <Typography variant="h4" className={classes.grow}>
            Axe Attack
          </Typography>
          <Link to='/register' className={classes.routerLink}> <Button className={classes.appBarBtn}>Register</Button></Link>
          <Link to='/about' className={classes.routerLink}> <Button className={classes.appBarBtn}>About</Button></Link>
          <Link to='/contact' className={classes.routerLink}><Button className={classes.appBarBtn}>Contact</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(ButtonAppBar);
