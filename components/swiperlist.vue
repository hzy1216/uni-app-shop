<template>
	 <swiper class="swiperlist"  display-multiple-items="4">
					<swiper-item>
						<navigator url="" class="swiper-list-a">
							<image src="../static/images/temp/cate15.jpg" mode="" class="swiper-list-img"></image>
							<text class="swiper-list-text">中间件啊看挖到</text>
							<text class="swiper-list-price">&#165;20</text>
						</navigator>						
					</swiper-item>
					<swiper-item>
						<navigator url=""  class="swiper-list-a"> 
							<image src="../static/images/temp/cate13.jpg" mode="" class="swiper-list-img"></image>
							<text class="swiper-list-text">中间件啊看挖到</text>
							<text class="swiper-list-price">&#165;20</text>
						</navigator>					
					</swiper-item>
					<swiper-item>
						<navigator url=""  class="swiper-list-a">
							<image src="../static/images/temp/cate1.jpg" mode="" class="swiper-list-img"></image>
							<text class="swiper-list-text">中间件啊看挖到</text>
							<text class="swiper-list-price">&#165;20</text>
						</navigator>						
					</swiper-item>
					<swiper-item>
							<navigator url=""  class="swiper-list-a">
								<image src="../static/images/temp/cate16.jpg" mode="" class="swiper-list-img"></image>
								<text class="swiper-list-text">中间件啊看挖到</text>
								<text class="swiper-list-price">&#165;20</text>
							</navigator>					
					</swiper-item>	
					<swiper-item>
							<navigator url=""  class="swiper-list-a">
								<image src="../static/images/temp/cate10.jpg" mode="" class="swiper-list-img"></image>
								<text class="swiper-list-text">中间件啊看挖到</text>
								<text class="swiper-list-price">&#165;20</text>
							</navigator>					
					</swiper-item>	
					<swiper-item>
							<navigator url=""  class="swiper-list-a">
								<image src="../static/images/temp/cate18.jpg" mode="" class="swiper-list-img"></image>
								<text class="swiper-list-text">中间件啊看挖到</text>
								<text class="swiper-list-price">&#165;20</text>
							</navigator>					
					</swiper-item>	
	 </swiper>
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
	.swiper-list{
		width: 100%;
		height: 310upx;
		
	}
		.swiper-list-a{
			width: 140upx;
			height: 310upx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 24upx;
			margin-left:40upx ;
			background-color: #FFFFFF;
		}
			.swiper-list-a:nth-last-child(1){
				margin-right: 40upx;
			}
		.swiper-list-img{
			width: 180upx;
			height:180upx;
			
		}
			.swiper-list-text{
				overflow: hidden; 
				display: block; 
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
				width: 140upx;
				height: 40upx;
				line-height: 40upx;
			}
				.swiper-list-price{
					width: 140upx;
					height: 40upx;
					line-height: 40upx;
				}
</style>
