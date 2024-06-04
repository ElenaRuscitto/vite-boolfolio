
<script>
import axios from 'axios';
import {store} from '../data/store';
  export default {
    nome: 'TypeProject',

    data(){
      return {
        typeName: '',
        projects: []
      }
    },

    methods: {
      getApi(slug){
        axios.get(store.apiUrl + 'projects-by-type/' + slug)
        .then(result=> {
          this.typeName = result.data.name;
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
    <h1>Elenco dei Progetti per il Tipo: {{ typeName }}</h1>

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