<template>
	<view class="cart">
		<view class="cart-top">
			<text class="cart-top-title">购物车</text>
		</view>
		<mycart></mycart>
	
	</view>
</template>

<script>
	import mycart from '../components/mycart.vue'
	export default{
		components:{
			mycart
		}
	}
</script>

<style>
		uni-page-body{
		height: 100%;
	}
	.cart{
		width: 100%;
		height: 100%;
	}
		/* 头部标题 */
		.cart-top{
			width: 100%;
			height: 90upx;
			font-size: 30upx;
			font-weight: 700;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px #f4f4f4 solid;
		}
</style>
