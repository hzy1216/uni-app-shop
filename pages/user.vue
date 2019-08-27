<template>
	<scroll-view scroll-y class="user">
		<view class="user-top-one">
			<image src="../static/images/xiaoxi.png" mode="" class="user-top-one-top"></image>
			<text class="user-top-one-title">我的</text>
			<image src="../static/images/shezhi.png" mode="" class="user-top-one-three"></image>
		</view>
		<view class="user-top">
			<view class="user-top-box">
				<image src="../static/images/missing-face.png" mode="" class="user-name-img"></image>
			</view>
			
			<text class="user-name">hzy我发旺旺发我</text>
		</view>
		<view class="user-nav">
			<view class="user-nav-list">
				<text class="user-nav-icon">145</text>
				<text class="user-nav-title">余额</text>
			</view>
			<view class="user-nav-list">
				<text class="user-nav-icon">0</text>
				<text class="user-nav-title">优惠券</text>
			</view>
			<view class="user-nav-list">
				<text class="user-nav-icon">0</text>
				<text class="user-nav-title">积分</text>
			</view>
		</view>
		<view class="user-nav">
			<navigator class="user-nav-list">
				<image src="../static/images/dingdan.png" mode="" class="user-nav-img"></image>
				<text class="user-nav-title">全部订单</text>
			</navigator>
			<navigator class="user-nav-list">
				<image src="../static/images/daifukuan.png" mode=""  class="user-nav-img"></image>
				<text class="user-nav-title">待付款</text>
			</navigator>
			<navigator class="user-nav-list">
				<image src="../static/images/daishouhuofuben.png" mode=""  class="user-nav-img"></image>
				<text class="user-nav-title">待收货</text>
			</navigator>
			<navigator class="user-nav-list">
				<image src="../static/images/tuikuan.png" mode=""  class="user-nav-img"></image>
				<text class="user-nav-title">退款/售后</text>
			</navigator>
		</view>
		
		<view class="user-naver">
			<view class="user-naver-left">
				<image src="../static/images/unie646.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">浏览记录</text>
			</view>
		</view>
		<swiper display-multiple-items="4" class="user-swiper">
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate5.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate3.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate8.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate12.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate13.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="" class="user-swiper-a">
					<image src="../static/images/temp/cate15.jpg" mode="" class="user-swiper-img"></image>
				</navigator>
			</swiper-item>
		
		</swiper>
		<view class="user-naver">
			<view class="user-naver-left">
				<image src="../static/images/qianbao1.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">我的钱包</text>
			</view>
			<view class="user-naver-right">
				<text class="user-naver-right-title">您的会员还有3天过期</text>
				<image src="../static/images/youjiantou.png" mode="" class="user-naver-right-img"></image>
			</view>
		</view>
		
		<navigator class="user-naver" url="../components/address">
			<view class="user-naver-left">
				<image src="../static/images/dizhi.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">地址管理</text>
			</view>
			<view class="user-naver-right">
				<text class="user-naver-right-title"></text>
				<image src="../static/images/youjiantou.png" mode="" class="user-naver-right-img"></image>
			</view>
		</navigator>
		
		<navigator class="user-naver">
			<view class="user-naver-left">
				<image src="../static/images/shuangsechangyongtubiao-.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">分享</text>
			</view>
			<view class="user-naver-right">
				<text class="user-naver-right-title">邀请好友赢10万大礼</text>
				<image src="../static/images/youjiantou.png" mode="" class="user-naver-right-img"></image>
			</view>
		</navigator>
		
		<navigator class="user-naver">
			<view class="user-naver-left">
				<image src="../static/images/Mycollection.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">我的收藏</text>
			</view>
			<view class="user-naver-right">
				<text class="user-naver-right-title"></text>
				<image src="../static/images/youjiantou.png" mode="" class="user-naver-right-img"></image>
			</view>
		</navigator>
		<navigator class="user-naver" url="/pages/shopsetting" >
			<view class="user-naver-left">
				<image src="../static/images/shezhi.png" mode="" class="user-naver-left-img"></image>
				<text class="user-naver-left-title">设置</text>
			</view>
			<view class="user-naver-right">
				<text class="user-naver-right-title"></text>
				<image src="../static/images/youjiantou.png" mode="" class="user-naver-right-img"></image>
			</view>
		</navigator>
	
		
		
	</scroll-view>
</template>

<script>
	export default{
		methods:{
			
		},
		mounted() {
			
		},
		methods:{
		 settclicktwo(){			 
				uni.navigateBack({
					delta: 1
				});
		 }
		}
	}
</script>

<style>
	.user{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	/* 隐藏式头部*/
	.user-top-one{
		width: 100%;
		height: 90upx;
		
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0;
		
		background-color: #FFFFFF;
	}
		.user-top-one-top{
			width: 40upx;
			height: 40upx;
			margin-left: 4%;
			margin-top: 25upx;
			float: left;
		}
		.user-top-one-three{
			width: 40upx;
			height: 40upx;
			float: right;
			margin-right: 4%;
			margin-top: 25upx;
		}
		.user-top-one-title{
			font-size: 36upx;
			color: #000000;
			font-weight: 700;
			/* margin-left: 32%;
			margin-right: 32%; */
			height: 90upx;
			line-height:90upx;
			width: 20%;
			float: left;
			text-align: center;
			margin: 0 30%;
		}
	
	/* 头部背景 */
		.user-top{
			width: 100%;
			height: 400upx;
			background-image: url('../static/images/user-bg.jpg');
			
		}
			.user-top-box{
				width: 150upx;
				height: 150upx;
				border-radius: 50%;
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
					margin-top: 160upx;
				margin-left: 40upx;
				float: left;
			}
			.user-name-img{
				width: 140upx;
				height: 140upx;
				border-radius: 50%;
			
			}
			.user-name{
				color: #000000;
			
				margin-top:200upx;
				margin-left: 20upx;
				float: left;
				font-size: 40upx;
			}
		/* 下面列表 */
			.user-nav{
				width: 92%;
				height: 148upx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: #FFFFFF;
				margin: 30upx 4%;
			}
			.user-nav-list{
				width: 25%;
				height:148upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				background-color: rgba(255,255,255,0.1);
				
			}
				.user-nav-icon{
					color: #474747;
					font-size: 30upx;
				}
				.user-nav-title{
					color: #78787a;
					font-size: 24upx;
					margin-top: 10upx;
				}
				.user-nav-img{
					width: 50upx;
					height: 50upx;
				}
				
		.user-naver{
			width: 92%;
			height: 110upx;
			border-bottom: 1px #fbfbfb solid;
			background-color: #FFFFFF;
			margin-left: 4%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.user-naver:nth-last-child(1){
			margin-bottom: 26upx;
		}
			.user-naver-left{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 110upx;
				/* width: 30%; */
			}
			.user-naver-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 110upx;
				/* width: 30%; */
			}
			.user-naver-left-img{
				width: 40upx;
				height: 40upx;
				margin: 0 30upx;
			}
			.user-naver-right-img{
				width: 40upx;
				height: 40upx;
				margin-right: 10upx;
			}
			.user-naver-left-title{
				font-size: 30upx;
				color: #555555;
			}
			.user-naver-right-title{
				font-size: 24upx;
				color: #9f9fa1;
				margin-right: 10upx;
			}
			
			.user-swiper{
				width: 92%;
				margin-left: 4%;
				height: 200upx;
				background-color: #FFFFFF;
			}
				.user-swiper-a{
					background-color: rgba(255,255,255,0.1);
				}
				.user-swiper-img{
					width: 160upx;
					height: 160upx;
					margin: 14upx 20upx;
				}
</style>
