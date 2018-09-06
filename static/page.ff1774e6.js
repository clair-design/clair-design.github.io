__jsonpResolve(function(){var e={},t=e.exports=function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");return r.type="text/css","top"===n&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),function(){s.removeChild(r)}}},n="\n.color-block[data-v-3eecd26d] {\n  -ms-flex-preferred-size: 10em;\n      flex-basis: 10em;\n  font-size: 0.8em;\n  white-space: nowrap;\n  padding: 1em 0.5em;\n}\n\n";return e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"markdown-body"},[n("h1",[e._v("颜色")]),e._v(" "),n("p",[e._v("色彩，在界面设计中的使用应同时具备品牌识别性以及界面设计功能性，任何颜色的选取和使用应该是有意义的。尽管同一种颜色传达的含义会受到文化和地域的影响。")]),e._v(" "),n("p",[e._v("为了避免视觉传达差异，统一使用一套特定的调色板来规定颜色，定义不同基色并衍生出九宫格色板，再配以黑白叠加的方式实现色彩明暗的效果，可为产品提供一致的外观视觉感受。")]),e._v(" "),n("h2",{attrs:{id:"se-ban"}},[e._v("色板")]),e._v(" "),n("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[n("VueApp0")],1),e._v(" "),n("h2",{attrs:{id:"yan-se-shi-yong"}},[e._v("颜色使用")]),e._v(" "),n("p",[e._v("Clair 提供了一些 CSS 类，让你可以将这些颜色使用在背景色或文字颜色中。")]),e._v(" "),n("h3",{attrs:{id:"bei-jing-yan-se"}},[e._v("背景颜色")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("h3",{attrs:{id:"wen-zi-yan-se"}},[e._v("文字颜色")]),e._v(" "),e._m(2),e._v(" "),n("p",{staticClass:"is-text-blue-8"},[e._v("这是一 blue-8 号颜色显示的文字")])])},components:{VueApp0:function(){"use strict";return{render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",{staticClass:"vue-demo"},[s("c-box",{staticClass:"no-gap"},n._l(n.colors,function(t){return s("c-box-item",{attrs:{xs:"4",sm:"2",lg:"1"}},[s("h3",{staticClass:"has-text-centered"},[n._v(n._s(t))]),n._v(" "),n._l(12,function(e){return s("div",{staticClass:"color-block",class:n.className(t,e)},[n._v(" "+n._s(t+"-"+e)+" ")])})],2)}))],1)},staticRenderFns:[],_scopeId:"data-v-3eecd26d",data:function(){return{colors:["red","orange","yellow","green","cyan","blue","indigo","purple","pink","gray"]}},methods:{className:function(e,t){return["is-bg-"+e+"-"+t]}}}}()},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("可以给一个元素加上 CSS 类 "),n("code",[e._v("is-bg-red-7")]),e._v(" 使其背景色为上面色板中的 "),n("code",[e._v("red-7")]),e._v(" 号颜色。文字的颜色会根据背景色的深浅自动调整为黑色或白色，除非你自己设置了其它的文字颜色。例如：")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-box"},[n("div",{staticClass:"c-box__item is-offset-1 is-bg-red-4"},[e._v(".is-bg-red-4")]),e._v(" "),n("div",{staticClass:"c-box__item is-bg-pink-4"},[e._v(".is-bg-pink-4")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("给一段文字加 CSS 类 "),n("code",[e._v("is-text-blue-8")]),e._v(" 会让这段文字显示为上面色板中的 "),n("code",[e._v("blue-8")]),e._v(" 号颜色。")])}],mounted:function(){this.cleanup=t(n)},destroyed:function(){this.cleanup&&this.cleanup()}},e.exports.metaInfo=function(){return{title:"颜色"}},e.exports.computed={$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(e){return e.path===t})[0]||{}}},e.exports}());