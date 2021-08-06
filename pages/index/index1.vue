<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">一章一码</block>
		</cu-custom>
		
		<!-- 收藏小提示 -->
		<!-- #ifdef MP-WEIXIN -->
		<add-tip :tip="tip" :duration="duration" />
		<!-- #endif -->
		
	<view class="home">
		<!-- 轮播图 -->
		<!-- indicator-dots 图片下的点 -->
		<!-- circular 循环 -->
		<swiper indicator-dots circular>
			<swiper-item>
				<image src="../../static/unbo/yiyuan.jpg" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/unbo/yisheng.jpg" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 通告栏 -->
		<uni-notice-bar showClose="true" showIcon="true" color="#87CEFF" scrollable="true" single="true"
			text="[通知] 欢迎使用我们的软件"></uni-notice-bar>
		<!-- 导航区1 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
	
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				// 首页导航区一
				navs: [{
						icon: 'iconfont icon-canshuzu',
						title: '病理参数',
						path: '/pages/parameter/parameter'
					},
					{
						icon: 'iconfont icon-shijianguanli',
						title: '事件管理',
						path: '/pages/manage/manage'
					},
					{
						icon: 'iconfont icon-naozhong3',
						title: '闹钟设置',
						path: '/pages/alarm/alarm'
					},
					{
						icon: 'iconfont icon-baobiaobiaoweiguanli',
						title: '事件报表',
						path: '/pages/report/report'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
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
	
	@import url("@/static/font/iconfont.css");
	.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
				line-height: 55px;
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
