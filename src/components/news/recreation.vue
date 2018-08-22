<template>
	<div class="recreation">
		<ul>
			<li v-for="(v,i) in list">
				<p>{{v.title}}</p>
				<img :src="v.imgsrc" alt="" />
				<span class="time">{{v.mtime}}</span>
				<span class="time">{{v.source}}</span>
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
			this.$axios.get("recreation.json").
			then((res)=>{
				console.log(res.data.T1348648517839);
				this.list = res.data.T1348648517839;
			})
		}
	}
</script>

<style>
	.recreation ul{
		padding: 0px;
		margin: 15px auto;
	}
	.recreation ul li{
		position: relative;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.recreation ul li p{
		display: block;
	}
	.recreation ul li img{
		width: 70%;
		margin-bottom: 30px;
	}
	.recreation li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.recreation li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>