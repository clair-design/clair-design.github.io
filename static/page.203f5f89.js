__jsonpResolve(function(){var s={};s.exports=function(s,t){void 0===t&&(t={});var a=t.insertAt;if(s&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");return r.type="text/css","top"===a&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=s:r.appendChild(document.createTextNode(s)),function(){e.removeChild(r)}}};return s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",{staticClass:"markdown-body"},[a("h1",[s._v("Input 文本输入框")]),s._v(" "),a("p",[s._v("文本框用来让用户输入单行或多行文字。Clair 为文本输入框提供了不同的状态以及输入校验等功能。")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp0"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(2)],1),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp1"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(5)],1),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),a("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[a("VueApp2")],1),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp3"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(10)],1),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp4"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(13)],1),s._v(" "),s._m(14),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp5"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(15)],1),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),a("div",{staticClass:"vue-demo-block"},[a("VueApp6"),s._v(" "),a("vue-demo-tools"),s._v(" "),s._m(18)],1),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22)])},components:{VueApp0:function(){"use strict";return{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vue-demo"},[a("c-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.userName,callback:function(s){t.userName=s},expression:"userName"}}),t._v(" "),t.userName?a("span",{staticClass:"is-size-sm"},[t._v("Hello "+t._s(t.userName)+" !")]):t._e()],1)},staticRenderFns:[],data:function(){return{userName:"Clair"}}}}(),VueApp1:function(){"use strict";return{render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("div",{staticClass:"input-items"},[a("c-input",{attrs:{size:"xs"}}),s._v(" "),a("c-button",{attrs:{size:"xs",primary:""}},[s._v("确定")])],1),s._v(" "),a("div",{staticClass:"input-items"},[a("c-input",{attrs:{size:"sm"}}),s._v(" "),a("c-button",{attrs:{size:"sm",primary:""}},[s._v("确定")])],1),s._v(" "),a("div",{staticClass:"input-items"},[a("c-input"),s._v(" "),a("c-button",{attrs:{primary:""}},[s._v("确定")])],1),s._v(" "),a("div",{staticClass:"input-items"},[a("c-input",{attrs:{size:"lg"}}),s._v(" "),a("c-button",{attrs:{size:"lg",primary:""}},[s._v("确定")])],1),s._v(" "),a("div",{staticClass:"input-items"},[a("c-input",{attrs:{size:"xl"}}),s._v(" "),a("c-button",{attrs:{size:"xl",primary:""}},[s._v("确定")])],1)])},staticRenderFns:[]}}(),VueApp2:function(){"use strict";var s=["xs","sm","md","lg","xl"].map(function(s){return{label:s,value:s}}),t=["shortest","shorter","short","normal","long","longer","longest","flexible"].map(function(s){return{label:s,value:s}});return{render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vue-demo"},[a("c-form",{attrs:{size:t.size}},[a("c-form-item",{attrs:{label:"Size:"}},[a("c-radio-group",{attrs:{options:t.sizes,button:""},model:{value:t.size,callback:function(s){t.size=s},expression:"size"}})],1),t._v(" "),a("c-form-item",{attrs:{label:"Width:"}},[a("c-radio-group",{attrs:{options:t.widths,button:""},model:{value:t.width,callback:function(s){t.width=s},expression:"width"}})],1),t._v(" "),a("c-form-item",{attrs:{label:"输入框:"}},[a("c-input",{attrs:{size:t.size,width:t.width}})],1)],1)],1)},staticRenderFns:[],data:function(){return{width:"normal",size:"md",sizes:s,widths:t}}}}(),VueApp3:function(){"use strict";return{render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("c-input",{attrs:{disabled:"disabled",value:"我被禁用了"}}),s._v(" "),a("c-input",{attrs:{readonly:"readonly",value:"我是只读的"}})],1)},staticRenderFns:[]}}(),VueApp4:function(){"use strict";return{render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-demo"},[t("c-input",{attrs:{type:"textarea","multi-line":"",rows:3,width:"longer"}})],1)},staticRenderFns:[]}}(),VueApp5:function(){"use strict";return{render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-demo"},[t("c-input",{attrs:{type:"textarea","multi-line":"",autosize:[3,10],placeholder:"多行文本",width:"longer"}})],1)},staticRenderFns:[]}}(),VueApp6:function(){"use strict";return{render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-demo"},[a("c-input",{attrs:{placeholder:"domain"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[s._v("http:// ")]),s._v(" "),a("span",{attrs:{slot:"append"},slot:"append"},[s._v(" .com")])])],1)},staticRenderFns:[]}}()},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"wen-zi-shu-ru"}},[t("a",{attrs:{href:"#wen-zi-shu-ru",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("文字输入")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("最简单的使用场景下，只需通过 "),a("code",[s._v("v-model")]),s._v(" 属性给 "),a("code",[s._v("c-input")]),s._v(" 绑定一个模型即可。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"userName"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"请输入用户名"')]),s._v(" />")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"userName"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"is-size-sm"')]),s._v(">")]),s._v("Hello {{userName}} !"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("userName")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Clair'")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"gai-bian-shu-ru-kuang-gao-du"}},[t("a",{attrs:{href:"#gai-bian-shu-ru-kuang-gao-du",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("改变输入框高度")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("通过 "),a("code",[s._v("size")]),s._v(" 属性，你可以对输入框大小进行整体缩放，文字大小、内边距都会随之改变。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input-items"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xs"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xs"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(">")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input-items"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sm"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(">")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input-items"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(">")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input-items"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lg"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lg"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(">")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"input-items"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xl"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xl"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(">")]),s._v("确定"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"kuan-du-she-zhi"}},[t("a",{attrs:{href:"#kuan-du-she-zhi",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("宽度设置")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("Clair 中的输入框默认宽度为 "),a("code",[s._v("15em")]),s._v("，你可以通过 "),a("code",[s._v("width")]),s._v(" 属性设置不同宽度的输入框。在下面的例子中，你可以选择不同的 "),a("code",[s._v("size")]),s._v(" 和 "),a("code",[s._v("width")]),s._v(" 查看文本输入框的大小：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"jin-yong-he-zhi-du-zhuang-tai"}},[t("a",{attrs:{href:"#jin-yong-he-zhi-du-zhuang-tai",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("禁用和只读状态")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("disabled")]),s._v(" 和 "),a("code",[s._v("readonly")]),s._v(" 属性分别表示输入框的禁用和只读状态。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"我被禁用了"')]),s._v(" />")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"我是只读的"')]),s._v(" />")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"duo-xing-wen-ben-kuang"}},[t("a",{attrs:{href:"#duo-xing-wen-ben-kuang",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("多行文本框")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("类似于 "),a("code",[s._v("textarea")]),s._v("，可以通过 "),a("code",[s._v("rows")]),s._v(" 属性指定显示的高度。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textarea"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"longer"')]),s._v("\n/>")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("配合 "),a("code",[s._v("autosize")]),s._v(" 属性，还可以随着输入行数的增加自动调整高度。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textarea"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multi-line")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":autosize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[3, 10]"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"多行文本"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"longer"')]),s._v("\n/>")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"qian-zhi-hou-zhi-nei-rong"}},[t("a",{attrs:{href:"#qian-zhi-hou-zhi-nei-rong",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("前置/后置内容")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("使用 "),a("code",[s._v("slot")]),s._v(" 可以在输入框前面或后面附加一些内容。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"domain"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"prepend"')]),s._v(">")]),s._v("http:// "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"append"')]),s._v(">")]),s._v(" .com"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"shu-ru-yan-zheng"}},[t("a",{attrs:{href:"#shu-ru-yan-zheng",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("输入验证")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("表单验证请参考 "),a("a",{attrs:{href:"form",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("表单组件的「输入验证」")]),s._v(" 部分。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"shu-xing-shuo-ming"}},[t("a",{attrs:{href:"#shu-xing-shuo-ming",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("属性说明")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("String, Number")]),s._v(" "),a("td",[s._v("无")]),s._v(" "),a("td",[s._v("默认值")])]),s._v(" "),a("tr",[a("td",[s._v("placeholder")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("无")]),s._v(" "),a("td",[s._v("同 HTML input 元素的 placeholder")])]),s._v(" "),a("tr",[a("td",[s._v("size")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("md")]),s._v(" "),a("td",[s._v("输入框整体大小，可以取 "),a("code",[s._v("xs")]),s._v("、"),a("code",[s._v("sm")]),s._v("、"),a("code",[s._v("md")]),s._v("、"),a("code",[s._v("lg")]),s._v("、"),a("code",[s._v("xl")])])]),s._v(" "),a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("normal")]),s._v(" "),a("td",[s._v("输入框宽度，可以取 "),a("code",[s._v("shortest")]),s._v("、"),a("code",[s._v("shorter")]),s._v("、"),a("code",[s._v("normal")]),s._v("、"),a("code",[s._v("long")]),s._v("、"),a("code",[s._v("longer")]),s._v(" 等")])]),s._v(" "),a("tr",[a("td",[s._v("readonly")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("是否只读")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("是否禁用")])]),s._v(" "),a("tr",[a("td",[s._v("multi-line")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("是否可以输入多行文字")])]),s._v(" "),a("tr",[a("td",[s._v("autosize")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("null")]),s._v(" "),a("td",[a("code",[s._v("[minRows, maxRows]")]),s._v(" 输入多行文字时，是否允许根据内容自动调整高度")])]),s._v(" "),a("tr",[a("td",[s._v("wrap")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("空")]),s._v(" "),a("td",[a("code",[s._v("on")]),s._v(" "),a("code",[s._v("off")]),s._v(" 控制换行")])]),s._v(" "),a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("text")]),s._v(" "),a("td",[s._v("参考 HTML input 元素的 type 属性")])]),s._v(" "),a("tr",[a("td",[s._v("name")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("无")]),s._v(" "),a("td",[s._v("参考 HTML input 元素的 name 属性")])]),s._v(" "),a("tr",[a("td",[s._v("rows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("3")]),s._v(" "),a("td",[s._v("输入框展示的高度")])]),s._v(" "),a("tr",[a("td",[s._v("cols")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("60")]),s._v(" "),a("td",[s._v("输入框展示的宽度")])]),s._v(" "),a("tr",[a("td",[s._v("maxlength")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("无")]),s._v(" "),a("td",[s._v("最多输入多少字符")])]),s._v(" "),a("tr",[a("td",[s._v("rules")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("无")]),s._v(" "),a("td",[s._v("输入验证规则，详见上面「输入验证」部分")])])])])}],mounted:function(){this.cleanup=null},destroyed:function(){this.cleanup&&this.cleanup()}},s.exports.metaInfo=function(){return{style:[{cssText:".vue-demo .input-items { margin-bottom: 1em; } .vue-demo .input-items inpu { margin-bottom: 1em; }\n"}],title:"Input 文本输入框"}},s.exports.computed={$vars:function(){return{}},$page:function(){var t=this.$route.path;return this.$pages.filter(function(s){return s.path===t})[0]||{}}},s.exports}());