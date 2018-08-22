<template>
	<div class="login">
		<div class="box">
			<div class="head-pic">
				<img src="../../assets/image/29.png"/>
			</div>
			<div class="txt">
				<input type="text" placeholder="账号" />
				<input type="text" name="" id="" placeholder="密码" />
				
			</div>
			<div class="btn">
					<input type="button" class="login-btn" value="登录" />
					<input type="button" name="" id="" value="注册" />
				</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.login{
		display: block;
		position: fixed;
		width: 100%;
		height: 100%;
		background: white;
		z-index: 100;
	}
	.box{
		width: 90%;
		margin: 0px auto;
		margin-top: 150px;
		/*background: tan;*/
		overflow: hidden;
		box-sizing: border-box;
	}
	.head-pic{
		width: 25%;
		border-radius: 50%;
		float: left;
		display: inline-block;
		overflow: hidden;
		/*margin: 12px 10px 10px 10px;*/
		background-color: white;
	}
	.head-pic img{
		width: 100%;
	}
	.txt{
		float: right;
		display: inline-block;
		width: 70%;
	}
	.txt>input{
		width: 100%;
		height: 30px;
		margin-top: 5px;
		outline: none;
		background: #F0F0F0;
		border-bottom:1px solid #2C3E50;
		border-width: 0px 0px 1px 0px;
	}
	.btn{
		display: block;
		float: left;
		width: 100%;
		margin-top: 15px;
	}
	.btn>input{
		border: none;
		outline: none;
		width: 80px;
		height: 30px;
		background: white;
		margin: 5px;
	}
	.btn>input:nth-of-type(1){
		background: green;
	}
</style>     