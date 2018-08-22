<template>
	<div class="fashion">
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
			this.$axios.get("fashion.json").
			then((res)=>{
				console.log(res.data.T1348650593803);
				this.list = res.data.T1348650593803;
			})
		}
	}
</script>

<style>
	.fashion ul{
		padding: 0px;
		margin: 15px auto;
	}
	.fashion ul li{
		position: relative;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.fashion ul li p{
		display: block;
	}
	.fashion ul li img{
		width: 70%;
		margin-bottom: 30px;
	}
	.fashion li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.fashion li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>