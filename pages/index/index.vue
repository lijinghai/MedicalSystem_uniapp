<!-- 首页页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">医依</block>
		</cu-custom>

		<!-- 收藏小提示 -->
		<!-- #ifdef MP-WEIXIN -->
		<add-tip :tip="tip" :duration="duration" />
		<!-- #endif -->

		<!-- banner图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" circular="true" indicator-dots="true" autoplay="true" interval="3500"
						duration="600">
						<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
							<view class="swiper-item uni-bg-red">
								<image class="swiper-img" :src="item.imageUrl" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<!-- 通告栏 -->
		<uni-notice-bar showClose="true" showIcon="true" color="#87CEFF" scrollable="true" single="true"
			text="[通知] 欢迎使用我们的软件"></uni-notice-bar>

		<!-- 导航栏 -->
		<!-- <view class="cu-list grid solids-bottom col-4 no-border">
			<view
				class="cu-item"
				v-for="(item, index) in categories"
				:key="index"
				:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
				@click="goCategorieslist"
				:data-mid="item.mid"
			>
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.count != 0">
						<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view> -->

		<!-- 下半部分更多内容-->
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">基本功能</text>
				<text class="text-ABC text-blue">basic</text>
			</view>
			<!-- <view class="action" @click="goVideo"><text class="text-lg text-grey text-shadow">更多</text></view> -->
			<view class="action" @tap="NumSteps1"><text class="text-lg text-grey text-shadow">下一步</text></view>
		</view>

		<!-- 步骤条 -->
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :class="index==2?'err':''" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>


		<!-- 内容块部分 -->
		<view class="skill-sequence-panel-content-wrapper" :style="[{animation: 'show ' + 0.6+ 's 1'}]">

			<!--左边虚化-->
			<view class="hide-content-box hide-content-box-left"></view>
			<!--右边虚化-->
			<view class="hide-content-box hide-content-box-right"></view>

			<!-- 内容 -->
			<scroll-view scroll-x="true" class="kite-classify-scroll" :style="[{animationDelay: '0.2s'}]">
				<!-- 带循环 -->
				<view class="kite-classify-cell shadow" v-for="(item, index) in curriculum" :key="index"
					@click="goPages(index+1)">
					<view :class="'nav-li bg-index' + (index + 1)">
						<view class="nav-name">{{ item.name }}</view>
					</view>
					<view class="nav-content">{{ item.content }}</view>
					<view @click="goPages(index+1)" class="nav-btn shadow" :class="'bg-index' + (index + 1)">立即开始
					</view>
				</view>


			</scroll-view>
		</view>


	</view>
</template>

