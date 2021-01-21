export default {
  name: "NavBar",
  props: ['test'],

  data: function () {
    return {
      isMenuActive: false
    }
  },

  computed: {
    // a computed getter
    navbarBurgerIcon: function () {
      // `this` points to the vm instance
      if (this.isMenuActive) {
        return "times"
      }
      return "bars"
    }
  },

  // define methods under the `methods` object
  methods: {
    swichMenuState: function () {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};