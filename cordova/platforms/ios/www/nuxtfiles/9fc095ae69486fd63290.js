(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{280:function(t,e,n){"use strict";var strong=n(291),r=n(281);t.exports=n(292)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},281:function(t,e,n){var r=n(32);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},291:function(t,e,n){"use strict";var r=n(33).f,o=n(106),c=n(177),l=n(53),f=n(175),d=n(176),v=n(123),m=n(178),h=n(124),y=n(24),w=n(122).fastKey,x=n(281),_=y?"_s":"size",k=function(t,e){var n,r=w(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var m=t((function(t,r){f(t,m,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[_]=0,null!=r&&d(r,n,t[v],t)}));return c(m.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[_]=0},delete:function(t){var n=x(this,e),r=k(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[_]--}return!!r},forEach:function(t){x(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!k(x(this,e),t)}}),y&&r(m.prototype,"size",{get:function(){return x(this,e)[_]}}),m},def:function(t,e,n){var r,o,c=k(t,e);return c?c.v=n:(t._l=c={i:o=w(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[_]++,"F"!==o&&(t._i[o]=c)),t},getEntry:k,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=x(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?m(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,m(1))}),n?"entries":"values",!n,!0),h(e)}}},292:function(t,e,n){"use strict";var r=n(17),o=n(14),c=n(38),l=n(177),meta=n(122),f=n(176),d=n(175),v=n(32),m=n(26),h=n(125),y=n(80),w=n(126);t.exports=function(t,e,n,x,_,k){var j=r[t],O=j,S=_?"set":"add",C=O&&O.prototype,P={},F=function(t){var e=C[t];c(C,t,"delete"==t?function(a){return!(k&&!v(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof O&&(k||C.forEach&&!m((function(){(new O).entries().next()})))){var E=new O,L=E[S](k?{}:-0,1)!=E,z=m((function(){E.has(1)})),V=h((function(t){new O(t)})),$=!k&&m((function(){for(var t=new O,e=5;e--;)t[S](e,e);return!t.has(-0)}));V||((O=e((function(e,n){d(e,O,t);var r=w(new j,e,O);return null!=n&&f(n,_,r[S],r),r}))).prototype=C,C.constructor=O),(z||$)&&(F("delete"),F("has"),_&&F("get")),($||L)&&F(S),k&&C.clear&&delete C.clear}else O=x.getConstructor(e,t,_,S),l(O.prototype,n),meta.NEED=!0;return y(O,t),P[t]=O,o(o.G+o.W+o.F*(O!=j),P),k||x.setStrong(O,t,_),O}},301:function(t,e,n){"use strict";var r=n(3),o=n(1);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(r.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},302:function(t,e,n){"use strict";n(19),n(9),n(66),n(30),n(36);var r=n(3),o=(n(79),n(280),n(31),n(6),n(5),n(11),n(52),n(289),n(1)),c=n(279),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),h=d.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(h)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},v,{offset:{type:[String,Number],default:null}},m,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),Object(r.a)(t,"justify-self-".concat(n.justifySelf),n.justifySelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},303:function(t,e,n){"use strict";n(19),n(9);var r=n(3),o=(n(79),n(280),n(31),n(6),n(5),n(11),n(30),n(36),n(289),n(1)),c=n(279),l=n(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return d.reduce((function(n,r){return n[t+Object(l.t)(r)]=e(),n}),{})}var h=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:h}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:w}})),_=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:_}})),j={align:Object.keys(y),justify:Object.keys(x),alignContent:Object.keys(k)},O={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=O[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},y,{justify:{type:String,default:null,validator:w}},x,{alignContent:{type:String,default:null,validator:_}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=C.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},374:function(t,e,n){var content=n(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0afced8c",content,!0,{sourceMap:!1})},375:function(t,e){},517:function(t,e,n){t.exports=n.p+"img/06c8dcd.svg"},518:function(t,e,n){"use strict";var r=n(374);n.n(r).a},519:function(t,e,n){(e=n(22)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,900&display=swap);"]),e.push([t.i,"*[data-v-094f56b6]{font-family:Montserrat,Helvetica,Arial,sans-serif!important}.flex[data-v-094f56b6]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-094f56b6]{background:#fff!important}.page-title[data-v-094f56b6]{font-size:20px;font-weight:900;line-height:24px;text-transform:uppercase;color:#60c;width:90%;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.logo-container[data-v-094f56b6]{display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start}.logo-container img[data-v-094f56b6]{width:48px}.v-form[data-v-094f56b6]{width:100%}[data-v-094f56b6] .theme--light.v-text-field{margin-top:0}[data-v-094f56b6] .v-input{width:90%;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}[data-v-094f56b6] .theme--light.v-input:not(.v-input--is-disabled) input{font-size:12px;color:#60c}[data-v-094f56b6] .theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c}.theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot[data-v-094f56b6]:hover:before{border-color:#60c!important}[data-v-094f56b6] .theme--light.v-icon,[data-v-094f56b6] .theme--light.v-label{font-size:12px;font-weight:600;line-height:15px;color:#aa56ff}.theme--light.v-input:not(.v-input--is-disabled) input[data-v-094f56b6]{color:#60c!important}[data-v-094f56b6] .theme--light.v-icon{font-size:20px}[data-v-094f56b6] .v-btn{margin-top:15px}[data-v-094f56b6] .v-btn__content{color:#fff;font-size:12px;font-weight:900;line-height:15px}.v-text-field[data-v-094f56b6]{padding-top:0!important;margin-top:0!important;color:#60c}[data-v-094f56b6] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff}.theme--dark.v-input:not(.v-input--is-disabled) input[data-v-094f56b6]{color:#60c}[data-v-094f56b6] .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:#ff5252}[data-v-094f56b6] .v-messages__message{color:#ff5252;font-size:12px;margin-left:5px}.login-link[data-v-094f56b6]{font-size:12px;color:#60c}.hide-form[data-v-094f56b6]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-094f56b6]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}",""]),t.exports=e},520:function(t,e,n){"use strict";var r=n(375),o=n.n(r);e.default=o.a},618:function(t,e,n){"use strict";n.r(e);var r=n(104),o=n(21),c={data:function(){return{title:"Cadastro",status:!0,loading:!1,showPass:String,showConfirmPass:String,snackbar:!1,snackbarText:"",snackbarStatus:"",form:{name:"",email:"",password:"",confirmPassword:"",urlFacebook:"",urlInstagram:"",role:"STUDENT"},nameRules:[function(t){return!!t||"Digite seu nome"}],passwordRules:[function(t){return!!t||"Digite a senha"},function(t){return t&&t.length>=6||"A senha deve ter no mínimo 6 caractéres"}],emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Cadastra-se no aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e=Object.assign({},this.form);delete e.confirmPassword,this.animateForm(!0),this.loadClientCredentials().then((function(n){var o=n.data.accessToken;r.a.signUp(e,o).then((function(e){t.loading=!1,t.confirmSnackbar("Cadastro efetuado! ;)","success"),setTimeout((function(){t.gotoLogin()}),2500)})).catch((function(e){setTimeout((function(){t.loading=!1}),500),console.error(e)}))})).catch((function(){$nuxt._router.push("/login")}))}else this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},showPassword:function(){"mdi-eye"===this.eyeIcon?this.eyeIcon="mdi-eye-off":this.eyeIcon="mdi-eye"},showConfirmPassword:function(){"mdi-eye"===this.eyeIcon2?this.eyeIcon2="mdi-eye-off":this.eyeIcon2="mdi-eye"},gotoLogin:function(){$nuxt._router.push("/login")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0},loadClientCredentials:function(){return o.a.getExternalCredentials()}},computed:{confirmPasswordRules:function(){var t=this;return[function(t){return!!t||"Confirme a senha"},function(){return t.form.password===t.form.confirmPassword||"As senhas devem ser idênticas."}]}}},l=(n(518),n(39)),f=n(520),d=n(43),v=n.n(d),m=n(272),h=n(302),y=n(593),w=n(317),x=n(594),_=n(308),k=n(117),j=n(303),O=n(273),S=n(315),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.loading?r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}}):r("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"logo-container"},[r("img",{attrs:{src:n(517),alt:"castor"}})])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"page-title"},[t._v("Cadastro")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[r("v-text-field",{attrs:{color:"#60c",label:"Nome *",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{attrs:{color:"#60c",rules:t.emailRules,label:"Email *",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-text-field",{attrs:{color:"#60c",label:"Senha *",name:"password",rules:t.passwordRules,type:t.showPass?"password":"text","append-icon":t.showPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showPass=!t.showPass}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),r("v-text-field",{attrs:{color:"#60c",label:"Confirmar senha *",rules:t.confirmPasswordRules,type:t.showConfirmPass?"password":"text","append-icon":t.showConfirmPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showConfirmPass=!t.showConfirmPass}},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}}),t._v(" "),r("v-text-field",{attrs:{color:"#60c",label:"URL do Facebook",name:"urlFacebook",required:""},model:{value:t.form.urlFacebook,callback:function(e){t.$set(t.form,"urlFacebook",e)},expression:"form.urlFacebook"}}),t._v(" "),r("v-text-field",{attrs:{color:"#60c",type:"text",label:"URL do Instagram",name:"urlInstagram",required:""},model:{value:t.form.urlInstagram,callback:function(e){t.$set(t.form,"urlInstagram",e)},expression:"form.urlInstagram"}}),t._v(" "),r("v-btn",{attrs:{color:"#60c",dark:"",block:"",depressed:"",large:""},on:{click:t.submit}},[t._v("Cadastrar")])],1)],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("a",{staticClass:"login-link",on:{click:t.gotoLogin}},[t._v("Ops, já tenho conta")])]),t._v(" "),r("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),r("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)}),[],!1,null,"094f56b6",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;v()(component,{VBtn:m.a,VCol:h.a,VContainer:y.a,VFlex:w.a,VForm:x.a,VLayout:_.a,VProgressCircular:k.a,VRow:j.a,VSnackbar:O.a,VTextField:S.a})}}]);