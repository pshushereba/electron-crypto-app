import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import fetchCoinData from "../utils/fetchCoinData.js";
import CoinDataCard from "../components/CoinDataCard.js";
import DeveloperDataCard from "../components/DeveloperDataCard.js";
import { useDispatch } from "react-redux";
import { getUsers, getBBCTweets, getETHTweets } from "../actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: "2.5rem",
    height: "75vh",
  },
}));

// const captureScreen = (type, name) => {
//   html2canvas(document.querySelector(`#capture`)).then((canvas) => {
//     let dataURL = canvas.toDataURL("image/png");

//     if (type === "pdf") {
//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "in",
//         format: [9, 11],
//       });

//       pdf.addImage(dataURL, "PNG", 0.6, 0.6);
//       pdf.save(`${name}.pdf`);
//     } else if (type === "png") {
//       var link = document.createElement("a");
//       link.download = `${name}.png`;
//       link.href = dataURL;
//       link.click();
//     }
//   });
// };

const Home = () => {
  const [coinInfo, setCoinInfo] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    fetchCoinData()
      .get(
        "/coins?uuids[]=fsIbGOEJWbzxG&uuids[]=LUbkfWw7GwJ73&uuids[]=qzawljRxB5bYu"
      )
      .then((res) => {
        setCoinInfo(res.data.data.coins);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getBBCTweets());
    dispatch(getETHTweets());
  }, []);

  return (
    <>
      {/* <div id={`capture`}> */}
      <CssBaseline />
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} sm={6} md={4}>
            <DeveloperDataCard />
          </Grid>
          {coinInfo
            ? coinInfo.map((coin) => {
                return (
                  <Grid item={true} xs={12} sm={6} md={4}>
                    <CoinDataCard data={coin} key={coin.uuid} />
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Container>
      {/* </div> */}
    </>
  );
};

export default Home;
