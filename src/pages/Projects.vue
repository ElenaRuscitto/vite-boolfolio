<script>
import axios from 'axios';
import {store} from '../data/store';
import ProjectCard from '../components/partials/ProjectCard.vue';


  export default {
    name: 'Projects',

    components: {
    ProjectCard,
    
    },
  
  
    data(){
      return {
        store,
        axios
      }
    },

    methods: {
      getApi(){
        axios.get(store.apiUrl)
        .then(result=> {
          store.projects = result.data.data
          console.log(store.projects);
        })
        .catch(error => {
          console.log(error);
          console.log(error.message);
        })
      }
    },

    mounted(){
      this.getApi()
    // // }

    }
    
  }
</script>


<template>
  <div class="container">
    <h1 class="text-center my-5">I miei Progetti</h1>
    <div class="row row-cols-4">
      <ProjectCard v-for="project in store.projects" 
                        :key="project.id"
                        :id="project.id"
                        :title="project.title"
                        :link="project.link"
                        :image="project.image"
                        :description="project.description"
                        :type="project.type"
                        :technologies="project.technologies"
                        />
    </div>

    
  </div>
</template>



<style lang="scss" scoped>

</style>