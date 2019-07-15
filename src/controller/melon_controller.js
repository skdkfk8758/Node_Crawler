import DAO from "../DAO";

// 멜론차트 출력
const fetch_melon_chart = async () => {   
    const list = await DAO.query(`SELECT * FROM music_chart`).catch(e => console.log(e))

    return list
}


const MelonController = {
    fetch_melon_chart,
}

export default MelonController