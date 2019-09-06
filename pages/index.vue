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
				<text v-show="tmsg" class="tmsg">{{$msg}}</text>
				
		</scroll-view>
		<view class="loading-text" style="margin-bottom: 100upx;">{{ loadingText }}</view>
	</view>
	
</template>

<script>
	import topnav from '../components/topnav'
	import swiperbanner from '../components/swiperbanner'
	import homenav from '../components/homenav.vue'
	import swiperlist from '../components/swiperlist.vue'
	
	export default {
		data() {
			return {
				homeList:[],
				headerPosition: 'fixed',
				headerTop:null,
				statusTop:null,
				nVueTitle:null,
				tmsg:false,
				loadingText: '正在加载...'
			}
		},
		components:{
			topnav,swiperbanner,homenav,swiperlist
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			uni.showToast({ title: '触发上拉加载' });
			
			let len = this.homeList.length;
			if (len >= 48) {
				this.loadingText = '到底了';
				return false;
			}
			// 演示,随机加入商品,生成环境请替换为ajax请求
			let end_goods_id = this.homeList[len-1].goods_id;
			for (let i = 1; i <= 12; i++) {
				let goods_id = end_goods_id + i;
				let p = {
					goods_id: goods_id,
					image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
					image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
					image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
					title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
					price: "179",
					number: "61"
				};
				this.homeList.push(p);
			}
		},
		methods:{
			todetail(id,option){
			// 向detail页面传递数据
			let type = 'home';
				let data = JSON.stringify(option) 
				uni.navigateTo({
					url:`../components/detail?id=${id}&type=${type}&data=${encodeURIComponent(data)}`,
				})
			},
			gethome(){
				uni.request({
					url: '../static/data/home.json', //仅为示例，并非真实接口地址。
					method:'get',
					success: (res) => {
							if( res.data.homeList != ''){
								
								this.homeList = res.data.homeList;
							}else{
								this.$msg = '数据请求失败'				
								this.uniload = false
							 	this.tmsg = true
							}
					}
				});
			},
		},
		
		mounted(){
			this.gethome();
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
		.tmsg{
			width: 100%;
			height: 100upx;
			float: left;
			line-height: 100upx;
			text-align: center;
			font-size: 36upx;
			margin-bottom: 100upx;
		}
</style>
