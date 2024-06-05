<script>

import { store } from '../data/store';
import axios from 'axios';
import Loader from '../components/partials/Loader.vue';

  export default {
    name: 'Contacts',

    components: {
      Loader
    },

    data(){
      return {
        name: '',
        email: '',
        message: '',

        loader: false,
        sent: false,

        errors: {
          name:[],
          email: [],
          message: []
        }
      }
    },

    methods: {
      sendEmail() {

        this.loader = true;

        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }

        axios.post(store.apiUrl + 'send-email', data) 
            .then(result =>{

              this.loader = false;
              console.log(result.data);
              this.sent = result.data.success; 

              if(!result.data.success) {
                this.errors = result.data.errors;
                
              } else {
                this.errors = {
                  name:[],
                  email: [],
                  message: []
                }
              }
              console.log(result.data.errors);
            })
            .catch(error =>{

              this.loader = false;
              console.log(error.message);
            })
      },


    },
  }


</script>


<template>
  <div class="container">
    <h1 class="text-center my-5">Contatti</h1>
      <div v-if="!loader">
        <form @submit.prevent="sendEmail" class="box my-5">

          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input v-model="name" name="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
            <p class="error">{{ errors.name?.toString() }}</p>
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email </label>
            <input v-model="email"  name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" >
            <p class="error">{{ errors.email?.toString() }}</p>
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea v-model="message"  name="message" type="text" class="form-control" rows="3" id="message"></textarea>
            <p class="error">{{ errors.message?.toString() }}</p>
          </div>

          <button type="submit" class="btn btn-success my-3">Invia</button>
        </form>
      </div>
      <Loader v-else />
  </div>
</template>



<style lang="scss" scoped>
.box {
  border: 3px solid white;
  border-radius: 20px;
  padding: 30px;
}

.error {
  color: red;
}


</style>