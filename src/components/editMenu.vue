<template>
    <div class="edit-menu">
      <div class="container">
        <form @submit.prevent="editForm" method="post">
          <h3 class="text-center">Edit menu item</h3>
          <div class="row">
            <div class="col-md-6">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                :class="{'is-invalid': $v.name.$error}"
                @blur="$v.name.$touch()"
                v-model="name"
                id="name"
              >
              <div class="invalid-feedback" v-if="!$v.name.required">
                Name field is required
              </div>
              <div class="invalid-feedback" v-if="!$v.name.maxLength">
                The maximum number of characters is {{$v.name.$params.maxLength.max}}
              </div>

              <label for="name">Weight</label>
              <input
                type="number"
                class="form-control"
                :class="{'is-invalid': $v.weight.$error}"
                @blur="$v.weight.$touch()"
                v-model.number="weight"
                id="weight"
              >
              <div class="invalid-feedback" v-if="!$v.weight.required">
                Weight field is required
              </div>

              <label for="category">Category</label>
              <select
                name="category"
                class="form-control"
                v-model="category"
                id="category"
              >
                <option value="snacks">Snacks</option>
                <option value="salads">Salads</option>
                <option value="soup">Soup</option>
                <option value="hotMeals">Hot meals</option>
                <option value="deserts">Deserts</option>
                <option value="drinks">Drinks</option>
                <option value="kidsMenu">Kids menu</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                v-model="description"
                id="description"
                :class="{'is-invalid': $v.description.$error}"
                @blur="$v.description.$touch()"
              >
              <div class="invalid-feedback" v-if="!$v.description.required">
                Description field is required
              </div>

              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                v-model.number="price"
                :class="{'is-invalid': $v.price.$error}"
                @blur="$v.price.$touch()"
                id="price"
              >
              <div class="invalid-feedback" v-if="!$v.price.required">
                Price field is required
              </div>

              <input class="mt-5" type="checkbox" id="newDish" v-model="newDish">
              <label for="newDish" >New Dish</label>

              <input class="mt-5" v-model="special" type="checkbox" id="offer">
              <label for="offer" >Special offer</label>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-success mt-4"
            :disabled="$v.$invalid"
          >Submit</button>
          <button class="btn btn-danger mt-4" @click="openEdit">Cancel</button>
        </form>
      </div>
    </div>
</template>

<script>
  import { required, maxLength } from 'vuelidate/lib/validators'
  import {HTTP} from "../services/http-common";
    export default {
    data() {
      return {
        name: this.itemMenu.name,
        description: this.itemMenu.description,
        price: this.itemMenu.price,
        weight: this.itemMenu.weight,
        category: this.itemMenu.category,
        special: this.itemMenu.special,
        newDish: this.itemMenu.newDish,
        extra: this.itemMenu.extra,
      }
    },
    mounted () {
    },
      props: ['itemMenu'],
      methods: {
        editForm: function () {
          let newDish = {
            "name": this.name,
            "description": this.description,
            "price": this.price,
            "weight": this.weight,
            "category": this.category,
            "special": this.special,
            "new": this.newDish,
            "extra": this.extra
          };

          HTTP.put(`menu/${this.itemMenu.id}`,newDish).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          let findIndex = this.$store.state.menu.map(item=>item.id).indexOf(this.itemMenu.id);
          this.$store.state.menu.splice(findIndex, 1, newDish);
          this.openEdit()
        },
        openEdit: function () {
          this.$store.state.edit = !this.$store.state.edit;
        }
      },
      validations: {
        name: {required,maxLength: maxLength(100)},
        weight:{required},
        description: {required},
        price: {required}
      },
    }
</script>

<style scoped>
  .edit-menu {
    top: 20%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: url(../assets/black-olives-cheese-cook-1437270.jpg);
    background-size: cover;
    position: fixed;
    z-index: 1;
  }
  .edit-menu h3, label {
    color: white;
  }
</style>
