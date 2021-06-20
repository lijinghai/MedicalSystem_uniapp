<h1 align="center"> 医疗管理系统 | Dorian </h1>

<p align="center">
 	<a href="https://github.com/Dorian1015/MedicalSystem">
		<img src="https://img.shields.io/github/issues/Dorian1015/MedicalSystem"
			 alt="Version">
	</a>
 	<a href="https://github.com/Dorian1015/MedicalSystem">
		<img src="https://img.shields.io/github/forks/Dorian1015/MedicalSystem"
			 alt="Status">
	</a>
    <a href="https://github.com/Dorian1015/MedicalSystem">
		<img src="https://img.shields.io/github/stars/Dorian1015/MedicalSystem"
			 alt="Status">
	</a>
</p>

<p align="center">
     <a href="https://github.com/Dorian1015/MedicalSystem">
		<img src="https://img.shields.io/badge/Dorian-%E6%B5%B7-blue"
			 alt="Status">
	</a>
</p>


### 项目介绍 :book:

👉基于Springboot+vue+uni-app的医疗管理系统. 含平台主体微信小程序和web后台数据管理平台.

* 

### 项目技术栈 :star:

- 微信小程序(MedicalSystem_uniapp)：uni-app + Vue.js


- 后台管理系统(MedicalSystem_Web)：基于Vue-admin-ui脚手架
- 后端(MedicalSystem)：Springboot 2.4.2 + Java Web Token +MybatisPlus + Swagger 
- 数据库：MySql 5.7
### 项目地址 :link:

项目采用前后端分离开发模式， 小程序使用Uni-app开发，后端数据API采用Java、Spring-Boot开发.

小程序端code地址：

后端code地址：

web管理端code地址: 

### 体验地址

由于项目还在不断完善中，所以目前还未上线；

主要还是因为穷，买不起服务器

演示视频：[在线演示视频]()

## 前言：

🏫本人目前（2021年5月8日）是一名大二在校大学生从去年（2020年)5月开始准备自学java，从基础到框架，利用课余时间从JavaWeb开始，到SSM,到SpringBoot,再到前端Html5,CSS3,JS,Vue.js,最后到Node.js，学完之后开始着手开始做这个校园失物招领网站，目前该项目大概原型已经呈现出来，这是基于前后端分离项目，目前利用课余时间，不断完善改项目。小白开始，若有错误，还望大家多多指教。各部分源码将在Github上持续更新。

##### 这是我的邮箱lijinghailjh@163.com,欢迎大家来指正

##### 最新代码将在[GitHub](https://github.com/Dorian1015)上持续更新

##### 在读大二学生（2021年5月8日）





## 说明

> 本项目前后端分离

> 这是本项目的前台源码，后端源码请看[MedicalSystem](https://github.com/Dorian1015/MedicalSystem),本项目包括后台管理系统([MedicalSystem_Web](https://github.com/Dorian1015/MedicalSystem_Web))，微信小程序部分（[MedicalSystem_uniapp](https://github.com/Dorian1015/MedicalSystem_uniapp))

> #### 如果您觉得这项目还不错，可以在右上角`Star`支持一下，万分感谢！！！

![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/失物招领.assets/0E503FDA.gif)

## 项目简介

- 本项目前后端分离，前端基于`Vue`+`Vue-router`+`Vuex`+`Element-ui`+`Axios`。后端基于SpringBoot(框架) + JSON WEB TOKEN(令牌机制) + MybatisPlus + Mysql实现。

- 总体架构![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/失物招领.assets/clip_image002.jpg)

  系统设计秉承“前后端分离/SOA”的总体思想，前端使用Vue/ElementUI作为主要框架技术、Nginx作为HTTP服务器，用来提供静态页面访问服务和反向代理作用；后端则以Springboot主流框架技术为主、采用MySQL开源数据库，前后端使用Restful规范交换数据。

  系统采用JWT令牌鉴权方式，降低服务器运行消耗，提升系统的伸缩性和扩展性。

- 总体架构

  总体设计按“前后端分离”方式，当浏览器请求页面或静态资源时，HTTP Server直接响应；当浏览器请求数据时，该请求仍然先发给HTTP Server，经由该Server转发至Web APP Server。Web APP Server业务处理后将结果数据返回给HTTP Server，最终返回浏览器。在此过程中，Web APP Server返回的仅仅是数据（json格式），没有任何与显示（视图）相关的信息，做到了完全的前后端分离，前端负责页面与展示，后端负责业务处理与数据。

## 技术栈

- 微信小程序：uni-app + Vue.js

- 后台管理系统：基于Vue-admin-ui脚手架
- 后端：Springboot + Java Web Token +MybatisPlus + Swagger 框架
- 数据库：MySql

## 业务流程设计

- #### 系统功能框架

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/系统功能架构.jpg)

