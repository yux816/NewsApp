<template>
	<transition name="fade">
		<div class="login" v-show="isshow">
			<div class="bg">
				<header>
					<span><router-link to="/headline"><</router-link></span>
				</header>
				<div class="box">
					<div class="head-pic">
						<img src="../../assets/image/29.png"/>
					</div>
					<div class="txt">
						<input type="text" placeholder="账号" />
						<input type="text" name="" id="" placeholder="密码" />
					</div>
				</div>
				<div class="btn">
					<p><router-link :to="{path:'/register',query:{show:'ture'}}">立即注册>></router-link></p>
					<input type="button" class="login-btn" value="登录" />
					<div class="trip">
						<input type="checkbox" name="" id="" value="" />
						<span>已阅读并同意协议规则</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
</script>

<style scoped="">
	header{
		width: 100%;
		padding: 5px 10px;
		background: rgba(0,0,0,0.5);
		box-sizing: border-box;
		text-align: left;
	}
	header a{
		color: white;
		font-size: 21px;
		text-decoration: none;
	}
	.login{
		display: block;
		position: fixed;
		width: 100%;
		height: 100%;
		background: white;
		background: url(../../assets/image/002.jpg);
		background-size: 100%;
		z-index: 100;
	}
	.bg{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.box{
		width: 90%;
		margin: 0px auto;
		margin-top: 120px;
		/*background: tan;*/
		overflow: hidden;
		box-sizing: border-box;
	}
	.head-pic{
		width: 25%;
		border-radius: 50%;
		display:block;
		overflow: hidden;
		/*margin: 12px 10px 10px 10px;*/
		margin: 0px auto;
		background-color: white;
	}
	.head-pic img{
		width: 100%;
	}
	.txt{
		display:block;
		width: 80%;
		margin: 0px auto;
	}
	.txt>input{
		width: 100%;
		height: 30px;
		margin-top: 15px;
		padding-left: 10px;
		outline: none;
		background:rgba(255,255,255,0.4);
		border-bottom:1px solid #2C3E50;
		border-width: 0px 0px 1px 0px;
		color: white;
	}
	.trip{
		position: relative;
		color: white;
		font-size: 10px;
		/*background-color: red;*/
	}
	.trip p{
		display: block;
		position: absolute;
		top: 0px;
		right: 0px;
	}
	.trip input{
		display: inline-block;
		margin-top:5px;
		vertical-align: middle;
	}
	.trip span{
		display: inline-block;
		vertical-align: middle;
	}
	::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    	color:    #fff;
	}
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    #fff;
	   opacity:  1;
	}
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    #fff;
	   opacity:  1;
	}
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
	   color:    #fff;
	}
	::-ms-input-placeholder { /* Microsoft Edge */
	   color:    #fff;
	}
	.btn{
		bottom: 80px;
		display: block;
		width: 90%;
		margin: 40px auto;
	}
	.btn p{
		margin: 0px;
		padding-right: 43px;
		text-align: right;
		
	}
	.btn p a{
		color: white;
		font-size: 5px;
		text-decoration: none;
	}
	.btn>input{
		border: none;
		outline: none;
		width: 70%;
		height: 35px;
	}
	.btn>input:nth-of-type(1){
		background:#548B54;
		border-radius: 5px;
		color: white;
	}
	.fade-enter-active, .fade-leave-active {
        transition: all 1s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>     

<script>
	export default{
		data(){
			return{
				isshow:'false'
			}
		},
		mounted(){
			this.isshow = this.$route.query.show
			console.log(this.$route.query.show)
		}
	}
</script>