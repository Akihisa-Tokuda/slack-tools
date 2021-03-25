const {WebClient} = require('@slack/web-api');
const user = require('./user');
const file = require('./file');
const channel = require('./channel');

const main = async() => {

    const days_before = process.env.SLACK_FILE_DEL_TARGET_DATE;
    const unix_time =  Math.floor(Date.parse(`${days_before} 00:09:00 GMT`)/1000);
    console.log(unix_time);

    const target_mail = process.env.SLACK_FILE_DEL_TARGET_MAIL;
    if(target_mail){
        console.log(`target mail is ${target_mail}`)
        const users = await user.getUserIdsByMailAddress([target_mail]);
        for (const user of users){
            console.log(await file.deleteFiles({"user": user,count: 1000}),unix_time);
        }
    }

    const target_channel = process.env.SLACK_FILE_DEL_TARGET_CHANNEL;
    if(target_channel){
        console.log(`target channel is ${target_channel}`)
        const channels = await channel.channelIds([target_channel]);
        console.log(channels)
        for (const c of channels){
            console.log(await file.deleteFiles({"channel": c,count: 1000}),unix_time);
        }
    }

}

main()