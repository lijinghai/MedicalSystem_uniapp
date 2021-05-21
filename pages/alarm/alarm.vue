<template>
	<view class="box">
		<view class="tit">欢迎登录</view>
		<view class="ul">
			<view class="li">
				<text class="title">+86</text>
				<image class="xiala" src="/static/login/xiala.png"></image>
				<view class="shu"></view>
				<input v-model.trim="phone" maxlength="11" placeholder-style="color: #AFAFB8" class="pr" type="number" placeholder="请输入手机号" />
			</view>
			<view class="li">
				<input v-model.trim="password" maxlength="24" placeholder-style="color: #AFAFB8" class="pr" type="text" placeholder="请输入密码" :password="pwd_show" />
				<image class="xs" src="../../static/login/biy@2x.png" v-if="pwd_show" @click="pwd_show = !pwd_show"></image>
				<image class="yc" src="../../static/login/zyan@2x.png" v-else @click="pwd_show = !pwd_show"></image>
			</view>
		</view>
		<view class="btn_login" :class="phone.length == 11 && password ? 'btn2' : ''" @click="login">登录</view>
		<view class="select_login">
			<view @click="navigateBack()">验证码登录</view>
			<view @click="openUrl('/pages/login/forget')">忘记密码？</view>
		</view>
		<view class="des">
			登录表示您已阅读并同意
			<text class="text2" @click="openUrl('/pages/html/html?key=user_agreement&title=Uplay用户协议')">《用户协议》</text>
			、
			<text class="text2" @click="openUrl('/pages/html/html?key=privacy_policy&title=用户隐私协议')">《用户隐私协议》</text>
		</view>
	</view>
</template>
 
<script>
// import { loginByPassword } from '../../common/apis.js';
export default {
	data() {
		return {
			phone: '',
			password: '',
			pwd_show: true
		};
	},
	methods: {
		//登录
		login() {
			const { phone, password } = this;
			if (phone == '') {
				uni.showToast({
					title: '请输入手机号',
					icon: 'none'
				});
				return;
			}
			if (password == '') {
				uni.showToast({
					icon: 'none'
				});
				return;
			}
			loginByPassword({
				phone,
				password
			}).then(res => {
				this.toast('登录成功，即将前往首页');
				this.saveUser(res.data);
				this.saveToken(res.data.token);
				setTimeout(() => {
					uni.switchTab({ url: '/pages/home/index/index' });
				}, 2000);
			});
		}
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