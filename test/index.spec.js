
var assert = require("assert");
const html_title_Google = require('.').html_title_Google
const html_songinfo_Melon=require('.').html_songinfo_Melon

//멜론 songinfo
describe('멜론SongInfo 확인',()=>{
    it('멜론 곡 잘가져옴,',(done)=>{
        html_songinfo_Melon(callback=>{
            assert.equal(callback,'ellipsis rank01')
            done()
        })
    })
})

describe('wrap_song_info내용 확인', () => {
	it('잘 가져왓어', (done) => {
        return_wrap_song_info(callback => {
            assert.equal(callback, 'ellipsis')
            done()
        })
    });
});

