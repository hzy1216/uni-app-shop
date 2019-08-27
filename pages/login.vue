<template>
	<view class="login">	
			<view class="setting-top">
				<navigator class="setting-top-url" @click="loginclick()">
					<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
				</navigator>
				
				<text class="setting-top-title" style="margin-right: 45%;">登录</text>
			</view>
			
		<form class="login-form">
			<view class="login-box">
				<text class="login-title">手机号</text>
				<input type="number" value="" maxlength="11" placeholder="请输入您的手机号" class="login-input"/>
			</view>
			<view class="login-box">
				<text class="login-title">密码</text>
				<input type="text" value=""  placeholder="请输入您的密码" class="login-input"/>
			</view>
			
			<view class="login-url">
				<navigator url="" class="login-url-a">忘记密码</navigator>
				<navigator url="/pages/register" class="login-url-a">注册</navigator>
			</view>
			
			
			<view class="login-butt">
			<button type="submit" class="login-submit">登录</button>
				
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		methods:{
			 loginclick(){			 							 				
					uni.switchTab({
							url: 'index'
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
				border-radius: 45upx;
				color: #FFFFFF;
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
