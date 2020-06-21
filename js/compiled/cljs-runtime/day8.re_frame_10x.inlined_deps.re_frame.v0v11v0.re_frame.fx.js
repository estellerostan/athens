goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47733 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47734 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47734);

try{try{var seq__47735 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47736 = null;
var count__47737 = (0);
var i__47738 = (0);
while(true){
if((i__47738 < count__47737)){
var vec__47748 = chunk__47736.cljs$core$IIndexed$_nth$arity$2(null,i__47738);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47748,(1),null);
var temp__5733__auto___47844 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47844)){
var effect_fn_47845 = temp__5733__auto___47844;
(effect_fn_47845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47845.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47846 = seq__47735;
var G__47847 = chunk__47736;
var G__47848 = count__47737;
var G__47849 = (i__47738 + (1));
seq__47735 = G__47846;
chunk__47736 = G__47847;
count__47737 = G__47848;
i__47738 = G__47849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47735);
if(temp__5735__auto__){
var seq__47735__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47735__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47735__$1);
var G__47851 = cljs.core.chunk_rest(seq__47735__$1);
var G__47852 = c__4609__auto__;
var G__47853 = cljs.core.count(c__4609__auto__);
var G__47854 = (0);
seq__47735 = G__47851;
chunk__47736 = G__47852;
count__47737 = G__47853;
i__47738 = G__47854;
continue;
} else {
var vec__47751 = cljs.core.first(seq__47735__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47751,(1),null);
var temp__5733__auto___47855 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47855)){
var effect_fn_47856 = temp__5733__auto___47855;
(effect_fn_47856.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47856.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47856.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47857 = cljs.core.next(seq__47735__$1);
var G__47858 = null;
var G__47859 = (0);
var G__47860 = (0);
seq__47735 = G__47857;
chunk__47736 = G__47858;
count__47737 = G__47859;
i__47738 = G__47860;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47477__auto___47861 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47478__auto___47862 = (end__47477__auto___47861 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47478__auto___47862,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47477__auto___47861);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47733);
}} else {
var seq__47754 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47755 = null;
var count__47756 = (0);
var i__47757 = (0);
while(true){
if((i__47757 < count__47756)){
var vec__47766 = chunk__47755.cljs$core$IIndexed$_nth$arity$2(null,i__47757);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(1),null);
var temp__5733__auto___47863 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47863)){
var effect_fn_47864 = temp__5733__auto___47863;
(effect_fn_47864.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47864.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47864.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47865 = seq__47754;
var G__47866 = chunk__47755;
var G__47867 = count__47756;
var G__47868 = (i__47757 + (1));
seq__47754 = G__47865;
chunk__47755 = G__47866;
count__47756 = G__47867;
i__47757 = G__47868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47754);
if(temp__5735__auto__){
var seq__47754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47754__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47754__$1);
var G__47870 = cljs.core.chunk_rest(seq__47754__$1);
var G__47872 = c__4609__auto__;
var G__47873 = cljs.core.count(c__4609__auto__);
var G__47874 = (0);
seq__47754 = G__47870;
chunk__47755 = G__47872;
count__47756 = G__47873;
i__47757 = G__47874;
continue;
} else {
var vec__47769 = cljs.core.first(seq__47754__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47769,(1),null);
var temp__5733__auto___47875 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47875)){
var effect_fn_47876 = temp__5733__auto___47875;
(effect_fn_47876.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47876.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47876.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47877 = cljs.core.next(seq__47754__$1);
var G__47878 = null;
var G__47879 = (0);
var G__47880 = (0);
seq__47754 = G__47877;
chunk__47755 = G__47878;
count__47756 = G__47879;
i__47757 = G__47880;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47779 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47780 = null;
var count__47781 = (0);
var i__47782 = (0);
while(true){
if((i__47782 < count__47781)){
var map__47820 = chunk__47780.cljs$core$IIndexed$_nth$arity$2(null,i__47782);
var map__47820__$1 = (((((!((map__47820 == null))))?(((((map__47820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47820):map__47820);
var effect = map__47820__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47820__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47820__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47779,chunk__47780,count__47781,i__47782,map__47820,map__47820__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47779,chunk__47780,count__47781,i__47782,map__47820,map__47820__$1,effect,ms,dispatch))
,ms);
}


var G__47882 = seq__47779;
var G__47883 = chunk__47780;
var G__47884 = count__47781;
var G__47885 = (i__47782 + (1));
seq__47779 = G__47882;
chunk__47780 = G__47883;
count__47781 = G__47884;
i__47782 = G__47885;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47779);
if(temp__5735__auto__){
var seq__47779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47779__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47779__$1);
var G__47886 = cljs.core.chunk_rest(seq__47779__$1);
var G__47887 = c__4609__auto__;
var G__47888 = cljs.core.count(c__4609__auto__);
var G__47889 = (0);
seq__47779 = G__47886;
chunk__47780 = G__47887;
count__47781 = G__47888;
i__47782 = G__47889;
continue;
} else {
var map__47823 = cljs.core.first(seq__47779__$1);
var map__47823__$1 = (((((!((map__47823 == null))))?(((((map__47823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47823):map__47823);
var effect = map__47823__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47823__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47823__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47779,chunk__47780,count__47781,i__47782,map__47823,map__47823__$1,effect,ms,dispatch,seq__47779__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47779,chunk__47780,count__47781,i__47782,map__47823,map__47823__$1,effect,ms,dispatch,seq__47779__$1,temp__5735__auto__))
,ms);
}


var G__47892 = cljs.core.next(seq__47779__$1);
var G__47893 = null;
var G__47894 = (0);
var G__47895 = (0);
seq__47779 = G__47892;
chunk__47780 = G__47893;
count__47781 = G__47894;
i__47782 = G__47895;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47825 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47826 = null;
var count__47827 = (0);
var i__47828 = (0);
while(true){
if((i__47828 < count__47827)){
var event = chunk__47826.cljs$core$IIndexed$_nth$arity$2(null,i__47828);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47897 = seq__47825;
var G__47898 = chunk__47826;
var G__47899 = count__47827;
var G__47900 = (i__47828 + (1));
seq__47825 = G__47897;
chunk__47826 = G__47898;
count__47827 = G__47899;
i__47828 = G__47900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47825);
if(temp__5735__auto__){
var seq__47825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47825__$1);
var G__47901 = cljs.core.chunk_rest(seq__47825__$1);
var G__47902 = c__4609__auto__;
var G__47903 = cljs.core.count(c__4609__auto__);
var G__47904 = (0);
seq__47825 = G__47901;
chunk__47826 = G__47902;
count__47827 = G__47903;
i__47828 = G__47904;
continue;
} else {
var event = cljs.core.first(seq__47825__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__47906 = cljs.core.next(seq__47825__$1);
var G__47907 = null;
var G__47908 = (0);
var G__47909 = (0);
seq__47825 = G__47906;
chunk__47826 = G__47907;
count__47827 = G__47908;
i__47828 = G__47909;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47834 = cljs.core.seq(value);
var chunk__47837 = null;
var count__47839 = (0);
var i__47840 = (0);
while(true){
if((i__47840 < count__47839)){
var event = chunk__47837.cljs$core$IIndexed$_nth$arity$2(null,i__47840);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47912 = seq__47834;
var G__47913 = chunk__47837;
var G__47914 = count__47839;
var G__47915 = (i__47840 + (1));
seq__47834 = G__47912;
chunk__47837 = G__47913;
count__47839 = G__47914;
i__47840 = G__47915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47834);
if(temp__5735__auto__){
var seq__47834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47834__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47834__$1);
var G__47916 = cljs.core.chunk_rest(seq__47834__$1);
var G__47917 = c__4609__auto__;
var G__47918 = cljs.core.count(c__4609__auto__);
var G__47919 = (0);
seq__47834 = G__47916;
chunk__47837 = G__47917;
count__47839 = G__47918;
i__47840 = G__47919;
continue;
} else {
var event = cljs.core.first(seq__47834__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47920 = cljs.core.next(seq__47834__$1);
var G__47921 = null;
var G__47922 = (0);
var G__47923 = (0);
seq__47834 = G__47920;
chunk__47837 = G__47921;
count__47839 = G__47922;
i__47840 = G__47923;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
