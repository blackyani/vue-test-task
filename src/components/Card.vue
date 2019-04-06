<template>
  <div class="row">
    <div class="card mt-5 col-md-6" v-for="item in cardMenu" :key="item.id">
      <div class="icons-menu d-flex justify-content-center">
        <img
          src="../assets/new.svg"
          v-if="item.new"
          class="active-ico mt-2"
          alt="new dish"
        >
        <img
          src="../assets/premium-service-diamond-serve-restaurant.svg"
          v-if="item.special"
          class="active-ico mt-2"
          alt="special offer"
        >
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
      </div>
      <div class="controll-buttons mx-auto">
        <app-edit-menu
          class="mb-2 mt-2 d-none"
          v-bind:itemMenu="item"
          v-bind:class="{'d-block': editMenuToggle === item.id}"
          v-if="$store.state.edit"
        >
        </app-edit-menu>
        <button class="btn btn-info mb-2 mt-2" @click="openEdit(item.id)">Edit</button>
        <button class="btn btn-danger mb-2 mt-2" @click="deleteDish(item.id)">Delete</button>
        <router-link class="btn btn-success mb-2 mt-2" tag="button" :to="{name:'Dish',params: item}">
          <span>Details</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {HTTP} from "../services/http-common";
  import editMenu from "./editMenu"
    export default {
      data () {
        return {
          cardMenu: this.$store.state.menu,
          editMenuToggle: null
        }
      },
      methods: {
        deleteDish(itemId) {
          HTTP.delete(`menu/${itemId}`).then(function (response) {
            console.log(response);
          })
            .catch(function (error) {
              console.log(error);
            });
          this.cardMenu = this.cardMenu.filter(item=>item.id !== itemId);
        },
        openEdit: function (itemId) {
          this.editMenuToggle = itemId;
          this.$store.state.edit = !this.$store.state.edit;
        },
      },
      components: {
        appEditMenu: editMenu
      }
    }
</script>

<style scoped>
  .card {
    width: 100%;
  }

  .active-ico {
    height: 50px;
  }
</style>
