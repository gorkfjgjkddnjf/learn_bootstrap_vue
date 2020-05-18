import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import main from '../components/main-block'

Vue.use(Router);

let router = new Router({
    routes:[      
        {
            path:'/',
            name: 'main',
            component: main,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },

    ]
});

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)){
//         if(store.getters.IS_LOGGED){
//             next()
//             return
//         }
//         next('/login')
//     }else{
//         next()
//     }
// })

export default router