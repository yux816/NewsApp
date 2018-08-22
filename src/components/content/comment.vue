<template>
	<div class="comment">
		<header>
			评论
		</header>
		<ul>
			<li v-for="(v,i) in list" v-if="v.ptime">
				<p>{{v.title}}</p>
				<span>{{v.ptime}} <i class="iconfont">&#xe60d</i></span>
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
		height: 100px;
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
		bottom: 0px;
		left: 0px;
		color: darkgrey;
		font-size: 12px;
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
	  font-size: 12px;
	}
</style>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$axios.get("comment.json").
			then((res)=>{
				console.log(res.data.comment);
				this.list = res.data.comment;
			})
		}
	}
</script>