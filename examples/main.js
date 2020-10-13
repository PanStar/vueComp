/**
 * Created by PanStar on 18/05/05.
 */
"use strict";
import 'babel-polyfill'

/* 引入Vue相关 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import App from './app.vue';

/* 加载vue状态管理器 */
import store from './vuex';

import utils from '../src/index.js';
const { HelloWorld } = utils;
Vue.component('v-hello', HelloWorld);

Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
    routes: Routers
};

const router = new VueRouter(RouterConfig);

new Vue({
    el: '#appExample',
    router,
    store,
    render: h => h(App)
});
