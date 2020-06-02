<template>
    
     <div class="col col-md-3 ml-5 mb-5 ">
               <div class="card" style="width: 18rem;" >
                  <div class="card-body">
                     <img class="card-img-top" :src="beer.image_url"  alt="Card image cap" style="    height: 15rem; ">
                  </div>
                  <div class="card-body">
                     <h5 class="card-title">{{beer.name}}</h5>
                     <p class="card-text">{{beer.abv}} €</p>
                     <p class="card-text"> Quantidade : {{beer.quantity}} </p>
                     <button href="#"  v-if="this.$store.state.globalLogin" class="btn btn-danger" @click="addToCart(beer.id)">Adicionar carrinho</button>
                  </div>
               </div>
            </div>

</template>

<script>
export default {
    props:["beer"],
    methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
                
            }
        }
}
</script>