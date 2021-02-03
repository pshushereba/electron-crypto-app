import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tweet from "./Tweet.js";
import { connect, useDispatch } from "react-redux";
import {
  Button,
  Avatar,
  TextField,
  Typography,
  List,
  ListItem,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    height: "400px",
    paddingBottom: "2rem",
    marginBottom: "2.5rem",
    overflow: "scroll",
  },
}));

const TweetContainer = (props) => {
  const classes = useStyles();
  console.log(props.user);
  return (
    <>
      <Grid container={true} direction="column">
        <Grid item={true}>
          <Grid container={true} spacing={4}>
            <Grid item={true}>
              <Avatar src={props.user.profile_image_url} />
            </Grid>
            <Grid item={true}>
              <Typography>{props.user.name}</Typography>
              <Typography>@{props.user.username}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <List className={classes.messageContainer}>
          {props.tweets.map((tweet) => {
            return <Tweet data={tweet} key={tweet.created_at} />;
          })}
        </List>
      </Grid>
    </>
  );
};

export default TweetContainer;
