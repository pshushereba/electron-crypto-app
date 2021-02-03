import axiosTwitterWrapper from "../utils/axiosTwitterWrapper.js";

// Price Reducer Actions

export const GET_PRICES_START = "GET_PRICES_START";
export const GET_PRICES_SUCCESS = "GET_PRICES_SUCCESS";
export const GET_PRICES_FAIL = "GET_PRICES_FAIL";

export const GET_TWITTER_USERS_START = "GET_TWITTER_USERS_START";
export const GET_TWITTER_USERS_SUCCESS = "GET_TWITTER_USERS_SUCCESS";
export const GET_TWITTER_USERS_FAIL = "GET_TWITTER_USERS_FAIL";

export const GET_BBC_TWEETS_START = "GET_BBC_TWEETS_START";
export const GET_BBC_TWEETS_SUCCESS = "GET_BBC_TWEETS_SUCCESS";
export const GET_BBC_TWEETS_FAIL = "GET_BBC_TWEETS_FAIL";

export const GET_ETH_TWEETS_START = "GET_ETH_TWEETS_START";
export const GET_ETH_TWEETS_SUCCESS = "GET_ETH_TWEETS_SUCCESS";
export const GET_ETH_TWEETS_FAIL = "GET_ETH_TWEETS_FAIL";

export const getUsers = () => (dispatch) => {
  dispatch({ type: GET_TWITTER_USERS_START });
  axiosTwitterWrapper()
    .get(
      "/users?ids=36670025,2312333412&user.fields=location,profile_image_url,public_metrics,url,verified"
    )
    .then((res) => {
      dispatch({ type: GET_TWITTER_USERS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_TWITTER_USERS_FAIL, payload: err });
    });
};

export const getBBCTweets = () => (dispatch) => {
  dispatch({ type: GET_BBC_TWEETS_START });
  axiosTwitterWrapper()
    .get(
      `/users/36670025/tweets?max_results=100&expansions=author_id&tweet.fields=author_id,created_at,public_metrics&user.fields=created_at,description,location,id,name,profile_image_url,username,verified`
    )
    .then((res) => {
      dispatch({ type: GET_BBC_TWEETS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_BBC_TWEETS_FAIL, payload: err });
    });
};

export const getETHTweets = () => (dispatch) => {
  dispatch({ type: GET_ETH_TWEETS_START });
  axiosTwitterWrapper()
    .get(
      `/users/2312333412/tweets?max_results=100&expansions=author_id&tweet.fields=author_id,created_at,public_metrics&user.fields=created_at,description,location,id,name,profile_image_url,username,verified`
    )
    .then((res) => {
      dispatch({ type: GET_ETH_TWEETS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ETH_TWEETS_FAIL, payload: err });
    });
};
