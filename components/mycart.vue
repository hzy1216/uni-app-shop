<template>
	<scroll-view scroll-y class="mycart">
		<!-- 要结算的商品 -->
		<view class="mycart-list">
			<view class="mycart-list-xzq-l">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-l" v-show="false"></image>
			</view>		
			<view class="mycart-list-box">
				<image src="../static/images/temp/cate20.jpg" mode="" class="mycart-list-box-img"></image>
				<view class="mycart-list-title">
					<text class="mycart-list-title-top">发违法哇哇的</text>
					<text class="mycart-list-title-bott">我的文档l</text>
					<text class="mycart-list-title-price">&#165;4567</text>
					<cartcontrol></cartcontrol>
				</view>
			</view>
			<image src="../static/images/cc.png" mode="" class="mycart-list-xx"></image>
			
		</view>
		<view class="mycart-list">
			<view class="mycart-list-xzq-l">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-l" v-show="false"></image>
			</view>		
			<view class="mycart-list-box">
				<image src="../static/images/temp/cate20.jpg" mode="" class="mycart-list-box-img"></image>
				<view class="mycart-list-title">
					<text class="mycart-list-title-top">发违法哇哇的</text>
					<text class="mycart-list-title-bott">我的文档l</text>
					<text class="mycart-list-title-price">&#165;4567</text>
					<cartcontrol></cartcontrol>
				</view>
			</view>
			<image src="../static/images/cc.png" mode="" class="mycart-list-xx"></image>
			
		</view>
		<view class="mycart-list">
			<view class="mycart-list-xzq-l">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-l" v-show="false"></image>
			</view>		
			<view class="mycart-list-box">
				<image src="../static/images/temp/cate20.jpg" mode="" class="mycart-list-box-img"></image>
				<view class="mycart-list-title">
					<text class="mycart-list-title-top">发违法哇哇的</text>
					<text class="mycart-list-title-bott">我的文档l</text>
					<text class="mycart-list-title-price">&#165;4567</text>
					<cartcontrol></cartcontrol>
				</view>
			</view>
			<image src="../static/images/cc.png" mode="" class="mycart-list-xx"></image>
			
		</view>
		<view class="mycart-list">
			<view class="mycart-list-xzq-l">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-l" v-show="false"></image>
			</view>		
			<view class="mycart-list-box">
				<image src="../static/images/temp/cate20.jpg" mode="" class="mycart-list-box-img"></image>
				<view class="mycart-list-title">
					<text class="mycart-list-title-top">发违法哇哇的</text>
					<text class="mycart-list-title-bott">我的文档l</text>
					<text class="mycart-list-title-price">&#165;4567</text>
					<cartcontrol></cartcontrol>
				</view>
			</view>
			<image src="../static/images/cc.png" mode="" class="mycart-list-xx"></image>
			
		</view>
		<!-- 结算 -->
		<view class="settle">
			<view class="mycart-list-xzq">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img" v-show="false"></image>
			</view>
			<view class="settle-bott">
				<view class="settle-box">
					<text class="settle-bott-title">&#165;12487.54</text>
					<text class="settle-bott-title">已优惠12.54</text>
				</view>			
				<navigator url="" class="settle-a">去结算</navigator>
			</view>
		</view>
	</scroll-view>
	
</template>

<script>
	import cartcontrol from '../components/cartcontrol'
	
	export default{
		components:{
			cartcontrol
		},
	}
</script>

<style>
	.mycart {
		width: 100%;
		height: 100%;
		
	}
		/* 结算 */
		.settle{
			width: 90%;
			height: 120upx;
			position: fixed;
			bottom:130upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: rgba(255,255,255,0.8);
			z-index: 555;
			left: 5%;
			border-radius: 12upx;
			box-shadow:6upx 6upx 6upx 6upx #c1c7c7;
		
		}
		.mycart-list-xzq{
			width: 100upx;
			height: 120upx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
			.mycart-list-xzq-img{
				width: 60upx;
				height: 60upx;
				position: absolute;
			}
			.settle-bott{
				width: 65%;
				height: 120upx;
				display: flex;
			}
				.settle-box{
					width:50%;
					height: 120upx;
					
					
				}
				.settle-bott-title{
					width:100%;
					height: 60upx;
					float: left;
					line-height: 60upx;
					font-size: 32upx;
					color: red;
				}
				
				.settle-a{
					height: 80upx;
					width: 40%;
					background-color: #f8446b;
					border-radius: 50upx;
					color: #FFFFFF;
					margin-left: 5%;
					margin-top:20upx;
					line-height: 80upx;
					text-align: center;
				}

	/* 商品列表 */
	.mycart-list{
		width: 100%;
		height: 320upx;
		display: flex;
		border-bottom: 1px #f6f6f6 solid;
	}
	.mycart-list:nth-last-child(2){
		margin-bottom: 260upx;
	}
	.mycart-list-xzq-l{
		width: 80upx;
		height: 80upx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20upx;
		
	}
		.mycart-list-xzq-img-l{
			width: 50upx;
			height: 50upx;
			position: absolute;
		}
		.mycart-list-box{
			width: 80%;
			height: 300upx;
			margin-top: 20upx;
			display: flex;
		}
			.mycart-list-box-img{
				width: 50%;
				height: 280upx;
				
			}
			.mycart-list-title{
				width: 50%;
				height: 300upx;
			}
				.mycart-list-title-top{
					width: 100%;
					height: 60upx;
					overflow: hidden; 
					display: block; 
					text-overflow: ellipsis;
					white-space: nowrap;
					cursor: pointer;
					line-height: 60upx;
					font-size: 32upx;
					color: #353535;
				}
				.mycart-list-title-bott{
					width: 100%;
					height: 60upx;
					overflow: hidden; 
					display: block; 
					text-overflow: ellipsis;
					white-space: nowrap;
					cursor: pointer;
					font-size: 24upx;
					line-height: 60upx;
					color: #929294;
				}
				.mycart-list-title-price{
					width: 100%;
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
					color: #292929;
				}
		.mycart-list-xx{
			width: 50upx;
			height: 50upx;
			margin-top: 40upx;
		}
		
</style>
