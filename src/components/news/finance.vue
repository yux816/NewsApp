<template>
	<div class="finance">
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
			this.$axios.get("finance.json").
			then((res)=>{
				console.log(res.data.T1348648756099);
				this.list = res.data.T1348648756099;
			})
		}
	}
</script>

<style>
	.finance ul{
		padding: 0px;
		margin: 15px auto;
	}
	.finance ul li{
		position: relative;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.finance ul li p{
		display: block;
		font-weight: bold;
	}
	.finance ul li img{
		width: 70%;
		margin-bottom: 50px;
	}
	.finance li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.finance li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>