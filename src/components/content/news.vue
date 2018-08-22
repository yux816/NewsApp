<template>
	<div class="news">
		<header>
			<div class="search">
				<label for="search"></label>
				<router-link to="/search"><input type="text" id="search" placeholder="搜索"/></router-link>
			</div>
			<div class="list">
				<ul>
					<li><router-link to="/news">头条</router-link> </li>
					<li><router-link to="/finance">财经</router-link> </li>
					<li><router-link to="/recreation">娱乐</router-link> </li>
					<li><router-link to="/fashion">时尚</router-link> </li>
					<li><router-link to="/sports">体育</router-link> </li>
					<li><router-link to="/health">健康</router-link> </li>
				</ul>
			</div>
		</header>
		
		<router-view></router-view>
	</div>
	
</template>

<style >
	header{
		width: 100%;
		background-color: #2C3E50;
		padding: 10px 10px 0px 10px;
		box-sizing: border-box;
	}
	.search{
		width: 90%;
		background-color: #fff;
		margin: 0px auto;
		padding: 2px 0px;
		border-radius: 40px;
	}
	.search label{
		display: inline-block;
		background: url(../../assets/image/search.png) no-repeat ;
		background-size: 80%;
		width: 20px ;
		height: 20px;
		vertical-align: middle;
	}
	.search input{
		width: 78%;
		height: 20px;
		outline: none;
		border: none;
		display: inline-block;
		vertical-align: middle;
	}
	.list{
		width: 100%;
		margin-top: 10px;
	}
	.list ul{
		width: 100%;
		margin: 0px;
		padding: 0px;
		display: flex;
	}
	.list ul li{
		list-style: none;
		float: left;
		width: 17%;
		/*background-color: red;*/
		/*border-radius:20px 20px 0px 0px*/
		/*border-bottom:2px solid #2C3E50;*/
	}
	.list ul li:nth-of-type(1){
		border-radius:10px 10px 0px 0px;
		background-color: white;
	}
	.list ul li:nth-of-type(1) a{
		color: #2C3E50;
	}
	.list ul li a{
		color: white;
		text-decoration: none;
	}
	.news-list {
		padding: 10px;
		margin-top: 0px;
	}
	.news-list  li{
		list-style: none;
		margin-bottom: 20px;
		font-size: 13px;
	}
	.news-list p{
		text-align: left;
	}
	.news-list img{
		width: 100%;
	}
</style>

<script>
	export default{
		data(){
			return{
				list:[],
				msg:123
			}
		},
		mounted(){
	
				$(".list>ul>li").click(function(){
					$(this).css({"border-radius":"10px 10px 0px 0px","background":"white"})
					$(this).siblings().css({"border-radius":"none","background":"#2C3E50"});
					$(this).children('a').css({"color":"#2C3E50"})
					$(this).siblings().children('a').css({"color":"#fff"})
				})
				
//				this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-20.html?callback",{
//					params:{
//						keyword:this.msg
//					},jsonp:"callback"
//				}).then(function(res){
//					console.log(res.body.list);
//					this.list = res.body.list;
//					console.log(res.body.list[0].picInfo[0].url);
//				})

			}
		
	}
</script>