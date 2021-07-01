<!-- 登录
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view class="box">
		<view class="tit">欢迎登录</view>
		<view class="ul">
			<view class="li">
				<text class="title">+86</text>
				<image class="xiala" src=""></image>
				<view class="shu"></view>
				<input v-model="user.account" maxlength="11" placeholder-style="color: #AFAFB8" class="pr" type="number"
					placeholder="请输入账号" />
			</view>
			<view class="li">
				<input v-model="user.password" maxlength="24" placeholder-style="color: #AFAFB8" class="pr" type="text"
					placeholder="请输入密码" :password="pwd_show" />
				<image class="xs" src="" v-if="pwd_show" @click="pwd_show = !pwd_show">
				</image>
				<image class="yc" src="" v-else @click="pwd_show = !pwd_show"></image>
			</view>
		</view>
		<view class="btn_login" :class="user.account.length == 11 && password ? 'btn2' : 'btn2'" @click="login">登录
		</view>
		<view class="select_login">
			<view @click="register">用户注册</view>
			<view @click="forget">忘记密码？</view>
		</view>
		<view class="des">
			登录表示您已阅读并同意
			<text class="text2" @click="ageree">《用户协议》</text>
			、
			<text class="text2" @click="hideAgree">《用户隐私协议》</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					account: '',
					password: ''
				},
				pwd_show: true
			};
		},
		methods: {
			
			//登录事件
			login() {
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")
				// 登录跳转
				
				this.$myRequest({
					url: '/uniappuser/login',
					method: 'POST',
					data: _this.user, // 发送的数据
				
				}).then(res => {
					console.log(res)
					// success({ // 请求成功
					// 	data
					// })
					if (res.data.code == 20000) { // 获取数据成功
						console.log("成功")
						uni.setStorageSync('token', res.data.token); // 将登录信息以token的方式存在手机硬盘中
						uni.switchTab({
							url: '../index/index'
						})
						// uni.showModal({
						// 	title: '登录成功！！'
						// })
					} else { // 获取数据失败
						console.log("失败")
						uni.showModal({
							title: '账号或密码错误，请重新输入！！'
						})
					}
				})
				
				
				
				
			// 	uni.request({
			// 		// 路径
			// 		url: 'http://localhost:8091/uniappuser/login',
			// 		// 请求方法
			// 		method: 'POST',
			// 		data: _this.user, // 发送的数据
			// 		success({ // 请求成功
			// 			data
			// 		}) {
			// 			if (data.code == 20000) { // 获取数据成功
			// 				uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
			// 				// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
			// 				uni.switchTab({ // 跳转到首页
			// 					url: '../index/index'
			// 				})
			// 			} else { // 获取数据失败
			// 				console.log("失败")
			// 				uni.showModal({
			// 					title: '账号或密码错误，请重新输入！！'
			// 				})
			// 			}
			// 		},
			// 		fail: (res) => {
			// 			console.log("错误")
			// 		}
				// })
			},
			
			//用户注册页面
			register(){
				// 跳转到注册页面
				uni.navigateTo({ 
					url: '../register/register'
				})
			},
			
			//忘记密码页面
			forget(){
				// 跳转到忘记密码页面
				uni.navigateTo({ 
					url: '../forget/forget'
				})
			},
			
			//用户协议
			ageree(){
				// 跳转到用户协议
				uni.navigateTo({
					url: '../agree/agree'
				})
			},
			
			//用户协议
			hideAgree(){
				// 跳转到用户隐私协议
				uni.navigateTo({
					url: '../hideAgree/hideAgree'
				})
			},
			
		}
	};
</script>

<style lang="less">
	.box {
		width: 100vw;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 0 80rpx;
		box-sizing: border-box;

		.tit {
			width: 100%;
			font-size: 50rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			margin-top: 40rpx;
			margin-bottom: 124rpx;
		}

		.ul {
			width: 100%;
			display: flex;
			flex-direction: column;

			.li {
				margin-bottom: 30rpx;
				display: flex;
				align-items: center;
				width: 100%;
				height: 80rpx;
				border-bottom: 2rpx solid #eeeeee;

				.title {
					height: 40rpx;
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 40rpx;
				}

				.xiala {
					width: 12rpx;
					height: 6rpx;
					margin-left: 5rpx;
				}

				.shu {
					width: 2rpx;
					height: 52rpx;
					margin-left: 36rpx;
					background: #3790ff;
					margin-right: 20rpx;
				}

				.pr {
					flex: 1;
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 40rpx;
				}

				.img {
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #3790ff;
					line-height: 40rpx;
				}

				.remove {
					width: 38rpx;
					height: 38rpx;
				}

				.yc {
					width: 48rpx;
					height: 30rpx;
				}

				.xs {
					width: 48rpx;
					height: 22rpx;
				}
			}
		}

		.btn_login {
			margin-top: 88rpx;
			margin-bottom: 32rpx;
			width: 590rpx;
			height: 120rpx;
			background: #d7e9ff;
			border-radius: 60rpx;
			font-size: 36rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #ffffff;
			text-align: center;
			line-height: 120rpx;
		}

		.btn2 {
			background-color: #3790ff !important;
		}

		.select_login {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #9395a2;
		}

		.des {
			position: absolute;
			bottom: 40rpx;
			width: 648rpx;
			font-size: 24rpx;
			margin-bottom: 40rpx;
			margin-top: 70rpx;
			text-align: center;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #afafb8;
			line-height: 40rpx;

			.text1 {
				margin-left: 10rpx;
				color: #333333 !important;
			}

			.text2 {
				color: #3790ff !important;
			}
		}
	}
</style>
