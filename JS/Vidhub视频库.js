var rule = {
  author:'龙哥第一版',
  title:'Vidhub视频库',     
  host:'https://vidhub.tv/',
  url:'vodshow/fyclass--------fypage---.html',          
  searchUrl:'/vodsearch/**----------fypage---.html',
  searchable:2,
  quickSearch:0,
  filterable:1,
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,
  class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'.module;*;*;*;*;*',          
  一级:'.module-item-cover;a&&title;img&&data-src;.module-item-cover&&span:eq(1)&&Text;a&&href',              
  二级:{
    title:'h1&&Text;.tag-link a:eq(1)&&Text',    
    img:'.view-heading&&img:eq(1)&&data-src',    
    desc:'.view-heading&&a:eq(1)&&Text;.view-heading&&a:eq(4)&&Text;a:eq(5)&&Text;.video-info-actor:eq(1)&&Text;.video-info-items&&a&&Text',
    content:'.video-info-content&&Text',    
    tabs:'.module-tab-item',        
    lists:'.module-blocklist:eq(#id)&&a',
    tab_text:'body&&Text',        
    list_text:'body&&Text',      
    list_url:'a&&href'          
  },
  搜索: '*',
  
}