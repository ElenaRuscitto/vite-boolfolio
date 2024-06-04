<script>
import axios from 'axios';
import {store} from '../data/store';

  export default {
    name: 'ProjectDetail',
    
    data(){
      return {
        project: {}
      }
    },
    methods: {
      getApi(){
        const slug = this.$route.params.slug;
        axios.get(store.apiUrl + 'project-by-slug/' + slug)
        .then(result=>{
          console.log(result.data);
          this.project=result.data.project;
        })
        .catch(error => {
          console.log(error.message);
        })
      }
    },
    computed: {
      type(){
        if(!this.project.type) {
          return 'nessun Tipo'
        } 
        return 'Type: ' + this.project.name;
      },
      // technologies(){
      //   if(!this.project.technologies) {
      //     return 'nessuna Tecnologia'
      //   } 
      //   return 'Technology: ' + this.project.name;
      // }   
      },
    
    mounted(){
      this.getApi();
    }
  }
</script>


<template>
  <div>
    <div class="project text-center my-5">
      <h1>{{project.id}} - {{ project.title }}</h1>
      <!-- <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type.name}}</h6> -->

      <h6 class="mb-2">Tecnologie:
        <span class="badge text-bg-success m-1" v-for="(technology, index) in project.technologies" :key="index" >{{technology.name}}</span>
      </h6>
      <img :src="`http://127.0.0.1:8000${project.image}`" alt="project.title"><br>
      <small class="caption">{{ project.original_image }}</small>
      <p class="card-text"><strong>Descrizione:</strong> {{ project.description }}</p>
      <a href="#" class="card-link"><strong>Link:</strong> {{ project.link }}</a>
    </div>

  </div>
</template>



<style lang="scss" scoped>



</style>