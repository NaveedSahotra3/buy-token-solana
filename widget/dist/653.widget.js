"use strict";(self.webpackChunkdonate3_sdk=self.webpackChunkdonate3_sdk||[]).push([[653],{17653:(A,e,t)=>{function C(A){return function(A){let e=0;return()=>A[e++]}(function(A){let e=0;function t(){return A[e++]<<8|A[e++]}let C=t(),g=1,n=[0,1];for(let A=1;A<C;A++)n.push(g+=t());let B=t(),w=e;e+=B;let o=0,l=0;function Q(){return 0==o&&(l=l<<8|A[e++],o=8),l>>--o&1}const r=2**31,f=r>>>1,i=r-1;let E=0;for(let A=0;A<31;A++)E=E<<1|Q();let c=[],s=0,h=r;for(;;){let A=Math.floor(((E-s+1)*g-1)/h),e=0,t=C;for(;t-e>1;){let C=e+t>>>1;A<n[C]?t=C:e=C}if(0==e)break;c.push(e);let B=s+Math.floor(h*n[e]/g),w=s+Math.floor(h*n[e+1]/g)-1;for(;0==((B^w)&f);)E=E<<1&i|Q(),B=B<<1&i,w=w<<1&i|1;for(;B&~w&536870912;)E=E&f|E<<1&i>>>1|Q(),B=B<<1^f,w=(w^f)<<1|f|1;s=B,h=1+w-B}let M=C-4;return c.map((e=>{switch(e-M){case 3:return M+65792+(A[w++]<<16|A[w++]<<8|A[w++]);case 2:return M+256+(A[w++]<<8|A[w++]);case 1:return M+A[w++];default:return e-1}}))}(function(A){let e=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach(((A,t)=>e[A.charCodeAt(0)]=t));let t=A.length,C=new Uint8Array(6*t>>3);for(let g=0,n=0,B=0,w=0;g<t;g++)w=w<<6|e[A.charCodeAt(g)],B+=6,B>=8&&(C[n++]=w>>(B-=8));return C}(A)))}function g(A){return 1&A?~A>>1:A>>1}function n(A,e){let t=Array(A);for(let C=0,n=0;C<A;C++)t[C]=n+=g(e());return t}function B(A,e=0){let t=[];for(;;){let C=A(),g=A();if(!g)break;e+=C;for(let A=0;A<g;A++)t.push(e+A);e+=g+1}return t}function w(A){return l((()=>{let e=B(A);if(e.length)return e}))}function o(A){let e=[];for(;;){let t=A();if(0==t)break;e.push(r(t,A))}for(;;){let t=A()-1;if(t<0)break;e.push(f(t,A))}return e.flat()}function l(A){let e=[];for(;;){let t=A(e.length);if(!t)break;e.push(t)}return e}function Q(A,e,t){let C=Array(A).fill().map((()=>[]));for(let g=0;g<e;g++)n(A,t).forEach(((A,e)=>C[e].push(A)));return C}function r(A,e){let t=1+e(),C=e(),g=l(e);return Q(g.length,1+A,e).flatMap(((A,e)=>{let[n,...B]=A;return Array(g[e]).fill().map(((A,e)=>{let g=e*C;return[n+e*t,B.map((A=>A+g))]}))}))}function f(A,e){return Q(1+e(),1+A,e).map((A=>[A[0],A.slice(1)]))}t.d(e,{normalize:()=>aA});var i=C("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");const E=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),c=4;function s(A){return`{${function(A){return A.toString(16).toUpperCase().padStart(2,"0")}(A)}}`}function h(A){let e=[];for(let t=0,C=A.length;t<C;){let C=A.codePointAt(t);t+=C<65536?1:2,e.push(C)}return e}function M(A){let e=A.length;if(e<4096)return String.fromCodePoint(...A);let t=[];for(let C=0;C<e;)t.push(String.fromCodePoint(...A.slice(C,C+=4096)));return t.join("")}function u(A,e){let t=A.length,C=t-e.length;for(let g=0;0==C&&g<t;g++)C=A[g]-e[g];return C}var I=C("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");function D(A){return A>>24&255}function a(A){return 16777215&A}const U=new Map(w(I).flatMap(((A,e)=>A.map((A=>[A,e+1<<24]))))),p=new Set(B(I)),R=new Map,N=new Map;for(let[A,e]of o(I)){if(!p.has(A)&&2==e.length){let[t,C]=e,g=N.get(t);g||(g=new Map,N.set(t,g)),g.set(C,A)}R.set(A,e.reverse())}const L=44032,P=4352,S=4449,F=4519,k=28,b=21*k,O=L+19*b,V=P+19,G=S+21,J=F+k;function Y(A){return A>=L&&A<O}function K(A,e){if(A>=P&&A<V&&e>=S&&e<G)return L+(A-P)*b+(e-S)*k;if(Y(A)&&e>F&&e<J&&(A-L)%k==0)return A+(e-F);{let t=N.get(A);return t&&(t=t.get(e),t)?t:-1}}function z(A){let e=[],t=[],C=!1;function g(A){let t=U.get(A);t&&(C=!0,A|=t),e.push(A)}for(let C of A)for(;;){if(C<128)e.push(C);else if(Y(C)){let A=C-L,e=A%b/k|0,t=A%k;g(P+(A/b|0)),g(S+e),t>0&&g(F+t)}else{let A=R.get(C);A?t.push(...A):g(C)}if(!t.length)break;C=t.pop()}if(C&&e.length>1){let A=D(e[0]);for(let t=1;t<e.length;t++){let C=D(e[t]);if(0==C||A<=C){A=C;continue}let g=t-1;for(;;){let t=e[g+1];if(e[g+1]=e[g],e[g]=t,!g)break;if(A=D(e[--g]),A<=C)break}A=D(e[t])}}return e}function m(A){return z(A).map(a)}function d(A){return function(A){let e=[],t=[],C=-1,g=0;for(let n of A){let A=D(n),B=a(n);if(-1==C)0==A?C=B:e.push(B);else if(g>0&&g>=A)0==A?(e.push(C,...t),t.length=0,C=B):t.push(B),g=A;else{let n=K(C,B);n>=0?C=n:0==g&&0==A?(e.push(C),C=B):(t.push(B),g=A)}}return C>=0&&e.push(C,...t),e}(z(A))}const H=65039,T=".",X=1,q=45;function y(){return new Set(B(i))}const x=new Map(o(i)),j=y(),Z=y(),W=new Set(B(i).map((function(A){return this[A]}),[...Z])),v=y(),$=(y(),w(i));function _(){return new Set([B(i).map((A=>$[A])),B(i)].flat(2))}const AA=i(),eA=l((A=>{let e=l(i).map((A=>A+96));if(e.length){let t=A>=AA;e[0]-=32,e=M(e),t&&(e=`Restricted[${e}]`);let C=_(),g=_(),n=[...C,...g].sort(((A,e)=>A-e));return{N:e,P:C,M:!i(),R:t,V:new Set(n)}}})),tA=y(),CA=new Map;[...tA,...y()].sort(((A,e)=>A-e)).map(((A,e,t)=>{let C=i(),g=t[e]=C?t[e-C]:{V:[],M:new Map};g.V.push(A),tA.has(A)||CA.set(A,g)}));for(let{V:A,M:e}of new Set(CA.values())){let t=[];for(let e of A){let A=eA.filter((A=>A.V.has(e))),C=t.find((({G:e})=>A.some((A=>e.has(A)))));C||(C={G:new Set,V:[]},t.push(C)),C.V.push(e),A.forEach((A=>C.G.add(A)))}let C=t.flatMap((({G:A})=>[...A]));for(let{G:A,V:g}of t){let t=new Set(C.filter((e=>!A.has(e))));for(let A of g)e.set(A,t)}}let gA=new Set,nA=new Set;for(let A of eA)for(let e of A.V)(gA.has(e)?nA:gA).add(e);for(let A of gA)CA.has(A)||nA.has(A)||CA.set(A,X);const BA=new Set([...gA,...m(gA)]);class wA extends Array{get is_emoji(){return!0}}const oA=function(A){let e=[],t=B(A);return function A({S:t,B:C},g,n){if(4&t&&n===g[g.length-1])return;2&t&&(n=g[g.length-1]);1&t&&e.push(g);for(let e of C)for(let t of e.Q)A(e,[...g,t],n)}(function e(C){let g=A(),n=l((()=>{let C=B(A).map((A=>t[A]));if(C.length)return e(C)}));return{S:g,B:n,Q:C}}([]),[]),e}(i).map((A=>wA.from(A))).sort(u),lA=new Map;for(let A of oA){let e=[lA];for(let t of A){let A=e.map((A=>{let e=A.get(t);return e||(e=new Map,A.set(t,e)),e}));t===H?e.push(...A):e=A}for(let t of e)t.V=A}function QA(A,e=s){let t=[];var C;C=A[0],Z.has(C)&&t.push("◌");let g=0,n=A.length;for(let C=0;C<n;C++){let n=A[C];iA(n)&&(t.push(M(A.slice(g,C))),t.push(e(n)),g=C+1)}return t.push(M(A.slice(g,n))),t.join("")}function rA(A){return(iA(A)?"":`${fA(QA([A]))} `)+s(A)}function fA(A){return`"${A}"‎`}function iA(A){return v.has(A)}function EA(A,e,t){if(!A)return[];let C=0;return A.split(T).map((A=>{let g,n=h(A),B={input:n,offset:C};C+=n.length+1;try{let A,C=B.tokens=uA(n,e,t),w=C.length;if(!w)throw new Error("empty label");if(g=C.flat(),function(A){for(let e=A.lastIndexOf(95);e>0;)if(95!==A[--e])throw new Error("underscore allowed only at start")}(g),!(B.emoji=w>1||C[0].is_emoji)&&g.every((A=>A<128)))!function(A){if(A.length>=4&&A[2]==q&&A[3]==q)throw new Error(`invalid label extension: "${M(A.slice(0,4))}"`)}(g),A="ASCII";else{let e=C.flatMap((A=>A.is_emoji?[]:A));if(e.length){if(Z.has(g[0]))throw MA("leading combining mark");for(let A=1;A<w;A++){let e=C[A];if(!e.is_emoji&&Z.has(e[0]))throw MA(`emoji + combining mark: "${M(C[A-1])} + ${QA([e[0]])}"`)}!function(A){let e=A[0],t=E.get(e);if(t)throw MA(`leading ${t}`);let C=A.length,g=-1;for(let n=1;n<C;n++){e=A[n];let C=E.get(e);if(C){if(g==n)throw MA(`${t} + ${C}`);g=n+1,t=C}}if(g==C)throw MA(`trailing ${t}`)}(g);let t=[...new Set(e)],[n]=function(A){let e=eA;for(let t of A){let A=e.filter((A=>A.V.has(t)));if(!A.length)throw eA.some((A=>A.V.has(t)))?hA(e[0],t):sA(t);if(e=A,1==A.length)break}return e}(t);!function(A,e){let{V:t,M:C}=A;for(let C of e)if(!t.has(C))throw hA(A,C);if(C){let A=m(e);for(let e=1,t=A.length;e<t;e++)if(W.has(A[e])){let C=e+1;for(let g;C<t&&W.has(g=A[C]);C++)for(let t=e;t<C;t++)if(A[t]==g)throw new Error(`duplicate non-spacing marks: ${rA(g)}`);if(C-e>c)throw new Error(`excessive non-spacing marks: ${fA(QA(A.slice(e-1,C)))} (${C-e}/${c})`);e=C}}}(n,e),function(A,e){let t,C=[];for(let A of e){let e=CA.get(A);if(e===X)return;if(e){let C=e.M.get(A);if(t=t?t.filter((A=>C.has(A))):[...C],!t.length)return}else C.push(A)}if(t)for(let e of t)if(C.every((A=>e.V.has(A))))throw new Error(`whole-script confusable: ${A.N}/${e.N}`)}(n,t),A=n.N}else A="Emoji"}B.type=A}catch(A){B.error=A}return B.output=g,B}))}function cA(A){return A.map((({input:e,error:t,output:C})=>{if(t){let C=t.message;throw new Error(1==A.length?C:`Invalid label ${fA(QA(e))}: ${C}`)}return M(C)})).join(T)}function sA(A){return new Error(`disallowed character: ${rA(A)}`)}function hA(A,e){let t=rA(e),C=eA.find((A=>A.P.has(e)));return C&&(t=`${C.N} ${t}`),new Error(`illegal mixture: ${A.N} + ${t}`)}function MA(A){return new Error(`illegal placement: ${A}`)}function uA(A,e,t){let C=[],g=[];for(A=A.slice().reverse();A.length;){let n=DA(A);if(n)g.length&&(C.push(e(g)),g=[]),C.push(t(n));else{let e=A.pop();if(BA.has(e))g.push(e);else{let A=x.get(e);if(A)g.push(...A);else if(!j.has(e))throw sA(e)}}}return g.length&&C.push(e(g)),C}function IA(A){return A.filter((A=>A!=H))}function DA(A,e){let t,C=lA,g=A.length;for(;g&&(C=C.get(A[--g]),C);){let{V:n}=C;n&&(t=n,e&&e.push(...A.slice(g).reverse()),A.length=g)}return t}function aA(A){return function(A){return cA(EA(A,d,IA))}(A)}}}]);