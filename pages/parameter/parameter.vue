<!-- 病理参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view class="pics">

		<!-- 可滚动区域 -->
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''"
				v-for="(item,index) in cates" :key="item.id">
				{{item.ctitle}}
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [{
						id: 1,
						ctitle: '膀胱动力学资料'
					},
					{
						id: 2,
						ctitle: '尿常规资料'
					},
					{
						id: 3,
						ctitle: '肾功能资料'
					},
					{
						id: 4,
						ctitle: '输尿管B超数据资料'
					}
				],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate() {
				// this.leftClickHandle(0, this.cates[0].id)
			},
			async leftClickHandle(index, g_id) {
				console.log("id:" + g_id)
				this.active = index

				if (g_id === 1) {
					uni.navigateTo({
						url: '../bladderData/index'
					})
				}
				if (g_id === 2)
					uni.navigateTo({
						url: '../urineData/index'
					})
				if (g_id === 3)
					uni.navigateTo({
						url: '../renalData/index'
					})
				if (g_id === 4)
					uni.navigateTo({
						url: '../ureteralData/index'
					})
			}
		},
		onLoad() {
			this.getPicsCate()

		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		// 一行显示
		display: flex;

		.left {
			width: 100%;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			// 选中颜色
			.active {
				background: $search-color;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				.lname {
					font-size: 35rpx;
					color: $search-color;
					line-height: 80rpx;

					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						// text-decoration: line-through;
						margin-left: 20rpx;
					}
				}

				.box2 {
					padding: 0 10px;
					font-size: 32rpx;
					line-height: 70rpx;
				}

				.line {
					height: 10rpx;
					width: 750rpx;
					background: #eee;
				}

			}
		}
	}
</style>
