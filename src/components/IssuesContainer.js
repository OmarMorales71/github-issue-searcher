import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20
  }
}));

const IssuesContainer = ({issues}) => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container justify="space-around" spacing={3}>
          {issues.map(issue =>{
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    {issue}
                </Grid>
              )
          })}
        </Grid>
      </div>
    );
  }

  export default IssuesContainer;