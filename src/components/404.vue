<template>
  <f7-page class="error_404">
    <f7-row>
      <f7-col>
        <img src="../assets/image/404.png" alt="" style="margin:auto;display:block;" />
      </f7-col>
    </f7-row>

    <div class="tip">
      页面不小心迷路了~
    </div>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button large fill @click="goHome">返回首页</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Button, f7Block, f7Row, f7Col, f7Page } from "framework7-vue";

export default {
  components: { f7Button, f7Block, f7Row, f7Col, f7Page },
  data: function() {
    return {};
  },
  methods: {
    goHome() {
      if (this.$f7router.history.length > 1) {
        this.$f7router.back();
      } else {
        this.$f7router.navigate("/");
      }
    }
  }
};
</script>

<style scoped lang="less">
.error_404 {
  min-height: 100%;
  position: relative;
  overflow: auto;
  background: #ffffff;
}
.tip {
  color: #bfbfbf;
  font-size: 14px;
  text-align: center;
}
</style>
