__jsonpResolve(function(){var s={};s.exports=function(s,a){void 0===a&&(a={});var t=a.insertAt;if(s&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");return v.type="text/css","top"===t&&n.firstChild?n.insertBefore(v,n.firstChild):n.appendChild(v),v.styleSheet?v.styleSheet.cssText=s:v.appendChild(document.createTextNode(s)),function(){n.removeChild(v)}}};return s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",{staticClass:"markdown-body"},[t("h1",[s._v("Menu")]),s._v(" "),s._m(0),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp0"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(1)],1),s._v(" "),t("h2",{attrs:{id:"shen-se-zhu-ti"}},[s._v("深色主题")]),s._v(" "),s._m(2),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp1"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(3)],1),s._v(" "),t("h2",{attrs:{id:"zong-xiang-cai-dan"}},[s._v("纵向菜单")]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),t("div",{staticClass:"vue-demo-block"},[t("VueApp2"),s._v(" "),t("vue-demo-tools"),s._v(" "),s._m(6)],1),s._v(" "),t("h2",{attrs:{id:"shu-xing-shuo-ming"}},[s._v("属性说明")]),s._v(" "),s._m(7)])},components:{VueApp0:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-menu",{attrs:{mode:"horizontal"}},[t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"home",type:"fa"}}),s._v(" "),t("span",[s._v("首页")])],1)]),s._v(" "),t("c-menu-item",{attrs:{active:""}},[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"cogs",type:"fa"}}),s._v(" "),t("span",[s._v("设置")])],1)]),s._v(" "),t("c-submenu",[t("template",{slot:"title"},[t("c-icon",{attrs:{name:"share-alt",type:"fa"}}),s._v(" "),t("span",[s._v("分享")])],1),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"weibo",type:"fa"}}),s._v(" "),t("span",[s._v("分享到微博")])],1)]),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"wechat",type:"fa"}}),s._v(" "),t("span",[s._v("分享到微信")])],1)]),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"twitter",type:"fa"}}),s._v(" "),t("span",[s._v("分享到 Twitter")])],1)])],2)],1)],1)},staticRenderFns:[]}}(),VueApp1:function(){"use strict";return{render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"vue-demo"},[t("c-menu",{attrs:{mode:"horizontal",theme:"dark"}},[t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"home",type:"fa"}}),s._v(" "),t("span",[s._v("首页")])],1)]),s._v(" "),t("c-menu-item",{attrs:{active:""}},[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"cogs",type:"fa"}}),s._v(" "),t("span",[s._v("设置")])],1)]),s._v(" "),t("c-submenu",[t("template",{slot:"title"},[t("c-icon",{attrs:{name:"share-alt",type:"fa"}}),s._v(" "),t("span",[s._v("分享")])],1),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"weibo",type:"fa"}}),s._v(" "),t("span",[s._v("分享到微博")])],1)]),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"wechat",type:"fa"}}),s._v(" "),t("span",[s._v("分享到微信")])],1)]),s._v(" "),t("c-menu-item",[t("a",{attrs:{href:"#"}},[t("c-icon",{attrs:{name:"twitter",type:"fa"}}),s._v(" "),t("span",[s._v("分享到 Twitter")])],1)])],2)],1)],1)},staticRenderFns:[]}}(),VueApp2:function(){"use strict";return{render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"vue-demo"},[t("div",{staticClass:"has-margin-bottom-lg"},[t("c-button",{attrs:{icon:"menu",flat:"",primary:""},on:{click:a.toggleCollapsed}},[a._v("切换展开收起")]),a._v(" "),t("c-radio-group",{attrs:{options:a.themes,button:""},model:{value:a.theme,callback:function(s){a.theme=s},expression:"theme"}})],1),a._v(" "),t("c-menu",{attrs:{mode:"vertical",theme:a.theme,collapsed:a.collapsed,width:"200px"}},[t("c-menu-item",[t("a",[t("c-icon",{attrs:{name:"home",type:"fa"}}),a._v(" "),t("span",[a._v("首页")])],1)]),a._v(" "),t("c-menu-item",{attrs:{active:""}},[t("a",[t("c-icon",{attrs:{name:"cogs",type:"fa"}}),a._v(" "),t("span",[a._v("设置")])],1)]),a._v(" "),t("c-submenu",[t("template",{slot:"title"},[t("c-icon",{attrs:{name:"share-alt",type:"fa"}}),a._v(" "),t("span",[a._v("分享")])],1),a._v(" "),t("c-menu-item",[t("a",[t("span",[a._v("分享到微博")])])]),a._v(" "),t("c-menu-item",[t("a",[t("span",[a._v("分享到微信")])])]),a._v(" "),t("c-menu-item",[t("a",[t("span",[a._v("分享到 Twitter")])])])],2)],1)],1)},staticRenderFns:[],data:function(){return{theme:"light",collapsed:!1,themes:[{label:"浅色主题",value:"light"},{label:"深色主题",value:"dark"}]}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}}}()},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",[s._v("c-menu")]),s._v(" 用来展示导航菜单，支持横向和纵向两种展示方式。"),t("code",[s._v("mode")]),s._v(" 为 "),t("code",[s._v("horizontal")]),s._v(" 时横向展示，"),t("code",[s._v("vertical")]),s._v(" 时纵向展示。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"horizontal"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"home"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("首页"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("active")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cogs"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("设置"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share-alt"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"weibo"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微博"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"wechat"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微信"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"twitter"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到 Twitter"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("默认的主题颜色为浅色系，可以将 "),t("code",[s._v("theme")]),s._v(" 设置为 "),t("code",[s._v("dark")]),s._v(" 显示深色主题。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"horizontal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dark"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"home"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("首页"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("active")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cogs"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("设置"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share-alt"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"weibo"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微博"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"wechat"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微信"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"#"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"twitter"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到 Twitter"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("当 "),t("code",[s._v("mode")]),s._v(" 为 "),t("code",[s._v("vertical")]),s._v(" 时，可以将菜单收起，只显示图标。菜单默认展开，当 "),t("code",[s._v("collapsed")]),s._v(" 为 "),t("code",[s._v("true")]),s._v(" 时收起。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("纵向菜单默认宽度为 "),t("code",[s._v("20em")]),s._v("，可以通过 "),t("code",[s._v("width")]),s._v(" 属性进行自定义，其值可以是任何有效的 CSS 长度。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0,attrs:{class:"vue-demo-source-code"}},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"has-margin-bottom-lg"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"menu"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("primary")]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"toggleCollapsed"')]),s._v(">")]),s._v("切换展开收起"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-button")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-radio-group")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"themes"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"theme"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("button")]),s._v("\n    />")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":theme")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"theme"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":collapsed")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"collapsed"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"200px"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"home"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("首页"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("active")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"cogs"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("设置"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share-alt"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"fa"')]),s._v(" />")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微博"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到微信"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("分享到 Twitter"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu-item")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-submenu")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("c-menu")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("theme")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'light'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("collapsed")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("themes")]),s._v(": [\n        {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'浅色主题'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'light'")]),s._v("\n        },\n        {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'深色主题'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'dark'")]),s._v("\n        }\n      ]\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    toggleCollapsed () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".collapsed = !"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".collapsed\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mode")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("horizontal")]),s._v(" "),t("td",[s._v("horizontal 或 vertical，表示横向或纵向展示菜单")])]),s._v(" "),t("tr",[t("td",[s._v("width")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("20em")]),s._v(" "),t("td",[s._v("纵向展示时的菜单宽度，可以为任意有效 CSS 长度")])]),s._v(" "),t("tr",[t("td",[s._v("collapsed")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("是否收起菜单")])]),s._v(" "),t("tr",[t("td",[s._v("theme")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("light")]),s._v(" "),t("td",[s._v("light 或 dark，表示用浅色或深色系主题")])])])])}],mounted:function(){this.cleanup=null},destroyed:function(){this.cleanup&&this.cleanup()}},s.exports.metaInfo=function(){return{title:"Menu 导航菜单"}},s.exports.computed={$vars:function(){return{}},$page:function(){var a=this.$route.path;return this.$pages.filter(function(s){return s.path===a})[0]||{}}},s.exports}());