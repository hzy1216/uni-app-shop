<template>
	 <swiper class="swiperlist"  display-multiple-items="4">
					<swiper-item v-for="item in swiperlist" :key="item.id">
							<view   class="swiper-list-a" @click="todetail(item.id,item)">
								<image :src="item.image" mode="" class="swiper-list-img"></image>
								<text class="swiper-list-text">{{item.title}}</text>
								<text class="swiper-list-price">&#165;{{item.price}}</text>
							</view>
							
										
					</swiper-item>
					
	 </swiper>
</template>

<script>
	// import Home from '../static/data/home.js'
	export default {
		data() {
			return {
				// swiperlist:Home.homeListtwo
				swiperlist:[]
			};
		},
		methods:{
			todetail(id,option){
			// 向detail页面传递数据
				let data = JSON.stringify(option) 
				let type = 'swphome' 
				uni.navigateTo({
					url:`../components/detail?id=${id}&type=${type}&data=${encodeURIComponent(data)}`,
				})
			},
			getjson(){
				uni.request({
						url: '../static/data/home.json', //仅为示例，并非真实接口地址。
						method:'get',
						success: (res) => {
								if( res.data.homeList != ''){
									this.swiperlist = res.data.homeListtwo;
								}else{
									console.log('数据获取失败')
								}
						}
				});
			}
		},
		mounted(){
			this.getjson();
		}
	}
</script>

<style>
	.swiper-list{
		width: 100%;
		height: 310upx;
		display: flex;
		justify-content: space-around;
		
	}
		.swiper-list-a{
			width: 160upx;
			height: 300upx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 24upx;
			/* margin-left:20upx ; */
			background-color: #FFFFFF;
		}
			.swiper-list-a:nth-child(1){
				margin-left: 20upx;
			}
		.swiper-list-img{
			width: 160upx;
			height:200upx;
			
		}
			.swiper-list-text{
				overflow: hidden; 
				display: block; 
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
				width: 140upx;
				height: 60upx;
				line-height: 60upx;
			}
				.swiper-list-price{
					width: 140upx;
					height: 40upx;
					line-height: 40upx;
				}
</style>
