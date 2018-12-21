__jsonpResolve(function(){var s={},a=s.exports=function(s,a){void 0===a&&(a={});var t=a.insertAt;if(s&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");return l.type="text/css","top"===t&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=s:l.appendChild(document.createTextNode(s)),function(){r.removeChild(l)}}},t="\n.c-chip__wrapper[data-v-3eecd26d] {\n  margin-bottom: 10px;\n}\n\n";return s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",{staticClass:"markdown-body"},[t("h1",[s._v("标签 - Chip")]),s._v(" "),t("p",[s._v("用来进行分类和标记的标签")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp0"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(2)],1),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp1"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(5)],1),s._v(" "),t("p",[s._v("也可自定义背景色。")]),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp2"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(6)],1),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp3"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(9)],1),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp4"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(12)],1),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp5"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(15)],1),s._v(" "),s._m(16),s._v(" "),s._m(17)])},components:{VueApp0:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-chip",{attrs:{label:"chip1"}}),s._v(" "),t("c-chip",[s._v("chip2")])],1)},staticRenderFns:[]}}(),VueApp1:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-chip",{attrs:{label:"red",color:"red"}}),s._v(" "),t("c-chip",{attrs:{label:"orange",color:"orange"}}),s._v(" "),t("c-chip",{attrs:{label:"yellow",color:"yellow"}}),s._v(" "),t("c-chip",{attrs:{label:"green",color:"green"}}),s._v(" "),t("c-chip",{attrs:{label:"cyan",color:"cyan"}}),s._v(" "),t("c-chip",{attrs:{label:"blue",color:"blue"}}),s._v(" "),t("c-chip",{attrs:{label:"indigo",color:"indigo"}}),s._v(" "),t("c-chip",{attrs:{label:"purple",color:"purple"}}),s._v(" "),t("c-chip",{attrs:{label:"pink",color:"pink"}}),s._v(" "),t("c-chip",{attrs:{label:"default"}}),s._v(" "),t("c-chip",{attrs:{label:"dark",color:"dark"}}),s._v(" "),t("c-chip",{attrs:{label:"black",color:"black"}})],1)},staticRenderFns:[],_scopeId:"data-v-3eecd26d"}}(),VueApp2:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-chip",{attrs:{color:"#336774"}},[s._v("#336774")]),s._v(" "),t("c-chip",{attrs:{label:"#724832",color:"#724832"}}),s._v(" "),t("c-chip",{attrs:{label:"#516E41",color:"#516E41"}})],1)},staticRenderFns:[]}}(),VueApp3:function(){"use strict";return{render:function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"vue-demo"},[t._l(t.chips,function(a,s){return r("c-chip",{key:s,staticStyle:{"margin-bottom":"10px"},attrs:{closable:"",color:a.color,label:a.label},on:{close:function(s){t.closeChip(a)}}})}),t._v(" "),t.inputVisible?r("c-input",{attrs:{width:"short",autofocus:""},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(s){return"button"in s||!t._k(s.keyCode,"enter",13,s.key,"Enter")?t.handleInputConfirm(s):null}},model:{value:t.inputValue,callback:function(s){t.inputValue=s},expression:"inputValue"}}):r("c-button",{staticStyle:{height:"28px"},attrs:{primary:"",outline:""},on:{click:t.showInput}},[t._v("+ New Chip")])],2)},staticRenderFns:[],data:function(){return{chips:[{label:"red",color:"red"},{label:"orange",color:"orange"},{label:"yellow",color:"yellow"},{label:"green",color:"green"},{label:"cyan",color:"cyan"},{label:"blue",color:"blue"},{label:"indigo",color:"indigo"},{label:"purple",color:"purple"},{label:"pink",color:"pink"},{label:"default",color:""},{label:"dark",color:"dark"},{label:"black",color:"black"}],inputVisible:!1,inputValue:""}},methods:{closeChip:function(s){this.chips.splice(this.chips.indexOf(s),1)},showInput:function(){this.inputVisible=!0},handleInputConfirm:function(){var s=this.inputValue;s&&this.chips.push({label:s,type:"primary"}),this.inputVisible=!1,this.inputValue=""}}}}(),VueApp4:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-chip",{attrs:{size:"xs",label:"超小号"}}),s._v(" "),t("c-chip",{attrs:{size:"sm",label:"小号"}}),s._v(" "),t("c-chip",{attrs:{label:"正常"}}),s._v(" "),t("c-chip",{attrs:{size:"lg",label:"大号"}}),s._v(" "),t("c-chip",{attrs:{size:"xl",label:"超大号"}})],1)},staticRenderFns:[]}}(),VueApp5:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-tip",{attrs:{content:s.value,position:"top"}},[t("c-chip",{style:s.styleObj,attrs:{label:s.value}})],1),s._v(" "),t("c-tip",{attrs:{content:s.value,position:"top"}},[t("c-chip",{attrs:{label:s.chipLabel}})],1)],1)},staticRenderFns:[],data:function(){return{value:"我是一个超级超级超级超级超级超级超级超级超级长的标签",styleObj:{maxWidth:"150px"}}},computed:{chipLabel:function(){return 20<this.value.length?this.value.slice(0,20):this.value}}}}()},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"ji-chu-yong-fa"}},[a("a",{attrs:{href:"#ji-chu-yong-fa",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("基础用法")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("设置"),t("code",[s._v("label")]),s._v("属性，或直接在标签内填写标签内容。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chip1"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("chip2"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"zi-ding-yi-biao-qian-yan-se"}},[a("a",{attrs:{href:"#zi-ding-yi-biao-qian-yan-se",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("自定义标签颜色")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("设置"),t("code",[s._v("color")]),s._v("属性，自定义标签颜色。可从以下颜色当中选取。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"orange"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"orange"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yellow"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"yellow"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cyan"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cyan"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"indigo"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"indigo"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pink"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pink"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"default"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dark"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dark"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"black"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"black"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".c-chip__wrapper")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-bottom")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#336774"')]),s._v(">")]),s._v("#336774"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#724832"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#724832"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#516E41"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#516E41"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"biao-qian-de-dong-tai-tian-jia-he-shan-chu"}},[a("a",{attrs:{href:"#biao-qian-de-dong-tai-tian-jia-he-shan-chu",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("标签的动态添加和删除")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("添加"),t("code",[s._v("closable")]),s._v("属性，设置为可关闭标签。通过对数组的操作，实现对标签的添加和删除。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(chip, index) in chips"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("closable")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chip.color"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chip.label"')]),s._v("\n  @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("close")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"closeChip(chip)"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"margin-bottom:10px;"')]),s._v("\n>")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"inputVisible"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"inputValue"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"short"')]),s._v("\n  @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("keyup.enter.native")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleInputConfirm"')]),s._v("\n  @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("blur")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleInputConfirm"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("autofocus")]),s._v("\n>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-input")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outline")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showInput"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"height:28px;"')]),s._v(">")]),s._v("+ New Chip"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("chips")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'orange'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'orange'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cyan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cyan'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'indigo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'indigo'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'purple'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'purple'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pink'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'pink'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'default'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("},\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'dark'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'dark'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'black'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'black'")]),s._v(" },\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("inputVisible")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("inputValue")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      closeChip(chip) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".chips.splice("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".chips.indexOf(chip), "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n      },\n\n      showInput() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".inputVisible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n\n      handleInputConfirm() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" inputValue = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".inputValue\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (inputValue) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".chips.push({"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": inputValue, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'primary'")]),s._v("})\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".inputVisible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".inputValue = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"she-zhi-biao-qian-da-xiao"}},[a("a",{attrs:{href:"#she-zhi-biao-qian-da-xiao",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("设置标签大小")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("设置"),t("code",[s._v("size")]),s._v("属性，定义标签大小。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"超小号"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sm"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"小号"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"正常"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lg"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"大号"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xl"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"超大号"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"biao-qian-chang-du-de-xian-zhi"}},[a("a",{attrs:{href:"#biao-qian-chang-du-de-xian-zhi",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("标签长度的限制")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("结合"),t("code",[s._v("<c-tip>")]),s._v("，通过设置标签的最大宽度，或者通过内容的长度的限制，来控制标签的宽度。可在hover时显示完整内容。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-tip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":content")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"styleObj"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-tip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-tip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":content")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chipLabel"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-chip")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("c-tip")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"我是一个超级超级超级超级超级超级超级超级超级长的标签"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("styleObj")]),s._v(" : {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'150px'")]),s._v("\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n      chipLabel () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value.length > "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value.slice("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(") : "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"shu-xing-shuo-ming"}},[a("a",{attrs:{href:"#shu-xing-shuo-ming",target:"_blank",rel:"nofollow noopener noreferrer"}}),this._v("属性说明")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("可选值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("label")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("标签内容")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("自定义标签颜色")]),s._v(" "),t("td",[s._v("red / orange / yellow / green / cyan / blue / indigo / purple / pink / dark / black...")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("-")]),s._v(" "),t("td",[s._v("标签大小")]),s._v(" "),t("td",[s._v("xs / sm / md / lg / xl")])]),s._v(" "),t("tr",[t("td",[s._v("closable")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("是否有关闭按钮")]),s._v(" "),t("td",[s._v("-")])])])])}],mounted:function(){this.cleanup=a(t)},destroyed:function(){this.cleanup&&this.cleanup()}},s.exports.metaInfo=function(){return{title:"Chip"}},s.exports.computed={$vars:function(){return{}},$page:function(){var a=this.$route.path;return this.$pages.filter(function(s){return s.path===a})[0]||{}}},s.exports}());