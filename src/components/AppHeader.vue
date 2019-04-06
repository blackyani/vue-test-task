<template>
  <header id="header" class="d-flex flex-column position-absolute">
    <div class="header-top">
      <div class="container">
        <div class="row justify-content-center">
          <div id="logo">
            <router-link tag="a" exact to="/">
              <img src="../assets/logo.png" alt="Logo"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link tag="span" exact to="/" active-class="active">
            <a class="nav-item nav-link" >Home</a>
          </router-link>
          <router-link tag="span" exact to="/menu" active-class="active">
            <a class="nav-item nav-link" >Menu</a>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .navbar-expand-lg .navbar-nav {
    width: 100%;
    justify-content: center;
    border: 1px solid white;
    border-left: none;
    border-right: none;
  }
  header {
    width: 100%;
    top: 0;
    background: transparent;
  }
  .navbar-light .navbar-nav a {
    color: white;
  }
</style>
