(function(n){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)r=s[l],a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);g&&g(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var o={},a={index:0},i=[];function r(n){return s.p+"static/js/"+({"components-add":"components-add","components-address":"components-address","components-detail":"components-detail","components-mymap":"components-mymap","components-shoplist":"components-shoplist","pages-cart":"pages-cart","pages-classify":"pages-classify","pages-index":"pages-index","pages-login":"pages-login","pages-register":"pages-register","pages-shopsetting":"pages-shopsetting","pages-user":"pages-user"}[n]||n)+"."+{"components-add":"6384eda4","components-address":"13df05ef","components-detail":"21652019","components-mymap":"9b9eb5b4","components-shoplist":"cc564f4a","pages-cart":"7cb95756","pages-classify":"5650d4e0","pages-index":"f18807b0","pages-login":"15559a95","pages-register":"a5ba0848","pages-shopsetting":"27f9792b","pages-user":"a815b9a7"}[n]+".js"}function s(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise(function(e,o){t=a[n]=[e,o]});e.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(n),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var t=a[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,t[1](r)}a[n]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=n,s.c=o,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)s.d(t,o,function(e){return n[e]}.bind(null,o));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/",s.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var g=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("7225")},"0675":function(n,e,t){"use strict";var o=t("4386"),a=t.n(o);a.a},"2f8c":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*每个页面公共css */uni-page-body{height:100%;width:100%} \r\n\t/* 头部 */.setting-top{width:100%;height:%?90?%;background-color:#fff;border-bottom:1px #f9f9f9 solid}.setting-top-url{width:%?40?%;height:%?40?%;margin-top:%?25?%;margin-left:%?15?%;float:left}.setting-top-img{width:%?40?%;height:%?40?%}.setting-top-title{font-size:%?32?%;font-weight:700;color:#000;\r\n\t\t\t\t/* width: 15%; */height:%?90?%;line-height:%?90?%;text-align:center;float:right\r\n\t\t\t\t/* margin-right: 40%; */} \r\n\t/* 列表 */.list{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:%?60?%}.list-url{width:%?320?%;height:%?440?%;margin-left:%?36?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:%?50?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff}.list-img{width:100%;height:%?340?%}.list-title{width:100%;height:%?80?%;overflow:hidden;display:block;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;line-height:%?80?%;font-size:%?34?%}.list-text-box{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?50?%;width:100%}.list-price{font-size:%?30?%}.list-ysnum{font-size:%?24?%}.loading-text{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}",""])},3041:function(n,e,t){"use strict";(function(n){var e=t("288e"),o=e(t("5176")),a=e(t("e143"));n["____A65459A____"]=!0,delete n["____A65459A____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"},tabBar:{backgroundColor:"#FFFFFF",color:"#707070",selectedColor:"#fa436a",list:[{pagePath:"pages/index",iconPath:"static/images/tab-home.png",selectedIconPath:"static/images/tab-home-current.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/classify",iconPath:"static/images/tab-cate.png",selectedIconPath:"static/images/tab-cate-current.png",text:"分类",redDot:!1,badge:""},{pagePath:"pages/cart",iconPath:"static/images/tab-cart.png",selectedIconPath:"static/images/tab-cart-current.png",text:"购物车",redDot:!1,badge:""},{pagePath:"pages/user",iconPath:"static/images/tab-my.png",selectedIconPath:"static/images/tab-my-current.png",text:"我的",redDot:!1,badge:""}],borderStyle:"black"}},n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},a.default.component("pages-index",function(n){var e={component:t.e("pages-index").then(function(){return n(t("5165"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-classify",function(n){var e={component:t.e("pages-classify").then(function(){return n(t("46aa"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-cart",function(n){var e={component:t.e("pages-cart").then(function(){return n(t("7a22"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-user",function(n){var e={component:t.e("pages-user").then(function(){return n(t("e69d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-shopsetting",function(n){var e={component:t.e("pages-shopsetting").then(function(){return n(t("2e5c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("components-detail",function(n){var e={component:t.e("components-detail").then(function(){return n(t("d1ff"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("components-address",function(n){var e={component:t.e("components-address").then(function(){return n(t("760e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("components-add",function(n){var e={component:t.e("components-add").then(function(){return n(t("0717"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("components-mymap",function(n){var e={component:t.e("components-mymap").then(function(){return n(t("74bf"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-login",function(n){var e={component:t.e("pages-login").then(function(){return n(t("ccbc"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("pages-register",function(n){var e={component:t.e("pages-register").then(function(){return n(t("b284"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),a.default.component("components-shoplist",function(n){var e={component:t.e("components-shoplist").then(function(){return n(t("9f34"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e}),n.__uniRoutes=[{path:"/",alias:"/pages/index",component:{render:function(n){return n("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"myshop",enablePullDownRefresh:!0,onReachBottomDistance:12})},[n("pages-index",{slot:"page"})])}},meta:{id:1,name:"pages-index",isNVue:!1,pagePath:"pages/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/classify",component:{render:function(n){return n("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"分类"})},[n("pages-classify",{slot:"page"})])}},meta:{id:2,name:"pages-classify",isNVue:!1,pagePath:"pages/classify",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/cart",component:{render:function(n){return n("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[n("pages-cart",{slot:"page"})])}},meta:{id:3,name:"pages-cart",isNVue:!1,pagePath:"pages/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/user",component:{render:function(n){return n("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心"})},[n("pages-user",{slot:"page"})])}},meta:{id:4,name:"pages-user",isNVue:!1,pagePath:"pages/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/shopsetting",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"设置"})},[n("pages-shopsetting",{slot:"page"})])}},meta:{name:"pages-shopsetting",isNVue:!1,pagePath:"pages/shopsetting",windowTop:44}},{path:"/components/detail",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"商品详情"})},[n("components-detail",{slot:"page"})])}},meta:{name:"components-detail",isNVue:!1,pagePath:"components/detail",windowTop:44}},{path:"/components/address",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"收货地址"})},[n("components-address",{slot:"page"})])}},meta:{name:"components-address",isNVue:!1,pagePath:"components/address",windowTop:44}},{path:"/components/add",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"修改收货地址"})},[n("components-add",{slot:"page"})])}},meta:{name:"components-add",isNVue:!1,pagePath:"components/add",windowTop:44}},{path:"/components/mymap",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"选择位置"})},[n("components-mymap",{slot:"page"})])}},meta:{name:"components-mymap",isNVue:!1,pagePath:"components/mymap",windowTop:44}},{path:"/pages/login",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[n("pages-login",{slot:"page"})])}},meta:{name:"pages-login",isNVue:!1,pagePath:"pages/login",windowTop:44}},{path:"/pages/register",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"注册"})},[n("pages-register",{slot:"page"})])}},meta:{name:"pages-register",isNVue:!1,pagePath:"pages/register",windowTop:44}},{path:"/components/shoplist",component:{render:function(n){return n("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"商品列表",enablePullDownRefresh:!0,onReachBottomDistance:60})},[n("components-shoplist",{slot:"page"})])}},meta:{name:"components-shoplist",isNVue:!1,pagePath:"components/shoplist",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},4386:function(n,e,t){var o=t("2f8c");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=t("4f06").default;a("4e5a4ad4",o,!0,{sourceMap:!1,shadowMode:!1})},"507e":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},"5c33":function(n,e,t){"use strict";var o=t("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t("e143")),i=o(t("2f62"));a.default.use(i.default);var r=new i.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:""},mutations:{login:function(n,e){n.userName=e||"新用户",n.hasLogin=!0},logout:function(n){n.userName="",n.hasLogin=!1}}}),s=r;e.default=s},7225:function(n,e,t){"use strict";var o=t("288e"),a=o(t("cebc"));t("cadf"),t("551c"),t("097d"),t("3041"),t("1c31");var i=o(t("e143")),r=o(t("a6f6")),s=o(t("5c33"));i.default.config.productionTip=!1,i.default.prototype.$store=s.default,r.default.mpType="app";var c="";i.default.prototype.$msg=c;var u=new i.default((0,a.default)({store:s.default,msg:c},r.default));u.$mount()},"9a56":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},a6f6:function(n,e,t){"use strict";t.r(e);var o=t("9a56"),a=t("eeb3");for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);t("0675");var r=t("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},eeb3:function(n,e,t){"use strict";t.r(e);var o=t("507e"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=a.a}});