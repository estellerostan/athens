goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__59563){
var map__59564 = p__59563;
var map__59564__$1 = (((((!((map__59564 == null))))?(((((map__59564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59564):map__59564);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59564__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59564__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59564__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59564__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__59566_59593 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__59567_59594 = null;
var count__59568_59595 = (0);
var i__59569_59596 = (0);
while(true){
if((i__59569_59596 < count__59568_59595)){
var vec__59580_59597 = chunk__59567_59594.cljs$core$IIndexed$_nth$arity$2(null,i__59569_59596);
var k_59598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59580_59597,(0),null);
var cb_59599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59580_59597,(1),null);
try{var G__59584_59600 = cljs.core.deref(re_frame.trace.traces);
(cb_59599.cljs$core$IFn$_invoke$arity$1 ? cb_59599.cljs$core$IFn$_invoke$arity$1(G__59584_59600) : cb_59599.call(null,G__59584_59600));
}catch (e59583){var e_59601 = e59583;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59598,"while storing",cljs.core.deref(re_frame.trace.traces),e_59601], 0));
}

var G__59602 = seq__59566_59593;
var G__59603 = chunk__59567_59594;
var G__59604 = count__59568_59595;
var G__59605 = (i__59569_59596 + (1));
seq__59566_59593 = G__59602;
chunk__59567_59594 = G__59603;
count__59568_59595 = G__59604;
i__59569_59596 = G__59605;
continue;
} else {
var temp__5735__auto___59606 = cljs.core.seq(seq__59566_59593);
if(temp__5735__auto___59606){
var seq__59566_59607__$1 = temp__5735__auto___59606;
if(cljs.core.chunked_seq_QMARK_(seq__59566_59607__$1)){
var c__4609__auto___59608 = cljs.core.chunk_first(seq__59566_59607__$1);
var G__59609 = cljs.core.chunk_rest(seq__59566_59607__$1);
var G__59610 = c__4609__auto___59608;
var G__59611 = cljs.core.count(c__4609__auto___59608);
var G__59612 = (0);
seq__59566_59593 = G__59609;
chunk__59567_59594 = G__59610;
count__59568_59595 = G__59611;
i__59569_59596 = G__59612;
continue;
} else {
var vec__59585_59613 = cljs.core.first(seq__59566_59607__$1);
var k_59614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59585_59613,(0),null);
var cb_59615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59585_59613,(1),null);
try{var G__59589_59616 = cljs.core.deref(re_frame.trace.traces);
(cb_59615.cljs$core$IFn$_invoke$arity$1 ? cb_59615.cljs$core$IFn$_invoke$arity$1(G__59589_59616) : cb_59615.call(null,G__59589_59616));
}catch (e59588){var e_59617 = e59588;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59614,"while storing",cljs.core.deref(re_frame.trace.traces),e_59617], 0));
}

var G__59618 = cljs.core.next(seq__59566_59607__$1);
var G__59619 = null;
var G__59620 = (0);
var G__59621 = (0);
seq__59566_59593 = G__59618;
chunk__59567_59594 = G__59619;
count__59568_59595 = G__59620;
i__59569_59596 = G__59621;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
