import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { getUsers, getTweets } from "../actions/index.js";

const accounts = [36670025, 2312333412];

const Feeds = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(getTweets(36670025));
    dispatch(getTweets(2312333412));
  }, []);

  return (
    <div>
      <h3>Will render Twitter data here.</h3>
      {/* <TwitterTimelineEmbed
        sourceType="profile"
        id="539487832448843776"
        userId={36670025}
        screenName="BBCAfrica"
      /> */}
    </div>
  );
};

export default Feeds;
