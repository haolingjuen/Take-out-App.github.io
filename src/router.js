import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // 底部一级导航
    {
      path: '/',
      component:  () =>import('./views/index'),
      children:[
        {path: '/Order',
         component: () =>import('./views/Order'),
         hidden:true,
          children:[
          ]
        },
        {path: '/PersonalCenter',
          component: () =>import('./views/PersonalCenter'),
          hidden:true
        },
        {path: '/Search',
          component: () =>import('./views/Search'),
          hidden:true
        },
				{path: '/Sign',
					component: () =>import('./views/Sign'),
					hidden:true
				},
				{path: '/Register',
					component: () =>import('./views/Register'),
					hidden:true
				},
        {path: '',
          component: () =>import('./views/TakeoutFood'),
          hidden:true,
          children:[
            {
              path: 'TakeoutFood/Business',
              name:'Business',
              component: resolve => require(['./components/TakeoutFood/Business'], resolve)
            }
          ]
        },
      ]
    },
    // {
    //   path: '/Shopcar/GoodDetails',
    //   component: () =>import('./components/TakeoutFood/shopcar/Goods/GoodDetails'),
    //   hidden:true
    // },

   // 购物车
    {
      path:'/Shopcar',
      component: () =>import('./views/Shopcar'),
      hidden:true,
      children:[
        {path: '/Shopcar/Seller',
          component: () =>import('./components/TakeoutFood/shopcar/Seller/Seller'),
          hidden:true
        },
        {path: '/Shopcar/Ratings',
          component: () =>import('./components/TakeoutFood/shopcar/Ratings/Ratings'),
          hidden:true,
        },
        {path: '',
          component: () =>import('./components/TakeoutFood/shopcar/Goods/Goods'),
          hidden:true
        }
      ]
    },
   // 订单
    {path: '/Order/ConfirmPayment',
      component: () =>import('./components/Order/ConfirmPayment'),
      hidden:true},

    // 地址
    {path: '/Address/add',
      component: () =>import('./components/Order/Address/Add'),
      hidden:true},

    {path: '/Address',
      component: () =>import('./components/Order/Address/Address'),
      hidden:true},
    //地图
    {path: '/map',
      component: () =>import('./views/map'),
      hidden:true},

  ]
})
