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
return cljs.core.cons((coll[idx]),(function (){var G__57526 = coll;
var G__57527 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57526,G__57527) : shadow.dom.lazy_native_coll_seq.call(null,G__57526,G__57527));
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
var G__57550 = arguments.length;
switch (G__57550) {
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
var G__57555 = arguments.length;
switch (G__57555) {
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
var G__57560 = arguments.length;
switch (G__57560) {
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
var G__57566 = arguments.length;
switch (G__57566) {
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
var G__57579 = arguments.length;
switch (G__57579) {
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
var G__57581 = document;
var G__57582 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57581,G__57582);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57583 = shadow.dom.dom_node(parent);
var G__57584 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57583,G__57584);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57587 = shadow.dom.dom_node(el);
var G__57588 = cls;
return goog.dom.classlist.add(G__57587,G__57588);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57589 = shadow.dom.dom_node(el);
var G__57590 = cls;
return goog.dom.classlist.remove(G__57589,G__57590);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57595 = arguments.length;
switch (G__57595) {
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
var G__57598 = shadow.dom.dom_node(el);
var G__57599 = cls;
return goog.dom.classlist.toggle(G__57598,G__57599);
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
}catch (e57603){if((e57603 instanceof Object)){
var e = e57603;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57603;

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
var seq__57609 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57610 = null;
var count__57611 = (0);
var i__57612 = (0);
while(true){
if((i__57612 < count__57611)){
var el = chunk__57610.cljs$core$IIndexed$_nth$arity$2(null,i__57612);
var handler_58167__$1 = ((function (seq__57609,chunk__57610,count__57611,i__57612,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57609,chunk__57610,count__57611,i__57612,el))
;
var G__57626_58168 = el;
var G__57627_58169 = cljs.core.name(ev);
var G__57628_58170 = handler_58167__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57626_58168,G__57627_58169,G__57628_58170) : shadow.dom.dom_listen.call(null,G__57626_58168,G__57627_58169,G__57628_58170));


var G__58172 = seq__57609;
var G__58173 = chunk__57610;
var G__58174 = count__57611;
var G__58175 = (i__57612 + (1));
seq__57609 = G__58172;
chunk__57610 = G__58173;
count__57611 = G__58174;
i__57612 = G__58175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57609);
if(temp__5735__auto__){
var seq__57609__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57609__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57609__$1);
var G__58178 = cljs.core.chunk_rest(seq__57609__$1);
var G__58179 = c__4609__auto__;
var G__58180 = cljs.core.count(c__4609__auto__);
var G__58181 = (0);
seq__57609 = G__58178;
chunk__57610 = G__58179;
count__57611 = G__58180;
i__57612 = G__58181;
continue;
} else {
var el = cljs.core.first(seq__57609__$1);
var handler_58182__$1 = ((function (seq__57609,chunk__57610,count__57611,i__57612,el,seq__57609__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57609,chunk__57610,count__57611,i__57612,el,seq__57609__$1,temp__5735__auto__))
;
var G__57630_58185 = el;
var G__57631_58186 = cljs.core.name(ev);
var G__57632_58187 = handler_58182__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57630_58185,G__57631_58186,G__57632_58187) : shadow.dom.dom_listen.call(null,G__57630_58185,G__57631_58186,G__57632_58187));


var G__58189 = cljs.core.next(seq__57609__$1);
var G__58190 = null;
var G__58191 = (0);
var G__58192 = (0);
seq__57609 = G__58189;
chunk__57610 = G__58190;
count__57611 = G__58191;
i__57612 = G__58192;
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
var G__57636 = arguments.length;
switch (G__57636) {
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
var G__57638 = shadow.dom.dom_node(el);
var G__57639 = cljs.core.name(ev);
var G__57640 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57638,G__57639,G__57640) : shadow.dom.dom_listen.call(null,G__57638,G__57639,G__57640));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57641 = shadow.dom.dom_node(el);
var G__57642 = cljs.core.name(ev);
var G__57643 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57641,G__57642,G__57643) : shadow.dom.dom_listen_remove.call(null,G__57641,G__57642,G__57643));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57644 = cljs.core.seq(events);
var chunk__57645 = null;
var count__57646 = (0);
var i__57647 = (0);
while(true){
if((i__57647 < count__57646)){
var vec__57656 = chunk__57645.cljs$core$IIndexed$_nth$arity$2(null,i__57647);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58202 = seq__57644;
var G__58203 = chunk__57645;
var G__58204 = count__57646;
var G__58205 = (i__57647 + (1));
seq__57644 = G__58202;
chunk__57645 = G__58203;
count__57646 = G__58204;
i__57647 = G__58205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57644);
if(temp__5735__auto__){
var seq__57644__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57644__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57644__$1);
var G__58207 = cljs.core.chunk_rest(seq__57644__$1);
var G__58208 = c__4609__auto__;
var G__58209 = cljs.core.count(c__4609__auto__);
var G__58210 = (0);
seq__57644 = G__58207;
chunk__57645 = G__58208;
count__57646 = G__58209;
i__57647 = G__58210;
continue;
} else {
var vec__57661 = cljs.core.first(seq__57644__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57661,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58212 = cljs.core.next(seq__57644__$1);
var G__58213 = null;
var G__58214 = (0);
var G__58215 = (0);
seq__57644 = G__58212;
chunk__57645 = G__58213;
count__57646 = G__58214;
i__57647 = G__58215;
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
var seq__57667 = cljs.core.seq(styles);
var chunk__57668 = null;
var count__57669 = (0);
var i__57670 = (0);
while(true){
if((i__57670 < count__57669)){
var vec__57687 = chunk__57668.cljs$core$IIndexed$_nth$arity$2(null,i__57670);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57687,(1),null);
var G__57690_58218 = dom;
var G__57691_58219 = cljs.core.name(k);
var G__57692_58220 = (((v == null))?"":v);
goog.style.setStyle(G__57690_58218,G__57691_58219,G__57692_58220);


var G__58221 = seq__57667;
var G__58222 = chunk__57668;
var G__58223 = count__57669;
var G__58224 = (i__57670 + (1));
seq__57667 = G__58221;
chunk__57668 = G__58222;
count__57669 = G__58223;
i__57670 = G__58224;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57667);
if(temp__5735__auto__){
var seq__57667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57667__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57667__$1);
var G__58226 = cljs.core.chunk_rest(seq__57667__$1);
var G__58227 = c__4609__auto__;
var G__58228 = cljs.core.count(c__4609__auto__);
var G__58229 = (0);
seq__57667 = G__58226;
chunk__57668 = G__58227;
count__57669 = G__58228;
i__57670 = G__58229;
continue;
} else {
var vec__57696 = cljs.core.first(seq__57667__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57696,(1),null);
var G__57699_58230 = dom;
var G__57700_58231 = cljs.core.name(k);
var G__57701_58232 = (((v == null))?"":v);
goog.style.setStyle(G__57699_58230,G__57700_58231,G__57701_58232);


var G__58233 = cljs.core.next(seq__57667__$1);
var G__58234 = null;
var G__58235 = (0);
var G__58236 = (0);
seq__57667 = G__58233;
chunk__57668 = G__58234;
count__57669 = G__58235;
i__57670 = G__58236;
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
var G__57704_58237 = key;
var G__57704_58238__$1 = (((G__57704_58237 instanceof cljs.core.Keyword))?G__57704_58237.fqn:null);
switch (G__57704_58238__$1) {
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
var ks_58241 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58241,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58241,"aria-");
}
})())){
el.setAttribute(ks_58241,value);
} else {
(el[ks_58241] = value);
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
var G__57712 = shadow.dom.dom_node(el);
var G__57713 = cls;
return goog.dom.classlist.contains(G__57712,G__57713);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57719){
var map__57721 = p__57719;
var map__57721__$1 = (((((!((map__57721 == null))))?(((((map__57721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57721):map__57721);
var props = map__57721__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57724 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57724,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57724,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57724,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57727 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57727,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57727;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57729 = arguments.length;
switch (G__57729) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57733){
var vec__57734 = p__57733;
var seq__57735 = cljs.core.seq(vec__57734);
var first__57736 = cljs.core.first(seq__57735);
var seq__57735__$1 = cljs.core.next(seq__57735);
var nn = first__57736;
var first__57736__$1 = cljs.core.first(seq__57735__$1);
var seq__57735__$2 = cljs.core.next(seq__57735__$1);
var np = first__57736__$1;
var nc = seq__57735__$2;
var node = vec__57734;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57738 = nn;
var G__57739 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57738,G__57739) : create_fn.call(null,G__57738,G__57739));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57740 = nn;
var G__57741 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57740,G__57741) : create_fn.call(null,G__57740,G__57741));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57743 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57743,(1),null);
var seq__57747_58253 = cljs.core.seq(node_children);
var chunk__57748_58254 = null;
var count__57749_58255 = (0);
var i__57750_58256 = (0);
while(true){
if((i__57750_58256 < count__57749_58255)){
var child_struct_58257 = chunk__57748_58254.cljs$core$IIndexed$_nth$arity$2(null,i__57750_58256);
var children_58261 = shadow.dom.dom_node(child_struct_58257);
if(cljs.core.seq_QMARK_(children_58261)){
var seq__57776_58262 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58261));
var chunk__57778_58263 = null;
var count__57779_58264 = (0);
var i__57780_58265 = (0);
while(true){
if((i__57780_58265 < count__57779_58264)){
var child_58267 = chunk__57778_58263.cljs$core$IIndexed$_nth$arity$2(null,i__57780_58265);
if(cljs.core.truth_(child_58267)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58267);


var G__58268 = seq__57776_58262;
var G__58269 = chunk__57778_58263;
var G__58270 = count__57779_58264;
var G__58271 = (i__57780_58265 + (1));
seq__57776_58262 = G__58268;
chunk__57778_58263 = G__58269;
count__57779_58264 = G__58270;
i__57780_58265 = G__58271;
continue;
} else {
var G__58272 = seq__57776_58262;
var G__58273 = chunk__57778_58263;
var G__58274 = count__57779_58264;
var G__58275 = (i__57780_58265 + (1));
seq__57776_58262 = G__58272;
chunk__57778_58263 = G__58273;
count__57779_58264 = G__58274;
i__57780_58265 = G__58275;
continue;
}
} else {
var temp__5735__auto___58277 = cljs.core.seq(seq__57776_58262);
if(temp__5735__auto___58277){
var seq__57776_58278__$1 = temp__5735__auto___58277;
if(cljs.core.chunked_seq_QMARK_(seq__57776_58278__$1)){
var c__4609__auto___58280 = cljs.core.chunk_first(seq__57776_58278__$1);
var G__58281 = cljs.core.chunk_rest(seq__57776_58278__$1);
var G__58282 = c__4609__auto___58280;
var G__58283 = cljs.core.count(c__4609__auto___58280);
var G__58284 = (0);
seq__57776_58262 = G__58281;
chunk__57778_58263 = G__58282;
count__57779_58264 = G__58283;
i__57780_58265 = G__58284;
continue;
} else {
var child_58285 = cljs.core.first(seq__57776_58278__$1);
if(cljs.core.truth_(child_58285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58285);


var G__58290 = cljs.core.next(seq__57776_58278__$1);
var G__58291 = null;
var G__58292 = (0);
var G__58293 = (0);
seq__57776_58262 = G__58290;
chunk__57778_58263 = G__58291;
count__57779_58264 = G__58292;
i__57780_58265 = G__58293;
continue;
} else {
var G__58295 = cljs.core.next(seq__57776_58278__$1);
var G__58296 = null;
var G__58297 = (0);
var G__58298 = (0);
seq__57776_58262 = G__58295;
chunk__57778_58263 = G__58296;
count__57779_58264 = G__58297;
i__57780_58265 = G__58298;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58261);
}


var G__58300 = seq__57747_58253;
var G__58301 = chunk__57748_58254;
var G__58302 = count__57749_58255;
var G__58303 = (i__57750_58256 + (1));
seq__57747_58253 = G__58300;
chunk__57748_58254 = G__58301;
count__57749_58255 = G__58302;
i__57750_58256 = G__58303;
continue;
} else {
var temp__5735__auto___58305 = cljs.core.seq(seq__57747_58253);
if(temp__5735__auto___58305){
var seq__57747_58306__$1 = temp__5735__auto___58305;
if(cljs.core.chunked_seq_QMARK_(seq__57747_58306__$1)){
var c__4609__auto___58308 = cljs.core.chunk_first(seq__57747_58306__$1);
var G__58309 = cljs.core.chunk_rest(seq__57747_58306__$1);
var G__58310 = c__4609__auto___58308;
var G__58311 = cljs.core.count(c__4609__auto___58308);
var G__58312 = (0);
seq__57747_58253 = G__58309;
chunk__57748_58254 = G__58310;
count__57749_58255 = G__58311;
i__57750_58256 = G__58312;
continue;
} else {
var child_struct_58313 = cljs.core.first(seq__57747_58306__$1);
var children_58314 = shadow.dom.dom_node(child_struct_58313);
if(cljs.core.seq_QMARK_(children_58314)){
var seq__57782_58315 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58314));
var chunk__57784_58316 = null;
var count__57785_58317 = (0);
var i__57786_58318 = (0);
while(true){
if((i__57786_58318 < count__57785_58317)){
var child_58320 = chunk__57784_58316.cljs$core$IIndexed$_nth$arity$2(null,i__57786_58318);
if(cljs.core.truth_(child_58320)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58320);


var G__58322 = seq__57782_58315;
var G__58323 = chunk__57784_58316;
var G__58324 = count__57785_58317;
var G__58325 = (i__57786_58318 + (1));
seq__57782_58315 = G__58322;
chunk__57784_58316 = G__58323;
count__57785_58317 = G__58324;
i__57786_58318 = G__58325;
continue;
} else {
var G__58326 = seq__57782_58315;
var G__58327 = chunk__57784_58316;
var G__58328 = count__57785_58317;
var G__58329 = (i__57786_58318 + (1));
seq__57782_58315 = G__58326;
chunk__57784_58316 = G__58327;
count__57785_58317 = G__58328;
i__57786_58318 = G__58329;
continue;
}
} else {
var temp__5735__auto___58331__$1 = cljs.core.seq(seq__57782_58315);
if(temp__5735__auto___58331__$1){
var seq__57782_58332__$1 = temp__5735__auto___58331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57782_58332__$1)){
var c__4609__auto___58333 = cljs.core.chunk_first(seq__57782_58332__$1);
var G__58334 = cljs.core.chunk_rest(seq__57782_58332__$1);
var G__58335 = c__4609__auto___58333;
var G__58336 = cljs.core.count(c__4609__auto___58333);
var G__58337 = (0);
seq__57782_58315 = G__58334;
chunk__57784_58316 = G__58335;
count__57785_58317 = G__58336;
i__57786_58318 = G__58337;
continue;
} else {
var child_58339 = cljs.core.first(seq__57782_58332__$1);
if(cljs.core.truth_(child_58339)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58339);


var G__58340 = cljs.core.next(seq__57782_58332__$1);
var G__58341 = null;
var G__58342 = (0);
var G__58343 = (0);
seq__57782_58315 = G__58340;
chunk__57784_58316 = G__58341;
count__57785_58317 = G__58342;
i__57786_58318 = G__58343;
continue;
} else {
var G__58344 = cljs.core.next(seq__57782_58332__$1);
var G__58345 = null;
var G__58346 = (0);
var G__58347 = (0);
seq__57782_58315 = G__58344;
chunk__57784_58316 = G__58345;
count__57785_58317 = G__58346;
i__57786_58318 = G__58347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58314);
}


var G__58348 = cljs.core.next(seq__57747_58306__$1);
var G__58349 = null;
var G__58350 = (0);
var G__58351 = (0);
seq__57747_58253 = G__58348;
chunk__57748_58254 = G__58349;
count__57749_58255 = G__58350;
i__57750_58256 = G__58351;
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
var G__57792 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57792);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57797 = cljs.core.seq(node);
var chunk__57798 = null;
var count__57799 = (0);
var i__57800 = (0);
while(true){
if((i__57800 < count__57799)){
var n = chunk__57798.cljs$core$IIndexed$_nth$arity$2(null,i__57800);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58362 = seq__57797;
var G__58363 = chunk__57798;
var G__58364 = count__57799;
var G__58365 = (i__57800 + (1));
seq__57797 = G__58362;
chunk__57798 = G__58363;
count__57799 = G__58364;
i__57800 = G__58365;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57797);
if(temp__5735__auto__){
var seq__57797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57797__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57797__$1);
var G__58366 = cljs.core.chunk_rest(seq__57797__$1);
var G__58367 = c__4609__auto__;
var G__58368 = cljs.core.count(c__4609__auto__);
var G__58369 = (0);
seq__57797 = G__58366;
chunk__57798 = G__58367;
count__57799 = G__58368;
i__57800 = G__58369;
continue;
} else {
var n = cljs.core.first(seq__57797__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58371 = cljs.core.next(seq__57797__$1);
var G__58372 = null;
var G__58373 = (0);
var G__58374 = (0);
seq__57797 = G__58371;
chunk__57798 = G__58372;
count__57799 = G__58373;
i__57800 = G__58374;
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
var G__57805 = shadow.dom.dom_node(new$);
var G__57806 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57805,G__57806);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57809 = arguments.length;
switch (G__57809) {
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
var G__57813 = arguments.length;
switch (G__57813) {
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
var G__57821 = arguments.length;
switch (G__57821) {
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
var len__4789__auto___58393 = arguments.length;
var i__4790__auto___58394 = (0);
while(true){
if((i__4790__auto___58394 < len__4789__auto___58393)){
args__4795__auto__.push((arguments[i__4790__auto___58394]));

var G__58395 = (i__4790__auto___58394 + (1));
i__4790__auto___58394 = G__58395;
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
var seq__57835_58397 = cljs.core.seq(nodes);
var chunk__57836_58398 = null;
var count__57837_58399 = (0);
var i__57838_58400 = (0);
while(true){
if((i__57838_58400 < count__57837_58399)){
var node_58401 = chunk__57836_58398.cljs$core$IIndexed$_nth$arity$2(null,i__57838_58400);
fragment.appendChild(shadow.dom._to_dom(node_58401));


var G__58402 = seq__57835_58397;
var G__58403 = chunk__57836_58398;
var G__58404 = count__57837_58399;
var G__58405 = (i__57838_58400 + (1));
seq__57835_58397 = G__58402;
chunk__57836_58398 = G__58403;
count__57837_58399 = G__58404;
i__57838_58400 = G__58405;
continue;
} else {
var temp__5735__auto___58407 = cljs.core.seq(seq__57835_58397);
if(temp__5735__auto___58407){
var seq__57835_58408__$1 = temp__5735__auto___58407;
if(cljs.core.chunked_seq_QMARK_(seq__57835_58408__$1)){
var c__4609__auto___58409 = cljs.core.chunk_first(seq__57835_58408__$1);
var G__58410 = cljs.core.chunk_rest(seq__57835_58408__$1);
var G__58411 = c__4609__auto___58409;
var G__58412 = cljs.core.count(c__4609__auto___58409);
var G__58413 = (0);
seq__57835_58397 = G__58410;
chunk__57836_58398 = G__58411;
count__57837_58399 = G__58412;
i__57838_58400 = G__58413;
continue;
} else {
var node_58415 = cljs.core.first(seq__57835_58408__$1);
fragment.appendChild(shadow.dom._to_dom(node_58415));


var G__58416 = cljs.core.next(seq__57835_58408__$1);
var G__58417 = null;
var G__58418 = (0);
var G__58419 = (0);
seq__57835_58397 = G__58416;
chunk__57836_58398 = G__58417;
count__57837_58399 = G__58418;
i__57838_58400 = G__58419;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57830){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57830));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57845_58421 = cljs.core.seq(scripts);
var chunk__57846_58422 = null;
var count__57847_58423 = (0);
var i__57848_58424 = (0);
while(true){
if((i__57848_58424 < count__57847_58423)){
var vec__57858_58427 = chunk__57846_58422.cljs$core$IIndexed$_nth$arity$2(null,i__57848_58424);
var script_tag_58428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57858_58427,(0),null);
var script_body_58429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57858_58427,(1),null);
eval(script_body_58429);


var G__58430 = seq__57845_58421;
var G__58431 = chunk__57846_58422;
var G__58432 = count__57847_58423;
var G__58433 = (i__57848_58424 + (1));
seq__57845_58421 = G__58430;
chunk__57846_58422 = G__58431;
count__57847_58423 = G__58432;
i__57848_58424 = G__58433;
continue;
} else {
var temp__5735__auto___58435 = cljs.core.seq(seq__57845_58421);
if(temp__5735__auto___58435){
var seq__57845_58437__$1 = temp__5735__auto___58435;
if(cljs.core.chunked_seq_QMARK_(seq__57845_58437__$1)){
var c__4609__auto___58438 = cljs.core.chunk_first(seq__57845_58437__$1);
var G__58439 = cljs.core.chunk_rest(seq__57845_58437__$1);
var G__58440 = c__4609__auto___58438;
var G__58441 = cljs.core.count(c__4609__auto___58438);
var G__58442 = (0);
seq__57845_58421 = G__58439;
chunk__57846_58422 = G__58440;
count__57847_58423 = G__58441;
i__57848_58424 = G__58442;
continue;
} else {
var vec__57862_58446 = cljs.core.first(seq__57845_58437__$1);
var script_tag_58447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57862_58446,(0),null);
var script_body_58448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57862_58446,(1),null);
eval(script_body_58448);


var G__58450 = cljs.core.next(seq__57845_58437__$1);
var G__58451 = null;
var G__58452 = (0);
var G__58453 = (0);
seq__57845_58421 = G__58450;
chunk__57846_58422 = G__58451;
count__57847_58423 = G__58452;
i__57848_58424 = G__58453;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__57867){
var vec__57868 = p__57867;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57868,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57868,(1),null);
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
var G__57876 = shadow.dom.dom_node(el);
var G__57877 = cls;
return goog.dom.getAncestorByClass(G__57876,G__57877);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__57881 = arguments.length;
switch (G__57881) {
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
var G__57884 = shadow.dom.dom_node(el);
var G__57885 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__57884,G__57885);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__57887 = shadow.dom.dom_node(el);
var G__57888 = cljs.core.name(tag);
var G__57889 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__57887,G__57888,G__57889);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__57891 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__57891);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__57893 = shadow.dom.dom_node(dom);
var G__57894 = value;
return goog.dom.forms.setValue(G__57893,G__57894);
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
var seq__57897 = cljs.core.seq(style_keys);
var chunk__57898 = null;
var count__57899 = (0);
var i__57900 = (0);
while(true){
if((i__57900 < count__57899)){
var it = chunk__57898.cljs$core$IIndexed$_nth$arity$2(null,i__57900);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58471 = seq__57897;
var G__58472 = chunk__57898;
var G__58473 = count__57899;
var G__58474 = (i__57900 + (1));
seq__57897 = G__58471;
chunk__57898 = G__58472;
count__57899 = G__58473;
i__57900 = G__58474;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57897);
if(temp__5735__auto__){
var seq__57897__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57897__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57897__$1);
var G__58478 = cljs.core.chunk_rest(seq__57897__$1);
var G__58479 = c__4609__auto__;
var G__58480 = cljs.core.count(c__4609__auto__);
var G__58481 = (0);
seq__57897 = G__58478;
chunk__57898 = G__58479;
count__57899 = G__58480;
i__57900 = G__58481;
continue;
} else {
var it = cljs.core.first(seq__57897__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58483 = cljs.core.next(seq__57897__$1);
var G__58484 = null;
var G__58485 = (0);
var G__58486 = (0);
seq__57897 = G__58483;
chunk__57898 = G__58484;
count__57899 = G__58485;
i__57900 = G__58486;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57902,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57906 = k57902;
var G__57906__$1 = (((G__57906 instanceof cljs.core.Keyword))?G__57906.fqn:null);
switch (G__57906__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57902,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57910){
var vec__57911 = p__57910;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57911,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57911,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57901){
var self__ = this;
var G__57901__$1 = this;
return (new cljs.core.RecordIter((0),G__57901__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__57917 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57917(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57903,other57904){
var self__ = this;
var this57903__$1 = this;
return (((!((other57904 == null)))) && ((this57903__$1.constructor === other57904.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57903__$1.x,other57904.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57903__$1.y,other57904.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57903__$1.__extmap,other57904.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57901){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57918 = cljs.core.keyword_identical_QMARK_;
var expr__57919 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57921 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__57922 = expr__57919;
return (pred__57918.cljs$core$IFn$_invoke$arity$2 ? pred__57918.cljs$core$IFn$_invoke$arity$2(G__57921,G__57922) : pred__57918.call(null,G__57921,G__57922));
})())){
return (new shadow.dom.Coordinate(G__57901,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57923 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__57924 = expr__57919;
return (pred__57918.cljs$core$IFn$_invoke$arity$2 ? pred__57918.cljs$core$IFn$_invoke$arity$2(G__57923,G__57924) : pred__57918.call(null,G__57923,G__57924));
})())){
return (new shadow.dom.Coordinate(self__.x,G__57901,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57901),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57901){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__57901,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__57905){
var extmap__4478__auto__ = (function (){var G__57925 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57905,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__57905)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57925);
} else {
return G__57925;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__57905),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__57905),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__57927 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__57927);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__57930 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__57930);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__57932 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__57932);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k57936,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__57946 = k57936;
var G__57946__$1 = (((G__57946 instanceof cljs.core.Keyword))?G__57946.fqn:null);
switch (G__57946__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57936,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__57947){
var vec__57948 = p__57947;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57948,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57948,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57935){
var self__ = this;
var G__57935__$1 = this;
return (new cljs.core.RecordIter((0),G__57935__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__57957 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__57957(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57937,other57938){
var self__ = this;
var this57937__$1 = this;
return (((!((other57938 == null)))) && ((this57937__$1.constructor === other57938.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57937__$1.w,other57938.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57937__$1.h,other57938.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57937__$1.__extmap,other57938.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__57935){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__57963 = cljs.core.keyword_identical_QMARK_;
var expr__57964 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__57967 = new cljs.core.Keyword(null,"w","w",354169001);
var G__57968 = expr__57964;
return (pred__57963.cljs$core$IFn$_invoke$arity$2 ? pred__57963.cljs$core$IFn$_invoke$arity$2(G__57967,G__57968) : pred__57963.call(null,G__57967,G__57968));
})())){
return (new shadow.dom.Size(G__57935,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__57969 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__57970 = expr__57964;
return (pred__57963.cljs$core$IFn$_invoke$arity$2 ? pred__57963.cljs$core$IFn$_invoke$arity$2(G__57969,G__57970) : pred__57963.call(null,G__57969,G__57970));
})())){
return (new shadow.dom.Size(self__.w,G__57935,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__57935),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__57935){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__57935,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__57939){
var extmap__4478__auto__ = (function (){var G__57980 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57939,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__57939)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57980);
} else {
return G__57980;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__57939),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__57939),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__57985 = shadow.dom.dom_node(el);
return goog.style.getSize(G__57985);
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
var G__58550 = (i + (1));
var G__58551 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58550;
ret = G__58551;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57999){
var vec__58000 = p__57999;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58000,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58005 = arguments.length;
switch (G__58005) {
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
var G__58008_58560 = new_node;
var G__58009_58561 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58008_58560,G__58009_58561);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58010_58563 = new_node;
var G__58011_58564 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58010_58563,G__58011_58564);

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
var G__58565 = ps;
var G__58566 = (i + (1));
el__$1 = G__58565;
i = G__58566;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58013 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58013);
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
var G__58014 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58014);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58016 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58016);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58017 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58020_58579 = cljs.core.seq(props);
var chunk__58021_58580 = null;
var count__58022_58581 = (0);
var i__58023_58582 = (0);
while(true){
if((i__58023_58582 < count__58022_58581)){
var vec__58030_58583 = chunk__58021_58580.cljs$core$IIndexed$_nth$arity$2(null,i__58023_58582);
var k_58584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58030_58583,(0),null);
var v_58585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58030_58583,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58584);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58584),v_58585);


var G__58587 = seq__58020_58579;
var G__58588 = chunk__58021_58580;
var G__58589 = count__58022_58581;
var G__58590 = (i__58023_58582 + (1));
seq__58020_58579 = G__58587;
chunk__58021_58580 = G__58588;
count__58022_58581 = G__58589;
i__58023_58582 = G__58590;
continue;
} else {
var temp__5735__auto___58591 = cljs.core.seq(seq__58020_58579);
if(temp__5735__auto___58591){
var seq__58020_58592__$1 = temp__5735__auto___58591;
if(cljs.core.chunked_seq_QMARK_(seq__58020_58592__$1)){
var c__4609__auto___58593 = cljs.core.chunk_first(seq__58020_58592__$1);
var G__58594 = cljs.core.chunk_rest(seq__58020_58592__$1);
var G__58595 = c__4609__auto___58593;
var G__58596 = cljs.core.count(c__4609__auto___58593);
var G__58597 = (0);
seq__58020_58579 = G__58594;
chunk__58021_58580 = G__58595;
count__58022_58581 = G__58596;
i__58023_58582 = G__58597;
continue;
} else {
var vec__58033_58598 = cljs.core.first(seq__58020_58592__$1);
var k_58599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58033_58598,(0),null);
var v_58600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58033_58598,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58599);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58599),v_58600);


var G__58603 = cljs.core.next(seq__58020_58592__$1);
var G__58604 = null;
var G__58605 = (0);
var G__58606 = (0);
seq__58020_58579 = G__58603;
chunk__58021_58580 = G__58604;
count__58022_58581 = G__58605;
i__58023_58582 = G__58606;
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
var vec__58042 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58042,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58042,(1),null);
var seq__58045_58609 = cljs.core.seq(node_children);
var chunk__58047_58610 = null;
var count__58048_58611 = (0);
var i__58049_58612 = (0);
while(true){
if((i__58049_58612 < count__58048_58611)){
var child_struct_58613 = chunk__58047_58610.cljs$core$IIndexed$_nth$arity$2(null,i__58049_58612);
if((!((child_struct_58613 == null)))){
if(typeof child_struct_58613 === 'string'){
var text_58614 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58614),child_struct_58613].join(''));
} else {
var children_58615 = shadow.dom.svg_node(child_struct_58613);
if(cljs.core.seq_QMARK_(children_58615)){
var seq__58077_58616 = cljs.core.seq(children_58615);
var chunk__58079_58617 = null;
var count__58080_58618 = (0);
var i__58081_58619 = (0);
while(true){
if((i__58081_58619 < count__58080_58618)){
var child_58620 = chunk__58079_58617.cljs$core$IIndexed$_nth$arity$2(null,i__58081_58619);
if(cljs.core.truth_(child_58620)){
node.appendChild(child_58620);


var G__58621 = seq__58077_58616;
var G__58622 = chunk__58079_58617;
var G__58623 = count__58080_58618;
var G__58624 = (i__58081_58619 + (1));
seq__58077_58616 = G__58621;
chunk__58079_58617 = G__58622;
count__58080_58618 = G__58623;
i__58081_58619 = G__58624;
continue;
} else {
var G__58625 = seq__58077_58616;
var G__58626 = chunk__58079_58617;
var G__58627 = count__58080_58618;
var G__58628 = (i__58081_58619 + (1));
seq__58077_58616 = G__58625;
chunk__58079_58617 = G__58626;
count__58080_58618 = G__58627;
i__58081_58619 = G__58628;
continue;
}
} else {
var temp__5735__auto___58629 = cljs.core.seq(seq__58077_58616);
if(temp__5735__auto___58629){
var seq__58077_58630__$1 = temp__5735__auto___58629;
if(cljs.core.chunked_seq_QMARK_(seq__58077_58630__$1)){
var c__4609__auto___58631 = cljs.core.chunk_first(seq__58077_58630__$1);
var G__58632 = cljs.core.chunk_rest(seq__58077_58630__$1);
var G__58633 = c__4609__auto___58631;
var G__58634 = cljs.core.count(c__4609__auto___58631);
var G__58635 = (0);
seq__58077_58616 = G__58632;
chunk__58079_58617 = G__58633;
count__58080_58618 = G__58634;
i__58081_58619 = G__58635;
continue;
} else {
var child_58636 = cljs.core.first(seq__58077_58630__$1);
if(cljs.core.truth_(child_58636)){
node.appendChild(child_58636);


var G__58637 = cljs.core.next(seq__58077_58630__$1);
var G__58638 = null;
var G__58639 = (0);
var G__58640 = (0);
seq__58077_58616 = G__58637;
chunk__58079_58617 = G__58638;
count__58080_58618 = G__58639;
i__58081_58619 = G__58640;
continue;
} else {
var G__58641 = cljs.core.next(seq__58077_58630__$1);
var G__58642 = null;
var G__58643 = (0);
var G__58644 = (0);
seq__58077_58616 = G__58641;
chunk__58079_58617 = G__58642;
count__58080_58618 = G__58643;
i__58081_58619 = G__58644;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58615);
}
}


var G__58645 = seq__58045_58609;
var G__58646 = chunk__58047_58610;
var G__58647 = count__58048_58611;
var G__58648 = (i__58049_58612 + (1));
seq__58045_58609 = G__58645;
chunk__58047_58610 = G__58646;
count__58048_58611 = G__58647;
i__58049_58612 = G__58648;
continue;
} else {
var G__58649 = seq__58045_58609;
var G__58650 = chunk__58047_58610;
var G__58651 = count__58048_58611;
var G__58652 = (i__58049_58612 + (1));
seq__58045_58609 = G__58649;
chunk__58047_58610 = G__58650;
count__58048_58611 = G__58651;
i__58049_58612 = G__58652;
continue;
}
} else {
var temp__5735__auto___58653 = cljs.core.seq(seq__58045_58609);
if(temp__5735__auto___58653){
var seq__58045_58654__$1 = temp__5735__auto___58653;
if(cljs.core.chunked_seq_QMARK_(seq__58045_58654__$1)){
var c__4609__auto___58655 = cljs.core.chunk_first(seq__58045_58654__$1);
var G__58656 = cljs.core.chunk_rest(seq__58045_58654__$1);
var G__58657 = c__4609__auto___58655;
var G__58658 = cljs.core.count(c__4609__auto___58655);
var G__58659 = (0);
seq__58045_58609 = G__58656;
chunk__58047_58610 = G__58657;
count__58048_58611 = G__58658;
i__58049_58612 = G__58659;
continue;
} else {
var child_struct_58660 = cljs.core.first(seq__58045_58654__$1);
if((!((child_struct_58660 == null)))){
if(typeof child_struct_58660 === 'string'){
var text_58661 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58661),child_struct_58660].join(''));
} else {
var children_58662 = shadow.dom.svg_node(child_struct_58660);
if(cljs.core.seq_QMARK_(children_58662)){
var seq__58089_58663 = cljs.core.seq(children_58662);
var chunk__58091_58664 = null;
var count__58092_58665 = (0);
var i__58093_58666 = (0);
while(true){
if((i__58093_58666 < count__58092_58665)){
var child_58667 = chunk__58091_58664.cljs$core$IIndexed$_nth$arity$2(null,i__58093_58666);
if(cljs.core.truth_(child_58667)){
node.appendChild(child_58667);


var G__58668 = seq__58089_58663;
var G__58669 = chunk__58091_58664;
var G__58670 = count__58092_58665;
var G__58671 = (i__58093_58666 + (1));
seq__58089_58663 = G__58668;
chunk__58091_58664 = G__58669;
count__58092_58665 = G__58670;
i__58093_58666 = G__58671;
continue;
} else {
var G__58672 = seq__58089_58663;
var G__58673 = chunk__58091_58664;
var G__58674 = count__58092_58665;
var G__58675 = (i__58093_58666 + (1));
seq__58089_58663 = G__58672;
chunk__58091_58664 = G__58673;
count__58092_58665 = G__58674;
i__58093_58666 = G__58675;
continue;
}
} else {
var temp__5735__auto___58676__$1 = cljs.core.seq(seq__58089_58663);
if(temp__5735__auto___58676__$1){
var seq__58089_58677__$1 = temp__5735__auto___58676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58089_58677__$1)){
var c__4609__auto___58678 = cljs.core.chunk_first(seq__58089_58677__$1);
var G__58679 = cljs.core.chunk_rest(seq__58089_58677__$1);
var G__58680 = c__4609__auto___58678;
var G__58681 = cljs.core.count(c__4609__auto___58678);
var G__58682 = (0);
seq__58089_58663 = G__58679;
chunk__58091_58664 = G__58680;
count__58092_58665 = G__58681;
i__58093_58666 = G__58682;
continue;
} else {
var child_58683 = cljs.core.first(seq__58089_58677__$1);
if(cljs.core.truth_(child_58683)){
node.appendChild(child_58683);


var G__58684 = cljs.core.next(seq__58089_58677__$1);
var G__58685 = null;
var G__58686 = (0);
var G__58687 = (0);
seq__58089_58663 = G__58684;
chunk__58091_58664 = G__58685;
count__58092_58665 = G__58686;
i__58093_58666 = G__58687;
continue;
} else {
var G__58688 = cljs.core.next(seq__58089_58677__$1);
var G__58689 = null;
var G__58690 = (0);
var G__58691 = (0);
seq__58089_58663 = G__58688;
chunk__58091_58664 = G__58689;
count__58092_58665 = G__58690;
i__58093_58666 = G__58691;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58662);
}
}


var G__58692 = cljs.core.next(seq__58045_58654__$1);
var G__58693 = null;
var G__58694 = (0);
var G__58695 = (0);
seq__58045_58609 = G__58692;
chunk__58047_58610 = G__58693;
count__58048_58611 = G__58694;
i__58049_58612 = G__58695;
continue;
} else {
var G__58696 = cljs.core.next(seq__58045_58654__$1);
var G__58697 = null;
var G__58698 = (0);
var G__58699 = (0);
seq__58045_58609 = G__58696;
chunk__58047_58610 = G__58697;
count__58048_58611 = G__58698;
i__58049_58612 = G__58699;
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

var G__58101_58704 = shadow.dom._to_svg;
var G__58102_58705 = "string";
var G__58103_58706 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58101_58704,G__58102_58705,G__58103_58706);

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

var G__58105_58709 = shadow.dom._to_svg;
var G__58106_58710 = "null";
var G__58107_58711 = (function (_){
return null;
});
goog.object.set(G__58105_58709,G__58106_58710,G__58107_58711);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58714 = arguments.length;
var i__4790__auto___58715 = (0);
while(true){
if((i__4790__auto___58715 < len__4789__auto___58714)){
args__4795__auto__.push((arguments[i__4790__auto___58715]));

var G__58716 = (i__4790__auto___58715 + (1));
i__4790__auto___58715 = G__58716;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58109){
var G__58110 = cljs.core.first(seq58109);
var seq58109__$1 = cljs.core.next(seq58109);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58110,seq58109__$1);
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
var G__58114 = arguments.length;
switch (G__58114) {
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
var G__58120_58726 = shadow.dom.dom_node(el);
var G__58121_58727 = cljs.core.name(event);
var G__58122_58728 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58120_58726,G__58121_58727,G__58122_58728) : shadow.dom.dom_listen.call(null,G__58120_58726,G__58121_58727,G__58122_58728));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__55886__auto___58729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55887__auto__ = (function (){var switch__55807__auto__ = (function (state_58129){
var state_val_58130 = (state_58129[(1)]);
if((state_val_58130 === (1))){
var state_58129__$1 = state_58129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58129__$1,(2),once_or_cleanup);
} else {
if((state_val_58130 === (2))){
var inst_58126 = (state_58129[(2)]);
var inst_58127 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58129__$1 = (function (){var statearr_58133 = state_58129;
(statearr_58133[(7)] = inst_58126);

return statearr_58133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58129__$1,inst_58127);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55808__auto__ = null;
var shadow$dom$state_machine__55808__auto____0 = (function (){
var statearr_58135 = [null,null,null,null,null,null,null,null];
(statearr_58135[(0)] = shadow$dom$state_machine__55808__auto__);

(statearr_58135[(1)] = (1));

return statearr_58135;
});
var shadow$dom$state_machine__55808__auto____1 = (function (state_58129){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_58129);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e58136){if((e58136 instanceof Object)){
var ex__55811__auto__ = e58136;
var statearr_58137_58730 = state_58129;
(statearr_58137_58730[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58731 = state_58129;
state_58129 = G__58731;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
shadow$dom$state_machine__55808__auto__ = function(state_58129){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55808__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55808__auto____1.call(this,state_58129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55808__auto____0;
shadow$dom$state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55808__auto____1;
return shadow$dom$state_machine__55808__auto__;
})()
})();
var state__55888__auto__ = (function (){var statearr_58139 = (f__55887__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55887__auto__.cljs$core$IFn$_invoke$arity$0() : f__55887__auto__.call(null));
(statearr_58139[(6)] = c__55886__auto___58729);

return statearr_58139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55888__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
