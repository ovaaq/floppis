<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <span
          ><div class="rows">
            <h1 class="row logo-title">
              Floppis TG Sticker Generator V0.1
            </h1>
          </div>
        </span>
      </router-link>
      <button class="navbar-burger button" @click="swichMenuState()">
        <icon class="navbar-burger-icon" :icon="['fas', navbarBurgerIcon]" />
      </button>
    </div>

    <div class="navbar-end">
      <router-link
        :to="link.url"
        v-for="(link, index) in test.links"
        :key="index"
        class="navbar-item"
      >
        <h1 class="row navbar-link-item" @click="swichMenuState()">
          {{ link.name }}
        </h1>
      </router-link>
    </div>

    <div v-if="isMenuActive" class="navbar-dropdown">
      <router-link
        :to="link.url"
        v-for="(link, index) in test.links"
        :key="index"
      >
        <h1 class="menu-dropdown-item" @click="swichMenuState()">
          {{ link.name }}
        </h1>
      </router-link>
    </div>
  </nav>
</template>

<script scoped src="./NavBar.ts"></script>

<style scoped lang="scss">
@import "NavBar.scss";
</style>
