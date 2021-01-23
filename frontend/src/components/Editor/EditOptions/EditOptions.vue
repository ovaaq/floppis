<template>
  <div class="container options-container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile" v-for="chunk in productChunks" :key="chunk">
          <OptionButton
            :image="image"
            v-for="image in chunk"
            :key="image.name"
          />
          <div
            class="tile is-parent"
            v-for="i in 3 - chunk.length"
            :key="i"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped src="./EditOptions.ts"></script>

<style scoped lang="scss">
@import "EditOptions.scss";
</style>
