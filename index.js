import{a as $,S,i}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const P="48284605-8cfffb6b97886c5ff39067830",E="https://pixabay.com/api/";async function g(r,o=1,s=15){const n=`${E}?key=${P}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`,{data:e}=await $.get(n);if(!e.hits.length)throw new Error("No images found");return e}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),q=document.querySelector(".load-more");function y(r){const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:w,downloads:v})=>`
    <a href="${n}" class="gallery__item">
      <div class="photo-card">
        <img src="${s}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${t}</p>
          <p class="info-item"><b>Views:</b> ${a}</p>
          <p class="info-item"><b>Comments:</b> ${w}</p>
          <p class="info-item"><b>Downloads:</b> ${v}</p>
        </div>
      </div>
    </a>
  `).join("");m.insertAdjacentHTML("beforeend",o)}function I(){m.innerHTML=""}function p(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function B(){q.classList.add("hidden")}function M(){const{height:r}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const O=document.querySelector("#search-form"),u=document.querySelector(".load-more");document.querySelector(".gallery");let c=1,l="",d=0;const f=15,L=new S(".gallery a");O.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.target.elements.searchQuery.value.trim(),!l){i.warning({title:"Warning",message:"Please enter a search term!"});return}I(),B(),c=1;try{p();const{hits:o,totalHits:s}=await g(l,c,f);if(d=s,!o.length){i.error({title:"Error",message:"No images found. Try again!"});return}y(o),L.refresh(),i.success({title:"Success",message:`Found ${d} images!`}),o.length<d&&u.classList.add("visible")}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});u.addEventListener("click",async()=>{c+=1;try{p();const{hits:r}=await g(l,c,f);y(r),L.refresh(),M(),c*f>=d&&(u.classList.remove("visible"),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map