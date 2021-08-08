<!-- 登录页面 v2 版本
  @author: lijing
  @email: lijinghailjh@163.com
  @Date: 2021 7 30
-->
<template>
	<view>

		<!-- 导航栏 -->
		<cu-custom bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">登录</block>
		</cu-custom>


		<!-- 收藏小提示 -->
		<!-- #ifdef MP-WEIXIN -->
		<add-tip :tip="tip" :duration="duration" />
		<!-- #endif -->

		<!--主体-->
		<view class="zai-box">
			<scroll-view scroll-y class="page">
				<!-- 头像和文字部分 -->
				<view class="text-center" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<image src="https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/custom/tuxiang.jpg" mode='aspectFit'
						class="zai-logo "></image>
					<view class="zai-title text-shadow ">医 依</view>

					<!-- 欢迎登录 -->
					<view class="cu-bar ">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">欢迎登录</text>
							<text class="text-ABC text-blue">SignIn</text>
						</view>
					</view>
				</view>

				<!-- 输入框位置 -->
				<!-- 账号密码输入 -->
				<view class="box padding-lr-xl login-paddingtop" :style="[{animation: 'show ' + 0.6+ 's 1'}]">
					<block v-if="loginWay==1">

						<!-- 账号输入框 -->
						<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
							<view class="title"><text class="cuIcon-people margin-right-xs"></text>账号:</view>
							<input placeholder="请输入账号" name="input" v-model="user.account"></input>
						</view>

						<!-- 密码输入框 -->
						<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
							<view class="title"><text class="cuIcon-lock margin-right-xs"></text>密码:</view>
							<input class="uni-input" placeholder="请输入密码" :password="!showPassword"
								v-model="user.password" />
							<view class="action text-lg">
								<text :class="[showPassword ? 'cuIcon-attention' : 'cuIcon-attentionforbid']"
									@click="changePassword"></text>
							</view>
						</view>

						<!-- 登录按钮 -->
						<view class="padding text-center margin-top">
							<button class="cu-btn bg-blue lg margin-right shadow" :loading="loading"
								:class="[shape=='round'?'round':'']" @tap="onLogin"><text
									space="emsp">{{loading ? "登录中...":" 登录 "}}</text>
							</button>
							<button class="cu-btn line-blue lg margin-left shadow" :loading="loading"
								:class="[shape=='round'?'round':'']" @tap="loginWay=3-loginWay">短信注册
							</button>
						</view>

						<!-- 找回密码 -->
						<!-- <view style="right: 0rpx;">找回密码</view> -->
					</block>


					<!-- 短信登录 -->
					<block v-else>

						<!-- 手机号输入框 -->
						<view class="cu-form-group margin-top  shadow-warp" :class="[shape=='round'?'round':'']">
							<view class="title"><text class="cuIcon-mobile margin-right-xs"></text>手机号:</view>
							<input placeholder="请输入手机号" type="number" maxlength="11" v-model="user.account"></input>
						</view>

						<!-- 密码输入框 -->
						<view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
							<view class="title"><text class="cuIcon-lock margin-right-xs"></text>密码:</view>
							<input class="uni-input" placeholder="请输入密码" :password="!showPassword"
								v-model="user.password" />
							<view class="action text-lg">
								<text :class="[showPassword ? 'cuIcon-attention' : 'cuIcon-attentionforbid']"
									@click="changePassword"></text>
							</view>
						</view>

						<!-- 验证码输入框 -->
						<!-- <view class="cu-form-group margin-top shadow-warp" :class="[shape=='round'?'round':'']">
							<view class="title"><text class="cuIcon-lock margin-right-xs"></text>密码:</view>
							<input class="uni-input" placeholder="请输入验证码" v-model="smsCode" />
							<view class="action">
								<button class="cu-btn line-blue sm" :disabled="!isSendSMSEnable" @click="onSMSSend">
									{{ getSendBtnText }}</button>
							</view>
						</view> -->
						<!-- <view>未注册的手机号验证后自动创建账号</view> -->

						<!-- 登录按钮 -->
						<view class="padding text-center margin-top">
							<button class="cu-btn bg-blue lg margin-right shadow" :loading="loading"
								:class="[shape=='round'?'round':'']" @tap="onSMSLogin"><text
									space="emsp">{{loading ? "注册中...":" 注册 "}}</text>
							</button>
							<button class="cu-btn line-blue lg margin-left shadow" :loading="loading"
								:class="[shape=='round'?'round':'']" @tap="loginWay=1">账号登录
							</button>
						</view>

					</block>

					<!-- #ifdef APP-PLUS -->
					<view class="padding flex flex-direction  text-center">
						当前版本:{{version}}
					</view>
					<!-- #endif -->

				</view>
			</scroll-view>

			<!-- 登录加载弹窗 -->
			<view class="cu-load load-modal" v-if="loading">
				<!-- <view class="cuIcon-emojifill text-orange"></view> -->
				<image src="https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/custom/tuxiang.jpg" mode="aspectFit"
					class="round"></image>
				<view class="gray-text">登录中...</view>
			</view>

			<!-- QQ、微信登录按钮 -->
			<view class="buttom">
				<view class="loginType">
					<!-- <view class="wechat item">
						<view class="icon">
							<u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
						</view>
						微信
					</view>
					<view class="QQ item">
						<view class="icon">
							<u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon>
						</view>
						QQ
					</view> -->
				</view>
				<view class="hint">
					登录代表同意
					<text class="link">用户协议、隐私政策，</text>
					并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理
				</view>
			</view>

		</view>

	</view>

