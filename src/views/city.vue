<template>
  <div class="cover">
    <div class="cityList">
      <div class="cityItem" v-for="(item,index) in cityList" :key="index">
        <img :src="item.url" :alt="item.name" />
        <ul class="ci_name">
          <li class="ci_name_1">{{item.name}}</li>
          <li class="ci_name_2">{{item.secondName}}</li>
        </ul>
        <span class="ci_num">
          <strong>{{item.pNum}}</strong>人去过
        </span>
        <p class="ci_des">{{item.des}}</p>
        <div class="ci_spots">
          <span class="ci_spot_title">热门景点</span>
          <span class="ci_spotItem" v-for="(item,index) in item.spotList" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <!-- 底栏 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [
        {
          name: "洛阳",
          secondName: "LuoYang",
          url: require("../assets/img/LM_2.jpeg"),
          pNum: "13907",
          des: "洛阳位于河南省西部，是我国“七大古都”之一。千年帝都，牡丹花城",
          spotList: ["龙门石窟", "白马寺", "老君山"]
        },
        {
          name: "郑州",
          secondName: "ZhengZhou",
          url: require("../assets/img/SS_1.jpeg"),
          pNum: "14732",
          des:
            "曾是华夏文明的发源地，承载着璀璨的千年文明，日月轮回，朝代更迭，在历史的舞台上曾描绘出无比波澜壮阔的一笔。",
          spotList: ["少林寺", "嵩山", "二七纪念塔"]
        },
        {
          name: "开封",
          secondName: "KaiFeng",
          url: require("../assets/img/QM_1.jpeg"),
          pNum: "9025",
          des:
            "开封享有七朝都会、文化名城、大宋故都、菊城之盛名，悠久的历史，深厚的文化积淀。",
          spotList: ["清明上河园", "开封府", "大相国寺"]
        },
        {
          name: "焦作",
          secondName: "JiaoZuo",
          url: require("../assets/img/YT_1.jpeg"),
          pNum: "4827",
          des:
            "焦作市位于河南省西北部，古称山阳，是华夏民族早期活动的中心区域之一。",
          spotList: ["云台山", "红石峡", "茱萸峰景区"]
        },
        {
          name: "新乡",
          secondName: "XinXiang",
          url: require("../assets/img/XX_1.jpeg"),
          pNum: "4281",
          des:
            "新乡市地处中原腹地，紧邻河南省会郑州，襟带辐射豫北，拥有各类自然景观数百处。除了著名的郭亮、万仙山、八里沟等著名自然景观，还有比干庙、潞王陵",
          spotList: ["万仙山", "郭亮村", "绝壁长廊"]
        },
        {
          name: "安阳",
          secondName: "AnYang",
          url: require("../assets/img/TH_2.jpeg"),
          pNum: "3099",
          des:
            "安阳是中国七大古都之一，国家级历史文化名城，是甲骨文的故乡，《周易》的发源地。河南安阳殷墟已经作为世界文化遗产列入《世界遗产名录》。",
          spotList: ["太行大峡谷", "殷墟", "红旗渠风景"]
        },
        {
          name: "信阳",
          secondName: "XinYang",
          url: require("../assets/img/XY_1.jpeg"),
          pNum: "2725",
          des:
            "信阳位于河南省南部，特色景点甚多，多条旅游路线，以鸡公山、南湾湖、汤泉池为主的生态旅游；以新县“红色景区”为首的红色之旅",
          spotList: ["鸡公山风景区", "南湾湖风景区"]
        },
        {
          name: "南阳",
          secondName: "NanYang",
          url: require("../assets/img/NY_1.jpeg"),
          pNum: "3056",
          des:
            "南阳市位于河南省西南部、豫鄂陕三省交界处，为三面环山、南部开口的盆地，因地处伏牛山以南，汉水以北而得名，南阳又有“南都”、“帝乡”之称",
          spotList: ["南阳武侯祠", "西峡龙潭沟", "七星潭"]
        },
        {
          name: "许昌",
          secondName: "XuChang",
          url: require("../assets/img/XC_3.jpg"),
          pNum: "2752",
          des:
            "许昌市位于河南省中部，是中原城市群核心城市之一，中国历史文化名城，历史上历来是群雄逐鹿，兵家必争之地。也是第一个世袭王朝夏朝的发源地和国都。三国时期，曾是曹...",
          spotList: ["神垕古镇", "许昌春秋楼", "曹丞相府"]
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='css' scoped>
@import "../css/city.css";
</style>