const client = require('./client');

const list = async (channelNames) => {
    const l =  await client.web.conversations.list();
    let list = []
    for (const c of channelNames){
        l.channels.forEach(e => {
            if(e.name == c) {
                list.push(e);
            }
         })
    }

    return list;
};

const channelIds = async(channelNames) =>{
    const channels =  await list(channelNames);
    let ids=[]
    for (const c of channels){
        ids.push(c.id);
    }
    return ids;
}

module.exports = {
    list: list,
    channelIds: channelIds,
}  
