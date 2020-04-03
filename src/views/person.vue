<template>
  <div>
    <tabBar @changeTab="changeTab" :list="list"></tabBar>
    <div class="cover">
      <div class="msg person" v-if="this.currentIndex == 0">
        <!-- 用户姓名 -->
        <ul>
          <li>
            <span class="li_title">用户姓名：</span>
            <el-input v-model="userName" placeholder="请输入您的名字"></el-input>
          </li>
          <li>
            <span class="li_title">用户性别：</span>
            <i
              id="male"
              class="el-icon-male"
              :class="this.sex==='male'?'active':''"
              @click="chooseSex"
            ></i>
            <i
              id="female"
              class="el-icon-female"
              :class="this.sex==='female'?'active':''"
              @click="chooseSex"
            ></i>
          </li>
          <li>
            <span class="li_title">联系方式：</span>
            <el-input v-model="userPhone" placeholder="请输入联系方式"></el-input>
          </li>
        </ul>
        <!-- 用户性别 -->
        <!-- 手机号 -->
      </div>
      <div class="msg shop" v-else>
        <div class="orderItem" v-for="(item,index) in orderList" :key="index">
          <!-- 内容 -->
          <div class="Area content">
            <span class="orderTitle">订单信息</span>
            <ul>
              <li class="orderName">{{item.name}}</li>
              <li class="orderPlace">
                目的地：
                <i class="el-icon-location">河南</i>
              </li>
              <li class="orderContent">路线详情：{{item.content}}</li>
              <li class="orderPrice">￥{{item.price}}</li>
            </ul>
          </div>
          <!-- 用户信息 -->
          <div class="Area user">
            <ul>
              <li>用户姓名：{{item.user.name}}</li>
              <li>联系方式：{{item.user.phone}}</li>
            </ul>
          </div>
          <!-- 选择 -->
          <div class="Area choose">
            <i class="chooseBtn" @click="chooseThis(item)" :class="item.choose == true?'active':''"></i>
          </div>
        </div>
        <div class="bottomArea">
          <span class="totalPrice">总计：{{priceTotal}}</span>
          <span class="account" @click="accound">结算</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "../components/tabBar";
export default {
  data() {
    return {
      list: ["基本信息", "购物车"],
      currentIndex: 0,
      // 基础
      userName: "",
      userPhone: "",
      sex: "male",
      orderList: [
        {
          choose: false,
          name: "河南旅游局推荐精华6日线路",
          person: 2,
          price: "2360",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          user: {
            name: "猪猪",
            phone: "13258746412"
          }
        },
        {
          choose: false,
          name: "河南旅游局推荐精华6日线路",
          person: 2,
          price: "2360",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          user: {
            name: "猪猪",
            phone: "13258746412"
          }
        },
        {
          choose: false,
          name: "河南旅游局推荐精华6日线路",
          person: 2,
          price: "2360",
          content: "郑州  →  云台寺  →  洛阳  →  少林寺  →  开封",
          user: {
            name: "猪猪",
            phone: "13258746412"
          }
        }
      ],
      priceTotal: 0
    };
  },

  components: { tabBar },

  methods: {
    changeTab: function(param) {
      this.currentIndex = param;
    },
    chooseSex: function(e) {
      this.sex = e.target.id;
    },
    chooseThis: function(param) {
      var item = param;
      if (item.choose) {
        item.choose = !item.choose;
        this.priceTotal -= parseInt(item.price);
      } else {
        item.choose = !item.choose;
        this.priceTotal += parseInt(item.price);
      }
    },
    accound: function() {
      this.$confirm("小主，确定要结算所有订单么？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "支付成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消支付"
          });
        });
    }
  }
};
</script>
<style lang='less' scoped>
@import "../css/person.css";
</style>