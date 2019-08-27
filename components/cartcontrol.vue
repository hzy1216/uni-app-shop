<template>
	<view style="display: flex;flex-direction: row;" class="cartcontrol">
		<view class="cont">
			<image src="../static//images/des.png" mode="" style="width: 20px;height: 20px;"></image>
		</view>
		<text style="padding: 0 4px;" class="cartcontrol-text">121</text>
		<view class="cont">
			<image src="../static/images/add2.png" style="width: 20px;height: 20px;color: #CCCCCC;" mode=""></image>
		</view>
	</view>
</template>

<script>
	// import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object,
			}
		},
		data() {
			return {
			};
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.cartcontrol{
	width: 100%;
	height: 120upx;
	display: flex;
	
	align-items: center;
}
	.cont {
		width: 60upx;
		height: 60upx;
		box-sizing: border-box;
		border-radius: 50%;
		text-align: center;
	}
		.cartcontrol-text{
			width: 80upx;
			height: 60upx;
			line-height: 40upx;
			text-align: center;
			color: #000000;
			font-size: 30upx;
		}
</style>
