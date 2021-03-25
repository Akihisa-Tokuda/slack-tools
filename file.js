const client = require('./client');

const list = async(filter) => {
    const list = await client.web.files.list(filter);
    return list.files;
}

const deleteFiles = async(filter,limit) => {
    const files = await list(filter);

    for (const file of files) {
        if(file.created > limit){continue};
        console.debug(file);
        await client.web.files.delete({file:file.id});
        console.log(`deleted ${file.name}`)
    }
}

module.exports = {
    list: list,
    deleteFiles:deleteFiles,
}