<script>
  export default {
    name: 'header'
  }

</script>


<template>
    

  <header >
      <nav class="navbar navbar-expand-lg bg-body-tertiary h-100">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar Pubblico</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3">
              <router-link :to="{name:'home'}">Home</router-link>
            </li>

            <li class="nav-item me-3">
              <router-link :to="{name:'projects'}">Progetti</router-link>
            </li>

            <li class="nav-item me-3">
              <router-link :to="{name:'about'}">Chi Sono</router-link>
            </li>

            <li class="nav-item me-3">
              <router-link :to="{name:'contacts'}">Contatti</router-link>
            </li>
          </ul>
          <span class="navbar-text">
              <a class="nav-link" href="{{route('login')}}">Login</a>
          </span>
          <span class="navbar-text ms-4">
              <a class="nav-link" href="{{route('register')}}">Registrati</a>
            </span>
        </div>
      </div>
    </nav>
  </header>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

header{
  height: 80px;
}

// a{
//   text-decoration: none;
//   color: black;
//   &:hover {
//     color: rgb(107, 105, 105);
//     text-decoration: underline;
//   }
// }

</style>