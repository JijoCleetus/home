import{a as z}from"./chunk-C6TWYN5N.js";import{a as H,b as v,d as O,i as q}from"./chunk-MWNMXUCB.js";import{b as D,c as M}from"./chunk-IFNCDCK6.js";import{a as I,f as L}from"./chunk-UJQTAKBF.js";import"./chunk-WMEG6PAA.js";import{a as R,c as Y}from"./chunk-LOHYXAXQ.js";import{a as _}from"./chunk-HC6MZPB3.js";import{a as p}from"./chunk-426OJ4HC.js";import"./chunk-MM5QLNJM.js";import{a as S,b as E,h as T,i as y,m as b}from"./chunk-H3GX5QFY.js";import"./chunk-MCRJI3T3.js";import{a as u,c as g}from"./chunk-F4PSXCAU.js";import{c as a,d as C,g as N,h as w,k as P,m as A,n as h}from"./chunk-NIMJWLRN.js";import{d as l}from"./chunk-B2MOJN65.js";var F=e=>{let r=e.previousElementSibling;return r!==null&&r.tagName==="ION-HEADER"?"translate":"scale"},U=(e,r,t)=>e==="scale"?G(r,t):j(r,t),$=e=>{let r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),i=e.querySelector(".spinner-arrow-container"),o=e.querySelector(".arrow-container"),n=o?o.querySelector("ion-icon"):null,s=p().duration(1e3).easing("ease-out"),f=p().addElement(i).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),c=p().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),m=p().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(o&&n){let d=p().addElement(o).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),k=p().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);s.addAnimation([d,k])}return s.addAnimation([f,c,m])},G=(e,r)=>{let t=r.clientHeight,i=p().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${t}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return $(e).addAnimation([i])},j=(e,r)=>{let t=r.clientHeight,i=p().addElement(e).keyframes([{offset:0,transform:`translateY(-${t}px)`},{offset:1,transform:"translateY(100px)"}]);return $(e).addAnimation([i])},V=e=>p().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"),W=(e,r)=>{e.style.setProperty("opacity",r.toString())},K=(e,r,t)=>{h(()=>{e.forEach((o,n)=>{let s=n*(1/r),f=1-s,c=t-s,m=b(0,c/f,1);o.style.setProperty("opacity",m.toString())})})},Z=(e,r)=>{h(()=>{e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})},x=(e,r,t=200)=>{if(!e)return Promise.resolve();let i=S(e,t);return h(()=>{e.style.setProperty("transition",`${t}ms all ease-out`),r===void 0?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${r}, 0px)`)}),i},B=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),X=(e,r)=>l(void 0,null,function*(){let t=e.querySelector("ion-refresher-content");if(!t)return Promise.resolve(!1);yield new Promise(n=>E(t,n));let i=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return i!==null&&o!==null&&(r==="ios"&&B()||r==="md")}),J="ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",Q=J,ee="ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}",re=ee,te=class{constructor(e){P(this,e),this.ionRefresh=w(this,"ionRefresh",7),this.ionPull=w(this,"ionPull",7),this.ionStart=w(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){return l(this,null,function*(){let e=yield X(this.el,g(this));if(e&&!this.nativeRefresher){let r=this.el.closest("ion-content");this.setupNativeRefresher(r)}else e||this.destroyNativeRefresher()})}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,r){return l(this,null,function*(){this.state=r,g(this)==="ios"?yield x(e,void 0,300):yield S(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(t=>t.destroy()),this.animations=[],this.progress=0,this.state=1})}setupiOSNativeRefresher(e,r){return l(this,null,function*(){this.elementToTransform=this.scrollEl;let t=e.shadowRoot.querySelectorAll("svg"),i=this.scrollEl.clientHeight*.16,o=t.length;h(()=>t.forEach(n=>n.style.setProperty("animation","none"))),this.scrollListenerCallback=()=>{!this.pointerDown&&this.state===1||A(()=>{let n=this.scrollEl.scrollTop,s=this.el.clientHeight;if(n>0){if(this.state===8){let d=b(0,n/(s*.5),1);h(()=>W(r,1-d));return}return}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());let f=this.didStart?30:0,c=this.progress=b(0,(Math.abs(n)-f)/i,1);this.state===8||c===1?(this.pointerDown&&Z(r,this.lastVelocityY),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,L({style:I.Light}),this.pointerDown||x(this.elementToTransform,`${s}px`))):(this.state=2,K(t,o,c))})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(yield import("./chunk-P3I24YET.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||x(this.elementToTransform,"0px"),i===0&&(i=this.scrollEl.clientHeight*.16)},onMove:n=>{this.lastVelocityY=n.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&A(()=>x(this.elementToTransform,`${this.el.clientHeight}px`))}}),this.disabledChanged()})}setupMDNativeRefresher(e,r,t){return l(this,null,function*(){let i=T(r).querySelector("circle"),o=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),n=T(t).querySelector("circle");i!==null&&n!==null&&h(()=>{i.style.setProperty("animation","none"),t.style.setProperty("animation-delay","-655ms"),n.style.setProperty("animation-delay","-655ms")}),this.gesture=(yield import("./chunk-P3I24YET.js")).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>this.state!==8&&this.state!==32&&this.scrollEl.scrollTop===0,onStart:s=>{this.progress=0,s.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:s=>{if(s.velocityY<0&&this.progress===0&&!s.data.didStart||s.data.cancelled){s.data.cancelled=!0;return}if(!s.data.didStart){s.data.didStart=!0,this.state=2;let{scrollEl:f}=this,c=f.matches(v)?"overflow":"--overflow";h(()=>f.style.setProperty(c,"hidden"));let m=F(e),d=U(m,o,this.el);s.data.animation=d,d.progressStart(!1,0),this.ionStart.emit(),this.animations.push(d);return}this.progress=b(0,s.deltaY/180*.5,1),s.data.animation.progressStep(this.progress),this.ionPull.emit()},onEnd:s=>{if(!s.data.didStart)return;this.gesture.enable(!1);let{scrollEl:f}=this,c=f.matches(v)?"overflow":"--overflow";if(h(()=>f.style.removeProperty(c)),this.progress<=.4){s.data.animation.progressEnd(0,this.progress,500).onFinish(()=>{this.animations.forEach(k=>k.destroy()),this.animations=[],this.gesture.enable(!0),this.state=1});return}let m=_([0,0],[0,0],[1,1],[1,1],this.progress)[0],d=V(o);this.animations.push(d),h(()=>l(this,null,function*(){o.style.setProperty("--ion-pulling-refresher-translate",`${m*100}px`),s.data.animation.progressEnd(),yield d.play(),this.beginRefresh(),s.data.animation.destroy(),this.gesture.enable(!0)}))}}),this.disabledChanged()})}setupNativeRefresher(e){return l(this,null,function*(){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.setCss(0,"",!1,""),this.nativeRefresher=!0;let r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");g(this)==="ios"?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)})}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){return l(this,null,function*(){if(this.el.getAttribute("slot")!=="fixed"){console.error('Make sure you use: <ion-refresher slot="fixed">');return}let e=this.el.closest(H);if(!e){q(this.el);return}E(e,()=>l(this,null,function*(){let r=e.querySelector(v);this.scrollEl=yield O(r??e),this.backgroundContentEl=yield e.getBackgroundElement(),(yield X(this.el,g(this)))?this.setupNativeRefresher(e):(this.gesture=(yield import("./chunk-P3I24YET.js")).createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged())}))})}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){return l(this,null,function*(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||y(()=>y(()=>this.resetNativeRefresher(this.elementToTransform,32)))):this.close(32,"120ms")})}cancel(){return l(this,null,function*(){this.nativeRefresher?this.pointerDown||y(()=>y(()=>this.resetNativeRefresher(this.elementToTransform,16))):this.close(16,"")})}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||this.state!==1||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1,this.memoizeOverflowStyle()}onMove(e){if(!this.scrollEl)return;let r=e.event;if(r.touches!==void 0&&r.touches.length>1||this.state&56)return;let t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,i=e.deltaY*t;if(i<=0){if(this.progress=0,this.state=1,this.appliedStyles){this.setCss(0,"",!1,"");return}return}if(this.state===1){if(this.scrollEl.scrollTop>0){this.progress=0;return}this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(i,"0ms",!0,""),i===0){this.progress=0;return}let o=this.pullMin;if(this.progress=i/o,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),i<o){this.state=2;return}if(i>this.pullMax){this.beginRefresh();return}this.state=4}onEnd(){this.state===4?this.beginRefresh():this.state===2?this.cancel():this.state===1&&this.restoreOverflowStyle()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"",!0)},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,t,i,o=!1){this.nativeRefresher||(this.appliedStyles=e>0,h(()=>{if(this.scrollEl&&this.backgroundContentEl){let n=this.scrollEl.style,s=this.backgroundContentEl.style;n.transform=s.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",n.transitionDuration=s.transitionDuration=r,n.transitionDelay=s.transitionDelay=i,n.overflow=t?"hidden":""}o&&this.restoreOverflowStyle()}))}memoizeOverflowStyle(){if(this.scrollEl){let{overflow:e,overflowX:r,overflowY:t}=this.scrollEl.style;this.overflowStyles={overflow:e??"",overflowX:r??"",overflowY:t??""}}}restoreOverflowStyle(){if(this.overflowStyles!==void 0&&this.scrollEl!==void 0){let{overflow:e,overflowX:r,overflowY:t}=this.overflowStyles;this.scrollEl.style.overflow=e,this.scrollEl.style.overflowX=r,this.scrollEl.style.overflowY=t,this.overflowStyles=void 0}}render(){let e=g(this);return a(C,{key:"e7f4f2f96de7e80430bf54967ebc12e7216b2ca9",slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":this.state!==1,"refresher-pulling":this.state===2,"refresher-ready":this.state===4,"refresher-refreshing":this.state===8,"refresher-cancelling":this.state===16,"refresher-completing":this.state===32}})}get el(){return N(this)}static get watchers(){return{disabled:["disabledChanged"]}}};te.style={ios:Q,md:re};var ue=class{constructor(e){P(this,e),this.customHTMLEnabled=u.get("innerHTMLTemplatesEnabled",Y),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(this.pullingIcon===void 0){let e=B(),r=g(this),t=e?"lines":D;this.pullingIcon=u.get("refreshingIcon",r==="ios"&&e?u.get("spinner",t):"circular")}if(this.refreshingSpinner===void 0){let e=g(this);this.refreshingSpinner=u.get("refreshingSpinner",u.get("spinner",e==="ios"?"lines":"circular"))}}renderPullingText(){let{customHTMLEnabled:e,pullingText:r}=this;return e?a("div",{class:"refresher-pulling-text",innerHTML:R(r)}):a("div",{class:"refresher-pulling-text"},r)}renderRefreshingText(){let{customHTMLEnabled:e,refreshingText:r}=this;return e?a("div",{class:"refresher-refreshing-text",innerHTML:R(r)}):a("div",{class:"refresher-refreshing-text"},r)}render(){let e=this.pullingIcon,r=e!=null&&z[e]!==void 0,t=g(this);return a(C,{key:"19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5",class:t},a("div",{key:"28922e434a55a6cac0476fe2bee56941ce0d1c02",class:"refresher-pulling"},this.pullingIcon&&r&&a("div",{key:"fe575bf996021884677e9b23a3215d63caf894f5",class:"refresher-pulling-icon"},a("div",{key:"59fe12297fd95bc33b8df8cd35316e2a1c084d91",class:"spinner-arrow-container"},a("ion-spinner",{key:"af9cc013ae04945c140b2865610ca73edb52ab48",name:this.pullingIcon,paused:!0}),t==="md"&&this.pullingIcon==="circular"&&a("div",{key:"34df66ad1b0f706a0532957251aa2c20bf4587d8",class:"arrow-container"},a("ion-icon",{key:"ffdb5c123e606b823491c6c51cc2b497f62581bb",icon:M,"aria-hidden":"true"})))),this.pullingIcon&&!r&&a("div",{key:"ac3a2032bb969264d20fa057e9123441005d7a9d",class:"refresher-pulling-icon"},a("ion-icon",{key:"d969d10915548e72aae289b52154366f3dd39b31",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),this.pullingText!==void 0&&this.renderPullingText()),a("div",{key:"a8f854f81a94812d7bef8ce088331d94f49ff53d",class:"refresher-refreshing"},this.refreshingSpinner&&a("div",{key:"a1f646945370e40c844d62bc0c647443ae9dfbe7",class:"refresher-refreshing-icon"},a("ion-spinner",{key:"ab3ff4047769b6436e222b46d193c1e8b23e2fce",name:this.refreshingSpinner})),this.refreshingText!==void 0&&this.renderRefreshingText()))}get el(){return N(this)}};export{te as ion_refresher,ue as ion_refresher_content};
