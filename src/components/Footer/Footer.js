import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `0.0625rem solid #000`,
    padding: '1em 0',
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body1">
        &copy;&nbsp;
        {new Date().getFullYear()}
        &nbsp;
        <Link to="/">Home</Link>
      </Typography>
    </footer>
  );
};


export default Footer;
