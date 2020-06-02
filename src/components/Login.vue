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
               <h1 class="h3 mb-3 font-weight-normal">Log in</h1>
               <label for="inputEmail" class="sr-only">Email address</label>
               <input  type="email" v-model= "email" placeholder=" Email" class="form-control" style="margin-bottom:10px;">
               <label for="inputPassword" class="sr-only">Password</label>
               <input type="password" v-model= "password" placeholder="Password" class="form-control" style="margin-bottom:10px;">
               <label>
                  <router-link  style="margin-bottom:10px;" to="/register">Registe - se</router-link>
               </label>
               <button class="btn btn-lg btn-primary btn-block bg-danger" type="submit" >Log in</button>
               <p class="mt-5 mb-3 text-muted">© Bruno Pereira 2020-2021</p>
            </form>
         </div>
         <div class="col col-md-2">
         </div>
         <div class="alert bg-danger" v-show="isActive">
            {{error}}
         </div>
      </div>
   </div>
</template>
<script>
   import * as firebase from "firebase/app"
   import "firebase/auth"
   
   
   export default {
       name: 'Login',
       data(){
           return{
               email: "",
               password: '',
               error: '',
               isActive: false,
               LogginAtivado: false,
               activeTimeout: {}
             
              
           }
       },
    
       
     
       methods: {
           
           async pressed(){
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              
      .then(() => {
          this.setLogin(true);
          this.$router.push("/carrinho")    
      })
     .catch(() => {
          this.isActive = true;
          
          this.error = "Erro no login. Email ou password inserida esta errada !"
     })
     }, 
       setLogin(login) {
          
             this.$store.dispatch("setLogin", login);
       
           
     }
           
     }
     
       
   }
</script>
<style >
   .alert{
   width: 30%;
   text-align: center;
   color: white;
   position: fixed;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   }
</style>