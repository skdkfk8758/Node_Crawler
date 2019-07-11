const request = require('request')
const cheerio = require('cheerio')

// 구글 타이틀확인하는 테스트 (가상테스트)
exports.html_title_Google = (callback) => {
    request.get('http://www.google.com', (error, response, body) => {
        const $ = cheerio.load(body)
        callback($('title').text())
    })
}

// 멜론차트에서 제목과 가수를 가져오는 테스트
exports.return_song_info_by_melon = (callback) => {
    request.get('https://www.melon.com/chart/', (error, response, body) => {
        const $ = cheerio.load(body)

        const info = $('.wrap_song_info > div').attr("class").split(' ')[0]
    console.log(info)
    // return

        // var aaa = []
        // $('.ellipsis > span > a').map(function() {
        //     console.log($(this).text())
        //     aaa.push($(this).text())
        // }).get().join(' ');

        // console.log(aaa)

        callback(info)
    })
}
