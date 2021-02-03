import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { getUsers, getBBCTweets, getETHTweets } from "../actions/index.js";

const accounts = [36670025, 2312333412];

const Feeds = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    dispatch(getBBCTweets());
    dispatch(getETHTweets());
  }, []);

  return (
    <div>
      <h3>Will render Twitter data here.</h3>
    </div>
  );
};

export default Feeds;
