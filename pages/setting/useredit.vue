<!-- 用户详情编辑页面
@author: lijing
@email: lijinghailjh@163.com
@Date: 2021 7 30
 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">编辑资料</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="请输入姓名" name="input" v-model="info.name"></input>
			</view>
			<!-- <view class="cu-form-group">
				<view class="title">用户名</view>
				<input placeholder="用户名" name="input" v-model="myFormData.username" disabled></input>
			</view> -->
			<!-- 		<view class="cu-form-group">
				<view class="title">头像</view>
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red radius" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view> -->

			<view class="cu-form-group margin-top">
				<view class="title">性别</view>
				<switch class='switch-sex' @change="SwitchC" :class="switchC?'checked':''"
					:checked="switchC?true:false"></switch>
			</view>



			<view class="cu-form-group margin-top">
				<view class="title">手机号码</view>
				<input placeholder="输入手机号码" name="input" v-model="info.mobile"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input placeholder="输入邮箱" name="input" v-model="info.email"></input>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue lg" @click="onSubmit">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 获取用户id
				infoid: [],
				// userId: '',
				info: [],
				index: -1,
				switchC: true,
				imgList: [],
				uploadUrl: "/sys/common/upload",
				myFormData: {
					avatar: '',
					realname: '',
					username: '',
					sex: 1,
					birthday: '',
					orgCode: '',
					workNo: '',
					phone: '',
					email: '',
					id: '',
				},
			};
		},
		onLoad: function(option) {
			this.getInfo()
			// console.log("this.$Route.query",this.$Route.query);
			// let query=this.$Route.query
			// if(query){
			// 	this.info=query;
			// 	if(this.info.sex=='女'){
			// 	  this.switchC = false
			// 	}else if(this.info.sex=='男'){
			// 	  this.switchC = true
			// 	}
			// 	if(this.info.avatar){
			// 	  this.imgList=[this.info.avatar]
			// 	}
			// if(!this.myFormData.birthday){
			//   this.myFormData.birthday= '无'
			// }
			// if(this.myFormData.identity=='普通成员'){
			//   this.myFormData.identity = 1
			// }else if(this.myFormData.identity=='上级'){
			//   this.myFormData.identity = 2
			// }
			// if(this.myFormData.status=='正常'){
			//   this.myFormData.status = 1
			// }else if(this.myFormData.status=='冻结'){
			//   this.myFormData.status = 2
			// }
			// this.Avatar=this.info.avatar

			// 	Object.keys(this.myFormData).map(key=>{
			// 	  if(this.myFormData[key]=='无'){
			// 		this.myFormData[key] = ''
			// 	  }
			// 	})
			// 	console.log("this.myFormData",this.myFormData)
			// }
		},
		methods: {
			onSubmit() {
				let myForm = this.info
				let checkPhone = new RegExp(/^[1]([3-9])[0-9]{9}$/);
				let checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
				console.log("myForm", myForm)
				if (!myForm.mobile || myForm.mobile.length == 0) {
					this.$tip.alert('请输入手机号');
					return false
				}
				if (!checkPhone.test(myForm.mobile)) {
					this.$tip.alert('请输入正确的手机号');
					return false
				}
				if (!checkEmail.test(myForm.email)) {
					this.$tip.alert('请输入正确的邮箱地址');
					return false
				}
				//  let loginParams = {
				//  	mobile: this.info.mobile,
				//  	emial: this.info.email,
				// name: this.info.name,
				// sex: this.info.sex
				//  }
				const _this = this // 获取此时的this为一个常量，防止下面请求回调改变出错
				console.log("表单提交")
				// 提交跳转
				this.$myRequest({
					url: '/uniappuser',
					method: 'Put',
					data: _this.info, // 发送的数据

				}).then((res) => {
					console.log(res)
					this.loading = false;
					if (res.data.code === 20000) { // 获取数据成功
						console.log("成功")

						uni.switchTab({
							url: '../people/people'
						})
						this.$tip.success('修改成功!')
					} else if (res.data.code === 500) { // 获取数据失败
						console.log("失败")
						this.loading = false;
						this.$tip.alert(res.data.message);
					}
				}).catch((err) => {
					let msg = "请求出现错误，请稍后再试"
					this.loading = false;
					this.$tip.alert(msg);
				}).finally(() => {
					this.loading = false;
				})
				// this.myFormData.id = this.$store.getters.userid
				// if(this.switchC){
				// 	this.myFormData.sex=1
				// }else{
				// 	this.myFormData.sex=2
				// }
				// console.log('myform',this.myFormData)
				// this.$tip.loading();
				// this.$http.put('/sys/user/appEdit',this.myFormData).then(res=>{
				// 	console.log(res)
				// 	this.$tip.loaded();
				// 	if (res.data.success){
				// 		this.$tip.toast('提交成功')
				// 		this.$Router.replace({name:'userdetail'})
				// 		/* uni.navigateTo({
				// 			url: '/pages/user/userdetail'
				// 		}) */
				// 	}
				// }).catch(()=>{
				// 	this.$tip.loaded();
				// 	this.$tip.error('提交失败')
				// });
			},



			// 获取用户信息
			async getInfo() {

				const res = await this.$myRequest({
					// url: '/uniappuser/id' + this.id
					url: '/uniappuser/info?token=' + uni.getStorageSync('token')
					// url: '/uniappuser/id?limit=1&page=1&sort=1&id='+ this.infoid.id
				})
				this.info = res.data.data
				console.log("res==>" + this.info.id)
				if (res.data.data != null) {
					let result = res.data.data
					this.info.name = result.name == null ? '用户' : result.name
				}
			},





			DateChange(e) {
				this.myFormData.birthday = e.detail.value
			},
			SwitchC(e) {
				this.switchC = e.detail.value
			},
			ChooseImage() {
				var that = this;
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						that.$http.upload(that.$config.apiUrl + that.uploadUrl, {
								filePath: res.tempFilePaths[0],
								name: 'file'
							})
							.then(res => {
								that.myFormData.avatar = res.data.message;
							})
							.catch(err => {
								that.$tip.error(err.data.message)
							});
						this.imgList = res.tempFilePaths
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
