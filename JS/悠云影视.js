muban.mxpro.二级.title = 'h1&&Text;.module-info-tag&&Text';
muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tab_text = 'body--small&&Text';
var rule = {
	title:'悠云影视', 
	模板:'mxpro',
	host:'https://yoyys1.com',
	url:'/vodshow/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
	filter: {
		"1":[],
		"2":[],
		},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
	},
	class_parse: '.navbar-items&&li:gt(1):lt(7);a&&title;a&&href;.*/(.*?).html',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		} else {
			input
		}
	`,
	推荐: '*',
	double: false, // 推荐内容是否双层定位

	// searchUrl:'/vodsearch/-------------.html?wd=**',
	searchUrl:'/vodsearch/-------------.html?wd=**',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}