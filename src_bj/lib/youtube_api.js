import { YOUTUBE_API_KEY } from '../../config';

var request=require('request');

export const call_youtube = async (query) => {
    var optionParams={
        q:query,
        part:"snippet",
        key: YOUTUBE_API_KEY,
        type:"video",
        maxResults:1,
        regionCode:"KR",
        videoDuration:"short"
    };
    
    //한글을 검색어로 전달하기 위해선 url encoding 필요!
    optionParams.q=encodeURI(optionParams.q);
    
    //그냥 간단하게 확인하기 쉽게하려고 maxResults 2로 했음
    var url="https://www.googleapis.com/youtube/v3/search?";
    for(var option in optionParams){
        url+=option+"="+optionParams[option]+"&";
    }
    
    //url의마지막에 붙어있는 & 정리
    url=url.substr(0, url.length-1);

    return new Promise((resolve, reject) => {
        request(url, function(err, res, body){
            if(err) { reject(err); return }
            console.log(body)
            var items = JSON.parse(body).items
            if (items != undefined && items.length > 0) { resolve(items[0].id.videoId) }
            else { resolve("") }
        });
    })
}