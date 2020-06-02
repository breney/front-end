<template>
   <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom border-white">
      <a class="navbar-brand" href="#">
      <img src="https://pngimage.net/wp-content/uploads/2018/05/dp-logo-png-3.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Doce Pingol
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
            <router-link  class=" text-white " to="/">Home</router-link>
            <router-link v-if="!this.$store.state.globalLogin" class="  text-white" style="padding-left:10px;" to="/Produtos">Produtos</router-link>
            <router-link  v-if="this.$store.state.globalLogin" class="  text-white" style="padding-left:10px;" to="/Carrinho">Produtos</router-link>
         </ul>
      </div>
      <form class="form-inline my-2 my-lg-0">
         <router-link v-if="!this.$store.state.globalLogin" class="btn btn btn-danger my-2 my-sm-0 " to="/Login">Login</router-link>
         <a v-if="this.$store.state.globalLogin" class="btn btn btn-danger my-2 my-sm-0 text-white mr-2"> Utilizador120 </a>
         <button  v-if="this.$store.state.globalLogin" class="btn btn btn-danger my-2 my-sm-0 text-white " @@click="setLogin(true)">Logout</button>
      </form>
   </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    setLogin(login) {
        this.$store.dispatch("setLogin", login);
  }
  }
}
</script>
