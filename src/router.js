import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const discover = resolve => require(['./view/discover.vue'], resolve);
const write = resolve => require(['./view/write.vue'], resolve);
const  collection= resolve => require(['./view/collection.vue'], resolve);
const  myEssay= resolve => require(['./view/myEssay.vue'], resolve);

const routes = [{
    path: '/discover',
    component: discover,
    name: 'discover'
}, {
    path: '/write',
    component: write,
    name: 'write'
},{
    path: '/collection',
    component: collection,
    name: 'collection'
},{
    path: '/myEssay',
    component: myEssay,
    name: 'myEssay'
}, {
    path: '*',
    redirect: {
        name: 'discover'
    }
}];


const router = new VueRouter({
    routes: routes,
    mode: 'hash',
});

export default router;