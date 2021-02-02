import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import fetchCoinData from "../utils/fetchCoinData.js";
import CoinDataCard from "../components/CoinDataCard.js";
import DeveloperDataCard from "../components/DeveloperDataCard.js";

const Home = () => {
  const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    fetchCoinData()
      .get(
        "/coins?uuids[]=fsIbGOEJWbzxG&uuids[]=LUbkfWw7GwJ73&uuids[]=qzawljRxB5bYu"
      )
      .then((res) => {
        setCoinInfo(res.data.data.coins);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("coinInfo", coinInfo);
  return (
    <>
      <Container maxWidth={false}>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} sm={6} md={4}>
            <DeveloperDataCard />
          </Grid>
          {coinInfo
            ? coinInfo.map((coin) => {
                return (
                  <Grid item={true} xs={12} sm={6} md={4}>
                    <CoinDataCard data={coin} />
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
