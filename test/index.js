const request = require('request')
const cheerio = require('cheerio')

// 구글사이트 확인하는 테스트(가상테스트)
/*
exports.html_title_Google = (callback) => {
    request.get('http://www.google.com', (error, response, body) => {
        const $ = cheerio.load(body)
        callback($('title').text())
    })
}*/

//멜론 차트에서 song info를 가져오는 테스트
exports.html_songinfo_Melon = (callback) => {
    request.get('https://www.melon.com/chart/', (error, response, body) => {
        const $ = cheerio.load(body)

        const test=$('.wrap_song_info > div').attr('class')
        console.log(test)
        callback(test)
    })
}