<template>
	<view class="pics">

		<!-- 可滚动区域 -->
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''"
				v-for="(item,index) in cates" :key="item.id">
				{{item.ctitle}}
			</view>
		</scroll-view>


		<!-- 右侧信息页显示 -->
		<scroll-view class="right" scroll-y>
			<!-- 大试图 -->
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''"
				v-for="(item,index) in cates" :key="item.id">
				<view v-if="item.id === 1">
					1
				</view>
				<view v-if="item.id === 2">
					2
				</view>
			</view>
			
			
			
			<!-- <view class="item" v-for="(item,index) in cates" :key="item.id"> -->
				<!-- <view>
					{{item.id}}
				</view> -->
				<!-- <view v-if="item.g_id === '2'">
					{{item.g_id}}
				</view> -->
			<!-- </view> -->
			<!-- <text v-if="secondData.length === 0">暂无数据</text> -->
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [{
					id: 1,
					ctitle: '膀胱动力学数据'
				},
				{
					id: 2,
					ctitle: '尿常规数据'
				},
				{
					id: 3,
					ctitle: '肾功能数据数据'
				},
				{
					id: 4,
					ctitle: '输尿管B超数据'
				}
				],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate() {
				this.leftClickHandle(0, this.cates[0].id)
			},
			async leftClickHandle(index, g_id) {
				console.log("id:" + g_id)
				this.active = index
				// 获取右侧的数据
				
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
			width: 220rpx;
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
