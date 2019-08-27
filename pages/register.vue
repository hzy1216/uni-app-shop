<template>
	<view class="login">	
			<view class="setting-top">
							
				<text class="setting-top-title" style="margin-right: 45%;">注册</text>
			</view>
			
		<form class="login-form">
			<view class="login-box">
				<text class="login-title">手机号</text>
				<input type="number" value="" maxlength="11" placeholder="请输入您的手机号" class="login-input"/>
			</view>
			<view class="login-box">
				<text class="login-title">验证码</text>
				<input type="number" value=""  class="login-yzm"/>
				<button type="primary" class="hqyzm">获取验证码</button>
			</view>
			<view class="login-box">
				<text class="login-title">密码</text>
				<input type="text" value=""  placeholder="请输入您的密码" class="login-input"/>
			</view>
			<view class="login-box">
				<text class="login-title">确认密码</text>
				<input type="text" value=""  placeholder="请再次输入您的密码" class="login-input"/>
			</view>
			<view class="login-url">
				<navigator url="" class="login-url-a"></navigator>
				<navigator url="/pages/login" class="login-url-a">去登录</navigator>
			</view>
			
			
			<view class="login-butt">
			<button type="submit" class="login-submit">注册</button>
				
			</view>
		</form>
	</view>
</template>

<script>
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
