(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(537),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),A=new URL(t(418),t.b),u=new URL(t(413),t.b),l=new URL(t(6),t.b),p=i()(o()),m=c()(A),d=c()(u),f=c()(l);p.push([n.id,`@font-face {\n    font-family: GreatVibes;\n    src: url(${m});\n}\n\n@font-face {\n    font-family: Oswald;\n    src: url(${d});\n}\n\n:root {\n    font-size: 62.5%;\n    --primary-font-colour: #f4f4f5;\n    --secondary-font-colour: #d4d4d8;\n    --primary-bg-colour: #52525b;\n    --secondary-bg-colour: #27272a;\n    --primary-trim-colour: #fcd34d;\n    --secondary-trim-colour: #f97316;\n}\n\nbody {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    max-width: 100%;\n    font-size: 1.5rem;\n    background-color: var(--primary-bg-colour);\n    overflow: scroll;\n}\n\n.header {\n    background-color: var(--secondary-bg-colour);\n    color: var(--primary-font-colour);\n    font-family: GreatVibes, Cursive;\n    width: 100%;\n    box-shadow: 0px 1.5px 3px var(--primary-trim-colour);\n    display: grid;\n    grid-template-columns: 1.5fr max(50px, 5vw) 3.5fr;\n    grid-template-rows: max(100px, 10vh);\n    justify-items: center;\n    align-items: center;\n    position: sticky;\n    top: 0px;\n}\n\n.header-title {\n    font-size: 3rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    text-shadow: 0.5px 0.5px var(--secondary-trim-colour);\n}\n\n.header-title > h1 {\n    margin: 0px;\n}\n\n.header-title span {\n    font-weight: 100;\n}\n\n.header-nav {\n    width: 100%;\n    grid-column: 3 / span 1;\n}\n\n.header-nav > ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n    font-size: 4rem;\n    letter-spacing: 3px;\n    font-style: bold;\n    display: flex;\n    justify-content: space-around;\n}\n\n.header-nav li:hover {\n    cursor: pointer;\n    color: var(--secondary-font-colour);\n    text-shadow: 0.5px 0.5px var(--primary-trim-colour);\n}\n\n.main-content-wrapper {\n    padding: 5vh 15vw;\n}\n\n.about-us, .menu, .contact-us {\n    box-shadow: 0px 0px 20px var(--secondary-trim-colour);\n}\n\n.about-us {\n    display: flex;\n}\n\n.menu, .contact-us {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    row-gap: 20px;\n    column-gap: 30px;\n}\n\n.menu > h2, .contact-us > h2 {\n    grid-column: 1 / span 2;\n}\n\n.contact-us > form {\n    align-self: start;\n    text-align: start;\n    font-size: 2.5rem;\n    color: var(--primary-font-colour);\n    font-family: Oswald, sans-serif;\n    display: grid;\n    row-gap: 20px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.form-row > input, .form-row > textarea, .form-row > button {\n    font-size: 2rem;\n    font-family: Oswald, sans-serif;\n    padding: 5px;\n}\n\n.form-row > button {\n    width: 50%;\n    padding: 10px 20px;\n    align-self: center;\n    letter-spacing: 2px;\n    font-size: 2.5rem;\n    box-shadow: 0px -0px 5px var(--primary-trim-colour);\n}\n\n.form-row > button:hover {\n    background-color: var(--secondary-trim-colour);\n    cursor: pointer;\n}\n\n.form-row > input:focus, .form-row > textarea:focus {\n    outline: 2px solid var(--primary-trim-colour);\n}\n\n.menu > img, .contact-us > img {\n    width: 100%;\n    object-fit: cover;\n}\n\n.contact-us > img {\n    max-height: 800px;\n}\n\n.menu> img {\n    max-height: 400px;\n}\n\n.item-information > h3 {\n    color: var(--primary-trim-colour);\n    font-size: 2.5rem;\n}\n\n.item-information {\n    align-self: start;\n    height: 100%;\n    padding: 0px 15px;\n    background-color: var(--primary-bg-colour);\n}\n\n.image-wrapper, .information {\n    flex-basis: 100%;\n}\n\n.about-us > .image-wrapper {\n    background-image: url(${f});\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: var(--secondary-bg-colour);\n}\n\n.information, .menu, .contact-us {\n    background-color: var(--secondary-bg-colour);\n    text-align: center;\n    padding: 20px;\n}\n\n.information > h2, .menu > h2, .contact-us > h2 {\n    color: var(--primary-font-colour);\n    font-family: GreatVibes, Cursive;\n    letter-spacing: 3px;\n    font-size: 3em;\n    margin: 20px;\n}\n\n.information > p, .item-information {\n    color: var(--secondary-font-colour);\n    font-family: Oswald, sans-serif;\n    font-size: 1.5em;\n    letter-spacing: 1.5px;\n}\n\n.information > img {\n    width: 90%;\n    height: auto;\n}\n\n.footer {\n    width: 100%;\n    background-color: var(--secondary-bg-colour);\n    height: max(5vh, 30px);\n    box-shadow: 0px -0.5px 2px var(--primary-trim-colour);\n}\n\n.footer > ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: var(--primary-font-colour);\n    font-size: 2rem;\n}\n\n.footer a {\n    color: var(--secondary-font-colour);\n}\n\n.footer a:hover {\n    color: var(--primary-trim-colour);\n}\n\n.footer a:visited {\n    color: var(--secondary-trim-colour);\n}\n\n.footer a:visited:hover {\n    color: var(--primary-trim-colour);\n}\n\n.footer img {\n    height: 25px;\n}\n\n.dev-details {\n    display: flex;\n    gap: 20px;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n    font-family: GreatVibes;\n    src: url(./Assets/GreatVibes-Regular.ttf);\n}\n\n@font-face {\n    font-family: Oswald;\n    src: url(./Assets/Oswald-VariableFont_wght.ttf);\n}\n\n:root {\n    font-size: 62.5%;\n    --primary-font-colour: #f4f4f5;\n    --secondary-font-colour: #d4d4d8;\n    --primary-bg-colour: #52525b;\n    --secondary-bg-colour: #27272a;\n    --primary-trim-colour: #fcd34d;\n    --secondary-trim-colour: #f97316;\n}\n\nbody {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    max-width: 100%;\n    font-size: 1.5rem;\n    background-color: var(--primary-bg-colour);\n    overflow: scroll;\n}\n\n.header {\n    background-color: var(--secondary-bg-colour);\n    color: var(--primary-font-colour);\n    font-family: GreatVibes, Cursive;\n    width: 100%;\n    box-shadow: 0px 1.5px 3px var(--primary-trim-colour);\n    display: grid;\n    grid-template-columns: 1.5fr max(50px, 5vw) 3.5fr;\n    grid-template-rows: max(100px, 10vh);\n    justify-items: center;\n    align-items: center;\n    position: sticky;\n    top: 0px;\n}\n\n.header-title {\n    font-size: 3rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    text-shadow: 0.5px 0.5px var(--secondary-trim-colour);\n}\n\n.header-title > h1 {\n    margin: 0px;\n}\n\n.header-title span {\n    font-weight: 100;\n}\n\n.header-nav {\n    width: 100%;\n    grid-column: 3 / span 1;\n}\n\n.header-nav > ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n    font-size: 4rem;\n    letter-spacing: 3px;\n    font-style: bold;\n    display: flex;\n    justify-content: space-around;\n}\n\n.header-nav li:hover {\n    cursor: pointer;\n    color: var(--secondary-font-colour);\n    text-shadow: 0.5px 0.5px var(--primary-trim-colour);\n}\n\n.main-content-wrapper {\n    padding: 5vh 15vw;\n}\n\n.about-us, .menu, .contact-us {\n    box-shadow: 0px 0px 20px var(--secondary-trim-colour);\n}\n\n.about-us {\n    display: flex;\n}\n\n.menu, .contact-us {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    row-gap: 20px;\n    column-gap: 30px;\n}\n\n.menu > h2, .contact-us > h2 {\n    grid-column: 1 / span 2;\n}\n\n.contact-us > form {\n    align-self: start;\n    text-align: start;\n    font-size: 2.5rem;\n    color: var(--primary-font-colour);\n    font-family: Oswald, sans-serif;\n    display: grid;\n    row-gap: 20px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.form-row > input, .form-row > textarea, .form-row > button {\n    font-size: 2rem;\n    font-family: Oswald, sans-serif;\n    padding: 5px;\n}\n\n.form-row > button {\n    width: 50%;\n    padding: 10px 20px;\n    align-self: center;\n    letter-spacing: 2px;\n    font-size: 2.5rem;\n    box-shadow: 0px -0px 5px var(--primary-trim-colour);\n}\n\n.form-row > button:hover {\n    background-color: var(--secondary-trim-colour);\n    cursor: pointer;\n}\n\n.form-row > input:focus, .form-row > textarea:focus {\n    outline: 2px solid var(--primary-trim-colour);\n}\n\n.menu > img, .contact-us > img {\n    width: 100%;\n    object-fit: cover;\n}\n\n.contact-us > img {\n    max-height: 800px;\n}\n\n.menu> img {\n    max-height: 400px;\n}\n\n.item-information > h3 {\n    color: var(--primary-trim-colour);\n    font-size: 2.5rem;\n}\n\n.item-information {\n    align-self: start;\n    height: 100%;\n    padding: 0px 15px;\n    background-color: var(--primary-bg-colour);\n}\n\n.image-wrapper, .information {\n    flex-basis: 100%;\n}\n\n.about-us > .image-wrapper {\n    background-image: url(./Assets/Pizza.jpg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: var(--secondary-bg-colour);\n}\n\n.information, .menu, .contact-us {\n    background-color: var(--secondary-bg-colour);\n    text-align: center;\n    padding: 20px;\n}\n\n.information > h2, .menu > h2, .contact-us > h2 {\n    color: var(--primary-font-colour);\n    font-family: GreatVibes, Cursive;\n    letter-spacing: 3px;\n    font-size: 3em;\n    margin: 20px;\n}\n\n.information > p, .item-information {\n    color: var(--secondary-font-colour);\n    font-family: Oswald, sans-serif;\n    font-size: 1.5em;\n    letter-spacing: 1.5px;\n}\n\n.information > img {\n    width: 90%;\n    height: auto;\n}\n\n.footer {\n    width: 100%;\n    background-color: var(--secondary-bg-colour);\n    height: max(5vh, 30px);\n    box-shadow: 0px -0.5px 2px var(--primary-trim-colour);\n}\n\n.footer > ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: var(--primary-font-colour);\n    font-size: 2rem;\n}\n\n.footer a {\n    color: var(--secondary-font-colour);\n}\n\n.footer a:hover {\n    color: var(--primary-trim-colour);\n}\n\n.footer a:visited {\n    color: var(--secondary-trim-colour);\n}\n\n.footer a:visited:hover {\n    color: var(--primary-trim-colour);\n}\n\n.footer img {\n    height: 25px;\n}\n\n.dev-details {\n    display: flex;\n    gap: 20px;\n}"],sourceRoot:""}]);const h=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=r.base?c[0]+r.base:c[0],u=a[A]||0,l="".concat(A," ").concat(u);a[A]=u+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var d=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:d,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),A=0;A<a.length;A++){var u=t(a[A]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},418:(n,e,t)=>{n.exports=t.p+"6d246c3b51d7eb58b13a.ttf"},413:(n,e,t)=>{n.exports=t.p+"7cecd0da606d25b0905d.ttf"},6:(n,e,t)=>{n.exports=t.p+"2ce8a9be09693d467010.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),A=t(216),u=t.n(A),l=t(589),p=t.n(l),m=t(426),d={};function f(n){const e=[];return n.forEach((n=>{const t=document.createElement(n.tag);if(n.class&&t.classList.add(n.class),n.text&&(t.textContent=n.text),n.attributes)for(const[e,r]of Object.entries(n.attributes))t.setAttribute(e,r);e.push(t)})),e}function h(n,e){const t=n.cloneNode(!0);return e.forEach((n=>{t.appendChild(n)})),t}function C(n,e){const t=n.cloneNode(!0),r=[];e.forEach((n=>{const e=n.cloneNode(!0);r.push(e)}));for(let n=r.length-2;n>=0;n--)r[n].appendChild(r[n+1]);return t.appendChild(r[0]),t}function g(n,e,t,r){this.tag=n,this.class=e,this.text=t,this.attributes=r}function x(){const n=f([new g("div","header-nav"),new g("ul"),new g("li",null,"Home",{id:"home"}),new g("li",null,"Menu",{id:"menu"}),new g("li",null,"Contact",{id:"contact"})]),[e,t,...r]=n;return e.appendChild(h(t,r)),e}function b(){const n=f([new g("div","header-title"),new g("h1",null,"Luca's Pizzeria"),new g("span",null,"🍕")]),[e,...t]=n;return C(e,t)}d.styleTagTransform=p(),d.setAttributes=c(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=u(),e()(m.Z,d),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"97ed8e7eef60d61ca469.svg";const y=t.p+"aee1a04c1e345b1e7bf2.jpg";function I(){const n=[new g("div","information"),new g("h2",null,"About Us"),new g("p",null,"Serving up the best pizzas in town since 2020! We use only the freshest ingredients, and prepare \n        Luca's special long fermented dough that is full of flavour and has the perfect texture!"),new g("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Perspiciatis nostrum atque quidem veniam tenetur deleniti nihil, aperiam provident itaque,\n        earum libero facere placeat excepturi assumenda. Atque quasi dolores a illo.")],[e,...t]=f(n),r=new Image;return r.src=y,r.alt="Wood Fired Pizza",t.push(r),h(e,t)}const B=t.p+"e76865c212fb979e4356.jpg",w=t.p+"533eeeacd4f67695997f.jpg",E=t.p+"6dbc7d965151bec592a5.jpg",z=["margherita","prosciutto","lucaspecial"];const k=t.p+"99135bd5a164f4110a70.jpg",_=["name","email","phone","message","button"];const j=()=>{document.querySelector("#content").remove();const n=document.createElement("div");n.setAttribute("id","content"),document.body.appendChild(n)},U=n=>{const e=document.querySelector("#content");switch(e.appendChild(function(){const n=[new g("div","header")],[e]=f(n);return h(e,[b(),x()])}()),D.createEvents(),n){case"home":e.appendChild(function(){const n=[new g("div","main-content-wrapper"),new g("div","about-us"),new g("div","image-wrapper")],[e,t,r]=f(n),o=h(t,[r,I()]);return e.appendChild(o),e}());break;case"menu":e.appendChild(function(){const n=[new g("div","main-content-wrapper"),new g("div","menu"),new g("h2",null,"Menu")],[e,t,r]=f(n);return t.appendChild(r),z.forEach((n=>{const[e,r]=function(n){const e=[new g("div","item-information"),new g("h3",null,`${n.name}`),new g("p",null,`${n.description}`)],[t,...r]=f(e),o=h(t,r),a=new Image;return a.src=n.img,a.alt=n.name,[o,a]}(function(n){switch(n){case"margherita":return{name:"Marghertita Pizza - $22",description:"Fior di latte and parmesan cheesy goodness with a topping of fresh basil atop a san marzano tomato base.",img:B};case"prosciutto":return{name:"Prosciutto & Rocket Pizza - $26",description:"The finest quality prosciutto di parma and freshest rocket atop a san marzano tomato base.",img:w};case"lucaspecial":return{name:"Luca's Special Pizza - $30",description:"Fior di latte, salami, mushroom, olives and sun-dried tomatoes atop Luca's famous white-sauce base.",img:E}}}(n));t.appendChild(r),t.appendChild(e)})),e.appendChild(t),e}());break;case"contact":e.appendChild(function(){const n=[new g("div","main-content-wrapper"),new g("div","contact-us"),new g("h2",null,"Contact Us"),new g("form",null,null,{action:""})],[e,t,r,o]=f(n),a=[];_.forEach((n=>{a.push(function(n){const e=[new g("div","form-row")];"button"!==n.type&&e.push(new g("label",null,`${n.labelText}`,{for:n.name})),e.push(new g(n.type,null,n.text,n.attributes));const[t,...r]=f(e);return h(t,r)}(function(n){switch(n){case"name":return{type:"input",name:"name",labelText:"Name",text:"",attributes:{type:"text",name:"name",id:"name",autofocus:""}};case"email":return{type:"input",name:"email",labelText:"Email",text:"",attributes:{type:"email",name:"email",id:"email",placeholder:"name@example.com"}};case"phone":return{type:"input",name:"phone",labelText:"Phone Number",text:"",attributes:{type:"tel",name:"phone",id:"phone"}};case"message":return{type:"textarea",name:"message",labelText:"Message",text:"Leave your message here!",attributes:{name:"message",id:"message",cols:"30",rows:"10"}};case"button":return{type:"button",text:"Submit",attributes:{type:"button"}}}}(n)))}));const i=h(o,a),s=new Image;return s.src=k,s.alt="Pizza Store Kitchen",e.appendChild(h(t,[r,i,s])),e}())}e.appendChild(function(n){const e=[new g("div","footer")],[t]=f(e),r=function(n){const e=document.createElement("ul"),t=function(n){const e=[];switch(n){case"home":e.push([{photographer:"Hoa Luu",profileUrl:"https://pixabay.com/users/hoaluu-5512970/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589577",site:"Pixabay",siteUrl:"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589577"},{photographer:"Nik Owens",profileUrl:"https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",site:"Unsplash",siteUrl:"https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"}]);break;case"menu":e.push([{photographer:"Aurélien Lemasson-Théobald",profileUrl:"https://unsplash.com/@aurel__lens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",site:"Unsplash",siteUrl:"https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},{photographer:"Svetlozar Hristov",profileUrl:"https://pixabay.com/users/svetlozarhristov-14833915/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4803139",site:"Pixabay",siteUrl:"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4803139"},{photographer:"marker_photography",profileUrl:"https://pixabay.com/users/marker_photography-4171480/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1949157",site:"Pixabay",siteUrl:"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1949157"}]);break;case"contact":e.push([{photographer:"Benu Marinescu",profileUrl:"https://unsplash.com/@benu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",site:"Unsplash",siteUrl:"https://unsplash.com/photos/man-near-pizza-e6ZOmEfNHLM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"}])}return e}(n),r=[];t.flat().forEach((n=>{const e=[new g("li",null,"Photo by "),new g("a",null,`${n.photographer} `,{href:n.profileUrl}),new g("a",null,`(${n.site})`,{href:n.siteUrl})];r.push(f(e))}));const o=[];return r.forEach((n=>{o.push(h(n[0],[n[1],n[2]]))})),h(e,o)}(n);return r.appendChild(function(){const n=f([new g("div","dev-details"),new g("li",null,"Website design: lsbdevops@gmail.com"),new g("li"),new g("a",null,null,{href:"https://github.com/lsbdevops/"})]),e=new Image;e.src=v,e.alt="Github Logo";const[t,r,o,a]=n;return h(t,[r,C(o,[a,e])])}()),t.appendChild(r),t}(n))},D={createEvents:()=>{document.querySelector("#home").addEventListener("click",(n=>{j(),U("home")})),document.querySelector("#menu").addEventListener("click",(n=>{j(),U("menu")})),document.querySelector("#contact").addEventListener("click",(n=>{j(),U("contact")}))}};U("home")})()})();
//# sourceMappingURL=app.bundle.js.map