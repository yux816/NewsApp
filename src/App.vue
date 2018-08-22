<template>
  <div id="app">
  		<router-view></router-view>
      <foot></foot>
  </div>
</template>

<script>
	import footer from './components/nav/footer.vue';
	
	export default{
			components:{
				'foot':footer,
			}
		}
</script>

<style>
	html,body{
		padding: 0px;
		margin: 0px;
		width: 100%;
	}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
