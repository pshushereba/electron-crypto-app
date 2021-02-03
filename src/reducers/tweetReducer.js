import {
  GET_TWITTER_USERS_START,
  GET_TWITTER_USERS_SUCCESS,
  GET_TWITTER_USERS_FAIL,
  GET_TWEETS_START,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAIL,
} from "../actions/index.js";

const initialState = {
  users: [],
  tweets: [],
  error: null,
  isFetching: false,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWITTER_USERS_START:
      return {
        ...state,
        isFetching: true,
      };

    case GET_TWITTER_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
      };

    case GET_TWITTER_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_TWEETS_START:
      return {
        ...state,
        isFetching: true,
      };

    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
        isFetching: false,
      };

    case GET_TWEETS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default tweetReducer;
