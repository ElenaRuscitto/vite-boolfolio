<script>
import {store} from '../data/store';



export default {

  components: {
  
    
  },
  
    data(){
      return {
        store,
      }
    },

  }
</script>


<template>
 
    <!-- <div class="container"> -->


          <router-view></router-view>
          
       



    <!-- </div> -->

    

  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>