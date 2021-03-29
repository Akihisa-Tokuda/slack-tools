const {WebClient} = require('@slack/web-api');
const user = require('./user');
const file = require('./file');
const channel = require('./channel');

const main = async() => {

    const days_before = process.env.SLACK_FILE_DEL_TARGET_DATE;
    const unix_time =  Math.floor(minusDateUnixMills(days_before)/1000);
    const fileType = process.env.SLACK_UPLOAD_FILE_TYPE;

    const target_mail = process.env.SLACK_FILE_DEL_TARGET_MAIL;
    if(target_mail){
        console.log(`target is ${target_mail}`)
        const users = await user.getUserIdsByMailAddress([target_mail]);
        for (const user of users){
            await file.deleteFiles({"user": user,count: 1000, types: fileType},unix_time);
        }
    }

    const target_channel = process.env.SLACK_FILE_DEL_TARGET_CHANNEL;
    if(target_channel){
        console.log(`target is ${target_channel}`)
        const channels = await channel.channelIds([target_channel]);
        console.log(channels)
        for (const c of channels){
            await file.deleteFiles({"channel": c,count: 1000,types: fileType},unix_time);
        }
    }

}

const minusDateUnixMills = (minus) => {
    let date = new Date();
    date.setDate(date.getDate() - minus);
    console.log(date)
    return Math.floor(date)
}

main()