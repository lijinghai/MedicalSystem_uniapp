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
		</view>


		<view>
			<!-- <scroll-view>
				
				
				<view v-for="item in findlist" :key="item.id">
					<view v-if="item.note === '餐饮事件'">
						<text>液体摄入量:{{item.total_capacity}}==>{{item.id}}===>{{item.event_time}}</text>
						<text>摄入液体类型:{{item.water_code}}(ml)==>{{item.id}}===>{{item.event_time}}</text>
					</view>
					<view v-if="item.note === '导尿事件'">
						<text>导尿量:{{item.total_capacity}}(ml)==>{{item.id}}===>{{item.event_time}}</text>
						<text>排尿前是否急迫或疼痛:{{item.is_pain}}==>{{item.id}}===>{{item.event_time}}</text>
						<text>漏尿状况:{{item.is_leak}}==>{{item.id}}===>{{item.event_time}}</text>
						<text>是否插管困难:{{item.is_difficult}}==>{{item.id}}===>{{item.event_time}}</text>
					</view>
					<view v-if="item.note === '特殊事件'">
						<text>自排/漏尿量:{{item.total_capacity}}(ml)==>{{item.id}}===>{{item.event_time}}</text>
					</view>
				</view>
			</scroll-view> -->

			<!-- <scroll-view>
				
				
				<view v-for="item in findlist" :key="item.id">
					<view v-if="item.note === '餐饮事件'">
						<text>液体摄入量:{{item.total_capacity}}</text>
						<text>摄入液体类型:{{item.water_code}}(ml)</text>
					</view>
					<view v-if="item.note === '导尿事件'">
						<text>导尿量:{{item.total_capacity}}(ml)</text>
						<text>排尿前是否急迫或疼痛:{{item.is_pain}}</text>
						<text>漏尿状况:{{item.is_leak}}</text>
						<text>是否插管困难:{{item.is_difficult}}</text>
					</view>
					<view v-if="item.note === '特殊事件'">
						<text>自排/漏尿量:{{item.total_capacity}}(ml)</text>
					</view>
				</view>
			</scroll-view> -->


		</view>




		<uni-section title="餐饮事件" type="line"></uni-section>
		<view>
			<uni-table border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">时间</uni-th>
					<!-- <uni-th align="center">导尿量(ml)</uni-th> -->
					<!-- <uni-th align="left">自排/导尿量(ml)</uni-th> -->
					<uni-th align="left">液体摄入量(喝水,ml)</uni-th>
					<uni-th align="center">摄入液体类型(水/咖啡/苏打水/啤酒等)</uni-th>
					<!-- <uni-th align="center">排尿前导尿急迫或疼痛(是/否)</uni-th> -->
					<!-- <uni-th align="left">漏尿状况(是/否)</uni-th> -->
					<!-- <uni-th align="left">是否插管困难(是/否)</uni-th> -->
				</uni-tr>

				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in findlist" :key="id">
					<uni-td v-if="item.note === '餐饮事件'">
						{{item.event_time}}
					</uni-td>
					<!-- <uni-td v-if="item.note === '导尿事件'">
						{{item.total_capacity}}
					</uni-td> -->
					<!-- <uni-td v-if="item.note === '特殊事件'">
						{{item.total_capacity}}
					</uni-td> -->
					<uni-td v-if="item.note === '餐饮事件'">
						{{item.total_capacity}}
					</uni-td>
					<uni-td v-if="item.note === '餐饮事件'">
						{{item.water_code}}
					</uni-td>
					<!-- <uni-td v-if="item.note === '导尿事件'">
						{{item.is_pain}}
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						{{item.is_leak}}
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						{{item.is_difficult}}
					</uni-td> -->

				</uni-tr>
				<!-- 	<uni-tr>
					<uni-td>2020-10-21</uni-td>
					<uni-td>HanMeiMei</uni-td>
					<uni-td>北京市海淀区</uni-td>
					<uni-td>北京市海淀区</uni-td>
					<uni-td>北京市海淀区</uni-td>
					<uni-td>北京市海淀区</uni-td>
					<uni-td>北京市海淀区</uni-td>
					<uni-td>北京市海淀区</uni-td>
				</uni-tr> -->


				<!-- <uni-tr>
		        <uni-td>2020-10-22</uni-td>
		        <uni-td>LiLei</uni-td>
		        <uni-td>北京市海淀区</uni-td>
		    </uni-tr>
		    <uni-tr>
		        <uni-td>2020-10-23</uni-td>
		        <uni-td>Danner</uni-td>
		        <uni-td>北京市海淀区</uni-td>
		    </uni-tr> -->

			</uni-table>

		</view>

		<uni-section title="导尿事件" type="line"></uni-section>
		<view>
			<uni-table border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">时间</uni-th>
					<uni-th align="center">导尿量(ml)</uni-th>
					<uni-th align="center">排尿前导尿急迫或疼痛(是/否)</uni-th>
					<uni-th align="left">漏尿状况(是/否)</uni-th>
					<uni-th align="left">是否插管困难(是/否)</uni-th>
				</uni-tr>

				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in findlist" :key="id">
					<uni-td v-if="item.note === '导尿事件'">
						{{item.event_time}}
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						{{item.total_capacity}}
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						<view v-if="item.is_pain === 0">
							否
						</view>
						<view v-if="item.is_pain === 1">
							是
						</view>
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						<view v-if="item.is_leak === 0">
							否
						</view>
						<view v-if="item.is_leak === 1">
							是
						</view>
					</uni-td>
					<uni-td v-if="item.note === '导尿事件'">
						<view v-if="item.is_difficult === 0">
							否
						</view>
						<view v-if="item.is_difficult === 1">
							是
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>

		<uni-section title="特殊事件" type="line"></uni-section>
		<view>
			<uni-table border stripe emptyText="暂无更多数据">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">时间</uni-th>
					<uni-th align="left">自排/导尿量(ml)</uni-th>
				</uni-tr>

				<!-- 表格数据行 -->
				<uni-tr v-for="(item,index) in findlist" :key="id">
					<uni-td v-if="item.note === '特殊事件'">
						{{item.event_time}}
					</uni-td>
					<uni-td v-if="item.note === '特殊事件'">
						{{item.total_capacity}}
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>


		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="getFindList"
				@buttonClick="getFindList" />
		</view>

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
				findlist: [],
				buttonGroup: [{
					text: '查询',
					backgroundColor: '#0392ff',
					color: '#fff'
				}]
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

				this.$myRequest({
					url: '/events/time?limit=19&page=1&sort=1&time1=' + this.datetimerange[0] + '&time2=' + this
						.datetimerange[1],
					method: 'GET',
					data: _this.findlist, // 发送的数据

				}).then(res => {
					console.log(res)
					// success({ // 请求成功
					// 	data
					// })
					
						if (res.data.code === 20000) { // 获取数据成功
							console.log("成功")
							console.log(res)
							console.log(res.data.code)
							console.log(res.data)
							console.log(res.data.data.items)
							_this.findlist = res.data.data.items
							uni.showModal({
								title: '查询成功！！'
							})
						} else { // 获取数据失败
							console.log("失败")
							uni.showModal({
								title: '请按要求选择时间！！'
							})
						}
				})
			},

			// uni.request({
			// 	// const res = await this.$myRequest({
			// 	// 路径
			// 	url: 'http://localhost:8091/events/time?limit=19&page=1&sort=1&time1=' + this.datetimerange[
			// 		0] + '&time2=' + this.datetimerange[1],
			// 	// }),
			// 	// 请求方法
			// 	method: 'GET',
			// 	data: _this.findlist, // 发送的数据
			// 	success({ // 请求成功
			// 		data
			// 	}) {
			// 		if (data.code == 20000) { // 获取数据成功
			// 			console.log("成功")
			// 			console.log(data)
			// 			console.log(data.code)
			// 			console.log(data.data)
			// 			console.log(data.data.items)
			// 			_this.findlist = data.data.items

			// 			uni.showModal({
			// 				title: '查询成功！！'
			// 			})
			// 		} else { // 获取数据失败
			// 			console.log("失败")
			// 			uni.showModal({
			// 				title: '请按要求选择时间！！'
			// 			})
			// 		}
			// 	},
			// 	fail: (res) => {
			// 		console.log("错误")
			// 	}

			// 	})

			// },

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

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
