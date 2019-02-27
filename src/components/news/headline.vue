<template>
	<div class="headline">
		<div >
			<ul class="movepic">
				<li>
					<img src="../../assets/image/b1.jpg" alt="" />
					<span>试药人：日薪1千的医药志愿者</span>
				</li>
				<li>
					<img src="../../assets/image/b2.jpg" alt="" />
					<span>路段“屡修屡塌”又显大坑</span>
				</li>
				<li>
					<img src="../../assets/image/b3.jpg" alt="" />
					<span>盲眼老人黑暗中绘出惊艳画作</span>
				</li>
				<li>
					<img src="../../assets/image/b4.jpg" alt="" />
					<span>难民袭击警察  强闯西班牙边境</span>
				</li>	
				<li>
					<img src="../../assets/image/b1.jpg" alt="" />
					<span>试药人：日薪1千的医药志愿者</span>
				</li>
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
		
				this.$axios.get("/api/touch/jsonp/sy/recommend/0-20.html")
				.then((res) =>{
					let result = (res.data.split('(')[1].concat(res.data.split('(')[2])).split(')')[0]				
					console.log(result)
					this.list = JSON.parse(result).news
				})
	
				$(".list>ul>li").click(function(){
					$(this).css({"border-bottom":"3px solid #fff"});
					$(this).siblings().css({"border-bottom":"3px solid #2C3E50"})
				})

				var num = 1;
				setInterval(function(){
					if(num>4){
						$('.movepic').css({"left":"0%"})
						num=1
					}
					$('.movepic').animate({"left":num*-100+"%"})
					num++;
				},3000)

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
		width: 500%;
		padding: 10px 0px;
		margin: 0px ;
		overflow: hidden;
		box-sizing: border-box;
	}
	.movepic li{
		position: relative;
		width: 20%;
		list-style: none;
		float: left;
	}
	.movepic li img{
		width: 100%;
	}
	.movepic li span{
		position: absolute;
		text-align: left;
		padding:6px ;
		width: 100%;
		background: rgba(0,0,0,0.5);
		bottom: 4px;
		left: 0px;
		color: white;
	}
	.news-list{
		padding: 0px 10px;
		margin-bottom: 60px;
	}
	.news-list li{
		text-align: left;
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