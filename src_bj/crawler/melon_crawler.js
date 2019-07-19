import request from 'request'
import cheerio from 'cheerio'
import DAO from '../DAO';

export const scrap_melon = async (res) => {    
    await request.get('https://www.melon.com/chart/', async (error, response, body) => {

        const $ = cheerio.load(body)

        var music_list = []

        var count_2 = 0

        // let list = await
        var promise_list = $('.lst50').map(async function() { 

            const $ = cheerio.load(this)

            // 순위
            let rank = await $('.rank').map(function() { return $(this).text() })

            // 제목
            let title = await $('.rank01 > span > a').map(function() { return $(this).text() })

            // 가수
            let musition = await $('.rank02 > span > a').map(function() { return $(this).text() })

            // 앨범
            let album = await $('.rank03 > a').map(function() { return $(this).text() })

            // 이미지
            let image = await $('.image_typeAll > img').map(function() { return $(this).attr('src') })

            // 비디오 링크
            let video_src = `https://www.youtube.com/results?search_query=${title[0]}+${musition[0]}`

            music_list.push({ ranking: rank[0], title: title[0], musition: musition[0], album: album[0], image_src: image[0], video_src: video_src })
        })
            
        await promise_list[0]

        music_list.map(item => {
            var new_item = item
            new_item.platform = "melon"

            DAO.query('INSERT INTO music_chart SET ?', new_item)
                .then(result => { count ++ ; console.log(`데이터 추가 성공 ${new_item.title}`) })
                .catch(e => console.log(e))
        })
    })
}
