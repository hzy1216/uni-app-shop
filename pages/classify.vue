<template>
	<view class="classify">
			<view class="classify-top">
					<text>分类</text>
			</view>
			<view class="classify-list">
					<scroll-view scroll-y class="classify-list-left">
						<a class="classify-list-left-a" href="#classify-one" @click="classclick(0)" :class='{cactive:0 == classValue}'>手机数码</a>
						<a  class="classify-list-left-a"  href="#classify-two" @click="classclick(1)" :class='{cactive:1 == classValue}'>礼品鲜花</a>
						<a class="classify-list-left-a"  href="#classify-three" @click="classclick(2)" :class='{cactive:2 == classValue}'>男装女装</a>
						<a  class="classify-list-left-a"  href="#classify-four" @click="classclick(3)" :class='{cactive:3 == classValue}'>母婴用品</a>
					</scroll-view>
					<scroll-view scroll-y class="classify-list-right">
						<!-- 一楼 -->
						<view class="classify-list-r-box" id="classify-one">
								<text class="classify-list-right-title">手机通讯</text>
								<view class="classify-list-right-list">
									<view url="../components/shoplist" class="classify-list-right-a" v-for=" oneitem in onefloor" :key="oneitem.id" @click="classdetail(oneitem.id,one)">
										<image :src="oneitem.img" mode="" class="classify-list-right-img">
											
										</image>
										<text class="classify-list-right-text">{{oneitem.title}}</text>
									</view>
									
								</view>
						</view>
						<!-- 二楼 -->
						<view class="classify-list-r-box" id="classify-two">
								<text class="classify-list-right-title">礼品鲜花</text>
								<view class="classify-list-right-list">
									<view url="../components/shoplist" class="classify-list-right-a" v-for=" twoitem in twofloor" :key="twoitem.id" @click="classdetail(twoitem.id,two)">
										<image :src="twoitem.img" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">{{twoitem.title}}</text>
									</view>
									
								</view>
						</view>
						<!-- 三楼 -->
						<view class="classify-list-r-box" id="classify-three">
								<text class="classify-list-right-title">男装女装</text>
								<view class="classify-list-right-list">
									<view url="../components/shoplist" class="classify-list-right-a" v-for=" threeitem in threefloor" :key="threeitem.id" @click="classdetail(threeitem.id,three)">
										<image :src="threeitem.img" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">{{threeitem.title}}</text>
									</view>
									
								</view>
						</view>
						<!-- 四楼 -->
						<view class="classify-list-r-box" id="classify-four">
								<text class="classify-list-right-title">母婴用品</text>
								<view class="classify-list-right-list">
									<view url="../components/shoplist" class="classify-list-right-a" v-for=" fouritem in fourfloor" :key="fouritem.id" @click="classdetail(fouritem.id,four)">
										<image :src="fouritem.img" mode="" class="classify-list-right-img"></image>
										<text class="classify-list-right-text">{{fouritem.title}}</text>
									</view>
									
								</view>
						</view>
					</scroll-view>
			</view>
	</view>
</template>

<script>
	import floor from '../static/data/class.js'
		export default{
			data() {
				return {				
						onefloor:floor.onefloor,
						twofloor:floor.twofloor,
						threefloor:floor.threefloor,
						fourfloor:floor.fourfloor,
						one:"one",
						two:"two",
						three:"three",
						four:"four",
						classValue: "0",
				};
			},
			methods:{
					classdetail(id,option){
				// 向detail页面传递数据 
				
					uni.navigateTo({
						url:`../components/shoplist?id=${id}&data=${encodeURIComponent(option)}`,
					})
				},
				classclick:function(id){
					this.classValue = id ;
				}
				
			}
		}
</script>

<style scoped>

	.cactive{
		background-color: #ffeefc;
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
