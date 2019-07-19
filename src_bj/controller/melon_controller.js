import DAO from "../../src_bj/DAO";
import { youtube_api } from "../library/youtubeAPI";



const fetch_melon_list=async()=>{

    return new Promise((resolve,reject)=>{
        DAO.query(`SELECT * FROM music_chart`)
        .then(result => { 
               
            resolve(result)  
            })
           
        })
    }




const MelonController={
    fetch_melon_list
}

export default MelonController;