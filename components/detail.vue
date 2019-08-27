<template>
	<view class="detail">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="detailclick()"  open-type="navigateBack">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">商品详情</text>
		</view>
		<scroll-view scroll-y class="detail-box">
			
			<!-- banner轮播图 -->
			<swiper autoplay="true" class="detail-swiper">
				<swiper-item class="detail-item">
						<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg" mode="" class="detail-item-img"></image>
				</swiper-item>
				<swiper-item class="detail-item">
						<image src="https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg" mode="" class="detail-item-img"></image>
				</swiper-item>
				<swiper-item class="detail-item">
						<image src="https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg" mode="" class="detail-item-img"></image>
				</swiper-item>
				
			</swiper>
			
			<!-- 商品介绍 -->
			<view class="detail-shop">
				<view class="detail-shop-one">
					<text class="detail-shop-one-one">恒源祥2019春季长袖白色t恤 新款春装</text>
					<view class="detail-shop-one-two">
						<text class="detail-new">&#165;350</text>
						<text class="detail-old">&#165;400</text>
						<text class="detail-dis">8折</text>
					</view>
					<view class="detail-shop-one-three">
						<text class="detail-xl">销量：745</text>
						<text class="detail-kc">库存：760</text>
						<text class="detail-lll">浏览量：1357</text>
					</view>
				</view>
				
				<view class="detail-shop-two">
					<view class="detail-shop-box">
						
						<text class="detail-two-js">该商品分享可领49减10红包</text>
						<text class="fhj">立即分享</text>
						<image src="../static/images/youjiantou.png" mode="" class="detail-two-img"></image>
					</view>
					<view class="detail-shop-box">
						<text class="detail-two-title">购买类型</text>
						<text class="detail-two-js">M 灰绿色</text>
						<image src="../static/images/youjiantou.png" mode="" class="detail-two-img"></image>
					</view>
					<view class="detail-shop-box">
						<text class="detail-two-title">优惠券</text>
						<text class="detail-two-js">领取优惠券</text>
						<image src="../static/images/youjiantou.png" mode="" class="detail-two-img"></image>
					</view>
					<view class="detail-shop-box-l">
						<text class="detail-two-title">促销活动</text>
						<view class="detail-shop-xbox">
							<text class="detail-shop-xbox-title">新人首单送20元无门槛代金券</text>
							<text class="detail-shop-xbox-title">订单满50减10</text>
							<text class="detail-shop-xbox-title">订单满100减30</text>
							<text class="detail-shop-xbox-title">单笔购买满两件免邮费</text>
						</view>
						
					</view>
					<view class="detail-shop-box">
						<text class="detail-two-title">服务</text>
						<text class="detail-two-js">7天无理由退换货，假一赔十</text>
						
					</view>
					
					
					
					
				</view>
						
			</view>
			<view style="width: 100%;height: 20upx;background-color: #f6f6f6;"></view>
			
			<!-- 商品评价 -->
			<view class="detail-eva">
				<view class="detail-eva-top">
					<text class="detail-eva-title">评价 (86)</text>
					<view class="detail-eva-l">
						<text>好评率 100%</text>
						<image src="../static/images/youjiantou.png" mode="" class="detail-two-img"></image>
					</view>
				</view>
			</view>
			
		<view class="detail-eva-list">
			<image src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&amp;fm=26&amp;gp=0.jpg" mode="" class="detail-list-img"></image>
			<view class="detail-list-box">
				<text class="detail-list-name">LeeLee</text>
				<text class="detail-list-title">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
				<view class="detail-last-box">
					<text>购买类型：XL 红色</text>
					<text>2019-04-01 19:21</text>
				</view>
			</view>
		</view>
		
		<view style="width: 100%;height: 20upx;background-color: #f6f6f6;"></view>

		<!-- 图文详情 -->
		<view class="detail-images">
			<view class="detail-images-title">图文详情</view>
			<view class="detail-images-box">
				<image src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" mode="" class="detail-images-img"></image>
				<image src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" mode="" class="detail-images-img"></image>
				<image src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" mode="" class="detail-images-img"></image>
				<image src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" mode="" class="detail-images-img"></image>
					<image src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" mode="" class="detail-images-img"></image>
				
			</view>
		</view>
			
		</scroll-view>
		
		<!-- 底部的功能区 -->
		<view class="detail-bott">
			<view class="detail-bott-left">
				<navigator class="detail-bott-left-a" @click="detailindexclick()">
					<image src="../static/images/tab-home.png" mode="" class="detail-left-img"></image>
					<text class="detail-left-title">首页</text>
				</navigator>
				<navigator class="detail-bott-left-a" @click="detailclick()">
					<image src="../static/images/tab-cart.png" mode="" class="detail-left-img"></image>
					<text class="detail-left-title">购物车</text>
				</navigator>
				<view class="detail-bott-left-a">
					<view class="detail-bott-box">
						<image src="../static/images/shoucang.png" mode="" class="detail-left-img-l"></image>
						<image src="../static/images/shoucang%202.png" mode="" class="detail-left-img-l" v-show="false"></image>
					</view>
					
					<text class="detail-left-title">收藏</text>
				</view>
			</view>
			<view class="detail-bott-right">
				<text class="detail-right-ljgm">
					立即购买
				</text>
				<text class="detail-right-jrgwc">
					加入购物车
				</text>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			 shoplistclick(){			 				
						uni.switchTab({
								url: '../pages/index'
					});
					
						uni.navigateBack({
								delta: 1
					})
			 },
			 detailclick(){
				 uni.switchTab({
				 			url: '../pages/cart'
				 });
			 },
			 detailindexclick(){
				  uni.switchTab({
				 			url: '../pages/index'
				 });
			 }
		}
	}
