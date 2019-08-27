<template>
	<view class="detail">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="detailclick()"  open-type="navigateBack">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">商品详情</text>
		</view>
		<scroll-view scroll-y class="detail-box">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</scroll-view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			 shoplistclick(){			 				
						uni.switchTab({
								url: '../pages/index'
					});
					
						uni.navigateBack({
								delta: 1
					})
			 }
		}
	}
</script>
<style>

</style>
