<template>
	<view class="classify">
			<view class="classify-top">
					<text>分类</text>
			</view>
			<view class="classify-list">
					<scroll-view scroll-y class="classify-list-left">
<!-- 						<navigator url="" class="classify-list-left-a" @click="getmybox('#classify-one')">手机数码</navigator>
						<navigator url="" class="classify-list-left-a">礼品鲜花</navigator>
						<navigator url="" class="classify-list-left-a">男装女装</navigator>
						<navigator url="" class="classify-list-left-a">母婴用品</navigator> -->
						<a class="classify-list-left-a" href="#classify-one" >手机数码</a>
						<a  class="classify-list-left-a"  href="#classify-two" >礼品鲜花</a>
						<a class="classify-list-left-a"  href="#classify-three" >男装女装</a>
						<a  class="classify-list-left-a"  href="#classify-four" >母婴用品</a>
					</scroll-view>
					<scroll-view scroll-y class="classify-list-right">
						<!-- 一楼 -->
						<view class="classify-list-r-box" id="classify-one">
								<text class="classify-list-right-title">手机通讯</text>
								<view class="classify-list-right-list">
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate2.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">全面屏手机</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate1.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">游戏手机</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate3.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">老人机</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate5.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">拍照手机</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate4.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">女性手机</text>
									</navigator>
								</view>
						</view>
						<!-- 二楼 -->
						<view class="classify-list-r-box" id="classify-two">
								<text class="classify-list-right-title">礼品鲜花</text>
								<view class="classify-list-right-list">
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate8.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">创意礼品</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate7.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">工艺摆件</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate12.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">鲜花</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate10.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">卡通花束</text>
									</navigator>
								</view>
						</view>
						<!-- 三楼 -->
						<view class="classify-list-r-box" id="classify-three">
								<text class="classify-list-right-title">男装女装</text>
								<view class="classify-list-right-list">
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate13.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">男士T恤</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate14.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">男士外套</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate16.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">女上装</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate15.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">女下装</text>
									</navigator>
								</view>
						</view>
						<!-- 四楼 -->
						<view class="classify-list-r-box" id="classify-four">
								<text class="classify-list-right-title">母婴用品</text>
								<view class="classify-list-right-list">
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate17.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">奶粉</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate19.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">童装</text>
									</navigator>
									<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate21.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">儿童餐具</text>
									</navigator>
										<navigator url="../components/shoplist" class="classify-list-right-a">
										<image src="../static/images/temp/cate21.jpg" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">儿童餐具</text>
									</navigator>
								</view>
						</view>
					</scroll-view>
			</view>
	</view>
</template>

<script>
		export default{
			
			methods:{
				
			}
		}
</script>

<style scoped>
	uni-page-body{
		height: 100%;
	}
	.classify{
		width: 100%;
		height: 100%;
	}
		/* 头部标题 */
		.classify-top{
			width: 100%;
			height: 90upx;
			font-size: 30upx;
			font-weight: 700;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px #f4f4f4 solid;
		}
		/* 选项卡 */
		.classify-list{
			width: 100%;
			height: 100%;
			display: flex;
		}
			.classify-list-left{
				width: 25%;
				height: 100%;
				border-right: 1px #f4f4f4 solid;
			}
				.classify-list-left-a{
					width: 100%;
					height: 120upx;
					font-size: 30upx;
					line-height: 120upx;
					text-align: center;
					border-bottom: 1px #f4f4f4 solid;
					float: left;
					color: #5c5c5c;
					text-decoration: none;
				}
			.classify-list-right{
				background-color: #f8f8f8;
				width: 75%;
				height: 100%;
				padding-left: 20upx;
				box-sizing: border-box;
			}
				.classify-list-r-box{
					width: 100%;
					
				}
					.classify-list-right-title{
						height: 80upx;
						width: 100%;
						line-height: 80upx;
						font-size: 30upx;
						color: #2b2b2b;
					}
						.classify-list-right-list{
							display: flex;
							flex-wrap: wrap;
							background-color: #FFFFFF;
						}
							.classify-list-right-a{
								width: 30%;
								height:240upx;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								margin-right: 3%;
								background-color: #FFFFFF;
							}
							.classify-list-right-img{
								width: 100%;
								height: 160upx;
							}
							.classify-list-right-text{
								font-size: 24upx;
								color: #5a5a5a;
								
							}
							
					.classify-list-r-box:nth-last-child(1){
						margin-bottom: 90upx;
					}
</style>
