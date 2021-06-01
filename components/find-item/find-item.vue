<template>
	<!-- 模板化资讯列表 -->
	<view>
		<view class="new_item" @click="navigator(item.fl_id)" v-for="item in list" :key="item.fl_id">
			<image :src="item.fl_imgurl"></image>
			<view class="right">
				<view class="title">
					{{item.fl_imgdesc}}
				</view>
				<view class="info">
					<!-- <text>发表时间:{{item.addTime | formatDate}}</text> -->
					<text>发表时间:{{item.fl_createTime}}</text>
					<text>浏览次数:{{item.f_click}}</text>
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
			navigator (fl_id) {
				// 调用父组件的方法
				this.$emit('itemClick',fl_id)
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
