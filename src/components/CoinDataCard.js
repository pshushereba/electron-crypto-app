import React, { useEffect } from "react";
var QRCode = require("qrcode.react");
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import generateQRValue from "../utils/generateQRValue.js";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: "2rem",
  },
}));

const CoinDataCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="h4" gutterBottom="true">
        {props.data.name}
      </Typography>
      <Typography variant="body1" gutterBottom="true">
        {props.data.symbol}
      </Typography>
      <Typography variant="body2" gutterBottom="true">
        {props.data.price}
      </Typography>
      <QRCode
        size={100}
        level="M"
        imageSettings={{ src: props.data.iconUrl, height: 16, width: 16 }}
        value={generateQRValue(
          props.data.name,
          props.data.price,
          props.data.symbol
        )}
      />
    </Card>
  );
};

export default CoinDataCard;
