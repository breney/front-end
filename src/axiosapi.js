import axios from "axios"
export default {
    async getBeers () {
         return await axios.get(`https://api.punkapi.com/v2/beers`)              
    },
}