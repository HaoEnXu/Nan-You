<template>
  <div>
    <tabBar @changeTab="changeTab" :list="list"></tabBar>
  </div>
</template>

<script>
import tabBar from "../components/tabBar";
export default {
  data() {
    return {
      list: ["基本信息", "购物车"]
    };
  },

  components: { tabBar },

  methods: {
    changeTab: function(param) {
      console.log(param);
    }
  }
};
</script>
<style lang='css' scoped>
</style>