- ####  普通患者业务流程

  1. 用户下载APP后进行用户登录，使用手机号注册即可，暂不支持微信登录等

  2. 登录系统后选择用户身份为患者，用户需录入姓名，性别，归属医院名称，科室，主治医师姓名和编号(关键)等基本信息等待验证。

  3. 由主治医生完成验证，完成验证后用户姓名，性别，归属医院等信息不可以修改，但可以随时修改登录密码，也可以由主治医师重置密码。用户可以对主治医师发送通知消息，可以查看自己的通知消息。

  4. (主要功能)用户可以通过餐饮管理记录餐食和饮水的状况，内容包括餐食中的汤(主食、配菜的尿量换算后期考虑)及饮料(不同饮料对尿量的转换速率后期考虑)容量

  5. (主要功能)用户可以记录治疗事件，内容包括治疗的时间及相关参数

  6. 用户可以自定义闹钟的配置，例如通知内容，按钮标题等

  7. 用户可以通过输入查询条件(时间段，事件类型)来查询自己的餐饮记录和治疗记录

- ####  医师业务流程

  1. 用户下载APP后进行用户登录，使用手机号注册

  2. 登录系统后选择用户身份为医生，用户需录入姓名，医院名称，科室，并获取本医生在系统中的唯一编号(由系统自动产生，医生可以查看，复制)

  3. 医生可以查看当前患者名单，查询条件包括患者状态(待验证，医疗中，治愈)，针对不同状态的患者，管理内容为

  ​          a. 待验证：医生可以选择接受、退回、黑名单等方式处理

  ​               接受后完成医患匹配，可以进行正常的业务操作。

  ​               退回后需输入退回理由，例如性别错误，由患者重新填写资料提交验证。

  ​               如医生对用户进行黑名单操作，则该患者无法对本医生再次提交验证，医生可以查看和取消黑名单。

  ​          b. 治疗中：医生匹配完成后的患者，医生可以由医生录入病患的病理参数，其中的生理参数包括病患的                            特殊情况，例如是否孕妇、幼童、老人，是否免疫系统缺陷，是否器官缺陷等，这些参数均会对尿形成的数量和速度做出影响医生可以查看患者的餐饮和治疗情况，以及特殊事件，医生可以给患者发送通知消息，可以查看患者对自己发送的通知消息

​            c. 治愈：此项待补充

## 功能模块

- ### 功能列表



|   功能列表   |          |                                                |                                          |      |      |
| :----------: | -------- | ---------------------------------------------- | ---------------------------------------- | ---- | ---- |
|   业务模块   | 业务分类 | 业务编号                                       | 业务简要说明                             | 备注 |      |
|   用户管理   | 系统登录 | 1-1                                            | 用户通过手机号注册，用户通过账号密码登录 |      |      |
|   身份验证   | 1-2      | 用户记录姓名，性别，医院信息                   |                                          |      |      |
| 账号密码管理 | 1-3      | 用户修改密码，管理员重置密码(暂不提供短信找回) |                                          |      |      |
|   病理参数   | 生理参数 | 2-1                                            | 性别，身高，体重数据管理                 |      |      |
|   膀胱参数   | 2-2      | 膀胱动力，膀胱安全容量,尿常规数据管理          |                                          |      |      |
|    肾功能    | 2-3      | 肾功能、输尿管B超数据管理                      |                                          |      |      |
|   事件管理   | 餐饮事件 | 3-1                                            | 餐饮的时间点，摄入的水体积(ml)           |      |      |
|   导尿事件   | 3-2      | 导尿的时间点，导尿的体积，备注信息(尿特征)     |                                          |      |      |



#### 1.微信小程序页面(MedicalSystem_uniapp)

- #### 注册页面

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/注册.jpg)

- #### 登录页面

![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/登录.jpg)

- #### 首页页面


  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/首页.jpg)

- #### 病理参数页面

![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/病理参数.jpg)

- #### 膀胱动力学页面

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/膀胱动力学.jpg)

  - #### 添加参数页面

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/膀胱添加.jpg)

- #### 尿常规页面

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/尿常规.jpg)

  - #### 添加

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/尿常规添加.jpg)

- #### 事件管理

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/事件管理.jpg)

  - #### 餐饮事件

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/餐饮事件.jpg)

    

    - #### 添加

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/餐饮事件0.jpg)

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/餐饮事件1.jpg)

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/餐饮事件1.jpg)

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/餐饮添加2.jpg)

  - #### 导尿事件

    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/导尿事件.jpg)
    
    - #### 添加
    
    ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/导尿添加.jpg)

- #### 事件报表

  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/事件报表.jpg)
  
  
  
  ![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/事件报表0.jpg)

![img](https://cdn.jsdelivr.net/gh/Dorian1015/cdn/img/MedicalSystem/事件报表1.jpg)





## 后期打算

### 如果你觉得我的项目，还不错，可以给我一下赞赏，本人现是一名大二学生，打算不断完善这个项目，所以我打算购买服务器，并部署上去；开源不易，如果你喜欢我的项目，可以给我投资一下我的服务器基金，苦逼大学生，万分感谢您！！！！






### 如果你能看到这里说明你肯定对我的项目感兴趣，那么请访问我的博客吧，里面会更新更详细的关于我这个项目的信息 [博客](https://dorian1015.github.io/)

### 或者你也可以通过我的[Github](https://github.com/Dorian1015) 首页的邮箱来联系我 lijinghailjh@163.com



