function getLikes(args){
    let idUser = args;
    let  likes = [];
    console.log(idUser);
    async function data (idUser){
        let res = await axios.get("http://172.17.0.1:" + "3000/gatherme-users-ms" + "/user-username/" + idUser)
        console.log(res.data[0]['likes']);
        likes = res.data[0]['likes']
    }
    
    return {likes: likes}

}

module.exports = {getLikes}