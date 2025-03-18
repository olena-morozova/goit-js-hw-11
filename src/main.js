import { fetchImages } from "./js/pixabay-api.js";  
import { renderImages } from "./js/render-functions.js";  

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");  

form.addEventListener("submit", (event) => {  
    event.preventDefault();  

    const query = event.target.elements["search-text"].value.trim(); // Отримуємо значення з поля вводу  

    if (query === "") {  
        console.log("Поле пошуку порожнє");  
        return;  
    }  

    fetchImages(query)  
        .then(data => {  
            if (data.hits.length === 0) {  
                console.log("Нічого не знайдено");  
                return;  
            }  
            renderImages(data.hits);  
        })  
        .catch(error => console.log("Помилка отримання даних:", error));  
});