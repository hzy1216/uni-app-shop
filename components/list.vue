<template>
	<view class="list">
			<!-- <navigator url="../components/detail" class="list-url">
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
			</navigator> -->
			
			
			<navigator url="../components/detail" class="list-url" v-for="item in goodsList" :key="item.id">
				<image :src="item.image" mode="" class="list-img"></image>
				<text class="list-title">{{item.title}}</text>
				<view class="list-text-box">
					<text class="list-price">&#165; {{item.price}}</text>
					<text class="list-ysnum">已售 {{item.number}}件</text>
				</view>				
			</navigator>
			
	</view>
</template>

<script>

	import goodsList from '../static/data/goodsList.js'
	
	export default {
		data() {
			return {
				goodsList:goodsList.goodsListone
				}
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style>
	
</style>
