(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{277:function(e,t,n){var content=n(282);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(e,t,n){var content=n(284);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},280:function(e,t,n){"use strict";n(174),n(21),n(10),n(7),n(12),n(32),n(6);var o=n(3),r=n(290),l=n.n(r),d=n(105),c=n(104);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var e=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),e.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){c.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(e){if(!e)return"";return e.split(" ").length>2?/^(\S*\s+\S+).*/.exec(e)[1]:e}},components:{Avatar:l.a}},x=(n(281),n(39)),m=n(43),h=n.n(m),_=n(272),w=n(267),component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:e._f("simplifyName")(e.user.name),size:90}})],1)])]),e._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[e._v(e._s(e.user.name))]),e._v(" "),n("p",[e._v(e._s(e.user.type))]),e._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:e.logout}},[e._v("Sair")])],1)]),e._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(t){return e.closeMenu()}}},[e._v("mdi-close-circle")])],1)]),e._v(" "),n("section",{staticClass:"menu-list"},e._l(e.menu,(function(t){return n("router-link",{key:t.id,staticClass:"item-menu",attrs:{tag:"div",to:t.link},nativeOn:{click:function(t){return e.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),e._v(" "),n("p",{staticClass:"text-menu"},[e._v(e._s(t.label))])])})),1)])}),[],!1,null,"33e90538",null),k=component.exports;h()(component,{VBtn:_.a,VIcon:w.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:k},mounted:function(){c.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(283),n(739)),j=Object(x.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:e.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),e._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[e._l(e.menu,(function(t){return n("v-btn",{key:t.id,staticClass:"btn-fixed menu__bottom",class:t.class,attrs:{to:t.link},on:{click:function(t){e.viewMenu=!1}}},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:e.setViewMenu}},[n("span",[e._v("Outros")]),e._v(" "),n("v-icon",[e._v("mdi-apps")])],1)],2)],1):e._e()}),[],!1,null,"49e11fd7",null);t.a=j.exports;h()(j,{VBottomNavigation:O.a,VBtn:_.a,VIcon:w.a})},281:function(e,t,n){"use strict";var o=n(277);n.n(o).a},282:function(e,t,n){(t=n(23)(!1)).push([e.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),e.exports=t},283:function(e,t,n){"use strict";var o=n(278);n.n(o).a},284:function(e,t,n){(t=n(23)(!1)).push([e.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),e.exports=t},300:function(e,t,n){var content=n(301);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("5c8fbe94",content,!0,{sourceMap:!1})},301:function(e,t,n){(t=n(23)(!1)).push([e.i,".v-textarea textarea{align-self:stretch;-webkit-box-flex:1;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{-webkit-box-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=t},322:function(e,t,n){"use strict";n(21),n(10),n(7),n(6),n(12);var o=n(3),r=(n(52),n(300),n(308)),l=n(40);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=Object(l.a)(r.a);t.a=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){r.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},394:function(e,t,n){var content=n(706);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("4e91ee8a",content,!0,{sourceMap:!1})},395:function(e,t){},705:function(e,t,n){"use strict";var o=n(394);n.n(o).a},706:function(e,t,n){(t=n(23)(!1)).push([e.i,"h1[data-v-92a3b26c]{font-weight:600;font-size:16px;line-height:36px;text-transform:uppercase;text-align:center;color:#60c}@media screen and (max-width:20.625em){h1[data-v-92a3b26c]{font-size:14px}}h3[data-v-92a3b26c]{font-weight:900;font-size:1em;line-height:24px;text-transform:uppercase;text-align:left;color:#60c}.main-container[data-v-92a3b26c]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:2em 3em 78px 2em}.v-input[data-v-92a3b26c]{width:90%;height:50px}.save-button[data-v-92a3b26c]{height:2.75em;width:100%;font-weight:600;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;color:#fff;margin-top:auto}.v-button__content[data-v-92a3b26c]{font-weight:900;font-size:12px;line-height:14px}.new-parts-span[data-v-92a3b26c]{font-weight:600;font-size:16px;line-height:20px;color:#656565;width:100%;text-align:center;display:inline-block}.back-button[data-v-92a3b26c]{min-width:0!important;float:left}.v-label[data-v-92a3b26c]{color:#60c}.lesson-form[data-v-92a3b26c]{margin-top:0}[data-v-92a3b26c] .v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c}[data-v-92a3b26c] .v-label{font-weight:600;font-size:14px;color:#aa56ff}[data-v-92a3b26c] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff}[data-v-92a3b26c] .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:#ff5252}[data-v-92a3b26c] .v-messages__message{text-align:right;margin-top:-.3em}",""]),e.exports=t},707:function(e,t,n){"use strict";var o=n(395),r=n.n(o);t.default=r.a},769:function(e,t,n){"use strict";n.r(t);var o=n(280),r=n(123),l={components:{NavigationBar:o.a},data:function(){return{title:"Crie uma Aula",status:!0,submited:!1,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",lesson:{title:"",description:"",courseId:""},titleRules:[function(title){return!!title||"Digite um título"}],descriptionRules:[function(e){return!!e||"Digite uma descrição"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Ajude a espalhar o conhecimento criando a Aula de um Curso da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},created:function(){this.lesson.courseId=this.$route.params.courseId},methods:{submit:function(){var e=this;this.$refs.lesson.validate()?(this.animateForm(!0),r.a.post("/api/v1/lesson",this.lesson).then((function(t){e.loading=!1,e.showConfirmSnack("Aula criada! ;)","success"),e.submited=!0,setTimeout((function(){$nuxt._router.push("/admin/course/".concat(e.lesson.courseId,"/lesson/").concat(t.data.id,"/part/new"))}),2500)})).catch((function(t){e.showConfirmSnack("Ocorreu um erro.","error"),setTimeout((function(){e.loading=!1}),500),console.error(t)}))):this.animateForm(!1)},animateForm:function(e){var t=this;e?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){t.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){t.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},showConfirmSnack:function(text,e){this.snackbarText=text,this.snackbarStatus=e,this.snackbar=!0},goBack:function(){window.history.length>1?$nuxt._router.go(-1):$nuxt._router.push("/")}}},d=(n(705),n(39)),c=n(707),v=n(43),f=n.n(v),x=n(272),m=n(311),h=n(729),_=n(267),w=n(305),k=n(273),y=n(308),O=n(322),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{id:"page"}},[n("v-flex",{ref:"flex",staticClass:"main-container"},[n("h1",[n("n-link",{attrs:{to:"../edit"}},[n("v-btn",{staticClass:"back-button",attrs:{text:"",icon:"",color:"primary"}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1),e._v("Gerenciar meus cursos\n    ")],1),e._v(" "),n("v-form",{ref:"lesson",staticClass:"lesson-form",attrs:{"lazy-validation":""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[n("h3",[e._v("Aula")]),e._v(" "),n("v-text-field",{attrs:{rules:e.titleRules,"margin-bottom":!e.titleRules,color:"#60c",label:"Título",required:""},model:{value:e.lesson.title,callback:function(t){e.$set(e.lesson,"title",t)},expression:"lesson.title"}}),e._v(" "),n("v-textarea",{attrs:{rules:e.descriptionRules,"margin-bottom":!e.titleRules,color:"#60c",label:"Descrição",rows:"1",required:""},model:{value:e.lesson.description,callback:function(t){e.$set(e.lesson,"description",t)},expression:"lesson.description"}})],1),e._v(" "),n("resources-list",{attrs:{name:"Parte",resources:[],redirect:"true",path:"part"}}),e._v(" "),n("span",{staticClass:"new-parts-span"},[e._v("Favor, adicionar uma parte")]),e._v(" "),n("v-btn",{staticClass:"save-button",attrs:{color:"primary"},on:{click:e.submit}},[e._v("Salvar")])],1),e._v(" "),n("v-snackbar",{attrs:{color:e.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Fechar")])],1),e._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"92a3b26c",null);"function"==typeof c.default&&Object(c.default)(component);t.default=component.exports;f()(component,{VBtn:x.a,VFlex:m.a,VForm:h.a,VIcon:_.a,VLayout:w.a,VSnackbar:k.a,VTextField:y.a,VTextarea:O.a})}}]);