var rule = {
    title:'吸瓜',
    host:'https://xgsp.tv',
    // homeUrl:'',
    url:'/list/?fyclass-fypage.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers:{'User-Agent':'MOBILE_UA'},
            class_parse: '.header&&ul&&li;a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy: '',
            limit: 6,  
          推荐: 'body&&.content;div.drama;*;*;*;*',
          double:true,
          一级: '.content&&div.drama;.title&&Text;.imgcover&&style;p&&Text;a&&href',
          二级: {
                "title": ".title&&Text",
                "content": "pre&&Text",
                "tabs": ".items&&b",//解析源
                "lists": "body&&.items:eq(#id) li"
            },
 }
