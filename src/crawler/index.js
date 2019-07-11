import request from 'request'
import cheerio from 'cheerio'
import model from '../model/melon_songinfo_bj';
import { CLIENT_RENEG_LIMIT } from 'tls';
import DAO from '../DAO';


export const req_google = () => {
    request.get('http://www.google.com', (error, response, body) => {
        const $ = cheerio.load(body)
        console.log($('title').text())
    })
}

var title = new Array(),
    artist = new Array(),
    up_date,
    up_time;
var music_Array=[]

export const req_melon = () => {
    request.get('https://www.melon.com/chart/', (error, response, body) => {
        const $ = cheerio.load(body)
        // console.log(model.songinfomodel) 

         //   $('.ellipsis>span>a').map(function() {
        $('.lst50').map(function() {
           var $ = cheerio.load(this)

           var music_item={}           
           $('.rank').map(function(){
               music_item['Ranking'] = $(this).text()
           })
           $('.rank01>span>a').map(function(){
            music_item['Title'] = $(this).text()
           })
           $('.rank02>span>a').map(function(){
            
            music_item['Artist'] = $(this).text()
           })
           $('.rank03>a').map(function(){
               
            music_item['Album'] = $(this).text()
           })
        //    console.log(music_item)
            // console.log('========================')
           music_Array.push(music_item)
        }).get().join(' ');

        // console.log(music_Array)

        music_Array.map(item=>{
            console.log(item)
            // var insert_sql='INSERT INTO music_chart(ranking,Artist,Album,title,platform) VALUES( & ,& ,& ,& ,& )'
            DAO.query(`insert into music_chart(ranking,Artist,Album,title,platform) 
            VALUES("${item.Ranking}", "${item.Artist}", "${item.Album}", "${item.Title}", 'Melon')`).then(result=>{

            })
            // .catch(e=>console.log())
        })

        var selectsql = 'select * from music_chart'
        
        DAO.query(selectsql)
        .then(result=>{
        })
        .catch(e=>console.log(e))
       // console.log(aaa)
    })
}



