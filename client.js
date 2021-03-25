const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_API_TOKEN);


const postMessage = async (msg,channelId)  => {
    // Use the `auth.test` method to find information about the installing user
    const res = await web.auth.test()

    // Find your user id to know where to send messages to
    const userId = res.user_id

    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
    channel: channelId ? channelId : userId,
    text: `${msg}`,
    });

    console.log('Message posted!');
};


module.exports = {
    web: web,
    postMessage: postMessage,
}  