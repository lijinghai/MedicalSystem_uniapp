<!-- 餐饮事件
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">餐饮事件</block>
		</cu-custom>
		
		<!-- 轮播数据 -->
		<view>
			<scroll-view>
				<foodItem @itemClick="goDetail" :list="findlist"></foodItem>
			</scroll-view>
		</view>

		<!-- 添加事件 -->
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<!-- <text v-if="findlist.length === 0">暂无数据,请点击添加按钮添加数据</text> -->
		<view v-if="findlist.length === 0">
			<view class="u-demo-area">
				<u-empty mode="data">
				</u-empty>
			</view>
		</view>
		
		
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
				options: [],
				buttonGroup: [{
					text: '添加餐饮事件',
					backgroundColor: '#0392ff',
					color: '#fff'
				}]
			}
		},
		onUnload() {
			uni.switchTab({
				url: '../index/index'
			})
		},
		methods: {
			
			// 查询
			async getFindList() {
				const res = await this.$myRequest({
					url: '/events/first?limit=999999&page=1&sort=-1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			},
			
			// 点击跳转
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

				this.$myRequest({
					url: '/events/first',
					method: 'POST',
					data: _this.info,

				}).then(res => {
					console.log(res)
	
					if (res.data.code == 20000) { // 获取数据成功
						console.log("成功")
						console.log("该条信息的id为====>")
						console.log(res.data.data.id)
						
						uni.navigateTo({
							url: '../foodData/index'
						})
						
						this.$tip.success('添加成功！！')
						// uni.showModal({
						// 	title: '编辑成功！！'
						// })
					} else { // 获取数据失败
						console.log("失败")
						uni.showModal({
							title: '请按要求填写信息！！'
						})
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
