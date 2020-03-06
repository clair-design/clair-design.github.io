__jsonpResolve(function(){var e={},t=e.exports=function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");return s.type="text/css","top"===n&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),function(){r.removeChild(s)}}},n=".color-block[data-v-8641efb0]{flex-basis:10em;font-size:.8em;white-space:nowrap;padding:1em .5em}";return e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"markdown-body "},[n("h1",[e._v("颜色")]),e._v(" "),n("p",[e._v("色彩，在界面设计中的使用应同时具备品牌识别性以及界面设计功能性，任何颜色的选取和使用应该是有意义的。尽管同一种颜色传达的含义会受到文化和地域的影响。")]),e._v(" "),n("p",[e._v("为了避免视觉传达差异，统一使用一套特定的调色板来规定颜色，定义不同基色并衍生出九宫格色板，再配以黑白叠加的方式实现色彩明暗的效果，可为产品提供一致的外观视觉感受。")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[n("VueApp0")],1),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Clair 提供了一些 CSS 类，让你可以将这些颜色使用在背景色或文字颜色中。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("p",{staticClass:"is-text-blue-8"},[e._v("这是一 blue-8 号颜色显示的文字")])])},components:{VueApp0:function(){"use strict";return function(e,t,n,r,s,o,i,a,c,l){"boolean"!=typeof i&&(c=a,a=i,i=!1);var _,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),r&&(d._scopeId=r),o?(_=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=_):t&&(_=i?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),_)if(d.functional){var u=d.render;d.render=function(e,t){return _.call(t),u(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,_):[_]}return n}({render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"vue-demo"},[r("c-box",{staticClass:"no-gap"},n._l(n.colors,function(t){return r("c-box-item",{attrs:{xs:"4",sm:"2",lg:"1"}},[r("h3",{staticClass:"has-text-centered"},[n._v(n._s(t))]),n._v(" "),n._l(12,function(e){return r("div",{staticClass:"color-block",class:n.className(t,e)},[n._v("\n      "+n._s(t+"-"+e)+"\n    ")])})],2)}),1)],1)},staticRenderFns:[]},void 0,{data:function(){return{colors:["red","orange","yellow","green","cyan","blue","indigo","purple","pink","gray"]}},methods:{className:function(e,t){return["is-bg-"+e+"-"+t]}}},"data-v-8641efb0",!1,void 0,!1,void 0,void 0,void 0)}()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"se-ban"}},[t("a",{attrs:{href:"#se-ban",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("色板")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"yan-se-shi-yong"}},[t("a",{attrs:{href:"#yan-se-shi-yong",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("颜色使用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bei-jing-yan-se"}},[t("a",{attrs:{href:"#bei-jing-yan-se",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("背景颜色")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("可以给一个元素加上 CSS 类 "),n("code",[e._v("is-bg-red-7")]),e._v(" 使其背景色为上面色板中的 "),n("code",[e._v("red-7")]),e._v(" 号颜色。文字的颜色会根据背景色的深浅自动调整为黑色或白色，除非你自己设置了其它的文字颜色。例如：")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-box"},[n("div",{staticClass:"c-box__item is-offset-1 is-bg-red-4"},[e._v(".is-bg-red-4")]),e._v(" "),n("div",{staticClass:"c-box__item is-bg-pink-4"},[e._v(".is-bg-pink-4")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"wen-zi-yan-se"}},[t("a",{attrs:{href:"#wen-zi-yan-se",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("文字颜色")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("给一段文字加 CSS 类 "),n("code",[e._v("is-text-blue-8")]),e._v(" 会让这段文字显示为上面色板中的 "),n("code",[e._v("blue-8")]),e._v(" 号颜色。")])}],mounted:function(){this.cleanup=t(n)},destroyed:function(){this.cleanup&&this.cleanup()}},e.exports.metaInfo=function(){return{title:"颜色"}},e.exports.computed={$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(e){return e.path===t})[0]||{}}},e.exports}());