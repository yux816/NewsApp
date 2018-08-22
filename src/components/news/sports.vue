<template>
	<div class="sports">
		<ul>
			<li v-for="(v,i) in list">
				<p>{{v.title}}</p>
				<img :src="v.picUrl" alt="" />
				<span class="time">{{v.ctime}}</span>
				<span class="time">{{v.description}}</span>
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
			this.$axios.get("sport.json").
			then((res)=>{
				console.log(res.data.output.newslist);
				this.list = res.data.output.newslist;
			})
		}
	}
</script>

<style>
	.sports ul{
		padding: 0px;
		margin: 15px auto;
	}
	.sports ul li{
		position: relative;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.sports ul li p{
		display: block;
	}
	.sports ul li img{
		width: 70%;
		margin-bottom: 30px;
	}
	.sports li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.sports li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>