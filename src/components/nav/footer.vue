<template id="footer">
	<footer>
		<ul>
			<li><router-link to="/headline">
				<span class="this"></span>
				<i class="iconfont">&#xe619</i>新闻
			</router-link></li>
			<li><router-link :to="{path:'/hot'}">
				<span></span>
				<i class="iconfont">&#xe60a</i>热点
			</router-link></li>
			<li><router-link to="/comment">
				<span></span>
				<i class="iconfont">&#xe60d</i>评论
			</router-link></li>
			<li><router-link to="/mine">
				<span></span>
				<i class="iconfont">&#xe629</i>我的
			</router-link></li>
		</ul>
	</footer>
</template>

<style scoped>
	html,body,footer{
		padding: 0px;
		margin: 0px;
		width: 100%;
	}
	footer{
		position: fixed;
		bottom: 0px;
		box-sizing: border-box;
		box-shadow: 1px 1px 5px 0px #2C3E50;
	}
	footer ul{
		width: 100%;
		margin: 0px;
		padding: 0px;
		z-index: 10;
	}
	footer ul li{
		position: relative;
		float: left;
		width: 25%;
		height: 50px;
		list-style: none;
		z-index: 100;
	}
	.this{
		/*content: '';*/
		position: absolute;
		top: -6px;
		left: 50%;
		margin-left: -8px;
		/*width: 20px;
		height: 20px;*/
		border-bottom: 5px solid white;
		border-left: 5px solid transparent;
		border-top: 10px solid transparent;
		border-right: 10px solid transparent;
		z-index: -10;
		background-color: #fff;
		transform: rotate(-45deg);
		box-shadow: 2px -2px 2px #ccc;
		/*display: none;*/
	}
	footer ul li a{
		width: 100%;
	    height: 100%;
	    display: block;
	    text-decoration: none;
	    color:#2C3E50;
	    font-size: 1px;
	    background-color: #fff;
	    z-index: 10;
	}
	/*li:nth-of-type(1){
		background:url(../../assets/image/newsbgs.png) no-repeat center top;
	}
	li:nth-of-type(2){
		background:url(../../assets/image/hotbgs.png) no-repeat center top;
	}
	li:nth-of-type(3){
		background:url(../../assets/image/commentbgs.png) no-repeat center top;
	}
	li:nth-of-type(4){
		background:url(../../assets/image/minebgs.png) no-repeat center top;
	}*/
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
	  font-size: 25px;
	  color:#2C3E50;
	  display: block;
	  padding-top: 5px;
	  z-index: 10;
	}
</style>