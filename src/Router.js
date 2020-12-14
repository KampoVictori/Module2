import {createRouter, createWebHistory} from 'vue-router';

import zavd1 from './components/Zavd1.vue'
import zavd2 from './components/Zavd2.vue'
import zavd3 from './components/Zavd3.vue'
import home from './components/photo.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: home
        },
        {
            path: '/zavd1',
            component: zavd1
        },
        {
            path: '/zavd2',
            component: zavd2
        },
        {
            path: '/zavd3',
            component: zavd3
        },
]
});

export default Router;