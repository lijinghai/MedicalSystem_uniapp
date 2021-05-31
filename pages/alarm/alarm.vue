<template>
	<view class="pics">
		<!-- 可滚动区域 -->
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">
				{{item.ctitle}}
			</view>
		</scroll-view>
		
		<!-- 右侧信息页显示 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.g_id">
				<image @click="previewImg(item.d_imgurl)" :src="item.d_imgurl"></image>
				<view class="lname">
					<text>{{item.imgname}}</text>
					<text>{{item.status}}</text>
				</view>
				<view class="goods_name">{{item.imgdesc}}</view>
				<view class="line"></view>
				<view class="box2">
					<view>丢失时间:{{item.create_time}}</view>
					<view>联系人:{{item.lostname}}</view>
					<view @click="phone">联系方式:{{item.contact}}(点击拨打)</view>
				</view>
				<view class="line"></view>
			</view>
			<text v-if="secondData.length == 0">暂无数据</text>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '该手机号'
				})
			},
			async getPicsCate () {
				const res = await this.$myRequest({
					url:'/category/all?limit=9999&page=1&sort=1'
				})
				console.log(res)
				this.cates = res.data.data.items
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle (index,g_id) {
				console.log("id:"+g_id)
				this.active = index
				// 获取右侧的数据
				const res = await this.$myRequest ({
					url: '/category?limit=9999&page=1&sort=&id='+g_id
				})
				console.log(res)
				this.secondData = res.data.data.items
			},
			previewImg(current) {
				const urls = this.secondData.map(item=>{
					return item.d_imgurl
				})
				console.log(urls)
				// 预览图片
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
			
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	// 一行显示
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		// 选中颜色
		.active {
			background: $search-color;
			color: #fff;
		}
	}
	.right {
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item {
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			.lname {
				font-size: 35rpx;
				color: $search-color;
				line-height: 80rpx;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					// text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.box2 {
				padding: 0 10px;
				font-size: 32rpx;
				line-height: 70rpx;
			}
			.line {
					height: 10rpx;
					width: 750rpx;
					background: #eee;
				}
		
		}
	}
}
</style>
