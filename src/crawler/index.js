import request from 'request'
import cheerio from 'cheerio'
import DAO from '../DAO';

export const req_melon = async () => {    
    await request.get('https://www.melon.com/chart/', async (error, response, body) => {

        const $ = cheerio.load(body)

        var music_list = []

        let list = await $('.lst50').map(async function() { 

            const $ = cheerio.load(this)

            // 순위
            let rank = await $('.rank').map(function() { return $(this).text() })

            // 제목
            let title = await $('.rank01 > span > a').map(function() { return $(this).text() })

            // 가수
            let musition = await $('.rank02 > span > a').map(function() { return $(this).text() })

            // 앨범
            let album = await $('.rank03 > a').map(function() { return $(this).text() })

            music_list.push({ ranking: rank[0], title: title[0], musition: musition[0], album: album[0] })
        })

        await list[0]

        music_list.map(item => {
            var new_item = item
            new_item.platform = "melon"

            DAO.query('INSERT INTO music_chart SET ?', new_item)
                .then(result => console.log(result))
                .catch(e => console.log(e))
        })

        DAO.query(`SELECT * FROM music_chart`)
            .then(result => { console.log(result) })
            .catch(e => console.log(e))

    })
}
