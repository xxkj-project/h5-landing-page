<!--
  平台公约
-->
<template>
  <div class="container" :class="{ en: app.locale == 'en' }">
    <headerBar :onBack="onBack" :headTitle="title"></headerBar>
    <div class="main">
      <template v-if="language != 'en'">
        <div class="language languageZh">
          <p>
            为保障用户的的良好体验，维护平台的正常秩序，促进平台的健康发展，特制定本平台公约，请所有平台使用者与我们携手，共同打造一个绿色、健康、文明、积极向上的CANNIS平台！
          </p>
          <h3>一、内容规范</h3>
          <p class="list-title">1.严禁出现违反法律的内容，例如：</p>
          <p>（1）严禁出现暴力、恐怖主义等内容；</p>
          <p>（2）严禁煽动民族歧视、仇恨等内容；</p>
          <p>（3）严禁出现犯罪或教唆、演示犯罪等内容；</p>
          <p>（4）严禁出现演示使用毒品、传播毒品等内容；</p>
          <p>（5）严禁宣扬邪教；</p>
          <p>（6）严禁出现非法游行、示威等行为；</p>
          <p>（7）严禁散布谣言等行为。</p>
          <p class="list-title">2.严禁出现、使用危险物品，例如：</p>
          <p>（1）严禁出现刀具、枪支等物品或使用刀具、枪支等物品；</p>
          <p class="list-title">3.严禁出现危害他人、自伤自残等内容，例如：</p>
          <p>（1）严禁出现危害他人等行为，如：殴打、恐吓、跟踪、偷窥、骚扰他人等；</p>
          <p>（2）严禁出现自残自杀等危害自身安全的行为；</p>
          <p>（3）严禁出现危害、虐待动物的行为。</p>
          <p class="list-title">4.严禁侵犯他人合法权益，例如：</p>
          <p>（1）严禁侵犯他人隐私等行为，如：未经同意公开他人个人资料等其他隐私信息；</p>
          <p>（2）严禁盗用、复制他人作品或使用未经授权的影视作品等行为；</p>
          <p>（3）严禁恶意攻击他人，如：谩骂、诽谤、地域攻击等行为；</p>
          <p>（4）严禁冒充媒体、电视台、记者等行为；</p>
          <p>（5）严禁发布不适当的广告信息，包括但不限于违反法律和平台规则的信息。</p>
          <p class="list-title">5.严禁直接或间接出现、传播色情或引起他人性欲的内容，例如：</p>
          <p>（1）严禁展示具有性特征的身体部位或物品，如：镜头刻意聚焦性敏感部位、使用性用品或容易联想到性用品；</p>
          <p>（2）严禁出现带有明显性暗示的装扮，如：以情趣物品或类似妆扮；</p>
          <p>（3）严禁其他传播色情或引起他人性欲的内容。</p>
          <h3>二、处罚措施</h3>
          <p>
            出现以上严禁违规行为，平台有权视情节轻重，相应给予禁言、删除信息、警告、冻结账号、封号的处罚。情节严重触犯相关法律的，或将移交有关部门追究其法律责任。
          </p>
          <h3>三、未成年保护措施</h3>
          <p>1.平台部分功能不对未成年开放，如：禁止未成年人进行直播等；</p>
          <p>2.禁使用未成年人肖像、名义进行直播等一切侵害未成年人合法权益的行为。</p>
          <h3>四、声明</h3>
          <p>本“平台公约”的版权为我们所有，在法律允许的范围内，我们拥有解释和修改的权利。</p>
        </div>
      </template>
      <template v-else>
        <div class="language languageEn">
          <p>
            In order to guarantee the good experience of users, maintain the normal order of the platform and promote
            the healthy development of the platform, this platform convention is specially formulated. All platform
            users are invited to join hands with us to create a green, healthy, civilized and positive CANNIS platform!
          </p>
          <h3>CONTENT SPECIFICATION</h3>
          <p class="list-title">1. Contents that violate the law are strictly prohibited, such as:</p>
          <p>(1) Violence, terrorism and other contents are strictly prohibited;</p>
          <p>(2) It is strictly prohibited to incite ethnic discrimination, hatred and other contents;</p>
          <p>(3) It is strictly prohibited to commit crimes, instigate or demonstrate crimes, etc.;</p>
          <p>(4)It is strictly prohibited to demonstrate the use and dissemination of drugs;</p>
          <p>(5) Prohibit the spread of cults;</p>
          <p>(6) Illegal demonstrations and demonstrations are strictly prohibited;</p>
          <p>(7) It is strictly prohibited to spread rumors and other behaviors.</p>
          <p class="list-title">2. It is strictly prohibited to appear or use dangerous goods, such as:</p>
          <p>
            (1)It is strictly prohibited to present knives, guns and other articles or use knives, guns and other
            articles;
          </p>
          <p class="list-title">3. It is strictly prohibited to harm others or self-harm, such as:</p>
          <p>
            (1)It is strictly prohibited to harm others, such as beating, threatening, tracking, peeping and harassing
            others;
          </p>
          <p>
            (2)It is strictly prohibited to commit self-injury, suicide and other behaviors that endanger one's own
            safety;
          </p>
          <p>(3)It is strictly prohibited to harm or maltreat animals.</p>
          <p class="list-title">
            4. It is strictly prohibited to infringe upon the legitimate rights and interests of others, such as:
          </p>
          <p>
            (1) It is strictly prohibited to violate other people's privacy, such as disclosing other people's personal
            data and other privacy information without consent;
          </p>
          <p>
            (2) It is strictly prohibited to misappropriate, copy others' works or use unauthorized film and television
            works;
          </p>
          <p>
            (3) it is strictly prohibited to maliciously attack others, such as invective, slander, geographical attack,
            etc.;
          </p>
          <p>(4) It is strictly prohibited to impersonate media, TV stations and journalists;</p>
          <p>
            (5) Iinappropriate advertising information, including but not limited to information that violates laws and
            rules of the platform, is strictly prohibited.
          </p>
          <p class="list-title">
            5. It is strictly prohibited to directly or indirectly present or disseminate pornographic content, such as:
          </p>
          <p>
            (1) Strictly prohibit the display of body parts or objects with sexual characteristics, such as deliberately
            focusing the sensitive parts of the lens, using or easily associating with sexual products;
          </p>
          <p>
            (2) It is strictly prohibited to dress up with obvious sexual implications, such as dressing up with sex
            objects or similar makeup;
          </p>
          <p>(3) It is strictly prohibited to disseminate other pornographic or sexually aroused content.</p>
          <h3>PENALTY MEASURES</h3>
          <p>
            In case of any of the above violations, the platform shall have the right to, depending on the seriousness
            of the case, impose a penalty of prohibiting speech, deleting information, warning, freezing accounts and
            sealing Numbers.If the circumstances seriously violate the relevant laws, or will be transferred to the
            relevant departments for legal responsibility.
          </p>
          <h3>Measures for the protection of minors</h3>
          <p>1. Some functions of the platform are not open to minors, such as banning live broadcasting of minors;</p>
          <p>
            2. Prohibit the use of minors' portraits, names for live broadcasting and other activities that infringe
            upon the legitimate rights and interests of minors.
          </p>
          <h3>STATEMENT</h3>
          <p>
            The copyright of this platform convention is owned by us, and we have the right to interpret and modify it
            to the extent permitted by law.
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
  name: 'PlatformConventions',
  data() {
    return {}
  },
  mixins: [adapter],
  computed: {
    ...mapState(['app']),
    title() {
      return this.$t('title.platformConventions')
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
      .list-title {
        text-indent: 0;
      }
    }
  }
}
</style>
