/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{392:function(t,e){var r="bfred-it:object-fit-images",n=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,c="undefined"==typeof Image?{style:{"object-position":1}}:new Image,o="object-fit"in c.style,l="object-position"in c.style,f="background-size"in c.style,d="string"==typeof c.currentSrc,m=c.getAttribute,w=c.setAttribute,h=!1;function y(img,t,e){var r="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(e||0)+"'%3E%3C/svg%3E";m.call(img,"src")!==r&&w.call(img,"src",r)}function j(img,t){img.naturalWidth?t(img):setTimeout(j,100,img,t)}function k(t){var style=function(t){for(var e,style=getComputedStyle(t).fontFamily,r={};null!==(e=n.exec(style));)r[e[1]]=e[2];return r}(t),e=t[r];if(style["object-fit"]=style["object-fit"]||"fill",!e.img){if("fill"===style["object-fit"])return;if(!e.skipTest&&o&&!style["object-position"])return}if(!e.img){e.img=new Image(t.width,t.height),e.img.srcset=m.call(t,"data-ofi-srcset")||t.srcset,e.img.src=m.call(t,"data-ofi-src")||t.src,w.call(t,"data-ofi-src",t.src),t.srcset&&w.call(t,"data-ofi-srcset",t.srcset),y(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[r].img[e||"src"]},set:function(e,n){return t[r].img[n||"src"]=e,w.call(t,"data-ofi-"+n,e),k(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!d&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(e.img),t.style.backgroundImage='url("'+(e.img.currentSrc||e.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=style["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(style["object-fit"])?j(e.img,(function(){e.img.naturalWidth>t.width||e.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=style["object-fit"].replace("none","auto").replace("fill","100% 100%"),j(e.img,(function(img){y(t,img.naturalWidth,img.naturalHeight)}))}function v(t,e){var n=!h&&!t;if(e=e||{},t=t||"img",l&&!e.skipTest||!f)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var i=0;i<t.length;i++)t[i][r]=t[i][r]||{skipTest:e.skipTest},k(t[i]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&v(t.target,{skipTest:e.skipTest})}),!0),h=!0,t="img"),e.watchMQ&&window.addEventListener("resize",v.bind(null,t,{skipTest:e.skipTest}))}v.supportsObjectFit=o,v.supportsObjectPosition=l,function(){function t(t,e){return t[r]&&t[r].img&&("src"===e||"srcset"===e)?t[r].img:t}l||(HTMLImageElement.prototype.getAttribute=function(e){return m.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,r){return w.call(t(this,e),e,String(r))})}(),t.exports=v}}]);