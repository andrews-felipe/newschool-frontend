(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(174),n(21),n(10),n(7),n(12),n(32),n(6);var o=n(3),r=n(290),d=n.n(r),c=n(105),l=n(104);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){l.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:d.a}},f=(n(281),n(39)),h=n(43),x=n.n(h),w=n(272),k=n(267),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"33e90538",null),_=component.exports;x()(component,{VBtn:w.a,VIcon:k.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:_},mounted:function(){l.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(283),n(739)),C=Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=C.exports;x()(C,{VBottomNavigation:O.a,VBtn:w.a,VIcon:k.a})},281:function(t,e,n){"use strict";var o=n(277);n.n(o).a},282:function(t,e,n){(e=n(23)(!1)).push([t.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),t.exports=e},283:function(t,e,n){"use strict";var o=n(278);n.n(o).a},284:function(t,e,n){(e=n(23)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},293:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return m}));var o=n(299),r=n(5),d=Object(r.g)("v-card__actions"),c=Object(r.g)("v-card__subtitle"),l=Object(r.g)("v-card__text"),m=Object(r.g)("v-card__title");o.a},312:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("718399b8",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";var o=n(26),r=n(104);e.a={getAll:function(){var t=r.a.getInfoAuth().accessToken;return o.a.get("/api/v1/course",{headers:{Authorization:t}})},getBySlug:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/slug/".concat(t),{headers:{Authorization:"".concat(e)}})},createCourse:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.post("api/v1/course",t,{headers:{Authorization:"".concat(e)}})},getById:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/".concat(t),{headers:{Authorization:e}})}}},334:function(t,e,n){"use strict";var o=n(312);n.n(o).a},335:function(t,e,n){(e=n(23)(!1)).push([t.i,".footer-container[data-v-d6d75906]{-webkit-box-flex:1;flex-grow:1;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.media-container[data-v-d6d75906]{-webkit-box-flex:0;flex:0 0 auto}.media-and-footer-container[data-v-d6d75906]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.v-responsive.v-image[data-v-d6d75906]{padding-top:75%;height:0;position:relative;width:100%}.v-responsive__sizer[data-v-d6d75906]{padding:0}.v-image__image[data-v-d6d75906]{background:url(http://i.imgur.com/SrPdUD4.png) 50% 50% no-repeat;background-color:#000;position:absolute;width:100%;height:100%}@media screen and (orientation:landscape){.v-image__image[data-v-d6d75906]{background:url(http://i.imgur.com/SrPdUD4.png) no-repeat;position:absolute;width:300px;height:200px}.v-card-body[data-v-d6d75906]{margin-right:2.5em}.v-card-body div[data-v-d6d75906]{cursor:pointer}.v-responsive.v-image[data-v-d6d75906]{height:200px;width:300px}@media (min-width:48em){.v-card-body[data-v-d6d75906]{margin-right:0;padding-right:1em;width:50%}.v-responsive.v-image[data-v-d6d75906]{height:250px;width:350px}.v-image__image[data-v-d6d75906]{width:100%;height:100%}}@media (min-width:64em){.v-card-body[data-v-d6d75906]{width:25%;padding-right:3em}}@media (min-width:100em){.v-card-body[data-v-d6d75906]{width:20%;padding-right:3em}}}@media screen and (min-width:27.5em) and (orientation:portrait){.v-card-body[data-v-d6d75906]{width:50%;padding-right:1em}}.v-card-body[data-v-d6d75906]{margin-bottom:1.5em;align-self:stretch}.v-card__title[data-v-d6d75906]{font-weight:600;font-size:1em;padding:.5em 0 0;line-height:1em;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-d6d75906]{padding:0;color:#1a1a1a;font-weight:300;font-size:.9em;line-height:12px}",""]),t.exports=e},336:function(t,e,n){var content=n(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("6d5e4c08",content,!0,{sourceMap:!1})},337:function(t,e){},408:function(t,e,n){"use strict";var o={name:"courseCard",props:["title","description","image","teacher","slug"]},r=(n(334),n(39)),d=n(43),c=n.n(d),l=n(299),m=n(293),v=n(775),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent",tile:!0}},[n("n-link",{attrs:{to:"curso/"+t.slug}},[n("v-img",{attrs:{src:t.image}})],1),t._v(" "),n("div",{staticClass:"media-and-footer-container"},[n("n-link",{staticClass:"footer-container",attrs:{to:"curso/"+t.slug}},[n("v-card-title",{attrs:{to:"/curso/"+t.slug}},[t._v(t._s(t.title))]),t._v(" "),n("v-card-subtitle",{staticClass:"mt-0",attrs:{to:"/curso/"+t.slug}},[t._v(t._s(t.teacher))])],1)],1)],1)}),[],!1,null,"d6d75906",null);e.a=component.exports;c()(component,{VCard:l.a,VCardSubtitle:m.b,VCardTitle:m.d,VImg:v.a})},578:function(t,e,n){"use strict";var o=n(336);n.n(o).a},579:function(t,e,n){(e=n(23)(!1)).push([t.i,".welcome[data-v-a63d17d4]{padding:1em 0 0 1.5em}.welcome-title[data-v-a63d17d4]{font-weight:900;font-size:20px;line-height:24px;margin-bottom:4px;color:#1a1a1a}.welcome-subtitle[data-v-a63d17d4]{font-weight:900;font-size:16px;line-height:20px;color:#60c}@media screen and (orientation:portrait){.article-container[data-v-a63d17d4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column wrap}@media (min-width:27.5em){.article-container[data-v-a63d17d4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;padding:0 1em 56px 1.5em}}}@media screen and (orientation:landscape){.article-container[data-v-a63d17d4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;overflow-x:auto;margin:0 2em 56px 1.5em;padding:0}@media (min-width:48em){.article-container[data-v-a63d17d4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;margin:0}}}@media (min-width:48em){.welcome[data-v-a63d17d4]{padding-top:2em}.welcome-title[data-v-a63d17d4]{font-size:2em;line-height:.8em}.welcome-subtitle[data-v-a63d17d4]{font-size:1.3em}}.article-container[data-v-a63d17d4]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.max-content[data-v-a63d17d4]{max-height:100vh;overflow-y:auto;overflow-x:hidden;width:100%;box-sizing:border-box;margin:0 auto}.title-section[data-v-a63d17d4]{font-weight:900;line-height:17px;color:#60c;padding:1.25em 0 .5em 1.5em;text-transform:uppercase}",""]),t.exports=e},580:function(t,e,n){"use strict";var o=n(337),r=n.n(o);e.default=r.a},745:function(t,e,n){"use strict";n.r(e);n(32),n(17);var o=n(280),r=n(408),d=n(321),c={components:{NavigationBar:o.a,CourseCard:r.a},data:function(){return{title:"Bem-vindo"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Seja bem vindo(a) ao aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},computed:{courses:function(){return this.$store.state.courses.list},user:function(){return this.$store.state.user.data}},methods:{loadUserName:function(){var t=JSON.parse(localStorage.getItem("user"));t&&(this.user.name=t.name.split(" ")[0])}},mounted:function(){this.loadUserName()},asyncData:function(t){var e=t.store;t.data,t.params,t.$axios;return d.a.getAll().then((function(t){return e.commit("courses/set",t.data)}))}},l=(n(578),n(39)),m=n(580),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"max-content",attrs:{id:"page"}},[n("header",{staticClass:"welcome"},[n("h1",{staticClass:"welcome-title"},[t._v(t._s("Olá "+t.user.name))]),t._v(" "),n("h2",{staticClass:"welcome-subtitle"},[t._v("Seja bem vindo")])]),t._v(" "),n("h3",{staticClass:"title-section"},[t._v("CURSOS")]),t._v(" "),n("article",{staticClass:"article-container"},t._l(t.courses,(function(t){return n("course-card",{key:t.id,attrs:{title:t.title,teacher:t.authorId,image:t.thumbUrl,slug:t.slug}})})),1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)}),[],!1,null,"a63d17d4",null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports}}]);