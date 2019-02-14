import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HomeAboutCard from '../Home/HomeAboutCard'
import HomeContactCard from '../Home/HomeContactCard'
import Grid from '@material-ui/core/Grid'
//For a completly centered div like a login in maybe 
{/* <Grid container 
spacing={0} 
direction="column"
alignItems="center"
justify="center"
style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>
hello
</Grid>   
</Grid>  */}
const styles = {
    rootContainer:{
        margin: '10px'
    },
    aboutDiv: {
        background: 'lime',
    },
    contactDiv: {
        background: 'yellow', 
    }
};

function Home(props){
    const {classes}= props;
    return(
        <div className={classes.rootContainer}>
            <Grid container spacing={24}>
                <Grid container item xs={12}>
                    <Grid item xs={6} align="center">
                        <HomeAboutCard></HomeAboutCard>
                    </Grid>
                    <Grid item xs={6} align="center">
                        <HomeContactCard></HomeContactCard>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

Home.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)