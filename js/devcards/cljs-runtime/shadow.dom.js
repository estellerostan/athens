goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47515 = coll;
var G__47516 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47515,G__47516) : shadow.dom.lazy_native_coll_seq.call(null,G__47515,G__47516));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47569 = arguments.length;
switch (G__47569) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47576 = arguments.length;
switch (G__47576) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47594 = arguments.length;
switch (G__47594) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47606 = arguments.length;
switch (G__47606) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47625 = arguments.length;
switch (G__47625) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47626 = document;
var G__47627 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47626,G__47627);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47628 = shadow.dom.dom_node(parent);
var G__47629 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47628,G__47629);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47632 = shadow.dom.dom_node(el);
var G__47633 = cls;
return goog.dom.classlist.add(G__47632,G__47633);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47634 = shadow.dom.dom_node(el);
var G__47635 = cls;
return goog.dom.classlist.remove(G__47634,G__47635);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47638 = arguments.length;
switch (G__47638) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47641 = shadow.dom.dom_node(el);
var G__47642 = cls;
return goog.dom.classlist.toggle(G__47641,G__47642);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47650){if((e47650 instanceof Object)){
var e = e47650;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47650;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47656 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47657 = null;
var count__47658 = (0);
var i__47659 = (0);
while(true){
if((i__47659 < count__47658)){
var el = chunk__47657.cljs$core$IIndexed$_nth$arity$2(null,i__47659);
var handler_48225__$1 = ((function (seq__47656,chunk__47657,count__47658,i__47659,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47656,chunk__47657,count__47658,i__47659,el))
;
var G__47680_48233 = el;
var G__47681_48234 = cljs.core.name(ev);
var G__47682_48235 = handler_48225__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47680_48233,G__47681_48234,G__47682_48235) : shadow.dom.dom_listen.call(null,G__47680_48233,G__47681_48234,G__47682_48235));


var G__48236 = seq__47656;
var G__48237 = chunk__47657;
var G__48238 = count__47658;
var G__48239 = (i__47659 + (1));
seq__47656 = G__48236;
chunk__47657 = G__48237;
count__47658 = G__48238;
i__47659 = G__48239;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47656);
if(temp__5735__auto__){
var seq__47656__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47656__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47656__$1);
var G__48241 = cljs.core.chunk_rest(seq__47656__$1);
var G__48242 = c__4609__auto__;
var G__48243 = cljs.core.count(c__4609__auto__);
var G__48244 = (0);
seq__47656 = G__48241;
chunk__47657 = G__48242;
count__47658 = G__48243;
i__47659 = G__48244;
continue;
} else {
var el = cljs.core.first(seq__47656__$1);
var handler_48246__$1 = ((function (seq__47656,chunk__47657,count__47658,i__47659,el,seq__47656__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47656,chunk__47657,count__47658,i__47659,el,seq__47656__$1,temp__5735__auto__))
;
var G__47685_48247 = el;
var G__47686_48248 = cljs.core.name(ev);
var G__47687_48249 = handler_48246__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47685_48247,G__47686_48248,G__47687_48249) : shadow.dom.dom_listen.call(null,G__47685_48247,G__47686_48248,G__47687_48249));


var G__48250 = cljs.core.next(seq__47656__$1);
var G__48252 = null;
var G__48253 = (0);
var G__48254 = (0);
seq__47656 = G__48250;
chunk__47657 = G__48252;
count__47658 = G__48253;
i__47659 = G__48254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47691 = arguments.length;
switch (G__47691) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47698 = shadow.dom.dom_node(el);
var G__47699 = cljs.core.name(ev);
var G__47700 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47698,G__47699,G__47700) : shadow.dom.dom_listen.call(null,G__47698,G__47699,G__47700));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47701 = shadow.dom.dom_node(el);
var G__47702 = cljs.core.name(ev);
var G__47703 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47701,G__47702,G__47703) : shadow.dom.dom_listen_remove.call(null,G__47701,G__47702,G__47703));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47704 = cljs.core.seq(events);
var chunk__47706 = null;
var count__47707 = (0);
var i__47708 = (0);
while(true){
if((i__47708 < count__47707)){
var vec__47717 = chunk__47706.cljs$core$IIndexed$_nth$arity$2(null,i__47708);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47717,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48273 = seq__47704;
var G__48274 = chunk__47706;
var G__48275 = count__47707;
var G__48276 = (i__47708 + (1));
seq__47704 = G__48273;
chunk__47706 = G__48274;
count__47707 = G__48275;
i__47708 = G__48276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47704);
if(temp__5735__auto__){
var seq__47704__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47704__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47704__$1);
var G__48278 = cljs.core.chunk_rest(seq__47704__$1);
var G__48279 = c__4609__auto__;
var G__48280 = cljs.core.count(c__4609__auto__);
var G__48281 = (0);
seq__47704 = G__48278;
chunk__47706 = G__48279;
count__47707 = G__48280;
i__47708 = G__48281;
continue;
} else {
var vec__47721 = cljs.core.first(seq__47704__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47721,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48282 = cljs.core.next(seq__47704__$1);
var G__48283 = null;
var G__48284 = (0);
var G__48285 = (0);
seq__47704 = G__48282;
chunk__47706 = G__48283;
count__47707 = G__48284;
i__47708 = G__48285;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47726 = cljs.core.seq(styles);
var chunk__47727 = null;
var count__47728 = (0);
var i__47729 = (0);
while(true){
if((i__47729 < count__47728)){
var vec__47748 = chunk__47727.cljs$core$IIndexed$_nth$arity$2(null,i__47729);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(1),null);
var G__47752_48287 = dom;
var G__47753_48288 = cljs.core.name(k);
var G__47754_48289 = (((v == null))?"":v);
goog.style.setStyle(G__47752_48287,G__47753_48288,G__47754_48289);


var G__48297 = seq__47726;
var G__48298 = chunk__47727;
var G__48299 = count__47728;
var G__48300 = (i__47729 + (1));
seq__47726 = G__48297;
chunk__47727 = G__48298;
count__47728 = G__48299;
i__47729 = G__48300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47726);
if(temp__5735__auto__){
var seq__47726__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47726__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47726__$1);
var G__48301 = cljs.core.chunk_rest(seq__47726__$1);
var G__48302 = c__4609__auto__;
var G__48303 = cljs.core.count(c__4609__auto__);
var G__48304 = (0);
seq__47726 = G__48301;
chunk__47727 = G__48302;
count__47728 = G__48303;
i__47729 = G__48304;
continue;
} else {
var vec__47758 = cljs.core.first(seq__47726__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47758,(1),null);
var G__47761_48308 = dom;
var G__47762_48309 = cljs.core.name(k);
var G__47763_48310 = (((v == null))?"":v);
goog.style.setStyle(G__47761_48308,G__47762_48309,G__47763_48310);


var G__48311 = cljs.core.next(seq__47726__$1);
var G__48312 = null;
var G__48313 = (0);
var G__48314 = (0);
seq__47726 = G__48311;
chunk__47727 = G__48312;
count__47728 = G__48313;
i__47729 = G__48314;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47766_48315 = key;
var G__47766_48316__$1 = (((G__47766_48315 instanceof cljs.core.Keyword))?G__47766_48315.fqn:null);
switch (G__47766_48316__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48322 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48322,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48322,"aria-");
}
})())){
el.setAttribute(ks_48322,value);
} else {
(el[ks_48322] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47768 = shadow.dom.dom_node(el);
var G__47769 = cls;
return goog.dom.classlist.contains(G__47768,G__47769);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47770){
var map__47771 = p__47770;
var map__47771__$1 = (((((!((map__47771 == null))))?(((((map__47771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47771):map__47771);
var props = map__47771__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47771__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47773 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47773,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47773,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47773,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47776 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47776,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47776;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47780 = arguments.length;
switch (G__47780) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47786){
var vec__47787 = p__47786;
var seq__47788 = cljs.core.seq(vec__47787);
var first__47789 = cljs.core.first(seq__47788);
var seq__47788__$1 = cljs.core.next(seq__47788);
var nn = first__47789;
var first__47789__$1 = cljs.core.first(seq__47788__$1);
var seq__47788__$2 = cljs.core.next(seq__47788__$1);
var np = first__47789__$1;
var nc = seq__47788__$2;
var node = vec__47787;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47792 = nn;
var G__47793 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47792,G__47793) : create_fn.call(null,G__47792,G__47793));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47794 = nn;
var G__47795 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47794,G__47795) : create_fn.call(null,G__47794,G__47795));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47798 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47798,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47798,(1),null);
var seq__47801_48359 = cljs.core.seq(node_children);
var chunk__47802_48360 = null;
var count__47803_48361 = (0);
var i__47804_48362 = (0);
while(true){
if((i__47804_48362 < count__47803_48361)){
var child_struct_48364 = chunk__47802_48360.cljs$core$IIndexed$_nth$arity$2(null,i__47804_48362);
var children_48366 = shadow.dom.dom_node(child_struct_48364);
if(cljs.core.seq_QMARK_(children_48366)){
var seq__47830_48367 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48366));
var chunk__47832_48368 = null;
var count__47833_48369 = (0);
var i__47834_48370 = (0);
while(true){
if((i__47834_48370 < count__47833_48369)){
var child_48380 = chunk__47832_48368.cljs$core$IIndexed$_nth$arity$2(null,i__47834_48370);
if(cljs.core.truth_(child_48380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48380);


var G__48381 = seq__47830_48367;
var G__48382 = chunk__47832_48368;
var G__48383 = count__47833_48369;
var G__48384 = (i__47834_48370 + (1));
seq__47830_48367 = G__48381;
chunk__47832_48368 = G__48382;
count__47833_48369 = G__48383;
i__47834_48370 = G__48384;
continue;
} else {
var G__48385 = seq__47830_48367;
var G__48386 = chunk__47832_48368;
var G__48387 = count__47833_48369;
var G__48388 = (i__47834_48370 + (1));
seq__47830_48367 = G__48385;
chunk__47832_48368 = G__48386;
count__47833_48369 = G__48387;
i__47834_48370 = G__48388;
continue;
}
} else {
var temp__5735__auto___48393 = cljs.core.seq(seq__47830_48367);
if(temp__5735__auto___48393){
var seq__47830_48394__$1 = temp__5735__auto___48393;
if(cljs.core.chunked_seq_QMARK_(seq__47830_48394__$1)){
var c__4609__auto___48395 = cljs.core.chunk_first(seq__47830_48394__$1);
var G__48396 = cljs.core.chunk_rest(seq__47830_48394__$1);
var G__48397 = c__4609__auto___48395;
var G__48398 = cljs.core.count(c__4609__auto___48395);
var G__48399 = (0);
seq__47830_48367 = G__48396;
chunk__47832_48368 = G__48397;
count__47833_48369 = G__48398;
i__47834_48370 = G__48399;
continue;
} else {
var child_48400 = cljs.core.first(seq__47830_48394__$1);
if(cljs.core.truth_(child_48400)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48400);


var G__48401 = cljs.core.next(seq__47830_48394__$1);
var G__48402 = null;
var G__48403 = (0);
var G__48404 = (0);
seq__47830_48367 = G__48401;
chunk__47832_48368 = G__48402;
count__47833_48369 = G__48403;
i__47834_48370 = G__48404;
continue;
} else {
var G__48405 = cljs.core.next(seq__47830_48394__$1);
var G__48406 = null;
var G__48407 = (0);
var G__48408 = (0);
seq__47830_48367 = G__48405;
chunk__47832_48368 = G__48406;
count__47833_48369 = G__48407;
i__47834_48370 = G__48408;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48366);
}


var G__48409 = seq__47801_48359;
var G__48410 = chunk__47802_48360;
var G__48411 = count__47803_48361;
var G__48412 = (i__47804_48362 + (1));
seq__47801_48359 = G__48409;
chunk__47802_48360 = G__48410;
count__47803_48361 = G__48411;
i__47804_48362 = G__48412;
continue;
} else {
var temp__5735__auto___48413 = cljs.core.seq(seq__47801_48359);
if(temp__5735__auto___48413){
var seq__47801_48418__$1 = temp__5735__auto___48413;
if(cljs.core.chunked_seq_QMARK_(seq__47801_48418__$1)){
var c__4609__auto___48419 = cljs.core.chunk_first(seq__47801_48418__$1);
var G__48420 = cljs.core.chunk_rest(seq__47801_48418__$1);
var G__48421 = c__4609__auto___48419;
var G__48422 = cljs.core.count(c__4609__auto___48419);
var G__48423 = (0);
seq__47801_48359 = G__48420;
chunk__47802_48360 = G__48421;
count__47803_48361 = G__48422;
i__47804_48362 = G__48423;
continue;
} else {
var child_struct_48424 = cljs.core.first(seq__47801_48418__$1);
var children_48425 = shadow.dom.dom_node(child_struct_48424);
if(cljs.core.seq_QMARK_(children_48425)){
var seq__47844_48426 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48425));
var chunk__47846_48427 = null;
var count__47847_48428 = (0);
var i__47848_48429 = (0);
while(true){
if((i__47848_48429 < count__47847_48428)){
var child_48430 = chunk__47846_48427.cljs$core$IIndexed$_nth$arity$2(null,i__47848_48429);
if(cljs.core.truth_(child_48430)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48430);


var G__48431 = seq__47844_48426;
var G__48432 = chunk__47846_48427;
var G__48433 = count__47847_48428;
var G__48434 = (i__47848_48429 + (1));
seq__47844_48426 = G__48431;
chunk__47846_48427 = G__48432;
count__47847_48428 = G__48433;
i__47848_48429 = G__48434;
continue;
} else {
var G__48435 = seq__47844_48426;
var G__48436 = chunk__47846_48427;
var G__48437 = count__47847_48428;
var G__48438 = (i__47848_48429 + (1));
seq__47844_48426 = G__48435;
chunk__47846_48427 = G__48436;
count__47847_48428 = G__48437;
i__47848_48429 = G__48438;
continue;
}
} else {
var temp__5735__auto___48439__$1 = cljs.core.seq(seq__47844_48426);
if(temp__5735__auto___48439__$1){
var seq__47844_48440__$1 = temp__5735__auto___48439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47844_48440__$1)){
var c__4609__auto___48441 = cljs.core.chunk_first(seq__47844_48440__$1);
var G__48442 = cljs.core.chunk_rest(seq__47844_48440__$1);
var G__48443 = c__4609__auto___48441;
var G__48444 = cljs.core.count(c__4609__auto___48441);
var G__48445 = (0);
seq__47844_48426 = G__48442;
chunk__47846_48427 = G__48443;
count__47847_48428 = G__48444;
i__47848_48429 = G__48445;
continue;
} else {
var child_48446 = cljs.core.first(seq__47844_48440__$1);
if(cljs.core.truth_(child_48446)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48446);


var G__48447 = cljs.core.next(seq__47844_48440__$1);
var G__48448 = null;
var G__48449 = (0);
var G__48450 = (0);
seq__47844_48426 = G__48447;
chunk__47846_48427 = G__48448;
count__47847_48428 = G__48449;
i__47848_48429 = G__48450;
continue;
} else {
var G__48454 = cljs.core.next(seq__47844_48440__$1);
var G__48455 = null;
var G__48456 = (0);
var G__48457 = (0);
seq__47844_48426 = G__48454;
chunk__47846_48427 = G__48455;
count__47847_48428 = G__48456;
i__47848_48429 = G__48457;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48425);
}


var G__48458 = cljs.core.next(seq__47801_48418__$1);
var G__48459 = null;
var G__48460 = (0);
var G__48461 = (0);
seq__47801_48359 = G__48458;
chunk__47802_48360 = G__48459;
count__47803_48361 = G__48460;
i__47804_48362 = G__48461;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__47866 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47866);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47871 = cljs.core.seq(node);
var chunk__47872 = null;
var count__47873 = (0);
var i__47874 = (0);
while(true){
if((i__47874 < count__47873)){
var n = chunk__47872.cljs$core$IIndexed$_nth$arity$2(null,i__47874);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48473 = seq__47871;
var G__48474 = chunk__47872;
var G__48475 = count__47873;
var G__48476 = (i__47874 + (1));
seq__47871 = G__48473;
chunk__47872 = G__48474;
count__47873 = G__48475;
i__47874 = G__48476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47871);
if(temp__5735__auto__){
var seq__47871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47871__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47871__$1);
var G__48480 = cljs.core.chunk_rest(seq__47871__$1);
var G__48481 = c__4609__auto__;
var G__48482 = cljs.core.count(c__4609__auto__);
var G__48483 = (0);
seq__47871 = G__48480;
chunk__47872 = G__48481;
count__47873 = G__48482;
i__47874 = G__48483;
continue;
} else {
var n = cljs.core.first(seq__47871__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48484 = cljs.core.next(seq__47871__$1);
var G__48485 = null;
var G__48486 = (0);
var G__48487 = (0);
seq__47871 = G__48484;
chunk__47872 = G__48485;
count__47873 = G__48486;
i__47874 = G__48487;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__47880 = shadow.dom.dom_node(new$);
var G__47881 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47880,G__47881);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47885 = arguments.length;
switch (G__47885) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47887 = arguments.length;
switch (G__47887) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47889 = arguments.length;
switch (G__47889) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48528 = arguments.length;
var i__4790__auto___48529 = (0);
while(true){
if((i__4790__auto___48529 < len__4789__auto___48528)){
args__4795__auto__.push((arguments[i__4790__auto___48529]));

var G__48530 = (i__4790__auto___48529 + (1));
i__4790__auto___48529 = G__48530;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47897_48531 = cljs.core.seq(nodes);
var chunk__47898_48532 = null;
var count__47899_48533 = (0);
var i__47900_48534 = (0);
while(true){
if((i__47900_48534 < count__47899_48533)){
var node_48535 = chunk__47898_48532.cljs$core$IIndexed$_nth$arity$2(null,i__47900_48534);
fragment.appendChild(shadow.dom._to_dom(node_48535));


var G__48536 = seq__47897_48531;
var G__48537 = chunk__47898_48532;
var G__48538 = count__47899_48533;
var G__48539 = (i__47900_48534 + (1));
seq__47897_48531 = G__48536;
chunk__47898_48532 = G__48537;
count__47899_48533 = G__48538;
i__47900_48534 = G__48539;
continue;
} else {
var temp__5735__auto___48540 = cljs.core.seq(seq__47897_48531);
if(temp__5735__auto___48540){
var seq__47897_48541__$1 = temp__5735__auto___48540;
if(cljs.core.chunked_seq_QMARK_(seq__47897_48541__$1)){
var c__4609__auto___48542 = cljs.core.chunk_first(seq__47897_48541__$1);
var G__48543 = cljs.core.chunk_rest(seq__47897_48541__$1);
var G__48544 = c__4609__auto___48542;
var G__48545 = cljs.core.count(c__4609__auto___48542);
var G__48546 = (0);
seq__47897_48531 = G__48543;
chunk__47898_48532 = G__48544;
count__47899_48533 = G__48545;
i__47900_48534 = G__48546;
continue;
} else {
var node_48547 = cljs.core.first(seq__47897_48541__$1);
fragment.appendChild(shadow.dom._to_dom(node_48547));


var G__48548 = cljs.core.next(seq__47897_48541__$1);
var G__48549 = null;
var G__48550 = (0);
var G__48551 = (0);
seq__47897_48531 = G__48548;
chunk__47898_48532 = G__48549;
count__47899_48533 = G__48550;
i__47900_48534 = G__48551;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47896){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47896));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47901_48552 = cljs.core.seq(scripts);
var chunk__47902_48553 = null;
var count__47903_48554 = (0);
var i__47904_48555 = (0);
while(true){
if((i__47904_48555 < count__47903_48554)){
var vec__47914_48556 = chunk__47902_48553.cljs$core$IIndexed$_nth$arity$2(null,i__47904_48555);
var script_tag_48557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914_48556,(0),null);
var script_body_48558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914_48556,(1),null);
eval(script_body_48558);


var G__48559 = seq__47901_48552;
var G__48560 = chunk__47902_48553;
var G__48561 = count__47903_48554;
var G__48562 = (i__47904_48555 + (1));
seq__47901_48552 = G__48559;
chunk__47902_48553 = G__48560;
count__47903_48554 = G__48561;
i__47904_48555 = G__48562;
continue;
} else {
var temp__5735__auto___48563 = cljs.core.seq(seq__47901_48552);
if(temp__5735__auto___48563){
var seq__47901_48564__$1 = temp__5735__auto___48563;
if(cljs.core.chunked_seq_QMARK_(seq__47901_48564__$1)){
var c__4609__auto___48565 = cljs.core.chunk_first(seq__47901_48564__$1);
var G__48566 = cljs.core.chunk_rest(seq__47901_48564__$1);
var G__48567 = c__4609__auto___48565;
var G__48568 = cljs.core.count(c__4609__auto___48565);
var G__48569 = (0);
seq__47901_48552 = G__48566;
chunk__47902_48553 = G__48567;
count__47903_48554 = G__48568;
i__47904_48555 = G__48569;
continue;
} else {
var vec__47919_48570 = cljs.core.first(seq__47901_48564__$1);
var script_tag_48571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919_48570,(0),null);
var script_body_48572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919_48570,(1),null);
eval(script_body_48572);


var G__48573 = cljs.core.next(seq__47901_48564__$1);
var G__48574 = null;
var G__48575 = (0);
var G__48576 = (0);
seq__47901_48552 = G__48573;
chunk__47902_48553 = G__48574;
count__47903_48554 = G__48575;
i__47904_48555 = G__48576;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47923){
var vec__47924 = p__47923;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__47934 = shadow.dom.dom_node(el);
var G__47935 = cls;
return goog.dom.getAncestorByClass(G__47934,G__47935);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47939 = arguments.length;
switch (G__47939) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__47944 = shadow.dom.dom_node(el);
var G__47945 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__47944,G__47945);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__47948 = shadow.dom.dom_node(el);
var G__47949 = cljs.core.name(tag);
var G__47950 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__47948,G__47949,G__47950);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__47952 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__47952);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__47956 = shadow.dom.dom_node(dom);
var G__47957 = value;
return goog.dom.forms.setValue(G__47956,G__47957);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47967 = cljs.core.seq(style_keys);
var chunk__47968 = null;
var count__47969 = (0);
var i__47970 = (0);
while(true){
if((i__47970 < count__47969)){
var it = chunk__47968.cljs$core$IIndexed$_nth$arity$2(null,i__47970);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48581 = seq__47967;
var G__48582 = chunk__47968;
var G__48583 = count__47969;
var G__48584 = (i__47970 + (1));
seq__47967 = G__48581;
chunk__47968 = G__48582;
count__47969 = G__48583;
i__47970 = G__48584;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47967);
if(temp__5735__auto__){
var seq__47967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47967__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47967__$1);
var G__48585 = cljs.core.chunk_rest(seq__47967__$1);
var G__48586 = c__4609__auto__;
var G__48587 = cljs.core.count(c__4609__auto__);
var G__48588 = (0);
seq__47967 = G__48585;
chunk__47968 = G__48586;
count__47969 = G__48587;
i__47970 = G__48588;
continue;
} else {
var it = cljs.core.first(seq__47967__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48589 = cljs.core.next(seq__47967__$1);
var G__48590 = null;
var G__48591 = (0);
var G__48592 = (0);
seq__47967 = G__48589;
chunk__47968 = G__48590;
count__47969 = G__48591;
i__47970 = G__48592;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k47980,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__47985 = k47980;
var G__47985__$1 = (((G__47985 instanceof cljs.core.Keyword))?G__47985.fqn:null);
switch (G__47985__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47980,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__47989){
var vec__47990 = p__47989;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47990,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47990,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47979){
var self__ = this;
var G__47979__$1 = this;
return (new cljs.core.RecordIter((0),G__47979__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__47996 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__47996(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47981,other47982){
var self__ = this;
var this47981__$1 = this;
return (((!((other47982 == null)))) && ((this47981__$1.constructor === other47982.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47981__$1.x,other47982.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47981__$1.y,other47982.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47981__$1.__extmap,other47982.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__47979){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__47998 = cljs.core.keyword_identical_QMARK_;
var expr__47999 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48001 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48002 = expr__47999;
return (pred__47998.cljs$core$IFn$_invoke$arity$2 ? pred__47998.cljs$core$IFn$_invoke$arity$2(G__48001,G__48002) : pred__47998.call(null,G__48001,G__48002));
})())){
return (new shadow.dom.Coordinate(G__47979,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48003 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48004 = expr__47999;
return (pred__47998.cljs$core$IFn$_invoke$arity$2 ? pred__47998.cljs$core$IFn$_invoke$arity$2(G__48003,G__48004) : pred__47998.call(null,G__48003,G__48004));
})())){
return (new shadow.dom.Coordinate(self__.x,G__47979,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__47979),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__47979){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47979,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47983){
var extmap__4478__auto__ = (function (){var G__48006 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47983,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48006);
} else {
return G__48006;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47983),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47983),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48007 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48007);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48008 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48008);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48009 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48009);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48012,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48020 = k48012;
var G__48020__$1 = (((G__48020 instanceof cljs.core.Keyword))?G__48020.fqn:null);
switch (G__48020__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48012,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48024){
var vec__48026 = p__48024;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48026,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48011){
var self__ = this;
var G__48011__$1 = this;
return (new cljs.core.RecordIter((0),G__48011__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48037 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48037(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48013,other48014){
var self__ = this;
var this48013__$1 = this;
return (((!((other48014 == null)))) && ((this48013__$1.constructor === other48014.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48013__$1.w,other48014.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48013__$1.h,other48014.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48013__$1.__extmap,other48014.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48011){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48044 = cljs.core.keyword_identical_QMARK_;
var expr__48045 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48047 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48048 = expr__48045;
return (pred__48044.cljs$core$IFn$_invoke$arity$2 ? pred__48044.cljs$core$IFn$_invoke$arity$2(G__48047,G__48048) : pred__48044.call(null,G__48047,G__48048));
})())){
return (new shadow.dom.Size(G__48011,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48050 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48051 = expr__48045;
return (pred__48044.cljs$core$IFn$_invoke$arity$2 ? pred__48044.cljs$core$IFn$_invoke$arity$2(G__48050,G__48051) : pred__48044.call(null,G__48050,G__48051));
})())){
return (new shadow.dom.Size(self__.w,G__48011,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48011),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48011){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48011,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48016){
var extmap__4478__auto__ = (function (){var G__48056 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48016,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48016)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48056);
} else {
return G__48056;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48016),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48016),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48059 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48059);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48605 = (i + (1));
var G__48606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48605;
ret = G__48606;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48068){
var vec__48069 = p__48068;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48069,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48075 = arguments.length;
switch (G__48075) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48084_48608 = new_node;
var G__48085_48609 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48084_48608,G__48085_48609);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48087_48610 = new_node;
var G__48088_48611 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48087_48610,G__48088_48611);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48612 = ps;
var G__48613 = (i + (1));
el__$1 = G__48612;
i = G__48613;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48091 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48091);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48095 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48095);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48097 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48097);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48100 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48103_48622 = cljs.core.seq(props);
var chunk__48104_48623 = null;
var count__48105_48624 = (0);
var i__48106_48625 = (0);
while(true){
if((i__48106_48625 < count__48105_48624)){
var vec__48117_48627 = chunk__48104_48623.cljs$core$IIndexed$_nth$arity$2(null,i__48106_48625);
var k_48628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117_48627,(0),null);
var v_48629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48117_48627,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48628);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48628),v_48629);


var G__48631 = seq__48103_48622;
var G__48632 = chunk__48104_48623;
var G__48633 = count__48105_48624;
var G__48634 = (i__48106_48625 + (1));
seq__48103_48622 = G__48631;
chunk__48104_48623 = G__48632;
count__48105_48624 = G__48633;
i__48106_48625 = G__48634;
continue;
} else {
var temp__5735__auto___48635 = cljs.core.seq(seq__48103_48622);
if(temp__5735__auto___48635){
var seq__48103_48636__$1 = temp__5735__auto___48635;
if(cljs.core.chunked_seq_QMARK_(seq__48103_48636__$1)){
var c__4609__auto___48637 = cljs.core.chunk_first(seq__48103_48636__$1);
var G__48638 = cljs.core.chunk_rest(seq__48103_48636__$1);
var G__48639 = c__4609__auto___48637;
var G__48640 = cljs.core.count(c__4609__auto___48637);
var G__48641 = (0);
seq__48103_48622 = G__48638;
chunk__48104_48623 = G__48639;
count__48105_48624 = G__48640;
i__48106_48625 = G__48641;
continue;
} else {
var vec__48121_48643 = cljs.core.first(seq__48103_48636__$1);
var k_48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48121_48643,(0),null);
var v_48645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48121_48643,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48644);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48644),v_48645);


var G__48647 = cljs.core.next(seq__48103_48636__$1);
var G__48648 = null;
var G__48649 = (0);
var G__48650 = (0);
seq__48103_48622 = G__48647;
chunk__48104_48623 = G__48648;
count__48105_48624 = G__48649;
i__48106_48625 = G__48650;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48130 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48130,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48130,(1),null);
var seq__48133_48655 = cljs.core.seq(node_children);
var chunk__48135_48656 = null;
var count__48136_48657 = (0);
var i__48137_48658 = (0);
while(true){
if((i__48137_48658 < count__48136_48657)){
var child_struct_48659 = chunk__48135_48656.cljs$core$IIndexed$_nth$arity$2(null,i__48137_48658);
if((!((child_struct_48659 == null)))){
if(typeof child_struct_48659 === 'string'){
var text_48660 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48660),child_struct_48659].join(''));
} else {
var children_48661 = shadow.dom.svg_node(child_struct_48659);
if(cljs.core.seq_QMARK_(children_48661)){
var seq__48159_48662 = cljs.core.seq(children_48661);
var chunk__48161_48663 = null;
var count__48162_48664 = (0);
var i__48163_48665 = (0);
while(true){
if((i__48163_48665 < count__48162_48664)){
var child_48666 = chunk__48161_48663.cljs$core$IIndexed$_nth$arity$2(null,i__48163_48665);
if(cljs.core.truth_(child_48666)){
node.appendChild(child_48666);


var G__48667 = seq__48159_48662;
var G__48668 = chunk__48161_48663;
var G__48669 = count__48162_48664;
var G__48670 = (i__48163_48665 + (1));
seq__48159_48662 = G__48667;
chunk__48161_48663 = G__48668;
count__48162_48664 = G__48669;
i__48163_48665 = G__48670;
continue;
} else {
var G__48671 = seq__48159_48662;
var G__48672 = chunk__48161_48663;
var G__48673 = count__48162_48664;
var G__48674 = (i__48163_48665 + (1));
seq__48159_48662 = G__48671;
chunk__48161_48663 = G__48672;
count__48162_48664 = G__48673;
i__48163_48665 = G__48674;
continue;
}
} else {
var temp__5735__auto___48676 = cljs.core.seq(seq__48159_48662);
if(temp__5735__auto___48676){
var seq__48159_48677__$1 = temp__5735__auto___48676;
if(cljs.core.chunked_seq_QMARK_(seq__48159_48677__$1)){
var c__4609__auto___48679 = cljs.core.chunk_first(seq__48159_48677__$1);
var G__48680 = cljs.core.chunk_rest(seq__48159_48677__$1);
var G__48681 = c__4609__auto___48679;
var G__48682 = cljs.core.count(c__4609__auto___48679);
var G__48683 = (0);
seq__48159_48662 = G__48680;
chunk__48161_48663 = G__48681;
count__48162_48664 = G__48682;
i__48163_48665 = G__48683;
continue;
} else {
var child_48684 = cljs.core.first(seq__48159_48677__$1);
if(cljs.core.truth_(child_48684)){
node.appendChild(child_48684);


var G__48685 = cljs.core.next(seq__48159_48677__$1);
var G__48686 = null;
var G__48687 = (0);
var G__48688 = (0);
seq__48159_48662 = G__48685;
chunk__48161_48663 = G__48686;
count__48162_48664 = G__48687;
i__48163_48665 = G__48688;
continue;
} else {
var G__48689 = cljs.core.next(seq__48159_48677__$1);
var G__48690 = null;
var G__48691 = (0);
var G__48692 = (0);
seq__48159_48662 = G__48689;
chunk__48161_48663 = G__48690;
count__48162_48664 = G__48691;
i__48163_48665 = G__48692;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48661);
}
}


var G__48693 = seq__48133_48655;
var G__48694 = chunk__48135_48656;
var G__48695 = count__48136_48657;
var G__48696 = (i__48137_48658 + (1));
seq__48133_48655 = G__48693;
chunk__48135_48656 = G__48694;
count__48136_48657 = G__48695;
i__48137_48658 = G__48696;
continue;
} else {
var G__48697 = seq__48133_48655;
var G__48698 = chunk__48135_48656;
var G__48699 = count__48136_48657;
var G__48700 = (i__48137_48658 + (1));
seq__48133_48655 = G__48697;
chunk__48135_48656 = G__48698;
count__48136_48657 = G__48699;
i__48137_48658 = G__48700;
continue;
}
} else {
var temp__5735__auto___48701 = cljs.core.seq(seq__48133_48655);
if(temp__5735__auto___48701){
var seq__48133_48702__$1 = temp__5735__auto___48701;
if(cljs.core.chunked_seq_QMARK_(seq__48133_48702__$1)){
var c__4609__auto___48703 = cljs.core.chunk_first(seq__48133_48702__$1);
var G__48704 = cljs.core.chunk_rest(seq__48133_48702__$1);
var G__48705 = c__4609__auto___48703;
var G__48706 = cljs.core.count(c__4609__auto___48703);
var G__48707 = (0);
seq__48133_48655 = G__48704;
chunk__48135_48656 = G__48705;
count__48136_48657 = G__48706;
i__48137_48658 = G__48707;
continue;
} else {
var child_struct_48711 = cljs.core.first(seq__48133_48702__$1);
if((!((child_struct_48711 == null)))){
if(typeof child_struct_48711 === 'string'){
var text_48712 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48712),child_struct_48711].join(''));
} else {
var children_48713 = shadow.dom.svg_node(child_struct_48711);
if(cljs.core.seq_QMARK_(children_48713)){
var seq__48165_48714 = cljs.core.seq(children_48713);
var chunk__48167_48715 = null;
var count__48168_48716 = (0);
var i__48169_48717 = (0);
while(true){
if((i__48169_48717 < count__48168_48716)){
var child_48721 = chunk__48167_48715.cljs$core$IIndexed$_nth$arity$2(null,i__48169_48717);
if(cljs.core.truth_(child_48721)){
node.appendChild(child_48721);


var G__48722 = seq__48165_48714;
var G__48723 = chunk__48167_48715;
var G__48724 = count__48168_48716;
var G__48725 = (i__48169_48717 + (1));
seq__48165_48714 = G__48722;
chunk__48167_48715 = G__48723;
count__48168_48716 = G__48724;
i__48169_48717 = G__48725;
continue;
} else {
var G__48726 = seq__48165_48714;
var G__48727 = chunk__48167_48715;
var G__48728 = count__48168_48716;
var G__48729 = (i__48169_48717 + (1));
seq__48165_48714 = G__48726;
chunk__48167_48715 = G__48727;
count__48168_48716 = G__48728;
i__48169_48717 = G__48729;
continue;
}
} else {
var temp__5735__auto___48730__$1 = cljs.core.seq(seq__48165_48714);
if(temp__5735__auto___48730__$1){
var seq__48165_48731__$1 = temp__5735__auto___48730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48165_48731__$1)){
var c__4609__auto___48732 = cljs.core.chunk_first(seq__48165_48731__$1);
var G__48733 = cljs.core.chunk_rest(seq__48165_48731__$1);
var G__48734 = c__4609__auto___48732;
var G__48735 = cljs.core.count(c__4609__auto___48732);
var G__48736 = (0);
seq__48165_48714 = G__48733;
chunk__48167_48715 = G__48734;
count__48168_48716 = G__48735;
i__48169_48717 = G__48736;
continue;
} else {
var child_48737 = cljs.core.first(seq__48165_48731__$1);
if(cljs.core.truth_(child_48737)){
node.appendChild(child_48737);


var G__48738 = cljs.core.next(seq__48165_48731__$1);
var G__48739 = null;
var G__48740 = (0);
var G__48741 = (0);
seq__48165_48714 = G__48738;
chunk__48167_48715 = G__48739;
count__48168_48716 = G__48740;
i__48169_48717 = G__48741;
continue;
} else {
var G__48742 = cljs.core.next(seq__48165_48731__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__48165_48714 = G__48742;
chunk__48167_48715 = G__48743;
count__48168_48716 = G__48744;
i__48169_48717 = G__48745;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48713);
}
}


var G__48746 = cljs.core.next(seq__48133_48702__$1);
var G__48747 = null;
var G__48748 = (0);
var G__48749 = (0);
seq__48133_48655 = G__48746;
chunk__48135_48656 = G__48747;
count__48136_48657 = G__48748;
i__48137_48658 = G__48749;
continue;
} else {
var G__48750 = cljs.core.next(seq__48133_48702__$1);
var G__48751 = null;
var G__48752 = (0);
var G__48753 = (0);
seq__48133_48655 = G__48750;
chunk__48135_48656 = G__48751;
count__48136_48657 = G__48752;
i__48137_48658 = G__48753;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48174_48754 = shadow.dom._to_svg;
var G__48175_48755 = "string";
var G__48176_48756 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48174_48754,G__48175_48755,G__48176_48756);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48180_48757 = shadow.dom._to_svg;
var G__48181_48758 = "null";
var G__48182_48759 = (function (_){
return null;
});
goog.object.set(G__48180_48757,G__48181_48758,G__48182_48759);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48760 = arguments.length;
var i__4790__auto___48761 = (0);
while(true){
if((i__4790__auto___48761 < len__4789__auto___48760)){
args__4795__auto__.push((arguments[i__4790__auto___48761]));

var G__48767 = (i__4790__auto___48761 + (1));
i__4790__auto___48761 = G__48767;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48184){
var G__48185 = cljs.core.first(seq48184);
var seq48184__$1 = cljs.core.next(seq48184);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48185,seq48184__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48189 = arguments.length;
switch (G__48189) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48190_48778 = shadow.dom.dom_node(el);
var G__48191_48779 = cljs.core.name(event);
var G__48192_48780 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48190_48778,G__48191_48779,G__48192_48780) : shadow.dom.dom_listen.call(null,G__48190_48778,G__48191_48779,G__48192_48780));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__45937__auto___48781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45938__auto__ = (function (){var switch__45837__auto__ = (function (state_48197){
var state_val_48198 = (state_48197[(1)]);
if((state_val_48198 === (1))){
var state_48197__$1 = state_48197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48197__$1,(2),once_or_cleanup);
} else {
if((state_val_48198 === (2))){
var inst_48194 = (state_48197[(2)]);
var inst_48195 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48197__$1 = (function (){var statearr_48199 = state_48197;
(statearr_48199[(7)] = inst_48194);

return statearr_48199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48197__$1,inst_48195);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45838__auto__ = null;
var shadow$dom$state_machine__45838__auto____0 = (function (){
var statearr_48200 = [null,null,null,null,null,null,null,null];
(statearr_48200[(0)] = shadow$dom$state_machine__45838__auto__);

(statearr_48200[(1)] = (1));

return statearr_48200;
});
var shadow$dom$state_machine__45838__auto____1 = (function (state_48197){
while(true){
var ret_value__45839__auto__ = (function (){try{while(true){
var result__45840__auto__ = switch__45837__auto__(state_48197);
if(cljs.core.keyword_identical_QMARK_(result__45840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45840__auto__;
}
break;
}
}catch (e48201){if((e48201 instanceof Object)){
var ex__45841__auto__ = e48201;
var statearr_48202_48789 = state_48197;
(statearr_48202_48789[(5)] = ex__45841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48790 = state_48197;
state_48197 = G__48790;
continue;
} else {
return ret_value__45839__auto__;
}
break;
}
});
shadow$dom$state_machine__45838__auto__ = function(state_48197){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45838__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45838__auto____1.call(this,state_48197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45838__auto____0;
shadow$dom$state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45838__auto____1;
return shadow$dom$state_machine__45838__auto__;
})()
})();
var state__45939__auto__ = (function (){var statearr_48203 = (f__45938__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45938__auto__.cljs$core$IFn$_invoke$arity$0() : f__45938__auto__.call(null));
(statearr_48203[(6)] = c__45937__auto___48781);

return statearr_48203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45939__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
