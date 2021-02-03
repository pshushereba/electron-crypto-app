# electron-crypto-app

An application to track various cryptocurrency prices using React and Electron

- My Operating System: macOS Catalina
- Version of Node: 14.15.4
  <br>
  <br>

# Installation Instructions

- Fork and Clone this Repository
- CD to your local copy of the repo
- In terminal type EITHER `npm install` or `yarn install`
  <br>
  <br>

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

```
COINRANK_API_KEY=YOUR_API_KEY
TWITTER_API_KEY=YOUR_API_KEY
TWITTER_API_SECRET_KEY=YOUR_API_KEY
TWITTER_BEARER_TOKEN=YOUR_API_KEY
```

<br>
<br>

# Set scripts key in package.json

```javascript
"scripts": {
    "start": "electron .",
    "watch": "webpack --config webpack.config.js --watch"
  }
```

<br>
<br>

# APIs Used:

- [Coinrank](https://developers.coinranking.com/api/documentation/)
- [Twitter API](https://developer.twitter.com/en)
  <br>
  <br>

## Coinrank UUID for requested coins:

| Coin    | UUID          | Image URL                                       |
| ------- | ------------- | ----------------------------------------------- |
| Cardano | qzawljRxB5bYu | https://cdn.coinranking.com/ryY28nXhW/ada.svg   |
| Tezos   | fsIbGOEJWbzxG | https://cdn.coinranking.com/HkLUdilQ7/xtz.svg   |
| Burst   | LUbkfWw7GwJ73 | https://cdn.coinranking.com/HJd-fB5NG/burst.svg |

<br>
<br>

## Sample API responses

<br>

### Request users from Twitter API

```javascript
{
    "data": [
        {
            "url": "https://t.co/OHYYkRTi7o",
            "name": "BBC News Africa",
            "profile_image_url": "https://pbs.twimg.com/profile_images/974268677808951296/liHjl2Rl_normal.jpg",
            "verified": true,
            "public_metrics": {
                "followers_count": 3215420,
                "following_count": 1388,
                "tweet_count": 84547,
                "listed_count": 7753
            },
            "id": "36670025",
            "username": "BBCAfrica"
        },
        {
            "url": "http://t.co/4ddfpMCNLY",
            "name": "Ethereum",
            "location": "worldwide",
            "profile_image_url": "https://pbs.twimg.com/profile_images/1084788308595617793/DOnqq1OM_normal.jpg",
            "verified": true,
            "public_metrics": {
                "followers_count": 646228,
                "following_count": 0,
                "tweet_count": 2891,
                "listed_count": 6925
            },
            "id": "2312333412",
            "username": "ethereum"
        }
    ]
}
```

### Request Tweets from specified user

```javascript
{
    "data": [
        {
            "id": "1356810639407263744",
            "text": "RT @WeekInEthNews: ⟠ Latest Week in $ETH News\n\n🤝 @reddit partners with Eth Foundation\n⬆️ proposal for first proof of stake chain upgrade…",
            "author_id": "2312333412",
            "public_metrics": {
                "retweet_count": 43,
                "reply_count": 0,
                "like_count": 0,
                "quote_count": 0
            },
            "created_at": "2021-02-03T03:43:59.000Z"
        },
        {
            "id": "1356714710465454086",
            "text": "RT @trent_vanepps: Workshop: Sharding and Eth1+Eth2 Merge 🤝\n\n1. (UTC 21:10-22:40 ): The Sharding Design and the Cryptographic Primitives @d…",
            "author_id": "2312333412",
            "public_metrics": {
                "retweet_count": 34,
                "reply_count": 0,
                "like_count": 0,
                "quote_count": 0
            },
            "created_at": "2021-02-02T21:22:48.000Z"
        },
    ]
}
```

### Request Coin Price Data

```javascript
{
    "status": "success",
    "data": {
        "stats": {
            "total": 3,
            "totalMarkets": 68286,
            "totalExchanges": 212,
            "totalMarketCap": "1124930769275.65618676055701700377",
            "total24hVolume": "127138643262.40293061230568536622"
        },
        "coins": [
            {
                "uuid": "fsIbGOEJWbzxG",
                "symbol": "XTZ",
                "name": "Tezos",
                "color": "#2c7df7",
                "iconUrl": "https://cdn.coinranking.com/HkLUdilQ7/xtz.svg",
                "marketCap": "2291530697.02253699615577455499",
                "price": "3.0199506957910766566",
                "listedAt": 1530662400,
                "tier": 1,
                "change": "4.717958098914892",
                "rank": 23,
                "sparkline": [
                    "2.88669859596853909132",
                ],
                "coinrankingUrl": "https://coinranking.com/coin/fsIbGOEJWbzxG+tezos-xtz",
                "24hVolume": "376313515.59961526998378861394",
                "btcPrice": "0.000082132582398071"
            },
        ]
    }
}
```
