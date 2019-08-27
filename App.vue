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
		
		
	
</style>
