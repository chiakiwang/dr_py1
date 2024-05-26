var rule = {
  title: '暖光影视',
  host: 'https://www.bl210.xyz/',
  url: '/frim/fyclass-fypage.html',
  searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'ul.myui-vodlist.clearfix;li;*;*;*;*',
  double: true,
  一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.myui-content__detail .title&&Text;.myui-content__detail p a&&Text',
    img: '.myui-content__thumb .lazyload&&data-original',
    desc: ';.myui-content__detail p a:eq(2)&&Text;.myui-content__detail p a:eq(1)&&Text;.myui-content__detail p--span:eq(1)&&Text;.myui-content__detail p--span:eq(2)&&Text',
    content: '.sketch&&Text',
    tabs: '.nav-tabs:eq(0) li',
    lists: '.stui-content__playlist:eq(#id) li',
  },
  搜索: '#searchList li;*;*;*;*',
}