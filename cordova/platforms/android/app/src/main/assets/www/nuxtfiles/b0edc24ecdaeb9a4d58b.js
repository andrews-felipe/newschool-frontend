(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("77f4c5a8",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("10e8a9fe",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("8a50623e",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(174),n(19),n(9),n(6),n(11),n(36),n(5);var o=n(3),r=n(291),c=n.n(r),l=n(105),h=n(104);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){localStorage.clear(),$nuxt._router.push("/login"),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){h.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},v=(n(281),n(39)),m=n(43),x=n.n(m),k=n(272),w=n(268),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"7640787c",null),y=component.exports;x()(component,{VBtn:k.a,VIcon:w.a});var _={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:y},mounted:function(){h.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(283),n(737)),C=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=C.exports;x()(C,{VBottomNavigation:O.a,VBtn:k.a,VIcon:w.a})},281:function(t,e,n){"use strict";var o=n(277);n.n(o).a},282:function(t,e,n){(e=n(22)(!1)).push([t.i,".container-page[data-v-7640787c]{z-index:2}#btnLogout[data-v-7640787c]{margin-top:5px}.container-page>main[data-v-7640787c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-7640787c],.container-page>main[data-v-7640787c]{display:-webkit-box;display:flex}#avatar[data-v-7640787c]{margin-right:1rem}.text-menu[data-v-7640787c]{text-transform:uppercase}h1[data-v-7640787c]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-7640787c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-7640787c]{margin-left:0}#close-btn[data-v-7640787c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-7640787c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-7640787c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-7640787c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-7640787c]{width:100%}.item-menu[data-v-7640787c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-7640787c],.item-menu div[data-v-7640787c]{display:-webkit-box;display:flex}.item-menu div[data-v-7640787c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-7640787c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-7640787c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-7640787c]{margin-bottom:0!important}h4[data-v-7640787c]{font-weight:600}@media(max-width:320px){.item-menu[data-v-7640787c]{height:42px}}",""]),t.exports=e},283:function(t,e,n){"use strict";var o=n(278);n.n(o).a},284:function(t,e,n){(e=n(22)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},287:function(t,e,n){"use strict";var o={props:["title","backPage"],methods:{comeBackPage:function(){this.$router.back()}}},r=(n(288),n(39)),c=n(43),l=n.n(c),h=n(272),f=n(268),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"3f62119b",null);e.a=component.exports;l()(component,{VBtn:h.a,VIcon:f.a})},288:function(t,e,n){"use strict";var o=n(279);n.n(o).a},289:function(t,e,n){(e=n(22)(!1)).push([t.i,".h1__theme[data-v-3f62119b]{font-size:1.4444rem}#head__bar[data-v-3f62119b]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-3f62119b] .btn-back{padding-right:2rem;margin-top:unset!important}[data-v-3f62119b] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-3f62119b] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},294:function(t,e,n){"use strict";var o=n(308);e.a=o.a},321:function(t,e,n){"use strict";var o=n(25),r=n(104);e.a={getAll:function(){var t=r.a.getInfoAuth().accessToken;return o.a.get("/api/v1/course",{headers:{Authorization:t}})},getBySlug:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/slug/".concat(t),{headers:{Authorization:"".concat(e)}})},createCourse:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.post("api/v1/course",t,{headers:{Authorization:"".concat(e)}})},getById:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/".concat(t),{headers:{Authorization:e}})}}},385:function(t,e,n){var content=n(680);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("a2503962",content,!0,{sourceMap:!1})},386:function(t,e){},679:function(t,e,n){"use strict";var o=n(385);n.n(o).a},680:function(t,e,n){(e=n(22)(!1)).push([t.i,"h1[data-v-60cbff82]{font-weight:600;font-size:16px;line-height:36px;text-transform:uppercase;text-align:center;color:#60c}@media screen and (max-width:20.625em){h1[data-v-60cbff82]{font-size:14px}}h3[data-v-60cbff82]{font-weight:900;font-size:1em;line-height:24px;text-transform:uppercase;text-align:left;color:#60c}.back-button[data-v-60cbff82]{min-width:0!important;float:left}.main-container[data-v-60cbff82]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:2em 3em 78px 2em}.flex[data-v-60cbff82]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-60cbff82]{background:#fff!important}.v-input[data-v-60cbff82]{width:90%;height:50px}.page-title[data-v-60cbff82]{text-align:center;font-weight:600;width:90%;margin-left:45%;margin-top:20px}.page-title[data-v-60cbff82],.section-title[data-v-60cbff82]{font-size:20px;line-height:24px;text-transform:uppercase;color:#60c;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.section-title[data-v-60cbff82]{font-weight:900;width:60%;margin-left:35%}.classes>p[data-v-60cbff82]{text-align:center;font-weight:600;font-size:18px;color:#8d8b8b}.classes-title[data-v-60cbff82]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.new-lessons-span[data-v-60cbff82]{font-size:16px;line-height:20px;color:#656565;display:inline-block}.new-lessons-span[data-v-60cbff82],.save-button[data-v-60cbff82]{font-weight:600;width:100%;text-align:center}.save-button[data-v-60cbff82]{height:2.75em;margin-top:auto;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;color:#fff}[data-v-60cbff82] .v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c}[data-v-60cbff82] .v-label{font-weight:600;font-size:14px;color:#aa56ff}[data-v-60cbff82] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff}[data-v-60cbff82] .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:#ff5252}[data-v-60cbff82] .v-messages__message{text-align:right;margin-top:-.3em}.hide-form[data-v-60cbff82]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-60cbff82]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}[data-v-60cbff82] .v-btn:not(.v-btn--round).v-size--large{margin-bottom:50px}",""]),t.exports=e},681:function(t,e,n){"use strict";var o=n(386),r=n.n(o);e.default=r.a},682:function(t,e,n){var content=n(683);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("83ff91dc",content,!0,{sourceMap:!1})},683:function(t,e,n){(e=n(22)(!1)).push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.v-file-input input[type=file]{opacity:0;max-width:0;width:0}.v-file-input .v-file-input__text{-webkit-box-align:center;align-items:center;align-self:stretch;display:-webkit-box;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=e},684:function(t,e,n){var content=n(685);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("197fcea4",content,!0,{sourceMap:!1})},685:function(t,e,n){(e=n(22)(!1)).push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{-webkit-box-align:center;align-items:center;cursor:default;display:-webkit-inline-box;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:8px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:8px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:8px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip__close.v-icon:active,.v-chip__close.v-icon:focus,.v-chip__close.v-icon:hover{opacity:.72}.v-chip__content{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{-webkit-transition:opacity .3s cubic-bezier(.25,.8,.5,1);transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined:not(.v-chip--active):before{opacity:0}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},734:function(t,e,n){"use strict";n.r(e);var o=n(321),r=n(21),c=n(287),l=n(280),h={data:function(){return{title:"Gerenciar meus cursos",sendCourse:!1,status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",token:"",form:{title:"",description:"",authorName:"",authorDescription:"",workload:"",thumbUrl:"",photo:null},titleRules:[function(t){return!!t||"O título é obrigatório"}],descriptionRules:[function(t){return!!t||"A descrição é obrigatória"}],authorNameRules:[function(t){return!!t||"O professor é obrigatório"}],authorDescriptionRules:[function(t){return!!t||"Campo obrigatório"}],workloadRules:[function(t){return!!t||"A carga horária é obrigatória"}],photoRules:[function(t){return!!t||"A foto de capa é obrigatória"}]}},head:function(){return{title:this.title}},components:{HeaderBar:c.a,NavigationBar:l.a},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e=new FormData;e.append("title",this.form.title),e.append("description",this.form.description),e.append("authorName",this.form.authorName),e.append("authorDescription",this.form.authorDescription),e.append("workload",this.form.workload),e.append("photo",this.form.photo),e.append("thumbUrl",this.form.thumbUrl),o.a.createCourse(e).then((function(e){t.loading=!1,t.sendCourse=!0,t.confirmSnackbar("Curso cadastrado com sucesso!","success"),t.$store.commit("courses/setCurrent",e.data),t.gotoAddClass(e.data.id)})).catch((function(e){t.confirmSnackbar("Ocorreu um erro ao cadastrar o curso.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))}else this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoAddClass:function(t){this.sendCourse?$nuxt._router.push("/admin/course/".concat(t,"/lesson/new")):this.confirmSnackbar("Você precisa salvar o curso antes de adicionar uma aula","error")},goBack:function(){window.history.length>1?$nuxt._router.go(-1):$nuxt._router.push("/")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},mounted:function(){var t=this;localStorage.getItem("current_course"),r.a.getExternalCredentials().then((function(e){var data=e.data;t.token=data.accessToken})).catch((function(t){console.error(t)}))}},f=(n(679),n(39)),d=n(681),v=n(43),m=n.n(v),x=n(272),k=(n(19),n(9),n(6),n(5),n(11),n(108)),w=(n(17),n(3)),y=n(10),_=(n(30),n(37),n(52),n(682),n(294)),O=n(12),C=(n(684),n(40)),j=n(302),z=n(266),S=n(44),$=n(158),V=n(63),P=n(80),I=n(106),A=n(100),D=n(13);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N=Object(C.a)(S.a,A.a,I.a,V.a,Object($.a)("chipGroup"),Object(P.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return M({"v-chip":!0},I.a.options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(I.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(O.a)(e,2),o=n[0],r=n[1];t.$attrs.hasOwnProperty(o)&&Object(D.a)(o,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(z.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(j.a,t)},genClose:function(){var t=this;return this.$createElement(z.a,{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=M({},data.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}}),E=n(7);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var R=_.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:function(){return[]},validator:function(t){return"object"===Object(y.a)(t)||Array.isArray(t)}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},_.a.options.computed.classes.call(this),{"v-file-input":!0})},counterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){return t+e.size}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(E.n)(e,1024===this.base))},internalArrayValue:function(){return Array.isArray(this.internalValue)?this.internalValue:Object(E.u)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=t.truncateText(e.name);return t.showSize?"".concat(n," (").concat(Object(E.n)(e.size,1024===t.base),")"):n})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(D.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(E.h)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(N,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genInput:function(){var input=_.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.counterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[o],file:n,index:o}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:function(){return t.$refs.input.click()}}},e)},onInput:function(t){var e=Object(k.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),F=n(311),L=n(728),U=n(268),G=n(301),H=n(117),J=n(273),X=n(308),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{id:"page"}},[n("v-flex",{ref:"flex",staticClass:"main-container"},[t.loading?n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}}):t._e(),t._v(" "),n("h1",[n("n-link",{attrs:{to:"/admin/listar-cursos"}},[n("v-btn",{staticClass:"back-button",attrs:{text:"",icon:"",color:"primary"}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v("Gerenciar meus cursos\n    ")],1),t._v(" "),n("v-form",{ref:"form",staticClass:"course-form",attrs:{"lazy-validation":""}},[n("h3",[t._v("Curso")]),t._v(" "),n("v-text-field",{attrs:{rules:t.titleRules,color:"#60c",label:"Título *",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.descriptionRules,color:"#60c",label:"Descrição *",name:"description",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.authorNameRules,color:"#60c",label:"Professor *",name:"authorName",required:""},model:{value:t.form.authorName,callback:function(e){t.$set(t.form,"authorName",e)},expression:"form.authorName"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.authorDescriptionRules,color:"#60c",label:"Biografia do Professor *",name:"authorDescription",required:""},model:{value:t.form.authorDescription,callback:function(e){t.$set(t.form,"authorDescription",e)},expression:"form.authorDescription"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.workloadRules,type:"number",color:"#60c",label:"Carga Horária *",name:"workload",required:""},model:{value:t.form.workload,callback:function(e){t.$set(t.form,"workload",e)},expression:"form.workload"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",label:"URL da Imagem do Curso",name:"thumbUrl",required:""},model:{value:t.form.thumbUrl,callback:function(e){t.$set(t.form,"thumbUrl",e)},expression:"form.thumbUrl"}}),t._v(" "),n("v-file-input",{attrs:{rules:t.photoRules,color:"#60c",label:"Foto de Capa *",name:"photo","prepend-icon":"",required:""},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}}),t._v(" "),n("resources-list",{attrs:{name:"Aula",resources:[],redirect:"true",path:"lesson"}}),t._v(" "),n("span",{staticClass:"new-lessons-span"},[t._v("Favor, adicionar uma aula")]),t._v(" "),n("v-btn",{staticClass:"save-button",attrs:{color:"primary"},on:{click:t.submit}},[t._v("Salvar")]),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"60cbff82",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;m()(component,{VBtn:x.a,VFileInput:R,VFlex:F.a,VForm:L.a,VIcon:U.a,VLayout:G.a,VProgressCircular:H.a,VSnackbar:J.a,VTextField:X.a})}}]);