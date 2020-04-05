<template>
  <div class="cover">
    <dl>
      <dt>南游旅游网</dt>
      <dd>中国年轻一代用得更多的旅游网站</dd>
      <dd>上亿旅行者共同打造的"旅行神器"</dd>
      <dd>60,000 多个全球旅游目的地</dd>
      <dd>600,000 个细分目的地新玩法</dd>
      <dd>760,000,000 次攻略下载</dd>
      <dd>38,000 家旅游产品供应商</dd>
    </dl>
    <dl>
      <dt>关于我们</dt>
      <dd>
        <a href="javascript:;">关于马蜂窝</a>
        <a href="javascript:;">联系我们</a>
      </dd>
      <dd>
        <a href="javascript:;">隐私政策</a>
        <a href="javascript:;">商标声明</a>
      </dd>
      <dd>
        <a href="javascript:;">服务协议</a>
      </dd>
      <dd>
        <a href="javascript:;">商城平台服务协议</a>
      </dd>
      <dd>
        <a href="javascript:;">网络信息侵权通知指引</a>
      </dd>
      <dd>
        <a href="javascript:;">南游旅游网服务监督员</a>
      </dd>
      <dd>
        <a href="javascript:;">网站地图</a>
        <a href="javascript:;">加入南游</a>
      </dd>
    </dl>
    <dl>
      <dt>旅行服务</dt>
      <dd>
        <a href="javascript:;">旅游攻略</a>
        <a href="javascript:;">酒店预订</a>
      </dd>
      <dd>
        <a href="javascript:;">旅游特价</a>
        <a href="javascript:;">国际租车</a>
      </dd>
      <dd>
        <a href="javascript:;">旅游问答</a>
        <a href="javascript:;">旅游保险</a>
      </dd>
      <dd>
        <a href="javascript:;">旅游指南</a>
        <a href="javascript:;">旅游资讯</a>
      </dd>
      <dd>
        <a href="javascript:;">订火车票</a>
        <a href="javascript:;">APP下载</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "bottomBar",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.cover {
  width: 100%;
  height: 300px;
  background-color: #3c3c3c;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  dl {
    margin: 30px 0;
    dt {
      font-size: 20px;
      color: #c0c4cc;
    }
    dd {
      font-size: 14px;
      color: #909399;
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      a {
        color: #909399;
        margin-right: 20px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>