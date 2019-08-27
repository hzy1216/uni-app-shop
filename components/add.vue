<template>
	<view class="address">
		<view class="setting-top">
			<navigator class="setting-top-url"  open-type="navigateBack" url="address">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			
			<text class="setting-top-title" style="margin-right: 35%;">新增收货地址</text>
		</view>
		
		<!-- 表单 -->
		<form  class="add">
			<view class="add-input">
				<text class="add-input-name">联系人</text>
				<input type="text" value="" placeholder="收货人姓名" class="add-input-text"/>
			</view>
			<view class="add-input">
				<text class="add-input-name">手机号</text>
				<input type="number" value="" placeholder="收货人手机号码"  maxlength="11"   class="add-input-text"/>
			</view>
			<navigator class="add-input" url="./mymap">
				<text class="add-input-name">地址</text>
				<text class="add-input-map">在地图选择</text>
				<image src="../static/images/dangdi.png" mode="" class="add-map-img"></image>
			</navigator>
			<view class="add-input">
				<text class="add-input-name">门牌号</text>
				<input type="text" value="" placeholder="楼号,门牌" class="add-input-text"/>
			</view>
			<view class="add-swith">
				<text class="add-input-name">设为默认</text>
				<switch  color= "#f9436b" class="add-sw"/>
			</view>
			<view class="add-sub">
				<button type="submit" class="add-sub">提交</button>
			</view>
		</form>
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
	/* 表单 */
		.add{
			margin-top: 16upx;
			width: 100%;
		}
			.add-input{
				width: 100%;
				height: 100upx;
				padding-left:40upx;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				border-bottom: 1px #f4f4f4 solid;
				position: relative;
			}
				.add-input-name{
					color: #2c2c2c;
					font-size: 32upx;
					
					
				}
				.add-input-text{
					width: 80%;
					padding-left: 40upx;
					padding-right: 20upx;
					box-sizing: border-box;
					font-size: 28upx;
					color: #2c2c2c;
				}
				.add-swith{
					width: 100%;
					height: 100upx;
					padding-left:40upx;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					border-bottom: 1px #f4f4f4 solid;
					justify-content: space-between;
				}
			.add-sub{
				width: 90%;
				height: 90upx;
				background-color: #f9436b;
				color: #FFFFFF;
				font-size: 32upx;
				line-height: 90upx;
				text-align: center;
				margin-top: 60upx;
				border-radius: 14upx;
				margin-left: 5%;
			}
			.add-map-img{
				width: 40upx;
				height: 40upx;
				position: absolute;
				right: 40upx;
			}
			.add-input-map{
				color: #313131;
				font-size: 28upx;
				margin-left: 75upx;
			}
			.add-sw{
				margin-right: 40upx;
			}
</style>
