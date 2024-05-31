<script>
import {store} from '../data/store';
import ProjectCard from './partials/ProjectCard.vue';


export default {

  components: {
    ProjectCard,
    
  },
  
    data(){
      return {
        store,
      }
    }
  }
</script>


<template>
 
    <div class="container">
      <h1>Progetti</h1>
      <div class="row row-cols-4">
        <ProjectCard v-for="project in store.projects" 
                      :key="project.id"
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
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>