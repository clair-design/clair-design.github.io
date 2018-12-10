__jsonpResolve(function(){var t={};t.exports=function(t,e){void 0===e&&(e={});var s=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");return v.type="text/css","top"===s&&i.firstChild?i.insertBefore(v,i.firstChild):i.appendChild(v),v.styleSheet?v.styleSheet.cssText=t:v.appendChild(document.createTextNode(t)),function(){i.removeChild(v)}}};return t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"markdown-body"},[s("h1",[t._v("文本样式")]),t._v(" "),s("p",[t._v("作为视觉表达语言，排版的主要任务是简洁清晰的表明所阐述内容，段落间隔与文字密度起着至关重要的作用。良好的排版规范能大大提升用户的视觉体验，我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。")]),t._v(" "),s("h2",{attrs:{id:"zi-ti-font-family"}},[t._v("字体 font-family")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[s("VueApp0")],1),t._v(" "),s("h2",{attrs:{id:"da-xiao-sizing"}},[t._v("大小 Sizing")]),t._v(" "),s("p",[t._v("Clair 内置了五种大小的文字，分别在不同的场景下使用。")]),t._v(" "),t._m(1),t._v(" "),s("h2",{attrs:{id:"xing-gao-line-height"}},[t._v("行高 line-height")]),t._v(" "),s("p",[t._v("Clair 提供了五种行高的大小。对于大多数内容文字来说，1.6 倍的行高更适合阅读。")]),t._v(" "),s("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[s("VueApp1")],1),t._v(" "),s("h2",{attrs:{id:"dui-qi"}},[t._v("对齐")]),t._v(" "),t._m(2),t._v(" "),s("h2",{attrs:{id:"wen-zi-cu-xi"}},[t._v("文字粗细")]),t._v(" "),t._m(3)])},components:{VueApp0:function(){"use strict";return{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-demo"},[s("c-box",[s("c-box-item",{attrs:{width:"15em"}},[s("h3",{staticClass:"has-margin-left-lg"},[t._v("中文字体")]),t._v(" "),s("ul",[s("li",[t._v("PingFang SC")]),t._v(" "),s("li",[t._v("Microsoft YaHei")]),t._v(" "),s("li",[t._v("Hiragino Sans GB")])])]),t._v(" "),s("c-box-item",{attrs:{width:"15em"}},[s("h3",{staticClass:"has-margin-left-lg"},[t._v("英文字体")]),t._v(" "),s("ul",[s("li",[t._v("Segoe UI")]),t._v(" "),s("li",[t._v("Droid Sans")]),t._v(" "),s("li",[t._v("Helvetica Neue")])])])],1)],1)},staticRenderFns:[]}}(),VueApp1:function(){"use strict";return{render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-demo"},[s("c-box",{attrs:{gap:"2em"}},e._l(e.types,function(t){return s("c-box-item",{attrs:{"xs-only":"12","sm-only":"6"}},[s("h4",[e._v(".has-leading-"+e._s(t))]),e._v(" "),s("p",{staticClass:"is-size-sm",class:e.className(t)},[e._v("颜色或色彩是通过眼、脑和我们的生活经验所产生的一种对光的视觉效应。")])])}),1)],1)},staticRenderFns:[],data:function(){return{types:["xs","sm","md","lg","xl"]}},methods:{className:function(t){return["has-leading-"+t]}}}}()},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Clair 默认使用 "),s("code",[t._v("Sans-Serif")]),t._v(" 无衬线字体，这类字体更简洁，识别性高。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("示例")]),t._v(" "),s("th",[t._v("字体大小")]),t._v(" "),s("th",[t._v("CSS 类")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("div",{staticClass:"is-size-xxl"},[t._v("标题")])]),t._v(" "),s("td",[t._v("28px")]),t._v(" "),s("td",[t._v("`.is-size-xxl`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-xl"},[t._v("标题")])]),t._v(" "),s("td",[t._v("20px")]),t._v(" "),s("td",[t._v("`.is-size-xl`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-lg"},[t._v("小标题")])]),t._v(" "),s("td",[t._v("16px")]),t._v(" "),s("td",[t._v("`.is-size-lg`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-normal"},[t._v("普通文字")])]),t._v(" "),s("td",[t._v("14px")]),t._v(" "),s("td",[t._v("`.is-size-normal`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-sm"},[t._v("小号的文字")])]),t._v(" "),s("td",[t._v("13px")]),t._v(" "),s("td",[t._v("`.is-size-sm`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-xs"},[t._v("超小号的文字")])]),t._v(" "),s("td",[t._v("12px")]),t._v(" "),s("td",[t._v("`.is-size-xs`")])]),t._v(" "),s("tr",[s("td",[s("div",{staticClass:"is-size-xxs"},[t._v("最小号的文字")])]),t._v(" "),s("td",[t._v("10px")]),t._v(" "),s("td",[t._v("`.is-size-xxs`")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("使用 CSS 类 "),s("code",[t._v(".has-text-left")]),t._v("、"),s("code",[t._v(".has-text-right")]),t._v("、"),s("code",[t._v(".has-text-centered")]),t._v(" 和 "),s("code",[t._v(".has-text-justified")]),t._v(" 分别控制文本左对齐、右对齐、居中对齐和两端对齐。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("使用 CSS 类 "),s("code",[t._v(".has-weight-bold")]),t._v("、"),s("code",[t._v(".has-weight-normal")]),t._v(" 和 "),s("code",[t._v(".has-weight-light")]),t._v(" 分别控制文本以粗体、正常和纤细展示。")])}],mounted:function(){this.cleanup=null},destroyed:function(){this.cleanup&&this.cleanup()}},t.exports.metaInfo=function(){return{title:"文字"}},t.exports.computed={$vars:function(){return{}},$page:function(){var e=this.$route.path;return this.$pages.filter(function(t){return t.path===e})[0]||{}}},t.exports}());