<template>
  <div class="cover">
    <div
      class="tabItem"
      :class="tabIndex == index?'active':''"
      @click="changeTab(index)"
      v-for="(item,index) in list"
      :key="index"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data: function() {
    return {
      tabIndex: 0,
      tab: {}
    };
  },
  props: {
    list: {
      type: Array
    }
  },

  computed: {},

  methods: {
    changeTab: function(param) {
      this.tabIndex = param;
      this.$emit("changeTab", this.tabIndex);
    }
  }
};
</script>
<style lang='less' scoped>
.cover {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  .tabItem {
    display: block;
    font-size: 18px;
    color: rgb(184, 184, 184);
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 5px 15px;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      height: 16px;
      width: 1px;
      background-color: #ccc;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      &::before {
        display: none;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0%;
      height: 2px;
      transition: all 0.2s ease-in-out;
    }
    &.active {
      color: #5ce01a;
      &::after {
        left: 0%;
        width: 100%;
        background-color: rgb(92, 224, 26);
      }
    }
  }
}
</style>