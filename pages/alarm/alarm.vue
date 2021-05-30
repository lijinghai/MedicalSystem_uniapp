<template>
<view>
	<template>
		
	    <view>
	        <uni-forms ref="form" :value="formData" :rules="rules">
	            <uni-forms-item label="姓名" name="name">
	                <input type="text" v-model="formData.name" placeholder="请输入姓名" />
	            </uni-forms-item>
	            <uni-forms-item label="邮箱" name="email">
	                <input class="input" v-model="formData.email" type="text" placeholder="请输入用户名" @input="binddata('email',$event.detail.value)" />
	            </uni-forms-item>
	            <button @click="submit">Submit</button>
	        </uni-forms>
	    </view>
		
		
	</template>
</view>
</template> 
 
<script>
export default {
    data() {
        return {
            formData: {
                name: 'LiMing',
                email: 'dcloud@email.com'
            },
            rules: {
                // 对name字段进行必填验证
                name: {
                    rules: [{
                            required: true,
                            errorMessage: '请输入姓名',
                        },
                        {
                            minLength: 3,
                            maxLength: 5,
                            errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
                        }
                    ]
                },
                // 对email字段进行必填验证
                email: {
                    rules: [{
                        format: 'email',
                        errorMessage: '请输入正确的邮箱地址',
                    }]
                }
            }
        }
    },
    methods: {
        /**
         * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
         * @param {String} name 字段名称
         * @param {String} value 表单域的值
         */
        // binddata(name,value){
        // 通过 input 事件设置表单指定 name 的值
        //   this.$refs.form.setValue(name, value)
        // },
        // 触发提交表单
        submit() {
            this.$refs.form.submit().then(res=>{
                console.log('表单数据信息：', res);
            }).catch(err =>{
                console.log('表单错误信息：', err);
            })
        }
    }
}
</script>
 
<style lang="less">

</style>