<template>
	<view class="shoplist">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="shoplistclick()" >
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">商品列表</text>
		</view>
		
		<!-- tab切换 -->
		<view class="tab">
			<view class="tab-left">
				<text class="tab-left-title" @click="clickTopUp(0)" :class='{active:0 ==faceValue}'>综合排序</text>
				<text class="tab-left-title" @click="clickTopUp(1)" :class='{active:1 ==faceValue}'>销量优先</text>
				<view class="tab-left-title title-sx" @click="clickTopUp(2)" :class='{active:2==faceValue}'>
					<text>价格</text>
					<view class="tab-left-box">
						<image src="../static/images/shangjiantou.png" mode="" class="tab-left-title-img"></image>
					
						<image src="../static/images/xiajiantou.png" mode="" class="tab-left-title-img"></image>
					</view>
					
				</view>
			</view>
			<view class="tab-right" @click="showtitle()">
				<image src="../static/images/fenlei.png" mode="" class="tab-right-img"></image>
			</view>
		</view>
		
		<!-- 弹出的选项 -->
		<view class="tab-click" v-show="tabtitle" >
			<view class="tab-click-left" @click="tabclick()">
				
			</view>
			<scroll-view scroll-y class="tab-click-box">
				<view class="tab-click-box-nav">
					<view class="tab-click-title">
						<text>{{tabhead}}</text>
					</view>
					<view class="tab-click-two"  v-for="item in shoptitle" :key="item.id" @click="tablistclick(item.id)">
						<text>{{item.title}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		
		
		<!-- 商品列表 -->
		
		<scroll-view scroll-y="true" style="height: 85%">
			<view class="list">		
					<view  class="list-url" v-for="item in shoplist" :key="item.id" @click="shopdetail(item.id,item)">
						<image :src="item.image" mode="" class="list-img"></image>
						<text class="list-title">{{item.title}}</text>
						<view class="list-text-box">
							<text class="list-price">&#165; {{item.price}}</text>
							<text class="list-ysnum">已售 {{item.number}}件</text>
						</view>				
					</view>		
			</view>
		</scroll-view>
		
		
	</view>
</template>

<script>
	import listData from '../static/data/goodsList.js' 
	export default {
		data(){
			return{
				tabhead:null,
				tabtitle:false,
				faceValue: "0",
				id:null,
				type:null,
				shoplist:null,
				shoptitle:null
			}
		},
	
		onLoad(option) {
		
			const oid = decodeURIComponent(option.id)
			const item = decodeURIComponent(option.data);
			this.type = item;
			this.id = oid;
			if( this.type == "one"){
				this.shoplist = listData.goodsListone[this.id - 1 ]
				this.shoptitle = listData.goodtitle[0] 
				this.tabhead = '手机通讯'
				 
			}
			if( this.type == "two"){
				this.shoplist = listData.goodsListtwo[this.id - 1 ]
				this.shoptitle = listData.goodtitle[1]
				this.tabhead = '礼品鲜花'

			}
			if( this.type == "three"){
				this.shoplist = listData.goodsListthree[this.id - 1 ]
				this.shoptitle = listData.goodtitle[2]
				this.tabhead = '男装女装'

			}
			if( this.type == "four"){
				this.shoplist = listData.goodsListfour[this.id - 1 ]
				this.shoptitle = listData.goodtitle[3]
				this.tabhead = '母婴用品'

			}
			
			
		},
		methods:{
			 shoplistclick(){			 				
						uni.switchTab({
								url: '../pages/classify'
					});
			 },
			 shopdetail(id,option){
				 let data = JSON.stringify(option) 
				 uni.navigateTo({
				 	url:`../components/detail?id=${id}&data=${encodeURIComponent(data)}`,
				 })
			 },
			 showtitle(){
				 this.tabtitle = true ;
			 },
			 tabclick(){
				 this.tabtitle = false ;

			 },
			tablistclick(oid){
			
				this.tabtitle = false ;
				if( this.type == "one"){
					this.shoplist = listData.goodsListone[oid - 1 ]
					this.shoptitle = listData.goodtitle[0] 
					this.tabhead = '手机通讯'
					 
				}
				if( this.type == "two"){
					this.shoplist = listData.goodsListtwo[oid - 1 ]
					this.shoptitle = listData.goodtitle[1]
					this.tabhead = '礼品鲜花'
				
				}
				if( this.type == "three"){
					this.shoplist = listData.goodsListthree[oid - 1 ]
					this.shoptitle = listData.goodtitle[2]
					this.tabhead = '男装女装'
				
				}
				if( this.type == "four"){
					this.shoplist = listData.goodsListfour[oid - 1 ]
					this.shoptitle = listData.goodtitle[3]
					this.tabhead = '母婴用品'
				
				}
			},
			clickTopUp:function(id){
        this.faceValue = id;
      }
		}
	}
</script>

<style>
	.shoplist{
		width: 100%;
		height: 100%;
		
	}
	
	.tab{
		width: 100%;
		height: 90upx;
		display: flex;
		border-bottom: 2px #EBEBEB solid;
		box-sizing: border-box;
	}
		.tab-left{
			width: 85%;
			height: 90upx;
			display: flex;
			padding-left: 4%;
			box-sizing: border-box;
			justify-content: space-around;
			align-items: center;
			
		}
			.tab-left-title{
				width:32%;
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				font-size: 30upx;
				color: #c8536e;
				font-weight: 600;
				box-sizing: border-box;
				
			}
			.title-sx{
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.active{
				border-bottom: 2px #fd5085 solid;
			}
			.tab-left-box{
				width: 30upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-left: 10upx;
			}
			.tab-left-title-img{
				width: 30upx;
				height: 30upx;
			}
		.tab-right{
			width: 15%;
			height: 90upx;
			display: flex;
			align-items: center;
			justify-content: center;
			
		}
			.tab-right-img{
				width: 50upx;
				height: 50upx;
			}
		
		/* 列表 */
		.list{
			margin-bottom: 0;
		}
		
		/* 弹出的选框	 */
		.tab-click{
			width: 100%;
			height: 100%;
			position: fixed;
			right: 0;
			top: 90upx;
			background-color: rgba(153,153,153,0.5);
			z-index: 5;
		}
				.tab-click-left{
					width: 30%;
					height: 100%;
					float: left;
				}
				.tab-click-box{
					width: 70%;
					height: 100%;
					background-color: #FFFFFF;
					float: right;
				}
					.tab-click-box-nav{
						width: 100%;
						height: 100%;
					}
					.tab-click-title{
						width: 100%;
						height: 80upx;
						line-height:80upx;
						padding-left: 15upx;
						font-size: 32upx;
						background-color: #f8f8f8;
						border-bottom: 1px #CCCCCC solid;
					}
					.tab-click-two{
						width: 100%;
						height: 80upx;
						line-height: 80upx;
						padding-left: 15upx;
						font-size: 32upx;
						background-color: #FFFFFF;
						border-bottom: 1px #CCCCCC solid;
						color: #6a6a6a;
					}
</style>
