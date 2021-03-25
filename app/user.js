const client = require('./client');

const list = async() => {
    const list = await client.web.users.list();
    return list.members;
}

const getUserIdsByMailAddress = async (mails) => {
    const res = await list();
    let l =[];
    mails.forEach(ml => {
        res.filter(m => m.is_email_confirmed).forEach(m => {
            if(m.profile.email == ml) {l.push(m.id)}
        });
    })
    return l;
}

const mapUserName = (id,list) => {
    const user = list.find(u => u.id == id);
    if(typeof user === 'undefined'){
        return "unKnown";
    }

    return user.name;
}

module.exports = {
    list: list,
    getUserIdsByMailAddress: getUserIdsByMailAddress,
    mapUserName: mapUserName,
}  