(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify"],{"1f2b":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{onefloor:[],twofloor:[],threefloor:[],fourfloor:[],one:"one",two:"two",three:"three",four:"four",classValue:"0"}},methods:{classdetail:function(t,i){uni.navigateTo({url:"../components/shoplist?id=".concat(t,"&data=").concat(encodeURIComponent(i))})},classclick:function(t){this.classValue=t},getclass:function(){var t=this;uni.request({url:"../static/data/class.json",method:"get",success:function(i){""!=i.data?(t.onefloor=i.data.onefloor,t.twofloor=i.data.twofloor,t.threefloor=i.data.threefloor,t.fourfloor=i.data.fourfloor):console.log("数据获取失败")}})}},mounted:function(){this.getclass()}};i.default=a},"3ee7":function(t,i,s){var a=s("beee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=s("4f06").default;l("5355840a",a,!0,{sourceMap:!1,shadowMode:!1})},"46aa":function(t,i,s){"use strict";s.r(i);var a=s("af6d"),l=s("745c");for(var e in l)"default"!==e&&function(t){s.d(i,t,function(){return l[t]})}(e);s("ee58");var c=s("2877"),n=Object(c["a"])(l["default"],a["a"],a["b"],!1,null,"1f0c0728",null);i["default"]=n.exports},"745c":function(t,i,s){"use strict";s.r(i);var a=s("1f2b"),l=s.n(a);for(var e in a)"default"!==e&&function(t){s.d(i,t,function(){return a[t]})}(e);i["default"]=l.a},af6d:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"classify"},[s("v-uni-view",{staticClass:"classify-top"},[s("v-uni-text",[t._v("分类")])],1),s("v-uni-view",{staticClass:"classify-list"},[s("v-uni-scroll-view",{staticClass:"classify-list-left",attrs:{"scroll-y":""}},[s("a",{staticClass:"classify-list-left-a",class:{cactive:0==t.classValue},attrs:{href:"#classify-one"},on:{click:function(i){i=t.$handleEvent(i),t.classclick(0)}}},[t._v("手机数码")]),s("a",{staticClass:"classify-list-left-a",class:{cactive:1==t.classValue},attrs:{href:"#classify-two"},on:{click:function(i){i=t.$handleEvent(i),t.classclick(1)}}},[t._v("礼品鲜花")]),s("a",{staticClass:"classify-list-left-a",class:{cactive:2==t.classValue},attrs:{href:"#classify-three"},on:{click:function(i){i=t.$handleEvent(i),t.classclick(2)}}},[t._v("男装女装")]),s("a",{staticClass:"classify-list-left-a",class:{cactive:3==t.classValue},attrs:{href:"#classify-four"},on:{click:function(i){i=t.$handleEvent(i),t.classclick(3)}}},[t._v("母婴用品")])]),s("v-uni-scroll-view",{staticClass:"classify-list-right",attrs:{"scroll-y":""}},[s("v-uni-view",{staticClass:"classify-list-r-box",attrs:{id:"classify-one"}},[s("v-uni-text",{staticClass:"classify-list-right-title"},[t._v("手机通讯")]),s("v-uni-view",{staticClass:"classify-list-right-list"},t._l(t.onefloor,function(i){return s("v-uni-view",{key:i.id,staticClass:"classify-list-right-a",attrs:{url:"../components/shoplist"},on:{click:function(s){s=t.$handleEvent(s),t.classdetail(i.id,t.one)}}},[s("v-uni-image",{staticClass:"classify-list-right-img",attrs:{src:i.img,mode:""}}),s("v-uni-text",{staticClass:"classify-list-right-text"},[t._v(t._s(i.title))])],1)}),1)],1),s("v-uni-view",{staticClass:"classify-list-r-box",attrs:{id:"classify-two"}},[s("v-uni-text",{staticClass:"classify-list-right-title"},[t._v("礼品鲜花")]),s("v-uni-view",{staticClass:"classify-list-right-list"},t._l(t.twofloor,function(i){return s("v-uni-view",{key:i.id,staticClass:"classify-list-right-a",attrs:{url:"../components/shoplist"},on:{click:function(s){s=t.$handleEvent(s),t.classdetail(i.id,t.two)}}},[s("v-uni-image",{staticClass:"classify-list-right-img",attrs:{src:i.img,mode:""}}),s("v-uni-text",{staticClass:"classify-list-right-text"},[t._v(t._s(i.title))])],1)}),1)],1),s("v-uni-view",{staticClass:"classify-list-r-box",attrs:{id:"classify-three"}},[s("v-uni-text",{staticClass:"classify-list-right-title"},[t._v("男装女装")]),s("v-uni-view",{staticClass:"classify-list-right-list"},t._l(t.threefloor,function(i){return s("v-uni-view",{key:i.id,staticClass:"classify-list-right-a",attrs:{url:"../components/shoplist"},on:{click:function(s){s=t.$handleEvent(s),t.classdetail(i.id,t.three)}}},[s("v-uni-image",{staticClass:"classify-list-right-img",attrs:{src:i.img,mode:""}}),s("v-uni-text",{staticClass:"classify-list-right-text"},[t._v(t._s(i.title))])],1)}),1)],1),s("v-uni-view",{staticClass:"classify-list-r-box",attrs:{id:"classify-four"}},[s("v-uni-text",{staticClass:"classify-list-right-title"},[t._v("母婴用品")]),s("v-uni-view",{staticClass:"classify-list-right-list"},t._l(t.fourfloor,function(i){return s("v-uni-view",{key:i.id,staticClass:"classify-list-right-a",attrs:{url:"../components/shoplist"},on:{click:function(s){s=t.$handleEvent(s),t.classdetail(i.id,t.four)}}},[s("v-uni-image",{staticClass:"classify-list-right-img",attrs:{src:i.img,mode:""}}),s("v-uni-text",{staticClass:"classify-list-right-text"},[t._v(t._s(i.title))])],1)}),1)],1)],1)],1)],1)},l=[];s.d(i,"a",function(){return a}),s.d(i,"b",function(){return l})},beee:function(t,i,s){i=t.exports=s("2350")(!1),i.push([t.i,".cactive[data-v-1f0c0728]{background-color:#ffeefc}.classify[data-v-1f0c0728]{width:100%;height:100%}\n\n/* 头部标题 */.classify-top[data-v-1f0c0728]{width:100%;height:%?90?%;font-size:%?30?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px #f4f4f4 solid}\n\n/* 选项卡 */.classify-list[data-v-1f0c0728]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.classify-list-left[data-v-1f0c0728]{width:25%;height:100%;border-right:1px #f4f4f4 solid}.classify-list-left-a[data-v-1f0c0728]{width:100%;height:%?120?%;font-size:%?30?%;line-height:%?120?%;text-align:center;border-bottom:1px #f4f4f4 solid;float:left;color:#5c5c5c;text-decoration:none}.classify-list-right[data-v-1f0c0728]{background-color:#f8f8f8;width:75%;height:100%;padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.classify-list-r-box[data-v-1f0c0728]{width:100%}.classify-list-right-title[data-v-1f0c0728]{height:%?80?%;width:100%;line-height:%?80?%;font-size:%?30?%;color:#2b2b2b}.classify-list-right-list[data-v-1f0c0728]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff}.classify-list-right-a[data-v-1f0c0728]{width:30%;height:%?240?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:3%;background-color:#fff}.classify-list-right-img[data-v-1f0c0728]{width:100%;height:%?160?%}.classify-list-right-text[data-v-1f0c0728]{font-size:%?24?%;color:#5a5a5a}.classify-list-r-box[data-v-1f0c0728]:last-child{margin-bottom:%?90?%}",""])},ee58:function(t,i,s){"use strict";var a=s("3ee7"),l=s.n(a);l.a}}]);