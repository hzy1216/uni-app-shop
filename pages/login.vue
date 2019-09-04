<template>
	<view class="login">	
			<view class="setting-top">
				<view class="setting-top-url" @click="loginclick()">
					<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
				</view>
				
				<text class="setting-top-title" style="margin-right: 45%;">登录</text>
			</view>
			
		<form class="login-form">
			<view class="login-box">
				<text class="login-title">账号</text>
				<input type="text" value=""  placeholder="请输入您的账号" class="login-input" clearable focus v-model="account"/>
			</view>
			<view class="login-box">
				<text class="login-title">密码</text>
				<input type="text" value=""  placeholder="请输入您的密码" class="login-input" displayable v-model="password"/>
			</view>
			
			<view class="login-url">
				<navigator url="" class="login-url-a">忘记密码</navigator>
				<navigator url="/pages/register" class="login-url-a">注册</navigator>
			</view>
			
			
			<view class="login-butt">
			<button type="primary" class="login-submit" @tap="bindLogin">登录</button>
				
			</view>
		</form>
		 <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
		    <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
		        <image :src="provider.image" @tap="oauth(provider.value)"></image>
		    </view>
		</view>
	</view>
</template>

<script>
	import service from '../service.js' ;
	import { mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				account: '',
				password: '',
				 providerList: [],
				hasProvider: false,
				positionTop: 0
			}
		},
		computed:mapState(['forcedLogin']),
		methods:{
			 ...mapMutations(['login']),
			 initProvider() {
			     const filters = ['weixin', 'qq', 'sinaweibo'];
			     uni.getProvider({
			         service: 'oauth',
			         success: (res) => {
			             if (res.provider && res.provider.length) {
			                 for (let i = 0; i < res.provider.length; i++) {
			                     if (~filters.indexOf(res.provider[i])) {
			                         this.providerList.push({
			                             value: res.provider[i],
			                             image: '../../static/img/' + res.provider[i] + '.png'
			                         });
			                     }
			                 }
			                 this.hasProvider = true;
			             }
			         },
			         fail: (err) => {
			             console.error('获取服务供应商失败：' + JSON.stringify(err));
			         }
			     });
			 },
			 initPosition() {
			     /**
			      * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
			      * 反向使用 top 进行定位，可以避免此问题。
			      */
			     this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			 },
			 loginclick(){			 							 				
					uni.switchTab({
							url: 'index'
					});
			},
			bindLogin() {
			        /**
			         * 客户端对账号信息进行一些必要的校验。
			         * 实际开发中，根据业务需要进行处理，这里仅做示例。
			         */
			        if (this.account.length < 6) {
			            uni.showToast({
			                icon: 'none',
			                title: '账号最短为 6 个字符'
			            });
			            return;
			        }
			        if (this.password.length < 6) {
			            uni.showToast({
			                icon: 'none',
			                title: '密码最短为 6 个字符'
			            });
			            return;
			        }
			        /**
			         * 下面简单模拟下服务端的处理
			         * 检测用户账号密码是否在已注册的用户列表中
			         * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
			         */
			        const data = {
			            account: this.account,
			            password: this.password
			        };
			        const validUser = service.getUsers().some(function (user) {
			            return data.account === user.account && data.password === user.password;
			        });
			        if (validUser) {
			            this.toMain(this.account);
			        } else {
			            uni.showToast({
			                icon: 'none',
			                title: '用户账号或密码不正确',
			            });
			        }
			    },
			    oauth(value) {
			        uni.login({
			            provider: value,
			            success: (res) => {
			                uni.getUserInfo({
			                    provider: value,
			                    success: (infoRes) => {
			                        /**
			                         * 实际开发中，获取用户信息后，需要将信息上报至服务端。
			                         * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
			                         */
			                        this.toMain(infoRes.userInfo.nickName);
			                    }
			                });
			            },
			            fail: (err) => {
			                console.error('授权登录失败：' + JSON.stringify(err));
			            }
			        });
			    },
			    toMain(userName) {
			        this.login(userName);
			        /**
			         * 强制登录时使用reLaunch方式跳转过来
			         * 返回首页也使用reLaunch方式
			         */
			        if (this.forcedLogin) {
			            uni.reLaunch({
			                url: '../pages/index',
			            });
			        } else {
			            uni.navigateBack();
			        }
			
			    }
			},
			onReady() {
			    this.initPosition();
			    this.initProvider();
			}
	}
</script>

<style>
	.login{
		width: 100%;
		height: 100%;
		background-color: #f8f5fc;
	}
		.login-form{
			width: 100%;
			height: 100%;
		}
		.login-box{
			width: 90%;
			height: 120upx;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			margin-top: 50upx;
			margin-left: 5%;
		}
			.login-title{
				width: 20%;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				color: #58565b;
				font-size: 32upx;
			}
				.login-input{
					width: 70%;
					height: 60upx;
					line-height: 60upx;
					font-size: 30upx;
					margin-left: 5%;
				}
				
			.login-butt{
				width:90%;
				height: 90upx;
			
				
				background-color: #f9436b;
				border-radius: 45upx;
				margin-left: 5%;
				margin-top: 60upx;
			
			}
			.login-submit{
				background-color: #f9436b;
				width: 100%;
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				border-radius: 45upx;
				color: #FFFFFF;
				font-size: 36upx;
			}
		.login-url{
			width: 80%;
			height: 80upx;
			margin-left: 10%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;
			color: #F0AD4E;
			margin-top: 50upx;
		}
</style>
