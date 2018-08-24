import Vue from 'vue'
import Router from 'vue-router'
import comments from '../components/content/comment.vue'
import hot from '../components/content/hot.vue'
import mine from '../components/content/mine.vue'
import news from '../components/content/news.vue'
import search from '../components/content/search.vue'
import login from '../components/content/login.vue'
import headline from '../components/news/headline.vue'
import fashion from '../components/news/fashion.vue'
import health from '../components/news/health.vue'
import recreation from '../components/news/recreation.vue'
import sports from '../components/news/sports.vue'
import finance from '../components/news/finance.vue'
import register from '../components/content/register.vue'

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/',
			redirect:'/headline'
		},
		{
			path:'/news',
			component:news,
			children:[
				{
					path:'/headline',
					component:headline
				},
				{
					path:'/fashion',
					component:fashion
				},
				{
					path:'/health',
					component:health
				},
				{
					path:'/recreation',
					component:recreation
				},
				{
					path:'/sports',
					component:sports
				},
				{
					path:'/finance',
					component:finance
				}
			]
		},
		{path:'/hot',component:hot},
		{path:'/comment',component:comments},
		{
			path:'/mine',
			component:mine
		},
		{path:'/search',component:search},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		}
	]
})
