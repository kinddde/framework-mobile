<template>
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app :params="f7params" :routes="routes">
    <!-- Your main view, should have "main" prop 二级目录：:push-state-root="'/mulu'" -->
    <f7-view main :url="url" :animate="true" :push-state="true" :push-state-separator="''"> </f7-view>
  </f7-app>
</template>

<script>
import { f7App, f7View } from "framework7-vue";

import routers from "./router";

export default {
  name: "App",
  components: { f7App, f7View },
  data() {
    return {
      url: "/",
      f7params: {
        name: "脚手架",
        id: "com.myapp.test",
        theme: "auto"
      },
      routes: routers
    };
  },
  mounted() {}
};
</script>

<style></style>
