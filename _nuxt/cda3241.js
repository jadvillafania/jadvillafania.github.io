(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(t,n,e){var content=e(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("6570a8f6",content,!0,{sourceMap:!1})},194:function(t,n,e){var content=e(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("78b0c682",content,!0,{sourceMap:!1})},211:function(t,n,e){"use strict";var o={data:function(){return{snackbarMessage:"",displaySnackbar:!1,links:[{text:"About Me",link:"#about"},{text:"Services",link:"#services"},{text:"Work History",link:"#experience"},{text:"Skillset",link:"#skills"},{text:"Projects",link:"#projects"},{text:"Contact",link:"#contact"}]}},methods:{copy:function(){document.querySelector("#email").select(),document.execCommand("copy"),this.snackbarMessage="Email copied to clipboard.",this.displaySnackbar=!0}}},r=(e(264),e(82)),l=e(114),c=e.n(l),v=e(323),d=e(315),f=e(324),_=e(314),k=e(212),h=e(325),m=e(329),x=e(326),y=e(83),S=e(327),w=e(328),C=e(330),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[e("v-navigation-drawer",{staticClass:"blue-grey darken-3",attrs:{fixed:"",app:""}},[e("v-row",{staticClass:"flex-column fill-height py-5 ma-0 align-center justify-center"},[e("div",{staticClass:"text-center"},[e("v-img",{staticClass:"rounded-circle mb-3",attrs:{alt:"John Villafania",src:"/profile.jpg",width:"200px"}}),t._v(" "),e("h1",[t._v("John Villafania")]),t._v(" "),e("label",{staticClass:"overline"},[t._v("Web Developer")]),t._v(" "),e("v-divider",{staticClass:"my-5"}),t._v(" "),e("ul",{staticClass:"list-nav"},t._l(t.links,(function(n,i){return e("li",{key:i},[e("v-btn",{staticClass:"text-capitalize",attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo(n.link)}}},[t._v(t._s(n.text))])],1)})),0)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-sheet",{staticClass:"d-flex transparent"},[e("input",{staticStyle:{position:"absolute",left:"-1000px"},attrs:{id:"email",type:"text",value:"johnarnoldvillafania@gmail.com"}}),t._v(" "),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{href:"mailto:johnarnoldvillafania@gmail.com",icon:""},on:{click:t.copy}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-google")])],1)]}}])},[t._v(" "),e("span",[t._v("johnarnoldvillafania@gmail.com")])]),t._v(" "),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:"",href:"https://github.com/jadvillafania",target:"_blank"}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-github")])],1)]}}])},[t._v(" "),e("span",[t._v("https://github.com/jadvillafania")])]),t._v(" "),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:"",href:"https://www.facebook.com/john.villafania/",target:"_blank"}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),e("span",[t._v("john.villafania")])]),t._v(" "),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-discord")])],1)]}}])},[t._v(" "),e("span",[t._v("HollowCast#0084")])])],1)],1)],1),t._v(" "),e("v-main",[e("div",{staticClass:"blue-grey darken-1"},[e("nuxt")],1)]),t._v(" "),e("v-snackbar",{attrs:{color:"info"},model:{value:t.displaySnackbar,callback:function(n){t.displaySnackbar=n},expression:"displaySnackbar"}},[t._v(t._s(t.snackbarMessage))])],1)}),[],!1,null,"241e4682",null);n.a=component.exports;c()(component,{VApp:v.a,VBtn:d.a,VDivider:f.a,VIcon:_.a,VImg:k.a,VMain:h.a,VNavigationDrawer:m.a,VRow:x.a,VSheet:y.a,VSnackbar:S.a,VSpacer:w.a,VTooltip:C.a})},231:function(t,n,e){e(232),t.exports=e(233)},258:function(t,n,e){"use strict";e(192)},259:function(t,n,e){var o=e(22)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},264:function(t,n,e){"use strict";e(194)},265:function(t,n,e){var o=e(22)(!1);o.push([t.i,".list-nav[data-v-241e4682]{list-style:none;padding:0;margin:16px 0 0}.list-nav li[data-v-241e4682]{margin-bottom:16px}",""]),t.exports=o},66:function(t,n,e){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(258),e(82)),l=e(114),c=e.n(l),v=e(323),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);n.a=component.exports;c()(component,{VApp:v.a})}},[[231,4,1,5]]]);