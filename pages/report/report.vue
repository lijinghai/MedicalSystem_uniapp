<!-- 事件报表
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 6 15
 -->
<template>
	<view class="page">


		<!-- <uni-section :title="'您选择的时间为：' + '[' + datetimerange + ']' " type="line"></uni-section> -->
		<uni-section title="请选择您要查询的时间" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" start="2000-3-20 12:00:00"
				end="2024-3-20 12:00:00" rangeSeparator="至" />
				
				
				<view v-for="item in findlist" :key="item.id">
					<text>{{item.id}}</text>
				</view>
		</view>
		
		

		<button @click="getFindList">查询</button>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				// format: true
			})
			return {
				datetimerange: ['2000-03-20 20:10:10', currentDate],
				findlist: []
			}
		},

		watch: {
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange[0]);
				console.log('范围选:', this.datetimerange[1]);
			}
		},

		methods: {
			getFindList() {
				const _this = this;
				uni.request({
					// const res = await this.$myRequest({
					// 路径
					url: 'http://localhost:8091/events/time?limit=19&page=1&sort=1&time1=' + this.datetimerange[0] + '&time2=' + this.datetimerange[1],
					// }),
					// 请求方法
					method: 'GET',
					data: _this.findlist, // 发送的数据
					success({ // 请求成功
						data
					}) 
					{
						if (data.code == 20000) { // 获取数据成功
							console.log("成功")
							console.log(data)
							console.log(data.code)
							console.log(data.data)
							console.log(data.data.items)
							// uni.navigateTo({
							// 	url: '../manage/manage'
							// })
							_this.findlist = data.data.items
							
							uni.showModal({
								title: '查询成功！！'
							})
						} else { // 获取数据失败
							console.log("失败")
							uni.showModal({
								title: '请按要求选择时间！！'
							})
						}
					},
					fail: (res) => {
						console.log("错误")
					}
					
				})
			},

			// 获取当前时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				let hours = date.getHours()
				let minutes = date.getMinutes();
				let seconds = date.getSeconds();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			}
		},
		onLoad() {
			// this.getFindList()
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
</style>
