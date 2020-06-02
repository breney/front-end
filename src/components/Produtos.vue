<template>
<div class="container" style ="margin-top:5rem;">
    <div class="row">
    
            <product v-for="(i) in beers" :key="i.id" :beer="i"></product>  
        </div>
         
</div>
      

</template>

<script>
import Product from "../components/UnicoProduct.vue"

import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Produto',
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
      
   
}


</script>

