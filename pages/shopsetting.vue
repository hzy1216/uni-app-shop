<template>
	<view class="setting">
			<view class="setting-top">
				<navigator class="setting-top-url"  @click="shopsettingclick()">
					<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
				</navigator>
				
				<text class="setting-top-title" style="margin-right: 45%;">设置</text>
			</view>
			<scroll-view  scroll-y class="setting-list">
				<navigator class="setting-nav">
					<text class="setting-nav-one">个人资料</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				
				<navigator class="setting-nav"  url="../components/address">
					<text class="setting-nav-one">收货地址</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				<navigator class="setting-nav">
					<text class="setting-nav-one">实名认证</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				
				<navigator class="setting-nav" style="margin: 10upx 0;">
					<text class="setting-nav-one">消息推送</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						 <switch checked  />
					</view>
				</navigator>
				<navigator class="setting-nav">
					<text class="setting-nav-one">清除缓存</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				<navigator class="setting-nav">
					<text class="setting-nav-one">关于商店</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title"></text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				<navigator class="setting-nav">
					<text class="setting-nav-one">检查更新</text>
					<view class="setting-nav-two">
						<text class="setting-nav-title">当前版本 1.2.1</text>
						<image src="../static/images/youjiantou.png" mode="" class="setting-nav-img"></image>
					</view>
				</navigator>
				
				<view class="setting-butt" >
					<button  type="default" @tap="bindLogout" class="setting-text">退出登录</button>
				</view>
			</scroll-view>
       
            
    

	</view>
</template>
	
<script>
	 import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default{
		data(){
			return {
			
			}
			
		},
		 computed: {
		    ...mapState(['hasLogin', 'forcedLogin'])
		},
		mounted() {
			
		},
		methods:{
				...mapMutations(['logout']),
			bindLogin() {
					uni.navigateTo({
							url: 'login',
					});
			},
			bindLogout() {
					this.logout();
					/**
					 * 如果需要强制登录跳转回登录页面
					 */
					if (this.forcedLogin) {
							uni.reLaunch({
									url: '../pages/user',
							});
					}
			},
			shopsettingclick(){
				uni.switchTab({
					url:'../pages/user'
				})
		},
		}
	}
</script>

<style>
	uni-page-body{
		height: 100%;
		width: 100%;
	}
	.setting{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	/* 头部 */
	
		
		/* 下面多选 */
		.setting-list{
			width: 100%;
			margin-top: 15upx;
		}
			.setting-nav{
				width: 100%;
				height: 110upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #FFFFFF;
				border-bottom: 1px #f4f4f4 solid;
				box-sizing: border-box;
			}
				.setting-nav-one{
					color: #282828;
					font-size: 32upx;
					margin-left: 15upx;
				}
				.setting-nav-two{
					display: flex;
					align-items: center;
				}
				.setting-nav-img{
					width: 40upx;
					height: 40upx;
					margin-right: 15upx;
				}
				.setting-nav-title{
					color: #848587;
					font-size: 26upx;
					margin-right: 10upx;
				}
		
		/* 退出登录 */
		.setting-butt{
			width: 100%;
			height: 110upx;
			
			margin-top: 20upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #c84169;
		}
			.setting-text{
				width: 100%;
				height: 110upx;
				line-height: 110upx;
				background-color: #FFFFFF;
				font-size: 36upx;
			}
</style>
