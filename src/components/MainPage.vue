<template>
  <div class="main">
    <section class="banner-area">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-12 banner-content">
            <h6 class="text-white">Wide Options of Choice</h6>
            <h1 class="text-white">Delicious Recipes</h1>
            <p class="text-white">
              inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.
            </p>
            <router-link tag="span" exact to="/menu">
              <a class="btn btn-danger text-uppercase" >Check Our Menu</a>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
 .main {
   background: url(../assets/hero-bg.jpg) center center/cover;
   background-size: cover;
   height: 100vh;
 }
  .banner-area .align-items-center {
    height: 100vh;
  }
</style>
