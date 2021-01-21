<template>
  <div class="home">
    <br />
    <br />
    <Editor />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from "@/components/Editor/Editor.vue";

export default {
  name: "Home",
  components: { Editor },
};
</script>
