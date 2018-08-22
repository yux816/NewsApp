<template>
	<div class="hot">
		<header>
			热门
		</header>
		<ul>
			<li v-for="v in list">
				<p>{{v.title}}</p>
				<img :src="v.img" alt="" />
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
	.hot ul{
		padding: 0px;
		margin: 15px auto;
	}
	.hot ul li{
		list-style: none;
		margin: 15px 0px;
		padding: 0px 10px;
		text-align: left;
	}
	.hot ul li img{
		width: 100%;
	}
</style>