<script>
import axios from 'axios';
import {store} from '../data/store';
import ProjectCard from '../components/partials/ProjectCard.vue';
import Loader from '../components/partials/Loader.vue';
import Paginator from '../components/partials/Paginator.vue';




  export default {
    name: 'Projects',
 
    components: {
    ProjectCard,
    Loader,
    Paginator
    
    },
  
  
    data(){
      return {
        store,
        axios,
        loader: true,
        // projects: [],
        // types: [],
        // technologies: []
      }
    },

    methods: {
      getApi(type = ''){
        this.loader = true;
        axios.get(store.apiUrl + type)
        .then(result=> {
          this.loader = false;
          // switch
          switch (type) {
            case 'types':
              store.types = result.data
              
              break;

            case 'technologies':
              store.technologies = result.data
       
              break;

            default:
              store.projects = result.data.data


              // paginator
              store.paginator.current_page = result.data.current_page;
                  store.paginator.links = result.data.links
                  store.paginator.total = result.data.total
              break;
          }

        })
        .catch(error => {
          console.log(error);
          console.log(error.message);
          this.loader = false;
        })
      }
    },

    mounted(){
      this.getApi('projects')
      this.getApi('types')
      this.getApi('technologies')
     
    }
    
  }
</script>


<template>
  <div class="container " v-if="!loader">
    <h1 class="text-center my-5">I miei Progetti</h1>
    <div class="row row-cols-2">
      <!-- col 1 -->
      <div class="col ">

        <div class="box">
          <h3>Tipi:</h3>
            <div>
              <router-link 
                v-for="item in store.types" 
                :key="`c-${item.id}`" 
                class="badge text-bg-dark m-1" 
                :to="{name:'typeProjects', params: {slug: item.slug}}"> 
              {{item.name}} </router-link>
            </div>
            
        </div>
        
      </div>
      <!-- /col 1 -->
      <div class="col">
        <div class="box">
          <h3>Tecnologie:</h3>
            <div>
              <router-link 
              v-for="item in store.technologies" 
              :key="`c-${item.id}`" 
              class="badge text-bg-success m-1"
              :to="{name:'technologyProjects', params: {slug: item.slug}}"> 
              {{item.name}} </router-link>
            </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-4">
      <ProjectCard v-for="project in store.projects" 
                        :key="project.id"
                        :project = "project"
                        />
    </div>

    
  </div>
  <Loader v-else />
  <div class="text-black">
    <Paginator :data="store.paginator" @changePage="getApi" />
  </div>
  
</template>



<style lang="scss" scoped>

.box {
  // border: 1px solid black;
  // border-radius: 10px;
  // padding: 10px;
  margin-left: 200px;
}

</style>