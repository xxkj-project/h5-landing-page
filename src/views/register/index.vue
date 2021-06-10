<!-- 
   注册
-->
<template>
  <div class="register" :class="{ en: app.locale == 'en' }">
    <div class="title">{{ $t('register.title') }}</div>
    <!-- <div class="title">注册</div> -->
    <div class="main">
      <div class="topBg"></div>
      <div class="content">
        <div class="logo">
          <span class="icon"></span>
          <p class="text">{{ $t('register.logoText') }}</p>
        </div>
        <van-form @failed="onFailed" @submit="onSubmit">
          <div class="formChunk">
            <van-field
              v-model="formData.userName"
              required
              colon
              clearable
              name="validator"
              :label="$t('register.input.username')"
              :placeholder="$t('register.input.username')"
              :rules="[{ required: true, validator: validUserName, message: $t('register.message.username') }]"
            />
            <van-field
              v-model="formData.nickName"
              required
              colon
              clearable
              :name="$t('register.input.nickname')"
              :label="$t('register.input.nickname')"
              :placeholder="$t('register.input.nickname')"
              :rules="[{ required: true, message: $t('register.message.nickname') }]"
            />
            <div class="telBox telRequired">
              <div class="telLeft">
                <p class="telLabel">{{ $t('register.input.tel') }}:</p>

                <!-- <div class="selTelPrefix" @click="setTelPrefixHandle">
                  +{{ formData.mobilePrefix }}
                  <span class="icon"></span>
                  <div class="selTelPrefixOptions" v-show="isShowTelPrefixOptions">
                    <p @click="selTelPrefixOptionHandle(item)" v-for="(item, index) in telPrefixOptions" :key="index">
                      {{ item }}
                    </p>
                  </div>
                </div> -->

                <span>+</span>
                <van-field
                  v-model="formData.mobilePrefix"
                  type="tel"
                  name="validator"
                  label=""
                  style="width:70px;padding-right:0px"
                >
                </van-field>
              </div>
              <van-field
                v-model="formData.mobile"
                clearable
                type="tel"
                label=""
                :placeholder="$t('register.input.tel')"
                :rules="[{ required: true, message: $t('register.message.tel') }]"
              >
              </van-field>
            </div>
            <van-field
              v-model="formData.mail"
              required
              colon
              clearable
              name="validator"
              :label="$t('register.input.email')"
              :placeholder="$t('register.input.email')"
              :rules="[{ required: true, validator: validEmail, message: $t('register.message.email') }]"
            />
            <van-field
              v-model="formData.idCard"
              required
              colon
              clearable
              name="validator"
              :label="$t('register.input.idCard')"
              :placeholder="$t('register.input.idCard')"
              :rules="[{ required: true, validator: validIdCard, message: $t('register.message.idCard') }]"
            />
          </div>
          <div class="formChunk">
            <van-field
              v-model="formData.pass"
              required
              colon
              clearable
              type="password"
              :name="$t('register.input.pwd')"
              :label="$t('register.input.pwd')"
              :placeholder="$t('register.input.pwd')"
              :rules="[{ required: true, message: $t('register.message.pwd') }]"
            />
            <van-field
              v-model="formData.confirmPwd"
              required
              colon
              clearable
              type="password"
              :name="$t('register.input.confirmPwd')"
              :label="$t('register.input.confirmPwd')"
              :placeholder="$t('register.input.confirmPwd')"
              :rules="[{ required: true, message: $t('register.message.confirmPwd') }]"
            />
            <van-field
              colon
              readonly
              v-model="formData.inviterName"
              :name="$t('register.input.inviteCode')"
              :label="$t('register.input.inviteCode')"
              :placeholder="$t('register.input.inviteCode')"
            />

            <!-- <van-field class="radioBox" name="group" label="">
              <template #input>
                <van-radio-group v-model="formData.group" direction="horizontal" @change="radioChangeHandle">
                  <van-radio name="left">
                    {{ $t('register.radioLeft') }}
                    <template #icon="props">
                      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                  </van-radio>
                  <van-radio name="right">
                    {{ $t('register.radioRight') }}
                    <template #icon="props">
                      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
                    </template>
                  </van-radio>
                </van-radio-group>
              </template>
            </van-field> -->
          </div>

          <div class="btnWrap">
            <van-button round block type="info" native-type="submit">
              {{ $t('register.btnText') }}
            </van-button>

            <!-- <van-button
              :class="formData.group == 'left' ? 'activeLeft' : 'activeRight'"
              round
              block
              type="info"
              native-type="submit"
            >
              {{ $t('register.btnText') }}
            </van-button> -->
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validUserName, validCellphone, validEmail, validIdCard, validChinese } from '@/utils/validate'
import { Toast } from 'vant'
import md5 from 'js-md5'
import Qs from 'qs'
import { formatLanguageType } from '@/utils/format'
import { mapState } from 'vuex'
// import api from '@/api/index'
// 验证方法：name="pattern/validator/ayncValidator" // 正则验证/函数校验/异步函数校验
// var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 身份证验证
export default {
  name: '',
  data() {
    return {
      isShowTelPrefixOptions: false, // 是否显示手机号前缀options
      telPrefixOptions: ['86', '852', '853', '886'],
      formData: {
        mobilePrefix: '86',
        userName: '',
        nickName: '',
        mobile: '',
        mail: '',
        idCard: '',
        pass: '',
        confirmPwd: '',
        inviterName: this.$route.query.inviteCode,
        group: 'left',
        country: 'CN'
      },
      activeIcon: require('@/assets/images/register/checkedIcon.png'),
      inactiveIcon: require('@/assets/images/register/noCheckedIcon.png')
    }
  },
  computed: {
    ...mapState(['app'])
  },
  mounted() {
    let language = formatLanguageType(this.$route.query.language)
    console.log(language)
    this.$i18n.locale = language
    // console.log(this.$i18n.locale)
    this.$store.commit('setLanguage', language)

    // this.testData()
  },
  methods: {
    testData() {
      this.formData = {
        mobilePrefix: '86',
        userName: '333',
        nickName: '333',
        mobile: '333',
        mail: '222@qq.com',
        idCard: '333',
        pass: '333',
        confirmPwd: '333',
        inviterName: '60',
        group: 'left',
        country: 'CN'
      }
    },
    setTelPrefixHandle() {
      // console.log('-sel-', this.isShowTelPrefixOptions)
      this.isShowTelPrefixOptions = !this.isShowTelPrefixOptions
    },
    selTelPrefixOptionHandle(item) {
      this.formData.mobilePrefix = item
    },
    radioChangeHandle(val) {
      // console.log(this.$t('register.toast.confirmPwdMsg'))
      // TODO radio切换执行的后续操作
      // console.log('-radio-', val)
    },
    onFailed(error) {
      // console.log('-failed-', error)
    },
    onSubmit(value) {
      if (!this.formData.mobilePrefix) {
        this.$toast(this.$t('register.toast.telMsg'))
        return
      }
      if (this.formData.pass != this.formData.confirmPwd) {
        this.$toast(this.$t('register.toast.confirmPwdMsg'))
        return
      }
      this.$loading.show()
      // console.log(this.formData)
      // this.formData.pass = md5.hex(this.formData.pass)
      // this.formData.confirmPwd = md5.hex(this.formData.confirmPwd)
      // console.log(Qs.stringify(this.formData))
      this.$http({
        url: this.api.postRichmoreRegister,
        method: 'post',
        data: Qs.stringify(this.formData)
      }).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          Toast({
            message: this.$t('register.toast.submitSuccess'),
            position: 'middle',
            duration: 2000
          })
          this.$router.push({
            path: '/fishLot'
          })
        } else {
          Toast({
            message: res.data.msg,
            position: 'middle',
            duration: 2000
          })
        }
        this.$loading.hide()
      })
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validUserName(val) {
      // console.log('-username-', val)
      // if (!validUserName(val)) {
      //   this.$toast("用户名只能为字母数字组合")
      //   return false
      // }
      return validUserName(val)
    },
    validTel(val) {
      // console.log('-mobile-', val)
      return validCellphone(val)
    },
    validEmail(val) {
      // console.log('-mail-', val)
      return validEmail(val)
    },
    validIdCard(val) {
      // console.log('-idCard-',val)
      // console.log(validChinese(val))
      return !validChinese(val)
      // return validIdCard(val)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgUrl: '~@/assets/images/register/';
@imgCommonUrl: '~@/assets/images/common/';

.register {
  // /deep/ .header-global {
  //   background: linear-gradient(to right, #48b3ff, #2192f4);
  //   color: #fff;
  //   .leftIcon {
  //     background: url('@{imgCommonUrl}whiteLeftArrow.png') no-repeat center / cover;
  //   }
  // }
  &.en {
    font-family: Georgia;
    /deep/ .van-cell {
      // line-height: 36px;
      font-size: 12px;
      .van-field__label {
        width: 100px;
        letter-spacing: 1px;
      }
    }
  }
  .title {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 67px;
    background: linear-gradient(to right, #48b3ff, #2192f4);
    color: #fff;
    text-align: center;
    line-height: 87px;
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    // font-size: 4.8vw;
    box-sizing: content-box;
  }
}

/deep/ .van-cell {
  padding: 0 10px 15px;
  font-size: 16px;
  line-height: 36px;
  &.van-cell::after {
    border-bottom: none;
  }
  .van-cell__value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // height: 36px;
    .van-field__body {
      width: 100%;
      input {
        padding-left: 10px;
      }
    }
  }
  .van-field__control {
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 18px;
    &.van-field__control--custom {
      border: none;
    }
  }
  .van-field__label {
    display: flex;
    align-items: flex-start;
    // align-items: center;
    width: 90px;
    text-align: left;
    padding-left: 6px;
    letter-spacing: 2px;
  }
}

.register {
  height: 100%;
}
.main {
  position: relative;
  width: 100vw;
  background: #f4f6f8;
  margin: 0 auto;
  margin-top: 67px;
  .topBg {
    position: absolute;
    z-index: 10;
    width: 375px;
    height: 340px;
    background: url('@{imgUrl}topBg.png') no-repeat center;
    background-size: 100% 100%;
  }
  .content {
    // height: 1000px;
    // background: #ccc;
    position: relative;
    z-index: 11;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.content {
  padding: 10px 10px 0;
  .logo {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 23px;
    .icon {
      width: 46px;
      height: 46px;
      background: url('@{imgUrl}logo.png') no-repeat center / cover;
    }
    .text {
      font-size: 30px;
      color: #fff;
      letter-spacing: 4px;
      padding-left: 14px;
    }
  }
  .formChunk {
    background: #fff;
    border-radius: 12px;
    margin-bottom: 15px;
    padding: 25px 0 10px;
    box-shadow: 0px 10px 28px 2px rgba(0, 0, 0, 0.05);
    .img-icon {
      height: 20px;
    }
    .telBox {
      position: relative;
      display: flex;
      align-items: flex-start;
      line-height: 36px;
      // margin-left: 10px;
      // padding: 0 10px 15px;
      padding-left: 10px;
      .telLeft {
        box-sizing: border-box;
        &.telLeft::before {
          position: absolute;
          left: 2.133vw;
          color: #ee0a24;
          font-size: 3.733vw;
          content: '*';
        }
        display: flex;
        padding-left: 1.6vw;
        .telLabel {
          width: 80px;
          text-align: left;
        }
        .selTelPrefix {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 72px;
          border-radius: 18px;
          border: 1px solid #e1e1e1;
          .icon {
            width: 8px;
            height: 5px;
            background: url('@{imgUrl}bottomArrows.png') no-repeat center / cover;
          }
          .selTelPrefixOptions {
            position: absolute;
            top: 36px;
            z-index: 20;
            width: 100%;
            // height: 200px;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 18px;
          }
        }
      }
      // .van-field__body {
      //   width: auto;
      // }
      // /deep/ .van-cell {
      //   .van-cell__value {
      //     justify-content: flex-start;
      //   }
      // }
    }
    .radioBox {
      /deep/ .van-field__control--custom {
        display: flex;
        justify-content: center;
      }
    }
  }
  .btnWrap {
    padding: 20px 0 55px;
    .activeLeft {
      background: rgba(204, 204, 204, 1);
    }
    .activeRight {
      background: linear-gradient(0deg, rgba(72, 159, 255, 1), rgba(58, 151, 255, 1));
      // border:1px solid rgba(64, 151, 248, 1);
      // box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    }
    /deep/ .van-button--info {
      border: none;
    }
  }
}
</style>
