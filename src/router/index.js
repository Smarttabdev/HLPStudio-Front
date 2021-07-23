import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

import * as StorageService from '@/services/storage.service'



Vue.use(Router);

const router = new Router({
    scrollBehavior()
    {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    mode: 'history',
    routes: routes.entries
    // routes: [

    //     //Auth
    //     {
    //         path: '/',
    //         redirect: '/calculator',
    //         // name: 'calculator',
    //         // meta: { layout: 'apps' },
    //         // component: () => import('../Pages/UserPages/Calculator.vue'),
    //     },
    //     {
    //         path: '/login',
    //         name: 'login',
    //         meta: { layout: 'userpages' },
    //         component: () => import('../Pages/AuthPages/Login.vue'),
    //     },
    //     {
    //         path: '/register',
    //         name: 'register',
    //         meta: { layout: 'userpages' },
    //         component: () => import('../Pages/AuthPages/Register.vue'),
    //     },
    //     {   
    //         path: '/pages/forgot-password',
    //         name: 'forgot-password',
    //         meta: { layout: 'userpages' },
    //         component: () => import('../Pages/AuthPages/ForgotPassword.vue'),
    //     },

    //     //User

    //     {
    //         path: '/calculator',
    //         name: 'calculator',
    //         meta: { layout: 'apps' },
    //         component: () => import('../Pages/UserPages/Calculator.vue')
    //     },
    //     {
    //         path: '/email',
    //         name: 'sendEmail',
    //         meta: { layout: 'apps' },
    //         component: () => import('../Pages/UserPages/Email.vue')
    //     },
    //     {
    //         path: '/value',
    //         name: 'value',
    //         meta: { layout: 'apps' },
    //         component: () => import('../Pages/UserPages/Value.vue')
    //     },

    //     // Admin

    //     {
    //         path: '/dashboard',
    //         name: 'dashboard',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/Dashboard.vue')
    //     },
    //     {
    //         path: '/data-input',
    //         name: 'data-input',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/DataInput.vue')
    //     },
    //     {
    //         path: '/lead',
    //         name: 'lead',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/Lead.vue')
    //     },
    //     {
    //         path: '/valuation',
    //         name: 'valuation',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/Valuation.vue')
    //     },
    //     {
    //         path: '/companies',
    //         name: 'company',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/Company.vue')
    //     },
    //     {
    //         path: '/option-ui',
    //         name: 'optionUi',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/OptionUI.vue')
    //     },
    //     {
    //         path: '/option-receiver',
    //         name: 'OptionReceiver',
    //         meta: { layout: 'default'},
    //         component: () => import('../Pages/AdminPages/OptionEmail.vue')
    //     },
    //     {
    //         path: '/form-builder',
    //         name: 'FormBuilder',
    //         meta: { layout: 'default' },
    //         component: () => import('../Pages/AdminPages/FormBuilder.vue')
    //     }

    // ]
})


router.beforeEach((to, from, next) =>
{
    let token = StorageService.getStorage('token')
    if (to.matched.some((record) => record.meta.requiresAuth))
    {
        if (token == null)
        {
            next({
                path: "/login",
                params: { nextUrl: to.fullPath },
            });
        } else
        {
            let user = JSON.parse(localStorage.getItem("user"));
            if (to.matched.some((record) => record.meta.is_admin))
            {
                if (user.is_admin == 1)
                {
                    next();
                } else
                {
                    next({ name: "chat" });
                }
            } else
            {
                next();
            }
        }
    } else if (to.matched.some((record) => record.meta.guest))
    {
        if (token == null)
        {
            next();
        } else
        {
            next({ name: "chat" });
        }
    } else
    {
        next();
    }
});

export default router;


