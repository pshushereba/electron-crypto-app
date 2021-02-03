import React, { useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import TweetContainer from "../components/feed/TweetContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: "2.5rem",
    height: "75vh",
  },
}));

const Feeds = ({ bbcAcct, bbcTweets, ethAcct, ethTweets }) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.mainContainer} maxWidth={false}>
        <CssBaseline />
        <Grid container={true} spacing={4} justify="space-around">
          <Grid item={true} xs={12} sm={6} md={4}>
            {bbcTweets && <TweetContainer tweets={bbcTweets} user={bbcAcct} />}
          </Grid>

          <Grid item={true} xs={12} sm={6} md={4}>
            {ethTweets && <TweetContainer tweets={ethTweets} user={ethAcct} />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bbcTweets: state.tweetReducer.tweets.bbcAfrica,
    bbcAcct: state.tweetReducer.users[0],
    ethTweets: state.tweetReducer.tweets.ethereum,
    ethAcct: state.tweetReducer.users[1],
  };
};

export default connect(mapStateToProps, {})(Feeds);
