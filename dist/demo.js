(()=>{"use strict";var e,t,o,n,r,l,i,c;console.log("I am in here"),(e={selector:".main"},t=e.selector,o=e.backgroundColor,n=void 0===o?"#0DAC50":o,r=e.foregroundColor,l=void 0===r?"#FAFAFA":r,i=e.text,c=void 0===i?"Surprise me":i,console.log("Inside the widget"),{start:function(){var e,o,r=(e={selector:t,backgroundColor:n,foregroundColor:l,text:c},function(e,t){var o=t.backgroundColor,n=t.foregroundColor,r=t.text;e.style.padding="1em 2em",e.style.backgroundColor=o,e.style.color=n,e.style.border="1px solid ".concat(o),e.style.borderRadius="4px",e.style.cursor="pointer",e.textContent=r}(o=document.createElement("button"),e),o),i=function(){var e=document.createElement("div"),t=document.createElement("div");return e.appendChild(t),function(e){e.style.position="fixed",e.style.width="100vw",e.style.height="100vh",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.zIndex="1",e.style.backgroundColor="#000",e.style.opacity="80%"}(e),function(e){e.style.width="80vw",e.style.height="80vh",e.style.backgroundColor="white",e.style.zIndex="2"}(t),t.addEventListener("click",(function(e){e.stopPropagation()})),e}();r.addEventListener("click",(function(){return function(e){document.querySelector(t).appendChild(e)}(i)})),i.addEventListener("click",(function(){return function(e){document.querySelector(t).removeChild(e)}(i)})),document.querySelector(t).appendChild(r)}}).start()})();