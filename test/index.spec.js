var assert = require("assert");
const html_title_Google = require('.').html_title_Google
const html_songinfo_Melon=require('.').html_songinfo_Melon

/*
describe('구글 타이틀 확인', () => {
	it('구글의 타이틀은 Google입니다', (done) => {
        html_title_Google(callback => {
            assert.equal(callback, 'Google')
            done()
        })
    });
});
*/
//멜론 songinfo
describe('멜론SongInfo 확인',()=>{
    it('멜론 곡 잘가져옴,',(done)=>{
        html_songinfo_Melon(callback=>{
            assert.equal(callback,'ellipsis rank01')
            done()
        })
    })
})