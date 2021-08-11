// 异步请求接口封装
// const BASE_URL = 'http://172.18.0.220:8091'
const BASE_URL = 'http://42.192.231.74:8091'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET' || 'POST' || 'PUT',
			data: options.data || {},
			header: {Authorization:uni.getStorageSync('token')},
			success: (res) => {
				if (res.data.code !== 20000) {
					// console.log(res)
					resolve(res)
					// return this.$tip.alert(res.data.message)
					return uni.showToast({
						title: res.data.message
					})
				} 
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			},
		})
	})
};

export default {
	BASE_URL,
	myRequest
}

/* myRequest({
	url: '/unbo',
	method: 'POST',
	data:{
		
	}
}) */
