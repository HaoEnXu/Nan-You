<template>
  <div id="cover">
    <div class="topBanner">
      <div class="logo"></div>
      <div class="bt_lists">
        <router-link class="base_btn" to="/home/index" exact>首页</router-link>
        <router-link class="base_btn" to="/home/spots">景点</router-link>
        <router-link class="base_btn" to="/home/city">城市</router-link>
        <router-link class="base_btn" to="/home/lines">航线</router-link>
        <router-link class="base_btn" to="/home/person">个人信息</router-link>
        <router-link class="base_btn" to="/home/message">留言板</router-link>
      </div>
    </div>
    <router-view class="view_container"></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#cover {
  width: 100%;
  .topBanner {
    width: calc(100% - 25rem);
    height: 3.75rem;
    margin: 0 12.5rem;
    background-color: #67c23a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .logo {
      width: 6.25rem;
      height: 100%;
      background-image: url("../assets/img/logo.png");
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
    }
    .bt_lists {
      font-size: 1.125rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin-right: 50px;
      .base_btn {
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #c0c4cc;
        margin-left: 20px;
        display: inline-block;
        position: relative;
        &::after {
          content: "";
          width: 50%;
          height: 0;
          background-color: #303133;
          position: absolute;
          left: 50%;
          bottom: 5px;
          transition: all 0.2s;
        }
        &:hover {
          color: #303133;
          &::after {
            left: 0%;
            width: 100%;
            height: 2px;
          }
        }

        &.router-link-active,
        .router-link-exact-active {
          color: #392f41;
          &::after {
            left: 0%;
            width: 100%;
            height: 2px;
          }
        }
      }
    }
  }
  .view_container {
    width: calc(100% - 25rem);
    height: 100%;
    padding: 0 12.5rem;
  }
}
</style>