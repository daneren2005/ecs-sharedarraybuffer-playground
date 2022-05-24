import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/simple',
		name: 'simple',
		component: () => import(/* webpackChunkName: "simple" */ '../simple/SimpleGame.vue')
	},
	{
		path: '/bitecs',
		name: 'bitecs',
		component: () => import(/* webpackChunkName: "bitecs" */ '../bitecs/BitECSGame.vue')
	},
	{
		path: '/multithreaded',
		alias: '/',
		name: 'multithreaded',
		component: () => import(/* webpackChunkName: "multithreaded" */ '../multithreaded/MultithreadedGame.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
});

export default router;
