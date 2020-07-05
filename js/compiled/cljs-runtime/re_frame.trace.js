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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52413){
var map__52414 = p__52413;
var map__52414__$1 = (((((!((map__52414 == null))))?(((((map__52414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52414):map__52414);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__52416_52453 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52417_52454 = null;
var count__52418_52455 = (0);
var i__52419_52456 = (0);
while(true){
if((i__52419_52456 < count__52418_52455)){
var vec__52430_52460 = chunk__52417_52454.cljs$core$IIndexed$_nth$arity$2(null,i__52419_52456);
var k_52461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_52460,(0),null);
var cb_52462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430_52460,(1),null);
try{var G__52434_52463 = cljs.core.deref(re_frame.trace.traces);
(cb_52462.cljs$core$IFn$_invoke$arity$1 ? cb_52462.cljs$core$IFn$_invoke$arity$1(G__52434_52463) : cb_52462.call(null,G__52434_52463));
}catch (e52433){var e_52464 = e52433;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52461,"while storing",cljs.core.deref(re_frame.trace.traces),e_52464], 0));
}

var G__52468 = seq__52416_52453;
var G__52469 = chunk__52417_52454;
var G__52470 = count__52418_52455;
var G__52471 = (i__52419_52456 + (1));
seq__52416_52453 = G__52468;
chunk__52417_52454 = G__52469;
count__52418_52455 = G__52470;
i__52419_52456 = G__52471;
continue;
} else {
var temp__5735__auto___52472 = cljs.core.seq(seq__52416_52453);
if(temp__5735__auto___52472){
var seq__52416_52473__$1 = temp__5735__auto___52472;
if(cljs.core.chunked_seq_QMARK_(seq__52416_52473__$1)){
var c__4609__auto___52474 = cljs.core.chunk_first(seq__52416_52473__$1);
var G__52475 = cljs.core.chunk_rest(seq__52416_52473__$1);
var G__52476 = c__4609__auto___52474;
var G__52477 = cljs.core.count(c__4609__auto___52474);
var G__52478 = (0);
seq__52416_52453 = G__52475;
chunk__52417_52454 = G__52476;
count__52418_52455 = G__52477;
i__52419_52456 = G__52478;
continue;
} else {
var vec__52435_52479 = cljs.core.first(seq__52416_52473__$1);
var k_52480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435_52479,(0),null);
var cb_52481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52435_52479,(1),null);
try{var G__52439_52482 = cljs.core.deref(re_frame.trace.traces);
(cb_52481.cljs$core$IFn$_invoke$arity$1 ? cb_52481.cljs$core$IFn$_invoke$arity$1(G__52439_52482) : cb_52481.call(null,G__52439_52482));
}catch (e52438){var e_52483 = e52438;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52480,"while storing",cljs.core.deref(re_frame.trace.traces),e_52483], 0));
}

var G__52484 = cljs.core.next(seq__52416_52473__$1);
var G__52485 = null;
var G__52486 = (0);
var G__52487 = (0);
seq__52416_52453 = G__52484;
chunk__52417_52454 = G__52485;
count__52418_52455 = G__52486;
i__52419_52456 = G__52487;
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
