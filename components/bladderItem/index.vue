<!-- 模板化资讯列表 
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		<view class="new_item" @click="navigator(item.id)" v-for="item in list" :key="item.fl_id">
			<image src="../../static/img/bladder.png"></image>
			<view class="right">
				<view class="title">
					第:{{item.id}}条数据
				</view>
				<view class="title">
					最大膀胱测压容量:{{item.bladderCapacity}}(ml)
				</view>
				<view class="info">
					排尿期最大逼尿肌压:{{item.bladderDetrusorPressure}}(cmH2O)
				</view>
				<view class="title">
					膀胱顺应性: {{item.bladderCompliance}}(ml/cmH2O)
				</view>
			</view>
		</view>
	</view>
	
	
</template>

<script>
	export default {
		// 接收外界传来的数据
		props:['list'],
		// 增加时间过滤器
		filters: {
			formatDate (date) {
				console.log(date)
				const nDate = new Date(date)
				console.log(nDate)
				const year = nDate.getFullYear().toString().padStart(2,0)
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year +'-' + month +'-'+ day
			}
		},
		methods:{
			navigator (id) {
				// 调用父组件的方法
				this.$emit('itemClick',id)
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
				text:nth-child(2){
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
