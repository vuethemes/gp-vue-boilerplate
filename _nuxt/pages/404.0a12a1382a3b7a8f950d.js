(window.webpackJsonp=window.webpackJsonp||[]).push([[9,1,6],{153:function(e,t,n){"use strict";(function(e){var l=n(160),r={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};t.a={props:{loading:{type:String,required:!1,default:()=>"auto"},sourceClientOnly:{type:Boolean,required:!1,default:()=>!0},placeholder:{type:String,required:!1,default:()=>"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},sources:{type:[Array,Object],default:()=>[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]},width:{type:Number,required:!1,default:()=>null},height:{type:Number,required:!1,default:()=>null},title:{type:String,required:!1,default:()=>"image title"},alt:{type:String,required:!1,default:()=>"image description"}},computed:{sorted(){return function(e,pattern){return e.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(l.a.keys())).reverse()},items(){return this.sorted.map(source=>{var e;return(source=Object.assign({},source)).type="",this.sourceClientOnly,source.type=r[(e=source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"),/\w+$/.exec(e)[0])],source.media=l.a.get(source.media),source})}},methods:{onLoad(){"objectFitImages"in e&&e.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,n(10))},154:function(e,t,n){var content=n(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("baea8822",content,!0,{sourceMap:!1})},155:function(e,t,n){var content=n(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("9249fa74",content,!0,{sourceMap:!1})},156:function(e,t,n){var content=n(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("6eccebc0",content,!0,{sourceMap:!1})},157:function(e,t,n){var content=n(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("e31edbf0",content,!0,{sourceMap:!1})},160:function(e,t,n){"use strict";var l,r=n(161),o=new Map(Object.entries(r));t.a=(l=new Map,o.forEach((e,t)=>{l.set(t.replace("--",""),e)}),l)},161:function(e){e.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},162:function(e,t,n){"use strict";var l=n(154);n.n(l).a},163:function(e,t,n){(t=n(23)(!1)).push([e.i,"picture,picture img{display:block}picture img{width:100%;max-width:100%}",""]),e.exports=t},164:function(e,t){},165:function(e,t,n){"use strict";var l=n(153).a,r=(n(162),n(7)),o=n(164),c=n.n(o),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{staticClass:"atom-responsive-image"},[e._l(e.items,(function(source,t){return n("source",e._b({key:t},"source",source,!1))})),e._v(" "),n("img",{attrs:{src:e.placeholder,alt:e.alt,title:e.title,loading:e.loading,width:e.width,height:e.height},on:{load:e.onLoad}})],2)}),[],!1,null,null,null);"function"==typeof c.a&&c()(component);t.a=component.exports},166:function(e,t,n){"use strict";var l={props:{content:{type:String,required:!1,default:"<p>Example Text</p>"}}},r=(n(170),n(7)),o=n(172),c=n.n(o),component=Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"atom-rich-text"},[this.$slots.default?this._e():t("div",{domProps:{innerHTML:this._s(this.content)}}),this._v(" "),this._t("default")],2)}),[],!1,null,"2abd1e12",null);"function"==typeof c.a&&c()(component);t.a=component.exports},167:function(e,t,n){"use strict";var l=n(155);n.n(l).a},168:function(e,t,n){(t=n(23)(!1)).push([e.i,'.atom-headline[data-v-017497a1]{font-style:normal;font-weight:400;line-height:1.5}.atom-headline>*[data-v-017497a1]{display:block}.atom-headline.headline--h2 .overline[data-v-017497a1],.atom-headline.headline--h2 .subline[data-v-017497a1]{font-size:3.2vw;font-weight:400}@media (min-width:576px){.atom-headline.headline--h2 .overline[data-v-017497a1],.atom-headline.headline--h2 .subline[data-v-017497a1]{font-size:12px}}.font_raleway .js--visible .atom-headline.headline--h2 .overline[data-v-017497a1],.font_raleway .js--visible .atom-headline.headline--h2 .subline[data-v-017497a1]{font-family:"Raleway",sans-serif}.font_raleway_500_normal .js--visible .atom-headline.headline--h2 .subline[data-v-017497a1]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-017497a1]{font-size:9.6vw}@media (min-width:576px){.atom-headline.headline--h2 .headline[data-v-017497a1]{font-size:36px}}.font_amatic_sc .js--visible .atom-headline.headline--h2 .headline[data-v-017497a1]{font-family:"Amatic SC",serif}.font_amatic_sc_700_normal .js--visible .atom-headline.headline--h2 .headline[data-v-017497a1]{font-weight:700}',""]),e.exports=t},169:function(e,t){},170:function(e,t,n){"use strict";var l=n(156);n.n(l).a},171:function(e,t,n){(t=n(23)(!1)).push([e.i,'.atom-rich-text b[data-v-2abd1e12],.atom-rich-text em[data-v-2abd1e12],.atom-rich-text i[data-v-2abd1e12],.atom-rich-text strong[data-v-2abd1e12]{font-style:normal;font-weight:400}.atom-rich-text[data-v-2abd1e12]{font-family:sans-serif;font-size:4.26667vw;font-weight:400}@media (min-width:576px){.atom-rich-text[data-v-2abd1e12]{font-size:16px}}.font_raleway .js--visible .atom-rich-text[data-v-2abd1e12]{font-family:"Raleway",sans-serif}',""]),e.exports=t},172:function(e,t){},173:function(e,t,n){"use strict";var l=n(157);n.n(l).a},174:function(e,t,n){(t=n(23)(!1)).push([e.i,"",""]),e.exports=t},175:function(e,t,n){var content=n(198);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("02eba4d8",content,!0,{sourceMap:!1})},194:function(e,t,n){"use strict";var l={props:{tag:{type:String,required:!1,default:()=>"h1"},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e}}},r=(n(167),n(7)),o=n(169),c=n.n(o),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"017497a1",null);"function"==typeof c.a&&c()(component);var d={components:{AtomHeadline:component.exports,AtomRichText:n(166).a},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}},m=(n(173),Object(r.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"molecule-article"},[this.headline?t("header",[t("atom-headline",this._b({attrs:{tag:"h2"}},"atom-headline",this.headline,!1))],1):this._e(),this._v(" "),this._t("default",[t("atom-rich-text",{attrs:{content:this.content}})])],2)}),[],!1,null,null,null));t.a=m.exports},196:function(e,t){},197:function(e,t,n){"use strict";var l=n(175);n.n(l).a},198:function(e,t,n){(t=n(23)(!1)).push([e.i,"",""]),e.exports=t},199:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("13dc67e6",content,!0,{sourceMap:!1})},214:function(e,t,n){"use strict";var l=n(199);n.n(l).a},215:function(e,t,n){(t=n(23)(!1)).push([e.i,".error>*{visibility:visible!important}",""]),e.exports=t},243:function(e,t,n){"use strict";n.r(t);var l=n(90),r=n(91),o={components:{OrganismStagePicture:l.default,OrganismText:r.default},props:{error:{type:Object,default:()=>({})}},data:()=>({stagePicture:{picture:{sourceClientOnly:!1,sources:[{media:"default",srcset:"img/error.jpg"}]}},text:{article:{headline:{overline:null,headline:"404 - Page not found",subline:null},content:"<p>Unfortunately the page was not found.</p>"}}})},c=(n(214),n(7)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"error"},[t("organism-stage-picture",this._b({},"organism-stage-picture",this.stagePicture,!1)),this._v(" "),t("organism-text",this._b({},"organism-text",this.text,!1))],1)}),[],!1,null,null,null);t.default=component.exports},90:function(e,t,n){"use strict";n.r(t);var l=n(62),r=n(165),o={components:{LayoutDefaultContainer:l.a,AtomResponsiveImage:r.a},props:{options:{type:Object,default:()=>({})},picture:{type:Object,required:!1,default:()=>({sources:[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]})}}},c=n(7),d=n(196),m=n.n(d),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout-default-container",this._b({staticClass:"organism-stage-picture"},"layout-default-container",this.options,!1),[t("template",{slot:"background"},[this.picture?t("atom-responsive-image",this._b({},"atom-responsive-image",this.picture,!1)):this._e()],1)],2)}),[],!1,null,null,null);"function"==typeof m.a&&m()(component);t.default=component.exports},91:function(e,t,n){"use strict";n.r(t);var l=n(62),r=n(194),o={components:{LayoutDefaultContainer:l.a,MoleculeContentArticle:r.a},props:{options:{type:Object,default:()=>null},article:{type:Object,default:()=>({headline:{overline:"Text Overline",headline:"Text Headline",subline:"Text Subline"},content:"<p>Example Text</p>"})}}},c=(n(197),n(7)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout-default-container",this._b({staticClass:"organism-text"},"layout-default-container",this.options,!1),[t("molecule-content-article",this._b({},"molecule-content-article",this.article,!1))],1)}),[],!1,null,null,null);t.default=component.exports}}]);