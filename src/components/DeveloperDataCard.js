import React, { useEffect } from "react";
var QRCode = require("qrcode.react");
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: "2rem",
  },
}));

const DeveloperDataCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h4" gutterBottom="true" align="center">
        Patrick Shushereba
      </Typography>
      <Typography variant="body1" gutterBottom="true">
        Symbol: PS
      </Typography>
      <Typography variant="body2" gutterBottom="true">
        Current Price: Negotiable
      </Typography>
      <QRCode size={100} level="M" value="Patrick Shushereba" />
    </Card>
  );
};

export default DeveloperDataCard;
