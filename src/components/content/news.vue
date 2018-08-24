<template>
	<div class="news">
		<header>
			<div class="search">
				<label for="search"></label>
				<router-link to="/search"><input type="text" id="search" placeholder="搜索"/></router-link>
			</div>
			<div class="list">
				<ul>
					<li class="listactive"><router-link to="/headline">头条</router-link> </li>
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

<style scoped="">
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
		padding-bottom: 7px;
		border-bottom: 3px solid #2C3E50;
	}
	li.listactive{
		border-bottom: 3px solid #fff;
	}
	.list ul li a{
		color: white;
		text-decoration: none;
	}
	.news-list {
		padding: 20px;
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
					$(this).css({"border-bottom":"3px solid #fff"});
					$(this).siblings().css({"border-bottom":"3px solid #2C3E50"})
				})

			}
		
	}
</script>