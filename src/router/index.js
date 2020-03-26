import Vue from "vue";
import Router from "vue-router";
const test = () => import( /* webpackChunkName:"test" */ "@/views/test/test")

Vue.use(Router);

export default new Router({
  base: "/h5activity/",
  mode: "history",

  routes: [{ //guildRule
      path: "/test",
      name: "test",
      component: test,
      meta: {
        title: "test"
      }
    }, 
   
  ]
});
