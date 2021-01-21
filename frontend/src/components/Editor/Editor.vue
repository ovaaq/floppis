<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="tile is-parent">
            <article class="tile is-child is-light is-border">
              <figure class="image">
                <img src="https://skripti.org/img/team/FloppisHeart.png" />
              </figure>
            </article>
          </div>
        </div>
        <div class="column">
          <div class="buttons has-addons is-centered">
            <TabButton
              v-for="tabData in dummydata"
              :key="tabData.tabName"
              :tabData="tabData"
            ></TabButton>
          </div>

          <div class="editor-options is-centered">
            <EditOptions />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped src="./Editor.ts"></script>

<style scoped lang="scss">
@import "Editor.scss";
</style>
