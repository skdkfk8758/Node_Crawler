const request = require('request')
const cheerio = require('cheerio')

//멜론 차트에서 song info를 가져오는 테스트
exports.html_songinfo_Melon = (callback) => {
    request.get('https://www.melon.com/chart/', (error, response, body) => {
        const $ = cheerio.load(body)

        const test=$('.wrap_song_info > div').attr('class')
        console.log(test)
        callback(test)
    })
}
}

// 멜론차트에서 제목과 가수를 가져오는 테스트
exports.return_song_info_by_melon = (callback) => {
    request.get('https://www.melon.com/chart/', (error, response, body) => {
        const $ = cheerio.load(body)

        const info = $('.wrap_song_info > div').attr("class").split(' ')[0]
        callback(info)
    })
}
