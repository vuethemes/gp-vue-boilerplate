(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{309:function(n,e,t){var map={"./de/index.json":[329,29],"./de/kontakt.json":[330,30],"./de/nutzungsbedingungen.json":[331,31],"./de/projekte.json":[334,32],"./de/projekte/projekt-1.json":[332,33],"./de/projekte/projekt-2.json":[333,34],"./de/rechtliche-hinweise.json":[335,35],"./de/ueber-uns.json":[336,36],"./en/about.json":[337,37],"./en/contact.json":[338,38],"./en/index.json":[339,39],"./en/legals.json":[340,40],"./en/projects.json":[343,41],"./en/projects/project-1.json":[341,42],"./en/projects/project-2.json":[342,43],"./en/terms.json":[344,44]};function o(n){if(!t.o(map,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[n],o=e[0];return t.e(e[1]).then((function(){return t.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=309,n.exports=o},310:function(n,e,t){"use strict";t(86),t(67);var o=t(147),r={scrollToTop:!0,asyncData:function(n){var e=n.store,o=n.app,r=n.error,path=n.route.path.replace(RegExp("^/".concat(o.i18n.locale)),"").replace(/^\/([^?.#]*)[\\/?#]{0,1}[^\\/]*$/,"$1").replace(/\/index|\/$/,"")||"index";return t(309)("./"+o.i18n.locale+"/"+path+".json").then((function(data){return"routeParams"in data&&e.dispatch("i18n/setRouteParams",data.routeParams),{title:data.title,components:data.components}})).catch((function(){r({statusCode:404,message:"local json file not found"})}))},data:function(){return{title:"title of page",components:[]}},created:function(){this.components=Object(o.a)(this.components)},head:function(){return{title:this.title}}},c=t(16),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},n._l(n.components,(function(e,o){return t(e.asyncComponent,n._b({key:o,tag:"component"},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},397:function(n,e,t){"use strict";t.r(e);var o={extends:t(310).a,nuxtI18n:{paths:{en:"/contact",de:"/kontakt"}}},r=t(16),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);