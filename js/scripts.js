/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal=function(){"use strict";var r={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var n={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function o(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function u(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(o);if(o(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||o(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n — "+e}),console.log(i,"color: #ea654b;")}}function t(){var n=this,i={active:[],stale:[]},t={active:[],stale:[]},r={active:[],stale:[]};try{f(u("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function N(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6!==e.length)throw new RangeError("Expected array with either 6 or 16 values.");var t=z();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}function z(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function F(e,t){for(var n=N(e),i=N(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=d}return r}function D(e,t){var n=z();return n[0]=e,n[5]="number"==typeof t?t:e,n}var S=function(){var n={},i=document.documentElement.style;function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}return e.clearCache=function(){return n={}},e}();function p(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,l,d,u,f,h,p,m,y,v,g,b=parseFloat(t.opacity),w=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),E={computed:b!==w?"opacity: "+b+";":"",generated:b!==w?"opacity: "+w+";":""},j=[];if(parseFloat(i.distance)){var T="top"===i.origin||"bottom"===i.origin?"Y":"X",k=i.distance;"top"!==i.origin&&"left"!==i.origin||(k=/^-/.test(k)?k.substr(1):"-"+k);var O=k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=O[0];switch(O[1]){case"em":k=parseInt(t.fontSize)*x;break;case"px":k=x;break;case"%":k="Y"===T?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===T?j.push((c=k,(l=z())[13]=c,l)):j.push((s=k,(a=z())[12]=s,a))}i.rotate.x&&j.push((d=i.rotate.x,u=Math.PI/180*d,(f=z())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&j.push((h=i.rotate.y,p=Math.PI/180*h,(m=z())[0]=m[10]=Math.cos(p),m[2]=m[8]=Math.sin(p),m[2]*=-1,m)),i.rotate.z&&j.push((y=i.rotate.z,v=Math.PI/180*y,(g=z())[0]=g[5]=Math.cos(v),g[1]=g[4]=Math.sin(v),g[4]*=-1,g)),1!==i.scale&&(0===i.scale?j.push(D(2e-4)):j.push(D(i.scale)));var R={};if(j.length){R.property=S("transform"),R.computed={raw:t[R.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return N(t[2].split(", ").map(parseFloat))}return z()}(t[R.property])},j.unshift(R.computed.matrix);var q=j.reduce(F);R.generated={initial:R.property+": matrix3d("+q.join(", ")+");",final:R.property+": matrix3d("+R.computed.matrix.join(", ")+");"}}else R.generated={initial:"",final:""};var A={};if(E.generated||R.generated.initial){A.property=S("transition"),A.computed=t[A.property],A.fragments=[];var P=i.delay,L=i.duration,M=i.easing;E.generated&&A.fragments.push({delayed:"opacity "+L/1e3+"s "+M+" "+P/1e3+"s",instant:"opacity "+L/1e3+"s "+M+" 0s"}),R.generated.initial&&A.fragments.push({delayed:R.property+" "+L/1e3+"s "+M+" "+P/1e3+"s",instant:R.property+" "+L/1e3+"s "+M+" 0s"}),A.computed&&!A.computed.match(/all 0s|none 0s/)&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var I=A.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});A.generated={delayed:A.property+": "+I.delayed+";",instant:A.property+": "+I.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:r,opacity:E,position:n,transform:R,transition:A}}function m(r,e){e.split(";").forEach(function(e){var t=e.split(":"),n=t[0],i=t.slice(1);n&&i&&(r.style[n.trim()]=i.join(":"))})}function y(e){var i,r=this;try{f(u(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),m(n.node,n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{t.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function v(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),v(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function g(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var e,b=(e=0,function(){return e++});function w(){var n=this;t.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),m(e.node,t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function c(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,m(e.node,n.filter(function(e){return""!==e}).join(" ")),a.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,m(e.node,t.filter(function(e){return""!==e}).join(" ")),a.call(this,e)}.call(this,e):void 0}function a(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&y.call(n,e.node)},i-s)}}function l(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return c.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new d(n,"visible",this.store),o=new d(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return j.call(this,n,r.body[0],-1,t),j.call(this,n,r.body[0],1,t),c.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return j.call(this,n,i,-1,t),c.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return j.call(this,n,i,1,t),c.call(this,e,{reveal:!0,pristine:t})}}function E(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=b(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function d(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function j(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&l.call(r,a,i)},e.interval)}function i(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,d=[],n=a.interval||r.interval;try{n&&(l=new E(n));var i=u(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(v(n,c.store.elements[i]),m(n.node,n.styles.inline.computed)):(n.id=b(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=v({},n.config||c.defaults,a);if(!r.mobile&&g()||!r.desktop&&!g())return i&&y.call(c,n),e;var o,s=u(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=function(t){var e=[],n=arguments.length-1;for(;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(s,d,c.store.containers))&&(o=b(),d.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=p(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(d,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(w.bind(this),0))}var T,k=Math.sign||function(e){return(0<e)-(e<0)||+e},O=(T=Date.now(),function(e){var t=Date.now();16<t-T?e(T=t):setTimeout(function(){return O(e)},0)}),x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||O;function R(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function q(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),x(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=R.call(i,e,!0));var t=function(e){var t,n;return n=e.node===document.documentElement?(t=window.pageYOffset,window.pageXOffset):(t=e.node.scrollTop,e.node.scrollLeft),{top:t,left:n}}.call(i,e);e.scroll&&(e.direction={x:k(t.left-e.scroll.left),y:k(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){(n||void 0===e.geometry)&&(e.geometry=R.call(i,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&u<o&&c<s&&a<l||"fixed"===e.styles.position}}.call(i,e)}),f(t,function(e){e.sequence?l.call(i,e):c.call(i,e)}),i.pristine=!1})}var A,P,L,M,I,C,W,Y,$="4.0.9";function H(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==H.prototype)return new H(e);if(!H.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),n.failure();try{t=v({},C||r,e)}catch(e){return h.call(this,"Invalid configuration.",e.message),n.failure()}try{if(!u(t.container)[0])throw new Error("Invalid container.")}catch(e){return h.call(this,e.message),n.failure()}return!(C=t).mobile&&g()||!C.desktop&&!g()?(h.call(this,"This device is disabled.","desktop: "+C.desktop,"mobile: "+C.mobile),n.failure()):(n.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,A=A||q.bind(this),P=P||function(){var n=this;f(this.store.elements,function(e){m(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),L=L||i.bind(this),M=M||y.bind(this),I=I||function(){var t=this;f(this.store.history,function(e){i.call(t,e.target,e.options,!0)}),w.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return A}}),Object.defineProperty(this,"destroy",{get:function(){return P}}),Object.defineProperty(this,"reveal",{get:function(){return L}}),Object.defineProperty(this,"clean",{get:function(){return M}}),Object.defineProperty(this,"sync",{get:function(){return I}}),Object.defineProperty(this,"defaults",{get:function(){return C}}),Object.defineProperty(this,"version",{get:function(){return $}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Y||(Y=this))}return H.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty(H,"debug",{get:function(){return W||!1},set:function(e){return W="boolean"==typeof e?e:W}}),H(),H}();
;
!function(){"use strict";function n(t){if(void 0===t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&!(t=document.getElementById(t)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t instanceof window.SVGElement||t instanceof window.SVGGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}var r,e,t,p;function i(t,e,n){r(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,r,i=t.querySelectorAll(this.TYPES.join(",")),a=0;a<i.length;a++)n=(0,this[(e=i[a]).tagName.toLowerCase()+"ToPath"])(this.parseAttr(e.attributes)),r=this.pathMaker(e,n),e.parentNode.replaceChild(r,e)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,r=t.y1||0,i=t.x2||0,a=t.y2||0;return e.d="M"+n+","+r+"L"+i+","+a,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,r=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;if(t.rx||t.ry){var o=parseInt(t.rx,10)||-1,s=parseInt(t.ry,10)||-1;o=Math.min(Math.max(o<0?s:o,0),i/2),s=Math.min(Math.max(s<0?o:s,0),a/2),e.d="M "+(n+o)+","+r+" L "+(n+i-o)+","+r+" A "+o+","+s+",0,0,1,"+(n+i)+","+(r+s)+" L "+(n+i)+","+(r+a-s)+" A "+o+","+s+",0,0,1,"+(n+i-o)+","+(r+a)+" L "+(n+o)+","+(r+a)+" A "+o+","+s+",0,0,1,"+n+","+(r+a-s)+" L "+n+","+(r+s)+" A "+o+","+s+",0,0,1,"+(n+o)+","+r}else e.d="M"+n+" "+r+" L"+(n+i)+" "+r+" L"+(n+i)+" "+(r+a)+" L"+n+" "+(r+a)+" Z";return e},n.prototype.polylineToPath=function(t){var e,n,r={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(n="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(n+="L"+i[e]);return r.d=n,r},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,r=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,a=parseFloat(t.cy)||0,o=i-n,s=a,h=parseFloat(i)+parseFloat(n),l=a;return e.d="M"+o+","+s+"A"+n+","+r+" 0,1,1 "+h+","+l+"A"+n+","+r+" 0,1,1 "+o+","+l,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,r=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,a=r-n,o=i,s=parseFloat(r)+parseFloat(n),h=i;return e.d="M"+a+","+o+"A"+n+","+n+" 0,1,1 "+s+","+h+"A"+n+","+n+" 0,1,1 "+a+","+h,e},n.prototype.pathMaker=function(t,e){var n,r,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)r=t.attributes[n],-1===this.ATTR_WATCH.indexOf(r.name)&&i.setAttribute(r.name,r.value);for(n in e)i.setAttribute(n,e[n]);return i},n.prototype.parseAttr=function(t){for(var e,n={},r=0;r<t.length;r++){if(e=t[r],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n},i.LINEAR=function(t){return t},i.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},i.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},i.EASE_IN=function(t){return Math.pow(t,3)},i.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(t*(.5*Math.PI)),n=Math.pow(e,1.5),r=Math.pow(1-t,2);return 1-r+(1-Math.abs(Math.cos(n*(2.5*Math.PI))))*r},i.prototype.setElement=function(e,n){var t,r;if(void 0===e)throw new Error('Vivus [constructor]: "element" parameter is required');if(e.constructor===String&&!(e=document.getElementById(e)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=e,n&&n.file){r=this,t=function(){var t=document.createElement("div");t.innerHTML=this.responseText;var e=t.querySelector("svg");if(!e)throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : "+n.file);r.el=e,r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%"),r.parentEl.appendChild(r.el),r.isReady=!0,r.init(),r=null};var i=new window.XMLHttpRequest;return i.addEventListener("load",t),i.open("GET",n.file),void i.send()}switch(e.constructor){case window.SVGSVGElement:case window.SVGElement:case window.SVGGElement:this.el=e,this.isReady=!0;break;case window.HTMLObjectElement:r=this,(t=function(t){if(!r.isReady){if(r.el=e.contentDocument&&e.contentDocument.querySelector("svg"),!r.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");r.el&&(e.getAttribute("built-by-vivus")&&(r.parentEl.insertBefore(r.el,e),r.parentEl.removeChild(e),r.el.setAttribute("width","100%"),r.el.setAttribute("height","100%")),r.isReady=!0,r.init(),r=null)}})()||e.addEventListener("load",t);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},i.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],n=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((t=t||{}).type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===n.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||n[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=p(t.duration,120),this.delay=p(t.delay,null),this.dashGap=p(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||i.LINEAR,this.pathTimingFunction=t.pathTimingFunction||i.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},i.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},i.prototype.mapping=function(){var t,e,n,r,i,a,o,s,h,l;for(s=a=o=0,e=this.el.querySelectorAll("path"),l=!1,t=0;t<e.length;t++)if(n=e[t],!this.isInvisible(n)){if(i={el:n,length:0,startAt:0,duration:0,isResizeSensitive:!1},"non-scaling-stroke"===n.getAttribute("vector-effect")){var c=n.getBoundingClientRect(),u=n.getBBox();h=Math.max(c.width/u.width,c.height/u.height),l=i.isResizeSensitive=!0}else h=1;i.length=Math.ceil(n.getTotalLength()*h),isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(i),n.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),n.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,a+=i.length,this.renderPath(t))}for(l&&console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."),a=0===a?1:a,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(1<e.length?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=o/a*this.duration,i.duration=i.length/a*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":n=i.el,r=this.parseAttr(n),i.startAt=s+(p(r["data-delay"],this.delayUnit)||0),i.duration=p(r["data-duration"],this.duration),s=void 0!==r["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":n=i.el,r=this.parseAttr(n),i.startAt=p(r["data-start"],this.delayUnit)||0,i.duration=p(r["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}o+=i.length,this.frameLength=this.frameLength||this.duration}},i.prototype.recalc=function(){this.mustRecalcScale||(this.mustRecalcScale=e(function(){this.performLineRecalc()}.bind(this)))},i.prototype.performLineRecalc=function(){for(var t,e,n,r,i,a=0;a<this.map.length;a++)(t=this.map[a]).isResizeSensitive&&(n=(e=t.el).getBoundingClientRect(),r=e.getBBox(),i=Math.max(n.width/r.width,n.height/r.height),t.length=Math.ceil(e.getTotalLength()*i),e.style.strokeDasharray=t.length+" "+(t.length+2*this.dashGap));this.trace(),this.mustRecalcScale=null},i.prototype.draw=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=e(function(){t.draw()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},i.prototype.trace=function(){var t,e,n,r;for(r=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)e=(r-(n=this.map[t]).startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},i.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},i.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},i.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},i.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},i.prototype.reset=function(){return this.setFrameProgress(0)},i.prototype.finish=function(){return this.setFrameProgress(1)},i.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},i.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.draw(),this},i.prototype.stop=function(){return this.handle&&(t(this.handle),this.handle=null),this},i.prototype.destroy=function(){var t,e;for(this.stop(),t=0;t<this.map.length;t++)(e=this.map[t]).el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},i.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&(!(e=t.getBoundingClientRect()).width&&!e.height)},i.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var r=0;r<t.attributes.length;r++)n[(e=t.attributes[r]).name]=e.value;return n},i.prototype.isInViewport=function(t,e){var n=this.scrollY(),r=n+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=n+i.top;return o+a*(e=e||0)<=r&&n<=o+a},i.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},i.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){i.prototype.docElem||(i.prototype.docElem=window.document.documentElement,e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},t=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)})},p=function(t,e){var n=parseInt(t,10);return 0<=n?n:e},"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof exports?module.exports=i:window.Vivus=i}();;
const signUpForm = document.querySelector('.sign-up__form');
const haveAccount = document.querySelector('.sign-up__account');
const submitButton = signUpForm.querySelector('.form__submit');

const firstNameInut = signUpForm.querySelector('.input--first-name');
const lastNameInput = signUpForm.querySelector('.input--last-name');

const emailInput = signUpForm.querySelector('.input--email');

const passwordInput = signUpForm.querySelector('.input--password');
const confirmPasswordInput = signUpForm.querySelector('.input--confirm-password');

const popUp = document.querySelector('.pop-up');
const rootElement = document.querySelector('.root');
const popUpClose = document.querySelector('.pop-up__close');
const vivusPiture = document.querySelector('.sign-up__vivus');
const doneMarkImg = document.querySelector('.img__doneMark');

const nationalitySelect = signUpForm.querySelector('.select__nationality');
const birthDaySelect = signUpForm.querySelector('.select__birthday');
const birthMonthSelect = signUpForm.querySelector('.select__month');
const birthYearSelect = signUpForm.querySelector('.select__year');

nationalitySelect.addEventListener('click', function () {
    errorMessage(nationalitySelect);
});

birthDaySelect.addEventListener('click', function () {
    errorMessage(birthDaySelect);
});

birthMonthSelect.addEventListener('click', function () {
    errorMessage(birthMonthSelect);
});

birthYearSelect.addEventListener('click', function () {
    errorMessage(birthYearSelect);
});

const clearForm = (formName) => {
    formName.reset();
}

const isValidForm = () => {
    if (firstNameInut.value !== '' && lastNameInput.value !== '' && emailInput.value !== '' && isValidConfirmPasswords() && nationalitySelect.value !== '' && birthDaySelect.value !== '' && birthMonthSelect.value !== '' && birthYearSelect.value !== '') {
        return true;
    } else return false;
}

const sendForm = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.sign-up__right').classList.add('form__send');
            document.querySelector('.sign-up__right--container').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax.txt", true);
    xhttp.send();
}

const togglePopUp = () => {
    popUp.classList.toggle('pop-up--opened');
    rootElement.classList.toggle('page--hidden');
}

popUpClose.addEventListener('click', togglePopUp);
popUp.addEventListener('click', function (event) {
    if (event.target === popUp) {
        togglePopUp();
    }
})

const isPasswordIncludesNumber = (formElement, inputSelector) => {
    let arr = formElement.querySelector(`.${inputSelector}`).value.split('');
    for (let item of arr) {
        if (!isNaN(item)) {
            return true;
        }
    }
    return false;
}

const isPasswordIncludesUpperLetter = (formElement, inputSelector) => {
    let res = formElement.querySelector(`.${inputSelector}`).value.toLowerCase();
    if (formElement.querySelector(`.${inputSelector}`).value !== res) {
        return true;
    }
    return false;
}

const isPasswordIncludesLowerLetter = (formElement, inputSelector) => {
    let res = formElement.querySelector(`.${inputSelector}`).value.toUpperCase();
    if (formElement.querySelector(`.${inputSelector}`).value !== res) {
        return true;
    }
    return false;
}

const isValidPassword = (formElement, inputSelector, errorSelector) => {
    const inputElement = formElement.querySelector(`.${inputSelector}`);
    const errorMessage = formElement.querySelector(`.${errorSelector}`);

    if (isPasswordIncludesNumber(formElement, inputSelector) && isPasswordIncludesUpperLetter(formElement, inputSelector) && isPasswordIncludesLowerLetter(formElement, inputSelector)) {
        errorMessage.textContent = '';
        inputElement.closest('.fieldset').classList.remove('fieldset--error');
        showDoneMark(inputElement);
        return true;
    } else {
        errorMessage.textContent = `${inputElement.validationMessage} You password have to includes: upper, lower letter and number`;
        inputElement.closest('.fieldset').classList.add('fieldset--error');
        hideDoneMark(inputElement);
        return false;
    }
}

const isMatchPasswords = (pas1, pas2, errorSelector) => {
    const errorMessage = signUpForm.querySelector(`.${errorSelector}`);

    if (pas1.value !== pas2.value) {
        errorMessage.textContent = `Passwords do not match`;
        hideDoneMark(confirmPasswordInput);
        return false;
    }
    else {
        showDoneMark(confirmPasswordInput);
        return true;
    }

}

const isValidConfirmPasswords = () => {
    if (isValidPassword(signUpForm, 'input--password', 'pas-error') && isValidPassword(signUpForm, 'input--confirm-password', 'conf-pas-error') && isMatchPasswords(passwordInput, confirmPasswordInput, 'conf-pas-error')) return true;
    return false;
}

passwordInput.addEventListener('input', function () {
    isValidPassword(signUpForm, 'input--password', 'pas-error');

});

confirmPasswordInput.addEventListener('input', function () {
    isValidPassword(signUpForm, 'input--confirm-password', 'conf-pas-error');
    isMatchPasswords(passwordInput, confirmPasswordInput, 'conf-pas-error');
});

const errorMessage = (inputElement) => {
    const errorElement = signUpForm.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
        errorElement.textContent = inputElement.validationMessage;
        inputElement.closest('.fieldset').classList.add('fieldset--error');
        hideDoneMark(inputElement);
    } else {
        errorElement.textContent = '';
        inputElement.closest('.fieldset').classList.remove('fieldset--error');
        showDoneMark(inputElement);
    }
}

emailInput.addEventListener('input', function () {
    errorMessage(emailInput);
});

lastNameInput.addEventListener('input', function () {
    errorMessage(lastNameInput);
});

firstNameInut.addEventListener('input', function () {
    errorMessage(firstNameInut);
});

const showDoneMark = (inputElement) => {
    const imgElement = document.querySelector(`.${inputElement.id}-done`);
    imgElement.classList.add('img__doneMark--visibly');
}

const hideDoneMark = (inputElement) => {
    const imgElement = document.querySelector(`.${inputElement.id}-done`);
    imgElement.classList.remove('img__doneMark--visibly');
}

const vivus = new Vivus('vivus', { type: 'scenario-sync', duration: 1000, file: './img/SignUp.svg', start: 'autostart', })

const smoothReveal = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3500,
    delay: 100,

})

smoothReveal.reveal(`.fieldset`, { interval: 500 })

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isValidForm()) {
        clearForm(signUpForm);
        togglePopUp();
        sendForm();
        submitButton.classList.remove('button__shake');
        vivusPiture.classList.add('sign-up__vivus--hidden');
        haveAccount.classList.add('have-account--hidden')
    } else {
        submitButton.classList.add('button__shake');
        const allInput = signUpForm.querySelectorAll('.sign-up__input');
        allInput.forEach(item => {
            if (!item.validity.valid) {
                const errorElement = signUpForm.querySelector(`.${item.id}-error`);
                item.closest('.fieldset').classList.add('fieldset--error');
                errorElement.textContent = item.validationMessage;
            }
        });
        const allSelect = signUpForm.querySelectorAll('.select ');
        allSelect.forEach(item => {
            if (!item.validity.valid) {
                const errorElement = signUpForm.querySelector(`.${item.id}-error`);
                item.closest('.fieldset').classList.add('fieldset--error');
                errorElement.textContent = item.validationMessage;
            }
        });
    }

});;
