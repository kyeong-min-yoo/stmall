
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderMgmtManager from "./components/listers/OrderOrderMgmtCards"
import OrderOrderMgmtDetail from "./components/listers/OrderOrderMgmtDetail"

import SearchProductView from "./components/SearchProductView"
import SearchProductViewDetail from "./components/SearchProductViewDetail"
import DeliveryDeliveryManager from "./components/listers/DeliveryDeliveryCards"
import DeliveryDeliveryDetail from "./components/listers/DeliveryDeliveryDetail"

import ProcuctInventoryManager from "./components/listers/ProcuctInventoryCards"
import ProcuctInventoryDetail from "./components/listers/ProcuctInventoryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orderMgmts',
                name: 'OrderOrderMgmtManager',
                component: OrderOrderMgmtManager
            },
            {
                path: '/orders/orderMgmts/:id',
                name: 'OrderOrderMgmtDetail',
                component: OrderOrderMgmtDetail
            },

            {
                path: '/orders/searchProducts',
                name: 'SearchProductView',
                component: SearchProductView
            },
            {
                path: '/orders/searchProducts/:id',
                name: 'SearchProductViewDetail',
                component: SearchProductViewDetail
            },
            {
                path: '/deliveries/deliveries',
                name: 'DeliveryDeliveryManager',
                component: DeliveryDeliveryManager
            },
            {
                path: '/deliveries/deliveries/:id',
                name: 'DeliveryDeliveryDetail',
                component: DeliveryDeliveryDetail
            },

            {
                path: '/procucts/inventories',
                name: 'ProcuctInventoryManager',
                component: ProcuctInventoryManager
            },
            {
                path: '/procucts/inventories/:id',
                name: 'ProcuctInventoryDetail',
                component: ProcuctInventoryDetail
            },



    ]
})
