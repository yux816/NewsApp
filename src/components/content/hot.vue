<template>
	<div class="hot">
		<header>
			热门
		</header>
		<ul>
			<li v-for="v in list">
				<p>{{v.title}}</p>
				<img :src="v.img" alt="" />
				<span>{{v.ptime}}</span>
				<span>{{v.source}}</span>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$axios.get("hot.json").
			then((res)=>{
				console.log(res.data.recommend);
				this.list = res.data.recommend;
			})
		}
	}
</script>

<style scoped="">
	header{
		width: 100%;
		background-color: #2C3E50;
		padding: 10px 10px;
		box-sizing: border-box;
		color: white;
	}
	.hot>ul{
		padding: 10px;
		margin: 5px 0px 40px;
		overflow: hidden;
	}
	.hot ul li{
		position: relative;
		list-style: none;
		margin: 10px 0px;
		padding: 10px 0px;
		text-align: left;
		overflow: hidden;
		border-top: 1px solid gainsboro;
	}
	.hot ul li p{
		float: left;
		display:inline-block;
		width: 68%;
		font-size: 15px;
		margin: 0px;
	}
	
	.hot ul li img{
		display:inline-block;
		float: right;
		width: 30%;
		margin-bottom: 20px;
	}
	.hot ul li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.hot ul li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>