<template>
  <div v-if="productList.length > 0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
      <Product v-for="item in productList">
        <img class="card-img-top" :src="item.selectedImage" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <small>
            <strong>Adet : </strong> {{item.count}}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> {{item.price}}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> {{item.totalPrice}}
          </small>
        </div>
      </Product>

    </div>
  </div>
</template>

<script>
  import Product from './Product';
  import {eventBus} from '../main';

  export default {
    name: "Products",
    components: {Product},
    data() {
      return {
        productList: []
      }
    },
    created() {
      eventBus.$on("productAdded", (product) => {
        if (this.productList.length < 10) {
          this.productList.push(product);
          eventBus.$emit("progressUpdated", this.productList.length);
        } else {
          alert("10 dan fazla ürün ekleyemezsiniz")
        }
      })
    }
  }
</script>

<style scoped>

</style>
