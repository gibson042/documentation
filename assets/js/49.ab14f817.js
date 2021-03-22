(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{449:function(t,e,a){"use strict";a.r(e);var s=a(41),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"notifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifiers"}},[t._v("#")]),t._v(" Notifiers")]),t._v(" "),a("p",[t._v("Agoric uses a Notifier based on Promises to distribute state change updates. Notifiers rely on\npromises to deliver a stream of messages allowing many subscribers to receive notifications without\nthe publisher having to track a subscription list.")]),t._v(" "),a("p",[t._v("An object that wants to publish updates to interested clients would make a "),a("code",[t._v("notifier")]),t._v(" available to\nthem. The clients request the current state by calling "),a("code",[t._v("notifier.getUpdateSince()")]),t._v(", which returns\n(a promise for) a record containing "),a("code",[t._v("{ value, updateCount }")]),t._v(". From that point on, the next update\ncan be retrieved by calling")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("p",[t._v("On each call, if updateCount is the same as the current count, the promise won't be resolved until\na new value is reported to the notifier. If updateCount is different, the promise is resolved\nimmediately with the current state. If the stream is completed, the record will contain an\nundefined updateCount.")]),t._v(" "),a("p",[t._v("Notifiers are the facet of the protocol that provides updates to consumers. The other side is an\nupdater, which is how information providers supply information.  The object that wants to publish\ninformation starts by calling "),a("code",[t._v("makeNotifierKit()")]),t._v(", which returns "),a("code",[t._v("{ notifier, updater }")]),t._v(". The\nnotifier is provided to clients, while the updater is retained internally. The updater has three\nmethods, "),a("code",[t._v("updateState(state)")]),t._v(", "),a("code",[t._v("finish(finalState)")]),t._v(", and "),a("code",[t._v("fail(reason)")]),t._v(". "),a("code",[t._v("updateState")]),t._v(" supplies a\nnew state that will be used to resolve all the outstanding promises. "),a("code",[t._v("finish")]),t._v(" and "),a("code",[t._v("fail")]),t._v(" both close\nthe stream, one with a final state, the other by rejecting the promise, so that clients' Promises\nwill also be rejected.")]),t._v(" "),a("p",[a("code",[t._v("notifier.getUpdateSince()")]),t._v(" returns "),a("code",[t._v("{ value, updateCount }")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("value")]),t._v(" represents the state, and the format is up to the publisher.")]),t._v(" "),a("li",[a("code",[t._v("updateCount")]),t._v(" is used to request notification the next time there's a change to the state. If the\nstate becomes final (e.g. a seat exits), updateCount will be "),a("code",[t._v("undefined")]),t._v(".  If there's an error,\nthe promise for the record is rejected and there isn't a next state.")])]),t._v(" "),a("p",[t._v("If you call "),a("code",[t._v("getUpdateSince(oldUpdateCount)")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("With no count, or any "),a("code",[t._v("updateCount")]),t._v(" other than the most recent one:\n"),a("ul",[a("li",[t._v("The notifier immediately returns a promise for a record with the current state.")])])]),t._v(" "),a("li",[t._v("With the most-recently generated "),a("code",[t._v("updateCount")]),t._v(":\n"),a("ul",[a("li",[t._v("The notifier returns a promise for the next record, which is resolved on the next state change.")])])]),t._v(" "),a("li",[t._v("If you haven't called "),a("code",[t._v("getUpdateSince()")]),t._v(" before, you won't have a previous updateCount to use.")])]),t._v(" "),a("p",[t._v("Some notification systems also provide access to a complete history of an object's state\nchanges. The Agoric Notifier API only directly supports the single state change notification\nstyle. The client can't work around this by keeping lists of changes, since the service doesn't\nguarantee that clients will see all the changes.")]),t._v(" "),a("p",[t._v("An alternative approach for services that want to ensure their clients receive a more complete\nhistory is to represent the state as a set of changes leading up to the present. Use cases for this\ninclude an editor with an undo function, or an application with rollback ability.")]),t._v(" "),a("p",[t._v("Rather than sending "),a("code",[t._v("\"the current state is 'blue'.\"")]),t._v(", a contract could send "),a("code",[t._v("\"the current state is 'blue', the most recent update was { ''blah' => 'blue' }\"")]),t._v(".  If you, as a contract author,\ndetermine that clients want this much detail, you would have to package and send it.")]),t._v(" "),a("h2",{attrs:{id:"follower-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follower-pattern"}},[t._v("#")]),t._v(" Follower pattern")]),t._v(" "),a("p",[t._v("A common pattern for following updates to a notifier until it's done is the following.  Note that\nthe notifier object is remote, and so we use "),a("code",[t._v("E()")]),t._v(".  Also, "),a("code",[t._v("PublicAPI")]),t._v(" is a widely available\ncontract facet, where it often makes sense to put a "),a("code",[t._v("getNotifier()")]),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateSince")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newstate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateCount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updateCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recordNewValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resubscribe for more updates")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recordFinalValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reportError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNotifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("notifier")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStateOnChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("h2",{attrs:{id:"providing-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-updates"}},[t._v("#")]),t._v(" Providing updates")]),t._v(" "),a("p",[t._v("Objects that want to share info about changes to their state can use a notifier to provide\nupdates. Publishers import and call "),a("code",[t._v("makeNotifierKit()")]),t._v(", which returns two facets, a notifier\nand an updater. The notifier object can be shared to provide the ability to see the object's state\nchanges.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" makeNotifierKit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@agoric/notifier'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" notifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updater "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeNotifierKit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),a("p",[t._v("The updater has three methods, which send a notification with the new state to any waiting\nnotifiers:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("updateState(newState)")]),t._v(" provides a new state, so all active Promises produced by\n"),a("code",[t._v("getUpdateSince()")]),t._v(" are resolved to the next record.")]),t._v(" "),a("li",[a("code",[t._v("finish(finalState)")]),t._v(" provides a new state, and terminates the stream. The record that the\nPromises resolve to doesn't include an updateCount (i.e. it is "),a("code",[t._v("undefined")]),t._v("), which can be used to\ndetect the final state.")]),t._v(" "),a("li",[a("code",[t._v("fail(reason)")]),t._v(" doesn't provide a next state. Instead, it causes the Promise to be rejected with\nthe "),a("code",[t._v("reason")]),t._v(", signalling that the monitored object hit an error condition.")])]),t._v(" "),a("h2",{attrs:{id:"use-of-notifiers-in-zoe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-of-notifiers-in-zoe"}},[t._v("#")]),t._v(" Use of Notifiers in Zoe")]),t._v(" "),a("p",[t._v("Zoe provides updates on the state of seats within a contract. The updates from Zoe indicate changes\nto the allocation of a seat and seats exiting. These are available from "),a("code",[t._v("E(userSeat).getNotifier()")]),t._v("\nand "),a("code",[t._v("zcfSeat.getNotifier()")]),t._v(", which provide long-lived notifier objects associated with a particular\nseat. "),a("code",[t._v("zcfSeat")]),t._v("s are available within contracts while "),a("code",[t._v("userSeat")]),t._v("s are accessible from the REPL,\ndeploy scripts, and other code outside contracts.")]),t._v(" "),a("p",[t._v("Individual contracts can also use notifiers to provide updates giving current prices or other\ncontract-specific details.")]),t._v(" "),a("p",[t._v("Zoe's updates for an offer show the current allocation that will be paid if the contract completes\nwithout further changes.")])])}),[],!1,null,null,null);e.default=n.exports}}]);