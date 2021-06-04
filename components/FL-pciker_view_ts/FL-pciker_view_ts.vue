<template>
	<view class="box">
		<view class="uni-padding-wrap" @click="change">
			<view class="uni-title">{{year}}-{{month}}-{{day}} {{hour}}:{{minute}}</view>
		</view>
		<view class="mask" :class="{'show':showPicker}" @tap="maskShow" @touchmove.stop.prevent catchtouchmove="true"></view>
		<view class="popop" :class="{'show':showPicker}">
			<view class="picker_head" @touchmove.stop.prevent catchtouchmove="true">
				<view class="" @tap="pickerClose">
					取消
				</view>
				<view class="" @tap="pickerConfirm">
					确定
				</view>
			</view>
			<view class="picker_view">
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
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in minutes" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: 'testCom',
		// 开始年份
		props: {
			beginYear: {
				type: [String, Number],
				default () {
					return '2010'
				}
			},
			//结束年份
			endYear: {
				type: [String, Number],
				default () {
					return '2050'
				}
			},

		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			const hours = []
			const hour = date.getHours()
			const minutes = []
			const minute = date.getMinutes()
			// 当前年计算  
			const nowYear = date.getFullYear() - this.beginYear

			for (let i = this.beginYear; i <= this.endYear; i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			for (let i = 1; i <= 24; i++) {
				hours.push(i)
			}
			for (let i = 1; i <= 60; i++) {
				minutes.push(i)
			}

			return {
				years,
				year,
				months,
				month,
				days,
				day,
				hour,
				hours,
				minutes,
				minute,
				nowYear,
				value: [nowYear, month - 1, day - 1, hour - 1, minute - 1],
				visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				selectArr: [],
				showPicker: false,
				selectRes: ''
			};
		},

		methods: {
			// 显示picker
			change() {
				this.showPicker = true;
				// 防止第一次点击无返回值
				this.selectRes = `${this.year+'-'+this.month+'-'+this.day+' '+this.hour+':'+this.minute}`;
			},
			bindChange: function(e) {
				const val = e.detail.value
				// picker 绑定数值
				let year = this.years[val[0]]
				let month = this.months[val[1]]
				let day = this.days[val[2]]
				let hour = this.hours[val[3]]
				let minute = this.minutes[val[4]]
				// 页面显示数值
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
				this.hour = this.hours[val[3]]
				this.minute = this.minutes[val[4]]

				// 返回时间
				this.selectRes = `${this.year+'-'+this.month+'-'+this.day+' '+this.hour+':'+this.minute}`;
			},
			pickerClose() { //日期时间取消
				this.showPicker = false;
			},
			pickerConfirm(e) { //日期时间确定
				this.$emit("confirm", {
					selectRes: this.selectRes
				});
				this.showPicker = false;
			},
			maskShow() { //日期时间的遮罩
				this.showPicker = false;
			}
		}
	}
</script>

<style lang="scss">
	.uni-title{
		    position: absolute;
		    left: 2px;
		    top: -12px;
	}
	.box {
		position: relative;
		z-index: 888;
	}

	.mask {
		position: fixed;
		z-index: 999;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease;

		&.show {
			visibility: visible;
			opacity: 1;
		}
	}

	.popop {
		width: 100%;
		min-height: 200rpx;
		background-color: #808080;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 1999;

		&.show {
			transform: translateY(0);
		}

		.picker_head {
			display: flex;
			align-items: center;
			padding: 0 30upx;
			height: 44px;
			background-color: #fff;
			position: relative;
			text-align: center;
			font-size: 15px;
			justify-content: space-between;

			&:after {
				content: ' ';
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				height: 1px;
				border-bottom: 1px solid #e5e5e5;
				color: #e5e5e5;
				transform-origin: 0 100%;
				transform: scaleY(0.5);
			}
		}


		.picker_view {
			width: 100%;
			height: 200px;
			overflow: hidden;
			background-color: rgba(255, 255, 255, 1);
			z-index: 666;

			picker-view {
				height: 100%;
			}

			.item {
				text-align: center;
				width: 100%;
				line-height: 88upx;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 30upx;
			}
		}
	}
</style>
