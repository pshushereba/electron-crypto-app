import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
    paddingTop: "1rem",
    backgroundColor: "#fff",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.sticky}>
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Typography>
              <a
                href="https://github.com/pshushereba"
                target="_blank"
                className={classes.link}
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/pshushereba/"
                target="_blank"
                className={classes.link}
              >
                LinkedIn
              </a>
              <a
                href="mailto:pshushereba@gmail.com?subject=Your Project Blew Us Away"
                className={classes.link}
              >
                pshushereba@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1mE93t5hEXS4Igf-qsgDpNaGiXrFGNh12/view?usp=sharing"
                target="_blank"
                className={classes.link}
              >
                Resume
              </a>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
