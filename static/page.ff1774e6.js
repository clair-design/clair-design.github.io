__jsonpResolve(function(){var e={},t={epxorts:e},n={};(function(){var t={metaInfo:function(){return{title:"颜色"}},computed:{$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(e){return e.path===t})[0]||{}}},components:{md2vuedemo0:{data:function(){return{colors:["red","orange","yellow","green","cyan","blue","indigo","purple","pink","gray"]}},methods:{className:function(e,t){return["is-bg-"+e+"-"+t]}},render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",{staticClass:"vue-demo"},[s("c-box",{staticClass:"no-gap"},n._l(n.colors,function(t){return s("c-box-item",{attrs:{xs:"4",sm:"2",lg:"1"}},[s("h3",{staticClass:"has-text-centered"},[n._v(n._s(t))]),n._v(" "),n._l(12,function(e){return s("div",{staticClass:"color-block",class:n.className(t,e)},[n._v("\n        "+n._s(t+"-"+e)+"\n      ")])})],2)}))],1)},staticRenderFns:[],_scopeId:"data-v-029571ac"}},render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"markdown-body"},[n("h1",{attrs:{id:"yan2-se4"}},[e._v("颜色")]),e._v(" "),n("p",[e._v("色彩，在界面设计中的使用应同时具备品牌识别性以及界面设计功能性，任何颜色的选取和使用应该是有意义的。尽管同一种颜色传达的含义会受到文化和地域的影响。")]),e._v(" "),n("p",[e._v("为了避免视觉传达差异，统一使用一套特定的调色板来规定颜色，定义不同基色并衍生出九宫格色板，再配以黑白叠加的方式实现色彩明暗的效果，可为产品提供一致的外观视觉感受。")]),e._v(" "),n("h2",{attrs:{id:"se4-ban3"}},[e._v("色板")]),e._v(" "),n("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[n("md2vuedemo0")],1),e._v(" "),n("h2",{attrs:{id:"yan2-se4-shi3-yong4"}},[e._v("颜色使用")]),e._v(" "),n("p",[e._v("Clair 提供了一些 CSS 类，让你可以将这些颜色使用在背景色或文字颜色中。")]),e._v(" "),n("h3",{attrs:{id:"bei4-jing3-yan2-se4"}},[e._v("背景颜色")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("h3",{attrs:{id:"wen2-zi4-yan2-se4"}},[e._v("文字颜色")]),e._v(" "),e._m(2),e._v(" "),n("p",{staticClass:"is-text-blue-8"},[e._v("这是一 blue-8 号颜色显示的文字")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("可以给一个元素加上 CSS 类 "),n("code",[e._v("is-bg-red-7")]),e._v(" 使其背景色为上面色板中的 "),n("code",[e._v("red-7")]),e._v(" 号颜色。文字的颜色会根据背景色的深浅自动调整为黑色或白色，除非你自己设置了其它的文字颜色。例如：")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-box"},[n("div",{staticClass:"c-box__item is-offset-1 is-bg-red-4"},[e._v(".is-bg-red-4")]),e._v(" "),n("div",{staticClass:"c-box__item is-bg-pink-4"},[e._v(".is-bg-pink-4")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("给一段文字加 CSS 类 "),n("code",[e._v("is-text-blue-8")]),e._v(" 会让这段文字显示为上面色板中的 "),n("code",[e._v("blue-8")]),e._v(" 号颜色。")])}],name:"docs-content-component-color-md",created:function(){this.__clean=function(e){if("undefined"!=typeof window&&"undefined"!=typeof document){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;var n=document.getElementsByTagName("head")[0];return n.appendChild(t),function(){n.removeChild(t)}}}(".color-block[data-v-029571ac]{flex-basis:10em;font-size:.8em;white-space:nowrap;padding:1em .5em}")},destroyed:function(){this.__clean()},install:function(e){e.component(t.name,t)}};this.DocsContentComponentColorMd=t}).call(n);var s=n.DocsContentComponentColorMd;return"object"==typeof e&&void 0!==t&&(t.exports=s),t.exports}());