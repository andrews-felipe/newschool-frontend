(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{276:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("77f4c5a8",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("10e8a9fe",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n(174),n(19),n(9),n(6),n(11),n(36),n(5);var o=n(3),r=n(290),c=n.n(r),l=n(105),d=n(104);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){localStorage.clear(),$nuxt._router.push("/login"),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},v=(n(280),n(39)),h=n(43),x=n.n(h),k=n(272),w=n(268),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"7640787c",null),_=component.exports;x()(component,{VBtn:k.a,VIcon:w.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:_},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(282),n(607)),j=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=j.exports;x()(j,{VBottomNavigation:O.a,VBtn:k.a,VIcon:w.a})},280:function(t,e,n){"use strict";var o=n(276);n.n(o).a},281:function(t,e,n){(e=n(22)(!1)).push([t.i,".container-page[data-v-7640787c]{z-index:2}#btnLogout[data-v-7640787c]{margin-top:5px}.container-page>main[data-v-7640787c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-7640787c],.container-page>main[data-v-7640787c]{display:-webkit-box;display:flex}#avatar[data-v-7640787c]{margin-right:1rem}.text-menu[data-v-7640787c]{text-transform:uppercase}h1[data-v-7640787c]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-7640787c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-7640787c]{margin-left:0}#close-btn[data-v-7640787c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-7640787c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-7640787c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-7640787c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-7640787c]{width:100%}.item-menu[data-v-7640787c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-7640787c],.item-menu div[data-v-7640787c]{display:-webkit-box;display:flex}.item-menu div[data-v-7640787c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-7640787c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-7640787c]{margin-bottom:0!important}h4[data-v-7640787c]{font-weight:600}@media(max-width:320px){.item-menu[data-v-7640787c]{height:42px}}",""]),t.exports=e},282:function(t,e,n){"use strict";var o=n(277);n.n(o).a},283:function(t,e,n){(e=n(22)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},308:function(t,e,n){"use strict";var o=n(25),r=n(104);e.a={update:function(form){var t=r.a.getInfoAuth().accessToken;return o.a.put("api/v1/user/me",form,{headers:{Authorization:"".concat(t)}})},updatePass:function(form){var t=r.a.getInfoAuth().accessToken;return o.a.put("api/v1/user/me/change-password",form,{headers:{Authorization:"".concat(t)}})}}},329:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("17bfb17c",content,!0,{sourceMap:!1})},330:function(t,e){},445:function(t,e,n){"use strict";var o=n(329);n.n(o).a},446:function(t,e,n){(e=n(22)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,900&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);"]),e.push([t.i,"*[data-v-b687747a]{font-family:Montserrat,Helvetica,Arial,sans-serif!important}.flex[data-v-b687747a]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-b687747a]{background:#fff!important}.spiner-container[data-v-b687747a]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100vh}[data-v-b687747a] ::-webkit-input-placeholder{color:#60c!important}[data-v-b687747a] ::-moz-placeholder{color:#60c!important}[data-v-b687747a] :-ms-input-placeholder{color:#60c!important}[data-v-b687747a] ::-ms-input-placeholder{color:#60c!important}[data-v-b687747a] ::placeholder{color:#60c!important}.page-title[data-v-b687747a]{font-family:Lato,sans-serif;font-style:normal;font-weight:900;font-size:16px;text-transform:uppercase;line-height:19px;text-align:center;color:#60c}.relative-col[data-v-b687747a]{position:relative}[data-v-b687747a] .btn-back{position:absolute;left:0;top:0;margin-top:3px;font-size:12px}@media (max-width:350px){[data-v-b687747a] .btn-back{position:absolute;left:-25px;top:0;margin-top:3px;font-size:12px}}[data-v-b687747a] .v-btn.v-size--large{font-size:12px;line-height:15px}@media (max-width:375px){[data-v-b687747a] .v-btn{font-size:inherit}}.v-form[data-v-b687747a]{width:100%}[data-v-b687747a] .theme--light.v-label{font-weight:600;color:#60c!important}[data-v-b687747a] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border:1px solid #60c!important}[data-v-b687747a] .theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c!important}[data-v-b687747a] .theme--light.v-input:not(.v-input--is-disabled) input{color:#60c!important}[data-v-b687747a] .v-input__slot{margin-top:20px!important;padding-left:5px!important;width:100%;border-radius:unset!important;background-color:#fff!important;box-shadow:none!important}[data-v-b687747a] .v-text-field{padding-top:0!important;margin:0 6%!important;color:#60c}[data-v-b687747a] .v-text-field input{font-size:12px;line-height:15px}[data-v-b687747a] .btn-back .theme--light.v-icon{color:#60c;font-size:25px}[data-v-b687747a] .v-icon.v-icon.v-icon--link{color:#aa56ff;padding-right:5px}[data-v-b687747a] .btn-primary.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){background:#60c!important;border-radius:0!important;box-shadow:0 4px 5px grey!important;color:#fff!important;font-weight:700!important}[data-v-b687747a] .btn-second.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){background:#fff!important;border:1px solid #60c!important;color:#60c!important;font-weight:700!important}[data-v-b687747a] .login-link{color:#60c!important}.hide-form[data-v-b687747a]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-b687747a]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}.v-messages__message[data-v-b687747a]{color:#ff5252!important;font-size:12px!important;margin-left:5px}",""]),t.exports=e},447:function(t,e,n){"use strict";var o=n(330),r=n.n(o);e.default=r.a},611:function(t,e,n){"use strict";n.r(e);n(17),n(104);var o=n(308),r=n(123),c=(n(21),{components:{NavigationBar:n(279).a},data:function(){return{status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",form:{id:"",name:"",email:"",urlFacebook:"",urlInstagram:""},nameRules:[function(t){return!!t||"Digite seu nome"}],emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}]}},mounted:function(){var t=this;r.a.getAll("api/v1/user/me").then((function(e){t.form={id:e.data.id||"",name:e.data.name||"",email:e.data.email||"",urlFacebook:e.data.urlFacebook||"",urlInstagram:e.data.urlInstagram||"",role:{id:e.data.role.id||"",name:e.data.role.name||""}}}))},methods:{submit:function(){var t=this;this.$refs.form.validate()?(this.animateForm(!0),o.a.update(this.form).then((function(e){t.loading=!1,t.confirmSnackbar("Dados alterados com sucesso","success"),setTimeout((function(){t.gotoHome()}),1500)})).catch((function(e){setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoHome:function(){$nuxt._router.push("/admin/home")},goBack:function(){$nuxt._router.push("/admin/perfil")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}}}),l=(n(445),n(39)),d=n(447),m=n(43),f=n.n(m),v=n(272),h=n(597),x=n(414),k=n(310),w=n(598),_=n(268),y=n(300),O=n(117),j=n(599),C=n(273),z=n(307),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[t.loading?n("div",{staticClass:"spiner-container"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}})],1):n("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[n("v-container",[n("v-row",[n("v-col",{staticClass:"relative-col",attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.goBack}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("h2",{staticClass:"page-title"},[t._v("Alterar meus dados")])],1)],1),t._v(" "),n("v-row",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.nameRules,placeholder:"Nome",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.emailRules,placeholder:"E-mail",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-text-field",{attrs:{placeholder:"URL do Facebook",name:"urlFacebook",required:""},model:{value:t.form.urlFacebook,callback:function(e){t.$set(t.form,"urlFacebook",e)},expression:"form.urlFacebook"}}),t._v(" "),n("v-text-field",{attrs:{type:"text",placeholder:"URL do Instagram",name:"urlInstagram",required:""},model:{value:t.form.urlInstagram,callback:function(e){t.$set(t.form,"urlInstagram",e)},expression:"form.urlInstagram"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-block btn-submit btn-primary",attrs:{depressed:"",large:""},on:{click:t.submit}},[t._v("Alterar")])],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"btn-block btn-submit btn-second",attrs:{depressed:"",large:"",to:"/admin/alterar-senha"}},[t._v("Alterar Senha")])],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            Fechar\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"b687747a",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;f()(component,{VBtn:v.a,VCol:h.a,VContainer:x.a,VFlex:k.a,VForm:w.a,VIcon:_.a,VLayout:y.a,VProgressCircular:O.a,VRow:j.a,VSnackbar:C.a,VTextField:z.a})}}]);