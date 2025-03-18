import axios from "axios";  

const API_KEY = "49372428-d1d84138fa434fefe0cc10176";  
const BASE_URL = "https://pixabay.com/api/";  

export function fetchImages(query) {  
    const params = {  
        key: API_KEY,  
        q: query,  
        image_type: "photo",  
        orientation: "horizontal",  
        safesearch: true,  
    };  

    return axios
        .get(BASE_URL, { params }) // Передаємо об'єкт з параметрами  
        .then(response => {
            console.log(response.data)
            return response.data;
        }) 
        .catch(error => {  
            console.error("Помилка запиту:", error);  
            return []; // Повертаємо порожній масив, щоб уникнути помилок у main.js  
        });  
}