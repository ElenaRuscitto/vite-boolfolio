<script>
import { stringifyQuery } from 'vue-router';
import { store } from '../../data/store'


  export default {
    props: {
      project: Object
    }
      
  }
</script>

<template>
  <div class="col my-5">
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title text-uppercase">{{project.id}} 
          <router-link :to="{name:'projectDetail', params:{slug:project.slug}}">{{ project.title }}</router-link>
        </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type.name }}</h6>

        <h6 class="mb-2">Tecnologie:
          <span class="badge text-bg-success m-1" v-for="(technology, index) in technologies" :key="index" >{{project.technology.name}}</span>
        </h6>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="card-link">{{ project.link }}</a>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>