(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-shoplist"],{"06ba":function(t,i,e){"use strict";e.r(i);var a=e("526e"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},1682:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".shoplist[data-v-1a927caa]{width:100%;height:100%}.tab[data-v-1a927caa]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:2px #ebebeb solid;-webkit-box-sizing:border-box;box-sizing:border-box}.tab-left[data-v-1a927caa]{width:85%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:4%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tab-left-title[data-v-1a927caa]{width:32%;height:%?90?%;line-height:%?90?%;text-align:center;font-size:%?30?%;color:#c8536e;font-weight:600;-webkit-box-sizing:border-box;box-sizing:border-box}.title-sx[data-v-1a927caa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.active[data-v-1a927caa]{border-bottom:2px #fd5085 solid}.tab-left-box[data-v-1a927caa]{width:%?30?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?10?%}.tab-left-title-img[data-v-1a927caa]{width:%?30?%;height:%?30?%}.tab-right[data-v-1a927caa]{width:15%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tab-right-img[data-v-1a927caa]{width:%?50?%;height:%?50?%}\n\n/* 列表 */.list[data-v-1a927caa]{margin-bottom:0}\n\n/* 弹出的选框\t */.tab-click[data-v-1a927caa]{width:100%;height:100%;position:fixed;right:0;top:%?90?%;background-color:hsla(0,0%,60%,.5);z-index:5}.tab-click-left[data-v-1a927caa]{width:30%;height:100%;float:left}.tab-click-box[data-v-1a927caa]{width:70%;height:100%;background-color:#fff;float:right}.tab-click-box-nav[data-v-1a927caa]{width:100%;height:100%}.tab-click-title[data-v-1a927caa]{width:100%;height:%?80?%;line-height:%?80?%;padding-left:%?15?%;font-size:%?32?%;background-color:#f8f8f8;border-bottom:1px #ccc solid}.tab-click-two[data-v-1a927caa]{width:100%;height:%?80?%;line-height:%?80?%;padding-left:%?15?%;font-size:%?32?%;background-color:#fff;border-bottom:1px #ccc solid;color:#6a6a6a}",""])},"526e":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("f499")),o={data:function(){return{res:null,tabhead:null,tabtitle:!1,faceValue:"0",oid:null,type:null,shoplist:null,shoptitle:null,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,loadingText:"正在加载..."}},onShow:function(){var t=this;uni.request({url:"../static/data/goodsList.json",method:"get",success:function(i){t.res=i.data,""!=i.data?("one"==t.type&&(t.shoplist=i.data.goodsListone[t.oid-1],t.shoptitle=i.data.goodtitle[0],t.tabhead="手机通讯"),"two"==t.type&&(t.shoplist=i.data.goodsListtwo[t.oid-1],t.shoptitle=i.data.goodtitle[1],t.tabhead="礼品鲜花"),"three"==t.type&&(t.shoplist=i.data.goodsListthree[t.oid-1],t.shoptitle=i.data.goodtitle[2],t.tabhead="男装女装"),"four"==t.type&&(t.shoplist=i.data.goodsListfour[t.oid-1],t.shoptitle=i.data.goodtitle[3],t.tabhead="母婴用品")):console.log("数据获取失败")}})},onLoad:function(t){console.log(t),this.oid=decodeURIComponent(t.id),this.type=decodeURIComponent(t.data)},methods:{getlist:function(){},shoplistclick:function(){uni.switchTab({url:"../pages/classify"})},shopdetail:function(t,i){var e=(0,s.default)(i),a=this.type,o=this.oid;uni.navigateTo({url:"../components/detail?id=".concat(t,"&oid=").concat(o,"&type=").concat(a,"&data=").concat(encodeURIComponent(e))})},showtitle:function(){this.tabtitle=!0},tabclick:function(){this.tabtitle=!1},tablistclick:function(t){this.oid=t,this.tabtitle=!1,"one"==this.type&&(this.shoplist=this.res.goodsListone[t-1]),"two"==this.type&&(this.shoplist=this.res.goodsListtwo[t-1]),"three"==this.type&&(this.shoplist=this.res.goodsListthree[t-1]),"four"==this.type&&(this.shoplist=this.res.goodsListfour[t-1])},clickTopUp:function(t){this.faceValue=t}},mounted:function(){this.getlist()},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.reload(),uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){uni.showToast({title:"触发上拉加载"});var t=this.shoplist.length;if(t>=48)return this.loadingText="到底了",!1;for(var i=this.shoplist[t-1].goods_id,e=1;e<=12;e++){var a=i+e,s={goods_id:a,image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",image2:"http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",image3:"http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",title:"古黛妃 短袖t恤女夏装2019新款韩版宽松",price:"179",number:"61"};this.shoplist.push(s)}}};i.default=o},7866:function(t,i,e){"use strict";var a=e("b69e"),s=e.n(a);s.a},"7b55":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"shoplist"},[e("v-uni-view",{staticClass:"setting-top"},[e("v-uni-navigator",{staticClass:"setting-top-url",on:{click:function(i){i=t.$handleEvent(i),t.shoplistclick()}}},[e("v-uni-image",{staticClass:"setting-top-img",attrs:{src:"../static/images/iconfontjiantou1.png",mode:""}})],1),e("v-uni-text",{staticClass:"setting-top-title",staticStyle:{"margin-right":"40%"}},[t._v("商品列表")])],1),e("v-uni-view",{staticClass:"tab"},[e("v-uni-view",{staticClass:"tab-left"},[e("v-uni-text",{staticClass:"tab-left-title",class:{active:0==t.faceValue},on:{click:function(i){i=t.$handleEvent(i),t.clickTopUp(0)}}},[t._v("综合排序")]),e("v-uni-text",{staticClass:"tab-left-title",class:{active:1==t.faceValue},on:{click:function(i){i=t.$handleEvent(i),t.clickTopUp(1)}}},[t._v("销量优先")]),e("v-uni-view",{staticClass:"tab-left-title title-sx",class:{active:2==t.faceValue},on:{click:function(i){i=t.$handleEvent(i),t.clickTopUp(2)}}},[e("v-uni-text",[t._v("价格")]),e("v-uni-view",{staticClass:"tab-left-box"},[e("v-uni-image",{staticClass:"tab-left-title-img",attrs:{src:"../static/images/shangjiantou.png",mode:""}}),e("v-uni-image",{staticClass:"tab-left-title-img",attrs:{src:"../static/images/xiajiantou.png",mode:""}})],1)],1)],1),e("v-uni-view",{staticClass:"tab-right",on:{click:function(i){i=t.$handleEvent(i),t.showtitle()}}},[e("v-uni-image",{staticClass:"tab-right-img",attrs:{src:"../static/images/fenlei.png",mode:""}})],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.tabtitle,expression:"tabtitle"}],staticClass:"tab-click"},[e("v-uni-view",{staticClass:"tab-click-left",on:{click:function(i){i=t.$handleEvent(i),t.tabclick()}}}),e("v-uni-scroll-view",{staticClass:"tab-click-box",attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"tab-click-box-nav"},[e("v-uni-view",{staticClass:"tab-click-title"},[e("v-uni-text",[t._v(t._s(t.tabhead))])],1),t._l(t.shoptitle,function(i){return e("v-uni-view",{key:i.id,staticClass:"tab-click-two",on:{click:function(e){e=t.$handleEvent(e),t.tablistclick(i.id)}}},[e("v-uni-text",[t._v(t._s(i.title))])],1)})],2)],1)],1),e("v-uni-scroll-view",{staticStyle:{height:"86%"},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"list"},t._l(t.shoplist,function(i){return e("v-uni-view",{key:i.id,staticClass:"list-url",on:{click:function(e){e=t.$handleEvent(e),t.shopdetail(i.id,i)}}},[e("v-uni-image",{staticClass:"list-img",attrs:{src:i.image,mode:""}}),e("v-uni-text",{staticClass:"list-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"list-text-box"},[e("v-uni-text",{staticClass:"list-price"},[t._v("¥ "+t._s(i.price))]),e("v-uni-text",{staticClass:"list-ysnum"},[t._v("已售 "+t._s(i.number)+"件")])],1)],1)}),1),e("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"9f34":function(t,i,e){"use strict";e.r(i);var a=e("7b55"),s=e("06ba");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("7866");var n=e("2877"),l=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"1a927caa",null);i["default"]=l.exports},b69e:function(t,i,e){var a=e("1682");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("e20e689c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);