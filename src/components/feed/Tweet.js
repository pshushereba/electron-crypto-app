import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Grid, Divider } from "@material-ui/core";

const Tweet = (props) => {
  return (
    <>
      <ListItem button>
        <Typography variant="body2" gutterBottom="true">
          {props.data.text}
        </Typography>
        <Divider />
      </ListItem>
    </>
  );
};

export default Tweet;
