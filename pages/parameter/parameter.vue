<!-- 病理参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
<view>
	<cu-custom bgColor="bg-gradual-blue" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">病理参数</block>
	</cu-custom>
	<!-- <view class="pics">
	
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''"
				v-for="(item,index) in cates" :key="item.id">
				{{item.ctitle}}
			</view>
		</scroll-view>
	
	</view> -->
	
	
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/iu.jpg" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/bladderData/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements1" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.desc}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
				
				<navigator hover-class="none" :url="'/pages/urineData/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements2" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.desc}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
				
				<navigator hover-class="none" :url="'/pages/renalData/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements3" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.desc}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
				
				<navigator hover-class="none" :url="'/pages/ureteralData/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements4" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.desc}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				elements1: [
					{
						title: '膀胱动力',
						name: 'index',
						desc: '膀胱动力学资料',
						color: 'cyan',
						cuIcon: 'newsfill',
						auth: 'ac'
					}
				],
				elements2: [
					{
						title: '尿常规',
						name: 'index',
						desc: '尿常规资料',
						color: 'red',
						cuIcon: 'newsfill',
						auth: 'ac'
					}
				],
				elements3: [
					{
						title: '肾功能',
						name: 'index',
						desc: '肾功能资料',
						color: 'orange',
						cuIcon: 'newsfill',
						auth: 'ac'
					}
				],
				elements4: [
					{
						title: '输尿管B超',
						name: 'index',
						desc: '输尿管B超数据资料',
						color: 'pink',
						cuIcon: 'newsfill',
						auth: 'ac'
					}
				],
				
				
				
				// cates: [{
				// 		id: 1,
				// 		ctitle: '膀胱动力学资料'
				// 	},
				// 	{
				// 		id: 2,
				// 		ctitle: '尿常规资料'
				// 	},
				// 	{
				// 		id: 3,
				// 		ctitle: '肾功能资料'
				// 	},
				// 	{
				// 		id: 4,
				// 		ctitle: '输尿管B超数据资料'
				// 	}
				// ],
				// active: 0,
				// secondData: []
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
			// this.getPicsCate()

		}
	}
</script>

<style lang="scss">
	// page {
	// 	height: 100%;
	// }

	// .pics {
	// 	height: 100%;
	// 	// 一行显示
	// 	display: flex;

	// 	.left {
	// 		width: 100%;
	// 		height: 100%;
	// 		border-right: 1px solid #eee;

	// 		view {
	// 			height: 60px;
	// 			line-height: 60px;
	// 			color: #333;
	// 			text-align: center;
	// 			font-size: 30rpx;
	// 			border-top: 1px solid #eee;
	// 		}

	// 		// 选中颜色
	// 		.active {
	// 			background: $search-color;
	// 			color: #fff;
	// 		}
	// 	}

	// 	.right {
	// 		height: 100%;
	// 		width: 520rpx;
	// 		margin: 10rpx auto;

	// 		.item {
	// 			image {
	// 				width: 520rpx;
	// 				height: 520rpx;
	// 				border-radius: 5px;
	// 			}

	// 			.lname {
	// 				font-size: 35rpx;
	// 				color: $search-color;
	// 				line-height: 80rpx;

	// 				text:nth-child(2) {
	// 					color: #ccc;
	// 					font-size: 28rpx;
	// 					// text-decoration: line-through;
	// 					margin-left: 20rpx;
	// 				}
	// 			}

	// 			.box2 {
	// 				padding: 0 10px;
	// 				font-size: 32rpx;
	// 				line-height: 70rpx;
	// 			}

	// 			.line {
	// 				height: 10rpx;
	// 				width: 750rpx;
	// 				background: #eee;
	// 			}

	// 		}
	// 	}
	// }
</style>
