<template>
   <div class="Produtos" >
      <div class="container " style ="margin-top:5rem;">
         <div class="row">
            <product v-for="(i) in beers" :key="i.id" :beer="i"></product>
         </div>
         <div class="row" style = "border-bottom: 1px solid black;" v-if=" tamanhoCarrinho > 0">
            <div class="col col-md-4" style="display:flex;">
               <img src="https://image.flaticon.com/icons/png/512/126/126510.png" width="30" height="30" class="d-inline-block align-top" alt="">
               <h3 style="margin-left: 20px;">  Carrinho de compras</h3>
            </div>
            <div class="col col-md-4"> 
            </div>
            <div class="col col-md-4">
            </div>
            <table class="table table-dark" style ="border-radius: 10px; margin-top:10px;"  >
               <thead>
                  <tr>
                     <th scope="col" >Drink</th>
                     <th scope="col">Nome</th>
                     <th scope="col">Quantidade</th>
                     <th scope="col">Remover</th>
                     <th scope="col">Preço</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="i in cart" :key="i.id" >
                     <th scope="row" > <img class="card-img-top" :src="i.image_url" alt="Card image cap" style="width: auto; height: 3rem;
                        "> </th>
                     <td>{{i.name}}</td>
                     <td>
                        <button 
                           @click="removeFromCart(i.id)"
                           class="btn btn-outline-danger btn-small">
                        -
                        </button>
                        <span class="mx-2">{{i.quantity}}</span>
                        <button 
                           @click="addToCart(i.id)"
                           class="btn btn-outline-success btn-small">    
                        +                                        
                        </button>
                     </td>
                     <td>
                        <button 
                           @click="deleteFromCart(i.id)"
                           class="btn  bg-danger text-white btn-small">
                        Remover
                        </button>
                     </td>
                     <td > {{(i.quantity * i.abv).toFixed(2)}} €</td>
                  </tr>
                  <tr>
                     <td> Total </td>
                     <td> </td>
                     <td></td>
                     <td></td>
                     <td>{{(quantidadeCarrinho).toFixed(2)}} €</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
   import Product from "../components/UnicoProduct.vue"
   import {mapState, mapGetters} from 'vuex'
   export default {
       name: 'Cart',
        components:{
           Product
       },
        computed: {
               ...mapState([
                   "cart"
               ]),
               ...mapGetters([
                   "tamanhoCarrinho",
                   "quantidadeCarrinho"
                
               ]),
               beers(){
                   
                   return this.$store.state.products;
                   
               }
           },
           created(){
                   this.$store.dispatch("getBeers")
           },
           methods:{
               addToCart(id){
                   this.$store.dispatch("addToCart",id)
               },
               removeFromCart(id) {
                   this.$store.dispatch("removeFromCart", id);
               },
               deleteFromCart(id) {
                   this.$store.dispatch("deleteFromCart", id);
               }
           },
      
   }
   
   
</script>