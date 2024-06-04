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
<main>
  <router-view></router-view>
</main>

          
          
       



    <!-- </div> -->

    

  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

main{
 min-height: calc(100vh - 200px);
}

</style>