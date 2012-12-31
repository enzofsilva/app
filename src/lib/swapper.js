var Swapper=function(c,b){function a(e,d,f,g){a._swapper(e,d,f,g)}if(c&&c.fn){c.extend(c.fn,{swapper:function(d,e,f){d=c(d)[0];this.forEach(function(g){a._swapper(g,d,e,f)});return this}})}if(b&&b.fn){b.fn.swapper=function(d,e,f){d=b(d)[0];this.each(function(){a._swapper(this,d,e,f)});return this}}return a}(window.Zepto,window.jQuery);Swapper._os=function(f,d){var c,a,b;if(b=/\bCPU.*OS (\d+(_\d+)?)/i.exec(f)){c="ios";a=b[1].replace("_",".")}else{if(b=/\bAndroid (\d+(\.\d+)?)/.exec(f)){c="android";a=b[1]}}var e={name:c,version:a&&d(a)};e[c]=true;return e}(navigator.userAgent,parseFloat);Swapper._isNode=function(a,b){return function(d){if(!d){return false}try{return(d instanceof a)||(d instanceof b)}catch(c){}if(typeof d!=="object"){return false}if(typeof d.nodeType!=="number"){return false}if(typeof d.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Swapper._isInDOM=function(a){return function(c,b){if(!b&&!a(c)){throw TypeError("element must be a DOM node, got "+c)}while(c=c.parentNode){if(c===document){return true}}return false}}(Swapper._isNode);Swapper._insertBefore=function(){return function(a,b){b.parentNode.insertBefore(a,b)}}();Swapper._insertAfter=function(){return function(a,c){var b=c.parentNode;if(b.lastchild===c){b.appendChild(a)}else{b.insertBefore(a,c.nextSibling)}}}();Swapper._removeNode=function(){return function(a){if(a.parentNode){a.parentNode.removeChild(a)}}}();Swapper._setTransform=function(){return function(b,a){b.style["-webkit-transform"]=a;b.style["-moz-transform"]=a;b.style["-ms-transform"]=a;b.style["-o-transform"]=a;b.style.transform=a}}();Swapper._setTransition=function(){return function(a,b){if(b){a.style["-webkit-transition"]="-webkit-"+b;a.style["-moz-transition"]="-moz-"+b;a.style["-ms-transition"]="-ms-"+b;a.style["-o-transition"]="-o-"+b;a.style.transition=b}else{a.style["-webkit-transition"]="";a.style["-moz-transition"]="";a.style["-ms-transition"]="";a.style["-o-transition"]="";a.style.transition=""}}}();Swapper._getStyles=function(a){return function(c,d){var b;if(d){b=c.style}else{b=a.defaultView.getComputedStyle(c,null)}return{display:b.display,opacity:b.opacity,top:b.top,left:b.left,height:b.height,width:b.width,position:b.position}}}(document);Swapper._easings={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};Swapper._transitions={fade:[{fade:true},{fade:true}],"fade-on":[{fade:true},{}],"fade-off":[{},{fade:true},true],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},true],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:true},{transform:"rotateY( 180deg) perspective(360px)",fade:true}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:true},{transform:"rotateY(-180deg) perspective(360px)",fade:true}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:true,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:true,transform:"scale(1.25)"},true],"implode-in":[{},{fade:true,transform:"scale(0.60)"},true],"implode-out":[{fade:true,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},true],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},true],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},true],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},true],"glideon-right":[{transform:"translate3d(100%,0,0)"},{transform:"translate3d(-20%,0,0)"}],"glideoff-right":[{transform:"translate3d(-20%,0,0)"},{transform:"translate3d(100%,0,0)"},true]};Swapper._validate=function(e,f,d){return{element:c,options:b,callback:a};function c(g){if(!e(g)){throw TypeError("element must be a DOM node, got "+g)}}function b(g){switch(typeof g){case"string":g={transition:g};break;case"undefined":g={};break;case"object":break;default:throw TypeError("options must be an object if defined, got "+g)}switch(typeof g.transition){case"string":if(!(g.transition in f)&&(g.transition!=="instant")){throw TypeError(g.transition+" is not a valid transition")}break;case"undefined":break;default:throw TypeError("transition must be a string if defined, got "+g.transition)}switch(typeof g.duration){case"number":if(g.duration<0){throw TypeError("duration must be a non-negative integer, got "+g.duration)}break;case"undefined":break;default:throw TypeError("duration must be a number if defined, got "+g.duration)}switch(typeof g.easing){case"string":if(!(g.easing in d)){throw TypeError(g.easing+" is not a valid easing")}break;case"undefined":break;default:throw TypeError("easing must be a string if defined, got "+g.easing)}return g}function a(g){switch(typeof g){case"undefined":g=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+g)}return g}}(Swapper._isNode,Swapper._transitions,Swapper._easings);Swapper._swapper=function(j,u,e,d,y,v,f,g,i,B,k,p,l,r){var a="translate3d(0,0,0) scale(1)",C="fade",x="ease-in-out";var o=(j.ios&&(Math.floor(j.version)===5));function q(E,D,F,G){p.element(E);p.element(D);if(typeof F==="function"){G=F;F={}}F=p.options(F);G=p.callback(G);if(E._swapper){throw Error("elem1 is currently being swapped")}else{if(D._swapper){throw Error("elem2 is currently being swapped")}}if(!e(E,true)){throw Error("elem1 must be in the DOM to be swapped")}E._swapper=true;D._swapper=true;v(D);n(E,D,F,function(){E._swapper=false;D._swapper=false;G()})}function n(M,L,N,K){if(N.transition==="instant"){y(L,M);v(M);K();return}var J=B[N.transition||C],I=k[N.easing||x],H=N.duration||300;y(L,M);var G=i(M),F=i(L),E=i(M,true),D=i(L,true);A(M,L,G,F);if(J[2]){d(L,M)}b(M,L,J);setTimeout(function(){m(M,L,H,I);setTimeout(function(){w(M,L,J);z(M,L,G,F,J,H,function(){v(M);s(M,L,H,I);setTimeout(function(){t(M,L,E,D,J);c(M,L,E,D);K()},0)})},0)},0)}function A(E,D,G,F){var H=E.getBoundingClientRect();if(G.display!=="none"){if(o){D.style.position="absolute"}else{D.style.position="fixed"}D.style.top=H.top+"px";D.style.left=H.left+"px"}D.style.height=F.height||G.height;D.style.width=F.width||G.width}function c(E,D,G,F){D.style.position=F.position;D.style.top=F.top;D.style.left=F.left;D.style.height=F.height;D.style.width=F.width}function b(E,D,F){f(E,a);f(D,F[0].transform||a);if(F[0].fade){D.style.opacity="0"}if(F[1].fade){E.style.opacity="1"}}function w(E,D,F){f(E,F[1].transform||a);f(D,a);if(F[0].fade){D.style.opacity="1"}if(F[1].fade){E.style.opacity="0"}}function t(E,D,G,F,H){f(E,"");f(D,"");if(H[0].fade){D.style.opacity=F.opacity}if(H[1].fade){E.style.opacity=G.opacity}}function m(E,D,F,H){var G="transform "+(F/1000)+"s "+H+",opacity "+(F/1000)+"s "+H;g(E,G);g(D,G)}function s(E,D,F,G){g(E,"");g(D,"")}function h(D,E){if(D.display==="none"){return false}if(E.fade){return true}if(!E.transform){return false}else{if(E.transform===a){return false}else{return true}}}function z(O,L,F,D,I,G,K){var E;if(h(D,I[0])){E=L;N()}else{if(h(F,I[1])){E=O;N()}else{setTimeout(J,G)}}function N(){E.addEventListener("webkitTransitionEnd",J,false);E.addEventListener("transitionend",J,false);E.addEventListener("oTransitionEnd",J,false);E.addEventListener("otransitionend",J,false);E.addEventListener("MSTransitionEnd",J,false);E.addEventListener("transitionend",J,false)}function M(){E.removeEventListener("webkitTransitionEnd",J);E.removeEventListener("transitionend",J);E.removeEventListener("oTransitionEnd",J);E.removeEventListener("otransitionend",J);E.removeEventListener("MSTransitionEnd",J);E.removeEventListener("transitionend",J)}var H=false;function J(){if(H){return}H=true;if(E){M()}K()}}return q}(Swapper._os,Swapper._isNode,Swapper._isInDOM,Swapper._insertBefore,Swapper._insertAfter,Swapper._removeNode,Swapper._setTransform,Swapper._setTransition,Swapper._getStyles,Swapper._transitions,Swapper._easings,Swapper._validate,window,document);
