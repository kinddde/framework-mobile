/**
 * 使用 framework7 router
 *
 * 文档：https://framework7.io/vue/navigation-router.html
 *
 * 注意：framework7 和 vue-router 不兼容，切换页面会出现未知bug
 */

import HomePage from "../pages/home.vue";
import AboutPage from "../pages/about.vue";
import LoginPage from "../pages/login.vue";

export default [
  {
    path: "/",
    component: HomePage,
    beforeEnter: function(to, from, resolve, reject) {
      console.log("enter", to, from);
      let flag = true;
      if (flag) {
        resolve();
      } else {
        reject();
      }
    },
    beforeLeave: function(to, from, resolve, reject) {
      console.log("leave", to, from);

      let flag = true;
      if (flag) {
        resolve();
      } else {
        reject();
      }
    }
  },
  {
    path: "/about/:name",
    component: AboutPage
  },
  {
    path: "/login",
    component: LoginPage
  },

  {
    path: "(.*)",
    asyncComponent: () => import(/* webpackChunkName: 'notfound' */ "../components/404.vue")
  }
];
