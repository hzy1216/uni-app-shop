<template>
	<view class="home">
		<!-- 头部搜索栏 -->
		<topnav></topnav>
		<scroll-view scroll-y class="home-list">
				<!-- 轮播图 -->
				<swiperbanner></swiperbanner>
				<!-- 内部导航 -->
				<homenav></homenav>
				<!-- 广告位 -->
				<view class="home-adver">
					<navigator url="" style="width: 100%;background-color: #FFFFFF;" >
						<image src="../static/images/temp/ad1.jpg" mode="" class="home-adver-img"></image>
					</navigator>				
				</view>
				<!-- 横条 -->
				<view style="width: 100%;height: 20upx;background-color: #f6f6f6;"></view>
				<!-- 滑动 -->
				<view class="home-swiper">
						<view class="home-swiper-top">
							<image src="../static/images/temp/secskill-img.jpg" mode="" class="home-swiper-top-o"></image>
							<image src="../static/images/youjiantou.png" mode="" class="home-swiper-top-t"></image>
						</view>
						<swiperlist></swiperlist>
				</view>
				<!-- 横条 -->
				<view style="width: 100%;height: 20upx;background-color: #f6f6f6;"></view>
				<!-- list上方top -->
				<view class="list-top">
					<view class="list-top-title">
						<image src="../static/images/temp/h1.png" mode="" class="list-title-img"></image>
						<text class="list-title-text">猜你喜欢</text>
					</view>
					<image src="../static/images/youjiantou.png" mode="" class="home-swiper-top-t"></image>
				</view>
				<!-- 列表 -->
				<view class="list">					
						<view class="list-url" v-for="item in homeList" :key="item.id"  @click="todetail(item.id,item)">
							<image :src="item.image" mode="" class="list-img"></image>
							<text class="list-title">{{item.title}}</text>
							<view class="list-text-box">
								<text class="list-price">&#165;{{item.price}}</text>
							</view>				
						</view>
						
				</view>
				<uni-load-more :loadingType="1" class="mb"></uni-load-more>
		</scroll-view>
	</view>
	
</template>

<script>
	import topnav from '../components/topnav'
	import swiperbanner from '../components/swiperbanner'
	import homenav from '../components/homenav.vue'
	import swiperlist from '../components/swiperlist.vue'
	import Home from '../static/data/home.js'
	import uniLoadMore from '../components/uni-load-more/uni-load-more.vue'
	export default {
		data() {
			return {
				homeList:Home.homeList,
				
			}
		},
		components:{
			topnav,swiperbanner,homenav,swiperlist,uniLoadMore
		},
		methods:{
			todetail(id,option){
			// 向detail页面传递数据
				let data = JSON.stringify(option) 
				uni.navigateTo({
					url:`../components/detail?id=${id}&data=${encodeURIComponent(data)}`,
				})
			}
		}
	}
</script>

<style scoped>
	.home {
		width: 100%;
		height: 100%;
		/* display: flex; */
	}
	.home-list{
		margin-top: 140upx;
		width: 100%;
	}
	.home-adver{
		width: 100%;
		height: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
		.home-adver-img{
			width: 100%;
			height: 160upx;
			border-radius: 80upx;
		}
		.home-swiper{
			width: 100%;
			height: 400upx;
		}
			.home-swiper-top{
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
			
				justify-content: space-between;
			}
				.home-swiper-top-o{
					width:160upx;
					height: 40upx;
					margin-left: 40upx;
				}
				.home-swiper-top-t {
					width: 40upx;
					height: 40upx;
					margin-right: 30upx;
				}
				
			/* list上方 */
			.list-top{
				width: 100%;
				height: 120upx;
				
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
				.list-top-title{
					width: 30%;
					margin-left: 30upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.list-title-img{
					width: 80upx;
					height: 80upx;
				}
				.list-title-text{
					font-size: 30upx;
					color: red;
				}
				
				
		
		.mb{
			margin-bottom: 150upx;
			height: 40upx;
			line-height: 40upx;
		}
</style>
