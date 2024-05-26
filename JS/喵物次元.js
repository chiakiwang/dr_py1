var rule = {
  title:'喵物次元',
  host:'https://www.mwcy.net',
  url:'/catshow/fyclass/page/fypage.html',
  class_name:'动画&剧场&周番',
  class_url:'1&2&3',
  searchUrl:'',
  searchable:2,
  quickSearch:0,
  filterable:1,
  filter:'',
  filter_url:'',
  filter_def:{},
  headers:{
      'User-Agent':'MOBILE_UA',
  },
  timeout:5000,
  class_parse:'#side-menu li;a&&Text;a&&href;/(.*?)\.html',
  cate_exclude:'',
  play_parse:true,
  lazy:$js.toString(()=>{
    input = {parse:1,url:input,js:''};
  }),
  double:true,
  推荐:'列表1;列表2;标题;图片;描述;链接;详情',
  一级:$js.toString(()=>{
      let d = [];
      let list_css = '.public-list-box';
      if(MY_CATE=='3'){
        //MY_URL = urljoin(MY_URL,'/label/weekday.html');
        MY_URL = 'https://www.mwcy.net/index.php/api/weekday';
        let t1 = Math.floor(Date.now() / 1000);
        let html = post(MY_URL,{body:`weekday=一&num=20&by=time&type=&time=${t1}&key=9f35de473ddf3bae9416f089ce0777c5`});
        VODS = JSON.parse(html).list
        
      }else{
      let html = request(MY_URL);
      pdfa(html,list_css).forEach(it=>{
        d.push({
        title: pdfh(it,'a&&title'),
        desc:pdfh(it,'.ft2&&Text'),
        img:pdfh(it,'img&&data-src'),
        url:pd(it,'a&&href',MY_URL)
      });
      });
      setResult(d);
      }
      
      
  }),
  二级:{
    title:'vod_name;vod_type',
    img:'图片链接',
    desc:'主要信息;年代;地区;演员;导演',
    content:'简介',
    tabs:'',
    lists:'xx:eq(#id)&&a',
    tab_text:'body&&Text',
    list_text:'body&&Text',
    list_url:'a&&href',
    list_url_prefix: '',
  },
  搜索:'列表;标题;图片;描述;链接;详情',
}