</script>
<style>
	.detail{
		width: 100%;
		height: 100%;
	}
		/* 底部功能区 */
		.detail-bott{
			width: 100%;
			height: 100upx;
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			background-color: #FFFFFF;
			z-index: 5;
			border-top: 1px #CCCCCC solid;
			box-sizing: border-box;
		}
			.detail-bott-left{
				width: 50%;
				height: 100upx;
				display: flex;
				padding-left: 2%;
				padding-right: 2%;
				box-sizing: border-box;
			}
				.detail-bott-left-a{
					width: 32%;
					height: 100upx;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				.detail-left-img{
					width: 40upx;
					height: 40upx;
					margin-bottom: 10upx;
				}
				.detail-left-title{
					font-size: 28upx;
					color: #6b6b6b;
				}
			.detail-bott-box{
				width: 40upx;
				height: 40upx;
				margin-bottom: 10upx;
			}
				.detail-left-img-l{
					width: 40upx;
					height: 40upx;
					
				}
		.detail-bott-right{
			width: 50%;
			height: 100upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
			.detail-right-ljgm{
				width: 45%;
				height:80upx;
				border-radius: 50upx 0 0 50upx;
				background-color: #fb933e;
				font-size: 28upx;
				color: #FFFFFF;
				line-height:80upx;
				text-align: center;
			}
			.detail-right-jrgwc{
				width: 45%;
				height: 80upx;
				border-radius:  0 50upx 50upx 0;
				background-color: #f36269;
				font-size: 28upx;
				color: #FFFFFF;
				line-height: 80upx;
				text-align: center;
			}

/* 滚动区域 */
	.detail-box{
		width: 100%;
		height:85%;
	}
		/* 轮播图 */
		.detail-swiper{
			width: 100%;
			height: 720upx;
		}
			.detail-item{
				width: 100%;
				height: 720upx;
			}
				.detail-item-img{
					width: 100%;
					height: 720upx;
				}
		/* 商品详情 */
		.detail-shop{
			width: 100%;
			padding-left: 20upx;
			padding-right: 20upx;
			box-sizing: border-box;
		}
			.detail-shop-one{
				width: 100%;
				margin: 20upx 0;
			}
				.detail-shop-one-one{
					color: #202020;
					font-size: 32upx;
					padding-bottom: 16upx;
					padding-left: 10upx;
				}
				.detail-shop-one-two{
					width: 100%;
					height: 60upx;
					line-height: 60upx;
					padding:10upx;
					display: flex;
				}
					.detail-new{
						color: #d2486c;
						font-size: 34upx;
						margin-right: 20upx;
					}
					.detail-old{
						color: #97969b;
						font-size: 26upx;
						text-decoration: line-through;
						margin-right: 20upx;
					}
					.detail-dis{
						color: #FFFFFF;
						background-color: #ff4374;
						width: 60upx;
						height: 40upx;
						text-align: center;
						font-size: 24upx;
						margin-top: 10upx;
						line-height: 40upx;
						text-align: center;
					}
			.detail-shop-one-three{
					width: 100%;
					height: 60upx;
					display: flex;
					padding-left: 10upx;

					align-items: center;
					color: #868686;
					font-size: 26upx;
					
					box-sizing: border-box;
			}
				.detail-xl{
					margin-right: 60upx;
				}
				.detail-kc{
					margin-right: 60upx;
				}
				
		  .detail-shop-two{
				width: 100%;
			}
				.detail-shop-box{
					width: 100%;
					height: 80upx;
					font-size: 28upx;
					display: flex;
					align-items: center;
					border-bottom: 1px #f4f4f4 solid;
				}
				.detail-two-title{
					width: 22%;
					/* height: 80upx; */
					/* line-height: 80upx; */
					color: #535353;
					float: left;
				}
				.detail-two-js{
					width: 70%;
					color: #2b2b2b;
					float: left;
				}
				.detail-two-img{
					width: 40upx;
					height: 40upx;
					float: right;
				}
			.detail-shop-box-l{
					width: 100%;
					
					font-size: 28upx;
					display: flex;
					align-items: center;
					border-bottom: 1px #f4f4f4 solid;
			}
				.detail-shop-xbox{
					width: 70%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
					.detail-shop-xbox-title{
						width: 100%;
						height: 60upx;
						font-size: 26upx;
						line-height: 60upx;
					}
					.fhj{
						margin-left:7%;
						font-size: 28upx;
						color: #bf5272;
					}
					
		/* 评价 */
		.detail-eva{
			width: 100%;
			margin: 18upx 0;
		}
			.detail-eva-top{
				width: 100%;
				height: 80upx;
				padding-left: 20upx;
				padding-right: 20upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				font-size: 26upx;
			}
				.detail-eva-title{
					color: #303133;
				}
				.detail-eva-l{
						color:#909399
				}
		
		.detail-eva-list{
			width: 100%;
			padding-left: 20upx;
			padding-right: 20upx;
			box-sizing: border-box;
			display: flex;
		}
			.detail-list-img{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
			.detail-list-box{
				width: 80%;
				margin-left:30upx;
				display: flex;
				justify-content: center;
				/* align-items: center; */
				flex-direction: column;
			}
				.detail-list-name{
					color: #606266;
					font-size: 30upx;
					margin-bottom: 16upx;
				}
				.detail-list-title{
					width: 100%;
					font-size: 30upx;
					margin: 18upx 0;
					line-height: 160%;
				}
				.detail-last-box{
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 80upx;
					font-size: 28upx;
					color: #909399;
				}
		
		/* 图文详情 */
		.detail-images{
			width: 100%;
			margin-bottom: 30upx;
		}
			.detail-images-title{
				width: 100%;
				height: 80upx;
				text-align: center;
				line-height: 80upx;
				font-size: 30upx;
				color: #303133;
			}
			.detail-images-box{
				width:100%;
			}
				.detail-images-img{
					width: 100%;
					height: 720upx;
					display: block;
				}
</style>
