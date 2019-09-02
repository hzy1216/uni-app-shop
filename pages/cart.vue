<template>
	<view class="cart">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="cartclick()"  open-type="navigateBack">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">购物车</text>
		</view>
		
		<scroll-view scroll-y class="mycart">
			<!-- 要结算的商品 -->
			<view class="mycart-list" v-for="(item,index) in cart" :key="item.id">
				<view class="mycart-list-xzq-l">
					<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l" v-show="imgone" @click="imageone(index)"></image>
					<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-l" v-show="imgtwo"  @click="imagetwo(index)"></image>
				</view>		
				<view class="mycart-list-box" >
					<image :src="item.image" mode="" class="mycart-list-box-img" @click="tdcart(item.id,item)"></image>
					<view class="mycart-list-title">
						<view @click="tdcart(item.id,item)">
							<text class="mycart-list-title-top">{{item.title}}{{item.title}}</text>
							<text class="mycart-list-title-bott">{{item.title}}</text>
							<text class="mycart-list-title-price">&#165; {{item.price}}</text>
						</view>
						
						<view style="display: flex;flex-direction: row;" class="cartcontrol">
							<view class="cont" @click="reduce(item)">
								<image src="../static//images/des.png" mode="" style="width: 20px;height: 20px;"></image>
							</view>
							<text style="padding: 0 4px;" class="cartcontrol-text">{{item.num}}</text>
							<view class="cont" @click="addplus(item)">
								<image src="../static/images/add2.png" style="width: 20px;height: 20px;color: #CCCCCC;" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<view class="mycart-list-xx-box" @click="del(index)">
					<image src="../static/images/cc.png" mode="" class="mycart-list-xx"></image>
				</view>
						
			</view>	
		
			
		</scroll-view>
		
			<!-- 结算 -->
		<view class="settle">
			<view class="mycart-list-xzq">
				<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img" @click="oneimg()" v-show="imgt"></image>
				<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img" v-show="imgl" @click="twoimg()"></image>
			</view>
			<view class="settle-bott">
				<view class="settle-box">
					<text class="settle-bott-title">&#165; {{(getsum).toFixed(2)}}</text>
					<text class="settle-bott-title">已优惠 {{yhsum}}</text>
				</view>			
				<navigator url="" class="settle-a">去结算</navigator>
			</view>
		</view>
	
	</view>
</template>

<script>
	import cartData from '../static/data/cart.js'
	export default{
		data(){
			return{
				cart:cartData.cart,
				
				imgone:true,
				imgtwo:false,
				imgt:true,
				imgl:false,
				yhsum:(Math.random(100)*100).toFixed(2)
			}
		},
		onLoad(option) {
			console.log(option)
			// const item = JSON.stringify(decodeURIComponent(option.data));
			// this.cart = item;
			// console.log(item)
		},
		methods:{
			imageone(index){
				
				this.imgone = false ;
				this.imgtwo = true;
			},
			imagetwo(index){
				
				this.imgone = true ;
				this.imgtwo = false;
			},
			oneimg(){
				this.imgone = false ;
				this.imgtwo = true  ;
				this.imgt=false ;
				this.imgl=true ;
			},
			twoimg(){
				this.imgtwo = false ;
				this.imgone = true  ;
				this.imgl=false ;
				this.imgt=true ;
			},
			cartclick(){
				uni.navigateBack({
					delta:1
				})
			},
			addplus(option){
				option.num ++
			},
			reduce(option){
				if( option.num > 1 ){
					option.num--
				}else{
					option.num = 1 ;
				}
			},
			del(index){
				this.cart.splice(index,1)
			},
			tdcart(id,option){
				let data = JSON.stringify(option) 
				uni.navigateTo({
					url:`../components/detail?id=${id}&data=${encodeURIComponent(data)}`,
				})
			}
		},
		computed:{
			
			getsum(){
			
				let result = 0 ;
				this.cart.forEach((item)=>{
					
					result+=item.price*item.num - this.yhsum;
					
				});
				return result;
			}
				
				
			
		}
		
	}
</script>

<style>
	
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
		/* 控制加减 */
		.cartcontrol{
			width: 100%;
			height: 120upx;
			display: flex;
		
			align-items: center;
		}
			.cont {
				width: 60upx;
				height: 60upx;
				line-height: 60upx;
				box-sizing: border-box;
				border-radius: 50%;
				text-align: center;
			}
				.cartcontrol-text{
					width: 60upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					color: #000000;
					font-size: 30upx;
				}
		
		/* 物品列表 */
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
		.mycart-list:nth-last-child(1){
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
				width: 40upx;
				height: 40upx;
				position: absolute;
			}
			.mycart-list-box{
				width: 80%;
				height: 300upx;
				margin-top: 20upx;
				display: flex;
			}
				.mycart-list-box-img{
					width: 45%;
					height: 260upx;
					margin-right: 5%;
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
					
			.mycart-list-xx-box{
				width: 40upx;
				height: 40upx;
				margin-top: 40upx;
				margin-left: 10upx;
			}
					
			.mycart-list-xx{
				width: 40upx;
				height: 40upx;
				/* margin-top: 40upx;
				margin-left: 10upx; */
			}
</style>
