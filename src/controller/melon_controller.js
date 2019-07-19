import DAO from "../DAO";

const fetch_melon_list=async()=>{
    var result=await DAO.query(`SELECT * FROM music_chart`)
    .then(result => { return result })
    .catch(e => console.log(e))
    
    return result
}

const MelonController={
    fetch_melon_list
}

export default MelonController;