var rule = {
    title:'吸瓜',
    host:'https://xgsp.tv',
    url:'',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'女主播&情侣&男主播&变性人',//静态分类名称拼接
    class_url:'中文&顶级免费现场视频&情侣性爱直播&最新 & 热门女主播&VR直播',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.l-post div&&a;a&&title;span&&data-bgsrc;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
}