<script>
	import addTip from '../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue';
	export default {
		components: {
			addTip
		},
		data() {
			return {
				//当前步骤
				currentStep: 0,

				// 收藏小事讲
				tip: '点击「添加小程序」，下次访问更便捷',
				duration: 1,

				// 轮播图
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				bannerList: [{
						imageUrl: 'https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/yisheng.jpg'
					},
					{
						imageUrl: 'https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/yiyuan.jpg'
					}
				],

				numList: [{
						name: '病理参数'
					},
					{
						name: '事件管理'
					},
					{
						name: '事件报表'
					}
				],
				num: -1,

				// 首页导航区
				// categories: [
				// 	{
				// 		cuIcon: 'hotfill',
				// 		color: 'red',
				// 		badge: '优惠',
				// 		mid: '1',
				// 		name: '学习技术'
				// 	},
				// 	{
				// 		cuIcon: 'colorlens',
				// 		color: 'orange',
				// 		badge: 1,
				// 		mid: '2',
				// 		name: '需求定制'
				// 	},
				// 	{
				// 		cuIcon: 'goodsnewfill',
				// 		color: 'yellow',
				// 		badge: 12,
				// 		mid: '3',
				// 		name: '开源项目'
				// 	},
				// 	{
				// 		cuIcon: 'calendar',
				// 		color: 'cyan',
				// 		badge: 22,
				// 		mid: '4',
				// 		name: '文章资讯'
				// 	}
				// ],

				curriculum: [{
						name: '病理参数',
						content: '主要负责记录生理参数...',
					},
					{
						name: '事件管理',
						content: '主要负责记录各种病人的事件...',
					},
					{
						name: '事件报表',
						content: '可查询不同事件病人的事件情况...',
					}
				]
			}
		},
		onLoad() {

		},
		methods: {



			// 导航事件的处理
			// navItemClick(url) {
			// 	console.log('跳转', url)
			// 	uni.navigateTo({
			// 		url
			// 	})
			// },

			goPages(index) {
				if (index == 1) {
					console.log(1)
					// this.NumSteps(index)
					uni.navigateTo({
						url: '../parameter/parameter'
					})
				} else
				if (index == 2) {
					console.log(2)
					// this.NumSteps(index)
					uni.navigateTo({
						url: '../manage/manage'
					})
				} else
				if (index == 3) {
					console.log(3)
					// this.NumSteps(index)
					uni.navigateTo({
						url: '../report/report'
					})
				}
			},
			NumSteps(step) {
				if (step != null ) {
					this.num = step-1
					console.log('如果正处于当前第'+step+'步骤,则使用这个图片===>'+step)
				} 
				// else if (step == 2) {
				// 	this.num = 1
				// 	console.log('如果正处于当前第'+step+'步骤,则使用这个图片2===>'+step)
				// } else if (step == 3) {
				// 	this.num = 2
				// 	console.log('如果正处于当前第'+step+'步骤,则使用这个图片3===>'+step)
				// } 
				else if (step > this.num) {
					console.log('如果该步骤比当前步骤大 也就是还没到,则展示这个图片')
				} else {
					console.log('最后就是已经过了该步骤应该展示的图片')
				}
			},
			NumSteps2(num) {
				this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1
				console.log("第" + num + "点亮了")
			},
			NumSteps1() {
				this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1
			},
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}

	/*scroll-view外层*/
	.skill-sequence-panel-content-wrapper {
		position: relative;
		white-space: nowrap;
		padding: 10rpx 0 10rpx 10rpx;
	}

	/*左右渐变遮罩*/
	.hide-content-box {
		position: absolute;
		top: 0;
		height: 100%;
		width: 10px;
		z-index: 2;
	}

	.hide-content-box-left {
		left: 0;
		background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.hide-content-box-right {
		right: 0;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.kite-classify-scroll {
		width: 100%;
		height: 380rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.kite-classify-cell {
		display: inline-block;
		width: 266rpx;
		height: 370rpx;
		margin-right: 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
	}

	.nav-li {
		padding: 40rpx 30rpx;
		width: 100%;
		background-image: url(https://s1.ax1x.com/2020/06/27/NyU04x.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: '';
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: '';
		position: absolute;
		display: block;
		width: 100rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-content {
		width: 100%;
		padding: 15rpx;
		display: inline-block;
		overflow-wrap: break-word;
		white-space: normal;
	}

	.nav-btn {
		width: 200rpx;
		height: 60rpx;
		margin: 8rpx auto;
		text-align: center;
		line-height: 60rpx;
		border-radius: 10rpx;
	}

	.bg-index1 {
		background-color: #19cf8a;
		color: #fff;
	}

	.bg-index2 {
		background-color: #954ff6;
		color: #fff;
	}

	.bg-index3 {
		background-color: #5177ee;
		color: #fff;
	}

	.bg-index4 {
		background-color: #f49a02;
		color: #fff;
	}

	.bg-index5 {
		background-color: #ff4f94;
		color: #fff;
	}

	.bg-index6 {
		background-color: #7fd02b;
		color: #fff;
	}

	.item-name {
		margin-bottom: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.steps {
		width: 750rpx;
		height: 196rpx;
		background-color: #fff;
		padding: 40rpx;

		.out-box {
			display: flex;
			justify-content: space-between;

			.self-box {
				position: relative;
				width: 120rpx;
				height: 120rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

				view {
					width: 100rpx;
					height: 2rpx;
					background: #dedede;
					position: absolute;
					top: 30rpx;
					left: 100rpx;
				}

				image {
					width: 56rpx;
					height: 56rpx;
				}

				text {
					margin-top: 20rpx;
					font-size: 28rpx;
					color: #909399;
				}

				.currentFontColor {
					color: #409eff;
				}

				.currentLineColor {
					background-color: #409eff;
				}
			}
		}
	}
</style>
