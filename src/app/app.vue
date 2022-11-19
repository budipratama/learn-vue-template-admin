<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "../views/layouts/HeaderView.vue";
import Sidebar from "../views/layouts/SidebarView.vue";
import Main from "../views/layouts/MainView.vue";
import Footer from "../views/layouts/FooterView.vue";
</script>
<template>
  <!--  <router-view />-->
  <div class="wrapper">
    <Header />
    <Sidebar />
    <Main />
    <Footer />
    <!--    <RouterView />-->
  </div>
</template>
