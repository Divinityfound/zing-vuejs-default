import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router'
Vue.use(VueRouter)


export default new VueRouter({
	//mode: 'history', // Something going on with apache or htaccess....
	routes: routes // short for `routes: routes`
});