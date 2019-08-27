<template>
	<view class="list">
			<navigator url="../components/detail" class="list-url">
				<image src="../static/images/temp/cate7.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
				
			</navigator>
			<navigator url="" class="list-url">
				<image src="../static/images/temp/cate8.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
			</navigator>
			<navigator url="" class="list-url">
				<image src="../static/images/temp/cate3.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
			</navigator>
			<navigator url="" class="list-url">
				<image src="../static/images/temp/cate20.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
			</navigator>
			<navigator url="" class="list-url">
				<image src="../static/images/temp/cate18.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网没考好科技网没考好科技网没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
			</navigator>
			<navigator url="" class="list-url">
				<image src="../static/images/temp/cate13.jpg" mode="" class="list-img"></image>
				<text class="list-title">没考好科技网没考好科技网没考好科技网没考好科技网</text>
				<view class="list-text-box">
					<text class="list-price">&#165;35</text>
					<text class="list-ysnum">已售 16件</text>
				</view>
			</navigator>
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

<style scoped>
	.list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 60upx;
		
	}
		.list-url{
			width: 40%;
			height: 400upx;
			margin-left: 5%;
			display: flex;
			margin-top: 50upx;
			flex-direction: column;
		
			background-color: #FFFFFF;
		}
			.list-img{
				width: 100%;
				height: 300upx;
			}
				.list-title{
					width: 100%;
					height: 80upx;
					overflow: hidden; 
					display: block; 
					text-overflow: ellipsis;
					white-space: nowrap;
					cursor: pointer;
					line-height: 80upx;
					font-size: 34upx;
				}
				.list-text-box{
					display: flex;
					justify-content: space-between;
					align-items: center;
						height: 50upx;
						width: 100%;
				}
				.list-price{
					
					font-size: 30upx;
				}
				.list-ysnum{
				
					font-size: 24upx;
					
				}
</style>
