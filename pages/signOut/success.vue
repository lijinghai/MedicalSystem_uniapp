<!-- 用户退出成功页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">结果</block>
			</cu-custom>
			<view class="solids-bottom padding-xs flex align-center">
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xsl padding">
						<text class=" cuIcon-roundcheckfill text-green"></text>
					</view>
					<!-- <view class="padding">{{item.msg}}</view> -->
					<view class="padding">{{item.msg}}</view>
				</view>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green shadow-blur round lg" @tap="goback()">返回主页
				</button>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				item: {
					msg: '退出成功'
				},
			}
		},

		methods: {
			// 退出
			loginOut: function() {
				// 发送info的请求
				this.$myRequest({
					url: '/pcuser/logout',
					method: 'POST',
					data: uni.getStorageSync('token'), // 发送的数据
				})
			},

			goback() {
				uni.navigateTo({
					url: '/pages/login/login_v2'
				})
			}
		},

		// 清除缓存
		onLoad: function(option) {
			console.log("onShow")
			uni.clearStorageSync()
			// loginOut().then(res => {
			// 	uni.clearStorageSync()
			// })
		},
	}
</script>

<style>
</style>
