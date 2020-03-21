<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="topBanner">
      <div class="logo"></div>
      <div class="bt_lists">
        <!-- <span>首页</span>
        <span>景点</span>
        <span>城市</span>
        <span>航线</span>
        <span>个人信息</span>
        <span>跳转后台</span>-->
        <router-link to="./index.vue">首页</router-link>
        <router-link to="./spots.vue">景点</router-link>
        <router-link to="./city.vue">城市</router-link>
        <router-link to="./router.vue">航线</router-link>
        <router-link to="./person.vue">个人信息</router-link>
        <router-link to="./backstage.vue">跳转后台</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='less' scoped>
.topBanner {
  width: 100%;
  height: 60px;
  background-color: #a6c8b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .logo {
    width: 100px;
    height: 100%;
    background-image: url("../assets/img/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .bt_lists {
    font-size: 1.125rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-right: 50px;
  }
}
</style>