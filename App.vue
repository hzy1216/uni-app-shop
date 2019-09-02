
<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	
};
</script>

<style>
/*每个页面公共css */ 
	uni-page-body{
			height: 100%;
			width: 100%;
		}
		/* 头部 */
		.setting-top{
			width: 100%;
			height: 90upx;
			background-color: #FFFFFF;
			border-bottom: 1px #f9f9f9 solid;
			
		}
			.setting-top-url{
				width: 40upx;
				height: 40upx;
				margin-top: 25upx;
				margin-left: 15upx;
				float: left;
			}
			.setting-top-img{
				width: 40upx;
				height: 40upx;
			
			}
			.setting-top-title{
				font-size: 32upx;
				font-weight: 700;
				color: #000000;
				/* width: 15%; */
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				float: right;
				/* margin-right: 40%; */
			}
		
		/* 列表 */
		.list{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 60upx;
			
		}
			.list-url{
				width:320upx;

				height: 440upx;
				margin-left: 36upx;
				display: flex;
				margin-top: 50upx;
				flex-direction: column;
			
				background-color: #FFFFFF;
			}
				.list-img{
					width: 100%;
					height: 340upx;
				}
					.list-title{
						width: 100%;
						height: 80upx;
						overflow: hidden; 
						display: block; 
						text-overflow: ellipsis;
						white-space: nowrap;
						cursor: pointer;
						line-height: 80upx;
						font-size: 34upx;
					}
					.list-text-box{
						display: flex;
						justify-content: space-between;
						align-items: center;
							height: 50upx;
							width: 100%;
					}
					.list-price{
						
						font-size: 30upx;
					}
					.list-ysnum{
					
						font-size: 24upx;
						
					}
	
</style>
