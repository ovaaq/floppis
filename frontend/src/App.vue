<template>
  <div id="app">
    <NavBar
      v-bind:test="{
        links: [
          {
            name: 'About',
            url: '/about',
          },
          {
            name: 'Setting',
            url: '/settings',
          },
        ],
      }"
    />
    <router-view />
  </div>
</template>

<style>
@import "assets/sass/main.scss";

* {
  font-family: Roboto;
}
</style>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  name: "navBar",
  components: {
    NavBar,
  },
};
</script>
