<template>
	<div class="comment">
		<header>
			评论
		</header>
		<ul >
			<li v-for="(v,i) in list" v-if="v.ptime" >
				<p>{{v.title}}</p>
				<span>{{v.ptime}}</span>
				<i class="iconfont">{{num[i]}} &#xe60d </i>
			</li>
		</ul>
	</div>
</template>

<style scoped="">
	header{
		width: 100%;
		background-color: #2C3E50;
		padding: 10px 10px;
		box-sizing: border-box;
		color: white;
	}
	.comment ul{
		padding: 0px;
		margin: 15px auto;
	}
	.comment ul li{
		position: relative;
		height: 80px;
		list-style: none;
		margin: 0px 10px;
		text-align: left;
		border-bottom: 1px solid gainsboro;
	}
	.comment ul li img{
		width: 100%;
	}
	.comment ul li span{
		position: absolute;
		bottom: 3px;
		left: 3px;
		color: darkgrey;
		font-size: 12px;
	}
	.comment ul li i{
		float: right;
		position: absolute;
		right: 3px;
		bottom: 3px;
		color: black;
	}
	@font-face {
	  font-family: 'iconfont';
	  src: url('../../assets/css/iconfont/iconfont.eot');
	  src: url('../../assets/css/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../../assets/css/iconfont/iconfont.woff') format('woff'),
	  url('../../assets/css/iconfont/iconfont.ttf') format('truetype'),
	  url('../../assets/css/iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	  font-family:"iconfont" !important;
	  font-size:16px;font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	  padding: 0px 5px;
	  font-size: 13px;
	}
</style>

<script>
	export default{
		data(){
			return{
				list:[],
				num:[]
			}
		},
		methods:{
//			ran(){
//				for(var i;i<20;i++){
//					this.num[i] = parseInt(Math.random()*100);
//					console.log("5201314");
//				}
//			}
		},
		mounted(){
			this.$axios.get("comment.json").
			then((res)=>{
				console.log(res.data.comment);
				this.list = res.data.comment;
				
			})

				for(var i;i<20;i++){
					this.num[i] = parseInt(Math.random()*100);
					console.log("5201314");
				}
		}
	}
</script>