</template>

<script>
	// import { ACCESS_TOKEN,USER_NAME,USER_INFO } from "@/common/util/constants"
	import {
		mapActions
	} from "vuex"
	// import configService from '@/common/service/config.service.js';

	// 导入添加收藏提示组件
	import addTip from '../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue';

	export default {
		// 导入收藏提示组件
		components: {
			addTip
		},
		data() {
			return {
				tip: '点击「添加小程序」，下次访问更便捷',
				duration: 1,
				
				info: {
					bladderCapacity: '500.0',
					bladderDetrusorPressure: '1.0',
					bladderCompliance: '1.0'
				},
				// 获取用户id
				infoid: {
					id: ''
				},
				user: {
					account: '',
					password: ''
				},
				shape: '', //round 圆形
				loading: false,
				userName: '1',
				password: '1',
				phoneNo: '',
				smsCode: '',
				showPassword: false, //是否显示明文
				loginWay: 1, //1: 账密，2：验证码
				smsCountDown: 0,
				smsCountInterval: null,
				toggleDelay: false,
				version: '',
				//第三方登录相关信息
				thirdType: "",
				thirdLoginInfo: "",
				thirdLoginState: false,
				bindingPhoneModal: false,
				thirdUserUuid: '',
				// url: {
				// 	bindingThirdPhone: '/sys/thirdLogin/bindingThirdPhone'
				// }
			};
		},
		onLoad: function() {
			// #ifdef APP-PLUS
			var that = this
			plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
				that.version = wgtinfo.version
			});
			// #endif
		},
		computed: {
			isSendSMSEnable() {
				return this.smsCountDown <= 0 && this.phoneNo.length > 4;
			},
			getSendBtnText() {
				if (this.smsCountDown > 0) {
					return this.smsCountDown + '秒后发送';
				} else {
					return '发送验证码';
				}
			},
			canSMSLogin() {
				return this.user.account.length > 4 && this.smsCode.length > 4;
			},
			canPwdLogin() {
				return this.user.account.length > 4 && this.user.password.length > 4;
			},
		},
		methods: {
			...mapActions(["mLogin", "PhoneLogin", "ThirdLogin"]),

			// 账号密码登录请求
			onLogin: function() {
				if (!this.user.account || this.user.account.length == 0) {
					this.$tip.toast('请填写用户名');
					return;
				}
				if (!this.user.password || this.user.password.length == 0) {
					this.$tip.toast('请填写密码');
					return;
				}
				let loginParams = {
					account: this.user.account,
					password: this.user.password
				}
				this.loading = true;

				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")

				// 登录跳转
				this.$myRequest({
					url: '/uniappuser/login',
					method: 'POST',
					data: loginParams, // 发送的数据

				}).then((res) => {
					console.log(res)
					this.loading = false;
					if (res.data.code === 20000) { // 获取数据成功
						console.log("成功")
						uni.setStorageSync('token', res.data.data.token); // 将登录信息以token的方式存在手机硬盘中

						// 发送info的请求
						// this.$myRequest({
						// 	url: '/pcuser/info?token=' + uni.getStorageSync('token'),
						// 	method: 'GET',
						// 	data: uni.getStorageSync('token'), // 发送的数据

						// })
						console.log("token====>" + res.data.data.token)
						uni.switchTab({
							url: '../index/index'
						})
						this.$tip.success('登录成功!')
					} else if (res.data.code === 500) { // 获取数据失败
						console.log("失败")
						this.loading = false;
						this.$tip.alert(res.data.message);
					}
				}).catch((err) => {
					let msg = "请求出现错误，请稍后再试"
					this.loading = false;
					this.$tip.alert(msg);
				}).finally(() => {
					this.loading = false;
				})

			},



			saveClientId() {
				var info = plus.push.getClientInfo();
				var cid = info.clientid;
				this.$http.get("/sys/user/saveClientId", {
					params: {
						clientId: cid
					}
				}).then(res => {
					console.log("res::saveClientId>", res)
					this.$tip.success('登录成功!')
					this.$Router.replaceAll({
						name: 'index'
					})
				})
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},

			// 手机号注册
			onSMSSend() {
				let smsParams = {};
				smsParams.account = this.user.account;
				smsParams.password = "0";
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				if (!smsParams.account || smsParams.account.length == 0) {
					this.$tip.toast('请输入手机号');
					return false
				}
				if (!checkPhone.test(smsParams.account)) {
					this.$tip.toast('请输入正确的手机号');
					return false
				}
			},
			startSMSTimer() {
				this.smsCountInterval = setInterval(() => {
					this.smsCountDown--;
					if (this.smsCountDown <= 0) {
						clearInterval(this.smsCountInterval);
					}
				}, 1000);
			},
			// 手机号注册
			onSMSLogin() {
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);

				if (!this.user.account || this.user.account.length == 0) {
					this.$tip.toast('请填写手机号');
					return;
				}
				if (!checkPhone.test(this.user.account)) {
					this.$tip.toast('请输入正确的手机号');
					return false
				}
				if (!this.user.password || this.user.password.length == 0) {
					this.$tip.toast('请填密码');
					return;
				}

				let loginParams = {
					account: this.user.account,
					password: this.user.password
				}
				this.loading = true;

				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")

				// 注册跳转
				this.$myRequest({
					url: '/uniappuser/add',
					method: 'POST',
					data: loginParams, // 发送的数据

				}).then((res) => {
					console.log(res)
					this.loading = false;
					if (res.data.code === 20000) { // 获取数据成功
						console.log("成功")
						uni.setStorageSync('token', res.data.data.token); // 将登录信息以token的方式存在手机硬盘中

						// 发送info的请求
						// this.$myRequest({
						// 	url: '/pcuser/info?token=' + uni.getStorageSync('token'),
						// 	method: 'GET',
						// 	data: uni.getStorageSync('token'), // 发送的数据

						// })
						console.log("token====>" + res.data.data.token)
						// page.onLoad();
						this.$tip.success('注册成功!')
						this.infoid = res.data.data
						console.log("user_id===>"+this.infoid.id)
						
						
						// 添加一条膀胱动力学参数的值
						this.$myRequest({
							url: '/bladderData/id?id='+this.infoid.id,
							method: 'POST',
							data: _this.info,
						})
						
						// 添加一条尿常规参数的值
						this.$myRequest({
							url: '/urineData/id?id='+this.infoid.id,
							method: 'POST',
							data: _this.info,
						})
						
						// 添加一条输尿管B超参数的值
						this.$myRequest({
							url: '/ureteralData/id?id='+this.infoid.id,
							method: 'POST',
							data: _this.info,
						})
						
						// 添加一条肾功能参数的值
						this.$myRequest({
							url: '/renalData/id?id='+this.infoid.id,
							method: 'POST',
							data: _this.info,
						})
					} else if (res.data.code === 500) { // 获取数据失败
						console.log("失败")
						this.loading = false;
						this.$tip.alert(res.data.message);
					}
				})

				// 	// 登录跳转
				// 	this.$myRequest({
				// 		url: '/uniappuser/add',
				// 		method: 'POST',
				// 		data: loginParams, // 发送的数据

				// 	}).then((res) => {
				// 		console.log(res)
				// 		this.loading = false;
				// 		if (res.data.code === 20000) { // 获取数据成功
				// 			console.log("成功")
				// 			// uni.setStorageSync('token', res.data.data.token); // 将登录信息以token的方式存在手机硬盘中
				// 			// console.log("token" + res.data.data.token)
				// 			page.onLoad();
				// 			this.$tip.success('注册成功!')
				// 			// uni.switchTab({
				// 			// 	url: ''
				// 			// })
				// 		} else if (res.data.code === 500) { // 获取数据失败
				// 			console.log("失败")
				// 			this.loading = false;
				// 			this.$tip.alert(res.data.message);
				// 		}
				// 	}).catch((err) => {
				// 		let msg = "请求出现错误，请稍后再试"
				// 		this.loading = false;
				// 		this.$tip.alert(msg);
				// 	}).finally(() => {
				// 		this.loading = false;
				// 	})

			},


			// 	let loginParams = {
			// 		mobile: this.phoneNo,
			// 		captcha: this.smsCode
			// 	};
			// 	this.PhoneLogin(loginParams).then((res) => {
			// 		console.log("res====》", res)
			// 		if (res.data.success) {
			// 			this.$tip.success('登录成功!')
			// 			this.$Router.replaceAll({
			// 				name: 'index'
			// 			})
			// 		} else {
			// 			this.$tip.error(res.data.message);
			// 		}
			// 	}).catch((err) => {
			// 		let msg = ((err.response || {}).data || {}).message || err.data.message || "请求出现错误，请稍后再试"
			// 		this.$tip.error(msg);
			// 	});
			// },
			loginSuccess() {
				// 登陆成功，重定向到主页
				this.$Router.replace({
					name: 'index'
				})
			},
			requestFailed(err) {
				this.$message.warning("登录失败")
			},
		},
		beforeDestroy() {
			if (this.smsCountInterval) {
				clearInterval(this.smsCountInterval);
			}
		},
	}
</script>

<style lang="scss" scoped>
	/* 输入框高度位置 */
	.login-paddingtop {
		/* padding-top: 100upx; */
	}

	.zai-box {
		padding: 0 20upx;
		padding-top: 100upx;
		position: relative;

		.buttom {
			.loginType {
				display: flex;
				// padding: 350rpx 150rpx 150rpx 150rpx;
				padding: 18rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}

	.zai-logo {
		width: 200upx;
		// height: 150px;
		height: 94px;
	}

	.zai-title {
		font-size: 58upx;
		color: #000000;
		text-align: center;
	}

	.input-placeholder,
	.zai-input {
		color: #94afce;
	}

	.zai-label {
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}

	.zai-btn {
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}

	.zai-btn:after {
		border: 0;
	}

	/*按钮点击效果*/
	.zai-btn.button-hover {
		transform: translate(1upx, 1upx);
	}
</style>
