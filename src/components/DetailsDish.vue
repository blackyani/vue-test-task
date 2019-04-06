<template>
  <div class="container details">
    <h3 class="text-center">{{this.$route.params.name}}</h3>
    <p class="text-center">{{this.$route.params.description}}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Category: {{this.$route.params.category}}</li>
      <li class="list-group-item">{{this.$route.params.extra}}</li>
      <li class="list-group-item">Price: {{this.$route.params.price}}</li>
      <li class="list-group-item">Weight: {{this.$route.params.weight}}</li>
    </ul>
    <button class="btn btn-info mt-2" @click="backToMenu">Back</button>
  </div>
</template>

<script>
    export default {
      data() {
        return {
        }
      },
      methods: {
        backToMenu: function () {
          this.$router.push('/menu')
        }
      }
    }
</script>

<style scoped>
  .details {
    margin-top: 150px;
  }
</style>
