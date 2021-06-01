<!-- 膀胱动力学参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		<view>
			<scroll-view>
				<bladderItem :list="findlist"></bladderItem>
			</scroll-view>
		</view>

		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import bladderItem from '../../components/bladderItem/index.vue';
	export default {
		data() {
			return {
				findlist: [],
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
				buttonGroup: [
					{
						text: '添加一条数据',
						backgroundColor: '#0392ff',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getFindList() {
				const res = await this.$myRequest({
					url: '/bladderData?id=1&limit=1&page=1&sort=1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			},
			buttonClick() {
				console.log("添加")
				uni.navigateTo({
					url: '../bladderAdd/index'
				})
			}
		},
		// 注册组件
		components: {
			"bladderItem": bladderItem
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
