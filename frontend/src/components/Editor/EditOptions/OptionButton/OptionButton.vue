<template>
  <div class="tile is-parent">
    <article class="tile is-child is-light">
      <button class="image" v-on:click="isClicked">
        <div class="image-container">
          <img
            class=""
            src="https://raw.githubusercontent.com/ovaaq/floppis/master/images/floppis_base.png"
          />
          <img class="second-image" :src="image.link" />
        </div>
      </button>
    </article>
  </div>
</template>

<script scoped src="./OptionButton.ts"></script>

<style scoped lang="scss">
@import "OptionButton.scss";
</style>
