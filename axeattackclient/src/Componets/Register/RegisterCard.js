import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomTextField from '../Global/CustomTextField'
import img from '../../Images/IMG_5049.JPG'

const styles = {
    card: {
      maxWidth: 342,
    },
    media: {
      objectFit: 'cover',
    },
  };
  
  function ImgMediaCard(props) {
    const { classes } = props;
    return (
      <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Register for Axe attack"
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <CustomTextField labelName={'First Name'}/>
            <CustomTextField labelName={'Last Name'}/>
            <CustomTextField labelName={'Email'}/>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
    );
  }
  
  ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ImgMediaCard);
