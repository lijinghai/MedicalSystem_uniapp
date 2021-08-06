<!-- 用户退出页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template name="user">
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/iu.jpg" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/signOut/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				elements: [
					{
						title: '返回',
						name: 'back',
						color: 'orange',
						cuIcon: 'back',
						auth: 'ac'
					},
					{
						title: '退出',
						name: 'success',
						color: 'cyan',
						cuIcon: 'newsfill',
						auth: 'ac'
					}
				]
			}
		},
		methods: {}
	}
</script>

<style>

</style>
