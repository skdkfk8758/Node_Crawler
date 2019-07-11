
var assert = require("assert");
const html_title_Google = require('.').html_title_Google
const return_wrap_song_info = require('.').return_song_info_by_melon

describe('구글 타이틀 확인', () => {
	it('구글의 타이틀은 Google입니다', (done) => {
        html_title_Google(callback => {
            assert.equal(callback, 'Google')
            done()
        })
    });
});

describe('wrap_song_info내용 확인', () => {
	it('잘 가져왓어', (done) => {
        return_wrap_song_info(callback => {
            assert.equal(callback, 'ellipsis')
            done()
        })
    });
});

