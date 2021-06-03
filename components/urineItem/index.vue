<!-- 尿常规组件
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 3
 -->
<template>
	<view>
		<view class="new_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image src="../../static/img/urine.png"></image>
			<view class="right">
				<view class="title">
					第:{{item.id}}条数据
				</view>
				<view class="title">
					尿白细胞:{{item.leu}}
				</view>
				<view class="info">
					亚硝酸盐:{{item.nit}}
				</view>
				<view class="title">
					尿蛋白: {{item.pro}}
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

