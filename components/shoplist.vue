<template>
	<view class="shoplist">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="shoplistclick()" >
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">商品列表</text>
		</view>
		
		<!-- tab切换 -->
		<view class="tab">
			<view class="tab-left">
				<text class="tab-left-title title-bott">综合排序</text>
				<text class="tab-left-title">销量优先</text>
				<view class="tab-left-title title-sx">
					<text>价格</text>
					<view class="tab-left-box">
						<image src="../static/images/shangjiantou.png" mode="" class="tab-left-title-img"></image>
					
						<image src="../static/images/xiajiantou.png" mode="" class="tab-left-title-img"></image>
					</view>
					
				</view>
			</view>
			<view class="tab-right">
				<image src="../static/images/fenlei.png" mode="" class="tab-right-img"></image>
			</view>
		</view>
		
		<!-- 弹出的选项 -->
		<view class="tab-click" v-show="false">
			<scroll-view scroll-y class="tab-click-box">
				<view class="tab-click-box-nav">
					<view class="tab-click-title">
						<text>手机通讯</text>
					</view>
					<view class="tab-click-two">
						<text>全面屏手机</text>
					</view>
					<view class="tab-click-two">
						<text>游戏手机</text>
					</view>
					<view class="tab-click-two">
						<text>老年手机</text>
					</view>
					<view class="tab-click-two">
						<text>拍照手机</text>
					</view>
					<view class="tab-click-two">
						<text>女性手机</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		
		
		<!-- 商品列表 -->
		
		<scroll-view scroll-y="true" style="height: 85%">
			<mylist></mylist>
		</scroll-view>
		
		
	</view>
</template>

<script>
	import mylist from '../components/list.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			mylist
		},
		methods:{
			 shoplistclick(){			 				
						uni.switchTab({
								url: '../pages/classify'
					});
			 }
		}
	}
</script>

<style>
	.shoplist{
		width: 100%;
		height: 100%;
		
	}
	
	.tab{
		width: 100%;
		height: 90upx;
		display: flex;
		border-bottom: 2px #EBEBEB solid;
		box-sizing: border-box;
	}
		.tab-left{
			width: 85%;
			height: 90upx;
			display: flex;
			padding-left: 4%;
			box-sizing: border-box;
			justify-content: space-around;
			align-items: center;
			
		}
			.tab-left-title{
				width:32%;
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				font-size: 30upx;
				color: #c8536e;
				font-weight: 600;
				box-sizing: border-box;
				
			}
			.title-sx{
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.title-bott{
				border-bottom: 2px #fd5085 solid;
			}
			.tab-left-box{
				width: 30upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-left: 10upx;
			}
			.tab-left-title-img{
				width: 30upx;
				height: 30upx;
			}
		.tab-right{
			width: 15%;
			height: 90upx;
			display: flex;
			align-items: center;
			justify-content: center;
			
		}
			.tab-right-img{
				width: 50upx;
				height: 50upx;
			}
		
		/* 列表 */
		.list{
			margin-bottom: 0;
		}
		
		/* 弹出的选框	 */
		.tab-click{
			width: 100%;
			height: 100%;
			position: fixed;
			right: 0;
			top: 90upx;
			background-color: rgba(153,153,153,0.5);
			z-index: 5;
		}
				.tab-click-box{
					width: 70%;
					height: 100%;
					background-color: #FFFFFF;
					float: right;
				}
					.tab-click-box-nav{
						width: 100%;
						height: 100%;
					}
					.tab-click-title{
						width: 100%;
						height: 80upx;
						line-height:80upx;
						padding-left: 15upx;
						font-size: 32upx;
						background-color: #f8f8f8;
						border-bottom: 1px #CCCCCC solid;
					}
					.tab-click-two{
						width: 100%;
						height: 80upx;
						line-height: 80upx;
						padding-left: 15upx;
						font-size: 32upx;
						background-color: #FFFFFF;
						border-bottom: 1px #CCCCCC solid;

					}
</style>
