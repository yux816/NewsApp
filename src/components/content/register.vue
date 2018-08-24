<template>
	<transition name="fade">
		<div class="register" transition="fade" v-show="isshow">
			<div class="bg">
				<div class="box">
					<div class="title">
						注册
					</div>
					<div class="txt">
						<input type="text" placeholder="用户名"/>
						<input type="text" placeholder="密码"/>
						<input type="text" placeholder="确认密码"/>
						<input type="text" placeholder="验证码"/>
						<input type="button" value="发送验证码"/>
					</div>
				</div>
				<div class="btn">
						<span><router-link :to="{path:'/login',query:{show:'ture'}}"><<返回登录</router-link></span>
						<input type="button" value="注册" />
						<div class="trip">
							<input type="checkbox" />
							<span>已阅读和同意协议规则</span>
						</div>
					</div>
			</div>
		</div>
	</transition>
</template>

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

<style scoped>
	.register{
		position: fixed;
		width: 100%;
		height: 100%;
		/*background-color: red;*/
		background: url(../../../dist/002.jpg) no-repeat;
		background-size: 100% 100%;
		z-index: 110;
	}
	.bg{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.box{
		width: 75%;
		margin: 110px auto 0px;
		/*background-color: red;*/
	}
	input{
		border: none;
		outline: none;
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
	.title{
		width: 100%;
		color: white;
		text-align: left;
		margin-bottom: 10px;
		font-size: 20px;
		border-bottom: 1px solid white;
		/*background-color: burlywood;*/
	}
	.txt{
		width: 100%;
		text-align: left;
	}
	.txt input{
		width: 100%;
		height: 30px;
		padding-left: 5px;
		background: rgba(255,255,255,0.5);
		margin: 10px 0px;
		box-sizing: border-box;
	}
	.txt input:nth-of-type(4){
		display:inline-block ;
		width: 60%;
		vertical-align: middle;
	}
	.txt input:nth-of-type(5){
		display:inline-block;
		float: right;
		width: 30%;
		font-size: 12px;
		color: white;
		border-radius: 5px;
		padding: 5px;
		vertical-align: middle;
	}
	.btn{
		width: 100%;
		margin: 50px auto;
	}
	.btn>span:nth-of-type(1){
		display: block;
		padding-left: 15%;
		text-align: left;
	}
	.btn>span:nth-of-type(1) a{
		color: white;
		font-size: 12px;
		text-decoration: none;
	}
	.btn>input{
		width: 65%;
		height: 35px;
		border-radius: 5px;
		background-color: #CD5C5C;
		color: white;
	}
	.trip input{
		display: inline-block;
		margin-top:5px;
		vertical-align: middle;
	}
	.trip span{
		display: inline-block;
		vertical-align: middle;
		color: white;
		font-size: 12px;
	}
	.fade-enter-active, .fade-leave-active {
        transition: all 1s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>