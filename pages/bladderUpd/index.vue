<!-- 膀胱动力学参数修改
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 2
 -->
<template>
	<view class="box">

		<view class="tit">请添加膀胱动力学参数</view>
		<view class="ul">

			<!-- 方案一 -->
			<uni-forms :rules="rules" ref="form">
				<uni-forms-item label="病患编号:" name="patientDataId">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" disabled="true" type="text" v-model="info.patient_data_id"  />
				</uni-forms-item>
				<uni-forms-item label="数据编号:" name="id">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" disabled="true" type="text" v-model="info.id" />
				</uni-forms-item>
				<uni-forms-item label="数据一:" name="bladderCapacity">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" />
				</uni-forms-item>

				<uni-forms-item label="数据二:" name="bladderDetrusorPressure">
					<!-- <input class="input" type="text" v-model="info.bladderDetrusorPressure" placeholder="请填写排尿期最大逼尿肌压(cmH2O)" /> -->
					<input class="input" type="text" v-model="info.bladderDetrusorPressure"
						placeholder="请填写排尿期最大逼尿肌压(cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="数据三:" name="bladderCompliance">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.bladderCompliance"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
			</uni-forms>

			<view class="btn_login" :class="user.account.length == 11 && password ? 'btn2' : 'btn2'" @click="postInfo">
				添加</view>
			<!-- <view class="des"> -->
			<!-- 请填写者如实准确的填写以上数据 -->
			<!-- <text class="text2" @click="ageree">《用户协议》</text>
					、
					<text class="text2" @click="hideAgree">《用户隐私协议》</text> -->
			<!-- </view> -->
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				pwd_show: true,
				info: {
					id: '',
					patientDataId: '',
					bladderCapacity: '',
					bladderDetrusorPressure: '',
					bladderCompliance: ''
				},
				info: {},
				rules: {
					// 对bladderCapacity字段进行校验
					bladderCapacity: {
						rules: [{
								required: true,
								errorMessage: '请填写最大膀胱测压容量',
							},
							{
								minLength: 1,
								// errorMessage: '手机号长度在 {minLength} 到 {maxLength} 个字符',
								errorMessage: '最大膀胱测压容量长度必须为 {minLength} 个字符',
							}
						]
					},
					// 对bladderDetrusorPressure字段进行必填验证
					bladderDetrusorPressure: {
						rules: [{
								required: true,
								errorMessage: '请输入排尿期最大逼尿肌压',
							},
							{
								minLength: 1,
								errorMessage: '排尿期最大逼尿肌压长度必须大于 {minLength} 个字符',
							}
						]
					},
					// 对bladderCompliance字段进行必填验证
					bladderCompliance: {
						rules: [{
								required: true,
								errorMessage: '请输入膀胱顺应性值',
							},
							{
								minLength: 1,
								errorMessage: '膀胱顺应性值长度必须大于 {minLength}  个字符',
							}
						]
					}
				}
			};
		},
		methods: {
			//添加事件
			postInfo() {

				this.$refs.form.submit().then(res => {
					console.log('表单数据信息：', res);
					const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
					console.log("表单提交")
					// 登录跳转
					uni.request({
						// 路径
						url: 'http://localhost:8091/bladderData',
						// 请求方法
						method: 'PUT',
						data: _this.info, // 发送的数据
						success({ // 请求成功
							data
						}) {
							if (data.code == 20000) { // 获取数据成功
								console.log("成功")
								uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
								// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
								uni.navigateTo({
									url: '../bladderData/index'
								})
								uni.showModal({
									title: '编辑成功！！'
								})
							} else { // 获取数据失败
								console.log("失败")
								uni.showModal({
									title: '请按要求填写信息！！'
								})
							}
						},
						fail: (res) => {
							console.log("错误")
						}
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})

			},
			async getInfo() {
				const res = await this.$myRequest({
					url: '/bladderData/id?limit=19&page=1&sort=1&id=' + this.id
				})
				console.log("res==>" + this.id)
				this.info = res.data.data.items[0]
			},
			onLoad(options) {
				console.log(options)
				this.id = options.id
				console.log(options.id)
				this.getInfo()
			}

		}
	};
</script>

<style lang="less">
	// .input{
	// 	position: absolute;
	// 	left: 190rpx;
	// }
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
