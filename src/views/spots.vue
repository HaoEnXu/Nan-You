<template>
  <div>
    <!-- 必游top5 -->
    <div class="mustGo">
      <span class="title">必游景点Top5</span>
      <div class="mg_item" v-for="(item,index) in mg_list" :key="index">
        <div class="mg_left">
          <div class="mg_title">
            <span class="mg_index">{{index+1}}</span>
            <span class="mg_name">{{item.name}}</span>
            <span class="mg_num">{{item.num}}人去过</span>
          </div>
          <p class="mg_des">{{item.des}}</p>
          <div class="mg_more">
            这里还包含景点：
            <span class="mg_more_item" v-for="(it,ind) in item.more" :key="ind">{{it}}</span>
          </div>
        </div>
        <div class="mg_right">
          <img
            v-for="(ite,index) in item.picList "
            :key="index"
            :src="ite"
            alt
            :class="'mg_photo_'+index"
          />
        </div>
      </div>
    </div>
    <!-- 热门景点 -->
    <div class="hotGo">
      <span class="title">热门景点</span>
      <div class="hg top">
        <a href v-for="(ite,index) in hgList1 " :key="index" :class="'hg_top_'+index">
          <img :src="ite.src" alt />
          <span class="hg_top_name">{{ite.name}}</span>
          <div class="mark">
            <span class="hg_mark_name">{{ite.name}}</span>
            <span class="hg_mark_des">{{ite.des}}</span>
          </div>
        </a>
      </div>
      <div class="hg bot">
        <a href v-for="(ite,index) in hgList2 " :key="index" :class="'hg_bot_'+index">
          <img :src="ite.src" alt />
          <span class="hg_top_name">{{ite.name}}</span>
          <div class="mark">
            <span class="hg_mark_name">{{ite.name}}</span>
            <span class="hg_mark_des">{{ite.des}}</span>
          </div>
        </a>
      </div>
    </div>
    <!-- 所有景点 -->
    <div class="allGo">
      <span class="title">全部景点</span>
      <div class="ag_list">
        <div class="ag_item" v-for="(item,index) in agList" :key="index">
          <img :src="item.src" alt />
          <span class="ag_img_name">{{item.name}}</span>
        </div>
      </div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mg_list: [
        {
          name: "龙门石窟",
          num: "2974",
          des: "中国三大石窟之一，拥有97000余尊佛像的石刻艺术宝库",
          more: [
            "东山石窟",
            "西山石窟",
            "香山寺",
            "龙门石窟-白园",
            "奉先寺",
            "万佛洞",
            "龙门大桥",
            "潜溪寺",
            "宾阳洞",
            "莲花洞",
            "古阳洞",
            "药方洞",
            "看经寺",
            "蒋宋别墅",
            "擂鼓台北洞",
            "摩崖三佛龛"
          ],
          picList: [
            require("../assets/img/LM_1.jpeg"),
            require("../assets/img/LM_2.jpeg"),
            require("../assets/img/LM_3.jpeg")
          ]
        },
        {
          name: "清明上河园",
          num: "1428",
          des: "根据《清明上河图》为蓝本而建造的大型宋代文化实景主题公园",
          more: ["七盛角", "《大宋·东京梦华》", "拂云阁", "清明上河园赏菊花"],
          picList: [
            require("../assets/img/QM_1.jpeg"),
            require("../assets/img/QM_2.jpeg"),
            require("../assets/img/QM_3.jpeg")
          ]
        },
        {
          name: "白马寺",
          num: "1724",
          des: "古迹多为元、明、清时所留，中国第一古刹",
          more: [
            "齐云塔",
            "白马像",
            "汉魏洛阳故城宫城阊阖门遗址",
            "讲解接待处",
            "摄摩腾大师墓",
            "竺法兰大师墓",
            "释源陈展馆",
            "白马寺村文化广场",
            "摄摩腾殿",
            "清凉台",
            "毗卢阁"
          ],
          picList: [
            require("../assets/img/BM_1.jpeg"),
            require("../assets/img/BM_2.jpeg"),
            require("../assets/img/BM_3.jpeg")
          ]
        },
        {
          name: "少林寺",
          num: "1450",
          des: "中国久负盛名的佛教寺院，也是少林武术的发祥地",
          more: [
            "碑林",
            "大雄宝殿",
            "藏经阁",
            "少林寺演武厅功夫表演团",
            "三皇寨",
            "塔林",
            "立雪亭",
            "达摩院",
            "连天索桥",
            "天王殿",
            "二祖庵",
            "初祖庵大殿",
            "达摩洞",
            "观音殿",
            "文殊殿",
            "六祖堂",
            "三皇寨-普贤殿",
            "清凉寺",
            "药师精舍",
            "罗汉堂",
            "嵩山少林风景区石牌坊"
          ],
          picList: [
            require("../assets/img/SL_1.jpeg"),
            require("../assets/img/SL_2.jpeg"),
            require("../assets/img/SL_3.jpeg")
          ]
        },
        {
          name: "老君山",
          num: "251",
          des: "官殿及庙宇群落聚集，视被为道教圣地",
          more: [
            "观音殿",
            "老君庙",
            "趣苑弄溪",
            "钟楼",
            "穿云栈道",
            "祖师殿",
            "峰林索道",
            "财神殿",
            "峰林",
            "鼓楼",
            "悟道石",
            "殿娘娘",
            "连心石",
            "一洞五天",
            "老子传经石",
            "鹰嘴石",
            "白龙瀑",
            "仙人桥",
            "八戒访仙",
            "天门开阖",
            "仙人观云海"
          ],
          picList: [
            require("../assets/img/LJ_1.jpeg"),
            require("../assets/img/LJ_2.jpeg"),
            require("../assets/img/LJ_3.jpeg")
          ]
        }
      ],
      hgList1: [
        {
          src: require("../assets/img/YT_1.jpeg"),
          name: "云台山",
          des: "被誉为“北方的九寨沟”，内部有国内落差最大的瀑布，颇为壮观"
        },
        {
          src: require("../assets/img/KF_1.jpeg"),
          name: "开封府",
          des: "体验府衙文化，亲睹包公威严"
        },
        {
          src: require("../assets/img/SS_1.jpeg"),
          name: "嵩山风景区",
          des: "五岳之一，道、佛、儒三教荟萃，是三教合一最完美的体现"
        },
        {
          src: require("../assets/img/LB_1.jpeg"),
          name: "洛阳博物馆",
          des: "馆藏极其丰富，还能观赏先秦时期的珍品"
        },
        {
          src: require("../assets/img/LL_1.jpeg"),
          name: "洛阳老街",
          des: "距今已有3050年的复古街道，是洛阳历史文化的缩影"
        }
      ],
      hgList2: [
        {
          src: require("../assets/img/XG_1.jpeg"),
          name: "大相国寺",
          des:
            "中国著名的佛教古刹，千百年来许多神奇的传说让相国寺添加了许多神秘的色彩"
        },
        {
          src: require("../assets/img/GB_1.jpeg"),
          name: "洛阳古代艺术博物馆",
          des: "地下展区有规模恢弘的地下古墓群"
        },
        {
          src: require("../assets/img/GL_1.jpeg"),
          name: "关林庙",
          des: "埋葬关羽首级的地方，其中舞楼最具特色"
        },
        {
          src: require("../assets/img/LT_1.jpg"),
          name: "龙亭公园",
          des: "集皇家园林、历史文物、秀美风光于一体"
        },
        {
          src: require("../assets/img/TH_1.jpeg"),
          name: "太行大峡谷",
          des: "汇聚雄奇的北国风光，是户外探险者的不二圣地"
        }
      ],
      agList: [
        {
          src: require("../assets/img/LM_1.jpeg"),
          name: "龙门石窟"
        },
        {
          src: require("../assets/img/QM_1.jpeg"),
          name: "清明上河园"
        },
        {
          src: require("../assets/img/BM_1.jpeg"),
          name: "白马寺"
        },
        {
          src: require("../assets/img/SL_4.jpeg"),
          name: "少林寺"
        },
        {
          src: require("../assets/img/LJ_2.jpeg"),
          name: "老君山"
        },
        {
          src: require("../assets/img/YT_1.jpeg"),
          name: "云台山"
        },
        {
          src: require("../assets/img/KF_1.jpeg"),
          name: "开封府"
        },
        {
          src: require("../assets/img/LJM_1.jpeg"),
          name: "丽景门"
        },
        {
          src: require("../assets/img/SS_1.jpeg"),
          name: "嵩山风景区"
        },
        {
          src: require("../assets/img/LB_1.jpeg"),
          name: "洛阳博物馆"
        },
        {
          src: require("../assets/img/HS_1.jpeg"),
          name: "红石峡"
        },
        {
          src: require("../assets/img/LL_1.jpeg"),
          name: "洛阳老街"
        },
        {
          src: require("../assets/img/XG_1.jpeg"),
          name: "大相国寺"
        },
        {
          src: require("../assets/img/LT_1.jpg"),
          name: "龙亭公园"
        },
        {
          src: require("../assets/img/GL_1.jpeg"),
          name: "关林庙"
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
@import "../css/spots.css";
</style>