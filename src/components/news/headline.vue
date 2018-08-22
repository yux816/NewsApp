<template>
	<div class="headline">
		<div >
			<ul class="movepic">
				<li><img src="../../assets/image/banner1.jpg" alt="" /></li>
				<li><img src="../../assets/image/banner2.jpg" alt="" /></li>
				<li><img src="../../assets/image/banner3.jpg" alt="" /></li>
				<li><img src="../../assets/image/banner1.jpg" alt="" /></li>	
			</ul>
		</div>
		
		<ul class="news-list">
			<li v-for="(v,i) in list">
				<p><b>{{v.title}}</b></p>
				<img :src="v.picInfo[0].url" alt="" :v-if="v.image"/>
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
				list:[],
				msg:123
			}
		},
		mounted(){
		
				this.$http.jsonp("http://3g.163.com/touch/jsonp/sy/recommend/0-20.html?callback",{
					params:{
						keyword:this.msg
					},jsonp:"callback"
				}).then(function(res){
					console.log(res.body.news);
					this.list = res.body.news;
//					console.log(res.body.list[0].picInfo[0].url);
				})
	
				$(".list>ul>li").click(function(){
					$(this).css({"border-radius":"10px 10px 0px 0px","background":"white"})
					$(this).siblings().css({"border-radius":"none","background":"#2C3E50"});
					$(this).children('a').css({"color":"#2C3E50"})
					$(this).siblings().children('a').css({"color":"#fff"})
				})
				
//				this.$axios.get("http://sinanews.sina.cn/interface/type_of_search.d.html",{
//					params: { }
//				}).then((res)=>{
//					console.log(res.data.comment);
//					console.log(typeof(this.list));
//					console.log(typeof(res.data.comment))
//					this.list = res.data.comment;
//				})
				
				var num = 1;
				setInterval(function(){
					if(num>3){
						$('.movepic').css({"left":"0%"})
						num=1
					}
					$('.movepic').animate({"left":num*-100+"%"})
					num++;
				},1000)

			}
		
	}
</script>

<style>
	.headline{
		position: relative;
		overflow: hidden;
	}
	.movepic {
		position: relative;
		width: 400%;
		padding: 10px 0px;
		margin: 0px ;
		overflow: hidden;
		box-sizing: border-box;
	}
	.movepic li{
		width: 25%;
		list-style: none;
		float: left;
	}
	.movepic li img{
		width: 100%;
	}
	.news-list{
		margin-bottom: 40px;
	}
	.news-list li{
		position: relative;
		overflow: hidden;
		padding: 15px 0px;
		margin: 5px 0px;
		border-top: 1px solid gainsboro;
	}
	.news-list li p{
		float: left;
		display:inline-block;
		width: 68%;
		font-size: 15px;
		margin: 0px;
	}
	.news-list li img{
		display:inline-block;
		float: right;
		width: 30%;
		margin-bottom: 15px;
	}	
	.news-list li span:nth-of-type(1){
		position: absolute;
		bottom: 5px;
		left: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
	.news-list li span:nth-of-type(2){
		position: absolute;
		bottom: 5px;
		right: 0px;
		display: block;
		color: darkgray;
		font-size: 12px;
	}
</style>