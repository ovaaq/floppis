import OptionButton from "@/components/Editor/EditOptions/OptionButton/OptionButton.vue";
import _ from "lodash";

export default {
    name: "EditOptions",
    components: {
      OptionButton,
    },
  
    props: {
        images: Object,
      },

      computed: {
        productChunks(){
            return _.chunk(Object.values(this.images), 3);
        }
      },
  };
  