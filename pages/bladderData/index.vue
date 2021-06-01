<!-- 膀胱动力学参数
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 1
 -->
<template>
	<view>
		<scroll-view>
			<bladderItem  :list="findlist"></bladderItem>
		</scroll-view>
	</view>
</template>

<script>
	import bladderItem from '../../components/bladderItem/index.vue'
	export default {
		data() {
			return {
				findlist:[]
			}
		},
		methods: {
			async getFindList() {
				const res = await this.$myRequest({
					url: '/bladderData?id=1&limit=1&page=1&sort=1'
				})
				console.log(res)
				this.findlist = res.data.data.items
			}
		},
		// 注册组件
		components: {"bladderItem":bladderItem},
		onLoad() {
			this.getFindList()
		}
	}
</script>

<style>

</style>
