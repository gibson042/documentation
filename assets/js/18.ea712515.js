(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{381:function(t,e,s){t.exports=s.p+"assets/img/zoe-partitions-risk-slide.f012d7b1.svg"},445:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eventual-send-with-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventual-send-with-e"}},[t._v("#")]),t._v(" eventual send with "),a("code",[t._v("E()")])]),t._v(" "),a("p",[t._v("In web browsers, a common pattern of remote communication is using the\n"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#promises",target:"_blank",rel:"noopener noreferrer"}},[t._v("asynchronous fetch API with promises"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("products")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Fetch problem: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("p",[t._v("In the Agoric platform, communicating with remote objects is similar,\nusing the "),a("code",[t._v("E()")]),t._v(" wrapper. For example,\na "),a("RouterLink",{attrs:{to:"/getting-started/deploying.html"}},[t._v("deploy script")]),t._v(" may want to use the\n"),a("RouterLink",{attrs:{to:"/zoe/api/zoe.html"}},[t._v("Zoe Service API")]),t._v(" to install a contract on a blockchain.\nBut the deploy script cannot call "),a("code",[t._v("zoe.install(bundle)")]),t._v(", because it does not have local\naccess to the "),a("code",[t._v("zoe")]),t._v(" object. However, the deploy\nscript is given a "),a("code",[t._v("zoe")]),t._v(" "),a("em",[t._v("remote presence")]),t._v(". To call methods on the\nactual Zoe object, the deploy script can do:")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/eventual-send'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("installationHandle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"eventual-send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventual-send"}},[t._v("#")]),t._v(" Eventual Send")]),t._v(" "),a("p",[t._v("One of the ways "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=T6h6TMuVHKQ&t=368s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zoe partitions risk"),a("OutboundLink")],1),t._v(" is by running in its own vat, separate from any smart contract that might\nuse too much compute time or heap space. The smart contracts also run in separate vats.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(381),alt:"Zoe in a separate vat"}})]),t._v(" "),a("p",[t._v("What happens when we call "),a("code",[t._v("E(zoe).install(bundle)")]),t._v(" is an "),a("em",[t._v("eventual send")]),t._v(":")]),t._v(" "),a("ol",[a("li",[t._v("A message consisting of a the method name "),a("code",[t._v("install")]),t._v("\nwith the arguments structure "),a("code",[t._v("[bundle]")]),t._v(" is "),a("RouterLink",{attrs:{to:"/guides/js-programming/far.html"}},[t._v("marshaled")]),t._v("\nto a flat string and queued for delivery to\nthe vat that "),a("code",[t._v("zoe")]),t._v(" comes from.")],1),t._v(" "),a("li",[a("code",[t._v("E(zoe).install(bundle)")]),t._v(" returns a promise for the result.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("then")]),t._v(" and "),a("code",[t._v("catch")]),t._v(" methods queue callbacks for when the promise\nis resolved or rejected.\nExecution continues until the stack is empty and thus this\nturn through the event loop completes.")]),t._v(" "),a("li",[a("em",[t._v("Eventually")]),t._v(" "),a("code",[t._v("zoe")]),t._v(" responds, which results in a new message\nin this vat's message queue and a new turn through the event loop.\nThe message is de-serialized and the results are passed to the relevant callback.")])]),t._v(" "),a("p",[t._v("This way, you can communicate with objects in separate vats\nas easily as objects in the same vat with one wrinkle: the communication\nmust be "),a("em",[t._v("asynchronous")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("E()")]),t._v(" wrapper works with:")]),t._v(" "),a("ul",[a("li",[t._v("remote presences (local proxies for objects in remote vats)")]),t._v(" "),a("li",[t._v("local objects (in the same vat)")]),t._v(" "),a("li",[t._v("promises for remote presences or local objects")])]),t._v(" "),a("p",[t._v("In all cases, "),a("code",[t._v("E(x).method(...args)")]),t._v(" returns a promise.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Promise Pipelining")]),t._v(" "),a("p",[t._v("Since "),a("code",[t._v("E()")]),t._v(" accepts promises, we can compose eventual sends:\n"),a("code",[t._v("E(E(object1).method1(...args1)).method2(...args2)")]),t._v(". This way\nwe can take advantage of "),a("em",[t._v("promise pipelining")]),t._v(" so that a single\nround trip suffices for both method calls.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Troubleshooting remote calls")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("E()")]),t._v(" function creates an\nforwarder that doesn't know what methods the remote object has.\nIf you misspell or incorrectly capitalize the method name,\nthe local environment can't tell you've done so. You'll only find out at runtime when the\nremote object complains that it doesn't know that method.")]),t._v(" "),a("p",[t._v("If an ordinary synchronous call ("),a("code",[t._v("obj.method()")]),t._v(") fails because the method doesn't exist,\nconsider that "),a("code",[t._v("obj")]),t._v(" may be remote and try "),a("code",[t._v("E(obj).method()")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Watch: How Agoric Solves Reentrancy Hazards (Nov 2020)")]),t._v(" "),a("p",[t._v("for more on eventual send and remote communication\n"),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/38oTyVv_D9I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}),[],!1,null,null,null);e.default=n.exports}}]);