(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("5866f0f6",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(174),n(21),n(11),n(7),n(13),n(32),n(6);var r=n(3),o=n(290),l=n.n(o),c=n(105),d=n(104);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:l.a}},x=(n(281),n(39)),m=n(43),h=n.n(m),_=n(272),k=n(267),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"33e90538",null),w=component.exports;h()(component,{VBtn:_.a,VIcon:k.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:w},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(n(283),n(739)),j=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=j.exports;h()(j,{VBottomNavigation:O.a,VBtn:_.a,VIcon:k.a})},281:function(t,e,n){"use strict";var r=n(277);n.n(r).a},282:function(t,e,n){(e=n(23)(!1)).push([t.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),t.exports=e},283:function(t,e,n){"use strict";var r=n(278);n.n(r).a},284:function(t,e,n){(e=n(23)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},285:function(t,e,n){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(n(286),n(39)),l=n(43),c=n.n(l),d=n(272),v=n(267),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"7bac864e",null);e.a=component.exports;c()(component,{VBtn:d.a,VIcon:v.a})},286:function(t,e,n){"use strict";var r=n(279);n.n(r).a},287:function(t,e,n){(e=n(23)(!1)).push([t.i,".h1__theme[data-v-7bac864e]{font-size:1.4444rem}#head__bar[data-v-7bac864e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7bac864e] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-7bac864e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},299:function(t,e,n){"use strict";n(21),n(11),n(7),n(6),n(13);var r=n(3),o=(n(52),n(313),n(124)),l=n(306),c=n(106),d=n(40);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return f({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},300:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("5c8fbe94",content,!0,{sourceMap:!1})},301:function(t,e,n){(e=n(23)(!1)).push([t.i,".v-textarea textarea{align-self:stretch;-webkit-box-flex:1;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{-webkit-box-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),t.exports=e},313:function(t,e,n){var content=n(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("e23b7040",content,!0,{sourceMap:!1})},314:function(t,e,n){(e=n(23)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;-webkit-transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transition:opacity .2s;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;-webkit-transition:inherit;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},322:function(t,e,n){"use strict";n(21),n(11),n(7),n(6),n(13);var r=n(3),o=(n(52),n(300),n(308)),l=n(40);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=Object(l.a)(o.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){o.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},349:function(t,e,n){var content=n(595);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2bca2a91",content,!0,{sourceMap:!1})},350:function(t,e){},592:function(t,e,n){t.exports=n.p+"img/9f35d81.svg"},593:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";e.a=function(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}},function(t,e,n){"use strict";e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],l=t[o];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),l===u&&o++,a++)}for(var c="";a<e.length&&n;){var u;if(r[u=e[a]]){c="";break}c+=u,a++}return i+c}},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},594:function(t,e,n){"use strict";var r=n(349);n.n(r).a},595:function(t,e,n){(e=n(23)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,900&display=swap);"]),e.push([t.i,".align-global[data-v-978c66f2]{width:100%;max-width:400px;-webkit-box-pack:center;justify-content:center;background:#fff}@media (min-width:400px){.align-global[data-v-978c66f2]{margin:0 auto}}@media (max-width:320px){[data-v-978c66f2].v-input input{max-height:25px!important}.container[data-v-978c66f2]{padding:0 12px!important}}.container-spinner[data-v-978c66f2],.flex[data-v-978c66f2]{z-index:1;text-align:center;margin-top:-55px}.container[data-v-978c66f2]{z-index:-1;padding:12px 12px 0}.page-title[data-v-978c66f2]{font-size:24px;font-weight:900;text-transform:uppercase;color:#60c;text-align:center}.banner[data-v-978c66f2]{width:90%;margin:5% 5% -5%}h2[data-v-978c66f2]{width:100%}[data-v-978c66f2] .v-text-field{padding-top:0;color:#60c;margin:3.5% 9%}[data-v-978c66f2] .v-form{width:100%;color:#60c;margin:0 4%}[data-v-978c66f2] .theme--light.v-label{font-weight:500;color:#aa56ff}[data-v-978c66f2] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff!important}[data-v-978c66f2] .theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c!important}[data-v-978c66f2] .theme--light.v-input:not(.v-input--is-disabled) input{color:#60c!important}.theme--light.v-btn[data-v-978c66f2]:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){background:#60c!important;border-radius:0!important;color:#fff;font-weight:400;width:100%}[data-v-978c66f2] .theme--light.v-input:not(.v-input--is-disabled) textarea{color:#60c}[data-v-978c66f2] .v-card{box-shadow:0 5px 10px grey;margin:4% 4% 0}",""]),t.exports=e},596:function(t,e,n){"use strict";var r=n(350),o=n.n(r);e.default=o.a},737:function(t,e,n){"use strict";n.r(e);var r=n(285),o=n(280),l=(n(104),n(26)),c=function(form,t){return l.a.post("api/v1/message/email/contactus",form,{headers:{Authorization:"Bearer ".concat(t)}})},d=n(22),v=n(593),f={data:function(){return{status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",token:"",form:{name:"",message:"",cellphone:""},nameRules:[function(t){return!!t||"Digite seu nome"}],messageRules:[function(t){return!!t||"Digite uma mensagem"}],cellphoneRules:[function(t){return!!t||"Digite seu celular com o DDD"},function(t){return/^\(\d{2}\) \d{5}-\d{3,4}$/.test(t)||"Complete seu celular com o DDD"}]}},mounted:function(){var t=this;d.a.getExternalCredentials().then((function(e){var data=e.data;t.token=data.accessToken})).catch((function(t){console.error(t)}))},methods:{submit:function(){var t=this;this.$refs.form.validate()?(this.animateForm(!0),c(this.form,this.token).then((function(e){t.loading=!1,t.confirmSnackbar("Email enviado com sucesso!","success"),setTimeout((function(){t.gotoHome()}),2500)})).catch((function(e){setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoHome:function(){$nuxt._router.push("/aluno/home")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},components:{HeaderBar:r.a,NavigationBar:o.a},directives:{mask:v.mask}},x=(n(594),n(39)),m=n(596),h=n(43),_=n.n(h),k=n(272),w=n(299),y=n(728),O=n(412),j=n(311),P=n(729),C=n(305),z=n(117),M=n(730),S=n(273),V=n(308),E=n(322),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeaderBar",{attrs:{title:"FALE COM A GENTE",backPage:!0}}),t._v(" "),r("div",{staticClass:"align-global"},[t.loading?r("div",[r("div",{staticClass:"container-spinner"},[r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#000"}})],1)]):t._e(),t._v(" "),r("v-layout",{staticClass:"container",attrs:{"mt-1":"",flat:""}},[r("v-flex",{ref:"flex"},[r("v-container",{attrs:{flat:""}},[r("v-row",[r("v-col",{attrs:{cols:"12","mt-5":""}},[r("v-row",[r("img",{staticClass:"banner",attrs:{src:n(592),alt:"imagem contato"}})])],1)],1),t._v(" "),r("v-row",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Nome",name:"name","requiredv-model":"form.name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{type:"tel",rules:t.cellphoneRules,label:"Whatsapp",name:"cellphone",required:""},model:{value:t.form.cellphone,callback:function(e){t.$set(t.form,"cellphone",e)},expression:"form.cellphone"}}),t._v(" "),r("v-textarea",{attrs:{rules:t.messageRules,label:"Passa a visão!",name:"message",rows:"3",required:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),t._v(" "),r("v-card",[r("v-btn",{staticClass:"btn-block btn-submit",attrs:{depressed:"",large:""},on:{click:t.submit}},[t._v("Enviar")])],1)],1)],1),t._v(" "),r("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n              "+t._s(t.snackbarText)+"\n              "),r("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)],1),t._v(" "),r("navigation-bar")],1)}),[],!1,null,"978c66f2",null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;_()(component,{VBtn:k.a,VCard:w.a,VCol:y.a,VContainer:O.a,VFlex:j.a,VForm:P.a,VLayout:C.a,VProgressCircular:z.a,VRow:M.a,VSnackbar:S.a,VTextField:V.a,VTextarea:E.a})}}]);