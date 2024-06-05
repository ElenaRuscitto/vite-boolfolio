<script>

import { store } from '../data/store';
import axios from 'axios';

  export default {
    name: 'Contacts',


    data(){
      return {
        name: [],
        email: [],
        message: [],
      }
    },

    methods: {
      sendEmail() {
        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }

        axios.post(store.apiUrl + 'send-email', data) 
            .then(result =>{
              console.log(result.data);
            })
            .catch(error =>{
              console.log(error.message);
            })
      },


    },
  }


</script>


<template>
  <div class="container ">
    <h1 class="text-center my-5">Contatti</h1>
    <form @submit.prevent="sendEmail" class="box my-5">

      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input name="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email </label>
        <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <input name="message" type="password" class="form-control" id="message">
      </div>

      <button type="submit" class="btn btn-success my-3">Invia</button>
    </form>
  </div>
</template>



<style lang="scss" scoped>
.box {
  border: 3px solid white;
  border-radius: 20px;
  padding: 30px;
}
</style>