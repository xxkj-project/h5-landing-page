<!--
  平台简介
-->
<template>
  <div class="container" :class="{ en: app.locale == 'en' }">
    <headerBar :onBack="onBack" :headTitle="title"></headerBar>
    <div class="main">
      <template v-if="language != 'en'">
        <div class="language languageZh">
          <p>
            宝兆是全球首创粉丝整合平台。宝兆APP结合网红直播、电商模块、社交平台、优惠购物、短视频、支付、休闲游戏等时下热门功能，涵盖人们的吃喝玩乐,衣食住行,引领电商新型商业模式，带动APP新风潮，是一款在共享经济下诞生的产品。
          </p>
          <div>
            <h3>1、 电商直播：</h3>
            直击线上购物痛点，所见即所得。
          </div>
          <p>
            “电商+直播”，两者完美融合，实现了新零售场景化，其改变传统电商静态图文形态，借由直播的实时互动特性来进行商品宣传，从而达到提升新流量入口、撬动销量、促进流量变现的目的。直播电商增长空间巨大，是未来必将趋势！
          </p>
          <div>
            <h3>2、 网红直播：</h3>
            专业美颜+主播连麦+送礼中奖+小游戏
          </div>
          <p>
            网络直播吸取和延续了互联网的优势，其对全员开放，吸引主播参与并精选优质主播。随着新零售的发展，“电商+”的概念深入人心，更加推动了直播的热度。主播的增长空间以及成长潜力巨大。
          </p>
          <div>
            <h3>3、 短视频：</h3>
            “病毒式”传播潜力，精美短视频
          </div>

          <p>
            在碎片化的媒介大环境下，短平快的大流量传播内容获得各大平台、粉丝和资本的青睐。其传播方式有效吸引粉丝注意力，实现营销新趋势。时下短视频不断升值，创造价值潜力巨大，未来发展的一个趋势。
          </p>

          <div>
            <h3>4、 社交平台：</h3>
            随时随地交朋友，丰富社交生活
          </div>
          <p>
            社交是生活中不可或缺的一部分，永远不可能消失，只会逐渐发展。平台拥有成熟的社交功能系统，类似于微信。不同之处在于，平台结合自身技术和战略创新的思维，更加用心地优化社交功能。
          </p>

          <div>
            <h3>5、 休闲游戏：</h3>
            游戏场景设定精美，操作感十足
          </div>
          <p>
            现今，社会工作人士压力越来越大，为缓解压力，轻松愉悦在线游戏已成为首选。本款游戏针对社会不同人群制定，视觉冲击力和操作流畅度并存，拥有王者荣耀的操作和画面感。
          </p>

          <div>
            <h3>6、 优惠购物：</h3>
            线上+线下，优惠券天天任意用。
          </div>
          <p>
            优惠购物在支付环节可以直接得以体现，让用户可以感觉到实实在在的优惠，这对于消费忠诚度和二次消费是有极大促进的。平台通过数据分析，精准匹配附近优惠给到用户，再通过此种实惠、友好的用户体验吸引一批忠实粉丝，在提升商家获取收益的同时，顾客也相应受益，实现双赢！
          </p>
        </div>
      </template>
      <template v-else>
        <div class="language languageEn">
          <p>
            Cannis is the world's first fan integration platform. Cannis APP combines the popular features of online
            live broadcast, e-commerce module, social platform, preferential shopping, short video, payment, casual
            games, etc., covering people's eating, drinking, playing, clothing, food and clothing, leading the new
            business model of e-commerce, and driving the new wave of APP. It is a product born in the sharing economy.
          </p>
          <div>
            <h3>1. E-commerce live broadcast:</h3>
            direct hit online shopping pain points.
          </div>
          <p>
            “E-commerce + live broadcast”, the two are perfectly integrated, realizing the new retail scene, which
            changes the traditional e-commerce static graphic form, and promotes the new traffic entry and incitement by
            realizing the real-time interactive characteristics of the live broadcast. Sales, the purpose of promoting
            traffic realization. The growth of live e-commerce is huge, and it is the bound trend in the future!
          </p>
          <div>
            <h3>2. Live:</h3>
            professional beauty + anchor even wheat + gift winning + small game
          </div>
          <p>
            The webcast draws on and continues the advantages of the Internet, which is open to all members, attracting
            anchors to participate and select premium anchors. With the development of new retail, the concept of
            "e-commerce +" has been deeply rooted in the hearts of the people, which has further promoted the popularity
            of live broadcasting. The growth space and growth potential of the anchor are huge.
          </p>
          <div>
            <h3>3. Short video:</h3>
            "viral" spread potential, beautiful short video
          </div>

          <p>
            In the fragmented media environment, short-term and fast traffic spread content is favored by all platforms,
            fans and capital. Its mode of communication effectively attracts fans' attention and achieves new marketing
            trends. Nowadays, short videos continue to appreciate, creating great value potential and a trend in the
            future.
          </p>

          <div>
            <h3>4. Social platform:</h3>
            make friends anytime, anywhere, enrich social life
          </div>
          <p>
            Socialization is an indispensable part of life, it can never disappear, it will only gradually develop. The
            platform has a mature social function system, similar to WeChat. The difference is that the platform
            combines its own technology and strategic innovation thinking to optimize social functions more carefully.
          </p>

          <div>
            <h3>5. Casual games:</h3>
            the game scene is beautifully set, full of operational sense
          </div>
          <p>
            Nowadays, social workers are under increasing pressure. To ease the pressure, easy and enjoyable online
            games have become the first choice. This game is designed for different groups of people in the society. The
            visual impact and operational fluency coexist, and it has the operation and picture sense of the glory of
            the king.
          </p>

          <div>
            <h3>6. Discount shopping:</h3>
            online + offline, coupons are free to use every day.
          </div>
          <p>
            Preferential shopping can be directly reflected in the payment link, so that users can feel the real
            benefits, which is greatly promoted for consumer loyalty and secondary consumption. Through data analysis,
            the platform accurately matches nearby offers to users, and then attracts a group of loyal fans through this
            affordable and friendly user experience. While improving the profits of the merchants, the customers also
            benefit and achieve a win-win situation!
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import adapter from '@/mixins/adapter'
import openNative from '@/utils/openNative'
import headerBar from '@/components/headerBar'
import { formatLanguageType } from '@/utils/format'
export default {
  name: 'platformIntroduce',
  data() {
    return {}
  },
  mixins: [adapter],
  computed: {
    ...mapState(['app']),
    title() {
      return this.$t('title.platformIntroduce')
    },
    language() {
      let language = formatLanguageType(this.$route.query.language)
      this.$i18n.locale = language
      // console.log(this.$i18n.locale)
      this.$store.commit('setLanguage', language)
      return language
    }
  },
  mounted() {
    openNative.setHeaderBar('0')
  },
  methods: {
    onBack() {
      openNative.closeWebview()
    }
  },
  components: { headerBar }
}
</script>

<style lang="less" scoped>
@import './common';
.container {
  .main {
    .language {
      h3 {
        display: inline-block;
      }
    }
  }
}
</style>
