<template>
	<view class="address">
		<view class="setting-top">
			<view class="setting-top-url" @click="backaddress()">
				<image src="../static/images/iconfontjiantou1.png" mode="" class="setting-top-img" ></image>
			</view>
			
			<text class="setting-top-title" style="margin-right: 35%;">{{addtitle}}</text>
		</view>
		
		<!-- 表单 -->
		<form  class="add">
			<view class="add-input">
				<text class="add-input-name">联系人</text>
				<input type="text" v-model="addlist.name" placeholder="收货人姓名" class="add-input-text"/>
			</view>
			<view class="add-input">
				<text class="add-input-name">手机号</text>
				<input type="number" v-model="addlist.number" placeholder="收货人手机号码"  maxlength="11"   class="add-input-text"/>
			</view>
			<view class="add-input">
				<text class="add-input-name">收货地址</text>
				<input type="text" v-model="addlist.address" placeholder="收货地址" class="add-input-text"/>
			</view>
			<view class="add-input">
				<text class="add-input-name">门牌号</text>
				<input type="text" v-model="addlist.floor" placeholder="楼号,门牌" class="add-input-text"/>
			</view>
			<view class="add-swith">
				<text class="add-input-name">设为默认</text>
				<switch  color= "#f9436b" class="add-sw"/>
			</view>
			<view class="add-sub">
				<button type="submit" class="add-sub" @click="confirm()">提交</button>
				<text class="add-sub-title"   v-show="subtitle">{{msg}}</text>
			</view>
		</form>
	</view>
</template>

<script>
import main from '../main.js'
	export default {
		data() {
			return {
				addlist:{
					name: '',
					number: '',
					address:'',
					floor:''
					
				},
				msg:'',
				toaddlist:null,
				addtitle:null,
				subtitle:false,
				manageType:''
			};
		},
		onLoad(option) {
			this.addtitle = '新增收货地址';
			if(option.type==='edit'){
				this.addtitle = '修改收货地址'
				
				this.addlist = JSON.parse(option.data)
				
			}
			this.manageType = option.type;
			console.log(this.manageType)
		},
		methods:{
			backaddress(){
				uni.navigateTo({
					url:'address'
				})
			},
			confirm(){
				let option = this.addlist;
				
				if(option.name == ''){
					this.msg='请填写收货人姓名';
					this.subtitle = true ;
					setTimeout(()=>{
						this.subtitle = false
					},1000)
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(option.number)){
					this.msg='请输入正确的手机号码';

					this.subtitle = true ;
					setTimeout(()=>{
						this.subtitle = false
					},1000)
				}
				if(option.address==''){
					this.msg='请选择所在位置';
	
					this.subtitle = true ;
					setTimeout(()=>{
						this.subtitle = false
					},1000)

				}
				if(option.floor==''){
					this.msg='请填写门牌号信息';

					this.subtitle = true ;
					setTimeout(()=>{
						this.subtitle = false
					},1000)

				}
				if(option.name != '' && option.number !='' && option.address !='' && option.floor !=''){
				
					if(this.manageType == 'edit'){
						uni.setStorage({
							key:'address',
							data:option,
							success() {
								uni.showToast({title: "已提交"})	
								
							}
						})
						uni.navigateTo({
							url:'../components/address'
						})
					}
					if(this.manageType == 'add'){
						uni.setStorage({
							key:'add',
							data:option,
							success() {
								uni.showToast({title: "已提交"})	
								
							}
						})
						uni.navigateTo({
							url:'../components/address'
						})
					}	
					
				}
				
			}
			
		},
		mounted() {
			
		}
	}
</script>

<style>
	/* 表单 */
		.add{
			margin-top: 16upx;
			width: 100%;
		}
			.add-input{
				width: 100%;
				height: 100upx;
				padding-left:40upx;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				border-bottom: 1px #f4f4f4 solid;
				position: relative;
			}
				.add-input-name{
					color: #2c2c2c;
					font-size: 32upx;
					width: 20%;
					
				}
				.add-input-text{
					width: 80%;
					padding-left: 30upx;
					padding-right: 20upx;
					box-sizing: border-box;
					font-size: 28upx;
					color: #2c2c2c;
				}
				.add-swith{
					width: 100%;
					height: 100upx;
					padding-left:40upx;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					border-bottom: 1px #f4f4f4 solid;
					justify-content: space-between;
				}
			.add-sub{
				width: 90%;
				height: 90upx;
				background-color: #f9436b;
				color: #FFFFFF;
				font-size: 32upx;
				line-height: 90upx;
				text-align: center;
				margin-top: 60upx;
				border-radius: 14upx;
				margin-left: 5%;
				position: relative;
			}
				.add-sub-title{
					padding:12upx 30upx;
					height: 60upx;
					background-color: #707070;
					color: #FFFFFF;
					position: absolute;
					z-index: 6;
					line-height: 60upx;
					top: -100upx;
					font-size: 28upx;
					left: 30%;
					
					border-radius: 12upx;
				}
			.add-sw{
				margin-right: 40upx;
			}
</style>
