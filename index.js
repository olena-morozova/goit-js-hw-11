import{a as i,S as a}from"./assets/vendor-CRUsANw1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="49372428-d1d84138fa434fefe0cc10176",p="https://pixabay.com/api/";function f(s){const o={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return i.get(p,{params:o}).then(e=>(console.log(e.data),e.data)).catch(e=>(console.error("Помилка запиту:",e),[]))}const c=document.querySelector(".gallery"),m=new a(".gallery a",{captionsData:"alt",captionDelay:250});function d(s){const o=s.map(e=>`  
                <li class="gallery-item">  
                    <a class="gallery-link" href="${e.largeImageURL}">  
                        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>  
                        <ul class="content-list">  
                            <li class="content-item"><p>Likes</p><p>${e.likes}</p></li>  
                            <li class="content-item"><p>Views</p><p>${e.views}</p></li>  
                            <li class="content-item"><p>Comments</p><p>${e.comments}</p></li>  
                            <li class="content-item"><p>Downloads</p><p>${e.downloads}</p></li>  
                        </ul>  
                    </a>  
                </li>  
            `).join("");c.innerHTML="",c.insertAdjacentHTML("beforeend",o),m.refresh()}const g=document.querySelector(".form");g.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){console.log("Поле пошуку порожнє");return}f(o).then(e=>{if(e.hits.length===0){console.log("Нічого не знайдено");return}d(e.hits)}).catch(e=>console.log("Помилка отримання даних:",e))});
//# sourceMappingURL=index.js.map
