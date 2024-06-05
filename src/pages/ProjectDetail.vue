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
      // projectUpdated(){
      //   // creo una nuova data in base al dato che arriva dall' Api 
      //   const d = new Date (this.project.updated_at) ;
      //   // opzioni di visualizzazione della data 
      //   let options = {
      //     weekday: 'long' , 
      //     year: 'numeric',
      //     month: 'long',
      //     day: 'numeric'
      //   }
      //   // navigator.language restituisce la lingua del browser 
      //   return new Intl.DateTimeFormat(navigator.language, options).format(d);
      // } 
    },
    
    mounted(){
      this.getApi();
    }
  }
</script>


<template>
  <div class="container">
    <h1 class="text-center mt-5">Dettaglio</h1>
    <div class="mb-5">
      <h2 class=" text-capitalize"> {{project.id}} - {{ project.title }}</h2>
      <!-- <p><strong>Data:</strong>{{ projectUpdated }}</p> -->
      <h6 class="card-subtitle mb-2 text-body-secondary"><strong>Tipo: </strong>{{project.type?.name}}</h6>

      <h6 class="mb-2"><strong>Tecnologie:</strong>
        <span class="badge text-bg-success m-1" v-for="(technology, index) in project?.technologies" :key="index" >{{technology.name}}</span>
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