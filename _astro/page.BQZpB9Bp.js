(()=>{const n="foxglove-cookie-consent";function s(){return Date.now()}function e(){try{const c=localStorage.getItem(n);if(!c)return null;const o=JSON.parse(c);return o.expiresAt<s()?(localStorage.removeItem(n),null):o}catch{return null}}function a(c){localStorage.setItem(n,JSON.stringify({updatedAt:s(),expiresAt:s()+31536e6,categories:c}))}window.astroConsent={get:e,set:a,reset(){localStorage.removeItem(n),location.reload()}}})();(()=>{if(window.astroConsent.get())return;const n={essential:!0,analytics:!1,marketing:!1},t=document.createElement("div");t.id="astro-consent-banner",t.innerHTML=`
    <div class="cb-container">
      <div>
        <div class="cb-title">Foxglove uses cookies</div>
        <div class="cb-desc">
          Choose how your data is used.
          <a href="https://foxglove.dev/legal/privacy">Learn more</a>
        </div>
      </div>
      <div class="cb-actions">
        <button class="cb-manage">Manage</button>
        <button class="cb-reject">Reject</button>
        <button class="cb-accept">Accept all</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector(".cb-accept").onclick=()=>{window.astroConsent.set({essential:!0,analytics:!0,marketing:!0}),t.remove()},t.querySelector(".cb-reject").onclick=()=>{window.astroConsent.set({essential:!0}),t.remove()},t.querySelector(".cb-manage").onclick=s;function s(){const e=document.createElement("div");e.id="astro-consent-modal",e.innerHTML=`
      <div class="cb-modal">
        <h3>Cookie preferences</h3>

        <div class="cb-row">
          <span>Essential</span>
          <strong>Always on</strong>
        </div>

        <div class="cb-row">
          <span>Analytics</span>
          <div class="cb-toggle" data-key="analytics"><span></span></div>
        </div>

        <div class="cb-row">
          <span>Marketing</span>
          <div class="cb-toggle" data-key="marketing"><span></span></div>
        </div>

        <div class="cb-actions">
          <button class="cb-accept">Save preferences</button>
        </div>
      </div>
    `,document.body.appendChild(e),e.querySelectorAll(".cb-toggle").forEach(a=>{const c=a.getAttribute("data-key");n[c]&&a.classList.add("active"),a.onclick=()=>{n[c]=!n[c],a.classList.toggle("active")}}),e.querySelector(".cb-accept").onclick=()=>{window.astroConsent.set({essential:!0,...n}),e.remove(),t.remove()},e.onclick=a=>{a.target===e&&e.remove()}}})();
