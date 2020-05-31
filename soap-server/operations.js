const axios = require('axios')
async function getLikes(args) {
    let idUser = args;
    let likes = [];
    console.log(idUser);
    let host = '172.17.0.1'

    let res = await axios.get(`http://${host}:3000/gatherme-users-ms/user-username/${idUser}`)
    console.log(res.data[0]['likes']);
    likes = res.data[0]['likes']


    return { likes: likes }

}

module.exports = { getLikes }