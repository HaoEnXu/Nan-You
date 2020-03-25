<template>
  <div>
    <div class="tabBar">
      <span
        :class="tabIndex == index?'active':''"
        v-for="(item,index) in tabArray"
        :key="index"
        @click="chooseTab(index)"
      >{{item}}</span>
    </div>
    <div class="tabContent">
      <div class="tabCase" v-for="(item,index) in linesArray" :key="index">
        <div class="case_base">
          <ul class="cb_left">
            <li class="line_base">
              <span class="line_name">{{item.name}}</span>
              <el-divider direction="vertical"></el-divider>
              <span class="line_date">
                <i class="el-icon-bicycle"></i>
                推荐出游：{{item.season}}
              </span>
            </li>
            <li class="line_hot">
              <span class="choose_num">{{item.num}}%</span>游客选择此条路线
            </li>
            <li class="line_content">{{item.content}}</li>
            <li class="line_peice">￥{{item.price}}起</li>
            <li class="look_detail">
              <i class="el-icon-plus"></i> 添加到购物车
            </li>
          </ul>
          <div class="cb_right" :style="{backgroundImage: 'url(' + item.map + ')'}"></div>
        </div>
        <div class="case_img">
          <div
            class="img_item"
            v-for="(item,index) in item.imgList"
            :key="index"
            :style="{backgroundImage:'url('+item+')'}"
          ></div>
        </div>
      </div>
      <div class="pagi">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabArray: ["全部线路", "区域行驶线路", "城市行驶线路"],
      tabIndex: 0,
      linesArray: [
        {
          name: "河南旅游局推荐精华6日线路",
          season: "4月-9月",
          num: "45",
          price: "2360",
          map: "../assets/img/bg_line.png",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          imgList: [
            require("../assets/img/1-1.jpeg"),
            require("../assets/img/1-2.jpeg"),
            require("../assets/img/1-3.jpeg"),
            require("../assets/img/1-4.jpeg")
          ]
        },
        {
          name: "河南旅游局推荐精华6日线路",
          season: "4月-9月",
          num: "45",
          price: "2360",
          map: "../assets/img/bg_line.png",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          imgList: [
            require("../assets/img/1-1.jpeg"),
            require("../assets/img/1-2.jpeg"),
            require("../assets/img/1-3.jpeg"),
            require("../assets/img/1-4.jpeg")
          ]
        },
        {
          name: "河南旅游局推荐精华6日线路",
          season: "4月-9月",
          num: "45",
          price: "2360",
          map: "../assets/img/bg_line.png",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          imgList: [
            require("../assets/img/1-1.jpeg"),
            require("../assets/img/1-2.jpeg"),
            require("../assets/img/1-3.jpeg"),
            require("../assets/img/1-4.jpeg")
          ]
        },
        {
          name: "河南旅游局推荐精华6日线路",
          season: "4月-9月",
          num: "45",
          price: "2360",
          map: "../assets/img/bg_line.png",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          imgList: [
            require("../assets/img/1-1.jpeg"),
            require("../assets/img/1-2.jpeg"),
            require("../assets/img/1-3.jpeg"),
            require("../assets/img/1-4.jpeg")
          ]
        },
        {
          name: "河南旅游局推荐精华6日线路",
          season: "4月-9月",
          num: "45",
          price: "2360",
          map: "../assets/img/bg_line.png",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          imgList: [
            require("../assets/img/1-1.jpeg"),
            require("../assets/img/1-2.jpeg"),
            require("../assets/img/1-3.jpeg"),
            require("../assets/img/1-4.jpeg")
          ]
        }
      ]
    };
  },
  beforeMount() {
    this.chooseLine(this.tabIndex);
  },
  components: {},

  computed: {},

  methods: {
    chooseTab: function(param) {
      this.tabIndex = param;
      this.chooseLine(this.tabIndex);
    },
    //  根据tab值获取具体内容
    chooseLine: function(param) {
      console.log(param);
    }
  }
};
</script>
<style lang='less' scoped>
.tabBar {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  span {
    display: block;
    padding: 20px 10px;
    font-size: 18px;
    position: relative;
    cursor: pointer;
    -moz-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
    &::after {
      content: "";
      width: 0%;
      height: 2px;
      background-color: #67c23a;
      position: absolute;
      left: 50%;
      bottom: 0%;
    }
    &.active {
      color: #67c23a;
      &::after {
        left: 0%;
        width: 100%;
      }
    }
  }
}
.tabContent {
  width: 100%;
  .tabCase {
    width: calc(100% - 40px);
    padding: 20px;
    margin: 20px 0;
    border: 1px solid rgb(204, 204, 204);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    .case_base {
      width: 500px;
      height: 200px;
      .cb_left {
        li {
          &.line_base {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            margin-bottom: 10px;
          }
          &.line_hot {
            margin-bottom: 16px;
          }
          &.line_content {
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 16px;
          }
          &.line_peice {
            color: red;
            font-size: 24px;
          }
          &.look_detail {
            width: 150px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 5px;
            margin-top: 20px;
            background-color: rgb(103, 194, 58);
            color: #fff;
            cursor: pointer;
            &:hover {
              background-color: rgb(128, 187, 99);
            }
          }
          span {
            display: inline-block;
            i {
              font-size: 24px;
            }
            &.line_name {
              font-size: 24px;
            }
            &.choose_num {
              color: #fff;
              font-size: 14px;
              width: 40px;
              height: 20px;
              line-height: 20px;
              margin-right: 20px;
              text-align: center;
              border-radius: 5px;
              background-color: #67c23a;
            }
          }
        }
      }
    }
    .case_img {
      width: calc(100% - 600px);
      height: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      .img_item {
        width: 200px;
        height: 150px;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
  .pagi {
    margin: 20px 0;
    .el-pagination {
      margin: 0 auto;
      text-align: center;
      .el-pager {
        li {
          /deep/&.number {
            &.active {
              color: #67c23a;
            }
            &:hover {
              color: #67c23a;
            }
          }
        }
      }
    }
  }
}
</style>