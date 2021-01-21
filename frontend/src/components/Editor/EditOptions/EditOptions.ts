import OptionButton from "@/components/Editor/EditOptions/OptionButton/OptionButton.vue";

export default {
    name: "EditOptions",
    components: {
      OptionButton,
    },
  
    props: {
        tabData: Object,
      },
    data() {
      return {
        isSelected: false,
      };
    },
    mounted() {
        this.$root.$on("tabClick", (data) => {
            this.isSelected = false;
        });
      },
    
    methods: {
      isClicked: function() {
        this.$root.$emit("tabClick", this.tabData.name);
        this.isSelected = true;
    },
    },
  };
  