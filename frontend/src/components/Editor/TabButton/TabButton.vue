<template>
  <button
    :class="{
      button: true,
      'is-dark': isSelected,
    }"
    v-on:click="isClicked"
  >
    <font-awesome-icon :icon="tabData.icon" size="lg"></font-awesome-icon
    ><span class="ml-2">{{ tabData.name }}</span>
  </button>
</template>

<script scoped src="./TabButton.ts"></script>

<style scoped lang="scss">
@import "TabButton.scss";
</style>
