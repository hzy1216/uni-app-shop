(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login"],{"0b4c":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"login"},[e("v-uni-view",{staticClass:"setting-top"},[e("v-uni-view",{staticClass:"setting-top-url",on:{click:function(i){i=t.$handleEvent(i),t.loginclick()}}},[e("v-uni-image",{staticClass:"setting-top-img",attrs:{src:"../static/images/iconfontjiantou1.png",mode:""}})],1),e("v-uni-text",{staticClass:"setting-top-title",staticStyle:{"margin-right":"45%"}},[t._v("登录")])],1),e("v-uni-form",{staticClass:"login-form"},[e("v-uni-view",{staticClass:"login-box"},[e("v-uni-text",{staticClass:"login-title"},[t._v("账号")]),e("v-uni-input",{staticClass:"login-input",attrs:{type:"text",value:"",placeholder:"请输入您的账号",clearable:"",focus:""},model:{value:t.account,callback:function(i){t.account=i},expression:"account"}})],1),e("v-uni-view",{staticClass:"login-box"},[e("v-uni-text",{staticClass:"login-title"},[t._v("密码")]),e("v-uni-input",{staticClass:"login-input",attrs:{type:"text",value:"",placeholder:"请输入您的密码",displayable:""},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),e("v-uni-view",{staticClass:"login-url"},[e("v-uni-navigator",{staticClass:"login-url-a",attrs:{url:""}},[t._v("忘记密码")]),e("v-uni-navigator",{staticClass:"login-url-a",attrs:{url:"/pages/register"}},[t._v("注册")])],1),e("v-uni-view",{staticClass:"login-butt"},[e("v-uni-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.bindLogin(i)}}},[t._v("登录")])],1)],1),t.hasProvider?e("v-uni-view",{staticClass:"oauth-row",style:{top:t.positionTop+"px"}},t._l(t.providerList,function(i){return e("v-uni-view",{key:i.value,staticClass:"oauth-image"},[e("v-uni-image",{attrs:{src:i.image},on:{click:function(e){e=t.$handleEvent(e),t.oauth(i.value)}}})],1)}),1):t._e()],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},6195:function(t,i,e){"use strict";var n=e("a78e"),o=e.n(n);o.a},"7ffb":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".login[data-v-9e8890de]{width:100%;height:100%;background-color:#f8f5fc}.login-form[data-v-9e8890de]{width:100%;height:100%}.login-box[data-v-9e8890de]{width:90%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;margin-top:%?50?%;margin-left:5%}.login-title[data-v-9e8890de]{width:20%;height:%?60?%;line-height:%?60?%;text-align:center;color:#58565b;font-size:%?32?%}.login-input[data-v-9e8890de]{width:70%;height:%?60?%;line-height:%?60?%;font-size:%?30?%;margin-left:5%}.login-butt[data-v-9e8890de]{width:90%;height:%?90?%;background-color:#f9436b;border-radius:%?45?%;margin-left:5%;margin-top:%?60?%}.login-submit[data-v-9e8890de]{background-color:#f9436b;width:100%;height:%?90?%;line-height:%?90?%;text-align:center;border-radius:%?45?%;color:#fff;font-size:%?36?%}.login-url[data-v-9e8890de]{width:80%;height:%?80?%;margin-left:10%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;color:#f0ad4e;margin-top:%?50?%}",""])},"9bb2":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("f499")),a=n(e("cebc")),s=n(e("b1d8")),r=e("2f62"),c={data:function(){return{account:"",password:"",providerList:[],hasProvider:!1,positionTop:0}},computed:(0,r.mapState)(["forcedLogin"]),methods:(0,a.default)({},(0,r.mapMutations)(["login"]),{initProvider:function(){var t=this,i=["weixin","qq","sinaweibo"];uni.getProvider({service:"oauth",success:function(e){if(e.provider&&e.provider.length){for(var n=0;n<e.provider.length;n++)~i.indexOf(e.provider[n])&&t.providerList.push({value:e.provider[n],image:"../../static/img/"+e.provider[n]+".png"});t.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+(0,o.default)(t))}})},initPosition:function(){this.positionTop=uni.getSystemInfoSync().windowHeight-100},loginclick:function(){uni.switchTab({url:"index"})},bindLogin:function(){if(this.account.length<6)uni.showToast({icon:"none",title:"账号最短为 6 个字符"});else if(this.password.length<6)uni.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={account:this.account,password:this.password},i=s.default.getUsers().some(function(i){return t.account===i.account&&t.password===i.password});i?this.toMain(this.account):uni.showToast({icon:"none",title:"用户账号或密码不正确"})}},oauth:function(t){var i=this;uni.login({provider:t,success:function(e){uni.getUserInfo({provider:t,success:function(t){i.toMain(t.userInfo.nickName)}})},fail:function(t){console.error("授权登录失败："+(0,o.default)(t))}})},toMain:function(t){this.login(t),this.forcedLogin?uni.reLaunch({url:"../pages/index"}):uni.navigateBack()}}),onReady:function(){this.initPosition(),this.initProvider()}};i.default=c},a78e:function(t,i,e){var n=e("7ffb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("1e5f5b92",n,!0,{sourceMap:!1,shadowMode:!1})},b1d8:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("f499")),a="USERS_KEY",s=function(){var t="";return t=uni.getStorageSync(a),t||(t="[]"),JSON.parse(t)},r=function(t){var i=s();i.push({account:t.account,password:t.password}),uni.setStorageSync(a,(0,o.default)(i))},c={getUsers:s,addUser:r};i.default=c},c474:function(t,i,e){"use strict";e.r(i);var n=e("9bb2"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},ccbc:function(t,i,e){"use strict";e.r(i);var n=e("0b4c"),o=e("c474");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("6195");var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"9e8890de",null);i["default"]=r.exports}}]);