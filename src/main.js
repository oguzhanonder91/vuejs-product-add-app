import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    addProduct(product){
      this.$emit("productAdded",product);
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
