<template>
  <div class="index_cover">
    <!-- 轮播图 -->
    <div class="slide_banner">
      <el-carousel height="600px">
        <el-carousel-item v-for="item in slideArray" :key="item.src">
          <img class="block_img" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 热门景点 -->
    <div class="hot_spots">
      <div class="spots_article">
        <span class="spot_name">{{choosedSpot.name}}</span>
        <p class="spot_des" v-for="(item,index) in choosedSpot.des" :key="index">{{item}}</p>
      </div>
      <ul class="spots_img">
        <li
          class="spotItem"
          v-for="(item,index) in spotsArray"
          :key="index"
          :style="{backgroundImage:'url('+item.url+')'}"
          @click="spotsChoose(item,index)"
        ></li>
        <li class="spotMore">
          <span class="sm_img"></span>
          <span class="sm_text">M O R E</span>
        </li>
      </ul>
    </div>
    <!-- 热门城市 -->
    <div class="hot_city">
      <div class="city_title">
        <span class="ct_1">HOT&nbsp;&nbsp;&nbsp;&nbsp;CITY</span>
        <span class="ct_2">热门城市</span>
      </div>
      <div class="city_list">
        <span
          class="city_item"
          v-for="(item,index) in cityList"
          :key="index"
          :style="{backgroundImage:'url('+item.url+')'}"
          @click="chooseCity(item)"
        >{{item.name}}</span>
      </div>
    </div>
    <!-- 热门零售 -->
    <div class="hot_good">
      <div class="city_title">
        <span class="ct_1">HOT&nbsp;&nbsp;&nbsp;GOOD</span>
        <span class="ct_2">热门美食</span>
      </div>
      <div class="good_list">
        <div class="good_item" v-for="(item,index) in goodArray" :key="index">
          <span class="gi_img" :style="{backgroundImage:'url('+item.url+')'}"></span>
          <ul>
            <li>
              <h1>{{item.name}}</h1>
            </li>
            <li>所属：{{item.type}}</li>
            <li>
              推荐指数:
              <el-rate
                v-model="item.level"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 热门航线 -->
    <div class="hot_line">
      <div class="city_title">
        <span class="ct_1">HOT&nbsp;&nbsp;&nbsp;LINE</span>
        <span class="ct_2">热门路线</span>
      </div>
      <div class="line_list">
        <div class="line_item" v-for="(item,index) in lineArray" :key="index">
          <div class="line_left">0{{index+1}}</div>
          <div class="line_right">
            <span class="line_name">{{item.name}}</span>
            <p class="line_des">
              <span id="hot_comment">
                <i id="hot_flag"></i>热门评论：
              </span>
              {{item.des}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from "../components/bottomBar";
export default {
  data() {
    return {
      // 轮播背景图
      slideArray: [
        {
          src: require("../assets/img/QM_1.jpeg")
        },
        {
          src: require("../assets/img/LJ_2.jpeg")
        },
        {
          src: require("../assets/img/SS_1.jpeg")
        },
        {
          src: require("../assets/img/KF_2.jpeg")
        },
        {
          src: require("../assets/img/TH_3.jpeg")
        }
      ],
      // 热门景点背景图
      spotsArray: [
        {
          url: require("../assets/img/LJ_4.jpeg"),
          des: [
            "老君山（The Laojun Mountain），原名景室山，位于十三朝古都洛阳的栾川县县城东南三千米处，八百里伏牛山脉的主峰，海拔2297米。是国家AAAAA级旅游景区、世界地质公园、国家地质公园、国家级自然保护区、省级重点文物保护单位、省级风景名胜区，中国北方道教信众拜谒圣地，中原山水文化杰出代表，京洛名山。",
            "老君山有两千多年道教文化历史，东周时期，因“守藏室史”李耳（著名的“老子”）到此归隐修炼，被道教尊为太上老君，北魏时在山中建庙纪念，唐贞观年间受到皇封，修建“铁顶老君庙”，唐太宗赐名为“老君山”，沿袭至今，成为道教主流全真派圣地。明万历十九年颁赐老君山道经诏谕，封为“天下名山”。现存庙宇中顶峰老君庙规模最大，有“南有武当金顶，北有老君铁顶”之说"
          ],
          name: "老君山"
        },
        {
          url: require("../assets/img/LM_3.jpeg"),
          des: [
            "龙门石窟是中国石刻艺术宝库之一，现为世界文化遗产、全国重点文物保护单位、国家AAAAA级旅游景区，位于河南省洛阳市洛龙区伊河两岸的龙门山与香山上。龙门石窟与莫高窟、云冈石窟、麦积山石窟并称中国四大石窟。",
            "龙门石窟开凿于北魏孝文帝年间，之后历经东魏、西魏、北齐、隋、唐、五代、宋等朝代连续大规模营造达400余年之久，南北长达1公里，今存有窟龛2345个，造像10万余尊，碑刻题记2800余品。其中武则天根据自己的容貌仪态 ,在龙门石窟奉先寺雕刻卢舍那大佛，以及在洛阳紫微城建造天堂的消息传入日本后，圣武天皇发愿“朕亦奉造”，于是在奈良（平城京）建立东大寺。而“龙门二十品”是书法魏碑精华，褚遂良所书的“伊阙佛龛之碑”则是初唐楷书艺术的典范。"
          ],
          name: "龙门石窟"
        },
        {
          url: require("../assets/img/SL_2.jpeg"),
          des: [
            "少林寺，是中国佛教禅宗祖庭和中国功夫的发源地，现为世界文化遗产、全国重点文物保护单位、国家AAAAA级旅游景区，位于河南省郑州市登封市嵩山五乳峰下，因坐落于嵩山腹地少室山茂密丛林之中，故名“少林寺”。始建于北魏太和十九年（495年），是孝文帝为了安置他所敬仰的印度高僧跋陀尊者，在与都城洛阳相望的嵩山少室山北麓敕建而成。少林寺常住院占地面积约57600平方米，现任方丈是曹洞正宗第47世、第33代嗣祖沙门释永信。少林寺是世界著名的佛教寺院，是汉传佛教的禅宗祖庭，在中国佛教史上占有重要地位，被誉为“天下第一名刹”。因其历代少林武僧潜心研创和不断发展的少林功夫而名扬天下，素有“天下功夫出少林，少林功夫甲天下”之说。",
            "今天的少林寺不仅因其古老的佛教文化名扬天下，更因为其精湛实用的少林武功而驰名中外,少林寺建筑群主要包括常住院塔林、初祖庵、达摩洞等，为典型的汉传寺庙风格。自上世纪80年代电影《少林寺》播放起，少林功夫开始名扬世界，在此可以了解到少林寺历代高僧的生平。"
          ],
          name: "少林寺"
        }
      ],
      choosedSpot: {},
      choosedSpotIndex: 0,
      cityList: [
        {
          url: require("../assets/img/luoyang_1.png"),
          name: "洛阳"
        },
        {
          url: require("../assets/img/kaifeng_1.png"),
          name: "开封"
        },
        {
          url: require("../assets/img/zhenzhou_1.png"),
          name: "郑州"
        },
        {
          url: require("../assets/img/jiaozuo_1.png"),
          name: "焦作"
        },
        {
          url: require("../assets/img/nanyang_1.png"),
          name: "南阳"
        }
      ],
      choosedCity: {},
      goodArray: [
        {
          url: require("../assets/img/good_1.jpg"),
          name: "白吉馍",
          type: "面食",
          level: 5
        },
        {
          url: require("../assets/img/good_2.jpg"),
          name: "油酥烧饼",
          type: "风味小吃",
          level: 4.8
        },
        {
          url: require("../assets/img/good_3.jpg"),
          name: "道口烧鸡",
          type: "豫菜系",
          level: 4.2
        },
        {
          url: require("../assets/img/good_4.jpg"),
          name: "鲤鱼跳龙门",
          type: "鲁菜系",
          level: 3.5
        },
        {
          url: require("../assets/img/good_5.jpg"),
          name: "洛阳水席",
          type: "三八桌",
          level: 3.2
        },
        {
          url: require("../assets/img/good_6.jpg"),
          name: "炸麻叶",
          type: "零食",
          level: 3
        },
        {
          url: require("../assets/img/good_7.jpg"),
          name: "三不沾",
          type: "豫菜",
          level: 3
        },
        {
          url: require("../assets/img/good_8.jpg"),
          name: "逍遥胡辣汤",
          type: "河南十大名吃",
          level: 3
        }
      ],
      lineArray: [
        {
          name: "河南-云台山-龙门-少林寺-开封双高五日游",
          des:
            "这次旅行景点安排得很合理紧凑，全程无购物，团餐各有特色，洛阳水席好吃还好玩，素斋的口味也非常棒！导游翟海良（一位淳朴的河南小伙子）给我们团友留下了好印象，专业的讲解，耐心的服务，有职业道德和职业操守，对老人半价的退费都按照规定退了，绝对的五星好评！",
          price: 2220
        },
        {
          name: "河南-郭亮-云台山-龙门石窟-少林寺-开封双高5日游",
          des:
            "第一日少林寺坐电瓶车的时候建议大家坐最后面，倒着看满山风景好美，素斋要比一般团餐好些，上菜慢好吃的都在后面，哈哈哈。龙门石窟傍晚去的，人不多好拍照，行走台阶要小心。云台山红石峡一定要看，大自然的鬼斧神工。猕猴谷台阶很陡，不锻炼如我，你试试就知道了。",
          price: 2130
        },
        {
          name: "河南-云台山-龙门-少林寺-开封双卧五日游",
          des:
            "我们这次选的是牛人专线，全程无购物，导游杨俊伟认真负责，和气友善，时时刻刻给大家提醒注意事项，接站很顺利，是专车接站，没有等其他人。吃，住，行，游都很满意，是一次质量很高的旅游！全程智选假日酒店系列酒店，不但干净舒适，早餐也很丰富，酒店都位置市区繁华地段！",
          price: 1479
        },
        {
          name: "河南-郭亮-云台山-龙门-少林寺-清明上河园双高五日游",
          des:
            "旅游出行跟团一定选择途牛专线，品质出游，不拼车，零购物，导游翟海良服务周到，线路合理安排，调配线路，十一期间难得的排队时间短，讲解细致，认真负责。河南之旅，既观赏了自然景观，又欣赏到了人文文化，不虚此行。",
          price: 2320
        },
        {
          name: "河南-郭亮-云台山-龙少-黄河-开封双高六日游",
          des:
            "1、牛人专线2导游董理想3专车接送不拼车4全程无购物5最后一晚升级五星酒店，导游董理想乐观开朗、知识丰富，对旅客给了很多贴心建议，特别要感谢司机师傅，开车非常平稳，服务细心，全程开车未曾接电话，等候团队耐心，行李主动帮忙摆放",
          price: 2460
        }
      ]
    };
  },
  beforeMount: function() {
    this.choosedSpot = this.spotsArray[0];
  },
  methods: {
    // 选择景点
    spotsChoose: function(param1, param2) {
      this.choosedSpot = param1;
      this.choosedSpotIndex = this.param2;
      // this.$router.push("./home/spots");
    },
    // 选择城市
    chooseCity: function(param) {
      this.choosedCity = param;
      console.log(this.choosedCity);
      this.$router.push("/home/city");
    }
  },
  components: { bottomBar }
};
</script>
<style lang='less' scoped>
.slide_banner {
  width: 100%;
  height: 600px;
  .block_img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.hot_spots {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .spots_article {
    width: 50%;
    height: calc(100% - 20px);
    padding-top: 20px;
    .spot_name {
      height: 50px;
      line-height: 50px;
      display: inline-block;
      font-size: 26px;
      font-weight: bold;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: #00bc12;
        position: absolute;
        left: 0%;
        bottom: 0%;
      }
    }
    .spot_des {
      margin: 10px 0 50px 0;
      padding-right: 50px;
      line-height: 30px;
    }
  }
  .spots_img {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    li {
      width: 45%;
      height: 40%;
      background-repeat: no-repeat;
      background-origin: center;
      background-size: 100% 100%;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.2s linear;
      &:hover {
        box-shadow: 0 5px 12px 0 #ccc;
        // transform: scale(1.1);
      }
      &.spotMore {
        border-radius: 10px;
        font-family: "Rajdhani", sans-serif;
        position: relative;
        .sm_img {
          background-image: url("../assets/img/TH_1.jpeg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          clip-path: inset(0);
          filter: blur(5px);
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .sm_text {
          position: absolute;
          display: inline-block;
          z-index: 10;
          color: #fff;
          text-align: justify;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
.hot_city {
  width: 100%;
  height: 200px;
  background-color: #00bc12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .city_title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ct_1 {
      font-size: 20px;
      color: #fff;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 2px;
        background-color: #fff;
        left: 50%;
        bottom: -5px;
        margin-left: -20px;
      }
    }
    .ct_2 {
      font-size: 18px;
      font-weight: bolder;
      margin-top: 10px;
      color: #fff;
    }
  }
  .city_list {
    width: calc(100% - 200px);
    height: 80px;
    margin: 0 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    .city_item {
      width: 50px;
      border-radius: 50%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      text-align: center;
      padding-top: 70px;
      font-size: 20px;
      color: #000;
      cursor: pointer;
      transition: all 0.1s linear;
      &:hover {
        font-weight: bolder;
        transform: scale(1.2);
      }
    }
  }
}
.hot_good {
  margin-top: 30px;
  width: 100%;
  .city_title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    .ct_1 {
      font-size: 20px;
      color: #000000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 2px;
        background-color: #00bc12;
        left: 50%;
        bottom: -5px;
        margin-left: -20px;
      }
    }
    .ct_2 {
      font-size: 18px;
      font-weight: bolder;
      color: #00bc12;
      margin-top: 10px;
    }
  }
  .good_list {
    width: 100%;
    // height: 400px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    .good_item {
      width: 22%;
      height: 300px;
      border-radius: 5px;
      .gi_img {
        display: block;
        width: 100%;
        height: 200px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        }
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          margin: 5px 0;
          h1 {
            font-size: 20px;
            font-weight: bolder;
          }
        }
      }
    }
  }
}
.hot_line {
  width: 100%;
  margin-top: 20px;
  .city_title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    .ct_1 {
      font-size: 20px;
      color: #000000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 2px;
        background-color: #00bc12;
        left: 50%;
        bottom: -5px;
        margin-left: -20px;
      }
    }
    .ct_2 {
      font-size: 18px;
      font-weight: bolder;
      color: #00bc12;
      margin-top: 10px;
    }
  }
  .line_list {
    width: 100%;
    margin-top: 20px;
    .line_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 120px;
      position: relative;
      transition: all 0.2s linear;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #00bc12;
        left: 0%;
        bottom: 0%;
      }
      .line_left {
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #00bc12;
        color: #fff;
      }
      .line_right {
        width: calc(100% - 120px);
        // height: 80px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        transition: all 0.2s linear;
        cursor: pointer;
        .line_name {
          height: 30px;
          line-height: 30px;
          font-size: 20px;
          font-weight: bold;
        }
        .line_des {
          text-align: justify;
          font-weight: 300;
        }
        // &:hover {
        //   background-color: #00bc12;
        //   color: #fff;
        //   #hot_comment {
        //     color: #fff;
        //   }
        // }
        #hot_comment {
          color: #d81e06;
          font-weight: 800;
        }
        #hot_flag {
          width: 30px;
          height: 30px;
          display: inline-block;
          background-image: url("../assets/img/hot_1.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          vertical-align: middle;
        }
      }
      &:hover {
        transform: translateY(4px) translateX(-4px);
        box-shadow: 2px 4px 10px #00bc12;
      }
    }
  }
}
</style>