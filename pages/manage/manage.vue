<!-- 事件管理
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		
<!-- 		<uni-section title="一般用法" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
		</view>
		<uni-section title="自由控制开始/暂停" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :start="start" :day="1" :hour="1" :minute="12" :second="40" />
		</view>

		<uni-section title="文字分隔符" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :minute="30" :second="0" :show-colon="false" />
		</view>
		<uni-section title="修改颜色" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF"
				border-color="#007AFF" />
		</view> -->
		
		
	<!-- 	<uni-section title="倒计时回调事件" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :show-day="false" :second="5" @timeup="timeup" />
		</view> -->
		
		 <!-- <button type="primary" @click="close">关闭</button> -->
		
		
<!-- 		<uni-section title="动态赋值" type="line"></uni-section>
		<view class="example-body">
			<uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" />
		</view> -->


	</view>
</template>

<script>
	// const innerAudioContext = uni.createInnerAudioContext();
	// innerAudioContext.autoplay = true;
	export default {
		components: {},
		data() {
			return {
				testHour: 0,
				testMinute: 0,
				testSecond: 0,
				start: false
			}
		},
		mounted() {
			// setTimeout(() => {
			// 	console.log(时间已经设置);
			// 	this.testHour = 1
			// 	this.testMinute = 1
			// 	this.testSecond = 0
			// 	this.start = true
			// }, 3000)
			setTimeout(() => {
				this.start = false
			}, 10000)
		},
		methods: {

			// timeup() {
			// 	uni.showToast({
			// 		title: '上厕所时间到'
			// 	});
			// 	innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			// 	innerAudioContext.onPlay(() => {
			// 	  console.log('开始播放');
			// 	});
			// 	innerAudioContext.onError((res) => {
			// 	  console.log(res.errMsg);
			// 	  console.log(res.errCode);
			// 	});
			// },
			// close(){
			// 	console.log('停止播放');
			// 	innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
			// 	innerAudioContext.onStop(() => {
			// 	  console.log('停止播放');
			// 	});
			// }
		},
		onLoad() {
		
		}
	}
</script>

<style lang="scss">
	// @import '@/common/uni-nvue.scss';

	// .example-body {
	// 	padding: 10px;
	// }
</style>
