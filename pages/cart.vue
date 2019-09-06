<template>
	<view class="cart">
		<view class="setting-top">
			<navigator class="setting-top-url"  @click="cartclick()"  open-type="navigateBack">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</navigator>
			<text class="setting-top-title" style="margin-right:40%;">购物车</text>
		</view>
		
		<scroll-view scroll-y class="mycart" >
			<view class="cart-title" v-show="carttitle" >
				<text class="cart-title-l">空空如也</text>
				<navigator url="classify" open-type="switchTab" class="cart-title-url">去添加</navigator>
			</view>
			<!-- 要结算的商品 -->
			<view class="mycart-list" v-for="(item,index) in cart" :key="index">
				<view class="mycart-list-xzq-l">
					<image src="../static/images/select.png" mode="" class="mycart-list-xzq-img-l" @click="imgone(index)" ></image>
					<image src="../static/images/selected.png" mode="" class="mycart-list-xzq-img-t"  @click="imgtwo(index)"></image>
				</view>		
				<view class="mycart-list-box" >
					<image :src="item.image" mode="" class="mycart-list-box-img" @click="tdcart(index,item)"></image>
					<view class="mycart-list-title">
						<view @click="tdcart(index,item)">
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
		<view class="settle" v-show="settle">
			<view class="mycart-list-xzq">
				<image src="../static/images/select.png" mode="" class="sett-list-xzq-img" @click="imglist()" v-show="imageone"></image>
				<image src="../static/images/selected.png" mode="" class="sett-list-xzq-img" @click="imglst()" v-show="imagetwo"></image>
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
	// import {
	//     mapState
	// } from 'vuex'
	
	export default{
		
		data(){
			return{
				cart:[
					
				],
				cartlist:{
					
				},
				settle:null,
				yhsum:(Math.random(100)*100).toFixed(2),
				carttitle:false,
				imageone:false,
				imagetwo:true,
			}
		},
		// computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad(option) {
			
			
			
			
			
			
			
			// if (!this.hasLogin) {
			//     uni.showModal({
			//         title: '未登录',
			//         content: '您未登录，需要登录后才能继续',
			//         /**
			//          * 如果需要强制登录，不显示取消按钮
			//          */
			//         showCancel: !this.forcedLogin,
			//         success: (res) => {
			//             if (res.confirm) {
			// 	/**
			// 	 * 如果需要强制登录，使用reLaunch方式
			// 	 */
			//                 if (this.forcedLogin) {
			//                     uni.reLaunch({
			//                         url: '../pages/login'
			//                     });
			//                 } else {
			//                     uni.navigateTo({
			//                         url: '../pages/login'
			//                     });
			//                 }
			//             }
			//         }
			//     });
			// }
			// 控制有无数据时出现提示语
		
			
		},
		
		methods:{
			getcart(){
				
				var that = this
				uni.getStorage({
						key: 'cart',
						success: function (res) {
							console.log(res.data)
							if( res.data == ''||typeof res.data == "undefined" || res.data == null ){
								that.cart = null;
								uni.showToast({title: "请去添加商品"})
							}else{
								let p = {
								"num":"1",
								"image": res.data.image,
								"image2":res.data.image2,
								"image3":res.data.image3,
								"title":res.data.title,
								"number":res.data.number,
								"price":res.data.price,
								}
								that.settle = true ;
								that.cart.push(p)
						
								
									
							}
							
								
									
						}
				});
				if( this.cart.length == 0){
					this.carttitle = true ;
					this.settle = false ;
				}else{
					this.carttitle = false ;
					this.settle = true ;
				}
				
				
			},
			
			imgone(id){
					var oimgs = document.querySelectorAll('.mycart-list-xzq-img-l')
					var timgs = document.querySelectorAll('.mycart-list-xzq-img-t')
				
				
					oimgs[id].style.display = 'none' ;
					timgs[id].style.display = 'block' ;
					
					for( var i = 0 ; i < oimgs.length ; i++){
						for( var j= 0 ; j< timgs.length ; j ++ ){
							if(oimgs[i].style.display != 'block' && timgs[j].style.display != 'none'){
								
								this.imageone =false ;
								this.imagetwo = true;
								
							}else{
								this.imageone =true ;
								this.imagetwo = false;
							}
						}
						
					}
					
					
					
			},
			imgtwo(oid){
					
					var oimg = document.querySelectorAll('.mycart-list-xzq-img-l')
					var timg = document.querySelectorAll('.mycart-list-xzq-img-t')
					
					oimg[oid].style.display = 'block' ;
					timg[oid].style.display = 'none' ;
					
					for( var i = 0 ; i < timg.length ; i++){
						for( var j = 0 ; j<oimg.length ; j ++){
							if(timg[i].style.display != 'block' && oimg[j].style.display != 'none'){
								this.imageone = true ;
								this.imagetwo = false ;
							}
						}
						
					}
					
			},
			imglist(){
				this.imageone = false ;
				this.imagetwo=true ;
				var oimg = document.querySelectorAll('.mycart-list-xzq-img-l')
				var timg = document.querySelectorAll('.mycart-list-xzq-img-t')
				for( var i = 0 ; i < oimg.length ; i++){
						oimg[i].style.display = 'none' ;
				}
				for( var j = 0 ; j < timg.length ; j++){
						timg[j].style.display = 'block' ;
				}
				
			},
			imglst(){
				this.imageone = true ;
				this.imagetwo = false ;
				var oimg = document.querySelectorAll('.mycart-list-xzq-img-l')
				var timg = document.querySelectorAll('.mycart-list-xzq-img-t')
				console.log(oimg)
				for( var i = 0 ; i < oimg.length ; i++){
						oimg[i].style.display = 'block' ;
				}
				for( var j = 0 ; j < timg.length ; j++){
						timg[j].style.display = 'none' ;
				}
				// oimg.style.display = 'block' ;
				// timg.style.display = 'none' ;
		
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
				return result>0?result :result = 0;
			}
		},
		mounted() {
			this.getcart()
			this.imgone()
		
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
		/* 没有数据时显示的 */
		.cart-title{
			width: 100%;
			height: 40%;
			margin-top: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			
			
		}
			.cart-title-l {
				color: #555555;
				font-size: 42upx;
				margin-bottom: 30upx;
				
			}
			.cart-title-url{
				color: #FD6E15;
				font-size: 36upx;
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
				.sett-list-xzq-img{
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
			.mycart-list-xzq-img-t{
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
