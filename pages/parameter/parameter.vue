
<template>
	<view>
		<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			<picker-view-column>
				<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
	export default {
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			let days = []
			const day = date.getDate()

			for (let i = year; i <= date.getFullYear() + 10; i++) {
				years.push(i)
			}
			for (let i = date.getMonth() + 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				years,
				year,
				months,
				month,
				days,
				day,
				value: [0, 0, day - 1],
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
				visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
			}
		},
		methods: {
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.clearMonth()
				this.month = this.months[val[1]]
				this.isDayNum()
				this.day = this.days[val[2]]
				let timeDate = [
					this.year,
					this.month,
					this.day
				]
				this.$emit("toTimeDate", timeDate)
			},
			//判断天数
			isDayNum() {
				if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
					this.days = []
					for (let i = 1; i <= 30; i++) {
						this.days.push(i)
					}
					this.clearDay()
				} else if (this.month === 2) {
					if (this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0) {
						this.days = []
						for (let i = 1; i <= 29; i++) {
							this.days.push(i)
						}
					} else {
						this.days = []
						for (let i = 1; i <= 28; i++) {
							this.days.push(i)
						}
					}
					this.clearDay()
				} else {
					this.days = []
					for (let i = 1; i <= 31; i++) {
						this.days.push(i)
					}
				}
			},
			// 当前月去掉之前的天数
			clearDay() {
				if (this.month == new Date().getMonth() + 1) {
					this.days = this.days.slice(new Date().getDate() + 1)
				}
			},
			//判断月份
			clearMonth() {
				if (this.year === new Date().getFullYear()) {
					this.months = []
					for (let i = new Date().getMonth() + 1; i <= 12; i++) {
						this.months.push(i)
					}
				} else {
					this.months = []
					for (let i = 1; i <= 12; i++) {
						this.months.push(i)
					}
				}
			}
		}
	}
</script>

<style>
	picker-view {
		width: 100%;
		height: 600rpx;
		margin-top: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}
</style>

