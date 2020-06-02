import Vue from 'vue'
import Vuex from 'vuex'
import axiosapi from '../axiosapi'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: null,
        cart: [],
        globalLogin: false
    },
    getters: {
        tamanhoCarrinho: (state) => {
            return state.cart.length;
        },
        quantidadeCarrinho: (state) => {
            return state.cart.reduce((total, product) => {
                return   (total + (product.abv * product.quantity)) ;
            }, 0);
        },
        isLoggin: (state) => {
                return state.globalLogin;
        }
    },
    mutations: {
        setLogin: (state,login) => {
            state.globalLogin = login
        },
        setBeers: (state, data) => {
            data.forEach( (element,index) => {
                data[index].quantity = Math.floor(Math.random() * 20);
             
            });  
            state.products = data;
        },
        addToCart: (state, Id) => {
            //find the product in the products list
            var product = state.products.find((product) => product.id === Id);
            //find the product in the cart list
            var cartProduct = state.cart.find((product) => product.id === Id);

            if (cartProduct) {
                if(product.quantity > 0){
                    cartProduct.quantity++;
                    product.quantity--;
                }
            } else {
                state.cart.push({
                    // product newly added to cart
                    ...product,
                    stock: product.quantity,
                    quantity: 1,
                    
                });
                product.quantity--;
            }
            
           

            console.log(product.quantity)
        },
        removeFromCart: (state, Id) => {
            //find the product in the products list
            var product = state.products.find((product) => product.id === Id);
            //find the product in the cart list
            var cartProduct = state.cart.find((product) => product.id === Id);

         
                if(cartProduct.quantity > 1){
                    cartProduct.quantity--;
                    product.quantity++;
                }
            
         
           
        },
        deleteFromCart: (state, Id) => {
            //find the product in the products list
            var product = state.products.find((product) => product.id === Id);
            //find the product index in the cart list
            var cartProductIndex = state.cart.findIndex((product) => product.id === Id);
            //srt back the quantity of the product to intial quantity
            product.quantity = state.cart[cartProductIndex].stock;
            // remove the product from the cart
            state.cart.splice(cartProductIndex, 1);
        },
       
    },
    actions: {
        getBeers: ({ commit }) => {
             
                axiosapi.getBeers().then((beers)=> {
                    
                    commit("setBeers", beers.data);
                    console.log(beers)
                })
                
                
                 
        },
        addToCart: ({ commit },Id) => {
                commit("addToCart", Id);        
        },
        removeFromCart: ({ commit }, Id) => {    
                commit("removeFromCart", Id);       
        },
        deleteFromCart: ({ commit }, Id) => {
              commit("deleteFromCart", Id); 
        },
        setLogin: ({ commit }, login) => {
            commit("setLogin",login)
        }
    }
});