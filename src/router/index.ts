import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/simple',
		name: 'simple',
		component: () => import(/* webpackChunkName: "simple" */ '../simple/SimpleGame.vue')
	},
	{
		path: '/bitecs',
		alias: '/',
		name: 'bitecs',
		component: () => import(/* webpackChunkName: "bitecs" */ '../bitecs/BitECSGame.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
});

export default router;
