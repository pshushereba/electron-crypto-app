import axios from "axios";

const fetchCoinData = () => {
  return axios.create({
    baseURL: "https://api.coinranking.com/v2/",
    headers: {
      "x-access-token": process.env.COINRANK_API_KEY,
    },
  });
};

export default fetchCoinData;
