import DAO from "../DAO";
import { call_youtube } from "../lib/youtube_api";

// 멜론차트 출력
const fetch_melon_chart = async () => {   
    return new Promise((resolve, reject) => {
        DAO.query(`SELECT * FROM music_chart`)
            .then(async result => { resolve(result) })
            .catch(e => console.log(e))
    })
}


const MelonController = {
    fetch_melon_chart,
}

export default MelonController