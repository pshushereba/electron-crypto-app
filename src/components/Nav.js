import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  btn: {
    margin: theme.spacing(2),
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Price Tracker
          </Typography>
          <Button
            className={classes.btn}
            variant="outlined"
            color="inherit"
            component={Link}
            to="/"
          >
            Prices
          </Button>
          <Button
            className={classes.btn}
            variant="outlined"
            color="inherit"
            component={Link}
            to="/feeds"
          >
            Twitter Feed
          </Button>
          <Button
            className={classes.btn}
            variant="outlined"
            color="inherit"
            disabled
          >
            Export as PDF
          </Button>
          <Button
            className={classes.btn}
            variant="outlined"
            color="inherit"
            disabled
          >
            Export as PNG
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default Nav;
