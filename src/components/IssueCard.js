import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 250
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const IssueCard = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { title, html_url, state } = props;
    return (
        <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Issue
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {state}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={html_url} >Go to GitHub</Button>
        </CardActions>
      </Card>
    );
}

export default IssueCard;