<template>
  <div id="mes_cover">
    <div class="messageList" :class="messageList.length<=0?'active':''">
      <div
        class="messageItem"
        v-show="messageList.length > 0"
        v-for="(item,index) in messageList"
        :key="index"
      >
        <span class="userHead"></span>
        <ul>
          <li>
            <span class="userName">{{item.name}}</span>
            <span class="sendDate">{{item.date}}</span>
          </li>
          <li>{{item.text}}</li>
        </ul>
      </div>
      <el-pagination
        class="page"
        layout="prev, pager, next"
        :total="messageList.length"
        :page-size="5"
        :current-page="1"
        @current-change="currentChange"
        :hide-on-single-page="true"
      ></el-pagination>
    </div>
    <div class="sendMessage">
      <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea"></el-input>
      <el-button type="success" @click="sendMessage">发布留言</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      messageList: [
        {
          name: "用户15548131542",
          date: "2019-10-5",
          text: "背包塞满青涩的回忆，就要踏上成长的旅程"
        },
        {
          name: "用户02",
          date: "2018-4-8",
          text: "就到这个路口，你就不要送我你快回去"
        },
        {
          name: "用户03",
          date: "2019-7-3",
          text: "相逢又告别一句再见，过去的一切不会重现"
        },
        {
          name: "用户04",
          date: "2019-8-6",
          text: "失落的时候请像我一样相信你自己"
        },
        {
          name: "用户05",
          date: "2019-3-7",
          text: "世界这么大还是遇见你多少次疯狂 多少天真"
        },
        {
          name: "用户06",
          date: "2017-6-8",
          text: "一起做过梦有一天我们会重逢故里"
        },
        {
          name: "用户07",
          date: "2018-12-4",
          text: "世界这么大还是遇见你一起走过许多个四季"
        },
        {
          name: "用户08",
          date: "2019-11-7",
          text: "天南地北别忘记我们之间的情谊"
        },
        {
          name: "用户09",
          date: "2019-10-1",
          text: "背包塞满青涩的回忆就要踏上成长的旅程"
        }
      ]
    };
  },
  beforeMount() {
    // 获取数据列表
    this.getMsgList();
  },
  components: {},

  computed: {},

  methods: {
    getMsgList: function() {
      console.log(111);
    },
    // 发布留言
    sendMessage: function() {
      // 获取输入框内容
      let message = this.textarea;
      // 发送到服务器，根据返回值进行不同的操作
      this.$request.put("...", {}).then(res => {
        // 数据同步成功，重新获取数据列表，更新数据
        if (res.data.errorCode == 200) {
          this.getMsgList();
        } else {
          // 数据同步失败
          this.$message.error("数据更新失败");
        }
      });
    },
    currentChange: function(res) {
      // res就是当前分页的显示页，根据显示页调取getMsglist获取数据
      console.log(res);
      console.log(qqq);
    }
  }
};
</script>
<style lang='less' scoped>
#mes_cover {
  width: 100%;
  min-height: 40rem;
  padding: 0;
  .messageList {
    width: 100%;
    min-height: 18.75rem;
    background-color: #ffffff;
    position: relative;
    padding-bottom: 1.875rem;
    .messageItem {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #e4e7ed;
        position: absolute;
        left: 0%;
        bottom: 0px;
      }
      .userHead {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url("../assets/img/user_1.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 30px;
      }
      ul {
        li {
          &:first-child {
            margin-bottom: 10px;
          }
          .userName {
            font-size: 18px;
            color: #ccc;
            margin-right: 20px;
          }
          .sendDate {
            font-size: 16px;
            color: #ccc;
          }
        }
      }
    }
    .page {
      position: absolute;
      left: 50%;
      bottom: 0.3125rem;
      transform: translateX(-50%);
    }
    &.active {
      background-image: url("../assets/img/empty.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .sendMessage {
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}
</style>