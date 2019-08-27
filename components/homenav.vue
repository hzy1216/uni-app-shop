<template>
	<view class="homenav">
		<navigator url="" class="homenav-list" hover-class="homenav-active">
			<image src="../static/images/temp/c3.png" mode="" class="homenav-img"></image>
			<text>{{homenavtitle.one}}</text>
		</navigator>
		<navigator url="" class="homenav-list" hover-class="homenav-active">
			<image src="../static/images/temp/c5.png" mode="" class="homenav-img"></image>
			<text>{{homenavtitle.two}}</text>
		</navigator>
		<navigator url="" class="homenav-list" hover-class="homenav-active">
			<image src="../static/images/temp/c6.png" mode="" class="homenav-img"></image>
			<text>{{homenavtitle.three}}</text>
		</navigator>
		<navigator url="" class="homenav-list" hover-class="homenav-active">
			<image src="../static/images/temp/c7.png" mode="" class="homenav-img"></image>
			<text>{{homenavtitle.four}}</text>
		</navigator>		
		<navigator url="" class="homenav-list" hover-class="homenav-active">
			<image src="../static/images/temp/c8.png" mode="" class="homenav-img"></image>
			<text>{{homenavtitle.five}}</text>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homenavtitle:{
					"one":"环球美食",
					"two":"个护美妆",
					"three":"营养保健",
					"four":"家具厨卫",
					"five":"速食生鲜"
				}
			};
		}
	}
</script>

<style>
	.homenav{
		width: 100%;
		height: 180upx;
		padding: 0 2.5%;
		display: flex;
	}
		.homenav-list{
			width: 19%;
			height: 180upx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 24upx;
			color: #151515;
		}
		.homenav-img{
			width: 78upx;
			height: 78upx;
			margin-bottom: 10upx;
		}
		.homenav-active{
			background-color: #F8F8F8;
			color: #fd6e15;
			/* opacity: 0.2; */
		}
</style>
