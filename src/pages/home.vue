<template>
  <f7-page name="home">
    <f7-navbar title="Home"></f7-navbar>
    <!-- Page content -->
    <f7-block-title>页面</f7-block-title>
    <f7-list>
      <f7-list-item title="about" link="/about/test?title=标题"></f7-list-item>
      <f7-list-item title="login" link="/login"></f7-list-item>
      <f7-list-item title="404" link="/test"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { f7Page, f7Navbar, f7BlockTitle, f7List, f7ListItem } from "framework7-vue";

import { testApi } from "@/api";

import { toast } from "@/lib/message";
export default {
  components: { f7Page, f7Navbar, f7BlockTitle, f7List, f7ListItem },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    async requestApi() {
      let res = await testApi({ employeeId: 12 }).catch(err => err);

      if (res && res.code) {
        toast(res.message || "服务器开小差了~");
        return;
      }

      this.name = res.name;

      console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  color: red;
}
</style>
