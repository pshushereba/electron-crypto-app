import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import fetchCoinData from "../utils/fetchCoinData.js";
import CoinDataCard from "../components/CoinDataCard.js";
import DeveloperDataCard from "../components/DeveloperDataCard.js";
import { useDispatch } from "react-redux";
import { getUsers, getBBCTweets, getETHTweets } from "../actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: "2.5rem",
    height: "75vh",
  },
}));

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
    </>
  );
};

export default Home;
