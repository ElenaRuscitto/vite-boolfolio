
<script>
import axios from 'axios';
import {store} from '../data/store';
  export default {
    nome: 'TechnologyProjects',

    data(){
      return {
        technologyName: '',
        projects: []
      }
    },

    methods: {
      getApi(slug){
        axios.get(store.apiUrl + 'technology-projects/' + slug)
        .then(result=> {
          this.technologyName = result.data.name;
          this.projects = result.data.projects

        })
        .catch(error => {
        console.log(error);
        console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi(this.$route.params.slug)
    }
    
  }
</script>

<template>
  <div class="container">
    <h1 class="mt-4">Elenco dei Progetti per il Tecnologia: {{ technologyName }}</h1>

    <ul>
      <li 
      v-for="project in projects"
      :key="project.id"
      >{{ project.id }} -
      <router-link :to="{name: 'typeProjects', params: {slug:project.slug}}">{{ project.title }}</router-link>
      </li> 
    </ul>

  </div>
</template>


<style lang="scss" scoped>

ul{
  list-style: none;
}


</style>