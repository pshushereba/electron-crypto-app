import axios from "axios";

const fetchTwitterInfo = () => {
  return axios.create({
    baseURL: "https://api.twitter.com/2",
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  });
};

export default fetchTwitterInfo;
