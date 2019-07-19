import MelonController from '../controller/melon_controller';

var request=require('request');

export const youtube_api= async(q_option)=>{

        
    var optionParams={
        q:q_option,
        part:"snippet",
        key:"AIzaSyDvU4cAoU3fMHJwOcMW1DUjottpmHzSj8U",
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

    return new Promise((resolve,reject)=>{
        request(url, function(err, res, body){
            if(err) {reject(err); return}
            if(JSON.parse(body).items!=undefined && JSON.parse(body).items.length>0){
                resolve(JSON.parse(body).items[0].id.videoId)
            }
            else{
                resolve('')
            }
        });
    })
}
 