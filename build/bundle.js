var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function m(t){p=t}const h=[],$=[],y=[],v=[],w=Promise.resolve();let x=!1;function b(t){y.push(t)}let _=!1;const M=new Set;function A(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),R(e.$$)}for(h.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];M.has(e)||(M.add(e),e())}y.length=0}while(h.length);for(;v.length;)v.pop()();x=!1,_=!1,M.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const B=new Set;function C(t,e){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,w.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(a,c,s,u,i,l,f=[-1]){const d=p;m(a);const g=c.props||{},h=a.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let $=!1;var y,v;h.ctx=s?s(a,g,(t,e,...n)=>{const r=n.length?n[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),$&&C(a,t)),e}):[],h.update(),$=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),c.target&&(c.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):h.fragment&&h.fragment.c(),c.intro&&((y=a.$$.fragment)&&y.i&&(B.delete(y),y.i(v))),function(t,n,a){const{fragment:c,on_mount:s,on_destroy:u,after_update:i}=t.$$;c&&c.m(n,a),b(()=>{const n=s.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(b)}(a,c.target,c.anchor),A()),m(d)}function N(e){let n,r,o,a,p,m,h,$,y,v,w,x;return{c(){n=i("div"),r=i("h1"),r.textContent="En gnu!!",o=f(),a=i("h1"),a.textContent=":D",p=f(),m=i("div"),h=l(e[0]),$=f(),y=i("div"),v=l(e[1]),w=f(),x=l(e[2]),d(n,"id","main"),d(n,"class","fade svelte-1eh2xnb"),d(y,"id","status"),d(y,"class","empty")},m(t,e){s(t,n,e),c(n,r),c(n,o),c(n,a),c(n,p),c(n,m),c(m,h),s(t,$,e),s(t,y,e),c(y,v),c(y,w),c(y,x)},p(t,[e]){1&e&&g(h,t[0]),2&e&&g(v,t[1]),4&e&&g(x,t[2])},i:t,o:t,d(t){t&&u(n),t&&u($),t&&u(y)}}}function S(t,e,n){cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);let r="[ No url ]",o=null,a=null;try{window.castReceiverManager=cast.receiver.CastReceiverManager.getInstance(),castReceiverManager.onReady=function(t){var e;window.castReceiverManager.setApplicationState("Application ready"),e="Waiting for address",n(1,o="empty"),n(2,a=e)},window.messageBus=window.castReceiverManager.getCastMessageBus("urn:x-cast:es.offd.gnu"),window.messageBus.onMessage=function(t){var e=JSON.parse(t.data);e.url&&n(0,r=e.url),window.messageBus.send(t.senderId,t.data)},window.castReceiverManager.start({statusText:"Application is starting"})}catch(t){console.log(t)}return[r,o,a]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),E(this,t,S,N,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
