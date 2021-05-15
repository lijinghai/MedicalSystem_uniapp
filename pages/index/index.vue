<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- indicator-dots 图片下的点 -->
		<!-- circular 循环 -->
		<swiper indicator-dots circular>
			<swiper-item >
				<image src="../../static/unbo/yisheng.jpg" mode=""></image>
			</swiper-item>
			<swiper-item >
				<image src="../../static/unbo/yiyuan.jpg" mode=""></image>
			</swiper-item>
		</swiper>

		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				navs: [{
						icon: 'iconfont icon-yisheng',
						title: '医院介绍',
						path: '/pages/introduce/introduce'
					},
					{
						icon: 'iconfont icon-huizhen',
						title: '自助会诊',
						path: '/pages/consultation/consultation'
					},
					{
						icon: 'iconfont icon-yuyue',
						title: '预约挂号',
						path: '/pages/register/register'
					},
					{
						icon: 'iconfont icon-jilu',
						title: '门诊记录',
						path: '/pages/record/record'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/unbo?limit=3&page=1&sort=1'
				})
				console.log(res)
				this.swipers = res.data.data.items
			},
			// 导航事件的处理
			navItemClick(url) {
				console.log('跳转', url)
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rps;
			height: 380rps;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 10px;

		.title {
			height: 50px;
			line-height: 50px;
			color: #87CEFF;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0;
		}
	}

	.nav {
		display: flex;

		.nav_item {
			width: 25%;
			text-align: center;

			view {
				width: 120rpx;
				height: 120rpx;
				background: #089cff;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 50px;
				color: #fff;
				font-size: 70rpx;
			}

			.icon-xiaoxi {
				// line-height: 55rpx;
				font-size: 75rpx;
			}

			text {
				font-size: 30rpx;
			}
		}
	}
</style>
