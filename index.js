/*
// Import the libraries
const pantry = require('pantry-node');
const { TwitterApi } = require('twitter-api-v2');

// Create a new pantry client with your ID from environment variable
const pantryID = process.env.PANTRY_ID;
const pantryClient = new pantry(pantryID);

// Create a new TwitterApi object with your app key, app secret, access token and access token secret from environment variables
const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET
});

// Set the options for parsing JSON
const options = { parseJSON: true };

main()
async function main() {
    const GetPosts = await GetPostsFunction();
    const PostsArray = await Object.values(GetPosts)[0];
    const ChosenPostGet = await ChosenPost(PostsArray.length);
    const PostToPublish = PostsArray[ChosenPostGet];
    await postTweet(PostToPublish);
}

async function GetPostsFunction() {
    return new Promise((resolve) => {
        pantryClient.basket
            .get(process.env.AUTO_POSTING, options)
            .then((contents) => resolve(contents))
    })
}

async function ChosenPost(PostsArrayLength) {
    return new Promise((resolve) => {
        const num = Math.random();
        const ChosenPostNum = Math.floor(num * (PostsArrayLength - 1));
        resolve(ChosenPostNum);
    })
}

async function postTweet(data) {
    // Use the v2 tweet method to post a tweet with text
    const tweet = await client.v2.tweet(data);

    // Log the tweet ID and URL
    console.log(tweet.data.id);
}
*/
main() {
  const runNumber = process.env.GITHUB_RUN_NUMBER;
  console.log("This is run number " + runNumber);
}
