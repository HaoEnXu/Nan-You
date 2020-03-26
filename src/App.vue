<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "./css/base.less";
#app {
  width: 100%;
  height: 100%;
  min-width: 1400px;
}
html {
  /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
  -ms-overflow-style: none;
  /*火狐下隐藏滚动条*/
  overflow: -moz-scrollbars-none;
  user-select: none;
}

//谷歌适用
::-webkit-scrollbar {
  display: none;
}
</style>
