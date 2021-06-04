<!-- 餐饮事件
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>

		<view>
			<scroll-view>
				<foodItem @itemClick="goDetail" :list="findlist"></foodItem>
			</scroll-view>

		</view>

		<!-- <view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<text v-if="findlist.length === 0">暂无数据,请点击添加按钮添加数据</text> -->
	</view>
</template>

<script>
	import foodItem from '../../components/foodItem/index.vue';
	export default {
		data() {
			return {
				findlist: [],
				info: {
					eventTime: '',
					eventType: 1,
					waterCode: "normal_water",
					totalCapacity: 0,
					urgentLevel: 1,
					isIncontinence: 0,
					incontinenceType: 1,
					isPain: 0,
					isLeak: 0,
					isDifficult: 0,
				},
				// options: [{
				// 	icon: 'headphones',
				// 	text: '客服'
				// }, {
				// 	icon: 'shop',
				// 	text: '店铺',
				// 	info: 2,
				// 	infoBackgroundColor: '#007aff',
				// 	infoColor: "red"
				// }, {
				// 	icon: 'cart',
				// 	text: '购物车',
				// 	info: 2
				// }],
				buttonGroup: [{
					text: '添加一条默认数据',
					backgroundColor: '#0392ff',
					color: '#fff'
				}]
			}
		},
		methods: {
			async getFindList() {
				const res = await this.$myRequest({
					url: '/events?id=1&limit=99999&page=9999&sort=-1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			},
			goDetail(id) {
				console.log("id：" + id)
				uni.navigateTo({
					url: '/pages/foodUpd/index?id=' + id
				})
			},
			buttonClick() {
				// 添加数据
				console.log("添加")
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")
				// 添加跳转
				uni.request({
					// 路径
					url: 'http://localhost:8091/events',
					// 请求方法
					method: 'POST',
					data: _this.info, // 发送的数据
					success({ // 请求成功
						data
					}) {
						if (data.code == 20000) { // 获取数据成功
							console.log("成功")
							uni.setStorageSync('token', data.token); // 将登录信息以token的方式存在手机硬盘中
							// uni.setStorageSync('userInfo', data.result.userInfo); // 将用户信息存储在手机硬盘中
							uni.navigateTo({
								url: '../foodData/index'
							})
							uni.showModal({
								title: '添加成功！！'
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
			},
		},
		// 注册组件
		components: {
			"foodItem": foodItem
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
