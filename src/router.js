import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const index = resolve => require(['./view/index.vue'], resolve);
const login = resolve => require(['./view/login.vue'], resolve);
const regist = resolve => require(['./view/regist.vue'], resolve);

const home = resolve => require(['./view/home.vue'], resolve);
const write = resolve => require(['./view/write.vue'], resolve);
const collection= resolve => require(['./view/collection.vue'], resolve);
const myEssay= resolve => require(['./view/myEssay.vue'], resolve);
const searchResult= resolve => require(['./view/searchResult.vue'], resolve);
const userDetails= resolve => require(['./view/userDetails.vue'], resolve);
const follower= resolve => require(['./view/follower.vue'], resolve);
const following= resolve => require(['./view/following.vue'], resolve);
const setting= resolve => require(['./view/setting.vue'],resolve);

const routes = [{
    path: '/index',
    component: index,
    name: 'index',
    children: [{
        path: 'home',
        component: home,
        name: 'home'
    }, {
        path: 'write',
        component: write,
        name: 'write'
    },{
        path: 'collection',
        component: collection,
        name: 'collection'
    },{
        path: 'myEssay',
        component: myEssay,
        name: 'myEssay'
    },{
        path: 'searchResult',
        component: searchResult,
        name: 'searchResult'
    },{
        path: 'userDetails',
        component: userDetails,
        name: 'userDetails'
    },{
        path: 'follower',
        component: follower,
        name: 'follower'
    },{
        path: 'following',
        component: following,
        name: 'following'
    },{
        path: 'setting',
        component: setting,
        name: 'setting'
    }]
}, {
    path: '/login',
    component: login,
    name: 'login',
    
}, {
    path: '/regist',
    component: regist,
    name: 'regist',
    
}, {
    path: '*',
    redirect: {
        name: 'login'
    }
}];


const router = new VueRouter({
    routes: routes,
    mode: 'hash',
});

export default router;