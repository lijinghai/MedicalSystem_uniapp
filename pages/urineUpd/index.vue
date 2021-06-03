<!-- 尿常规资料修改
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 3
 -->
<template>
	<view class="box">

		<view class="tit">请添加尿常规资料</view>
		<view class="ul">
			<scroll-view>
			<!-- 方案一 -->
			<!-- <uni-forms :rules="rules" ref="form"> -->
			<uni-forms  ref="form">
				<uni-forms-item label="病患编号:" name="patientDataId">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" disabled="true" type="text" v-model="info.patient_data_id" />
				</uni-forms-item>
				<uni-forms-item label="数据编号:" name="id">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" disabled="true" type="text" v-model="info.id" />
				</uni-forms-item>
				<uni-forms-item label="尿白细胞:" name="leu">
					<!-- <input class="input" type="text" v-model="info.bladderCapacity" placeholder="请填写最大膀胱测压容量(ml)" /> -->
					<input class="input" type="text" v-model="info.leu" placeholder="请填写最大膀胱测压容量(ml)" />
				</uni-forms-item>
				
				<uni-forms-item label="亚硝酸盐:" name="nit">
					<!-- <input class="input" type="text" v-model="info.bladderDetrusorPressure" placeholder="请填写排尿期最大逼尿肌压(cmH2O)" /> -->
					<input class="input" type="text" v-model="info.nit"
						placeholder="请填写排尿期最大逼尿肌压(cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="尿蛋白:" name="pro">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.pro"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="葡萄糖:" name="gluU">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.gluUe"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="酮体:" name="ket">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.ket"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="尿胆原:" name="uro">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.uro"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="胆红素:" name="bil">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.bil"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="PH值:" name="phU">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.phU"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="比重:" name="sg">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.sg"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="隐血:" name="blu">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.blu"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="抗坏血酸:" name="vc">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.vc"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="颜色:" name="col">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.col"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="透明度:" name="tmd">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.tmd"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="吞噬细胞:" name="tsxb">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.tsxb"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="白细胞管型:" name="uwbcC">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.uwbcC"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="颗粒管型:" name="klgxF">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.klgxF"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="透明管型:" name="utmCa">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.utmCa"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="红细胞管型:" name="urbc">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.urbc"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="蜡样管型:" name="lygx">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.lygx"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="白细胞镜检:" name="wbcJ1">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.wbcJ1"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				<uni-forms-item label="红细胞镜检:" name="wbcJ2">
					<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
					<input class="input" type="text" v-model="info.wbcJ2"
						placeholder="请填写膀胱顺应性(ml/cmH2O)" />
				</uni-forms-item>
				
				
				
				
			</uni-forms>

			<view class="btn_login" :class="user.account.length == 11 && password ? 'btn2' : 'btn2'" @click="postInfo">
				添加
			</view>
			</scroll-view>
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
					leu: "",
					nit: "",
					pro: "",
					gluU: "",
					ket: "",
					uro: "",
					bil: "",
					phU: "",
					sg: "",
					blu: "",
					vc: "",
					col: "",
					tmd: "",
					tsxb: "",
					klgxF: "",
					lygx: "",
					wbcJ1: "",
					wbcJ2: "",
					note: "",
					utmCa: "",
					uwbcC: "",
					urbc: ""
				},
				info: {},
				// rules: {
				// 	// 对bladderCapacity字段进行校验
				// 	bladderCapacity: {
				// 		rules: [{
				// 				required: true,
				// 				errorMessage: '请填写最大膀胱测压容量',
				// 			},
				// 			{
				// 				minLength: 1,
				// 				// errorMessage: '手机号长度在 {minLength} 到 {maxLength} 个字符',
				// 				errorMessage: '最大膀胱测压容量长度必须为 {minLength} 个字符',
				// 			}
				// 		]
				// 	},
				// 	// 对bladderDetrusorPressure字段进行必填验证
				// 	bladderDetrusorPressure: {
				// 		rules: [{
				// 				required: true,
				// 				errorMessage: '请输入排尿期最大逼尿肌压',
				// 			},
				// 			{
				// 				minLength: 1,
				// 				errorMessage: '排尿期最大逼尿肌压长度必须大于 {minLength} 个字符',
				// 			}
				// 		]
				// 	},
				// 	// 对bladderCompliance字段进行必填验证
				// 	bladderCompliance: {
				// 		rules: [{
				// 				required: true,
				// 				errorMessage: '请输入膀胱顺应性值',
				// 			},
				// 			{
				// 				minLength: 1,
				// 				errorMessage: '膀胱顺应性值长度必须大于 {minLength}  个字符',
				// 			}
				// 		]
				// 	}
				// }
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
						url: 'http://localhost:8091/urineData',
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
									url: '../urineData/index'
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
					url: '/urineData/id?limit=19&page=1&sort=1&id=' + this.id
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
