(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{277:function(e,t,o){var content=o(282);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(e,t,o){var content=o(284);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},280:function(e,t,o){"use strict";o(174),o(21),o(11),o(7),o(13),o(32),o(6);var r=o(3),l=o(290),n=o.n(l),x=o(105),f=o(104);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var m={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(x.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var e=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),e.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){f.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(e){if(!e)return"";return e.split(" ").length>2?/^(\S*\s+\S+).*/.exec(e)[1]:e}},components:{Avatar:n.a}},c=(o(281),o(39)),w=o(43),h=o.n(w),k=o(272),v=o(267),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-page"},[o("main",[o("section",{attrs:{id:"info"}},[o("div",{attrs:{id:"avatar"}},[o("div",{staticClass:"flex-center border-profile-photo"},[o("div",{staticClass:"flex-center profile-container"},[o("avatar",{attrs:{username:e._f("simplifyName")(e.user.name),size:90}})],1)])]),e._v(" "),o("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[o("h1",[e._v(e._s(e.user.name))]),e._v(" "),o("p",[e._v(e._s(e.user.type))]),e._v(" "),o("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:e.logout}},[e._v("Sair")])],1)]),e._v(" "),o("div",{attrs:{id:"close"}},[o("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(t){return e.closeMenu()}}},[e._v("mdi-close-circle")])],1)]),e._v(" "),o("section",{staticClass:"menu-list"},e._l(e.menu,(function(t){return o("router-link",{key:t.id,staticClass:"item-menu",attrs:{tag:"div",to:t.link},nativeOn:{click:function(t){return e.closeMenu()}}},[o("div",[o("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),e._v(" "),o("p",{staticClass:"text-menu"},[e._v(e._s(t.label))])])})),1)])}),[],!1,null,"33e90538",null),y=component.exports;h()(component,{VBtn:k.a,VIcon:v.a});var _={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:y},mounted:function(){f.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},O=(o(283),o(739)),j=Object(c.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.auth?o("div",[o("side-menu",{directives:[{name:"show",rawName:"v-show",value:e.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),e._v(" "),o("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[e._l(e.menu,(function(t){return o("v-btn",{key:t.id,staticClass:"btn-fixed menu__bottom",class:t.class,attrs:{to:t.link},on:{click:function(t){e.viewMenu=!1}}},[o("span",[e._v(e._s(t.name))]),e._v(" "),o("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),o("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:e.setViewMenu}},[o("span",[e._v("Outros")]),e._v(" "),o("v-icon",[e._v("mdi-apps")])],1)],2)],1):e._e()}),[],!1,null,"49e11fd7",null);t.a=j.exports;h()(j,{VBottomNavigation:O.a,VBtn:k.a,VIcon:v.a})},281:function(e,t,o){"use strict";var r=o(277);o.n(r).a},282:function(e,t,o){(t=o(23)(!1)).push([e.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),e.exports=t},283:function(e,t,o){"use strict";var r=o(278);o.n(r).a},284:function(e,t,o){(t=o(23)(!1)).push([e.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),e.exports=t},288:function(e,t,o){var content=o(291);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("744bab4a",content,!0,{sourceMap:!1})},289:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));o(67),o(7),o(6),o(13);var r=o(1);function l(e){return r.default.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,o){var r=o.props,data=o.data,l=o.children;data.staticClass="".concat(e," ").concat(data.staticClass||"").trim();var n=data.attrs;if(n){data.attrs={};var x=Object.keys(n).filter((function(e){if("slot"===e)return!1;var t=n[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));x.length&&(data.staticClass+=" ".concat(x.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,l)}})}},291:function(e,t,o){(t=o(23)(!1)).push([e.i,".container.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.container.fill-height{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;flex-wrap:wrap}.container.fill-height>.row{-webkit-box-flex:1;flex:1 1 100%;max-width:100%}.container.fill-height>.layout{height:100%;-webkit-box-flex:1;flex:1 1 auto}.container.fill-height>.layout.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.layout.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.layout.column.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.layout.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}@media (min-width:0){.flex.xs12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-xs12{-webkit-box-ordinal-group:13;order:12}.flex.xs11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-xs11{-webkit-box-ordinal-group:12;order:11}.flex.xs10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-xs10{-webkit-box-ordinal-group:11;order:10}.flex.xs9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-xs9{-webkit-box-ordinal-group:10;order:9}.flex.xs8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-xs8{-webkit-box-ordinal-group:9;order:8}.flex.xs7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-xs7{-webkit-box-ordinal-group:8;order:7}.flex.xs6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-xs6{-webkit-box-ordinal-group:7;order:6}.flex.xs5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-xs5{-webkit-box-ordinal-group:6;order:5}.flex.xs4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-xs4{-webkit-box-ordinal-group:5;order:4}.flex.xs3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-xs3{-webkit-box-ordinal-group:4;order:3}.flex.xs2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-xs2{-webkit-box-ordinal-group:3;order:2}.flex.xs1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-xs1{-webkit-box-ordinal-group:2;order:1}.flex.offset-xs12{margin-left:100%}.flex.offset-xs11{margin-left:91.6666666667%}.flex.offset-xs10{margin-left:83.3333333333%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs8{margin-left:66.6666666667%}.flex.offset-xs7{margin-left:58.3333333333%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs5{margin-left:41.6666666667%}.flex.offset-xs4{margin-left:33.3333333333%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs2{margin-left:16.6666666667%}.flex.offset-xs1{margin-left:8.3333333333%}.flex.offset-xs0{margin-left:0}}@media (min-width:600px){.flex.sm12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-sm12{-webkit-box-ordinal-group:13;order:12}.flex.sm11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-sm11{-webkit-box-ordinal-group:12;order:11}.flex.sm10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-sm10{-webkit-box-ordinal-group:11;order:10}.flex.sm9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-sm9{-webkit-box-ordinal-group:10;order:9}.flex.sm8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-sm8{-webkit-box-ordinal-group:9;order:8}.flex.sm7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-sm7{-webkit-box-ordinal-group:8;order:7}.flex.sm6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-sm6{-webkit-box-ordinal-group:7;order:6}.flex.sm5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-sm5{-webkit-box-ordinal-group:6;order:5}.flex.sm4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-sm4{-webkit-box-ordinal-group:5;order:4}.flex.sm3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-sm3{-webkit-box-ordinal-group:4;order:3}.flex.sm2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-sm2{-webkit-box-ordinal-group:3;order:2}.flex.sm1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-sm1{-webkit-box-ordinal-group:2;order:1}.flex.offset-sm12{margin-left:100%}.flex.offset-sm11{margin-left:91.6666666667%}.flex.offset-sm10{margin-left:83.3333333333%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm8{margin-left:66.6666666667%}.flex.offset-sm7{margin-left:58.3333333333%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm5{margin-left:41.6666666667%}.flex.offset-sm4{margin-left:33.3333333333%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm2{margin-left:16.6666666667%}.flex.offset-sm1{margin-left:8.3333333333%}.flex.offset-sm0{margin-left:0}}@media (min-width:960px){.flex.md12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-md12{-webkit-box-ordinal-group:13;order:12}.flex.md11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-md11{-webkit-box-ordinal-group:12;order:11}.flex.md10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-md10{-webkit-box-ordinal-group:11;order:10}.flex.md9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-md9{-webkit-box-ordinal-group:10;order:9}.flex.md8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-md8{-webkit-box-ordinal-group:9;order:8}.flex.md7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-md7{-webkit-box-ordinal-group:8;order:7}.flex.md6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-md6{-webkit-box-ordinal-group:7;order:6}.flex.md5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-md5{-webkit-box-ordinal-group:6;order:5}.flex.md4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-md4{-webkit-box-ordinal-group:5;order:4}.flex.md3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-md3{-webkit-box-ordinal-group:4;order:3}.flex.md2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-md2{-webkit-box-ordinal-group:3;order:2}.flex.md1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-md1{-webkit-box-ordinal-group:2;order:1}.flex.offset-md12{margin-left:100%}.flex.offset-md11{margin-left:91.6666666667%}.flex.offset-md10{margin-left:83.3333333333%}.flex.offset-md9{margin-left:75%}.flex.offset-md8{margin-left:66.6666666667%}.flex.offset-md7{margin-left:58.3333333333%}.flex.offset-md6{margin-left:50%}.flex.offset-md5{margin-left:41.6666666667%}.flex.offset-md4{margin-left:33.3333333333%}.flex.offset-md3{margin-left:25%}.flex.offset-md2{margin-left:16.6666666667%}.flex.offset-md1{margin-left:8.3333333333%}.flex.offset-md0{margin-left:0}}@media (min-width:1264px){.flex.lg12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-lg12{-webkit-box-ordinal-group:13;order:12}.flex.lg11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-lg11{-webkit-box-ordinal-group:12;order:11}.flex.lg10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-lg10{-webkit-box-ordinal-group:11;order:10}.flex.lg9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-lg9{-webkit-box-ordinal-group:10;order:9}.flex.lg8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-lg8{-webkit-box-ordinal-group:9;order:8}.flex.lg7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-lg7{-webkit-box-ordinal-group:8;order:7}.flex.lg6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-lg6{-webkit-box-ordinal-group:7;order:6}.flex.lg5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-lg5{-webkit-box-ordinal-group:6;order:5}.flex.lg4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-lg4{-webkit-box-ordinal-group:5;order:4}.flex.lg3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-lg3{-webkit-box-ordinal-group:4;order:3}.flex.lg2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-lg2{-webkit-box-ordinal-group:3;order:2}.flex.lg1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-lg1{-webkit-box-ordinal-group:2;order:1}.flex.offset-lg12{margin-left:100%}.flex.offset-lg11{margin-left:91.6666666667%}.flex.offset-lg10{margin-left:83.3333333333%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg8{margin-left:66.6666666667%}.flex.offset-lg7{margin-left:58.3333333333%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg5{margin-left:41.6666666667%}.flex.offset-lg4{margin-left:33.3333333333%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg2{margin-left:16.6666666667%}.flex.offset-lg1{margin-left:8.3333333333%}.flex.offset-lg0{margin-left:0}}@media (min-width:1904px){.flex.xl12{flex-basis:100%;-webkit-box-flex:0;flex-grow:0;max-width:100%}.flex.order-xl12{-webkit-box-ordinal-group:13;order:12}.flex.xl11{flex-basis:91.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:91.6666666667%}.flex.order-xl11{-webkit-box-ordinal-group:12;order:11}.flex.xl10{flex-basis:83.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:83.3333333333%}.flex.order-xl10{-webkit-box-ordinal-group:11;order:10}.flex.xl9{flex-basis:75%;-webkit-box-flex:0;flex-grow:0;max-width:75%}.flex.order-xl9{-webkit-box-ordinal-group:10;order:9}.flex.xl8{flex-basis:66.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:66.6666666667%}.flex.order-xl8{-webkit-box-ordinal-group:9;order:8}.flex.xl7{flex-basis:58.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:58.3333333333%}.flex.order-xl7{-webkit-box-ordinal-group:8;order:7}.flex.xl6{flex-basis:50%;-webkit-box-flex:0;flex-grow:0;max-width:50%}.flex.order-xl6{-webkit-box-ordinal-group:7;order:6}.flex.xl5{flex-basis:41.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:41.6666666667%}.flex.order-xl5{-webkit-box-ordinal-group:6;order:5}.flex.xl4{flex-basis:33.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:33.3333333333%}.flex.order-xl4{-webkit-box-ordinal-group:5;order:4}.flex.xl3{flex-basis:25%;-webkit-box-flex:0;flex-grow:0;max-width:25%}.flex.order-xl3{-webkit-box-ordinal-group:4;order:3}.flex.xl2{flex-basis:16.6666666667%;-webkit-box-flex:0;flex-grow:0;max-width:16.6666666667%}.flex.order-xl2{-webkit-box-ordinal-group:3;order:2}.flex.xl1{flex-basis:8.3333333333%;-webkit-box-flex:0;flex-grow:0;max-width:8.3333333333%}.flex.order-xl1{-webkit-box-ordinal-group:2;order:1}.flex.offset-xl12{margin-left:100%}.flex.offset-xl11{margin-left:91.6666666667%}.flex.offset-xl10{margin-left:83.3333333333%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl8{margin-left:66.6666666667%}.flex.offset-xl7{margin-left:58.3333333333%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl5{margin-left:41.6666666667%}.flex.offset-xl4{margin-left:33.3333333333%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl2{margin-left:16.6666666667%}.flex.offset-xl1{margin-left:8.3333333333%}.flex.offset-xl0{margin-left:0}}.child-flex>*,.flex{-webkit-box-flex:1;flex:1 1 auto;max-width:100%}.child-flex>.grow-shrink-0,.flex.grow-shrink-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.grow,.spacer{-webkit-box-flex:1!important;flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{-webkit-box-flex:0!important;flex-grow:0!important;flex-shrink:1!important}.fill-height{height:100%}",""]),e.exports=t},305:function(e,t,o){"use strict";o(288);var r=o(289);t.a=Object(r.a)("layout")},311:function(e,t,o){"use strict";o(288);var r=o(289);t.a=Object(r.a)("flex")},321:function(e,t,o){"use strict";var r=o(26),l=o(104);t.a={getAll:function(){var e=l.a.getInfoAuth().accessToken;return r.a.get("/api/v1/course",{headers:{Authorization:e}})},getBySlug:function(e){var t=l.a.getInfoAuth().accessToken;return r.a.get("api/v1/course/slug/".concat(e),{headers:{Authorization:"".concat(t)}})},createCourse:function(e){var t=l.a.getInfoAuth().accessToken;return r.a.post("api/v1/course",e,{headers:{Authorization:"".concat(t)}})},getById:function(e){var t=l.a.getInfoAuth().accessToken;return r.a.get("api/v1/course/".concat(e),{headers:{Authorization:t}})}}},333:function(e,t){},573:function(e,t,o){"use strict";var r=o(333),l=o.n(r);t.default=l.a},744:function(e,t,o){"use strict";o.r(t);var r=o(280),l=o(321),n={components:{NavigationBar:r.a},computed:{courses:function(){return this.$store.state.courses.list}},asyncData:function(e){var t=e.store;e.data,e.$axios;return l.a.getAll().then((function(e){return t.commit("courses/set",e.data)}))}},x=o(39),f=o(573),d=o(43),m=o.n(d),c=o(311),w=o(305),component=Object(x.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{"justify-center":"",id:"page"}},[t("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md4:""}},[t("resources-list",{attrs:{name:"Cursos",redirect:"true",resources:this.courses,path:"/admin/course",subtitle:function(e){return e.author}}})],1),this._v(" "),t("client-only",[t("navigation-bar")],1)],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);t.default=component.exports;m()(component,{VFlex:c.a,VLayout:w.a})}}]);