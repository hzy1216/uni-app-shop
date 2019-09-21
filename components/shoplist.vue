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
		
		<scroll-view scroll-y="true" style="height: 86%">
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
			<view class="loading-text">{{ loadingText }}</view>
		</scroll-view>
	
		
	</view>
</template>

<script>
	
	
	export default {
		data(){
			return{
				res:null,
				tabhead:null,
				tabtitle:false,
				faceValue: "0",
				oid:null,
				type:null,
				shoplist:null,
				shoptitle:null,
				headerPosition: 'fixed',
				headerTop:null,
				statusTop:null,
				nVueTitle:null,
				loadingText: '正在加载...'
			}
		},
		onShow(){
			uni.request({
				url: '../static/data/goodsList.json', //仅为示例，并非真实接口地址。
				method:'get',
				success: (res) => { 
					this.res = res.data ;
					if( res.data != ''){
						if( this.type == "one"){
							this.shoplist = res.data.goodsListone[this.oid - 1 ]
							this.shoptitle = res.data.goodtitle[0] 
							this.tabhead = '手机通讯'
							 
						}
						if( this.type == "two"){
							this.shoplist = res.data.goodsListtwo[this.oid - 1 ]
							this.shoptitle =res.data.goodtitle[1]
							this.tabhead = '礼品鲜花'
						
						}
						if( this.type == "three"){
							this.shoplist = res.data.goodsListthree[this.oid - 1 ]
							this.shoptitle = res.data.goodtitle[2]
							this.tabhead = '男装女装'
						
						}
						if( this.type == "four"){
							this.shoplist = res.data.goodsListfour[this.oid - 1 ]
							this.shoptitle =res.data.goodtitle[3]
							this.tabhead = '母婴用品'
						
						}
					}else{
						console.log('数据获取失败')
					}
				}
			});
		},
		onLoad(option) {
			console.log(option)
			this.oid = decodeURIComponent(option.id)
			this.type = decodeURIComponent(option.data);
			
			
			
			
			
		},
		methods:{
			getlist(){
				
			},
			 shoplistclick(){			 				
						uni.switchTab({
								url: '../pages/classify'
					});
			 },
			 shopdetail(id,option){
				 let data = JSON.stringify(option) 
				 let type = this.type ;
					let oid = this.oid ;
				 uni.navigateTo({
				 	url:`../components/detail?id=${id}&oid=${oid}&type=${type}&data=${encodeURIComponent(data)}`,
				 })
			 },
			 showtitle(){
				 this.tabtitle = true ;
			 },
			 tabclick(){
				 this.tabtitle = false ;

			 },
				tablistclick(myid){
				this.oid = myid ;
			
				this.tabtitle = false ;
				if( this.type == "one"){
					this.shoplist = this.res.goodsListone[myid - 1 ]
					
					
				}
				if( this.type == "two"){
					this.shoplist = this.res.goodsListtwo[myid - 1 ]
					
					

				}
				if( this.type == "three"){
					this.shoplist = this.res.goodsListthree[myid - 1 ]
					

				}
				if( this.type == "four"){
					this.shoplist = this.res.goodsListfour[myid - 1 ]
					
					

				}
			},
			clickTopUp:function(id){
        this.faceValue = id;
				}
		},
		mounted() {
			this.getlist();
		
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onPullDownRefresh() {
		    setTimeout(()=>{
				this.reload();
		        uni.stopPullDownRefresh();
		    },1000);
		},
		onReachBottom() {
			uni.showToast({ title: '触发上拉加载' });
			let len = this.shoplist.length;
			if (len >= 48) {
				this.loadingText = '到底了';
				return false;
			}
			// 演示,随机加入商品,生成环境请替换为ajax请求
			let end_goods_id = this.shoplist[len-1].goods_id;
			for (let i = 1; i <= 12; i++) {
				let goods_id = end_goods_id + i;
				let p = {
					goods_id: goods_id,
					image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
					image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
					image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
					title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
					price: "179",
					number: "61"
				};
				this.shoplist.push(p);
			}
			
		},
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
