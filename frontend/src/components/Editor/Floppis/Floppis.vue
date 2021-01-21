<template>
  <div class="tile is-parent">
    <article class="tile is-child is-light">
      <div class="image-container">
        <div class="layer-image is-border">
          <figure class="image ">
            <img
              src="https://raw.githubusercontent.com/ovaaq/floppis/master/images/floppis_base.png"
            />
          </figure>
        </div>
        <div class="layer-image" v-for="layer in layers" :key="layer.name">
          <figure class="image">
            <img :src="layer.link" />
          </figure>
        </div>
      </div>
    </article>
  </div>
</template>

<script scoped src="./Floppis.ts"></script>

<style scoped lang="scss">
@import "Floppis.scss";
</style>
