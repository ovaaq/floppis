<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <Floppis />
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
            <EditOptions
              v-for="editData in dummydata"
              :key="editData.name"
              :images="editData.images"
            />
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
