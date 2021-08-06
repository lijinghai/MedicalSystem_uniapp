<!-- 尿常规资料
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 3
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">尿常规资料</block>
		</cu-custom>
		<view class="box">
		
			<view class="tit">请添加尿常规资料</view>
			<view class="ul">
				<scroll-view>
					<!-- 方案一 -->
					<!-- <uni-forms :rules="rules" ref="form"> -->
					<uni-forms ref="form">
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
							<input class="input" type="text" v-model="info.leu" placeholder="请填写尿白细胞" />
						</uni-forms-item>
		
						<uni-forms-item label="亚硝酸盐:" name="nit">
							<!-- <input class="input" type="text" v-model="info.bladderDetrusorPressure" placeholder="请填写排尿期最大逼尿肌压(cmH2O)" /> -->
							<input class="input" type="text" v-model="info.nit" placeholder="请填写亚硝酸盐:" />
						</uni-forms-item>
						<uni-forms-item label="尿蛋白:" name="pro">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.pro" placeholder="请填写尿蛋白" />
						</uni-forms-item>
						<uni-forms-item label="葡萄糖:" name="gluU">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.gluUe" placeholder="请填写葡萄糖" />
						</uni-forms-item>
						<uni-forms-item label="酮体:" name="ket">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.ket" placeholder="请填写酮体" />
						</uni-forms-item>
						<uni-forms-item label="尿胆原:" name="uro">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.uro" placeholder="请填写尿胆原" />
						</uni-forms-item>
						<uni-forms-item label="胆红素:" name="bil">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.bil" placeholder="请填写胆红素" />
						</uni-forms-item>
						<uni-forms-item label="PH值:" name="phU">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.phU" placeholder="请填写PH值" />
						</uni-forms-item>
						<uni-forms-item label="比重:" name="sg">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.sg" placeholder="请填写比重" />
						</uni-forms-item>
						<uni-forms-item label="隐血:" name="blu">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.blu" placeholder="请填写隐血:" />
						</uni-forms-item>
						<uni-forms-item label="抗坏血酸:" name="vc">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.vc" placeholder="请填写抗坏血酸" />
						</uni-forms-item>
						<uni-forms-item label="颜色:" name="col">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.col" placeholder="请填写颜色" />
						</uni-forms-item>
						<uni-forms-item label="透明度:" name="tmd">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.tmd" placeholder="请填写透明度" />
						</uni-forms-item>
						<uni-forms-item label="吞噬细胞:" name="tsxb">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.tsxb" placeholder="请填写吞噬细胞" />
						</uni-forms-item>
						<uni-forms-item label="白细胞管型:" name="uwbcC">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.uwbcC" placeholder="请填写白细胞管型" />
						</uni-forms-item>
						<uni-forms-item label="颗粒管型:" name="klgxF">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.klgxF" placeholder="请填写颗粒管型" />
						</uni-forms-item>
						<uni-forms-item label="透明管型:" name="utmCa">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.utmCa" placeholder="请填写透明管型" />
						</uni-forms-item>
						<uni-forms-item label="红细胞管型:" name="urbc">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.urbc" placeholder="请填写红细胞管型" />
						</uni-forms-item>
						<uni-forms-item label="蜡样管型:" name="lygx">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.lygx" placeholder="请填写蜡样管型" />
						</uni-forms-item>
						<uni-forms-item label="白细胞镜检:" name="wbcJ1">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.wbcJ1" placeholder="请填写白细胞镜检" />
						</uni-forms-item>
						<uni-forms-item label="红细胞镜检:" name="wbcJ2">
							<!-- <input class="input" type="text" v-model="info.bladderCompliance" placeholder="请填写膀胱顺应性(ml/cmH2O)" /> -->
							<input class="input" type="text" v-model="info.wbcJ2" placeholder="请填写红细胞镜检" />
						</uni-forms-item>
		
		
		
		
					</uni-forms>
		
					<view class="btn_login" @click="postInfo">
						提交
					</view>
				</scroll-view>
			</view>
		</view>


	</view>
</template>

<script>

	export default {
		data() {
			return {
				findlist: [],
				info: {
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
			options: [],
				
			}
		},
		methods: {
			
			// 查询
			async getFindList() {
				const res = await this.$myRequest({
					url: '/urineData?id=1&limit=1&page=1&sort=-1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			},
			goDetail(id) {
				console.log("id：" + id)
				uni.navigateTo({
					url: '/pages/urineUpd/index?id=' + id
				})
			},
			buttonClick() {
				// 添加数据
				console.log("添加")
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")
				// 添加跳转
				this.$myRequest({
					url: '/urineData',
					method: 'POST',
					data: _this.info,
				
				}).then(res => {
					console.log(res)
					// success({ // 请求成功
					// 	data
					// })
					if (res.data.code == 20000) { // 获取数据成功
						console.log("成功")
						uni.setStorageSync('token', res.data.token); // 将登录信息以token的方式存在手机硬盘中
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
				})
				
				
				
				
				// uni.request({
				// 	// 路径
				// 	url: 'http://localhost:8091/urineData',
				// 	// 请求方法
				// 	method: 'POST',
				// 	data: _this.info, // 发送的数据
				// 	success({ // 请求成功
				// 		data
				// 	}) {
				// 		if (data.code == 20000) { // 获取数据成功
				// 			console.log("成功")
				// 			uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
				// 			// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
				// 			uni.navigateTo({
				// 				url: '../urineData/index'
				// 			})
				// 			uni.showModal({
				// 				title: '添加成功！！'
				// 			})
				// 		} else { // 获取数据失败
				// 			console.log("失败")
				// 			uni.showModal({
				// 				title: '请按要求填写信息！！'
				// 			})
				// 		}
				// 	},
				// 	fail: (res) => {
				// 		console.log("错误")
				// 	}
				// })
			},
		},
		// 注册组件
		components: {
			"urineItem": urineItem
		},
		onLoad() {
			this.getFindList()
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
