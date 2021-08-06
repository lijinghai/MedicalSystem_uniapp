<!-- 用户详情页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">用户详情</block>
				<view slot="right" @tap="rightClick">编辑</view>
			</cu-custom>

			<!-- list列表 -->
			<view class="cu-list menu">

				<!-- 头像 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">头像</text>
					</view>
					<view class="action">
						<view class="cu-avatar round sm" :style="{backgroundImage: 'url(' + info.avatar + ')'}"></view>
					</view>
				</view>

				<!-- 姓名 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">姓名</text>
					</view>
					<view class="action">
						<text class="text-grey">{{info.name}}</text>
					</view>
				</view>

				<!-- 性别 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">性别</text>
					</view>
					<view class="action">
						<text class="text-grey">{{info.sex | formatSex}}</text>
						<!-- <text class="text-grey"> -->
						<!-- <view class="info.sex%2==0?'男':'女'"></view> -->
						<!-- </text> -->
					</view>
				</view>

				<!-- 生日 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">账号</text>
					</view>
					<view class="action">
						<text class="text-grey">{{info.account}}</text>
					</view>
				</view>
			</view>

			<!-- 对外信息展示 -->
			<!-- 	<view class="cu-list menu">
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">用户名</text>
					</view>
					<view class="action">
						<text
							class="text-grey">{{info.name}}</text>
					</view>
				</view>
			</view> -->



			<view class="cu-list menu">

				<!-- 手机 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">注册的手机</text>
					</view>
					<view class="action">
						<text class="text-grey">{{info.mobile}}</text>
					</view>
				</view>

				<!-- 邮箱 -->
				<view class="cu-item animation-slide-bottom" :style="[{animation: 'show ' + 0.4+ 's 1'}]">
					<view class="content">
						<text class="text-grey">邮箱</text>
					</view>
					<view class="action">
						<text class="text-grey">{{info.email}}</text>
					</view>
				</view>
			</view>



		</scroll-view>
	</view>
</template>

<script>
	// import api from '@/api/api.js'
	export default {
		data() {
			return {
				// 获取用户名称和头像
				info: [],
				// 获取用户id
				infoid: {
					id: ''
				},
				personalMsg: {
					avatar: '',
					realname: '',
					username: '',
					sex: 1,
					birthday: new Date(),
					orgCode: '',
					workNo: '',
					status: 1,
					phone: '',
					telephone: '',
					email: '',
					post: '',
					departIds: '',
					identity: '',
				},
				userUrl: '/sys/user/queryById',
				positionUrl: '/sys/position/list',
				departUrl: '/sys/user/userDepartList'
			};
		},
		onLoad() {
			// this.loadinfo()
			this.getinfoid()
		},
	
		methods: {

			// 获取用户姓名和头像的数据
			// async getInfo(Myid) {
			// 	const res = await this.$myRequest({
			// 		// url: '/uniappuser/info?token=' + uni.getStorageSync('token')
			// 		url: '/uniappuser/id?limit=1&page=1&sort=1&id='+ Myid
			// 	})
			// 	console.log("用户详情信息")
			// 	console.log(res)
			// 	// this.info = res.data.data.items[0]
			// 	this.info = res.data.data
			// 	console.log(res.data.data)
			// 	if (res.data.data != null) {
			// 		let result = res.data.data
			// 		this.info.name = result.name == null ? '用户' : result.name
			// 		this.info.account = result.account == null ? '无' : result.account
			// 		this.info.mobile = result.mobile == null ? '无' : result.mobile
			// 		this.info.email = result.email == null ? '无' : result.email
			// 	}
			// },

			//获取用户id
			async getinfoid(){
				const res = await this.$myRequest({
					// url: '/uniappuser/id?limit=1&page=1&sort=1&id='+ this.infoid.id
					url: '/uniappuser/info?token=' + uni.getStorageSync('token')
				})
				console.log("用户信息")
				console.log(res)
				// this.info = res.data.data.items[0]
				this.infoid = res.data.data
				console.log("用户id==>"+this.infoid.id)
				if(this.infoid.id != null) {
					console.log("进来了")
					const res1 = await this.$myRequest({
						url: '/uniappuser/id?limit=1&page=1&sort=1&id='+ this.infoid.id
					})
					console.log("用户详情信息")
					console.log(res1)
					this.info = res1.data.data.items[0]
					console.log(res1.data.data.items[0])
					if (res1.data.data.items[0] != null) {
						let result = res1.data.data.items[0]
						this.info.name = result.name == null ? '无' : result.name
						// this.info.sex = result.sex === 1 ? '男' : '女'
						this.info.birthday = result.birthday == null ? '无' : result.birthday
						this.info.account = result.account == null ? '无' : result.account
						this.info.mobile = result.mobile == null ? '无' : result.mobile
						this.info.email = result.email == null ? '无' : result.email
					}
				}
			},

			getSubStringText(text, len) {
				if (!text || text.length == 0) {
					return ''
				}
				if (text.length < len) {
					return text;
				}
				return text.substr(0, len) + "..."
			},
			rightClick() {
				// this.$Router.push({name:'useredit', params:this.personalMsg})
				/* uni.navigateTo({
				    url: '/pages/user/useredit?item='+item
				}); */

				// -----------------------------
				uni.navigateTo({
					url: '/pages/setting/useredit'
				});
			},
			loadinfo() {
				this.$http.get(this.userUrl, {
					params: {
						id: this.$store.getters.userid
					}
				}).then(res => {
					console.log("用户", res)
					if (res.data.success) {
						let result = res.data.data
						if (result.avatar && result.avatar.length > 0)
							this.personalMsg.avatar = api.getFileAccessHttpUrl(result.avatar)
						this.personalMsg.realname = result.realname
						this.info.name = result.name
						this.personalMsg.post = result.post
						this.info.sex = result.sex === 1 ? '男' : '女'
						this.info.birthday = result.birthday == null ? '无' : result.birthday
						this.personalMsg.departIds = result.departIds
						this.personalMsg.workNo = result.workNo
						this.personalMsg.phone = result.phone
						this.personalMsg.telephone = result.telephone == null ? '无' : result.telephone
						this.personalMsg.email = result.email
						this.personalMsg.post = result.post
						this.personalMsg.identity = result.identity === 1 ? '普通成员' : '上级'
						this.personalMsg.status = result.status === 1 ? '正常' : '冻结'
						this.personalMsg.orgCode = result.orgCode
					}
				}).catch(e => {
					console.log("请求错误", e)
				})

				this.$http.get(this.departUrl, {
					params: {
						userId: this.$store.getters.userid
					}
				}).then(res => {
					if (res.success) {
						for (let item of res.result) {
							this.personalMsg.orgCode = item.title
							this.personalMsg.departIds = item.title
						}
					}
				}).catch(e => {
					console.log("请求错误", e)
				})

				this.$http.get(this.positionUrl).then(res => {
					if (res.success) {
						let postArr = res.result.records
						for (let item of postArr) {
							if (this.personalMsg.post == item.code) {
								this.personalMsg.post = item.name
							}
						}
					}
				}).catch(e => {
					console.log("请求错误", e)
				})
			},
		},

		// 格式化
		filters: {
			// 格式化性别
			formatSex: function(str) {
				const sexEnum = {
					"1": "男",
					"2": "女",
				}
				return sexEnum[str];
			}
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
