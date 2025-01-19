import axios from "axios"

// Trending coins
const fetchTrendindCoins=async()=>{
    const response=await axios.get("https://api.coingecko.com/api/v3/search/trending");
    return response.data.coins;
}

// Search Coins
const fetchSearchCoins=async(query)=>{
    const response=await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
    return response.data.coins;
}

// Specific Coin
const fetchSpecificCoin=async(id)=>{
    const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;
   
}

const coinServices={fetchTrendindCoins,fetchSearchCoins,fetchSpecificCoin};

export default coinServices;