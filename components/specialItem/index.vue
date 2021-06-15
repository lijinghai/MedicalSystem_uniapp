<!-- 特殊事件组件
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 13
 -->
<template>
	<view>
		<view class="new_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image src="../../static/img/special.png"></image>
			<view class="right">
				<view>请点击填写特殊事件</view>
				<view class="info">
					<text>填写的时间:{{item.event_time | formatDate}}</text>
				</view>
			</view>
		</view>
	</view>


</template>

<script>
	export default {
		// 接收外界传来的数据
		props: ['list'],
		// 增加时间过滤器
		filters: {
			formatDate(date) {
				if(date != null ){
					console.log(date)
					const nDate = new Date(date)
					console.log(nDate)
					const year = nDate.getFullYear().toString().padStart(2,0)
					const month = nDate.getMonth().toString().padStart(2,0)
					const day = nDate.getDay().toString().padStart(2,0)
					const hours = nDate.getHours().toString().padStart(2,0)
					const minutes = nDate.getMinutes().toString().padStart(2,0)
					return year +'-' + month +'-'+ day+' '+hours+':'+minutes
				}else{
					return '（请点击填写数据）'
				}
			}
		},
		methods: {
			navigator(id) {
				// 调用父组件的方法
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.new_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $search-color;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
			}

			.info {
				font-size: 26rpx;

				text:nth-child(2) {
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
