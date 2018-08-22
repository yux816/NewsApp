<template>
	<div class="health">
		<ul>
			<li v-for="(v,i) in list">
				<p>{{v.title}}</p>
				<img :src="v.imgsrc" alt="" />
				<span class="time">{{v.ptime}}</span>
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
			this.$axios.get("health.json").
			then((res)=>{
				console.log(res.data.T1414389941036);
				this.list = res.data.T1414389941036;
			})
		}
	}
</script>

<style>
	.health ul{
		padding: 0px;
		margin: 15px auto;
	}
	.health ul li{
		position: relative;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.health ul li p{
		display: block;
	}
	.health ul li img{
		width: 70%;
		margin-bottom: 30px;
	}
	.health li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.health li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>