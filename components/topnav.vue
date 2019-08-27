<template>
	<view class="topnav">
			<image src="../static/images/saoyisao.png" mode="" class="topnav-img"></image>
			<view class="topnav-search">
					<image src="../static/images/41.png" mode="" class="top-s-img"></image>
					<input type="text" value="" placeholder="请输入商品" class="top-s-sea"/>
			</view>
			<navigator url="">
				<image src="../static/images/xiaoxi.png" mode="" class="topnav-img"></image>
			</navigator>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.topnav{
		width: 100%;
		height: 140upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #FFFFFF;
		background-color: #f8f8f8;
		z-index: 999;
	}
		.topnav-img{
			width: 50upx;
			height: 50upx;
		}
		.topnav-search{
			width: 65%;
			height: 120upx;
			position: relative;
			display: flex;
			align-items: center;
		}
			.top-s-img{
				position: absolute;
				width: 50upx;
				height: 50upx;
				left: 40upx;
			}
			.top-s-sea{
				width: 100%;
				height: 60upx;
				border-radius: 60upx;
				border: 1px #707070 solid;
				line-height: 60upx;
				padding-left: 100upx;
				font-size: 32upx;
			}
</style>
