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
          images: [
            {
              name: "neutral",
              link: "https://raw.githubusercontent.com/ovaaq/floppis/master/images/eyes/neutral.png"
            },
            {
              name: "bold",
              link: "https://raw.githubusercontent.com/ovaaq/floppis/master/images/eyes/bold.png"
            },
            {
              name: "anger",
              link: "https://raw.githubusercontent.com/ovaaq/floppis/master/images/eyes/anger.png"
            },            {
              name: "drowsy",
              link: "https://raw.githubusercontent.com/ovaaq/floppis/master/images/eyes/drowsy.png"
            },

        ]

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


