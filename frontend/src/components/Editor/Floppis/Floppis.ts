export default {
  name: "Floppis",
  props: {},
  data() {
    return {
        layers: [
            {
        name: "moi",
        link: "https://raw.githubusercontent.com/ovaaq/floppis/master/images/eyes/neutral.png"
            },        

        ]
    };
  },

  mounted() {
    this.$root.$on("optionClick", (data) => {
        this.layers[0].link = data.link
    });
  },
};


