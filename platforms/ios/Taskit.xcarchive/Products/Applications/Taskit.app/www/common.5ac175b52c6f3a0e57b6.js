(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B5Ai:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return u});var i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function r(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function o(n,t,e,i){return new(e||(e=Promise))(function(r,o){function u(n){try{a(i.next(n))}catch(t){o(t)}}function l(n){try{a(i.throw(n))}catch(t){o(t)}}function a(n){n.done?r(n.value):new e(function(t){t(n.value)}).then(u,l)}a((i=i.apply(n,t||[])).next())})}function u(n,t){var e,i,r,o,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,i=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){u.label=o[1];break}if(6===o[0]&&u.label<r[1]){u.label=r[1],r=o;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(o);break}r[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(l){o=[6,l],i=0}finally{e=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}},Bs4g:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(n,t){return function(n){return r(n)}(n).includes(t)},r=function(n){n.Ionic=n.Ionic||{};var t=n.Ionic.platforms;return null==t&&(t=n.Ionic.platforms=o(n)).forEach(function(t){return n.document.documentElement.classList.add("plt-"+t)}),t},o=function(n){return Object.keys(p).filter(function(t){return p[t](n)})},u=function(n){return f(n,/iPad/i)},l=function(n){return f(n,/android|sink/i)},a=function(n){return h(n,"(any-pointer:coarse)")},c=function(n){return s(n)||d(n)},s=function(n){return!!(n.cordova||n.phonegap||n.PhoneGap)},d=function(n){var t=n.Capacitor;return!(!t||!t.isNative)},f=function(n,t){return!(!n.navigator||!n.navigator.userAgent)&&t.test(n.navigator.userAgent)},h=function(n,t){return!!n.matchMedia&&n.matchMedia(t).matches},p={ipad:u,iphone:function(n){return f(n,/iPhone/i)},ios:function(n){return f(n,/iPad|iPhone|iPod/i)},android:l,phablet:function(n){var t=n.innerWidth,e=n.innerHeight,i=Math.min(t,e),r=Math.max(t,e);return i>390&&i<520&&r>620&&r<800},tablet:function(n){var t=n.innerWidth,e=n.innerHeight,i=Math.min(t,e),r=Math.max(t,e);return u(n)||function(n){return l(n)&&!f(n,/mobile/i)}(n)||i>460&&i<820&&r>780&&r<1400},cordova:s,capacitor:d,electron:function(n){return f(n,/electron/)},pwa:function(n){return!!n.matchMedia&&(n.matchMedia("(display-mode: standalone)").matches||n.navigator.standalone)},mobile:a,mobileweb:function(n){return a(n)&&!c(n)},desktop:function(n){return!a(n)},hybrid:c}},DQ87:function(n,t,e){"use strict";e.d(t,"a",function(){return p}),e.d(t,"b",function(){return h}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"e",function(){return f}),e.d(t,"f",function(){return o}),e.d(t,"g",function(){return u}),e.d(t,"h",function(){return l});var i=e("B5Ai"),r=0;function o(n,t){var e=n.ownerDocument;(function(n){0===r&&(r=1,n.addEventListener("focusin",function(t){var e=l(n);if(e&&e.backdropDismiss&&!function(n,t){for(;t;){if(t===n)return!0;t=t.parentElement}return!1}(e,t.target)){var i=e.querySelector("input,button");i&&i.focus()}}),n.addEventListener("ionBackButton",function(t){var e=l(n);e&&e.backdropDismiss&&t.detail.register(100,function(){return e.dismiss(void 0,p)})}),n.addEventListener("keyup",function(t){if("Escape"===t.key){var e=l(n);e&&e.backdropDismiss&&e.dismiss(void 0,p)}}))})(e),Object.assign(n,t),n.classList.add("overlay-hidden");var i=r++;return n.overlayIndex=i,n.hasAttribute("id")||(n.id="ion-overlay-"+i),s(e).appendChild(n),n.componentOnReady()}function u(n,t,e,i,r){var o=l(n,i,r);return o?o.dismiss(t,e):Promise.reject("overlay does not exist")}function l(n,t,e){var i=function(n,t){var e=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===t?e:(t=t.toUpperCase(),e.filter(function(n){return n.tagName===t}))}(n,t);return void 0===e?i[i.length-1]:i.find(function(n){return n.id===e})}function a(n,t,e,r,o){return i.a(this,void 0,void 0,function(){var u;return i.c(this,function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),u=n.enterAnimation?n.enterAnimation:n.config.get(t,"ios"===n.mode?e:r),[4,d(n,u,n.el,o)]);case 1:return i.sent()&&n.didPresent.emit(),[2]}})})}function c(n,t,e,r,o,u,l){return i.a(this,void 0,void 0,function(){var a,c;return i.c(this,function(i){switch(i.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,i.label=1;case 1:return i.trys.push([1,3,,4]),n.willDismiss.emit({data:t,role:e}),a=n.leaveAnimation?n.leaveAnimation:n.config.get(r,"ios"===n.mode?o:u),[4,d(n,a,n.el,l)];case 2:return i.sent(),n.didDismiss.emit({data:t,role:e}),[3,4];case 3:return c=i.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function d(n,t,r,o){return i.a(this,void 0,void 0,function(){var u,l,a,c;return i.c(this,function(i){switch(i.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):(r.classList.remove("overlay-hidden"),u=r.shadowRoot||n.el,a=n,[4,e.e(1).then(e.bind(null,"ohUv")).then(function(n){return n.create(t,u,o)})]);case 1:return l=a.animation=i.sent(),n.animation=l,n.animated&&n.config.getBoolean("animated",!0)||l.duration(0),n.keyboardClose&&l.beforeAddWrite(function(){var n=r.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,l.playAsync()];case 2:return i.sent(),c=l.hasCompleted,l.destroy(),n.animation=void 0,[2,c]}})})}function f(n,t){var e,i=new Promise(function(n){return e=n});return function(n,t,e){var i=function(r){n.removeEventListener(t,i),e(r)};n.addEventListener(t,i)}(n,t,function(n){e(n.detail)}),i}function h(n){return"cancel"===n||n===p}var p="backdrop"},HVfF:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e("mrSG"),r=(e("ZZ/e"),e("4aNN")),o=(e("k82s"),e("CftF"),function(){function n(n,t,e,i,r,o,u){var l=this;this.afAuth=n,this.db=t,this.alertCtrl=e,this.router=i,this.modalCtrl=r,this.notifs=o,this.taptic=u,this.user={},this.items=[],this.loading=!0,this.afAuth.authState.subscribe(function(n){n&&(l.user=n)})}return n.prototype.ngOnInit=function(){var n=this;this.afAuth.authState.subscribe(function(t){t&&n.db.collection("users/"+n.afAuth.auth.currentUser.uid+"/"+n.name,function(n){return n.orderBy("pos","desc")}).snapshotChanges().subscribe(function(t){n.items=[],t.forEach(function(t){var e=t.payload.doc.data();e.id=t.payload.doc.id,n.items.push(e),e.fdate=new Date(e.date).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}),n.loading=!1})})},n.prototype.add=function(){return i.__awaiter(this,void 0,void 0,function(){var n,t;return i.__generator(this,function(e){switch(e.label){case 0:return this.taptic.selection(),[4,this.modalCtrl.create({component:r.a})];case 1:return[4,(n=e.sent()).present()];case 2:return e.sent(),[4,n.onDidDismiss()];case 3:return t=e.sent(),this.taptic.selection(),this.handleAddItem(t.data.task,t.data.date),[2]}})})},n.prototype.edit=function(n){return i.__awaiter(this,void 0,void 0,function(){var t,e;return i.__generator(this,function(i){switch(i.label){case 0:return this.taptic.selection(),[4,this.modalCtrl.create({component:r.a,componentProps:{task:n.text,date:n.date}})];case 1:return t=i.sent(),console.log(n.text,n.date),[4,t.present()];case 2:return i.sent(),[4,t.onDidDismiss()];case 3:return e=i.sent(),this.taptic.selection(),e.data.date||(e.data.date=n.date),""===e.data.task&&(e.data.task=n.text),this.handleEditItem(e.data.task,n,e.data.date),[2]}})})},n.prototype.handleAddItem=function(n,t){if(n.trim().length){var e=Math.round(+new Date/1e3);this.notifs.schedule({id:e,title:"Taskit",text:n,trigger:{at:new Date(t)}}),console.log("nowS",e),this.db.collection("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name).add({text:n,date:t,pos:this.items.length?this.items[0].pos+1:0,created:e})}},n.prototype.handleEditItem=function(n,t,e){var i=this;this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+t.id).get().subscribe(function(t){var r=t.data().created;i.notifs.update({id:r,text:n,trigger:{at:new Date(e)}})}),this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+t.id).set({text:n,date:e},{merge:!0})},n.prototype.delete=function(n){this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+n.id).delete()},n.prototype.crit=function(n){this.moveItem(n,"main")},n.prototype.complete=function(n){this.moveItem(n,"done")},n.prototype.moveItem=function(n,t){var e=this;this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+n.id).delete();var i=n.id;delete n.id,this.db.collection("users/"+this.afAuth.auth.currentUser.uid+"/"+t,function(n){return n.orderBy("pos","desc").limit(1)}).get().toPromise().then(function(r){n.pos=0,r.forEach(function(t){n.pos=t.data().pos+1}),e.db.doc("users/"+e.afAuth.auth.currentUser.uid+"/"+t+"/"+i).set(n)})},n.prototype.signOut=function(){return i.__awaiter(this,void 0,void 0,function(){var n=this;return i.__generator(this,function(t){switch(t.label){case 0:return this.taptic.selection(),[4,this.alertCtrl.create({header:"Sign Out?",mode:"md",cssClass:"alertbox",buttons:[{text:"Yes",cssClass:"alertbox",handler:function(){n.taptic.selection(),n.signOuts()}},{text:"No",cssClass:"alertbox",handler:function(){n.taptic.selection()}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.signOuts=function(){this.afAuth.auth.signOut().then(function(){location.reload()})},n.prototype.navDone=function(){this.taptic.selection(),"/main"===this.router.url?this.router.navigateByUrl("/done"):"/done"===this.router.url&&this.router.navigateByUrl("/main")},n.prototype.sendTask=function(n,t){},n.prototype.moveByOffset=function(n,t){this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+this.items[n].id).set({pos:this.items[n+t].pos},{merge:!0}),this.db.doc("users/"+this.afAuth.auth.currentUser.uid+"/"+this.name+"/"+this.items[n+t].id).set({pos:this.items[n].pos},{merge:!0})},n}())},JvIM:function(n,t,e){"use strict";function i(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)}function r(n){return!!n.shadowRoot&&!!n.attachShadow}function o(n){var t=n.closest("ion-item");return t?t.querySelector("ion-label"):null}function u(n,t,e,i,o){if(n||r(t)){var u=t.querySelector("input.aux-input");u||((u=t.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),t.appendChild(u)),u.disabled=o,u.name=e,u.value=i||""}}function l(n,t,e){return Math.max(n,Math.min(t,e))}function a(n){return n.timeStamp||Date.now()}function c(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function s(n,t){var e="rtl"===n.document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(n,t){var e=n._original||n;return{_original:n,emit:f(e.emit.bind(e),t)}}function f(n,t){var e;return void 0===t&&(t=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(i))}}e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r}),e.d(t,"d",function(){return o}),e.d(t,"e",function(){return u}),e.d(t,"f",function(){return d}),e.d(t,"g",function(){return s}),e.d(t,"h",function(){return l}),e.d(t,"i",function(){return f}),e.d(t,"j",function(){return c})},PPRv:function(n,t,e){"use strict";var i=e("CcnG"),r=e("oBZk"),o=e("ZZ/e");e("jkky"),e.d(t,"a",function(){return u}),e.d(t,"b",function(){return l});var u=i.mb({encapsulation:0,styles:[['*[_ngcontent-%COMP%]{font-family:"Product Sans Bold"}@media (min-width:320px){.btn-floating[_ngcontent-%COMP%]{float:right;position:absolute;left:87%;bottom:16%;top:20%}ion-title[_ngcontent-%COMP%]{font-size:24px;padding-left:10px}}@media (min-width:641px){.btn-floating[_ngcontent-%COMP%]{left:96%}ion-title[_ngcontent-%COMP%]{font-size:26px;padding-left:25px}}']],data:{}});function l(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,0,"link",[["href","https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"],["rel","stylesheet"]],null,null,null,null,null)),(n()(),i.ob(1,0,null,null,0,"link",[["href","https://fonts.googleapis.com/icon?family=Material+Icons"],["rel","stylesheet"]],null,null,null,null,null)),(n()(),i.ob(2,0,null,null,2,"ion-title",[["style","float: left;"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.signOut.emit()&&i),i},r.I,r.q)),i.nb(3,49152,null,0,o.xb,[i.h,i.k],null,null),(n()(),i.Bb(4,0,[" ","'s "," (",") "])),(n()(),i.ob(5,0,null,null,2,"a",[["class","btn-flat btn-floating waves-effect"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.add.emit()&&i),i},null,null)),(n()(),i.ob(6,0,null,null,1,"i",[["class","material-icons"],["style","color: purple; font-size: 32px;"]],null,null,null,null,null)),(n()(),i.Bb(-1,null,["add"]))],null,function(n,t){var e=t.component;n(t,4,0,e.user.displayName,e.title,e.items.length)})}},R5Yi:function(n,t,e){"use strict";e.r(t),e.d(t,"createGesture",function(){return f}),e.d(t,"GESTURE_CONTROLLER",function(){return a});var i,r=function(){function n(n){this.doc=n,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return n.prototype.createGesture=function(n){return new o(this,this.newID(),n.name,n.priority||0,!!n.disableScroll)},n.prototype.createBlocker=function(n){return void 0===n&&(n={}),new u(this,this.newID(),n.disable,!!n.disableScroll)},n.prototype.start=function(n,t,e){return this.canStart(n)?(this.requestedStart.set(t,e),!0):(this.requestedStart.delete(t),!1)},n.prototype.capture=function(n,t,e){if(!this.start(n,t,e))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(n){r=Math.max(r,n)}),r===e){this.capturedId=t,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:n}});return this.doc.dispatchEvent(o),!0}return i.delete(t),!1},n.prototype.release=function(n){this.requestedStart.delete(n),this.capturedId===n&&(this.capturedId=void 0)},n.prototype.disableGesture=function(n,t){var e=this.disabledGestures.get(n);void 0===e&&(e=new Set,this.disabledGestures.set(n,e)),e.add(t)},n.prototype.enableGesture=function(n,t){var e=this.disabledGestures.get(n);void 0!==e&&e.delete(t)},n.prototype.disableScroll=function(n){this.disabledScroll.add(n),1===this.disabledScroll.size&&this.doc.body.classList.add(l)},n.prototype.enableScroll=function(n){this.disabledScroll.delete(n),0===this.disabledScroll.size&&this.doc.body.classList.remove(l)},n.prototype.canStart=function(n){return void 0===this.capturedId&&!this.isDisabled(n)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},n.prototype.isDisabled=function(n){var t=this.disabledGestures.get(n);return!!(t&&t.size>0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n}(),o=function(){function n(n,t,e,i,r){this.id=t,this.name=e,this.disableScroll=r,this.priority=1e6*i+t,this.ctrl=n}return n.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},n.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},n.prototype.capture=function(){if(!this.ctrl)return!1;var n=this.ctrl.capture(this.name,this.id,this.priority);return n&&this.disableScroll&&this.ctrl.disableScroll(this.id),n},n.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},n.prototype.destroy=function(){this.release(),this.ctrl=void 0},n}(),u=function(){function n(n,t,e,i){this.id=t,this.disable=e,this.disableScroll=i,this.ctrl=n}return n.prototype.block=function(){if(this.ctrl){if(this.disable)for(var n=0,t=this.disable;n<t.length;n++)this.ctrl.disableGesture(t[n],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},n.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var n=0,t=this.disable;n<t.length;n++)this.ctrl.enableGesture(t[n],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},n.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},n}(),l="backdrop-no-scroll",a=new r(document);function c(n,t,e,r){var o,u,l=function(n){if(void 0===i)try{var t=Object.defineProperty({},"passive",{get:function(){i=!0}});n.addEventListener("optsTest",function(){},t)}catch(n){i=!1}return!!i}(n)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return n.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(o="addEventListener",u="removeEventListener"),n[o](t,e,l),function(){n[u](t,e,l)}}var s=2e3;function d(n){return n instanceof Document?n:n.ownerDocument}function f(n){var t=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},n),e=t.canStart,i=t.onWillStart,r=t.onStart,o=t.onEnd,u=t.notCaptured,l=t.onMove,f=t.threshold,v=t.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(n,t,e,i,r){var o,u,l,a,f,h,p,m=0;function v(i){m=Date.now()+s,t(i)&&(!u&&e&&(u=c(n,"touchmove",e,r)),l||(l=c(n,"touchend",g,r)),a||(a=c(n,"touchcancel",g,r)))}function b(i){m>Date.now()||t(i)&&(!h&&e&&(h=c(d(n),"mousemove",e,r)),p||(p=c(d(n),"mouseup",y,r)))}function g(n){w(),i&&i(n)}function y(n){k(),i&&i(n)}function w(){u&&u(),l&&l(),a&&a(),u=l=a=void 0}function k(){h&&h(),p&&p(),h=p=void 0}function S(){w(),k()}function x(t){t?(o&&o(),f&&f(),o=f=void 0,S()):(o||(o=c(n,"touchstart",v,r)),f||(f=c(n,"mousedown",b,r)))}return{setDisabled:x,stop:S,destroy:function(){x(!0),i=e=t=void 0}}}(t.el,function(n){var t=m(n);return!(S||!x)&&(p(n,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=t,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=n,(!e||!1!==e(b))&&(w.release(),!!w.start()&&(S=!0,0===f?A():(y.start(b.startX,b.startY),!0))))},function(n){k?!C&&x&&(C=!0,h(b,n),v.write(E)):(h(b,n),y.detect(b.currentX,b.currentY)&&(y.isGesture()&&A()||(_(),g.stop(),u&&u(b))))},D,{capture:!1}),y=function(n,t,e){var i=e*(Math.PI/180),r="x"===n,o=Math.cos(i),u=t*t,l=0,a=0,c=!1,s=0;return{start:function(n,t){l=n,a=t,s=0,c=!0},detect:function(n,t){if(!c)return!1;var e=n-l,i=t-a,d=e*e+i*i;if(d<u)return!1;var f=Math.sqrt(d),h=(r?e:i)/f;return s=h>o?1:h<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==s},getDirection:function(){return s}}}(t.direction,t.threshold,t.maxAngle),w=a.createGesture({name:n.gestureName,priority:n.gesturePriority,disableScroll:n.disableScroll}),k=!1,S=!1,x=!0,C=!1;function E(){k&&(C=!1,l&&l(b))}function A(){return!(w&&!w.capture()||(k=!0,x=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,i?i(b).then(I):I(),0))}function I(){r&&r(b),x=!0}function _(){k=!1,S=!1,C=!1,x=!0,w.release()}function D(n){var t=k,e=x;_(),e&&(h(b,n),t?o&&o(b):u&&u(b))}return{setDisabled:function(n){n&&k&&D(void 0),g.setDisabled(n)},destroy:function(){w.destroy(),g.destroy()}}}function h(n,t){if(t){var e=n.currentX,i=n.currentY,r=n.timeStamp;p(t,n);var o=n.currentX,u=n.currentY,l=(n.timeStamp=m(t))-r;if(l>0&&l<100){var a=(u-i)/l;n.velocityX=(o-e)/l*.7+.3*n.velocityX,n.velocityY=.7*a+.3*n.velocityY}n.deltaX=o-n.startX,n.deltaY=u-n.startY,n.event=t}}function p(n,t){var e=0,i=0;if(n){var r=n.changedTouches;if(r&&r.length>0){var o=r[0];e=o.clientX,i=o.clientY}else void 0!==n.pageX&&(e=n.pageX,i=n.pageY)}t.currentX=e,t.currentY=i}function m(n){return n.timeStamp||Date.now()}},WmWN:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,l.forEach(function(n){for(var e=t.querySelectorAll(n),i=e.length-1;i>=0;i--){var u=e[i];u.parentNode?u.parentNode.removeChild(u):t.removeChild(u);for(var l=o(u),a=0;a<l.length;a++)r(l[a])}});for(var i=o(t),u=0;u<i.length;u++)r(i[u]);var a=document.createElement("div");a.appendChild(t);var c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(n){return console.error(n),""}},r=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes[t],i=e.name;if(u.includes(i.toLowerCase())){var l=e.value;null!=l&&l.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}var a=o(n);for(t=0;t<a.length;t++)r(a[t])}},o=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},ZVGD:function(n,t,e){"use strict";var i=e("CcnG"),r=e("oBZk"),o=e("ZZ/e"),u=e("Ip0R");e("HVfF"),e("ZBkt"),e("fvl4"),e("ZYCi"),e("k82s"),e("CftF"),e.d(t,"a",function(){return l}),e.d(t,"b",function(){return m});var l=i.mb({encapsulation:0,styles:[["ion-spinner[_ngcontent-%COMP%]{margin-left:16px}*[_ngcontent-%COMP%]{font-family:\"Product Sans\"}.card[_ngcontent-%COMP%]{padding:0!important;border-radius:10px;background-color:#2e2e2e;margin-left:2%;margin-right:0;white-space:normal!important;width:95%!important}.label[_ngcontent-%COMP%]{font-size:17px;font-family:'Product Sans Bold'}ion-note[_ngcontent-%COMP%]{font-size:15px;color:#cfcfcf}"]],data:{}});function a(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,1,"ion-spinner",[["color","primary"]],null,null,null,r.H,r.p)),i.nb(1,49152,null,0,o.pb,[i.h,i.k],{color:[0,"color"]},null)],function(n,t){n(t,1,0,"primary")},null)}function c(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,3,"ion-item-option",[["color","success"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.complete(n.parent.context.$implicit)&&i),i},r.A,r.j)),i.nb(1,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"],expandable:[1,"expandable"]},null),(n()(),i.ob(2,0,null,0,1,"ion-icon",[["name","checkmark-circle"]],null,null,null,r.y,r.g)),i.nb(3,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,1,0,"success",t.component.allowDone),n(t,3,0,"checkmark-circle")},null)}function s(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,3,"ion-item-option",[["color","secondary"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.crit(n.parent.context.$implicit)&&i),i},r.A,r.j)),i.nb(1,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"]},null),(n()(),i.ob(2,0,null,0,1,"ion-icon",[["name","flash"]],null,null,null,r.y,r.g)),i.nb(3,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,1,0,"secondary"),n(t,3,0,"flash")},null)}function d(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,3,"ion-item-option",[["color","secondary"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.later(n.parent.context.$implicit)&&i),i},r.A,r.j)),i.nb(1,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"]},null),(n()(),i.ob(2,0,null,0,1,"ion-icon",[["name","moon"]],null,null,null,r.y,r.g)),i.nb(3,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,1,0,"secondary"),n(t,3,0,"moon")},null)}function f(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,3,"ion-item-option",[["color","secondary"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.moveByOffset(n.parent.context.index,-1)&&i),i},r.A,r.j)),i.nb(1,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"]},null),(n()(),i.ob(2,0,null,0,1,"ion-icon",[["name","arrow-up"]],null,null,null,r.y,r.g)),i.nb(3,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,1,0,"secondary"),n(t,3,0,"arrow-up")},null)}function h(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,3,"ion-item-option",[["color","secondary"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.moveByOffset(n.parent.context.index,1)&&i),i},r.A,r.j)),i.nb(1,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"]},null),(n()(),i.ob(2,0,null,0,1,"ion-icon",[["name","arrow-down"]],null,null,null,r.y,r.g)),i.nb(3,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,1,0,"secondary"),n(t,3,0,"arrow-down")},null)}function p(n){return i.Cb(0,[(n()(),i.ob(0,0,null,null,27,"ion-item-sliding",[["class","card"]],null,null,null,r.C,r.l)),i.nb(1,49152,null,0,o.K,[i.h,i.k],null,null),(n()(),i.ob(2,0,null,0,7,"ion-item",[],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.edit(n.context.$implicit)&&i),i},r.D,r.i)),i.nb(3,49152,null,0,o.F,[i.h,i.k],null,null),(n()(),i.ob(4,0,null,0,2,"ion-label",[["class","label"]],null,null,null,r.E,r.m)),i.nb(5,49152,null,0,o.L,[i.h,i.k],null,null),(n()(),i.Bb(6,0,["",""])),(n()(),i.ob(7,0,null,0,2,"ion-note",[["color","primary"],["mode","ios"],["slot","end"]],null,null,null,r.G,r.o)),i.nb(8,49152,null,0,o.V,[i.h,i.k],{color:[0,"color"],mode:[1,"mode"]},null),(n()(),i.Bb(9,0,["",""])),(n()(),i.ob(10,0,null,0,11,"ion-item-options",[["side","start"]],null,[[null,"ionSwipe"]],function(n,t,e){var i=!0;return"ionSwipe"===t&&(i=!1!==n.component.complete(n.context.$implicit)&&i),i},r.B,r.k)),i.nb(11,49152,null,0,o.J,[i.h,i.k],{side:[0,"side"]},null),(n()(),i.fb(16777216,null,0,1,null,c)),i.nb(13,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.fb(16777216,null,0,1,null,s)),i.nb(15,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.fb(16777216,null,0,1,null,d)),i.nb(17,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.fb(16777216,null,0,1,null,f)),i.nb(19,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.fb(16777216,null,0,1,null,h)),i.nb(21,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.ob(22,0,null,0,5,"ion-item-options",[["side","end"]],null,[[null,"ionSwipe"]],function(n,t,e){var i=!0;return"ionSwipe"===t&&(i=!1!==n.component.delete(n.context.$implicit)&&i),i},r.B,r.k)),i.nb(23,49152,null,0,o.J,[i.h,i.k],{side:[0,"side"]},null),(n()(),i.ob(24,0,null,0,3,"ion-item-option",[["color","danger"],["expandable",""]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.delete(n.context.$implicit)&&i),i},r.A,r.j)),i.nb(25,49152,null,0,o.I,[i.h,i.k],{color:[0,"color"],expandable:[1,"expandable"]},null),(n()(),i.ob(26,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,r.y,r.g)),i.nb(27,49152,null,0,o.A,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){var e=t.component;n(t,8,0,"primary","ios"),n(t,11,0,"start"),n(t,13,0,e.allowDone),n(t,15,0,e.allowCrit),n(t,17,0,e.allowLater),n(t,19,0,0!==t.context.index),n(t,21,0,t.context.index!==e.items.length-1),n(t,23,0,"end"),n(t,25,0,"danger",""),n(t,27,0,"close")},function(n,t){n(t,6,0,t.context.$implicit.text),n(t,9,0,t.context.$implicit.fdate)})}function m(n){return i.Cb(0,[(n()(),i.fb(16777216,null,null,1,null,a)),i.nb(1,16384,null,0,u.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.fb(16777216,null,null,1,null,p)),i.nb(3,278528,null,0,u.h,[i.N,i.K,i.s],{ngForOf:[0,"ngForOf"]},null),(n()(),i.ob(4,0,null,null,3,"div",[["class","fixed-action-btn"],["style","bottom: 45px; right: 24px;"]],null,null,null,null,null)),(n()(),i.ob(5,0,null,null,2,"a",[["class","btn-floating btn-large purple"]],null,null,null,null,null)),(n()(),i.ob(6,0,null,null,1,"i",[["class","large material-icons"]],null,[[null,"click"]],function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.navDone()&&i),i},null,null)),(n()(),i.Bb(-1,null,["swap_horiz"]))],function(n,t){var e=t.component;n(t,1,0,e.loading),n(t,3,0,e.items)},null)}},awvO:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return r}),e.d(t,"d",function(){return u}),e.d(t,"e",function(){return l});var i="ionViewWillEnter",r="ionViewDidEnter",o="ionViewWillLeave",u="ionViewDidLeave",l="ionViewWillUnload"},cDAM:function(n,t,e){"use strict";e.d(t,"a",function(){return y}),e.d(t,"b",function(){return b}),e.d(t,"c",function(){return l}),e.d(t,"d",function(){return w});var i=e("B5Ai"),r=e("awvO"),o=function(){return e.e(52).then(e.bind(null,"rSHd"))},u=function(){return e.e(53).then(e.bind(null,"NJz6"))};function l(n){return new Promise(function(t,e){n.queue.write(function(){(function(n){var t=n.enteringEl,e=n.leavingEl;(function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),e&&w(e,!1)})(n),function(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return[4,c(n)];case 1:return[2,(t=e.sent())?s(t,n):d(n)]}})})}(n).then(function(e){e.animation&&e.animation.destroy(),a(n),t(e)},function(t){a(n),e(t)})})})}function a(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function c(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,o()]:[2,void 0];case 1:return t=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:t=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,t]}})})}function s(n,t){return i.a(this,void 0,void 0,function(){var r;return i.c(this,function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:return i.sent(),[4,e.e(1).then(e.bind(null,"ohUv")).then(function(e){return e.create(n,t.baseEl,t)})];case 2:return r=i.sent(),m(t.enteringEl,t.leavingEl),[4,p(r,t)];case 3:return i.sent(),t.progressCallback&&t.progressCallback(void 0),r.hasCompleted&&v(t.enteringEl,t.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function d(n){return i.a(this,void 0,void 0,function(){var t,e;return i.c(this,function(i){switch(i.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,f(n,!1)];case 1:return i.sent(),m(t,e),v(t,e),[2,{hasCompleted:!0}]}})})}function f(n,t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(i){switch(i.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[g(n.enteringEl),g(n.leavingEl)],[4,Promise.all(e)];case 1:return i.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return i.sent(),[2]}})})}function h(n,t){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function p(n,t){var e=t.progressCallback,i=new Promise(function(t){return n.onFinish(t)});return e?(n.progressStart(),e(n)):n.play(),i}function m(n,t){b(t,r.a),b(n,r.b)}function v(n,t){b(n,r.c),b(t,r.d)}function b(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}}function g(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function y(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},d6Vy:function(n,t,e){"use strict";e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return r});var i=e("B5Ai");function r(n,t){return null!==t.closest(n)}function o(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function u(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var l=/^[a-z][a-z0-9+\-.]*:/;function a(n,t,e,r){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||l.test(t)?[3,2]:(o=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return i.sent(),[2,o.push(t,r)];case 2:return[2,!1]}})})}},jT1R:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o});var i=e("B5Ai");function r(n,t,e,r,o){return i.a(this,void 0,void 0,function(){var u;return i.c(this,function(i){switch(i.label){case 0:if(n)return[2,n.attachViewToDom(t,e,o,r)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,r&&r.forEach(function(n){return u.classList.add(n)}),o&&Object.assign(u,o),t.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,u]}})})}function o(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},jkky:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var i=e("CcnG"),r=function(){function n(){this.add=new i.m,this.signOut=new i.m}return n.prototype.ngOnInit=function(){},n}()},ySCp:function(n,t,e){"use strict";function i(){var n=window.TapticEngine;n&&n.selection()}function r(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function o(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return i})}}]);