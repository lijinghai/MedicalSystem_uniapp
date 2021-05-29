<template>
	<view class="box">
		<view class="tit">欢迎您的加入</view>
		<view class="ul">
			<view class="li">
				<input v-model="user.name" maxlength="11" placeholder-style="color: #AFAFB8" class="pr" type="number"
					placeholder="请输入用户名" />
			</view>

			<view class="li">
				<input v-model="user.account" maxlength="11" placeholder-style="color: #AFAFB8" class="pr" type="number"
					placeholder="请输入手机号" />
			</view>
			<view class="li">
				<input v-model="user.password" maxlength="24" placeholder-style="color: #AFAFB8" class="pr" type="text"
					placeholder="请输入密码" :password="pwd_show" />
				<image class="xs" src="" v-if="pwd_show" @click="pwd_show = !pwd_show">
				</image>
				<image class="yc" src="" v-else @click="pwd_show = !pwd_show"></image>
			</view>

			<view class="li">
				<input v-model="user.email" maxlength="11" placeholder-style="color: #AFAFB8" class="pr" type="number"
					placeholder="请输入邮箱" />
			</view>


			<view>
				<uni-row class="demo-uni-row">
					<uni-col :span="8">
						<view class="demo-uni-col ">您的年龄：</view>
					</uni-col>
					<uni-col :span="8" :offset="0">
						<view class="demo-uni-col dark">
							<uni-number-box :min="1" :max="100" value="18"></uni-number-box>
						</view>
					</uni-col>
				</uni-row>
			</view>


			<view class="example-body">
				<uni-combox label="您的性别" :candidates="candidates" placeholder="请选择您的性别" v-model="city"></uni-combox>
			</view>

		</view>
		<view class="btn_login" :class="user.account.length == 11 && password ? 'btn2' : 'btn2'" @click="postInfo">注册
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				user: {
					account: "",
					age: 0,
					createTime: "",
					deleted: 0,
					email: "",
					id: 0,
					name: "",
					password: "",
					roleType: 0,
					sex: 0
				},
				pwd_show: true,
				candidates: ['男', '女'],
				city: ''
			};
		},
		methods: {

			//注册事件
			postInfo() {
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")
				// 登录跳转
				uni.request({
					// 路径
					url: 'http://localhost:8091/uniappuser/add',
					// 请求方法
					method: 'POST',
					data: _this.user, // 发送的数据
					success({ // 请求成功
						data
					}) {
						if (data.code == 20000) { // 获取数据成功
						console.log("成功")
							uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
							// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
							uni.navigateTo({
								url: '../login/index'
							})
						} else { // 获取数据失败
							console.log("失败")
							uni.showModal({
								title: '请按要求填写注册信息！！'
							})
						}
					},
					fail: (res) => {
						console.log("错误")
					}
				})
			},

			//用户注册页面
			register() {
				// 跳转到注册页面
				uni.navigateTo({
					url: '../register/register'
				})
			},

			//忘记密码页面
			forget() {
				// 跳转到忘记密码页面
				uni.navigateTo({
					url: '../forget/forget'
				})
			},

			//用户协议
			ageree() {
				// 跳转到用户协议
				uni.navigateTo({
					url: '../agree/agree'
				})
			},

			//用户协议
			hideAgree() {
				// 跳转到用户隐私协议
				uni.navigateTo({
					url: '../hideAgree/hideAgree'
				})
			},

		}
	};
</script>

<style lang="less">
	.demo-uni-row {
		margin-bottom: 10px;
		/* QQ、字节小程序文档写有 :host，但实测不生效 */
		/* 百度小程序没有 :host，需要设置block */
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	/* 支付宝小程序没有 demo-uni-row 层级 */
	/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	/deep/ .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 4px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}

	.example-body {
		padding: 0px 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 16px;
	}

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
