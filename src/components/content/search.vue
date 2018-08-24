<template>
	<div class="select">
		<header>
			<span><router-link to="/headline"><</router-link></span>
			搜索
		</header>
		<div class="search">
			<label for="search"></label>
			<router-link to="/search"><input type="text" id="search" placeholder="搜索"/></router-link>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	select{
		height: 500px;
		background-color: red;
	}
	header{
		width: 100%;
		background-color: #2C3E50;
		padding: 10px 10px;
		box-sizing: border-box;
		color: #fff;
	}
	header span {
		float: left;
		display: inline-block;	
		font-size: 21px;
	}
	header span a{
		color: white;
		text-decoration: none;
	}
	.search{
		width: 90%;
		background-color: #fff;
		margin: 10px auto;
		padding: 2px 0px;
		border-radius: 40px;
		border: 1px solid gainsboro;
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
</style>