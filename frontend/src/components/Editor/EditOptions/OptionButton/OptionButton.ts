export default {
    name: "OptionButton",
    components: {
    },
  
    props: {
        image: Object,
      },

      methods: {
        isClicked: function() {
          this.$root.$emit("optionClick", this.image);
      },
      },
  
  };
  