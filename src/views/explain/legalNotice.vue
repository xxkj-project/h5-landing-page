<!--
  法律申明
-->
<template>
  <div class="container" :class="{ en: app.locale == 'en' }">
    <headerBar :onBack="onBack" :headTitle="title"></headerBar>
    <div class="main">
      <template v-if="language != 'en'">
        <div class="language languageZh">
          <h3>权利归属</h3>
          <p>
            除非CANNIS平台另行声明，CANNIS平台推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视频、图表、色彩组合、版面设计等）的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归Cannis公司及/或其关联公司所有。未经Cannis公司及/或其关联公司事先许可，任何人擅自使用上述内容和信息，可能会侵犯Cannis公司及/或其关联公司的权利，我公司将会追究侵权者的法律责任。如有宣传、展示等任何使用需要，您务必取得Cannis公司及/或其关联公司的事先许可。
          </p>
          <h3>责任限制</h3>
          <p>
            鉴于CANNIS平台提供的信息发布服务属于电子公告牌（BBS）性质，CANNIS平台上的短视频等信息由用户自行提供并上传，由用户对其提供并上传的信息承担相应法律责任。CANNIS平台服务提供者对此另有约定的，将在相关的协议或其他法律文本中与您进行明确。
          </p>
          <p>
            CANNIS平台转载的作品（包括论坛内容）出于传递更多信息之目的，并不意味我们赞同其观点或已经证实其内容的真实性。
          </p>
          <h3>知识产权保护</h3>
          <p>
            我们尊重知识产权，反对并打击侵犯知识产权的行为。知识产权权利人若认为CANNIS平台内容（包括但不限于CANNIS平台用户发布的信息）侵犯其合法权益的，可以通过平台投诉通道进行投诉，我们将在收到知识产权权利人合格通知后依据相应的法律法规以及平台规则及时处理。
          </p>
        </div>
      </template>
      <template v-else>
        <div class="language languageEn">
          <h3>RIGHT OWNERSHIP</h3>
          <p>
            Unless CANNIS platform statement separately, CANNIS platform to launch all official products, technologies,
            software, programs, data and other information (including text, ICONS, pictures, photos, audio, video,
            graphics, color, layout, etc.) of all rights (including Copyrights, trademarks, patents, trade secrets and
            other related rights) all belong to the Cannis App Sdn.Bhd, LTD and/or its affiliates.Without the prior
            permission of Cannis App Sdn.Bhd, LTD and/or its affiliated companies, any person who uses the above content
            and information without permission may violate the rights of Cannis App Sdn.Bhd, LTD and/or its affiliated
            companies, and our company will investigate the legal responsibility of the infringer.You must obtain the
            prior permission of Cannis App Sdn.Bhd, LTD and/or its affiliated companies if you need any publicity,
            display or other use.
          </p>
          <h3>Limitation of liability</h3>
          <p>
            Since the information publishing service provided by CANNIS platform belongs to the nature of bulletin board
            (BBS), the information such as short video on CANNIS platform shall be provided and uploaded by users
            themselves, and users shall bear corresponding legal responsibilities for the information provided and
            uploaded by CANNIS platform.If the CANNIS platform service provider has another agreement on this, it will
            make it clear to you in the relevant agreement or other legal text.
          </p>
          <p>
            Works reproduced by CANNIS platform (including BBS content) for the purpose of conveying more information do
            not mean that we agree with their views or have confirmed the authenticity of their content.
          </p>
          <h3>Intellectual property protection</h3>
          <p>
            We respect intellectual property rights, oppose and crack down on ipr infringement.If the intellectual
            property right holder thinks that the content of CANNIS platform (including but not limited to the
            information released by users of CANNIS platform) infringes upon his/her legitimate rights and interests,
            he/she may make a complaint through the platform complaint channel. We will deal with the complaint timely
            according to relevant laws and regulations and rules of the platform after receiving the notice of qualified
            intellectual property right holder.
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
  name: 'LegalNotice',
  data() {
    return {}
  },
  mixins: [adapter],
  computed: {
    ...mapState(['app']),
    title() {
      return this.$t('title.legalNotice')
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
        text-indent: 2em;
      }
    }
  }
}
</style>
