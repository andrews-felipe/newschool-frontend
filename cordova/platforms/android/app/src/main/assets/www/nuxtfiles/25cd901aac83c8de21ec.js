(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{297:function(t,e,r){"use strict";var n=r(3),o=r(1);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},353:function(t,e,r){var content=r(603);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("02f2b266",content,!0,{sourceMap:!1})},354:function(t,e){},600:function(t,e,r){t.exports=r.p+"img/340d766.svg"},601:function(t,e,r){"use strict";(function(e){function r(t){if(!(this instanceof r))throw new Error("StackUtils constructor must be called with new");t=t||{},this._cwd=(t.cwd||e.cwd()).replace(/\\/g,"/"),this._internals=t.internals||[],this._wrapCallSite=t.wrapCallSite||!1}t.exports=r,t.exports.nodeInternals=function(){t.exports.natives||(t.exports.natives=Object.keys(e.binding("natives")),t.exports.natives.push("bootstrap_node","node","internal/bootstrap/node"));return t.exports.natives.map((function(t){return new RegExp("\\("+t+"\\.js:\\d+:\\d+\\)$")})).concat([/\s*at (bootstrap_)?node\.js:\d+:\d+?$/,/\(internal\/[^:]+:\d+:\d+\)$/,/\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/])},r.prototype.clean=function(t){Array.isArray(t)||(t=t.split("\n")),!/^\s*at /.test(t[0])&&/^\s*at /.test(t[1])&&(t=t.slice(1));var e=!1,r=null,n=[];return t.forEach((function(t){if(t=t.replace(/\\/g,"/"),this._internals.some((function(e){return e.test(t)})))return null;var o=/^\s*at /.test(t);e?t=t.replace(/\s+$/,"").replace(/^(\s+)at /,"$1"):(t=t.trim(),o&&(t=t.substring(3))),(t=t.replace(this._cwd+"/",""))&&(o?(r&&(n.push(r),r=null),n.push(t)):(e=!0,r=t))}),this),(t=n.join("\n").trim())?t+"\n":""},r.prototype.captureString=function(t,e){"function"==typeof t&&(e=t,t=1/0),e||(e=this.captureString);var r=Error.stackTraceLimit;t&&(Error.stackTraceLimit=t);var n={};Error.captureStackTrace(n,e);var o=n.stack;return Error.stackTraceLimit=r,this.clean(o)},r.prototype.capture=function(t,e){"function"==typeof t&&(e=t,t=1/0),e||(e=this.capture);var r=Error.prepareStackTrace,n=Error.stackTraceLimit,o=this._wrapCallSite;Error.prepareStackTrace=function(t,e){return o?e.map(o):e},t&&(Error.stackTraceLimit=t);var c={};Error.captureStackTrace(c,e);var l=c.stack;return Error.prepareStackTrace=r,Error.stackTraceLimit=n,l},r.prototype.at=function t(e){e||(e=t);var r=this.capture(1,e)[0];if(!r)return{};var n={line:r.getLineNumber(),column:r.getColumnNumber()};this._setFile(n,r.getFileName()),r.isConstructor()&&(n.constructor=!0),r.isEval()&&(n.evalOrigin=r.getEvalOrigin()),r.isNative()&&(n.native=!0);var o=null;try{o=r.getTypeName()}catch(t){}o&&"Object"!==o&&"[object Object]"!==o&&(n.type=o);var c=r.getFunctionName();c&&(n.function=c);var l=r.getMethodName();return l&&c!==l&&(n.method=l),n},r.prototype._setFile=function(t,e){e&&(0===(e=e.replace(/\\/g,"/")).indexOf(this._cwd+"/")&&(e=e.substr(this._cwd.length+1)),t.file=e)};var n=new RegExp("^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$"),o=/^(.*?) \[as (.*?)\]$/;r.prototype.parseLine=function(line){var t=line&&line.match(n);if(!t)return null;var e="new"===t[1],r=t[2],c=t[3],l=t[4],d=Number(t[5]),f=Number(t[6]),v=t[7],m=t[8],col=t[9],h="native"===t[10],x=")"===t[11],k={};if(m&&(k.line=Number(m)),col&&(k.column=Number(col)),x&&v)for(var w=0,i=v.length-1;i>0;i--)if(")"===v.charAt(i))w++;else if("("===v.charAt(i)&&" "===v.charAt(i-1)&&-1===--w&&" "===v.charAt(i-1)){var _=v.substr(0,i-1),y=v.substr(i+1);v=y,r+=" ("+_;break}if(r){var E=r.match(o);if(E){r=E[1];var L=E[2]}}return this._setFile(k,v),e&&(k.constructor=!0),c&&(k.evalOrigin=c,k.evalLine=d,k.evalColumn=f,k.evalFile=l&&l.replace(/\\/g,"/")),h&&(k.native=!0),r&&(k.function=r),L&&r!==L&&(k.method=L),k};var c=new r;Object.keys(r.prototype).forEach((function(t){r[t]=c[t].bind(c)}))}).call(this,r(131))},602:function(t,e,r){"use strict";var n=r(353);r.n(n).a},603:function(t,e,r){(e=r(23)(!1)).push([t.i,"*[data-v-7d412b1a]{font-family:Montserrat,Helvetica,Arial,sans-serif!important}.flex[data-v-7d412b1a]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-7d412b1a]{background:#fff!important}.page-title[data-v-7d412b1a]{font-size:16px;font-weight:900;line-height:19px;text-align:center;text-transform:uppercase;color:#60c}.relative-col[data-v-7d412b1a]{position:relative}.logo-container[data-v-7d412b1a]{display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start}.logo-container img[data-v-7d412b1a]{width:80px}.logo-center[data-v-7d412b1a]{text-align:center}.v-form[data-v-7d412b1a]{width:100%}.theme--light.v-label[data-v-7d412b1a]{font-weight:600;color:#aa56ff!important}.theme--light.v-text-field>.v-input__control>.v-input__slot[data-v-7d412b1a]:before{border-color:#aa56ff!important}.theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot[data-v-7d412b1a]:hover:before{border-color:#60c!important}.theme--light.v-input:not(.v-input--is-disabled) input[data-v-7d412b1a]{color:#60c!important}.v-input__slot[data-v-7d412b1a]{margin-top:20px!important;padding-left:5px!important;width:100%;border-radius:unset!important;background-color:#fff!important;box-shadow:none!important}.v-text-field[data-v-7d412b1a]{padding-top:0!important;margin-top:0!important;color:#60c}.theme--dark.v-input:not(.v-input--is-disabled) input[data-v-7d412b1a]{color:#60c}.v-icon.v-icon.v-icon--link[data-v-7d412b1a]{color:#aa56ff;padding-right:5px}.theme--light.v-btn[data-v-7d412b1a]:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){background:#60c!important;border-radius:5px!important;color:#fff!important;font-weight:700!important}.login-link[data-v-7d412b1a]{color:#60c!important}.hide-form[data-v-7d412b1a]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-7d412b1a]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}.v-messages__message[data-v-7d412b1a]{color:#ff5252!important;font-size:12px!important;margin-left:5px}.v-snack__content[data-v-7d412b1a]{border-radius:5px}[data-v-7d412b1a] .theme--light.v-icon,[data-v-7d412b1a] .theme--light.v-label{font-size:12px;font-weight:600;line-height:15px;color:#aa56ff}[data-v-7d412b1a] .btn-back{position:absolute;left:0;top:0;margin-top:3px}[data-v-7d412b1a] .btn-back .theme--light.v-icon{color:#60c;font-size:25px}[data-v-7d412b1a] .theme--light.v-icon{font-size:20px}[data-v-7d412b1a] .change-btn{margin-top:20px;width:100%;box-shadow:0 4px 5px grey!important}",""]),t.exports=e},604:function(t,e,r){"use strict";var n=r(354),o=r.n(n);e.default=o.a},750:function(t,e,r){"use strict";r.r(e);var n=r(104),o=(r(601),{data:function(){return{status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",token:"",form:{email:""},emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}]}},methods:{submit:function(){var t=this;this.$refs.form.validate()?(this.animateForm(!0),n.a.forgotPassword(this.form).then((function(e){t.loading=!1,t.confirmSnackbar("O link foi pro seu email! ;)","success"),setTimeout((function(){t.gotoLogin()}),2500)})).catch((function(e){t.confirmSnackbar("E-mail inválido.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoLogin:function(){$nuxt._router.push("/login")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},loadClientCredentials:function(){var t=this;utils.getExternalCredentials().then((function(e){console.log(e),t.token=e.data.accessToken})).catch((function(){$$nuxt._router.push("/login")}))}}),c=(r(602),r(39)),l=r(604),d=r(43),f=r.n(d),v=r(272),m=r(728),h=r(412),x=r(311),k=r(729),w=r(267),_=r(305),y=r(117),E=r(730),L=r(273),T=r(308),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.loading?n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}}):n("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[n("v-container",[n("v-row",[n("v-col",{staticClass:"relative-col",attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.gotoLogin}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("h2",{staticClass:"page-title"},[t._v("Perdeu a senha?")])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"15"}},[n("div",{staticClass:"logo-center"},[n("img",{attrs:{src:r(600),alt:"castor"}})])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"15"}},[n("a",{staticClass:"page-text"},[t._v("Digite seu email registrado para redefinir sua senha")])])],1),t._v(" "),n("v-row",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-col",{attrs:{cols:"15"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"Email *",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"#60c",dark:"",block:"",depressed:"",large:""},on:{click:t.submit}},[t._v("Redefinir senha")])],1)],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("a",{staticClass:"login-link",on:{click:t.gotoLogin}},[t._v("Voltar para o Login")])]),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)}),[],!1,null,"7d412b1a",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;f()(component,{VBtn:v.a,VCol:m.a,VContainer:h.a,VFlex:x.a,VForm:k.a,VIcon:w.a,VLayout:_.a,VProgressCircular:y.a,VRow:E.a,VSnackbar:L.a,VTextField:T.a})}}]);