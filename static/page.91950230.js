__jsonpResolve(function(){var t={},e=t.exports=function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t)),function(){i.removeChild(o)}}},n=".container[data-v-28a02243]{height:200px}.transition-target[data-v-28a02243]{position:absolute;top:auto;left:auto;width:200px;height:200px;background:red;margin-left:5em}";return t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"markdown-body "},[n("h1",[t._v("过渡动画")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[n("VueApp0")],1)])},components:{VueApp0:function(){"use strict";return function(t,e,n,i,o,r,a,s,d,c){"boolean"!=typeof a&&(d=s,s=a,a=!1);var l,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):e&&(l=a?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(u.functional){var v=u.render;u.render=function(t,e){return l.call(e),v(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-demo"},[n("div",[n("c-form",{attrs:{"label-width":"5em"}},[n("c-form-item",{attrs:{label:"过渡效果："}},[n("c-radio-group",{attrs:{button:"",options:[{label:"fade-in-down",value:"fade-in-down"},{label:"zoom-in",value:"zoom-in"}]},model:{value:e.transition,callback:function(t){e.transition=t},expression:"transition"}})],1),e._v(" "),n("c-form-item",{attrs:{label:" "}},[n("c-button",{attrs:{primary:"",type:"button"},on:{click:e.play}},[e._v("播放动画")])],1)],1),e._v(" "),n("div",{staticClass:"container"},[n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"transition-target"})])],1)],1)])},staticRenderFns:[]},void 0,{data:function(){return{transition:"fade-in-down",visible:!1}},methods:{play:function(){this.visible=!this.visible}}},"data-v-28a02243",!1,void 0,!1,void 0,void 0,void 0)}()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Clair 内置了一些过渡效果的 CSS，搭配 Vue.js 的 "),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("transition")]),t._v(" 组件，可以可以给元素或组件添加进入或退出时的过渡动画。")])}],mounted:function(){this.cleanup=e(n)},destroyed:function(){this.cleanup&&this.cleanup()}},t.exports.metaInfo=function(){return{title:"过渡动画"}},t.exports.computed={$vars:function(){return{}},$page:function(){var e=this.$route.path;return this.$pages.filter(function(t){return t.path===e})[0]||{}}},t.exports}());