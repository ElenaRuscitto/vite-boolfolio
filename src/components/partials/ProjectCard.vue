<script>
import { store } from '../../data/store'


  export default {
    props: {
      title: String,
      link: String,
      image: String,
      description: String,
      type: String,
      // technologies: String,
    }
      
  }
</script>

<template>
  <div class="my-5">
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ type.name }}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ technologies }}</h6>
        <p class="card-text">{{ description }}</p>
        <a href="#" class="card-link">{{ link }}</a>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>