<template>
	<div class="mine">
		<header>
			我的
		</header>
		<div class="mine-top">
			<div class="head-pic">
				<img src="../../assets/image/29.png"/>
			</div>
			<ul>
				<li class="level">等级：</li>
				<li class="online">在线时长：20小时</li>
			</ul>
		</div>
		<div class="mine-center">
			<ul>
				<li><i class="iconfont">&#xe639</i>账号管理<span>></span></li>
				<li><i class="iconfont">&#xe7c6</i>隐私管理<span>></span></li>
				<li><i class="iconfont">&#xe66c</i>我的好友<span>></span></li>
				<li><i class="iconfont">&#xe608</i>我的发布<span>></span></li>
				<li><i class="iconfont">&#xe60d</i>我的评论<span>></span></li>
				<li><i class="iconfont">&#xe63b</i>设置<span>></span></li>
			</ul>
		</div>
		<div class="mine-btn" @click="loginshow">
			<router-link :to="{path:'/login',query:{show:'ture'}}"><input type="button" value="切换账号" /></router-link>
		</div>
	</div>
	
</template>

<style scoped="">
	.mine{
		position: relative;
		overflow: hidden;
	}
	header{
		width: 100%;
		background-color: #2C3E50;
		padding: 10px 10px;
		box-sizing: border-box;
		color: white;
	}
	.mine-top{
		display: block;
		padding: 10px;
		overflow: hidden;
	}
	.head-pic{
		display:inline-block;
		float: left;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 1px solid gainsboro;
		margin-bottom: 10px;
		overflow: hidden;
	}
	.mine-top ul {
		float: left;
		padding-left: 20px;
		display: inline-block;
	}
	.mine-top ul li{
		text-align: left;
		list-style: none;
		margin-top: 10px;
	}
	.mine-top li:nth-of-type(1){
		background: url(../../assets/image/star.png) no-repeat 50px 3px;
		background-size: 15px;
	}
	.mine-center{
		/*background-color: burlywood;*/
	}
	.mine-center ul{
		padding: 15px;
		margin: 0px;
	}
	.mine-center ul li{
		list-style: none;
		/*background-color: tan;*/
		text-align: left;
		padding: 10px 0px;
		border: 1px solid gainsboro;
		border-width: 0px 0px 1px 0px;
	}
	.mine-center li span{
		float: right;
		font-size: 21px;
		color: lightgray;
	}
	.mine-btn{
		margin: 10px auto;
	}
	.mine-btn input{
		border: none;
		outline: none;	
		width: 150px;
		height: 30px;
		border-radius: 6px;
		background: #CD5C5C;
		color: whitesmoke;
	}
	@font-face {
	  font-family: 'iconfont';
	  src: url('../../assets/css/iconfont/iconfont.eot');
	  src: url('../../assets/css/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../../assets/css/iconfont/iconfont.woff') format('woff'),
	  url('../../assets/css/iconfont/iconfont.ttf') format('truetype'),
	  url('../../assets/css/iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	  font-family:"iconfont" !important;
	  font-size:16px;font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	  padding: 0px 5px;
	}
	
</style>

<script>
	export default{
		data(){
			return{
				isshow:'false'
			}
		},
		methods:{
			loginshow(){
				this.isshow = 'true';
				console.log(this.isshow)
			}
		}
	}
</script>