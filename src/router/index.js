import Vue from "vue";
import Router from "vue-router";
import home from "@/views/home.vue";
import index from "@/views/index.vue";
import spots from "@/views/spots.vue";
import city from "@/views/city.vue";
import goods from "@/views/goods.vue";
import person from "@/views/person.vue";
import message from "@/views/message.vue";
import lines from "@/views/lines.vue";
import login from "@/views/login.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home/index"
    },
    {
      path: "/home",
      name: "home",
      component: home,
      children: [
        {
          path: "index",
          name: "index",
          component: index
        },
        {
          path: "spots",
          name: "spots",
          component: spots
        },
        {
          path: "city",
          name: "city",
          component: city
        },
        {
          path: "lines",
          name: "lines",
          component: lines
        },
        {
          path: "person",
          name: "person",
          component: person
        },
        {
          path: "goods",
          name: "goods",
          component: goods
        },
        {
          path: "message",
          name: "message",
          component: message
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
