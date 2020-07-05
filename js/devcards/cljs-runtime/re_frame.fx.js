goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46759 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46760 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46760);

try{try{var seq__46761 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46762 = null;
var count__46763 = (0);
var i__46764 = (0);
while(true){
if((i__46764 < count__46763)){
var vec__46771 = chunk__46762.cljs$core$IIndexed$_nth$arity$2(null,i__46764);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46771,(1),null);
var temp__5733__auto___46816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46816)){
var effect_fn_46817 = temp__5733__auto___46816;
(effect_fn_46817.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46817.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46817.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46818 = seq__46761;
var G__46819 = chunk__46762;
var G__46820 = count__46763;
var G__46821 = (i__46764 + (1));
seq__46761 = G__46818;
chunk__46762 = G__46819;
count__46763 = G__46820;
i__46764 = G__46821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46761);
if(temp__5735__auto__){
var seq__46761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46761__$1);
var G__46822 = cljs.core.chunk_rest(seq__46761__$1);
var G__46823 = c__4609__auto__;
var G__46824 = cljs.core.count(c__4609__auto__);
var G__46825 = (0);
seq__46761 = G__46822;
chunk__46762 = G__46823;
count__46763 = G__46824;
i__46764 = G__46825;
continue;
} else {
var vec__46774 = cljs.core.first(seq__46761__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46774,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46774,(1),null);
var temp__5733__auto___46826 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46826)){
var effect_fn_46827 = temp__5733__auto___46826;
(effect_fn_46827.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46827.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46827.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46828 = cljs.core.next(seq__46761__$1);
var G__46829 = null;
var G__46830 = (0);
var G__46831 = (0);
seq__46761 = G__46828;
chunk__46762 = G__46829;
count__46763 = G__46830;
i__46764 = G__46831;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45925__auto___46832 = re_frame.interop.now();
var duration__45926__auto___46833 = (end__45925__auto___46832 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45926__auto___46833,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45925__auto___46832);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46759);
}} else {
var seq__46777 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46778 = null;
var count__46779 = (0);
var i__46780 = (0);
while(true){
if((i__46780 < count__46779)){
var vec__46787 = chunk__46778.cljs$core$IIndexed$_nth$arity$2(null,i__46780);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46787,(1),null);
var temp__5733__auto___46834 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46834)){
var effect_fn_46835 = temp__5733__auto___46834;
(effect_fn_46835.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46835.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46835.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46836 = seq__46777;
var G__46837 = chunk__46778;
var G__46838 = count__46779;
var G__46839 = (i__46780 + (1));
seq__46777 = G__46836;
chunk__46778 = G__46837;
count__46779 = G__46838;
i__46780 = G__46839;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46777);
if(temp__5735__auto__){
var seq__46777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46777__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46777__$1);
var G__46840 = cljs.core.chunk_rest(seq__46777__$1);
var G__46841 = c__4609__auto__;
var G__46842 = cljs.core.count(c__4609__auto__);
var G__46843 = (0);
seq__46777 = G__46840;
chunk__46778 = G__46841;
count__46779 = G__46842;
i__46780 = G__46843;
continue;
} else {
var vec__46790 = cljs.core.first(seq__46777__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(1),null);
var temp__5733__auto___46844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46844)){
var effect_fn_46845 = temp__5733__auto___46844;
(effect_fn_46845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46846 = cljs.core.next(seq__46777__$1);
var G__46847 = null;
var G__46848 = (0);
var G__46849 = (0);
seq__46777 = G__46846;
chunk__46778 = G__46847;
count__46779 = G__46848;
i__46780 = G__46849;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46795 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46796 = null;
var count__46797 = (0);
var i__46798 = (0);
while(true){
if((i__46798 < count__46797)){
var map__46803 = chunk__46796.cljs$core$IIndexed$_nth$arity$2(null,i__46798);
var map__46803__$1 = (((((!((map__46803 == null))))?(((((map__46803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46803):map__46803);
var effect = map__46803__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46803__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46803__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46795,chunk__46796,count__46797,i__46798,map__46803,map__46803__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46795,chunk__46796,count__46797,i__46798,map__46803,map__46803__$1,effect,ms,dispatch))
,ms);
}


var G__46850 = seq__46795;
var G__46851 = chunk__46796;
var G__46852 = count__46797;
var G__46853 = (i__46798 + (1));
seq__46795 = G__46850;
chunk__46796 = G__46851;
count__46797 = G__46852;
i__46798 = G__46853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46795);
if(temp__5735__auto__){
var seq__46795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46795__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46795__$1);
var G__46854 = cljs.core.chunk_rest(seq__46795__$1);
var G__46855 = c__4609__auto__;
var G__46856 = cljs.core.count(c__4609__auto__);
var G__46857 = (0);
seq__46795 = G__46854;
chunk__46796 = G__46855;
count__46797 = G__46856;
i__46798 = G__46857;
continue;
} else {
var map__46806 = cljs.core.first(seq__46795__$1);
var map__46806__$1 = (((((!((map__46806 == null))))?(((((map__46806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46806):map__46806);
var effect = map__46806__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46795,chunk__46796,count__46797,i__46798,map__46806,map__46806__$1,effect,ms,dispatch,seq__46795__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46795,chunk__46796,count__46797,i__46798,map__46806,map__46806__$1,effect,ms,dispatch,seq__46795__$1,temp__5735__auto__))
,ms);
}


var G__46858 = cljs.core.next(seq__46795__$1);
var G__46859 = null;
var G__46860 = (0);
var G__46861 = (0);
seq__46795 = G__46858;
chunk__46796 = G__46859;
count__46797 = G__46860;
i__46798 = G__46861;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46808 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46809 = null;
var count__46810 = (0);
var i__46811 = (0);
while(true){
if((i__46811 < count__46810)){
var event = chunk__46809.cljs$core$IIndexed$_nth$arity$2(null,i__46811);
re_frame.router.dispatch(event);


var G__46862 = seq__46808;
var G__46863 = chunk__46809;
var G__46864 = count__46810;
var G__46865 = (i__46811 + (1));
seq__46808 = G__46862;
chunk__46809 = G__46863;
count__46810 = G__46864;
i__46811 = G__46865;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46808);
if(temp__5735__auto__){
var seq__46808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46808__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46808__$1);
var G__46866 = cljs.core.chunk_rest(seq__46808__$1);
var G__46867 = c__4609__auto__;
var G__46868 = cljs.core.count(c__4609__auto__);
var G__46869 = (0);
seq__46808 = G__46866;
chunk__46809 = G__46867;
count__46810 = G__46868;
i__46811 = G__46869;
continue;
} else {
var event = cljs.core.first(seq__46808__$1);
re_frame.router.dispatch(event);


var G__46870 = cljs.core.next(seq__46808__$1);
var G__46871 = null;
var G__46872 = (0);
var G__46873 = (0);
seq__46808 = G__46870;
chunk__46809 = G__46871;
count__46810 = G__46872;
i__46811 = G__46873;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46812 = cljs.core.seq(value);
var chunk__46813 = null;
var count__46814 = (0);
var i__46815 = (0);
while(true){
if((i__46815 < count__46814)){
var event = chunk__46813.cljs$core$IIndexed$_nth$arity$2(null,i__46815);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46874 = seq__46812;
var G__46875 = chunk__46813;
var G__46876 = count__46814;
var G__46877 = (i__46815 + (1));
seq__46812 = G__46874;
chunk__46813 = G__46875;
count__46814 = G__46876;
i__46815 = G__46877;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46812);
if(temp__5735__auto__){
var seq__46812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46812__$1);
var G__46878 = cljs.core.chunk_rest(seq__46812__$1);
var G__46879 = c__4609__auto__;
var G__46880 = cljs.core.count(c__4609__auto__);
var G__46881 = (0);
seq__46812 = G__46878;
chunk__46813 = G__46879;
count__46814 = G__46880;
i__46815 = G__46881;
continue;
} else {
var event = cljs.core.first(seq__46812__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46885 = cljs.core.next(seq__46812__$1);
var G__46886 = null;
var G__46887 = (0);
var G__46888 = (0);
seq__46812 = G__46885;
chunk__46813 = G__46886;
count__46814 = G__46887;
i__46815 = G__46888;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
