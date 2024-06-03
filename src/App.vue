<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
import {store} from './data/store'; 

export default {
    components: {
      Header,
      Main,
      Footer
    },

    data(){
      return {
        axios,
        store
      }
    },

    // methods: {
    //   getApi(){
    //     axios.get(store.apiUrl)
    //     .then(result=> {
    //       store.projects = result.data.data
    //       console.log(store.projects);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       console.log(error.message);
    //     })
    //   }
    // },

    // mounted(){
    //   this.getApi()
    // }
  }

</script>




<template>
  
  <Header />


  <Main />


  <Footer />  

</template>



<style lang="scss">
  @use './assets/scss/main.scss';
</style>