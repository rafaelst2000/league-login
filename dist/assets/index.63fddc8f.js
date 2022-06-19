var sp=Object.defineProperty,ip=Object.defineProperties;var rp=Object.getOwnPropertyDescriptors;var xl=Object.getOwnPropertySymbols;var op=Object.prototype.hasOwnProperty,ap=Object.prototype.propertyIsEnumerable;var Ml=(t,e,n)=>e in t?sp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ue=(t,e)=>{for(var n in e||(e={}))op.call(e,n)&&Ml(t,n,e[n]);if(xl)for(var n of xl(e))ap.call(e,n)&&Ml(t,n,e[n]);return t},lt=(t,e)=>ip(t,rp(e));const lp=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};lp();function ra(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",up=ra(cp);function Ou(t){return!!t||t===""}function oa(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?fp(s):oa(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Re(t))return t}}const dp=/;(?![^(]*\))/g,hp=/:(.+)/;function fp(t){const e={};return t.split(dp).forEach(n=>{if(n){const s=n.split(hp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Lt(t){let e="";if(Fe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Lt(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function pp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Sn(t[s],e[s]);return n}function Sn(t,e){if(t===e)return!0;let n=Dl(t),s=Dl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$(t),s=$(e),n||s)return n&&s?pp(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Sn(t[o],e[o]))return!1}}return String(t)===String(e)}function aa(t,e){return t.findIndex(n=>Sn(n,e))}const qs=t=>Fe(t)?t:t==null?"":$(t)||Re(t)&&(t.toString===Du||!q(t.toString))?JSON.stringify(t,xu,2):String(t),xu=(t,e)=>e&&e.__v_isRef?xu(t,e.value):Yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!$(e)&&!Lu(e)?String(e):e,fe={},Gn=[],ht=()=>{},_p=()=>!1,gp=/^on[^a-z]/,Tr=t=>gp.test(t),la=t=>t.startsWith("onUpdate:"),Be=Object.assign,ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mp=Object.prototype.hasOwnProperty,Z=(t,e)=>mp.call(t,e),$=Array.isArray,Yn=t=>Sr(t)==="[object Map]",us=t=>Sr(t)==="[object Set]",Dl=t=>t instanceof Date,q=t=>typeof t=="function",Fe=t=>typeof t=="string",ua=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Mu=t=>Re(t)&&q(t.then)&&q(t.catch),Du=Object.prototype.toString,Sr=t=>Du.call(t),yp=t=>Sr(t).slice(8,-1),Lu=t=>Sr(t)==="[object Object]",da=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vp=/-(\w)/g,Ct=Rr(t=>t.replace(vp,(e,n)=>n?n.toUpperCase():"")),bp=/\B([A-Z])/g,ds=Rr(t=>t.replace(bp,"-$1").toLowerCase()),Ar=Rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jr=Rr(t=>t?`on${Ar(t)}`:""),Gs=(t,e)=>!Object.is(t,e),Wi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ji=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ll;const Ep=()=>Ll||(Ll=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let yt;class Fu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&yt&&(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Uu(t){return new Fu(t)}function Ip(t,e=yt){e&&e.active&&e.effects.push(t)}const ha=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$u=t=>(t.w&sn)>0,Bu=t=>(t.n&sn)>0,wp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},Cp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];$u(i)&&!Bu(i)?i.delete(t):e[n++]=i,i.w&=~sn,i.n&=~sn}e.length=n}},bo=new WeakMap;let ks=0,sn=1;const Eo=30;let ct;const En=Symbol(""),Io=Symbol("");class fa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ip(this,s)}run(){if(!this.active)return this.fn();let e=ct,n=Jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ct,ct=this,Jt=!0,sn=1<<++ks,ks<=Eo?wp(this):Fl(this),this.fn()}finally{ks<=Eo&&Cp(this),sn=1<<--ks,ct=this.parent,Jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ct===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jt=!0;const Wu=[];function hs(){Wu.push(Jt),Jt=!1}function fs(){const t=Wu.pop();Jt=t===void 0?!0:t}function Xe(t,e,n){if(Jt&&ct){let s=bo.get(t);s||bo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ha()),Hu(i)}}function Hu(t,e){let n=!1;ks<=Eo?Bu(t)||(t.n|=sn,n=!$u(t)):n=!t.has(ct),n&&(t.add(ct),ct.deps.push(t))}function Ft(t,e,n,s,i,r){const o=bo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?da(n)&&a.push(o.get("length")):(a.push(o.get(En)),Yn(t)&&a.push(o.get(Io)));break;case"delete":$(t)||(a.push(o.get(En)),Yn(t)&&a.push(o.get(Io)));break;case"set":Yn(t)&&a.push(o.get(En));break}if(a.length===1)a[0]&&wo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);wo(ha(l))}}function wo(t,e){for(const n of $(t)?t:[...t])(n!==ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Tp=ra("__proto__,__v_isRef,__isVue"),Vu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ua)),Sp=pa(),Rp=pa(!1,!0),Ap=pa(!0),Ul=Np();function Np(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let r=0,o=this.length;r<o;r++)Xe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const s=ie(this)[e].apply(this,n);return fs(),s}}),t}function pa(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?zp:Gu:e?qu:Ku).get(s))return s;const o=$(s);if(!t&&o&&Z(Ul,i))return Reflect.get(Ul,i,r);const a=Reflect.get(s,i,r);return(ua(i)?Vu.has(i):Tp(i))||(t||Xe(s,"get",i),e)?a:Ie(a)?!o||!da(i)?a.value:a:Re(a)?t?Yu(a):ps(a):a}}const kp=ju(),Pp=ju(!0);function ju(t=!1){return function(n,s,i,r){let o=n[s];if(Ys(o)&&Ie(o)&&!Ie(i))return!1;if(!t&&!Ys(i)&&(Qu(i)||(i=ie(i),o=ie(o)),!$(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const a=$(n)&&da(s)?Number(s)<n.length:Z(n,s),l=Reflect.set(n,s,i,r);return n===ie(r)&&(a?Gs(i,o)&&Ft(n,"set",s,i):Ft(n,"add",s,i)),l}}function Op(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ft(t,"delete",e,void 0),s}function xp(t,e){const n=Reflect.has(t,e);return(!ua(e)||!Vu.has(e))&&Xe(t,"has",e),n}function Mp(t){return Xe(t,"iterate",$(t)?"length":En),Reflect.ownKeys(t)}const zu={get:Sp,set:kp,deleteProperty:Op,has:xp,ownKeys:Mp},Dp={get:Ap,set(t,e){return!0},deleteProperty(t,e){return!0}},Lp=Be({},zu,{get:Rp,set:Pp}),_a=t=>t,Nr=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,s=!1){t=t.__v_raw;const i=ie(t),r=ie(e);e!==r&&!n&&Xe(i,"get",e),!n&&Xe(i,"get",r);const{has:o}=Nr(i),a=s?_a:n?ya:Qs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Oi(t,e=!1){const n=this.__v_raw,s=ie(n),i=ie(t);return t!==i&&!e&&Xe(s,"has",t),!e&&Xe(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function xi(t,e=!1){return t=t.__v_raw,!e&&Xe(ie(t),"iterate",En),Reflect.get(t,"size",t)}function $l(t){t=ie(t);const e=ie(this);return Nr(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Bl(t,e){e=ie(e);const n=ie(this),{has:s,get:i}=Nr(n);let r=s.call(n,t);r||(t=ie(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Gs(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function Wl(t){const e=ie(this),{has:n,get:s}=Nr(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ft(e,"delete",t,void 0),r}function Hl(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function Mi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ie(o),l=e?_a:t?ya:Qs;return!t&&Xe(a,"iterate",En),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Di(t,e,n){return function(...s){const i=this.__v_raw,r=ie(i),o=Yn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?_a:e?ya:Qs;return!e&&Xe(r,"iterate",l?Io:En),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function Fp(){const t={get(r){return Pi(this,r)},get size(){return xi(this)},has:Oi,add:$l,set:Bl,delete:Wl,clear:Hl,forEach:Mi(!1,!1)},e={get(r){return Pi(this,r,!1,!0)},get size(){return xi(this)},has:Oi,add:$l,set:Bl,delete:Wl,clear:Hl,forEach:Mi(!1,!0)},n={get(r){return Pi(this,r,!0)},get size(){return xi(this,!0)},has(r){return Oi.call(this,r,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Mi(!0,!1)},s={get(r){return Pi(this,r,!0,!0)},get size(){return xi(this,!0)},has(r){return Oi.call(this,r,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Di(r,!1,!1),n[r]=Di(r,!0,!1),e[r]=Di(r,!1,!0),s[r]=Di(r,!0,!0)}),[t,n,e,s]}const[Up,$p,Bp,Wp]=Fp();function ga(t,e){const n=e?t?Wp:Bp:t?$p:Up;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const Hp={get:ga(!1,!1)},Vp={get:ga(!1,!0)},jp={get:ga(!0,!1)},Ku=new WeakMap,qu=new WeakMap,Gu=new WeakMap,zp=new WeakMap;function Kp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qp(t){return t.__v_skip||!Object.isExtensible(t)?0:Kp(yp(t))}function ps(t){return Ys(t)?t:ma(t,!1,zu,Hp,Ku)}function Gp(t){return ma(t,!1,Lp,Vp,qu)}function Yu(t){return ma(t,!0,Dp,jp,Gu)}function ma(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Xt(t){return Ys(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ys(t){return!!(t&&t.__v_isReadonly)}function Qu(t){return!!(t&&t.__v_isShallow)}function Ju(t){return Xt(t)||Ys(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function es(t){return Qi(t,"__v_skip",!0),t}const Qs=t=>Re(t)?ps(t):t,ya=t=>Re(t)?Yu(t):t;function Xu(t){Jt&&ct&&(t=ie(t),Hu(t.dep||(t.dep=ha())))}function Zu(t,e){t=ie(t),t.dep&&wo(t.dep)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function va(t){return ed(t,!1)}function Yp(t){return ed(t,!0)}function ed(t,e){return Ie(t)?t:new Qp(t,e)}class Qp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:Qs(e)}get value(){return Xu(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),Gs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Qs(e),Zu(this))}}function Ms(t){return Ie(t)?t.value:t}const Jp={get:(t,e,n)=>Ms(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function td(t){return Xt(t)?t:new Proxy(t,Jp)}function Xp(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=e_(t,n);return e}class Zp{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function e_(t,e,n){const s=t[e];return Ie(s)?s:new Zp(t,e,n)}class t_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fa(e,()=>{this._dirty||(this._dirty=!0,Zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ie(this);return Xu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function n_(t,e,n=!1){let s,i;const r=q(t);return r?(s=t,i=ht):(s=t.get,i=t.set),new t_(s,i,r||!i,n)}function Zt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){kr(r,e,n)}return i}function st(t,e,n,s){if(q(t)){const r=Zt(t,e,n,s);return r&&Mu(r)&&r.catch(o=>{kr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(st(t[r],e,n,s));return i}function kr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Zt(l,null,10,[t,o,a]);return}}s_(t,n,i,s)}function s_(t,e,n,s=!0){console.error(t)}let Xi=!1,Co=!1;const Qe=[];let At=0;const Ds=[];let Ps=null,jn=0;const Ls=[];let zt=null,zn=0;const nd=Promise.resolve();let ba=null,To=null;function sd(t){const e=ba||nd;return t?e.then(this?t.bind(this):t):e}function i_(t){let e=At+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Js(Qe[s])<t?e=s+1:n=s}return e}function id(t){(!Qe.length||!Qe.includes(t,Xi&&t.allowRecurse?At+1:At))&&t!==To&&(t.id==null?Qe.push(t):Qe.splice(i_(t.id),0,t),rd())}function rd(){!Xi&&!Co&&(Co=!0,ba=nd.then(ld))}function r_(t){const e=Qe.indexOf(t);e>At&&Qe.splice(e,1)}function od(t,e,n,s){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),rd()}function o_(t){od(t,Ps,Ds,jn)}function a_(t){od(t,zt,Ls,zn)}function Ea(t,e=null){if(Ds.length){for(To=e,Ps=[...new Set(Ds)],Ds.length=0,jn=0;jn<Ps.length;jn++)Ps[jn]();Ps=null,jn=0,To=null,Ea(t,e)}}function ad(t){if(Ls.length){const e=[...new Set(Ls)];if(Ls.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,s)=>Js(n)-Js(s)),zn=0;zn<zt.length;zn++)zt[zn]();zt=null,zn=0}}const Js=t=>t.id==null?1/0:t.id;function ld(t){Co=!1,Xi=!0,Ea(t),Qe.sort((n,s)=>Js(n)-Js(s));const e=ht;try{for(At=0;At<Qe.length;At++){const n=Qe[At];n&&n.active!==!1&&Zt(n,null,14)}}finally{At=0,Qe.length=0,ad(),Xi=!1,ba=null,(Qe.length||Ds.length||Ls.length)&&ld(t)}}function l_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||fe;h?i=n.map(_=>_.trim()):d&&(i=n.map(Ji))}let a,l=s[a=Jr(e)]||s[a=Jr(Ct(e))];!l&&r&&(l=s[a=Jr(ds(e))]),l&&st(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(c,t,6,i)}}function cd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=cd(c,e,!0);u&&(a=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Be(o,r),s.set(t,o),o)}function Pr(t,e){return!t||!Tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,ds(e))||Z(t,e))}let $e=null,Or=null;function Zi(t){const e=$e;return $e=t,Or=t&&t.type.__scopeId||null,e}function _s(t){Or=t}function gs(){Or=null}function ud(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Zl(-1);const r=Zi(e),o=t(...i);return Zi(r),s._d&&Zl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Xr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:_,ctx:m,inheritAttrs:R}=t;let C,k;const M=Zi(t);try{if(n.shapeFlag&4){const K=i||s;C=vt(u.call(K,K,d,r,_,h,m)),k=l}else{const K=e;C=vt(K.length>1?K(r,{attrs:l,slots:a,emit:c}):K(r,null)),k=e.props?l:c_(l)}}catch(K){Us.length=0,kr(K,t,1),C=te(it)}let F=C;if(k&&R!==!1){const K=Object.keys(k),{shapeFlag:W}=F;K.length&&W&7&&(o&&K.some(la)&&(k=u_(k,o)),F=Rn(F,k))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),C=F,Zi(M),C}const c_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tr(n))&&((e||(e={}))[n]=t[n]);return e},u_=(t,e)=>{const n={};for(const s in t)(!la(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function d_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Pr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vl(s,o,c):!0:!!o;return!1}function Vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pr(n,r))return!0}return!1}function h_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const f_=t=>t.__isSuspense;function p_(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):a_(t)}function Hi(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Me||$e;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(s.proxy):e}}const jl={};function Fs(t,e,n){return dd(t,e,n)}function dd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=fe){const a=Me;let l,c=!1,u=!1;if(Ie(t)?(l=()=>t.value,c=Qu(t)):Xt(t)?(l=()=>t,s=!0):$(t)?(u=!0,c=t.some(Xt),l=()=>t.map(k=>{if(Ie(k))return k.value;if(Xt(k))return mn(k);if(q(k))return Zt(k,a,2)})):q(t)?e?l=()=>Zt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),st(t,a,3,[h])}:l=ht,e&&s){const k=l;l=()=>mn(k())}let d,h=k=>{d=C.onStop=()=>{Zt(k,a,4)}};if(Xs)return h=ht,e?n&&st(e,a,3,[l(),u?[]:void 0,h]):l(),ht;let _=u?[]:jl;const m=()=>{if(!!C.active)if(e){const k=C.run();(s||c||(u?k.some((M,F)=>Gs(M,_[F])):Gs(k,_)))&&(d&&d(),st(e,a,3,[k,_===jl?void 0:_,h]),_=k)}else C.run()};m.allowRecurse=!!e;let R;i==="sync"?R=m:i==="post"?R=()=>ze(m,a&&a.suspense):R=()=>{!a||a.isMounted?o_(m):m()};const C=new fa(l,R);return e?n?m():_=C.run():i==="post"?ze(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&ca(a.scope.effects,C)}}function __(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?hd(s,t):()=>s[t]:t.bind(s,s);let r;q(e)?r=e:(r=e.handler,n=e);const o=Me;ts(this);const a=dd(i,r.bind(s),n);return o?ts(o):wn(),a}function hd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function mn(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))mn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)mn(t[n],e);else if(us(t)||Yn(t))t.forEach(n=>{mn(n,e)});else if(Lu(t))for(const n in t)mn(t[n],e);return t}function g_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return md(()=>{t.isMounted=!0}),yd(()=>{t.isUnmounting=!0}),t}const et=[Function,Array],m_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=Ra(),s=g_();let i;return()=>{const r=e.default&&pd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const R of r)if(R.type!==it){o=R;break}}const a=ie(t),{mode:l}=a;if(s.isLeaving)return Zr(o);const c=zl(o);if(!c)return Zr(o);const u=So(c,a,s,n);Ro(c,u);const d=n.subTree,h=d&&zl(d);let _=!1;const{getTransitionKey:m}=c.type;if(m){const R=m();i===void 0?i=R:R!==i&&(i=R,_=!0)}if(h&&h.type!==it&&(!pn(c,h)||_)){const R=So(h,a,s,n);if(Ro(h,R),l==="out-in")return s.isLeaving=!0,R.afterLeave=()=>{s.isLeaving=!1,n.update()},Zr(o);l==="in-out"&&c.type!==it&&(R.delayLeave=(C,k,M)=>{const F=fd(s,h);F[String(h.key)]=h,C._leaveCb=()=>{k(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},y_=m_;function fd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function So(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:R,onAppear:C,onAfterAppear:k,onAppearCancelled:M}=e,F=String(t.key),K=fd(n,t),W=(z,ae)=>{z&&st(z,s,9,ae)},j={mode:r,persisted:o,beforeEnter(z){let ae=a;if(!n.isMounted)if(i)ae=R||a;else return;z._leaveCb&&z._leaveCb(!0);const ne=K[F];ne&&pn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),W(ae,[z])},enter(z){let ae=l,ne=c,Te=u;if(!n.isMounted)if(i)ae=C||l,ne=k||c,Te=M||u;else return;let Ae=!1;const Ee=z._enterCb=ot=>{Ae||(Ae=!0,ot?W(Te,[z]):W(ne,[z]),j.delayedLeave&&j.delayedLeave(),z._enterCb=void 0)};ae?(ae(z,Ee),ae.length<=1&&Ee()):Ee()},leave(z,ae){const ne=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return ae();W(d,[z]);let Te=!1;const Ae=z._leaveCb=Ee=>{Te||(Te=!0,ae(),Ee?W(m,[z]):W(_,[z]),z._leaveCb=void 0,K[ne]===t&&delete K[ne])};K[ne]=t,h?(h(z,Ae),h.length<=1&&Ae()):Ae()},clone(z){return So(z,e,n,s)}};return j}function Zr(t){if(xr(t))return t=Rn(t),t.children=null,t}function zl(t){return xr(t)?t.children?t.children[0]:void 0:t}function Ro(t,e){t.shapeFlag&6&&t.component?Ro(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===tt?(o.patchFlag&128&&i++,s=s.concat(pd(o.children,e,a))):(e||o.type!==it)&&s.push(a!=null?Rn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function _d(t){return q(t)?{setup:t,name:t.name}:t}const er=t=>!!t.type.__asyncLoader,xr=t=>t.type.__isKeepAlive;function v_(t,e){gd(t,"a",e)}function b_(t,e){gd(t,"da",e)}function gd(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Mr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)xr(i.parent.vnode)&&E_(s,e,n,i),i=i.parent}}function E_(t,e,n,s){const i=Mr(e,t,s,!0);Ia(()=>{ca(s[e],i)},n)}function Mr(t,e,n=Me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),ts(n);const a=st(e,n,t,o);return wn(),fs(),a});return s?i.unshift(r):i.push(r),r}}const Bt=t=>(e,n=Me)=>(!Xs||t==="sp")&&Mr(t,e,n),I_=Bt("bm"),md=Bt("m"),w_=Bt("bu"),C_=Bt("u"),yd=Bt("bum"),Ia=Bt("um"),T_=Bt("sp"),S_=Bt("rtg"),R_=Bt("rtc");function A_(t,e=Me){Mr("ec",t,e)}let Ao=!0;function N_(t){const e=bd(t),n=t.proxy,s=t.ctx;Ao=!1,e.beforeCreate&&Kl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:m,activated:R,deactivated:C,beforeDestroy:k,beforeUnmount:M,destroyed:F,unmounted:K,render:W,renderTracked:j,renderTriggered:z,errorCaptured:ae,serverPrefetch:ne,expose:Te,inheritAttrs:Ae,components:Ee,directives:ot,filters:Ne}=e;if(c&&k_(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const le=o[pe];q(le)&&(s[pe]=le.bind(n))}if(i){const pe=i.call(n,n);Re(pe)&&(t.data=ps(pe))}if(Ao=!0,r)for(const pe in r){const le=r[pe],Ge=q(le)?le.bind(n,n):q(le.get)?le.get.bind(n,n):ht,Bn=!q(le)&&q(le.set)?le.set.bind(n):ht,Rt=ut({get:Ge,set:Bn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:_t=>Rt.value=_t})}if(a)for(const pe in a)vd(a[pe],s,n,pe);if(l){const pe=q(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(le=>{Hi(le,pe[le])})}u&&Kl(u,t,"c");function ke(pe,le){$(le)?le.forEach(Ge=>pe(Ge.bind(n))):le&&pe(le.bind(n))}if(ke(I_,d),ke(md,h),ke(w_,_),ke(C_,m),ke(v_,R),ke(b_,C),ke(A_,ae),ke(R_,j),ke(S_,z),ke(yd,M),ke(Ia,K),ke(T_,ne),$(Te))if(Te.length){const pe=t.exposed||(t.exposed={});Te.forEach(le=>{Object.defineProperty(pe,le,{get:()=>n[le],set:Ge=>n[le]=Ge})})}else t.exposed||(t.exposed={});W&&t.render===ht&&(t.render=W),Ae!=null&&(t.inheritAttrs=Ae),Ee&&(t.components=Ee),ot&&(t.directives=ot)}function k_(t,e,n=ht,s=!1){$(t)&&(t=No(t));for(const i in t){const r=t[i];let o;Re(r)?"default"in r?o=Mt(r.from||i,r.default,!0):o=Mt(r.from||i):o=Mt(r),Ie(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Kl(t,e,n){st($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vd(t,e,n,s){const i=s.includes(".")?hd(n,s):()=>n[s];if(Fe(t)){const r=e[t];q(r)&&Fs(i,r)}else if(q(t))Fs(i,t.bind(n));else if(Re(t))if($(t))t.forEach(r=>vd(r,e,n,s));else{const r=q(t.handler)?t.handler.bind(n):e[t.handler];q(r)&&Fs(i,r,t)}}function bd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>tr(l,c,o,!0)),tr(l,e,o)),r.set(e,l),l}function tr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&tr(t,r,n,!0),i&&i.forEach(o=>tr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=P_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const P_={data:ql,props:dn,emits:dn,methods:dn,computed:dn,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:dn,directives:dn,watch:x_,provide:ql,inject:O_};function ql(t,e){return e?t?function(){return Be(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function O_(t,e){return dn(No(t),No(e))}function No(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function dn(t,e){return t?Be(Be(Object.create(null),t),e):e}function x_(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function M_(t,e,n,s=!1){const i={},r={};Qi(r,Dr,1),t.propsDefaults=Object.create(null),Ed(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function D_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Pr(t.emitsOptions,h))continue;const _=e[h];if(l)if(Z(r,h))_!==r[h]&&(r[h]=_,c=!0);else{const m=Ct(h);i[m]=ko(l,a,m,_,t,!1)}else _!==r[h]&&(r[h]=_,c=!0)}}}else{Ed(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Z(e,d)&&((u=ds(d))===d||!Z(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ko(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Z(e,d)&&!0)&&(delete r[d],c=!0)}c&&Ft(t,"set","$attrs")}function Ed(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bi(l))continue;const c=e[l];let u;i&&Z(i,u=Ct(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ie(n),c=a||fe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ko(i,l,d,c[d],t,!Z(c,d))}}return o}function ko(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ts(i),s=c[n]=l.call(null,e),wn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ds(n))&&(s=!0))}return s}function Id(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!q(t)){const u=d=>{l=!0;const[h,_]=Id(d,e,!0);Be(o,h),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Gn),Gn;if($(r))for(let u=0;u<r.length;u++){const d=Ct(r[u]);Gl(d)&&(o[d]=fe)}else if(r)for(const u in r){const d=Ct(u);if(Gl(d)){const h=r[u],_=o[d]=$(h)||q(h)?{type:h}:h;if(_){const m=Jl(Boolean,_.type),R=Jl(String,_.type);_[0]=m>-1,_[1]=R<0||m<R,(m>-1||Z(_,"default"))&&a.push(d)}}}const c=[o,a];return s.set(t,c),c}function Gl(t){return t[0]!=="$"}function Yl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ql(t,e){return Yl(t)===Yl(e)}function Jl(t,e){return $(e)?e.findIndex(n=>Ql(n,t)):q(e)&&Ql(e,t)?0:-1}const wd=t=>t[0]==="_"||t==="$stable",wa=t=>$(t)?t.map(vt):[vt(t)],L_=(t,e,n)=>{const s=ud((...i)=>wa(e(...i)),n);return s._c=!1,s},Cd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(wd(i))continue;const r=t[i];if(q(r))e[i]=L_(i,r,s);else if(r!=null){const o=wa(r);e[i]=()=>o}}},Td=(t,e)=>{const n=wa(e);t.slots.default=()=>n},F_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Qi(e,"_",n)):Cd(e,t.slots={})}else t.slots={},e&&Td(t,e);Qi(t.slots,Dr,1)},U_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Be(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Cd(e,i)),o=e}else e&&(Td(t,e),o={default:1});if(r)for(const a in i)!wd(a)&&!(a in o)&&delete i[a]};function Sd(t,e){const n=$e;if(n===null)return t;const s=Lr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=fe]=e[r];q(o)&&(o={mounted:o,updated:o}),o.deep&&mn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function cn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hs(),st(l,n,8,[t.el,a,t,e]),fs())}}function Rd(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $_=0;function B_(t,e){return function(s,i=null){q(s)||(s=Object.assign({},s)),i!=null&&!Re(i)&&(i=null);const r=Rd(),o=new Set;let a=!1;const l=r.app={_uid:$_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=te(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Lr(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Po(t,e,n,s,i=!1){if($(t)){t.forEach((h,_)=>Po(h,e&&($(e)?e[_]:e),n,s,i));return}if(er(s)&&!i)return;const r=s.shapeFlag&4?Lr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,Z(d,c)&&(d[c]=null)):Ie(c)&&(c.value=null)),q(l))Zt(l,a,12,[o,u]);else{const h=Fe(l),_=Ie(l);if(h||_){const m=()=>{if(t.f){const R=h?u[l]:l.value;i?$(R)&&ca(R,r):$(R)?R.includes(r)||R.push(r):h?(u[l]=[r],Z(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Z(d,l)&&(d[l]=o)):Ie(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ze(m,n)):m()}}}const ze=p_;function W_(t){return H_(t)}function H_(t,e){const n=Ep();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=ht,cloneNode:m,insertStaticContent:R}=t,C=(f,p,g,b=null,v=null,w=null,N=!1,I=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!pn(f,p)&&(b=x(f),Ze(f,v,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:D,shapeFlag:P}=p;switch(E){case Ca:k(f,p,g,b);break;case it:M(f,p,g,b);break;case Vi:f==null&&F(p,g,b,N);break;case tt:ot(f,p,g,b,v,w,N,I,T);break;default:P&1?j(f,p,g,b,v,w,N,I,T):P&6?Ne(f,p,g,b,v,w,N,I,T):(P&64||P&128)&&E.process(f,p,g,b,v,w,N,I,T,_e)}D!=null&&v&&Po(D,f&&f.ref,w,p||f,!p)},k=(f,p,g,b)=>{if(f==null)s(p.el=a(p.children),g,b);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},M=(f,p,g,b)=>{f==null?s(p.el=l(p.children||""),g,b):p.el=f.el},F=(f,p,g,b)=>{[f.el,f.anchor]=R(f.children,p,g,b,f.el,f.anchor)},K=({el:f,anchor:p},g,b)=>{let v;for(;f&&f!==p;)v=h(f),s(f,g,b),f=v;s(p,g,b)},W=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},j=(f,p,g,b,v,w,N,I,T)=>{N=N||p.type==="svg",f==null?z(p,g,b,v,w,N,I,T):Te(f,p,v,w,N,I,T)},z=(f,p,g,b,v,w,N,I)=>{let T,E;const{type:D,props:P,shapeFlag:L,transition:V,patchFlag:ee,dirs:ve}=f;if(f.el&&m!==void 0&&ee===-1)T=f.el=m(f.el);else{if(T=f.el=o(f.type,w,P&&P.is,P),L&8?u(T,f.children):L&16&&ne(f.children,T,null,b,v,w&&D!=="foreignObject",N,I),ve&&cn(f,null,b,"created"),P){for(const me in P)me!=="value"&&!Bi(me)&&r(T,me,null,P[me],w,f.children,b,v,A);"value"in P&&r(T,"value",null,P.value),(E=P.onVnodeBeforeMount)&&mt(E,b,f)}ae(T,f,f.scopeId,N,b)}ve&&cn(f,null,b,"beforeMount");const ue=(!v||v&&!v.pendingBranch)&&V&&!V.persisted;ue&&V.beforeEnter(T),s(T,p,g),((E=P&&P.onVnodeMounted)||ue||ve)&&ze(()=>{E&&mt(E,b,f),ue&&V.enter(T),ve&&cn(f,null,b,"mounted")},v)},ae=(f,p,g,b,v)=>{if(g&&_(f,g),b)for(let w=0;w<b.length;w++)_(f,b[w]);if(v){let w=v.subTree;if(p===w){const N=v.vnode;ae(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},ne=(f,p,g,b,v,w,N,I,T=0)=>{for(let E=T;E<f.length;E++){const D=f[E]=I?Kt(f[E]):vt(f[E]);C(null,D,p,g,b,v,w,N,I)}},Te=(f,p,g,b,v,w,N)=>{const I=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:D}=p;T|=f.patchFlag&16;const P=f.props||fe,L=p.props||fe;let V;g&&un(g,!1),(V=L.onVnodeBeforeUpdate)&&mt(V,g,p,f),D&&cn(p,f,g,"beforeUpdate"),g&&un(g,!0);const ee=v&&p.type!=="foreignObject";if(E?Ae(f.dynamicChildren,E,I,g,b,ee,w):N||Ge(f,p,I,null,g,b,ee,w,!1),T>0){if(T&16)Ee(I,p,P,L,g,b,v);else if(T&2&&P.class!==L.class&&r(I,"class",null,L.class,v),T&4&&r(I,"style",P.style,L.style,v),T&8){const ve=p.dynamicProps;for(let ue=0;ue<ve.length;ue++){const me=ve[ue],at=P[me],Wn=L[me];(Wn!==at||me==="value")&&r(I,me,at,Wn,v,f.children,g,b,A)}}T&1&&f.children!==p.children&&u(I,p.children)}else!N&&E==null&&Ee(I,p,P,L,g,b,v);((V=L.onVnodeUpdated)||D)&&ze(()=>{V&&mt(V,g,p,f),D&&cn(p,f,g,"updated")},b)},Ae=(f,p,g,b,v,w,N)=>{for(let I=0;I<p.length;I++){const T=f[I],E=p[I],D=T.el&&(T.type===tt||!pn(T,E)||T.shapeFlag&70)?d(T.el):g;C(T,E,D,null,b,v,w,N,!0)}},Ee=(f,p,g,b,v,w,N)=>{if(g!==b){for(const I in b){if(Bi(I))continue;const T=b[I],E=g[I];T!==E&&I!=="value"&&r(f,I,E,T,N,p.children,v,w,A)}if(g!==fe)for(const I in g)!Bi(I)&&!(I in b)&&r(f,I,g[I],null,N,p.children,v,w,A);"value"in b&&r(f,"value",g.value,b.value)}},ot=(f,p,g,b,v,w,N,I,T)=>{const E=p.el=f?f.el:a(""),D=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:V}=p;V&&(I=I?I.concat(V):V),f==null?(s(E,g,b),s(D,g,b),ne(p.children,g,D,v,w,N,I,T)):P>0&&P&64&&L&&f.dynamicChildren?(Ae(f.dynamicChildren,L,g,v,w,N,I),(p.key!=null||v&&p===v.subTree)&&Ad(f,p,!0)):Ge(f,p,g,D,v,w,N,I,T)},Ne=(f,p,g,b,v,w,N,I,T)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,g,b,N,T):St(p,g,b,v,w,N,T):ke(f,p,T)},St=(f,p,g,b,v,w,N)=>{const I=f.component=tg(f,b,v);if(xr(f)&&(I.ctx.renderer=_e),ng(I),I.asyncDep){if(v&&v.registerDep(I,pe),!f.el){const T=I.subTree=te(it);M(null,T,p,g)}return}pe(I,f,p,g,v,w,N)},ke=(f,p,g)=>{const b=p.component=f.component;if(d_(f,p,g))if(b.asyncDep&&!b.asyncResolved){le(b,p,g);return}else b.next=p,r_(b.update),b.update();else p.component=f.component,p.el=f.el,b.vnode=p},pe=(f,p,g,b,v,w,N)=>{const I=()=>{if(f.isMounted){let{next:D,bu:P,u:L,parent:V,vnode:ee}=f,ve=D,ue;un(f,!1),D?(D.el=ee.el,le(f,D,N)):D=ee,P&&Wi(P),(ue=D.props&&D.props.onVnodeBeforeUpdate)&&mt(ue,V,D,ee),un(f,!0);const me=Xr(f),at=f.subTree;f.subTree=me,C(at,me,d(at.el),x(at),f,v,w),D.el=me.el,ve===null&&h_(f,me.el),L&&ze(L,v),(ue=D.props&&D.props.onVnodeUpdated)&&ze(()=>mt(ue,V,D,ee),v)}else{let D;const{el:P,props:L}=p,{bm:V,m:ee,parent:ve}=f,ue=er(p);if(un(f,!1),V&&Wi(V),!ue&&(D=L&&L.onVnodeBeforeMount)&&mt(D,ve,p),un(f,!0),P&&G){const me=()=>{f.subTree=Xr(f),G(P,f.subTree,f,v,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=Xr(f);C(null,me,g,b,f,v,w),p.el=me.el}if(ee&&ze(ee,v),!ue&&(D=L&&L.onVnodeMounted)){const me=p;ze(()=>mt(D,ve,me),v)}p.shapeFlag&256&&f.a&&ze(f.a,v),f.isMounted=!0,p=g=b=null}},T=f.effect=new fa(I,()=>id(f.update),f.scope),E=f.update=T.run.bind(T);E.id=f.uid,un(f,!0),E()},le=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,D_(f,p.props,b,g),U_(f,p.children,g),hs(),Ea(void 0,f.update),fs()},Ge=(f,p,g,b,v,w,N,I,T=!1)=>{const E=f&&f.children,D=f?f.shapeFlag:0,P=p.children,{patchFlag:L,shapeFlag:V}=p;if(L>0){if(L&128){Rt(E,P,g,b,v,w,N,I,T);return}else if(L&256){Bn(E,P,g,b,v,w,N,I,T);return}}V&8?(D&16&&A(E,v,w),P!==E&&u(g,P)):D&16?V&16?Rt(E,P,g,b,v,w,N,I,T):A(E,v,w,!0):(D&8&&u(g,""),V&16&&ne(P,g,b,v,w,N,I,T))},Bn=(f,p,g,b,v,w,N,I,T)=>{f=f||Gn,p=p||Gn;const E=f.length,D=p.length,P=Math.min(E,D);let L;for(L=0;L<P;L++){const V=p[L]=T?Kt(p[L]):vt(p[L]);C(f[L],V,g,null,v,w,N,I,T)}E>D?A(f,v,w,!0,!1,P):ne(p,g,b,v,w,N,I,T,P)},Rt=(f,p,g,b,v,w,N,I,T)=>{let E=0;const D=p.length;let P=f.length-1,L=D-1;for(;E<=P&&E<=L;){const V=f[E],ee=p[E]=T?Kt(p[E]):vt(p[E]);if(pn(V,ee))C(V,ee,g,null,v,w,N,I,T);else break;E++}for(;E<=P&&E<=L;){const V=f[P],ee=p[L]=T?Kt(p[L]):vt(p[L]);if(pn(V,ee))C(V,ee,g,null,v,w,N,I,T);else break;P--,L--}if(E>P){if(E<=L){const V=L+1,ee=V<D?p[V].el:b;for(;E<=L;)C(null,p[E]=T?Kt(p[E]):vt(p[E]),g,ee,v,w,N,I,T),E++}}else if(E>L)for(;E<=P;)Ze(f[E],v,w,!0),E++;else{const V=E,ee=E,ve=new Map;for(E=ee;E<=L;E++){const Ye=p[E]=T?Kt(p[E]):vt(p[E]);Ye.key!=null&&ve.set(Ye.key,E)}let ue,me=0;const at=L-ee+1;let Wn=!1,kl=0;const Cs=new Array(at);for(E=0;E<at;E++)Cs[E]=0;for(E=V;E<=P;E++){const Ye=f[E];if(me>=at){Ze(Ye,v,w,!0);continue}let gt;if(Ye.key!=null)gt=ve.get(Ye.key);else for(ue=ee;ue<=L;ue++)if(Cs[ue-ee]===0&&pn(Ye,p[ue])){gt=ue;break}gt===void 0?Ze(Ye,v,w,!0):(Cs[gt-ee]=E+1,gt>=kl?kl=gt:Wn=!0,C(Ye,p[gt],g,null,v,w,N,I,T),me++)}const Pl=Wn?V_(Cs):Gn;for(ue=Pl.length-1,E=at-1;E>=0;E--){const Ye=ee+E,gt=p[Ye],Ol=Ye+1<D?p[Ye+1].el:b;Cs[E]===0?C(null,gt,g,Ol,v,w,N,I,T):Wn&&(ue<0||E!==Pl[ue]?_t(gt,g,Ol,2):ue--)}}},_t=(f,p,g,b,v=null)=>{const{el:w,type:N,transition:I,children:T,shapeFlag:E}=f;if(E&6){_t(f.component.subTree,p,g,b);return}if(E&128){f.suspense.move(p,g,b);return}if(E&64){N.move(f,p,g,_e);return}if(N===tt){s(w,p,g);for(let P=0;P<T.length;P++)_t(T[P],p,g,b);s(f.anchor,p,g);return}if(N===Vi){K(f,p,g);return}if(b!==2&&E&1&&I)if(b===0)I.beforeEnter(w),s(w,p,g),ze(()=>I.enter(w),v);else{const{leave:P,delayLeave:L,afterLeave:V}=I,ee=()=>s(w,p,g),ve=()=>{P(w,()=>{ee(),V&&V()})};L?L(w,ee,ve):ve()}else s(w,p,g)},Ze=(f,p,g,b=!1,v=!1)=>{const{type:w,props:N,ref:I,children:T,dynamicChildren:E,shapeFlag:D,patchFlag:P,dirs:L}=f;if(I!=null&&Po(I,null,g,f,!0),D&256){p.ctx.deactivate(f);return}const V=D&1&&L,ee=!er(f);let ve;if(ee&&(ve=N&&N.onVnodeBeforeUnmount)&&mt(ve,p,f),D&6)O(f.component,g,b);else{if(D&128){f.suspense.unmount(g,b);return}V&&cn(f,null,p,"beforeUnmount"),D&64?f.type.remove(f,p,g,v,_e,b):E&&(w!==tt||P>0&&P&64)?A(E,p,g,!1,!0):(w===tt&&P&384||!v&&D&16)&&A(T,p,g),b&&Qr(f)}(ee&&(ve=N&&N.onVnodeUnmounted)||V)&&ze(()=>{ve&&mt(ve,p,f),V&&cn(f,null,p,"unmounted")},g)},Qr=f=>{const{type:p,el:g,anchor:b,transition:v}=f;if(p===tt){y(g,b);return}if(p===Vi){W(f);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:I}=v,T=()=>N(g,w);I?I(f.el,w,T):T()}else w()},y=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},O=(f,p,g)=>{const{bum:b,scope:v,update:w,subTree:N,um:I}=f;b&&Wi(b),v.stop(),w&&(w.active=!1,Ze(N,f,p,g)),I&&ze(I,p),ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(f,p,g,b=!1,v=!1,w=0)=>{for(let N=w;N<f.length;N++)Ze(f[N],p,g,b,v)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ce=(f,p,g)=>{f==null?p._vnode&&Ze(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),ad(),p._vnode=f},_e={p:C,um:Ze,m:_t,r:Qr,mt:St,mc:ne,pc:Ge,pbc:Ae,n:x,o:t};let Q,G;return e&&([Q,G]=e(_e)),{render:ce,hydrate:Q,createApp:B_(ce,Q)}}function un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ad(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kt(i[r]),a.el=o.el),n||Ad(o,a))}}function V_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const j_=t=>t.__isTeleport,Nd="components";function Se(t,e){return K_(Nd,t,!0,e)||t}const z_=Symbol();function K_(t,e,n=!0,s=!1){const i=$e||Me;if(i){const r=i.type;if(t===Nd){const a=og(r);if(a&&(a===e||a===Ct(e)||a===Ar(Ct(e))))return r}const o=Xl(i[t]||r[t],e)||Xl(i.appContext[t],e);return!o&&s?r:o}}function Xl(t,e){return t&&(t[e]||t[Ct(e)]||t[Ar(Ct(e))])}const tt=Symbol(void 0),Ca=Symbol(void 0),it=Symbol(void 0),Vi=Symbol(void 0),Us=[];let In=null;function se(t=!1){Us.push(In=t?null:[])}function q_(){Us.pop(),In=Us[Us.length-1]||null}let nr=1;function Zl(t){nr+=t}function kd(t){return t.dynamicChildren=nr>0?In||Gn:null,q_(),nr>0&&In&&In.push(t),t}function we(t,e,n,s,i,r){return kd(U(t,e,n,s,i,r,!0))}function Et(t,e,n,s,i){return kd(te(t,e,n,s,i,!0))}function sr(t){return t?t.__v_isVNode===!0:!1}function pn(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Pd=({key:t})=>t!=null?t:null,ji=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||Ie(t)||q(t)?{i:$e,r:t,k:e,f:!!n}:t:null;function U(t,e=null,n=null,s=0,i=null,r=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pd(e),ref:e&&ji(e),scopeId:Or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Sa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),nr>0&&!o&&In&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&In.push(l),l}const te=G_;function G_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===z_)&&(t=it),sr(t)){const a=Rn(t,e,!0);return n&&Sa(a,n),a}if(ag(t)&&(t=t.__vccOpts),e){e=Y_(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Lt(a)),Re(l)&&(Ju(l)&&!$(l)&&(l=Be({},l)),e.style=oa(l))}const o=Fe(t)?1:f_(t)?128:j_(t)?64:Re(t)?4:q(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function Y_(t){return t?Ju(t)||Dr in t?Be({},t):t:null}function Rn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Q_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pd(a),ref:e&&e.ref?n&&i?$(i)?i.concat(ji(e)):[i,ji(e)]:ji(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ta(t=" ",e=0){return te(Ca,null,t,e)}function Od(t,e){const n=te(Vi,null,t);return n.staticCount=e,n}function $s(t="",e=!1){return e?(se(),Et(it,null,t)):te(it,null,t)}function vt(t){return t==null||typeof t=="boolean"?te(it):$(t)?te(tt,null,t.slice()):typeof t=="object"?Kt(t):te(Ca,null,String(t))}function Kt(t){return t.el===null||t.memo?t:Rn(t)}function Sa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Sa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Dr in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Ta(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Lt([e.class,s.class]));else if(i==="style")e.style=oa([e.style,s.style]);else if(Tr(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function mt(t,e,n,s=null){st(t,e,7,[n,s])}function J_(t,e,n={},s,i){if($e.isCE||$e.parent&&er($e.parent)&&$e.parent.isCE)return te("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),se();const o=r&&xd(r(n)),a=Et(tt,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function xd(t){return t.some(e=>sr(e)?!(e.type===it||e.type===tt&&!xd(e.children)):!0)?t:null}const Oo=t=>t?Md(t)?Lr(t)||t.proxy:Oo(t.parent):null,ir=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oo(t.parent),$root:t=>Oo(t.root),$emit:t=>t.emit,$options:t=>bd(t),$forceUpdate:t=>()=>id(t.update),$nextTick:t=>sd.bind(t.proxy),$watch:t=>__.bind(t)}),X_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==fe&&Z(s,e))return o[e]=1,s[e];if(i!==fe&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==fe&&Z(n,e))return o[e]=4,n[e];Ao&&(o[e]=0)}}const u=ir[e];let d,h;if(u)return e==="$attrs"&&Xe(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==fe&&Z(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Z(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==fe&&Z(i,e)?(i[e]=n,!0):s!==fe&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==fe&&Z(t,o)||e!==fe&&Z(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(ir,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Z_=Rd();let eg=0;function tg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Z_,r={uid:eg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(s,i),emitsOptions:cd(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=l_.bind(null,r),t.ce&&t.ce(r),r}let Me=null;const Ra=()=>Me||$e,ts=t=>{Me=t,t.scope.on()},wn=()=>{Me&&Me.scope.off(),Me=null};function Md(t){return t.vnode.shapeFlag&4}let Xs=!1;function ng(t,e=!1){Xs=e;const{props:n,children:s}=t.vnode,i=Md(t);M_(t,n,i,e),F_(t,s);const r=i?sg(t,e):void 0;return Xs=!1,r}function sg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=es(new Proxy(t.ctx,X_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?rg(t):null;ts(t),hs();const r=Zt(s,t,0,[t.props,i]);if(fs(),wn(),Mu(r)){if(r.then(wn,wn),e)return r.then(o=>{ec(t,o,e)}).catch(o=>{kr(o,t,0)});t.asyncDep=r}else ec(t,r,e)}else Dd(t,e)}function ec(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=td(e)),Dd(t,n)}let tc;function Dd(t,e,n){const s=t.type;if(!t.render){if(!e&&tc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Be(Be({isCustomElement:r,delimiters:a},o),l);s.render=tc(i,c)}}t.render=s.render||ht}ts(t),hs(),N_(t),fs(),wn()}function ig(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function rg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ig(t))},slots:t.slots,emit:t.emit,expose:e}}function Lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(td(es(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)}}))}function og(t){return q(t)&&t.displayName||t.name}function ag(t){return q(t)&&"__vccOpts"in t}const ut=(t,e)=>n_(t,e,Xs);function Ld(t,e,n){const s=arguments.length;return s===2?Re(e)&&!$(e)?sr(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sr(n)&&(n=[n]),te(t,e,n))}const lg="3.2.33",cg="http://www.w3.org/2000/svg",_n=typeof document!="undefined"?document:null,nc=_n&&_n.createElement("template"),ug={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?_n.createElementNS(cg,t):_n.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{nc.innerHTML=s?`<svg>${t}</svg>`:t;const a=nc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hg(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){for(const r in n)xo(s,r,n[r]);if(e&&!Fe(e))for(const r in e)n[r]==null&&xo(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const sc=/\s*!important$/;function xo(t,e,n){if($(n))n.forEach(s=>xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fg(t,e);sc.test(n)?t.setProperty(ds(s),n.replace(sc,""),"important"):t[s]=n}}const ic=["Webkit","Moz","ms"],eo={};function fg(t,e){const n=eo[e];if(n)return n;let s=Ct(e);if(s!=="filter"&&s in t)return eo[e]=s;s=Ar(s);for(let i=0;i<ic.length;i++){const r=ic[i]+s;if(r in t)return eo[e]=r}return e}const rc="http://www.w3.org/1999/xlink";function pg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rc,e.slice(6,e.length)):t.setAttributeNS(rc,e,n);else{const r=up(e);n==null||r&&!Ou(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _g(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ou(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fd,gg]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Mo=0;const mg=Promise.resolve(),yg=()=>{Mo=0},vg=()=>Mo||(mg.then(yg),Mo=Fd());function Nt(t,e,n,s){t.addEventListener(e,n,s)}function bg(t,e,n,s){t.removeEventListener(e,n,s)}function Eg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ig(e);if(s){const c=r[e]=wg(s,i);Nt(t,a,c,l)}else o&&(bg(t,a,o,l),r[e]=void 0)}}const oc=/(?:Once|Passive|Capture)$/;function Ig(t){let e;if(oc.test(t)){e={};let n;for(;n=t.match(oc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ds(t.slice(2)),e]}function wg(t,e){const n=s=>{const i=s.timeStamp||Fd();(gg||i>=n.attached-1)&&st(Cg(s,n.value),e,5,[s])};return n.value=t,n.attached=vg(),n}function Cg(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ac=/^on[a-z]/,Tg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?dg(t,s,i):e==="style"?hg(t,n,s):Tr(e)?la(e)||Eg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sg(t,e,s,i))?_g(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pg(t,e,s,i))};function Sg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ac.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ac.test(e)&&Fe(n)?!1:e in t}const Rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};y_.props;const rn=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>Wi(e,n):e};function Ag(t){t.target.composing=!0}function lc(t){const e=t.target;e.composing&&(e.composing=!1,Ng(e,"input"))}function Ng(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const cc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=rn(i);const r=s||i.props&&i.props.type==="number";Nt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():r&&(a=Ji(a)),t._assign(a)}),n&&Nt(t,"change",()=>{t.value=t.value.trim()}),e||(Nt(t,"compositionstart",Ag),Nt(t,"compositionend",lc),Nt(t,"change",lc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=rn(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ji(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ud={deep:!0,created(t,e,n){t._assign=rn(n),Nt(t,"change",()=>{const s=t._modelValue,i=ns(t),r=t.checked,o=t._assign;if($(s)){const a=aa(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(us(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o($d(t,r))})},mounted:uc,beforeUpdate(t,e,n){t._assign=rn(n),uc(t,e,n)}};function uc(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=aa(e,s.props.value)>-1:us(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Sn(e,$d(t,!0)))}const kg={created(t,{value:e},n){t.checked=Sn(e,n.props.value),t._assign=rn(n),Nt(t,"change",()=>{t._assign(ns(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=rn(s),e!==n&&(t.checked=Sn(e,s.props.value))}},Pg={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=us(e);Nt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ji(ns(o)):ns(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=rn(s)},mounted(t,{value:e}){dc(t,e)},beforeUpdate(t,e,n){t._assign=rn(n)},updated(t,{value:e}){dc(t,e)}};function dc(t,e){const n=t.multiple;if(!(n&&!$(e)&&!us(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=ns(r);if(n)$(e)?r.selected=aa(e,o)>-1:r.selected=e.has(o);else if(Sn(ns(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ns(t){return"_value"in t?t._value:t.value}function $d(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Og={created(t,e,n){Li(t,e,n,null,"created")},mounted(t,e,n){Li(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Li(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Li(t,e,n,s,"updated")}};function Li(t,e,n,s,i){let r;switch(t.tagName){case"SELECT":r=Pg;break;case"TEXTAREA":r=cc;break;default:switch(n.props&&n.props.type){case"checkbox":r=Ud;break;case"radio":r=kg;break;default:r=cc}}const o=r[i];o&&o(t,e,n,s)}const xg=["ctrl","shift","alt","meta"],Mg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xg.some(n=>t[`${n}Key`]&&!e.includes(n))},Aa=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Mg[e[i]];if(r&&r(n,e))return}return t(n,...s)},Dg=Be({patchProp:Tg},ug);let hc;function Lg(){return hc||(hc=W_(Dg))}const Fg=(...t)=>{const e=Lg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ug(s);if(!i)return;const r=e._component;!q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ug(t){return Fe(t)?document.querySelector(t):t}var $g=!1;/*!
  * pinia v2.0.0-rc.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */let Bd;const Fr=t=>Bd=t,Wd=Symbol();function fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function Bg(){const t=Uu(!0),e=t.run(()=>va({}));let n=[];const s=[],i=es({install(r){Fr(i),i._a=r,r.provide(Wd,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o))},use(r){return!this._a&&!$g?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}function pc(t,e,n){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)};return!n&&Ra()&&Ia(s),s}function _c(t,...e){t.forEach(n=>{n(...e)})}function zi(t,e){for(const n in e){const s=e[n],i=t[n];fc(i)&&fc(s)&&!Ie(s)&&!Xt(s)?t[n]=zi(i,s):t[n]=s}return t}const{assign:gn}=Object;function Wg(t){return t&&t.effect}function Hg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Xp(n.state.value[t]);return gn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=es(ut(()=>{Fr(n);const _=n._s.get(t);return o[h].call(_,_)})),d),{}))}return l=Hd(t,c,e,n),l.$reset=function(){const d=i?i():{};this.$patch(h=>{gn(h,d)})},l}const to=()=>{};function Hd(t,e,n={},s,i){let r;const o=n.state,a=Ue({actions:{}},n),l={deep:!0};let c,u=es([]),d=es([]),h;const _=s.state.value[t];_||(s.state.value[t]={}),va({});function m(W){let j;c=!1,typeof W=="function"?(W(s.state.value[t]),j={type:Bs.patchFunction,storeId:t,events:h}):(zi(s.state.value[t],W),j={type:Bs.patchObject,payload:W,storeId:t,events:h}),c=!0,_c(u,j,s.state.value[t])}const R=to;function C(){r.stop(),u=[],d=[],s._s.delete(t)}function k(W,j){return function(){Fr(s);const z=Array.from(arguments);let ae=to,ne=to;function Te(Ne){ae=Ne}function Ae(Ne){ne=Ne}_c(d,{args:z,name:W,store:F,after:Te,onError:Ae});let Ee;try{Ee=j.apply(this&&this.$id===t?this:F,z)}catch(Ne){if(ne(Ne)!==!1)throw Ne}if(Ee instanceof Promise)return Ee.then(Ne=>{const St=ae(Ne);return St===void 0?Ne:St}).catch(Ne=>{if(ne(Ne)!==!1)return Promise.reject(Ne)});const ot=ae(Ee);return ot===void 0?Ee:ot}}const M={_p:s,$id:t,$onAction:pc.bind(null,d),$patch:m,$reset:R,$subscribe(W,j={}){const z=pc(u,W,j.detached),ae=r.run(()=>Fs(()=>s.state.value[t],(Te,Ae)=>{c&&W({storeId:t,type:Bs.direct,events:h},Te)},gn({},l,j)));return()=>{ae(),z()}},$dispose:C},F=ps(gn({},M));s._s.set(t,F);const K=s._e.run(()=>(r=Uu(),r.run(()=>e())));for(const W in K){const j=K[W];if(Ie(j)&&!Wg(j)||Xt(j))o||(_&&(Ie(j)?j.value=_[W]:zi(j,_[W])),s.state.value[t][W]=j);else if(typeof j=="function"){const z=k(W,j);K[W]=z,a.actions[W]=j}}return gn(F,K),Object.defineProperty(F,"$state",{get:()=>s.state.value[t],set:W=>{m(j=>{gn(j,W)})}}),s._p.forEach(W=>{gn(F,r.run(()=>W({store:F,app:s._a,pinia:s,options:a})))}),_&&o&&(n.hydrate||zi)(F,_),c=!0,F}function Vg(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Ra();return a=a||c&&Mt(Wd),a&&Fr(a),a=Bd,a._s.has(s)||(r?Hd(s,e,i,a):Hg(s,i,a)),a._s.get(s)}return o.$id=s,o}function Vd(t,e){return Array.isArray(e)?e.reduce((n,s)=>(n[s]=function(){return t(this.$pinia)[s]},n),{}):Object.keys(e).reduce((n,s)=>(n[s]=function(){const i=t(this.$pinia),r=e[s];return typeof r=="function"?r.call(this,i):i[r]},n),{})}function Ur(t,e){return Array.isArray(e)?e.reduce((n,s)=>(n[s]=function(...i){return t(this.$pinia)[s](...i)},n),{}):Object.keys(e).reduce((n,s)=>(n[s]=function(...i){return t(this.$pinia)[e[s]](...i)},n),{})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw ms(e)},ms=function(t){return new Error("Firebase Database ("+jd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),s.push(n[u],n[d],n[h],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Kd=function(t){const e=zd(t);return Na.encodeByteArray(e,!0)},qd=function(t){return Kd(t).replace(/\./g,"")},Do=function(t){try{return Na.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){return Gd(void 0,t)}function Gd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Kg(n)||(t[n]=Gd(t[n],e[n]));return t}function Kg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ka(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function qg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gg(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qd(){return jd.NODE_ADMIN===!0}function Yg(){return typeof indexedDB=="object"}function Qg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jg,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Xg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ys(i,a,s)}}function Xg(t,e){return t.replace(Zg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Zs(Do(r[0])||""),n=Zs(Do(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},em=function(t){const e=Jd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},tm=function(t){const e=Jd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function or(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gc(r)&&gc(o)){if(!or(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function sm(t,e){const n=new im(t,e);return n.subscribe.bind(n)}class im{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=no),i.error===void 0&&(i.error=no),i.complete===void 0&&(i.complete=no);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function no(){}function Pa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Br=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $r;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===hn?void 0:t}function cm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new am(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const dm={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},hm=he.INFO,fm={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},pm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=fm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const _m=(t,e)=>e.some(n=>t instanceof n);let mc,yc;function gm(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return yc||(yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xd=new WeakMap,Fo=new WeakMap,Zd=new WeakMap,so=new WeakMap,xa=new WeakMap;function ym(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(en(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xd.set(n,t)}).catch(()=>{}),xa.set(e,t),e}function vm(t){if(Fo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Fo.set(t,e)}let Uo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bm(t){Uo=t(Uo)}function Em(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(io(this),e,...n);return Zd.set(s,e.sort?e.sort():[e]),en(s)}:mm().includes(t)?function(...e){return t.apply(io(this),e),en(Xd.get(this))}:function(...e){return en(t.apply(io(this),e))}}function Im(t){return typeof t=="function"?Em(t):(t instanceof IDBTransaction&&vm(t),_m(t,gm())?new Proxy(t,Uo):t)}function en(t){if(t instanceof IDBRequest)return ym(t);if(so.has(t))return so.get(t);const e=Im(t);return e!==t&&(so.set(t,e),xa.set(e,t)),e}const io=t=>xa.get(t);function wm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=en(o);return s&&o.addEventListener("upgradeneeded",l=>{s(en(o.result),l.oldVersion,l.newVersion,en(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Cm=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],ro=new Map;function vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ro.get(e))return ro.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Tm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Cm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ro.set(e,r),r}bm(t=>lt(Ue({},t),{get:(e,n,s)=>vc(e,n)||t.get(e,n,s),has:(e,n)=>!!vc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",bc="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Oa("@firebase/app"),Am="@firebase/app-compat",Nm="@firebase/analytics-compat",km="@firebase/analytics",Pm="@firebase/app-check-compat",Om="@firebase/app-check",xm="@firebase/auth",Mm="@firebase/auth-compat",Dm="@firebase/database",Lm="@firebase/database-compat",Fm="@firebase/functions",Um="@firebase/functions-compat",$m="@firebase/installations",Bm="@firebase/installations-compat",Wm="@firebase/messaging",Hm="@firebase/messaging-compat",Vm="@firebase/performance",jm="@firebase/performance-compat",zm="@firebase/remote-config",Km="@firebase/remote-config-compat",qm="@firebase/storage",Gm="@firebase/storage-compat",Ym="@firebase/firestore",Qm="@firebase/firestore-compat",Jm="firebase",Xm="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",Zm={[$o]:"fire-core",[Am]:"fire-core-compat",[km]:"fire-analytics",[Nm]:"fire-analytics-compat",[Om]:"fire-app-check",[Pm]:"fire-app-check-compat",[xm]:"fire-auth",[Mm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Lm]:"fire-rtdb-compat",[Fm]:"fire-fn",[Um]:"fire-fn-compat",[$m]:"fire-iid",[Bm]:"fire-iid-compat",[Wm]:"fire-fcm",[Hm]:"fire-fcm-compat",[Vm]:"fire-perf",[jm]:"fire-perf-compat",[zm]:"fire-rc",[Km]:"fire-rc-compat",[qm]:"fire-gcs",[Gm]:"fire-gcs-compat",[Ym]:"fire-fst",[Qm]:"fire-fst-compat","fire-js":"fire-js",[Jm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map,Bo=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){Ma.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Bo.has(e))return Ma.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,t);for(const n of ar.values())ey(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Nn=new _i("app","Firebase",ty);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=Xm;function sy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});const i=ar.get(s);if(i){if(or(t,i.options)&&or(n,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const r=new um(s);for(const a of Bo.values())r.addComponent(a);const o=new ny(t,n,r);return ar.set(s,o),o}function th(t=eh){const e=ar.get(t);if(!e)throw Nn.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let i=(s=Zm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ma.warn(a.join(" "));return}is(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="firebase-heartbeat-database",ry=1,ei="firebase-heartbeat-store";let oo=null;function nh(){return oo||(oo=wm(iy,ry,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw Nn.create("storage-open",{originalErrorMessage:t.message})})),oo}async function oy(t){try{return(await nh()).transaction(ei).objectStore(ei).get(sh(t))}catch(e){throw Nn.create("storage-get",{originalErrorMessage:e.message})}}async function Ec(t,e){try{const s=(await nh()).transaction(ei,"readwrite");return await s.objectStore(ei).put(e,sh(t)),s.done}catch(n){throw Nn.create("storage-set",{originalErrorMessage:n.message})}}function sh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=1024,ly=30*24*60*60*1e3;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ly}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ic(),{heartbeatsToSend:n,unsentEntries:s}=uy(this._heartbeatsCache.heartbeats),i=qd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ic(){return new Date().toISOString().substring(0,10)}function uy(t,e=ay){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),wc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yg()?Qg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wc(t){return qd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){is(new An("platform-logger",e=>new Sm(e),"PRIVATE")),is(new An("heartbeat",e=>new cy(e),"PRIVATE")),tn($o,bc,t),tn($o,bc,"esm2017"),tn("fire-js","")}hy("");var fy="firebase",py="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(fy,py,"app");const kn=Vg({id:"authStore",state:()=>({user:{isAuth:!1,id:"",email:"",name:""}}),getters:{getUser:t=>t.user},actions:{setUser(t){this.user=Ue({},t)},resetState(){this.$reset()}}});function La(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ih(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _y=ih,rh=new _i("auth","Firebase",ih());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Oa("@firebase/auth");function Ki(t,...e){Cc.logLevel<=he.ERROR&&Cc.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,...e){throw Fa(t,...e)}function It(t,...e){return Fa(t,...e)}function oh(t,e,n){const s=Object.assign(Object.assign({},_y()),{[e]:n});return new _i("auth","Firebase",s).create(e,{appName:t.name})}function gy(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rt(t,"argument-error"),oh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return rh.create(t,...e)}function H(t,e,...n){if(!t)throw Fa(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ki(e),new Error(e)}function Ut(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map;function Ot(t){Ut(t instanceof Function,"Expected a class definition");let e=Tc.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){const n=Da(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(or(r,e!=null?e:{}))return i;rt(i,"already-initialized")}return n.initialize({options:e})}function yy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vy(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vy()||qg()||"connection"in navigator)?navigator.onLine:!0}function Ey(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=ka()||Yd()}get(){return by()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new mi(3e4,6e4);function yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,s,i={}){return lh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ah.fetch()(ch(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function lh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Iy),e);try{const i=new Cy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw oh(t,u,c);rt(t,u)}}catch(i){if(i instanceof ys)throw i;rt(t,"network-request-failed")}}async function bi(t,e,n,s,i={}){const r=await vi(t,e,n,s,i);return"mfaPendingCredential"in r&&rt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ch(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ua(t.config,i):`${t.config.apiScheme}://${i}`}class Cy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(It(this.auth,"network-request-failed")),wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=It(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function Sy(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ry(t,e=!1){const n=pt(t),s=await n.getIdToken(e),i=$a(s);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ws(ao(i.auth_time)),issuedAtTime:Ws(ao(i.iat)),expirationTime:Ws(ao(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ao(t){return Number(t)*1e3}function $a(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ki("JWT malformed, contained fewer than 3 sections"),null;try{const i=Do(n);return i?JSON.parse(i):(Ki("Failed to decode base64 JWT payload"),null)}catch(i){return Ki("Caught error parsing JWT payload as JSON",i),null}}function Ay(t){const e=$a(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ys&&Ny(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ny({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ti(t,Sy(n,{idToken:s}));H(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xy(r.providerUserInfo):[],a=Oy(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new uh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Py(t){const e=pt(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xy(t){return t.map(e=>{var{providerId:n}=e,s=La(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(t,e){const n=await lh(t,{},async()=>{const s=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ch(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ah.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await My(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ni;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ky(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new uh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ry(this,e)}reload(){return Py(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,Ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:K,isAnonymous:W,providerData:j,stsTokenManager:z}=n;H(F&&z,e,"internal-error");const ae=ni.fromJSON(this.name,z);H(typeof F=="string",e,"internal-error"),Ht(d,e.name),Ht(h,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof W=="boolean",e,"internal-error"),Ht(_,e.name),Ht(m,e.name),Ht(R,e.name),Ht(C,e.name),Ht(k,e.name),Ht(M,e.name);const ne=new Cn({uid:F,auth:e,email:h,emailVerified:K,displayName:d,isAnonymous:W,photoURL:m,phoneNumber:_,tenantId:R,stsTokenManager:ae,createdAt:k,lastLoginAt:M});return j&&Array.isArray(j)&&(ne.providerData=j.map(Te=>Object.assign({},Te))),C&&(ne._redirectEventId=C),ne}static async _fromIdTokenResponse(e,n,s=!1){const i=new ni;i.updateFromServerResponse(n);const r=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await lr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dh.type="NONE";const Rc=dh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,r),this.fullPersistenceKey=qi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qn(Ot(Rc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ot(Rc);const o=qi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Cn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Qn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gh(e))return"Blackberry";if(mh(e))return"Webos";if(Ba(e))return"Safari";if((e.includes("chrome/")||fh(e))&&!e.includes("edge/"))return"Chrome";if(_h(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hh(t=We()){return/firefox\//i.test(t)}function Ba(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fh(t=We()){return/crios\//i.test(t)}function ph(t=We()){return/iemobile/i.test(t)}function _h(t=We()){return/android/i.test(t)}function gh(t=We()){return/blackberry/i.test(t)}function mh(t=We()){return/webos/i.test(t)}function Wr(t=We()){return/iphone|ipad|ipod/i.test(t)}function Dy(t=We()){var e;return Wr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ly(){return Gg()&&document.documentMode===10}function yh(t=We()){return Wr(t)||_h(t)||mh(t)||gh(t)||/windows phone/i.test(t)||ph(t)}function Fy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e=[]){let n;switch(t){case"Browser":n=Ac(We());break;case"Worker":n=`${Ac(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new Uy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ei(t){return pt(t)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=sm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function By(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}async function Vy(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Wa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Wy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hy(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return By(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vy(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="http://localhost";class Pn extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=La(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Jn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ky(t){const e=Os(xs(t)).link,n=e?Os(xs(e)).deep_link_id:null,s=Os(xs(t)).deep_link_id;return(s?Os(xs(s)).link:null)||s||n||e||t}class Ha{constructor(e){var n,s,i,r,o,a;const l=Os(xs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=zy((i=l.mode)!==null&&i!==void 0?i:null);H(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ky(e);try{return new Ha(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ha.parseLink(n);return H(s,"argument-error"),si._fromEmailAndCode(e,s.code,s.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ii{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ii{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ii{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qt.credential(n,s)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e){return bi(t,"POST","/v1/accounts:signUp",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Cn._fromIdTokenResponse(e,s,i),o=kc(s);return new On({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=kc(s);return new On({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function kc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ys{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,cr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new cr(e,n,s,i)}}function bh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?cr._fromErrorAndOperation(t,r,e,s):r})}async function Gy(t,e,n=!1){const s=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ti(t,bh(s,i,e,t),n);H(r.idToken,s,"internal-error");const o=$a(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),On._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&rt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(t,e,n=!1){const s="signIn",i=await bh(t,s,e),r=await On._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Qy(t,e){return Eh(Ei(t),e)}async function Jy(t,e,n){const s=Ei(t),i=await qy(s,{returnSecureToken:!0,email:e,password:n}),r=await On._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Xy(t,e,n){return Qy(pt(t),bs.credential(e,n))}function Zy(t,e,n,s){return pt(t).onAuthStateChanged(e,n,s)}function ev(t){return pt(t).signOut()}const ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){const t=We();return Ba(t)||Wr(t)}const nv=1e3,sv=10;class wh extends Ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tv()&&Fy(),this.fallbackToPolling=yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ly()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const iv=wh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ch.type="SESSION";const Th=Ch;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await rv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ja("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function av(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){return typeof wt().WorkerGlobalScope!="undefined"&&typeof wt().importScripts=="function"}async function lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uv(){return Sh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebaseLocalStorageDb",dv=1,dr="firebaseLocalStorage",Ah="fbase_key";class wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function hv(){const t=indexedDB.deleteDatabase(Rh);return new wi(t).toPromise()}function Ho(){const t=indexedDB.open(Rh,dv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(dr,{keyPath:Ah})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(dr)?e(s):(s.close(),await hv(),e(await Ho()))})})}async function Pc(t,e,n){const s=Vr(t,!0).put({[Ah]:e,value:n});return new wi(s).toPromise()}async function fv(t,e){const n=Vr(t,!1).get(e),s=await new wi(n).toPromise();return s===void 0?null:s.value}function Oc(t,e){const n=Vr(t,!0).delete(e);return new wi(n).toPromise()}const pv=800,_v=3;class Nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ho(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_v)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(uv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lv(),!this.activeServiceWorker)return;this.sender=new ov(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ho();return await Pc(e,ur,"1"),await Oc(e,ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Vr(i,!1).getAll();return new wi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nh.type="LOCAL";const gv=Nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=It("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",mv().appendChild(s)})}function vv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t,e){return e?Ot(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bv(t){return Eh(t.auth,new za(t),t.bypassAuthState)}function Ev(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Yy(n,new za(t),t.bypassAuthState)}async function Iv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Gy(n,new za(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return Iv;case"reauthViaPopup":case"reauthViaRedirect":return Ev;default:rt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new mi(2e3,1e4);async function Cv(t,e,n){const s=Ei(t);gy(t,e,Va);const i=kh(s,n);return new yn(s,"signInViaPopup",e,i).executeNotNull()}class yn extends Ph{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wv.get())};e()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="pendingRedirect",Gi=new Map;class Sv extends Ph{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const s=await Rv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rv(t,e){const n=kv(e),s=Nv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Av(t,e){Gi.set(t._key(),e)}function Nv(t){return Ot(t._redirectPersistence)}function kv(t){return qi(Tv,t.config.apiKey,t.name)}async function Pv(t,e,n=!1){const s=Ei(t),i=kh(s,e),o=await new Sv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=10*60*1e3;class xv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Oh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ov&&this.cachedEventUids.clear(),this.cachedEventUids.has(xc(e))}saveEventToCache(e){this.cachedEventUids.add(xc(e)),this.lastProcessedEventTime=Date.now()}}function xc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Oh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fv=/^https?/;async function Uv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dv(t);for(const n of e)try{if($v(n))return}catch{}rt(t,"unauthorized-domain")}function $v(t){const e=Wo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fv.test(n))return!1;if(Lv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new mi(3e4,6e4);function Mc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wv(t){return new Promise((e,n)=>{var s,i,r;function o(){Mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mc(),n(It(t,"network-request-failed"))},timeout:Bv.get()})}if(!((i=(s=wt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=wt().gapi)===null||r===void 0)&&r.load)o();else{const a=vv("iframefcb");return wt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},yv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yi=null,e})}let Yi=null;function Hv(t){return Yi=Yi||Wv(t),Yi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new mi(5e3,15e3),jv="__/auth/iframe",zv="emulator/auth/iframe",Kv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gv(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ua(e,zv):`https://${t.config.authDomain}/${jv}`,s={apiKey:e.apiKey,appName:t.name,v:gi},i=qv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vs(s).slice(1)}`}async function Yv(t){const e=await Hv(t),n=wt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Gv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=wt().setTimeout(()=>{r(o)},Vv.get());function l(){wt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jv=500,Xv=600,Zv="_blank",eb="http://localhost";class Dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tb(t,e,n,s=Jv,i=Xv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qv),{width:s.toString(),height:i.toString(),top:r,left:o}),c=We().toLowerCase();n&&(a=fh(c)?Zv:n),hh(c)&&(e=e||eb,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[_,m])=>`${h}${_}=${m},`,"");if(Dy(c)&&a!=="_self")return nb(e||"",a),new Dc(null);const d=window.open(e||"",a,u);H(d,t,"popup-blocked");try{d.focus()}catch{}return new Dc(d)}function nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="__/auth/handler",ib="emulator/auth/handler";function Lc(t,e,n,s,i,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gi,eventId:i};if(e instanceof Va){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ii){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${rb(t)}?${vs(a).slice(1)}`}function rb({config:t}){return t.emulator?Ua(t,ib):`https://${t.authDomain}/${sb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=Pv,this._overrideRedirectResult=Av}async _openPopup(e,n,s,i){var r;Ut((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Lc(e,n,s,Wo(),i);return tb(e,o,ja())}async _openRedirect(e,n,s,i){return await this._originValidation(e),av(Lc(e,n,s,Wo(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Yv(e),s=new xv(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lo,{type:lo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[lo];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yh()||Ba()||Wr()}}const ab=ob;var Fc="@firebase/auth",Uc="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ub(t){is(new An("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{H(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vh(t)},u=new $y(a,l,c);return yy(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),is(new An("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(s=>new lb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Fc,Uc,cb(t)),tn(Fc,Uc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t=th()){const e=Da(t,"auth");return e.isInitialized()?e.getImmediate():my(t,{popupRedirectResolver:ab,persistence:[gv,iv,Th]})}ub("Browser");const $c="@firebase/database",Bc="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh="";function db(t){xh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hb(e)}}catch{}return new fb},vn=Mh("localStorage"),Vo=Mh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Oa("@firebase/database"),pb=function(){let t=1;return function(){return t++}}(),Dh=function(t){const e=om(t),n=new nm;n.update(e);const s=n.digest();return Na.encodeByteArray(s)},Ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ti.apply(null,s):typeof s=="object"?e+=De(s):e+=s,e+=" "}return e};let Tn=null,Wc=!0;const _b=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xn.logLevel=he.VERBOSE,Tn=Xn.log.bind(Xn),e&&Vo.set("logging_enabled",!0)):typeof t=="function"?Tn=t:(Tn=null,Vo.remove("logging_enabled"))},Le=function(...t){if(Wc===!0&&(Wc=!1,Tn===null&&Vo.get("logging_enabled")===!0&&_b(!0)),Tn){const e=Ti.apply(null,t);Tn(e)}},Si=function(t){return function(...e){Le(t,...e)}},jo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ti(...t);Xn.error(e)},xn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ti(...t)}`;throw Xn.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Ti(...t);Xn.warn(e)},gb=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ka=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rs="[MIN_NAME]",Mn="[MAX_NAME]",Un=function(t,e){if(t===e)return 0;if(t===rs||e===Mn)return-1;if(e===rs||t===Mn)return 1;{const n=Hc(t),s=Hc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},yb=function(t,e){return t===e?0:t<e?-1:1},Ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},qa=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=De(e[s]),n+=":",n+=qa(t[e[s]]);return n+="}",n},Lh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fh=function(t){S(!Ka(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},vb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Eb=new RegExp("^-?(0*)\\d{1,10}$"),Ib=-2147483648,wb=2147483647,Hc=function(t){if(Eb.test(t)){const e=Number(t);if(e>=Ib&&e<=wb)return e}return null},Es=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="5",Uh="v",$h="s",Bh="r",Wh="f",Hh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vh="ls",jh="p",Ko="ac",zh="websocket",Kh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ab(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qh(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===zh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ab(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.counters_={}}incrementCounter(e,n=1){Tt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={},uo={};function Ya(t){const e=t.toString();return co[e]||(co[e]=new Nb),co[e]}function kb(t,e){const n=t.toString();return uo[n]||(uo[n]=e()),uo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Es(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="start",Ob="close",xb="pLPCommand",Mb="pRTLPCB",Gh="id",Yh="pw",Qh="ser",Db="cb",Lb="seg",Fb="ts",Ub="d",$b="dframe",Jh=1870,Xh=30,Bb=Jh-Xh,Wb=25e3,Hb=3e4;class qn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Si(e),this.stats_=Ya(n),this.urlFn=l=>(this.appCheckToken&&(l[Ko]=this.appCheckToken),qh(n,Kh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Hb)),mb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vc)this.id=a,this.password=l;else if(o===Ob)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vc]="t",s[Qh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Db]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Uh]=Ga,this.transportSessionId&&(s[$h]=this.transportSessionId),this.lastSessionId&&(s[Vh]=this.lastSessionId),this.applicationId&&(s[jh]=this.applicationId),this.appCheckToken&&(s[Ko]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Hh.test(location.hostname)&&(s[Bh]=Wh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qn.forceAllow_=!0}static forceDisallow(){qn.forceDisallow_=!0}static isAvailable(){return qn.forceAllow_?!0:!qn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!vb()&&!bb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Kd(n),i=Lh(s,Bb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[$b]="t",s[Gh]=e,s[Yh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pb(),window[xb+this.uniqueCallbackIdentifier]=e,window[Mb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qa.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gh]=this.myID,e[Yh]=this.myPW,e[Qh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xh+s.length<=Jh;){const o=this.pendingSegs.shift();s=s+"&"+Lb+i+"="+o.seg+"&"+Fb+i+"="+o.ts+"&"+Ub+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Wb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=16384,jb=45e3;let hr=null;typeof MozWebSocket!="undefined"?hr=MozWebSocket:typeof WebSocket!="undefined"&&(hr=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Si(this.connId),this.stats_=Ya(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Uh]=Ga,typeof location!="undefined"&&location.hostname&&Hh.test(location.hostname)&&(o[Bh]=Wh),n&&(o[$h]=n),s&&(o[Vh]=s),i&&(o[Ko]=i),r&&(o[jh]=r),qh(e,zh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vn.set("previous_websocket_failure",!0);try{let s;Qd(),this.mySock=new hr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hr!==null&&!dt.forceDisallow_}static previouslyFailed(){return vn.isInMemoryStorage||vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Zs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lh(n,Vb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qn,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of ii.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ii.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6e4,Kb=5e3,qb=10*1024,Gb=100*1024,ho="t",jc="d",Yb="s",zc="r",Qb="e",Kc="o",qc="a",Gc="n",Yc="p",Jb="h";class Xb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Si("c:"+this.id+":"),this.transportManager_=new ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ho in e){const n=e[ho];n===qc?this.upgradeIfSecondaryHealthy_():n===zc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ts("t",e),s=Ts("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ts("t",e),s=Ts("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ts(ho,e);if(jc in e){const s=e[jc];if(n===Jb)this.onHandshake_(s);else if(n===Gc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yb?this.onConnectionShutdown_(s):n===zc?this.onReset_(s):n===Qb?jo("Server Error: "+s):n===Kc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ef{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ka()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fr}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=32,Jc=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new oe("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Ja(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Zb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ri(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=J(t),s=J(e);if(n===null)return e;if(n===s)return Je(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eE(t,e){const n=ri(t,0),s=ri(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Un(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Xa(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function nt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class tE{constructor(e,n){this.errorPrefix_=n,this.parts_=ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Br(this.parts_[s]);nf(this)}}function nE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Br(e),nf(t)}function sE(t){const e=t.parts_.pop();t.byteLength_-=Br(e),t.parts_.length>0&&(t.byteLength_-=1)}function nf(t){if(t.byteLength_>Jc)throw new Error(t.errorPrefix_+"has a key path longer than "+Jc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qc+") or object contains a cycle "+fn(t))}function fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends ef{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Za}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=1e3,iE=60*5*1e3,rE=3*1e3,Xc=30*1e3,oE=1.3,aE=3e4,lE="server_kill",Zc=3;class Dt extends Zh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dt.nextPersistentConnectionId_++,this.log_=Si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ss,this.maxReconnectDelay_=iE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Qd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Za.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(De(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new $r,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},rE),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Dt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tt(e,"w")){const s=ss(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=em(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jo("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aE&&(this.reconnectDelay_=Ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Xb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{qe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(lE)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qe(d),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lo(this.interruptReasons_)&&(this.reconnectDelay_=Ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>qa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zc&&(this.reconnectDelay_=Xc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xh.replace(/\./g,"-")]=1,ka()?e["framework.cordova"]=1:Yd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fr.getInstance().currentlyOnline();return Lo(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(rs,e),i=new Y(rs,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class sf extends jr{static get __EMPTY_NODE(){return Ui}static set __EMPTY_NODE(e){Ui=e}compare(e,n){return Un(e.name,n.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Mn,Ui)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Ui)}toString(){return".key"}}const Zn=new sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Oe.RED,this.left=i!=null?i:Ke.EMPTY_NODE,this.right=r!=null?r:Ke.EMPTY_NODE}copy(e,n,s,i,r){return new Oe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class cE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $i(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $i(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $i(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $i(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new cE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e){return Un(t.name,e.name)}function el(t,e){return Un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;function dE(t){qo=t}const rf=function(t){return typeof t=="number"?"number:"+Fh(t):"string:"+t},of=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tt(e,".sv"),"Priority must be a string or number.")}else S(t===qo||t.isEmpty(),"priority of unexpected type.");S(t===qo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),of(this.priorityNode_)}static set __childrenNodeConstructor(e){eu=e}static get __childrenNodeConstructor(){return eu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fh(this.value_):e+=this.value_,this.lazyHash_=Dh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),r=Pe.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af,lf;function hE(t){af=t}function fE(t){lf=t}class pE extends jr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Mn,new Pe("[PRIORITY-POST]",lf))}makePost(e,n){const s=af(e);return new Y(n,new Pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ce=new pE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=Math.log(2);class gE{constructor(e){const n=r=>parseInt(Math.log(r)/_E,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Oe(h,d.node,Oe.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),R=i(_+1,c);return d=t[_],h=n?n(d):d,new Oe(h,d.node,Oe.BLACK,m,R)}},r=function(l){let c=null,u=null,d=t.length;const h=function(m,R){const C=d-m,k=d;d-=m;const M=i(C+1,k),F=t[C],K=n?n(F):F;_(new Oe(K,F.node,R,null,M))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const R=l.nextBitIsOne(),C=Math.pow(2,l.count-(m+1));R?h(C,Oe.BLACK):(h(C,Oe.BLACK),h(C,Oe.RED))}return u},o=new gE(t.length),a=r(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;const Hn={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Hn&&Ce,"ChildrenNode.ts has not been loaded"),fo=fo||new xt({".priority":Hn},{".priority":Ce}),fo}get(e){const n=ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return Tt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pr(s,e.getCompare()):a=Hn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xt(u,c)}addToIndexes(e,n){const s=rr(this.indexes_,(i,r)=>{const o=ss(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Hn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pr(a,o.getCompare())}else return Hn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=rr(this.indexes_,i=>{if(i===Hn)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new xt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&of(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rs||(Rs=new B(new Ke(el),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rs}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rs:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Rs:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=J(e);if(s===null)return n;{S(J(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rf(this.getPriority().val())+":"),this.forEachChild(Ce,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ri?-1:0}withIndex(e){if(e===Zn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ce),i=n.getIterator(Ce);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mE extends B{constructor(){super(new Ke(el),B.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ri=new mE;Object.defineProperties(Y,{MIN:{value:new Y(rs,B.EMPTY_NODE)},MAX:{value:new Y(Mn,Ri)}});sf.__EMPTY_NODE=B.EMPTY_NODE;Pe.__childrenNodeConstructor=B;dE(Ri);fE(Ri);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=!0;function xe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,xe(e))}if(!(t instanceof Array)&&yE){const n=[];let s=!1;if(Ve(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=pr(n,uE,o=>o.name,el);if(s){const o=pr(n,Ce.getCompare());return new B(r,xe(e),new xt({".priority":o},{".priority":Ce}))}else return new B(r,xe(e),xt.Default)}else{let n=B.EMPTY_NODE;return Ve(t,(s,i)=>{if(Tt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}hE(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE extends jr{constructor(e){super(),this.indexPath_=e,S(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Un(e.name,n.name):r}makePost(e,n){const s=xe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ri);return new Y(Mn,e)}toString(){return ri(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE extends jr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Un(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=xe(e);return new Y(n,s)}toString(){return".value"}}const EE=new bE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){return{type:"value",snapshotNode:t}}function oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ai(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ai(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(oi(n,s)):o.trackChildChange(li(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,r)=>{n.hasChild(i)||s.trackChildChange(ai(i,r))}),n.isLeafNode()||n.forEachChild(Ce,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(li(i,r,o))}else s.trackChildChange(oi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ci.getStartPost_(e),this.endPost_=ci.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(Ce,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.rangedFilter_=new ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,_)=>d(_,h)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(r,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(li(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ai(n,d));const R=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(oi(h.name,h.node)),R.updateImmediateChild(h.name,h.node)):R}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ai(c.name,c.node)),r.trackChildChange(oi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rs}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new nl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TE(t){return t.loadsAllData()?new tl(t.getIndex()):t.hasLimit()?new CE(t):new ci(t)}function tu(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ce?n="$priority":t.index_===EE?n="$value":t.index_===Zn?n="$key":(S(t.index_ instanceof vE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_&&(e.startAt=De(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+De(t.indexStartName_))),t.endSet_&&(e.endAt=De(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+De(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Zh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_r.getListenId_(e,s),a={};this.listens_[o]=a;const l=tu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),ss(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=_r.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tu(e._queryParams),s=e._path.toString(),i=new $r;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zs(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return{value:null,children:new Map}}function cf(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=J(e);t.children.has(s)||t.children.set(s,gr());const i=t.children.get(s);e=ye(e),cf(i,e,n)}}function Go(t,e,n){t.value!==null?n(e,t.value):RE(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Go(i,r,n)})}function RE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=10*1e3,NE=30*1e3,kE=5*60*1e3;class PE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AE(e);const s=su+(NE-su)*Math.random();Hs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ve(e,(i,r)=>{r>0&&Tt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*kE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function sl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function df(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=bt.ACK_USER_WRITE,this.source=sl()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new mr(re(),n,this.revert)}}else return S(J(this.path)===e,"operationForChild called for unrelated child."),new mr(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=bt.OVERWRITE}operationForChild(e){return X(this.path)?new Dn(this.source,re(),this.snap.getImmediateChild(e)):new Dn(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=bt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Dn(this.source,re(),n.value):new os(this.source,re(),n)}else return S(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wE(o.childName,o.snapshotNode))}),As(t,i,"child_removed",e,s,n),As(t,i,"child_added",e,s,n),As(t,i,"child_moved",r,s,n),As(t,i,"child_changed",e,s,n),As(t,i,"value",e,s,n),i}function As(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>DE(t,a,l)),o.forEach(a=>{const l=ME(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ME(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DE(t,e,n){if(e.childName==null||n.childName==null)throw ms("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){return{eventCache:t,serverCache:e}}function Vs(t,e,n,s){return zr(new an(e,n,s),t.serverCache)}function hf(t,e,n,s){return zr(t.eventCache,new an(e,n,s))}function yr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ln(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;const LE=()=>(po||(po=new Ke(yb)),po);class ge{constructor(e,n=LE()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return Ve(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(X(e))return null;{const s=J(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:be(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new ge(null)}}set(e,n){if(X(e))return new ge(n,this.children);{const s=J(e),r=(this.children.get(s)||new ge(null)).set(ye(e),n),o=this.children.insert(s,r);return new ge(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(X(e))return n;{const s=J(e),r=(this.children.get(s)||new ge(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ge(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=J(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),be(n,i),s):new ge(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new ge(null))}}function js(t,e,n){if(X(e))return new ft(new ge(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Je(i,e);return r=r.updateChild(o,n),new ft(t.writeTree_.set(i,r))}else{const i=new ge(n),r=t.writeTree_.setTree(e,i);return new ft(r)}}}function Yo(t,e,n){let s=t;return Ve(n,(i,r)=>{s=js(s,be(e,i),r)}),s}function iu(t,e){if(X(e))return ft.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new ft(n)}}function Qo(t,e){return $n(t,e)!=null}function $n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function ru(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function nn(t,e){if(X(e))return t;{const n=$n(t,e);return n!=null?new ft(new ge(n)):new ft(t.writeTree_.subtree(e))}}function Jo(t){return t.writeTree_.isEmpty()}function as(t,e){return ff(re(),t.writeTree_,e)}function ff(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ff(be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e){return mf(e,t)}function FE(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=js(t.visibleWrites,e,n)),t.lastWriteId=s}function UE(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Yo(t.visibleWrites,e,n),t.lastWriteId=s}function $E(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function BE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WE(a,s.path)?i=!1:nt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return HE(t),!0;if(s.snap)t.visibleWrites=iu(t.visibleWrites,s.path);else{const a=s.children;Ve(a,l=>{t.visibleWrites=iu(t.visibleWrites,be(s.path,l))})}return!0}else return!1}function WE(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(be(t.path,n),e))return!0;return!1}function HE(t){t.visibleWrites=pf(t.allWrites,VE,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VE(t){return t.visible}function pf(t,e,n){let s=ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)nt(n,o)?(a=Je(n,o),s=js(s,a,r.snap)):nt(o,n)&&(a=Je(o,n),s=js(s,re(),r.snap.getChild(a)));else if(r.children){if(nt(n,o))a=Je(n,o),s=Yo(s,a,r.children);else if(nt(o,n))if(a=Je(o,n),X(a))s=Yo(s,re(),r.children);else{const l=ss(r.children,J(a));if(l){const c=l.getChild(ye(a));s=js(s,re(),c)}}}else throw ms("WriteRecord should have .snap or .children")}}return s}function _f(t,e,n,s,i){if(!s&&!i){const r=$n(t.visibleWrites,e);if(r!=null)return r;{const o=nn(t.visibleWrites,e);if(Jo(o))return n;if(n==null&&!Qo(o,re()))return null;{const a=n||B.EMPTY_NODE;return as(o,a)}}}else{const r=nn(t.visibleWrites,e);if(!i&&Jo(r))return n;if(!i&&n==null&&!Qo(r,re()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(nt(c.path,e)||nt(e,c.path))},a=pf(t.allWrites,o,e),l=n||B.EMPTY_NODE;return as(a,l)}}}function jE(t,e,n){let s=B.EMPTY_NODE;const i=$n(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=nn(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=as(nn(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),ru(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=nn(t.visibleWrites,e);return ru(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zE(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(Qo(t.visibleWrites,r))return null;{const o=nn(t.visibleWrites,r);return Jo(o)?i.getChild(n):as(o,i.getChild(n))}}function KE(t,e,n,s){const i=be(e,n),r=$n(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=nn(t.visibleWrites,i);return as(o,s.getNode().getImmediateChild(n))}else return null}function qE(t,e){return $n(t.visibleWrites,e)}function GE(t,e,n,s,i,r,o){let a;const l=nn(t.visibleWrites,e),c=$n(l,re());if(c!=null)a=c;else if(n!=null)a=as(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=h.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=h.getNext();return u}else return[]}function YE(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function vr(t,e,n,s){return _f(t.writeTree,t.treePath,e,n,s)}function rl(t,e){return jE(t.writeTree,t.treePath,e)}function ou(t,e,n,s){return zE(t.writeTree,t.treePath,e,n,s)}function br(t,e){return qE(t.writeTree,be(t.treePath,e))}function QE(t,e,n,s,i,r){return GE(t.writeTree,t.treePath,e,n,s,i,r)}function ol(t,e,n){return KE(t.writeTree,t.treePath,e,n)}function gf(t,e){return mf(be(t.treePath,e),t.writeTree)}function mf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,li(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ai(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,oi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,li(s,e.snapshotNode,i.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const yf=new XE;class al{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ol(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ln(this.viewCache_),r=QE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return{filter:t}}function eI(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tI(t,e,n,s,i){const r=new JE;let o,a;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=Xo(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Er(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=sI(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=oI(t,e,c.path,s,i,r):o=iI(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===bt.LISTEN_COMPLETE)o=rI(t,e,n.path,s,r);else throw ms("Unknown operation type: "+n.type);const l=r.getChanges();return nI(e,o,l),{viewCache:o,changes:l}}function nI(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=yr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(IE(yr(e)))}}function vf(t,e,n,s,i,r){const o=e.eventCache;if(br(s,n)!=null)return e;{let a,l;if(X(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ln(e),u=c instanceof B?c:B.EMPTY_NODE,d=rl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=vr(s,Ln(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){S(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ou(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ye(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ou(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ol(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Vs(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Er(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=J(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const m=ye(n),C=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),_,C,m,yf,null)}const d=hf(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),h=new al(i,d,r);return vf(t,d,n,i,h,a)}function Xo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new al(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Vs(e,c,!0,t.filter.filtersNodes());else{const d=J(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),_=a.getNode().getImmediateChild(d);let m;if(X(h))m=s;else{const R=u.getCompleteChild(d);R!=null?Ja(h)===".priority"&&R.getChild(tf(h)).isEmpty()?m=R:m=R.updateChild(h,s):m=B.EMPTY_NODE}if(_.equals(m))l=e;else{const R=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=Vs(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function au(t,e){return t.eventCache.isCompleteForChild(e)}function sI(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=be(n,l);au(e,J(u))&&(a=Xo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=be(n,l);au(e,J(u))||(a=Xo(t,a,u,c,i,r,o))}),a}function lu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new ge(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),m=lu(t,_,h);l=Er(t,l,new oe(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!_){const m=e.serverCache.getNode().getImmediateChild(d),R=lu(t,m,h);l=Er(t,l,new oe(d),R,i,r,o,a)}}),l}function iI(t,e,n,s,i,r,o){if(br(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Er(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new ge(null);return l.getNode().forEachChild(Zn,(u,d)=>{c=c.set(new oe(u),d)}),Zo(t,e,n,c,i,r,a,o)}else return e}else{let c=new ge(null);return s.foreach((u,d)=>{const h=be(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Zo(t,e,n,c,i,r,a,o)}}function rI(t,e,n,s,i){const r=e.serverCache,o=hf(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return vf(t,o,n,s,yf,i)}function oI(t,e,n,s,i,r){let o;if(br(s,n)!=null)return e;{const a=new al(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vr(s,Ln(e));else{const d=e.serverCache.getNode();S(d instanceof B,"serverChildren would be complete if leaf node"),u=rl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=J(n);let d=ol(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vr(s,Ln(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||br(s,re())!=null,Vs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tl(s.getIndex()),r=TE(s);this.processor_=ZE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),i.filtersNodes()),d=new an(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=zr(d,u),this.eventGenerator_=new OE(this.query_)}get query(){return this.query_}}function lI(t){return yr(t.viewCache_)}function cI(t,e){const n=Ln(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function cu(t,e,n,s){e.type===bt.MERGE&&e.source.queryId!==null&&(S(Ln(t.viewCache_),"We should always have a full cache before handling merges"),S(yr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tI(t.processor_,i,e,n,s);return eI(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uI(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uI(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return xE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;class dI{constructor(){this.views=new Map}}function hI(t){S(!uu,"__referenceConstructor has already been defined"),uu=t}function ll(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),cu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(cu(o,e,n,s));return r}}function fI(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=vr(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=rl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=zr(new an(a,l,!1),new an(s,i,!1));return new aI(e,c)}return o}function ui(t,e){let n=null;for(const s of t.views.values())n=n||cI(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;function pI(t){S(!du,"__referenceConstructor has already been defined"),du=t}class hu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=YE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _I(t,e,n,s,i){return FE(t.pendingWriteTree_,e,n,s,i),i?Ni(t,new Dn(sl(),e,n)):[]}function gI(t,e,n,s){UE(t.pendingWriteTree_,e,n,s);const i=ge.fromObject(n);return Ni(t,new os(sl(),e,i))}function bn(t,e,n=!1){const s=$E(t.pendingWriteTree_,e);if(BE(t.pendingWriteTree_,e)){let r=new ge(null);return s.snap!=null?r=r.set(re(),!0):Ve(s.children,o=>{r=r.set(new oe(o),!0)}),Ni(t,new mr(s.path,r,n))}else return[]}function Ai(t,e,n){return Ni(t,new Dn(uf(),e,n))}function mI(t,e,n){const s=ge.fromObject(n);return Ni(t,new os(uf(),e,s))}function yI(t,e,n,s){const i=wf(t,s);if(i!=null){const r=Cf(i),o=r.path,a=r.queryId,l=Je(o,e),c=new Dn(df(a),l,n);return Tf(t,o,c)}else return[]}function vI(t,e,n,s){const i=wf(t,s);if(i){const r=Cf(i),o=r.path,a=r.queryId,l=Je(o,e),c=ge.fromObject(n),u=new os(df(a),l,c);return Tf(t,o,u)}else return[]}function bf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=ui(a,l);if(c)return c});return _f(i,e,r,n,!0)}function bI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Je(c,n);s=s||ui(u,d)});let i=t.syncPointTree_.get(n);i?s=s||ui(i,re()):(i=new dI,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new an(s,!0,!1):null,a=il(t.pendingWriteTree_,e._path),l=fI(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return lI(l)}function Ni(t,e){return Ef(e,t.syncPointTree_,null,il(t.pendingWriteTree_,re()))}function Ef(t,e,n,s){if(X(t.path))return If(t,e,n,s);{const i=e.get(re());n==null&&i!=null&&(n=ui(i,re()));let r=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gf(s,o);r=r.concat(Ef(a,l,c,u))}return i&&(r=r.concat(ll(i,t,s,n))),r}}function If(t,e,n,s){const i=e.get(re());n==null&&i!=null&&(n=ui(i,re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gf(s,o),u=t.operationForChild(o);u&&(r=r.concat(If(u,a,l,c)))}),i&&(r=r.concat(ll(i,t,s,n))),r}function wf(t,e){return t.tagToQueryMap.get(e)}function Cf(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Tf(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=il(t.pendingWriteTree_,e);return ll(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cl(n)}node(){return this.node_}}class ul{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new ul(this.syncTree_,n)}node(){return bf(this.syncTree_,this.path_)}}const EI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fu=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return II(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wI(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},II=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},wI=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Sf=function(t,e,n,s){return dl(e,new ul(n,t),s)},CI=function(t,e,n){return dl(t,new cl(e),n)};function dl(t,e,n){const s=t.getPriority().val(),i=fu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=fu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Pe(i))),o.forEachChild(Ce,(a,l)=>{const c=dl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=J(n);for(;i!==null;){const r=ss(s.node.children,i)||{children:{},childCount:0};s=new hl(i,s,r),n=ye(n),i=J(n)}return s}function Is(t){return t.node.value}function Rf(t,e){t.node.value=e,ea(t)}function Af(t){return t.node.childCount>0}function TI(t){return Is(t)===void 0&&!Af(t)}function Kr(t,e){Ve(t.node.children,(n,s)=>{e(new hl(n,t,s))})}function Nf(t,e,n,s){n&&!s&&e(t),Kr(t,i=>{Nf(i,e,!0,s)}),n&&s&&e(t)}function SI(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ki(t){return new oe(t.parent===null?t.name:ki(t.parent)+"/"+t.name)}function ea(t){t.parent!==null&&RI(t.parent,t.name,t)}function RI(t,e,n){const s=TI(n),i=Tt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ea(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ea(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=/[\[\].#$\/\u0000-\u001F\u007F]/,NI=/[\[\].#$\u0000-\u001F\u007F]/,_o=10*1024*1024,pl=function(t){return typeof t=="string"&&t.length!==0&&!AI.test(t)},kf=function(t){return typeof t=="string"&&t.length!==0&&!NI.test(t)},kI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kf(t)},PI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ka(t)||t&&typeof t=="object"&&Tt(t,".sv")},_l=function(t,e,n){const s=n instanceof oe?new tE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fn(s));if(typeof e=="function")throw new Error(t+"contains a function "+fn(s)+" with contents = "+e.toString());if(Ka(e))throw new Error(t+"contains "+e.toString()+" "+fn(s));if(typeof e=="string"&&e.length>_o/3&&Br(e)>_o)throw new Error(t+"contains a string greater than "+_o+" utf8 bytes "+fn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ve(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pl(o)))throw new Error(t+" contains an invalid key ("+o+") "+fn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nE(s,o),_l(t,a,s),sE(s)}),i&&r)throw new Error(t+' contains ".value" child '+fn(s)+" in addition to actual children.")}},OI=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ri(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!pl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&nt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},xI=function(t,e,n,s){if(s&&e===void 0)return;const i=Pa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ve(e,(o,a)=>{const l=new oe(o);if(_l(i,a,be(n,l)),Ja(l)===".priority"&&!PI(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),OI(i,r)},Pf=function(t,e,n,s){if(!(s&&n===void 0)&&!kf(n))throw new Error(Pa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pf(t,e,n,s)},DI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kI(n))throw new Error(Pa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function FI(t,e,n){gl(t,n),Of(t,s=>Xa(s,e))}function $t(t,e,n){gl(t,n),Of(t,s=>nt(s,e)||nt(e,s))}function Of(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Tn&&Le("event: "+n.toString()),Es(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="repo_interrupt",BI=25;class WI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new hl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HI(t,e,n){if(t.stats_=Ya(t.repoInfo_),t.forceRestClient_||Cb())t.server_=new _r(t.repoInfo_,(s,i,r,o)=>{pu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_u(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(s,i,r,o)=>{pu(t,s,i,r,o)},s=>{_u(t,s)},s=>{jI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=kb(t.repoInfo_,()=>new PE(t.stats_,t.server_)),t.infoData_=new SE,t.infoSyncTree_=new hu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ai(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yl(t,"connected",!1),t.serverSyncTree_=new hu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);$t(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VI(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ml(t){return EI({timestamp:VI(t)})}function pu(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=rr(n,c=>xe(c));o=vI(t.serverSyncTree_,r,l,i)}else{const l=xe(n);o=yI(t.serverSyncTree_,r,l,i)}else if(s){const l=rr(n,c=>xe(c));o=mI(t.serverSyncTree_,r,l)}else{const l=xe(n);o=Ai(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=di(t,r)),$t(t.eventQueue_,a,o)}function _u(t,e){yl(t,"connected",e),e===!1&&qI(t)}function jI(t,e){Ve(e,(n,s)=>{yl(t,n,s)})}function yl(t,e,n){const s=new oe("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Ai(t.infoSyncTree_,s,i);$t(t.eventQueue_,s,r)}function xf(t){return t.nextWriteId_++}function zI(t,e){const n=bI(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=xe(s).withIndex(e._queryParams.getIndex()),r=Ai(t.serverSyncTree_,e._path,i);return FI(t.eventQueue_,e._path,r),Promise.resolve(i)},s=>(qr(t,"get for query "+De(e)+" failed: "+s),Promise.reject(new Error(s))))}function KI(t,e,n,s){qr(t,"update",{path:e.toString(),value:n});let i=!0;const r=ml(t),o={};if(Ve(n,(a,l)=>{i=!1,o[a]=Sf(be(e,a),xe(l),t.serverSyncTree_,r)}),i)Le("update() called with empty data.  Don't do anything."),gu(t,s,"ok",void 0);else{const a=xf(t),l=gI(t.serverSyncTree_,e,o,a);gl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||qe("update at "+e+" failed: "+c);const h=bn(t.serverSyncTree_,a,!d),_=h.length>0?di(t,e):e;$t(t.eventQueue_,_,h),gu(t,s,c,u)}),Ve(n,c=>{const u=Uf(t,be(e,c));di(t,u)}),$t(t.eventQueue_,e,[])}}function qI(t){qr(t,"onDisconnectEvents");const e=ml(t),n=gr();Go(t.onDisconnect_,re(),(i,r)=>{const o=Sf(i,r,t.serverSyncTree_,e);cf(n,i,o)});let s=[];Go(n,re(),(i,r)=>{s=s.concat(Ai(t.serverSyncTree_,i,r));const o=Uf(t,i);di(t,o)}),t.onDisconnect_=gr(),$t(t.eventQueue_,re(),s)}function GI(t){t.persistentConnection_&&t.persistentConnection_.interrupt($I)}function qr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function gu(t,e,n,s){e&&Es(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Mf(t,e,n){return bf(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function vl(t,e=t.transactionQueueTree_){if(e||Gr(t,e),Is(e)){const n=Lf(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YI(t,ki(e),n)}else Af(e)&&Kr(e,n=>{vl(t,n)})}function YI(t,e,n){const s=n.map(c=>c.currentWriteId),i=Mf(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(bn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Gr(t,fl(t.transactionQueueTree_,e)),vl(t,t.transactionQueueTree_),$t(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Es(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}di(t,e)}},o)}function di(t,e){const n=Df(t,e),s=ki(n),i=Lf(t,n);return QI(t,i,s),s}function QI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=BI)u=!0,d="maxretry",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Mf(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){_l("transaction failed: Data returned ",_,l.path);let m=xe(_);typeof _=="object"&&_!=null&&Tt(_,".priority")||(m=m.updatePriority(h.getPriority()));const C=l.currentWriteId,k=ml(t),M=CI(m,h,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=M,l.currentWriteId=xf(t),o.splice(o.indexOf(C),1),i=i.concat(_I(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(bn(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(bn(t.serverSyncTree_,l.currentWriteId,!0))}$t(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Gr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Es(s[a]);vl(t,t.transactionQueueTree_)}function Df(t,e){let n,s=t.transactionQueueTree_;for(n=J(e);n!==null&&Is(s)===void 0;)s=fl(s,n),e=ye(e),n=J(e);return s}function Lf(t,e){const n=[];return Ff(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ff(t,e,n){const s=Is(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Kr(e,i=>{Ff(t,i,n)})}function Gr(t,e){const n=Is(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Rf(e,n.length>0?n:void 0)}Kr(e,s=>{Gr(t,s)})}function Uf(t,e){const n=ki(Df(t,e)),s=fl(t.transactionQueueTree_,e);return SI(s,i=>{go(t,i)}),go(t,s),Nf(s,i=>{go(t,i)}),n}function go(t,e){const n=Is(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rf(e,void 0):n.length=r+1,$t(t.eventQueue_,ki(e),i);for(let o=0;o<s.length;o++)Es(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function XI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const mu=function(t,e){const n=ZI(t),s=n.namespace;n.domain==="firebase.com"&&xn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rb(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},ZI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=JI(t.substring(u,d)));const h=XI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:Ja(this._path)}get ref(){return new ln(this._repo,this._path)}get _queryIdentifier(){const e=nu(this._queryParams),n=qa(e);return n==="{}"?"default":n}get _queryObject(){return nu(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof bl))return!1;const n=this._repo===e._repo,s=Xa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zb(this._path)}}class ln extends bl{constructor(e,n){super(e,n,new nl,!1)}get parent(){const e=tf(this._path);return e===null?null:new ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ir{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=Fn(this.ref,e);return new Ir(this._node.getChild(n),s,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ir(i,Fn(this.ref,s),Ce)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hi(t,e){return t=pt(t),t._checkNotDeleted("ref"),e!==void 0?Fn(t._root,e):t._root}function Fn(t,e){return t=pt(t),J(t._path)===null?MI("child","path",e,!1):Pf("child","path",e,!1),new ln(t._repo,be(t._path,e))}function ew(t,e){xI("update",e,t._path,!1);const n=new $r;return KI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function wr(t){return t=pt(t),zI(t._repo,t).then(e=>new Ir(e,new ln(t._repo,t._path),t._queryParams.getIndex()))}hI(ln);pI(ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let nw=!1;function sw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mu(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[tw]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=mu(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new zo(zo.OWNER):new Sb(t.name,t.options,e);DI("Invalid Firebase Database URL",o),X(o.path)||xn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=rw(a,t,u,new Tb(t.name,n));return new ow(d,t)}function iw(t,e){const n=ta[e];(!n||n[t.key]!==t)&&xn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GI(t),delete n[t.key]}function rw(t,e,n,s){let i=ta[e.name];i||(i={},ta[e.name]=i);let r=i[t.toURLString()];return r&&xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new WI(t,nw,n,s),i[t.toURLString()]=r,r}class ow{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ln(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xn("Cannot call "+e+" on a deleted database.")}}function fi(t=th(),e){return Da(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){db(gi),is(new An("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),tn($c,Bc,t),tn($c,Bc,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aw();var je=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const lw={methods:Ue({},Ur(kn,["setUser"])),mounted(){const t=window.localStorage.getItem("keep-logged"),e=Ci(),n=fi(),s=hi(n);Zy(e,i=>{i&&t&&wr(Fn(s,`users/${i.uid}`)).then(r=>{r.val()?this.setUser(Ue(lt(Ue({},i),{isAuth:!0}),r.val())):this.setUser(lt(Ue({},i),{isAuth:!0})),this.$router.push("/logged")})})}};function cw(t,e,n,s,i,r){const o=Se("router-view");return se(),Et(o)}var uw=je(lw,[["render",cw]]);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $f=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ws=t=>$f?Symbol(t):"_vr_"+t,dw=ws("rvlm"),yu=ws("rvd"),El=ws("r"),Bf=ws("rl"),na=ws("rvl"),Kn=typeof window!="undefined";function hw(t){return t.__esModule||$f&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function mo(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const zs=()=>{},fw=/\/$/,pw=t=>t.replace(fw,"");function yo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=yw(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function _w(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ls(e.matched[s],n.matched[i])&&Wf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mw(t[n],e[n]))return!1;return!0}function mw(t,e){return Array.isArray(t)?bu(t,e):Array.isArray(e)?bu(e,t):t===e}function bu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function yw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function vw(t){if(!t)if(Kn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pw(t)}const bw=/^[^#]+#/;function Ew(t,e){return t.replace(bw,"#")+e}function Iw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ww(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Iw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Eu(t,e){return(history.state?history.state.position-e:-1)+t}const sa=new Map;function Cw(t,e){sa.set(t,e)}function Tw(t){const e=sa.get(t);return sa.delete(t),e}let Sw=()=>location.protocol+"//"+location.host;function Hf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),vu(l,"")}return vu(n,t)+s+i}function Rw(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const _=Hf(t,location),m=n.value,R=e.value;let C=0;if(h){if(n.value=_,e.value=h,o&&o===m){o=null;return}C=R?h.position-R.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:C,type:pi.pop,direction:C?C>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function c(h){i.push(h);const _=()=>{const m=i.indexOf(h);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:h}=window;!h.state||h.replaceState(de({},h.state,{scroll:Yr()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Iu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Yr():null}}function Aw(t){const{history:e,location:n}=window,s={value:Hf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Sw()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](h)}}function o(l,c){const u=de({},e.state,Iu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=de({},i.value,e.state,{forward:l,scroll:Yr()});r(u.current,u,!0);const d=de({},Iu(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Nw(t){t=vw(t);const e=Aw(t),n=Rw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=de({location:"",base:t,go:s,createHref:Ew.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function kw(t){return typeof t=="string"||t&&typeof t=="object"}function Vf(t){return typeof t=="string"||typeof t=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jf=ws("nf");var wu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wu||(wu={}));function cs(t,e){return de(new Error,{type:t,[jf]:!0},e)}function jt(t,e){return t instanceof Error&&jf in t&&(e==null||!!(t.type&e))}const Cu="[^/]+?",Pw={sensitive:!1,strict:!1,start:!0,end:!0},Ow=/[.+*?^${}()[\]/\\]/g;function xw(t,e){const n=de({},Pw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let _=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Ow,"\\$&"),_+=40;else if(h.type===1){const{value:m,repeatable:R,optional:C,regexp:k}=h;r.push({name:m,repeatable:R,optional:C});const M=k||Cu;if(M!==Cu){_+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+K.message)}}let F=R?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(F=C&&c.length<2?`(?:/${F})`:"/"+F),C&&(F+="?"),i+=F,_+=20,C&&(_+=-8),R&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const _=u[h]||"",m=r[h-1];d[m.name]=_&&m.repeatable?_.split("/"):_}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const _ of h)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:R,optional:C}=_,k=m in c?c[m]:"";if(Array.isArray(k)&&!R)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(k)?k.join("/"):k;if(!M)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Mw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Dw(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Mw(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const Lw={type:0,value:""},Fw=/[a-zA-Z0-9_]/;function Uw(t){if(!t)return[[]];if(t==="/")return[[Lw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Fw.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function $w(t,e,n){const s=xw(Uw(t.path),n),i=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Bw(t,e){const n=[],s=new Map;e=Su({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const _=!h,m=Hw(u);m.aliasOf=h&&h.record;const R=Su(e,u),C=[m];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of F)C.push(de({},m,{components:h?h.record.components:m.components,path:K,aliasOf:h?h.record:m}))}let k,M;for(const F of C){const{path:K}=F;if(d&&K[0]!=="/"){const W=d.record.path,j=W[W.length-1]==="/"?"":"/";F.path=d.record.path+(K&&j+K)}if(k=$w(F,d,R),h?h.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),_&&u.name&&!Tu(k)&&o(u.name)),"children"in m){const W=m.children;for(let j=0;j<W.length;j++)r(W[j],k,h&&h.children[j])}h=h||k,l(k)}return M?()=>{o(M)}:zs}function o(u){if(Vf(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Dw(u,n[d])>=0&&(u.record.path!==n[d].record.path||!zf(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Tu(u)&&s.set(u.record.name,u)}function c(u,d){let h,_={},m,R;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw cs(1,{location:u});R=h.record.name,_=de(Ww(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),m=h.stringify(_)}else if("path"in u)m=u.path,h=n.find(M=>M.re.test(m)),h&&(_=h.parse(m),R=h.record.name);else{if(h=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw cs(1,{location:u,currentLocation:d});R=h.record.name,_=de({},d.params,u.params),m=h.stringify(_)}const C=[];let k=h;for(;k;)C.unshift(k.record),k=k.parent;return{name:R,path:m,params:_,matched:C,meta:jw(C)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ww(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Vw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Tu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jw(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Su(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zf(t,e){return e.children.some(n=>n===t||zf(t,n))}const Kf=/#/g,zw=/&/g,Kw=/\//g,qw=/=/g,Gw=/\?/g,qf=/\+/g,Yw=/%5B/g,Qw=/%5D/g,Gf=/%5E/g,Jw=/%60/g,Yf=/%7B/g,Xw=/%7C/g,Qf=/%7D/g,Zw=/%20/g;function Il(t){return encodeURI(""+t).replace(Xw,"|").replace(Yw,"[").replace(Qw,"]")}function eC(t){return Il(t).replace(Yf,"{").replace(Qf,"}").replace(Gf,"^")}function ia(t){return Il(t).replace(qf,"%2B").replace(Zw,"+").replace(Kf,"%23").replace(zw,"%26").replace(Jw,"`").replace(Yf,"{").replace(Qf,"}").replace(Gf,"^")}function tC(t){return ia(t).replace(qw,"%3D")}function nC(t){return Il(t).replace(Kf,"%23").replace(Gw,"%3F")}function sC(t){return t==null?"":nC(t).replace(Kw,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(qf," "),o=r.indexOf("="),a=Cr(o<0?r:r.slice(0,o)),l=o<0?null:Cr(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ru(t){let e="";for(let n in t){const s=t[n];if(n=tC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&ia(r)):[s&&ia(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function rC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function Ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(cs(4,{from:n,to:e})):d instanceof Error?a(d):kw(d)?a(cs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function vo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(oC(a)){const c=(a.__vccOpts||a)[e];c&&i.push(qt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hw(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&qt(h,n,s,r,o)()}))}}return i}function oC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Au(t){const e=Mt(El),n=Mt(Bf),s=ut(()=>e.resolve(Ms(t.to))),i=ut(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(ls.bind(null,u));if(h>-1)return h;const _=Nu(l[c-2]);return c>1&&Nu(u)===_&&d[d.length-1].path!==_?d.findIndex(ls.bind(null,l[c-2])):h}),r=ut(()=>i.value>-1&&uC(n.params,s.value.params)),o=ut(()=>i.value>-1&&i.value===n.matched.length-1&&Wf(n.params,s.value.params));function a(l={}){return cC(l)?e[Ms(t.replace)?"replace":"push"](Ms(t.to)).catch(zs):Promise.resolve()}return{route:s,href:ut(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const aC=_d({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Au,setup(t,{slots:e}){const n=ps(Au(t)),{options:s}=Mt(El),i=ut(()=>({[ku(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ku(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ld("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),lC=aC;function cC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Nu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ku=(t,e,n)=>t!=null?t:e!=null?e:n,dC=_d({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Mt(na),i=ut(()=>t.route||s.value),r=Mt(yu,0),o=ut(()=>i.value.matched[r]);Hi(yu,r+1),Hi(dw,o),Hi(na,i);const a=va();return Fs(()=>[a.value,o.value,t.name],([l,c,u],[d,h,_])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!ls(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Pu(n.default,{Component:u,route:l});const h=c.props[t.name],_=h?h===!0?l.params:typeof h=="function"?h(l):h:null,R=Ld(u,de({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Pu(n.default,{Component:R,route:l})||R}}});function Pu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hC=dC;function fC(t){const e=Bw(t.routes,t),n=t.parseQuery||iC,s=t.stringifyQuery||Ru,i=t.history,r=Ns(),o=Ns(),a=Ns(),l=Yp(Vt);let c=Vt;Kn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mo.bind(null,y=>""+y),d=mo.bind(null,sC),h=mo.bind(null,Cr);function _(y,O){let A,x;return Vf(y)?(A=e.getRecordMatcher(y),x=O):x=y,e.addRoute(x,A)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function R(){return e.getRoutes().map(y=>y.record)}function C(y){return!!e.getRecordMatcher(y)}function k(y,O){if(O=de({},O||l.value),typeof y=="string"){const G=yo(n,y,O.path),f=e.resolve({path:G.path},O),p=i.createHref(G.fullPath);return de(G,f,{params:h(f.params),hash:Cr(G.hash),redirectedFrom:void 0,href:p})}let A;if("path"in y)A=de({},y,{path:yo(n,y.path,O.path).path});else{const G=de({},y.params);for(const f in G)G[f]==null&&delete G[f];A=de({},y,{params:d(y.params)}),O.params=d(O.params)}const x=e.resolve(A,O),ce=y.hash||"";x.params=u(h(x.params));const _e=_w(s,de({},y,{hash:eC(ce),path:x.path})),Q=i.createHref(_e);return de({fullPath:_e,hash:ce,query:s===Ru?rC(y.query):y.query||{}},x,{redirectedFrom:void 0,href:Q})}function M(y){return typeof y=="string"?yo(n,y,l.value.path):de({},y)}function F(y,O){if(c!==y)return cs(8,{from:O,to:y})}function K(y){return z(y)}function W(y){return K(de(M(y),{replace:!0}))}function j(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:A}=O;let x=typeof A=="function"?A(y):A;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=M(x):{path:x},x.params={}),de({query:y.query,hash:y.hash,params:y.params},x)}}function z(y,O){const A=c=k(y),x=l.value,ce=y.state,_e=y.force,Q=y.replace===!0,G=j(A);if(G)return z(de(M(G),{state:ce,force:_e,replace:Q}),O||A);const f=A;f.redirectedFrom=O;let p;return!_e&&gw(s,x,A)&&(p=cs(16,{to:f,from:x}),Bn(x,x,!0,!1)),(p?Promise.resolve(p):ne(f,x)).catch(g=>jt(g)?jt(g,2)?g:Ge(g):pe(g,f,x)).then(g=>{if(g){if(jt(g,2))return z(de(M(g.to),{state:ce,force:_e,replace:Q}),O||f)}else g=Ae(f,x,!0,Q,ce);return Te(f,x,g),g})}function ae(y,O){const A=F(y,O);return A?Promise.reject(A):Promise.resolve()}function ne(y,O){let A;const[x,ce,_e]=pC(y,O);A=vo(x.reverse(),"beforeRouteLeave",y,O);for(const G of x)G.leaveGuards.forEach(f=>{A.push(qt(f,y,O))});const Q=ae.bind(null,y,O);return A.push(Q),Vn(A).then(()=>{A=[];for(const G of r.list())A.push(qt(G,y,O));return A.push(Q),Vn(A)}).then(()=>{A=vo(ce,"beforeRouteUpdate",y,O);for(const G of ce)G.updateGuards.forEach(f=>{A.push(qt(f,y,O))});return A.push(Q),Vn(A)}).then(()=>{A=[];for(const G of y.matched)if(G.beforeEnter&&!O.matched.includes(G))if(Array.isArray(G.beforeEnter))for(const f of G.beforeEnter)A.push(qt(f,y,O));else A.push(qt(G.beforeEnter,y,O));return A.push(Q),Vn(A)}).then(()=>(y.matched.forEach(G=>G.enterCallbacks={}),A=vo(_e,"beforeRouteEnter",y,O),A.push(Q),Vn(A))).then(()=>{A=[];for(const G of o.list())A.push(qt(G,y,O));return A.push(Q),Vn(A)}).catch(G=>jt(G,8)?G:Promise.reject(G))}function Te(y,O,A){for(const x of a.list())x(y,O,A)}function Ae(y,O,A,x,ce){const _e=F(y,O);if(_e)return _e;const Q=O===Vt,G=Kn?history.state:{};A&&(x||Q?i.replace(y.fullPath,de({scroll:Q&&G&&G.scroll},ce)):i.push(y.fullPath,ce)),l.value=y,Bn(y,O,A,Q),Ge()}let Ee;function ot(){Ee=i.listen((y,O,A)=>{const x=k(y),ce=j(x);if(ce){z(de(ce,{replace:!0}),x).catch(zs);return}c=x;const _e=l.value;Kn&&Cw(Eu(_e.fullPath,A.delta),Yr()),ne(x,_e).catch(Q=>jt(Q,12)?Q:jt(Q,2)?(z(Q.to,x).then(G=>{jt(G,20)&&!A.delta&&A.type===pi.pop&&i.go(-1,!1)}).catch(zs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),pe(Q,x,_e))).then(Q=>{Q=Q||Ae(x,_e,!1),Q&&(A.delta?i.go(-A.delta,!1):A.type===pi.pop&&jt(Q,20)&&i.go(-1,!1)),Te(x,_e,Q)}).catch(zs)})}let Ne=Ns(),St=Ns(),ke;function pe(y,O,A){Ge(y);const x=St.list();return x.length?x.forEach(ce=>ce(y,O,A)):console.error(y),Promise.reject(y)}function le(){return ke&&l.value!==Vt?Promise.resolve():new Promise((y,O)=>{Ne.add([y,O])})}function Ge(y){return ke||(ke=!y,ot(),Ne.list().forEach(([O,A])=>y?A(y):O()),Ne.reset()),y}function Bn(y,O,A,x){const{scrollBehavior:ce}=t;if(!Kn||!ce)return Promise.resolve();const _e=!A&&Tw(Eu(y.fullPath,0))||(x||!A)&&history.state&&history.state.scroll||null;return sd().then(()=>ce(y,O,_e)).then(Q=>Q&&ww(Q)).catch(Q=>pe(Q,y,O))}const Rt=y=>i.go(y);let _t;const Ze=new Set;return{currentRoute:l,addRoute:_,removeRoute:m,hasRoute:C,getRoutes:R,resolve:k,options:t,push:K,replace:W,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:St.add,isReady:le,install(y){const O=this;y.component("RouterLink",lC),y.component("RouterView",hC),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ms(l)}),Kn&&!_t&&l.value===Vt&&(_t=!0,K(i.location).catch(ce=>{}));const A={};for(const ce in Vt)A[ce]=ut(()=>l.value[ce]);y.provide(El,O),y.provide(Bf,ps(A)),y.provide(na,l);const x=y.unmount;Ze.add(y),y.unmount=function(){Ze.delete(y),Ze.size<1&&(c=Vt,Ee&&Ee(),l.value=Vt,_t=!1,ke=!1),x()}}}}function Vn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function pC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ls(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ls(c,l))||i.push(l))}return[n,s,i]}const _C={name:"GameAlert",data:()=>({showTooltip:!1})},wl=t=>(_s("data-v-35f4aad6"),t=t(),gs(),t),gC={class:"game-alert-out"},mC=wl(()=>U("div",{class:"item"},[U("h3",null,"Skins desabilitadas"),U("span",null,[U("i",{class:"fas fa-clock"}),Ta(" 26/05/2022 18:47 ")]),U("p",null,"Desabilitamos temporariamente as skins a seguir enquanto trabalhamos em uma solu\xE7\xE3o para o conflito: Kayn Odisseia")],-1)),yC=wl(()=>U("div",{class:"item"},[U("h3",null,"Presentes"),U("span",null,[U("i",{class:"fas fa-clock"}),Ta(" 12/05/2021 19:03 ")]),U("p",null,"Presentes de conte\xFAdo (campe\xF5es, skins, etc) est\xE3o temporariamente indispon\xEDveis enquanto trabalhamos na solu\xE7\xE3o de um problema. Presentes de RP podem ser enviados normalmente.")],-1)),vC=wl(()=>U("h6",null,"MAIS DETALHES",-1)),bC=[mC,yC,vC];function EC(t,e,n,s,i,r){return se(),we("span",gC,[U("div",{class:"game-alert",onMouseenter:e[0]||(e[0]=o=>t.showTooltip=!0),onMousedown:e[1]||(e[1]=o=>t.showTooltip=!1)},null,32),t.showTooltip?(se(),we("div",{key:0,class:"game-alert-tooltip",onMouseenter:e[2]||(e[2]=o=>t.showTooltip=!0),onMouseleave:e[3]||(e[3]=o=>t.showTooltip=!1)},bC,32)):$s("",!0)])}var Jf=je(_C,[["render",EC],["__scopeId","data-v-35f4aad6"]]);const IC={name:"OutlinedButton",emits:["click"],props:{icon:{type:String,default:""}}},wC={class:"btn"};function CC(t,e,n,s,i,r){return se(),we("div",{class:"button",onClick:e[0]||(e[0]=Aa(o=>t.$emit("click"),["stop"]))},[U("button",wC,[U("i",{class:Lt(n.icon)},null,2)]),J_(t.$slots,"default",{},void 0,!0)])}var Xf=je(IC,[["render",CC],["__scopeId","data-v-e9951f86"]]);const TC={name:"LoginImageContainer",components:{GameAlert:Jf,OutlinedButton:Xf}},SC={class:"login-image-container"};function RC(t,e,n,s,i,r){const o=Se("game-alert"),a=Se("outlined-button");return se(),we("div",SC,[te(o),te(a,{icon:"fas fa-user"})])}var AC=je(TC,[["render",RC],["__scopeId","data-v-5fbc2e1a"]]);const NC={name:"RiotInput",emits:["update:modelValue"],props:{name:{type:String,default:""},label:{type:String,default:""},type:{type:String,default:""},error:{type:Boolean,default:!1},modelValue:String},computed:{localValue:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}},kC=["type","name"],PC=["for"];function OC(t,e,n,s,i,r){return se(),we("div",{class:Lt(["input-container input-value",n.error?"error":""])},[Sd(U("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.localValue=o),type:n.type,name:n.name,required:""},null,8,kC),[[Og,r.localValue]]),U("label",{for:n.name},qs(n.label),9,PC)],2)}var Cl=je(NC,[["render",OC],["__scopeId","data-v-5e12149e"]]);const xC={name:"SocialLogin",emits:["click"]},Tl=t=>(_s("data-v-2039e33e"),t=t(),gs(),t),MC={class:"social-login"},DC=Tl(()=>U("div",{class:"facebook"},[U("i",{class:"fab fa-facebook"})],-1)),LC=Tl(()=>U("i",{class:"fab fa-google"},null,-1)),FC=[LC],UC=Tl(()=>U("div",{class:"apple"},[U("i",{class:"fab fa-apple"})],-1));function $C(t,e,n,s,i,r){return se(),we("div",MC,[DC,U("div",{class:"google",onClick:e[0]||(e[0]=o=>t.$emit("click","google"))},FC),UC])}var Sl=je(xC,[["render",$C],["__scopeId","data-v-2039e33e"]]);const BC={name:"Loading"},WC={class:"loader"};function HC(t,e,n,s,i,r){return se(),we("div",WC)}var Rl=je(BC,[["render",HC],["__scopeId","data-v-64e75b02"]]);const VC={name:"ErrorMessage",props:{text:{type:String,default:""}}},jC={class:"login-credential-error-container"};function zC(t,e,n,s,i,r){return se(),we("div",jC,[U("p",null,qs(n.text),1)])}var Al=je(VC,[["render",zC],["__scopeId","data-v-b70c9e32"]]);const KC={name:"FormCreateAccount",components:{RiotInput:Cl,SocialLogin:Sl,Loading:Rl,ErrorMessage:Al},emits:["social-login"],data:()=>({loading:!1,newUser:{user:"",name:"",email:"",password:""},errorMessage:"",allUsers:[]}),computed:lt(Ue({},Vd(kn,["getUser"])),{disableButton(){return!this.newUser.user||!this.newUser.name||!this.newUser.email||!this.newUser.password}}),methods:{async createAccount(){if(!await this.validateInfos())return;const e=Ci();this.loading=!0,Jy(e,this.newUser.email,this.newUser.password).then(n=>{const s=fi(),{uid:i}=n.user,r={username:this.newUser.user,displayName:this.newUser.name,email:this.newUser.email};ew(hi(s,`users/${i}`),r)}).catch(n=>{const{message:s}=n;s==="Firebase: Error (auth/invalid-email)."&&(this.errorMessage="Digite um e-mail v\xE1lido."),s==="Firebase: Password should be at least 6 characters (auth/weak-password)."&&(this.errorMessage="A senha deve possuir ao menos 6 d\xEDgitos"),s==="Firebase: Error (auth/email-already-in-use)."&&(this.errorMessage="E-mail j\xE1 est\xE1 em uso.")}).finally(()=>this.loading=!1)},async validateInfos(){return await this.getAllUsernames(),/^[a-zA-Z]+ [a-zA-Z]+$/.test(this.newUser.name)?this.allUsers.includes(this.newUser.user)?(this.errorMessage="Nome de usu\xE1rio j\xE1 est\xE1 em uso.",!1):!0:(this.errorMessage="Digite seu nome completo.",!1)},async getAllUsernames(){const t=fi(),e=hi(t);try{const n=await wr(Fn(e,"users"));n.exists()&&(this.allUsers=Object.entries(n.val()).map(s=>s[1].username))}catch(n){console.log(n)}}},watch:{newUser:{deep:!0,handler(){this.errorMessage=""}}}},qC=t=>(_s("data-v-67f4f95c"),t=t(),gs(),t),GC={key:0},YC={key:0},QC=qC(()=>U("i",{class:"fas fa-arrow-right"},null,-1)),JC=[QC];function XC(t,e,n,s,i,r){const o=Se("error-message"),a=Se("riot-input"),l=Se("social-login"),c=Se("loading");return t.loading?(se(),Et(c,{key:1})):(se(),we("form",GC,[t.errorMessage?(se(),Et(o,{key:1,text:t.errorMessage},null,8,["text"])):(se(),we("h1",YC,"Crie sua conta")),te(a,{modelValue:t.newUser.user,"onUpdate:modelValue":e[0]||(e[0]=u=>t.newUser.user=u),name:"login",label:"NOME DE USU\xC1RIO",type:"text",error:!!t.errorMessage},null,8,["modelValue","error"]),te(a,{modelValue:t.newUser.name,"onUpdate:modelValue":e[1]||(e[1]=u=>t.newUser.name=u),name:"name",label:"NOME COMPLETO",type:"text",error:!!t.errorMessage},null,8,["modelValue","error"]),te(a,{modelValue:t.newUser.email,"onUpdate:modelValue":e[2]||(e[2]=u=>t.newUser.email=u),name:"email",label:"E-MAIL",type:"text",error:!!t.errorMessage},null,8,["modelValue","error"]),te(a,{modelValue:t.newUser.password,"onUpdate:modelValue":e[3]||(e[3]=u=>t.newUser.password=u),name:"password",label:"SENHA",type:"password",error:!!t.errorMessage},null,8,["modelValue","error"]),te(l,{onClick:e[4]||(e[4]=u=>t.$emit("social-login",u))}),U("div",{class:"button",onClick:e[5]||(e[5]=Aa((...u)=>r.createAccount&&r.createAccount(...u),["prevent"]))},[U("button",{type:"submit",class:Lt(["btn",r.disableButton?"btn-disabled":""])},JC,2)])]))}var Zf=je(KC,[["render",XC],["__scopeId","data-v-67f4f95c"]]);const ZC={name:"FormLogin",components:{RiotInput:Cl,SocialLogin:Sl,Loading:Rl,ErrorMessage:Al,FormCreateAccount:Zf},emits:["social-login"],props:{keepLogged:{type:Boolean,default:!1}},data:()=>({error:!1,loading:!1,username:"",password:"",allUsers:[]}),computed:{disableButton(){return!this.username||this.password.length<6}},methods:lt(Ue({},Ur(kn,["setUser"])),{async login(){if(this.disableButton)return;window.localStorage.removeItem("keep-logged"),this.loading=!0;const t=fi(),e=hi(t),n=Ci();await this.getAllUsers();const s=this.getEmailbyUsername(this.username);if(!s){this.error=!0,this.loading=!1;return}Xy(n,s,this.password).then(i=>{const r=i.user;wr(Fn(e,`users/${i.user.uid}`)).then(o=>{this.setUser(Ue(lt(Ue({},r),{isAuth:!0}),o.val())),this.keepLogged&&window.localStorage.setItem("keep-logged",!0),this.$router.push("/logged")})}).catch(i=>{this.error=!0}).finally(()=>this.loading=!1)},async getAllUsers(){const t=fi(),e=hi(t);try{const n=await wr(Fn(e,"users"));n.exists()&&(this.allUsers=Object.entries(n.val()).map(s=>({username:s[1].username,email:s[1].email})))}catch(n){console.log(n)}},getEmailbyUsername(t){const e=this.allUsers.find(n=>n.username===t);return e&&e.email?e.email:""}}),watch:{user(){this.error=!1},password(){this.error=!1}}},ep=t=>(_s("data-v-67f98288"),t=t(),gs(),t),eT={key:0},tT={key:0},nT={class:"checkbox"},sT=ep(()=>U("label",{for:"check"},"Manter login",-1)),iT=ep(()=>U("i",{class:"fas fa-arrow-right"},null,-1)),rT=[iT];function oT(t,e,n,s,i,r){const o=Se("error-message"),a=Se("riot-input"),l=Se("social-login"),c=Se("loading");return t.loading?(se(),Et(c,{key:1})):(se(),we("form",eT,[t.error?(se(),Et(o,{key:1,text:"Suas credenciais de login n\xE3o coincidem com uma conta em nosso sistema."})):(se(),we("h1",tT,"Fazer login")),te(a,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=u=>t.username=u),name:"login",label:"NOME DE USU\xC1RIO",type:"text",error:t.error},null,8,["modelValue","error"]),te(a,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=u=>t.password=u),name:"password",label:"SENHA",type:"password",error:t.error},null,8,["modelValue","error"]),te(l,{onClick:e[2]||(e[2]=u=>t.$emit("social-login",u))}),U("div",nT,[Sd(U("input",{"onUpdate:modelValue":e[3]||(e[3]=u=>n.keepLogged=u),type:"checkbox",class:"checkbox-color",id:"check",name:"check",value:"stay"},null,512),[[Ud,n.keepLogged]]),sT]),U("div",{class:"button",onClick:e[4]||(e[4]=Aa((...u)=>r.login&&r.login(...u),["prevent"]))},[U("button",{type:"submit",class:Lt(["btn",r.disableButton?"btn-disabled":""])},rT,2)])]))}var aT=je(ZC,[["render",oT],["__scopeId","data-v-67f98288"]]),lT="/league-login/assets/riot-games.d3dda7a8.png";const cT={name:"LoginContainer",components:{RiotInput:Cl,SocialLogin:Sl,Loading:Rl,ErrorMessage:Al,FormCreateAccount:Zf,FormLogin:aT},data(){return{loading:!1,error:!1,createAccount:!1,keepLogged:!1}},computed:{footerLinkName(){return this.createAccount?"ENTRAR":"CRIAR CONTA"}},methods:lt(Ue({},Ur(kn,["setUser"])),{loginGoogle(){window.localStorage.removeItem("keep-logged"),this.loading=!0;const t=Ci(),e=new kt;Cv(t,e).then(n=>{this.setUser(lt(Ue({},n.user),{isAuth:!0})),this.loading=!1,this.keepLogged&&window.localStorage.setItem("keep-logged",!0),this.$router.push("/logged")}).catch(n=>console.log(n)).finally(()=>this.loading=!1)},socialLogin(t){t==="google"&&this.loginGoogle()}}),watch:{user(){this.error=!1},password(){this.error=!1}}},tp=t=>(_s("data-v-e6cd5832"),t=t(),gs(),t),uT={class:"login-container"},dT=tp(()=>U("div",{class:"logo-riot"},[U("img",{src:lT,alt:"Riot Games Logo"})],-1)),hT={class:"footer-links"},fT={key:0},pT=tp(()=>U("h6",{class:"game-version"},"V50.0.0",-1));function _T(t,e,n,s,i,r){const o=Se("form-login"),a=Se("form-create-account"),l=Se("loading");return se(),we("div",uT,[dT,!i.loading&&!i.createAccount?(se(),Et(o,{key:0,onSocialLogin:e[0]||(e[0]=c=>r.socialLogin(c)),onLoading:e[1]||(e[1]=c=>i.loading=c),keepLogged:i.keepLogged,"onUpdate:keepLogged":e[2]||(e[2]=c=>i.keepLogged=c)},null,8,["keepLogged"])):!i.loading&&i.createAccount?(se(),Et(a,{key:1,onLoading:e[3]||(e[3]=c=>i.loading=c)})):(se(),Et(l,{key:2})),U("div",hT,[i.createAccount?$s("",!0):(se(),we("h6",fT,"N\xC3O CONSEGUE INICIAR SESS\xC3O?")),U("h6",{onClick:e[4]||(e[4]=c=>i.createAccount=!i.createAccount)},qs(r.footerLinkName),1),pT])])}var gT=je(cT,[["render",_T],["__scopeId","data-v-e6cd5832"]]);const mT={name:"Home",components:{LoginImageContainer:AC,LoginContainer:gT}},yT={class:"home-container"};function vT(t,e,n,s,i,r){const o=Se("login-container"),a=Se("login-image-container");return se(),we("div",yT,[te(o),te(a)])}var bT=je(mT,[["render",vT],["__scopeId","data-v-4024fa48"]]),ET="/league-login/assets/valiant-riven.91cb9c06.mp4",IT="/league-login/assets/league-of-legends.e84b9ae7.png";const wT={name:"LoggedScreenBanner",components:{GameAlert:Jf,OutlinedButton:Xf},data:()=>({isVideo:!0,showTooltip:!1}),computed:lt(Ue({},Vd(kn,["getUser"])),{cameraIcon(){return this.isVideo?"fas fa-video":"fas fa-video-slash"}}),methods:lt(Ue({},Ur(kn,["resetState"])),{logout(){const t=Ci();ev(t).then(()=>{this.resetState(),this.$router.push("/")}).catch(e=>{console.log(e)})}})},Nl=t=>(_s("data-v-3b99bbb1"),t=t(),gs(),t),CT={key:0,autoplay:"",muted:"",loop:"",id:"myVideo"},TT=Nl(()=>U("source",{src:ET,type:"video/mp4"},null,-1)),ST=[TT],RT={class:"left-icons"},AT=Nl(()=>U("img",{src:IT,alt:""},null,-1)),NT={key:0,class:"user-tooltip"},kT={class:"title"},PT={key:0},OT={class:"exit"},xT=Nl(()=>U("p",null,"Made by Rafael Trevisan",-1)),MT=Od('<div class="play-button-container" data-v-3b99bbb1><div class="play-button" data-v-3b99bbb1><div class="play-circle" data-v-3b99bbb1><i class="fas fa-play" data-v-3b99bbb1></i></div><h1 data-v-3b99bbb1>Jogar</h1></div><div class="button-dropdown" data-v-3b99bbb1><i class="fa-solid fa-caret-down" data-v-3b99bbb1></i></div></div><div class="footer-cards" data-v-3b99bbb1><div class="card card-1" data-v-3b99bbb1><div data-v-3b99bbb1><h6 data-v-3b99bbb1>DEV</h6></div><h5 data-v-3b99bbb1> Mapa dos Campe\xF5es - Abril <br data-v-3b99bbb1> de 2022 </h5></div><div class="card card-2" data-v-3b99bbb1><div data-v-3b99bbb1><h6 data-v-3b99bbb1>ATUALIZA\xC7\xC3O DO JOGO</h6></div><h5 data-v-3b99bbb1>Notas da Atualiza\xE7\xE3o 12.9</h5></div></div>',2);function DT(t,e,n,s,i,r){const o=Se("outlined-button"),a=Se("game-alert");return se(),we("div",{class:"logged-container-outside",onClick:e[3]||(e[3]=l=>t.showTooltip=!1)},[t.isVideo?(se(),we("video",CT,ST)):$s("",!0),U("div",{class:Lt(["logged-container",{"background-image":!t.isVideo}])},[U("header",null,[U("div",RT,[te(o,{icon:"fas fa-border-all"}),te(a)]),AT,te(o,{icon:"fas fa-user",onClick:e[1]||(e[1]=l=>t.showTooltip=!t.showTooltip)},{default:ud(()=>[t.showTooltip?(se(),we("div",NT,[U("div",kT,[U("h3",null,qs(t.getUser.displayName),1),t.getUser.username?(se(),we("span",PT,"#"+qs(t.getUser.username),1)):$s("",!0)]),U("div",OT,[U("h3",{onClick:e[0]||(e[0]=(...l)=>r.logout&&r.logout(...l))},"SAIR")]),xT])):$s("",!0)]),_:1})]),U("footer",{class:Lt(t.isVideo?"footer-video":"footer-image")},[te(o,{class:"icon-camera",icon:r.cameraIcon,onClick:e[2]||(e[2]=l=>t.isVideo=!t.isVideo)},null,8,["icon"]),MT],2)],2)])}var LT=je(wT,[["render",DT],["__scopeId","data-v-3b99bbb1"]]);const FT={name:"LoggedScreenInfo"},UT={class:"logged-info-container"},$T=Od('<h1 data-v-29de5815>Sobre</h1><div class="center" data-v-29de5815><p data-v-29de5815> Mostre suas habilidades em League of Legends: o MOBA 5v5 que combina sinergia de equipe e maestria individual. Escolha sua fun\xE7\xE3o, otimize sua itemiza\xE7\xE3o e abra caminho pelo mapa para destruir o Nexus inimigo. Com mais de 150 Campe\xF5es e in\xFAmeras maneiras de jogar, encontre o Campe\xE3o perfeito para voc\xEA e forje seu caminho rumo \xE0 vit\xF3ria! </p><h6 data-v-29de5815>DISPON\xCDVEL TAMB\xC9M PARA</h6><div class="apple" data-v-29de5815><i class="fa-brands fa-apple" data-v-29de5815></i><h5 data-v-29de5815>MacOS</h5></div></div><div class="riot-games" data-v-29de5815><span data-v-29de5815>br.leagueoflegends.com</span><h6 data-v-29de5815>DESENVOLVEDORA</h6><h5 data-v-29de5815>Riot Games</h5><h6 data-v-29de5815>DISTRIBUIDORA</h6><h5 data-v-29de5815>Riot Games</h5></div>',3),BT=[$T];function WT(t,e,n,s,i,r){return se(),we("div",UT,BT)}var HT=je(FT,[["render",WT],["__scopeId","data-v-29de5815"]]);const VT={name:"LoggedScreen",components:{LoggedScreenBanner:LT,LoggedScreenInfo:HT},data:()=>({})},jT={class:"logged-container"};function zT(t,e,n,s,i,r){const o=Se("logged-screen-banner"),a=Se("logged-screen-info");return se(),we("div",jT,[te(o),te(a)])}var KT=je(VT,[["render",zT],["__scopeId","data-v-aea02b96"]]);const qT=[{path:"/",name:"Home",component:bT},{path:"/logged",name:"LoggedScreen",component:KT,meta:{needsAuth:!0}}],np=fC({history:Nw(),routes:qT});np.beforeEach((t,e,n)=>{const s=kn(),{getUser:i}=s;t.meta.needsAuth&&!i.isAuth?n("/"):n()});const GT={apiKey:"AIzaSyAwpRSq7kDdK_HpoDouLdViRSBgRxWnU_Y",authDomain:"league-of-legends-login.firebaseapp.com",projectId:"league-of-legends-login",storageBucket:"league-of-legends-login.appspot.com",messagingSenderId:"576669137995",appId:"1:576669137995:web:f28775058a4cc001b821ce"};sy(GT);Fg(uw).use(Bg()).use(np).mount("#app");
