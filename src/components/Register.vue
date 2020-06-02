<template>
   

        <div class="container">
  <div class="row">
    <div class="col col-md-2 ">
    
    </div>
    <div class="col col-md-8">
  <form  @submit.prevent= "pressed" class="form-signin " style="
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;">
      <img class="mb-4" src="https://pngimage.net/wp-content/uploads/2018/05/dp-logo-png-3.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Registe - se</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input  type="email" v-model= "email" placeholder=" Email" class="form-control" style="margin-bottom:10px;">

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model= "password" placeholder="Password" class="form-control" style="margin-bottom:10px;">

       
     
      <button class="btn btn-lg btn-primary btn-block bg-danger" type="submit">Registar</button>
      <p class="mt-5 mb-3 text-muted">© Bruno Pereira 2020-2021</p>
    </form>
    </div>
    <div class="col col-md-2">

    </div>
  </div>

</div>




        
    
</template>
<script>
import * as firebase from "firebase/app"
import "firebase/auth"

export default {
    methods: {
        async pressed(){
           firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
   .then(() => {
       this.$router.push("/login")
   })
  .catch(() => {
       
  });
            
        }
    },
    data(){
        return{
            email: "",
            password: '',
            error: ''
        }
    }
}
</script>