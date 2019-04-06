<template>
  <div class="menu">
    <div class="container">
      <app-add-dish></app-add-dish>
      <img class="d-block mx-auto" v-if="!dataReady" src="../assets/cooking_loader_2.gif" alt="">
      <app-card :cardMenu="menu" v-if="dataReady"></app-card>
    </div>

  </div>
</template>

<script>
  import {HTTP} from "../services/http-common";
  import Card from "./Card"
  import AddDishForm from "./AddDishForm"

  export default {
      data () {
        return {
          menu: [],
          dataReady: false
        }
      },
      mounted() {
        HTTP.get(`menu`)
          .then(response => {
            this.dataReady = true;
            return this.$store.state.menu = response.data.list
          })
          .catch(err=>console.log("err",err));
      },
      components: {
        appCard: Card,
        appAddDish: AddDishForm
      }
  }
</script>

<style>
  .menu {
    background: url(../assets/baked-beer-cheese-724216.jpg);
    background-size: cover;
  }

  .menu .container {
    padding-top: 5%;
  }
</style>
