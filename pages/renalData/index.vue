<!-- 肾功能资料
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 4
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">肾功能资料</block>
		</cu-custom>
		<view>
			<scroll-view>
				<renalItem @itemClick="goDetail" :list="findlist"></renalItem>
			</scroll-view>
			
		</view>

		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<text v-if="findlist.length === 0">暂无数据,请点击添加按钮添加数据</text>
	</view>
</template>

<script>
	import renalItem from '../../components/renalItem/index.vue';
	export default {
		data() {
			return {
				findlist: [],
				info: {
					param1: '',
					param2: '',
					param3: '',
					param4: '',
					param5: '',
					param6: '',
					param7: '',
					param8: '',
					param9: '',
					param10: '',
					param11: '',
					param12: '',
					param13: ''
				},
				options: [],
				buttonGroup: [
					{
						text: '添加一条默认数据',
						backgroundColor: '#0392ff',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getFindList() {
				const res = await this.$myRequest({
					url: '/renalData?id=1&limit=99999&page=9999&sort=-1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			},
			goDetail (id) {
				console.log("id："+id)
				uni.navigateTo({
					url: '/pages/renalUpd/index?id='+id
				})
			},
			buttonClick() {
				// 添加数据
				console.log("添加")
						const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
						console.log("表单提交")
						// 添加跳转
						
						this.$myRequest({
							url: '/renalData',
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
									url: '../renalData/index'
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
						
						
		// 				uni.request({
		// 					// 路径
		// 					url: 'http://localhost:8091/renalData',
		// 					// 请求方法
		// 					method: 'POST',
		// 					data: _this.info, // 发送的数据
		// 					success({ // 请求成功
		// 						data
		// 					}) {
		// 						if (data.code == 20000) { // 获取数据成功
		// 							console.log("成功")
		// 							uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
		// 							// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
		// 							uni.navigateTo({
		// 								url: '../renalData/index'
		// 							})
		// 							uni.showModal({
		// 								title: '添加成功！！'
		// 							})
		// 						} else { // 获取数据失败
		// 							console.log("失败")
		// 							uni.showModal({
		// 								title: '请按要求填写信息！！'
		// 							})
		// 						}
		// 					},
		// 					fail: (res) => {
		// 						console.log("错误")
		// 					}
		// 				})
				},	
		},
		// 注册组件
		components: {
			"renalItem": renalItem
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

