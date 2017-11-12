import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path:'/category',
                    component: resolve => require(['../components/page/CategoryTable.vue'],resolve)
                },
                
                {
                    path: '/usertable',
                    component: resolve => require(['../components/page/UserTable.vue'], resolve)
                },
                
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                
                
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)      
                },
                
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/*',
            redirect: '/readme'
        }
    ]
})
