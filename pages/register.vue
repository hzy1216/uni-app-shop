<template>
	<view class="login">	
			<view class="setting-top">
							
				<text class="setting-top-title" style="margin-right: 45%;">注册</text>
			</view>
			
		<form class="login-form">
			<view class="login-box">
				<text class="login-title">账号</text>
				<input type="text" value=""  placeholder="请输入您的账号" class="login-input" focus clearable v-model="account"/>
			</view>
			<!-- <view class="login-box">
				<text class="login-title">验证码</text>
				<input type="number" value=""  class="login-yzm"/>
				<button type="primary" class="hqyzm">获取验证码</button>
			</view> -->
			<view class="login-box">
				<text class="login-title">密码</text>
				<input type="text" value=""  placeholder="请输入您的密码" class="login-input" displayable v-model="password"/>
			</view>
			<view class="login-box">
				<text class="login-title">邮箱</text>
				<input type="text" value=""  placeholder="请输入您的邮箱" class="login-input" clearable v-model="email"/>
			</view>
			<view class="login-url">
				<navigator url="" class="login-url-a"></navigator>
				<navigator url="/pages/login" class="login-url-a">去登录</navigator>
			</view>
			
			
			<view class="login-butt">
			<button type="submit" class="login-submit" @tap="register">注册</button>
				
			</view>
		</form>
	</view>
</template>

<script>
	import service from '../service.js'
	
	export default{
		data() {
		    return {
		        account: '',
		        password: '',
		        email: ''
		    }
		},
		methods: {
		    register() {
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
		        if (this.email.length < 3 || !~this.email.indexOf('@')) {
		            uni.showToast({
		                icon: 'none',
		                title: '邮箱地址不合法'
		            });
		            return;
		        }
		
		        const data = {
		            account: this.account,
		            password: this.password,
		            email: this.email
		        }
		        service.addUser(data);
		        uni.showToast({
		            title: '注册成功'
		        });
		        uni.navigateBack({
		            delta: 1
		        });
		    }
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
				width: 22%;
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
					margin-left: 3%;
				}
				
				.login-yzm{
					width: 35%;
					height: 60upx;
					line-height: 60upx;
					font-size: 30upx;
					margin-left: 5%;
				}
				.hqyzm{
					width: 30%;
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
					text-align: center;
					margin-left: 5%;
					background-color: #C0C0C0;
					color: #FFFFFF;
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
				border-radius: 45upx;
				color: #FFFFFF;
				text-align: center;
				line-height: 90upx;
				
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
