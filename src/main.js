/* 
    入口js
*/
import Vue from 'vue';
import App from './App.vue';


import router from './router';  // 引入了index.js 
new Vue({
    el:'#app',
    render: h => h(App),
    router   /* 传入路由 */
})