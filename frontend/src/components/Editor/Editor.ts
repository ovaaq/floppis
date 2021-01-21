import TabButton from "@/components/Editor/TabButton/TabButton.vue";
import EditOptions from "@/components/Editor/EditOptions/EditOptions.vue";
import Floppis from "@/components/Editor/Floppis/Floppis.vue";

export default {
  name: "Editor",
  components: {
    TabButton,
    EditOptions,
    Floppis
  },
  props: {},
  data() {
    return {
      dummydata: [
        {
          name: "Eyes",
          icon: "eye",
          images: [],
        },
        {
          name: "Mouth",
          icon: "teeth-open",
          images: [],
        },
        {
          name: "Text",
          icon: "comment-dots",
          images: [],
        },
        {
          name: "Hats",
          icon: "hat-cowboy",
          images: [],
        },
        {
          name: "Filters",
          icon: "leaf",
          images: [],
        },
        {
          name: "Misc",
          icon: "dice-d20",
          images: [],
        },
      ],
      selected: ""
    };
  },

  mounted() {
    this.$root.$on("tabClick", (data) => {
        this.selected = data;
    });
  },
};


