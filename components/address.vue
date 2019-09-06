<template>
	<view class="address">
		<view class="setting-top">
			<view class="setting-top-url"  @click="settclick()">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</view>
			
			<text class="setting-top-title" style="margin-right: 40%;">收货地址</text>
		</view>
		<scroll-view scroll-y class="address-list">
			<view class="address-box" v-for="item in address" :key="item.id">
				<view class="address-box-left">
					<view class="address-title-top">
						<text class="address-mr" v-show="moren">默认</text>
						<text class="address-add">{{item.address}}{{item.floor}}</text>
					</view>
					<view class="address-title-bott">
						<text class="address-name">{{item.name}}</text>
						<text class="address-num">{{item.number}}</text>
					</view>
				</view>
				<view class="address-right" @click="toadd('edit',item)">
					<image src="../static/images/xiugai.png" mode="" class="address-right-img"></image>
				</view>
			</view>
		</scroll-view>
		<view class="address-butt" @click="toadd('add')">
			<text>新增地址</text>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		 data() {
      return {
        address:[],
				moren:false,
				
      }
    },
		onLoad(option) {
			
			let lodata = option.data
			console.log(option.data)
			
		},
		components:{
			
		},
		methods:{
			settclick(){
				uni.switchTab({
					url:'../pages/user'
				})
			},
			toadd(type,option){
				let data = JSON.stringify(option) 
				uni.navigateTo({
					url:`../components/add?type=${type}&data=${encodeURIComponent(data)}`,
				})
			},
			getaddress(){
				uni.request({
					url: '../static/data/address.json', //仅为示例，并非真实接口地址。
					method:'get',
					success: (res) => {
							if( res.data!= ''){
							this.address = res.data
								
							}else{
								console.log('数据获取失败')
							}
							
					}
				});
			},
		},
		mounted() {
			this.getaddress();
			
		}
	
	}
</script>

<style>
	
	.address{
		width: 100%;
		height: 100%;
	}
	/* 地址列表 */
	.address-list{
		width: 100%;
		height:93%;
	}
		.address-box{
			width: 100%;
			/* min-height: 120upx; */
			padding-left: 40upx;
			box-sizing: border-box;
			border-bottom: 1px #f4f4f4 solid;
			display: flex;
			
		}
		.address-box:nth-last-child(1){
			margin-bottom: 160upx;
		}	
			.address-right{
				flex: 1;
				box-sizing: border-box;
				text-align: center;
				background-color: rgba(255,255,255,0.1);
				position: relative;
			}
					.address-right-img{
						width: 30upx;
						height: 30upx;
						position: absolute;
						top: 40%;
						right: 35%;
					}
			.address-box-left{
				flex: 8;
				margin: 14upx 0;
			}
				.address-mr{
					font-size: 24upx;
					width: 60upx;
					height: 40upx;
					line-height: 40upx;
					text-align: center;
					border: 1px solid #e1d8db;
					color: #c26985;
					float: left;
					margin-top: 10upx;
					margin-right: 30upx;
				}
				.address-add{
					width: 80%;
					color: #232323;
					font-size: 32upx;
				}
				
		.address-title-bott{
			height: 80upx;
			line-height: 80upx;
			color: #848389;
			font-size: 28upx;
		}
			.address-name{
				
				margin-right:60upx;
			}
		
		
	/* 按钮 */
		.address-butt{
			width: 90%;
			height: 90upx;
			background-color: #f9436b;
			color: #FFFFFF;
			font-size: 32upx;
			line-height: 90upx;
			text-align: center;
			
			border-radius: 14upx;
			left: 5%;
			position: fixed;
			bottom: 30upx;
		}	
		
</style>
