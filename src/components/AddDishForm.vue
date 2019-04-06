<template>
  <form class="mt-5" @submit.prevent="sendForm" method="post">
    <h3 class="text-center">Add new menu item</h3>
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
      <div class="col-md-12">
        <label for="extra">Extra Description</label>
        <input type="text" class="form-control" v-model="extra" id="extra">
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-success mt-4"
      id="submit-form"
      :disabled="$v.$invalid"
    >Submit</button>
  </form>
</template>

<script>
  import { required, maxLength } from 'vuelidate/lib/validators'
  import {HTTP} from "../services/http-common";
    export default {
      data() {
        return {
          newMenuItem: null,
          name: null,
          description: null,
          price: null,
          weight: null,
          category: 'kidsMenu',
          special: false,
          newDish: false,
          extra: null
        }
      },
      methods: {
        sendForm: function () {
          let allInputs = [...document.querySelectorAll('input')];

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

          HTTP.post(`menu`,newDish).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.$store.state.menu.push(newDish);
          allInputs.forEach(item=>{item.value = ''});
        }
      },
      validations: {
        name: {required,maxLength: maxLength(100)},
        weight:{required},
        description: {required},
        price: {required}
      },
      mounted () {
        console.log("this.$v",this.$v);
      }
    }
</script>

<style scoped>
  form h3 {
    color: white;
  }
  label {
    color: white;
  }
</style>
