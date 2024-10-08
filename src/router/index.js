import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import DefaultLayout from "@/views/WebLayout/DefaultLayout.vue"
const routes = [
    {
        path:'/', 
        name:'Public',
        component:DefaultLayout,
       // redirect: '/',
        children:[
            {
                path:'/',
                name:'Welcome',
                component:Welcome
            }
        ]
    },
    // {
    //     path:'/',
    //     name:'AboutPage',
    //     component:DefaultLayout,
    //     redirect: '/page',
    //     children:[
    //         {
    //             path:'/page/about',
    //             name:'About',
    //             component:About
    //         }
    //     ]
    // },
]   
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router