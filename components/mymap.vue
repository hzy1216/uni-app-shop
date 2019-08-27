<template>
	<view class="mymap">
		<view class="setting-top" style="background-color: #F8F8F8;">
			<navigator class="setting-top-url"  open-type="navigateBack" url="address">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">选择位置</text>
		</view>
		
		<!-- 搜索栏 -->
		 <view class="mymap-seach">
				<view class="mymap-seach-one" >
					<view class="mymap-seach-click">
						<image src="../static/images/41.png" mode="" class="mymap-seach-click-img"></image>
						<text class="mymap-seach-click-text">搜索地点</text>
					</view>			
				</view>
				<view class="mymap-seach-two" v-show="false">
					<image src="../static/images/41.png" mode="" class="mymap-seach-click-img fdj"></image>
					<input type="text" value="" placeholder="搜索地点" class="mymap-seach-two-input"/>
					<image src="../static/images/cc.png" mode="" class="mymap-seach-click-img dcd" v-show="false"></image>
					<text class="mymap-seach-two-text">取消</text>
				</view>
		 </view>
		 
		 <!-- 地图 -->
		 <view class="map-box">
				<map  class="map-me"></map>
		 </view>
		 <scroll-view scroll-y class="mymap-list-box"  >
		 	<view class="mymap-list">
				<text class="mymap-address-one">我的位置</text>
				<text class="mymap-address-two">上海市嘉定区</text>
			</view>
			
		 
		 </scroll-view>
		 
		 <!-- 点击搜索栏后出现的地址列表 -->
		  <scroll-view scroll-y class="mymap-list-box-two" v-show="false">
				<view class="mymap-list-two">
					<image src="../static/images/41.png" mode="" class="mymap-seach-click-img sslfdj"></image>
		 			<text class="mymap-address-one myone">我的位置</text>
		 			<text class="mymap-address-two myone">上海市嘉定区</text>
		 		</view>
		 		
		 
		 </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.mymap{
		height: 100%;
		width: 100%;
	}
		/* 搜索栏 */
		.mymap-seach{
			width: 100%;
			height: 110upx;
			background-color: #FFFFFF;
		}
			.mymap-seach-one{
				width: 100%;
				height: 110upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

				.mymap-seach-click{
					width: 90%;
					height: 80upx;
					background-color: #ebebeb;
					border-radius: 14upx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
					.mymap-seach-click-img{
						width: 40upx;
						height: 40upx;
					}
					.mymap-seach-click-text{
						font-size: 28upx;
						color: #8c8c8c;
						margin-left: 10upx;
					}
		
		.mymap-seach-two{
			width: 100%;
			height: 110upx;
			display: flex;
			
			align-items: center;
			position: relative;
			
		}
			.fdj{
				position: absolute;
				left: 8%;
			}
			.dcd{
				position: absolute;
				right: 22%;
			}
			
			.mymap-seach-two-input{
				width: 75%;
				height: 70upx;
				background-color: #ebebeb;
				border-radius: 14upx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 4%;
				padding-left: 12%;
				line-height: 70upx;
				box-sizing: border-box;
			}		
			.mymap-seach-two-text{
				width: 14%;
				height: 70upx;
				margin-left: 4%;
				font-size: 30upx;
				line-height: 70upx;
				text-align: center;
				color: #007AFF;
			}
			/* 地图		 */
			.map-box{
				width: 96%;
				height: 40%;
				margin-left: 2%;
			}
				.map-me{
					width: 100%;
					height: 100%;
				}
				
		/* 列表 */
		.mymap-list-box{
			width: 100%;
			height: 45%;
		}
			.mymap-list{
				width: 100%;
				height: 120upx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				padding-left: 40upx;
			}
			.mymap-address-one{
				color: #333333;
				font-size: 30upx;
				margin-bottom: 10upx;
				overflow: hidden; 
				display: block; 
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;

			}
			.mymap-address-two{
				color: #797979;
				font-size: 24upx;
				overflow: hidden; 
				display: block; 
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;

			}
			
		/* 第二个列表 */
		.mymap-list-box-two{
			width: 100%;
			height: 85%;
			border-top: 1px #C8C7CC solid;
			background-color: #ebebeb;
		}
			.mymap-list-two{
				width: 100%;
				height: 120upx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				padding-left: 40upx;
				position: relative;
			
				border-bottom: 1px #C8C7CC solid;
			}
			.sslfdj{
				position: absolute;
			}
			.myone{
				padding-left: 50upx;
				box-sizing: border-box;
			}
</style>
