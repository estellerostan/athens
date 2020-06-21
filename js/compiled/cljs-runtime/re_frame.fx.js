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
var _STAR_current_trace_STAR__orig_val__52660 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52661 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52661);

try{try{var seq__52662 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52663 = null;
var count__52664 = (0);
var i__52665 = (0);
while(true){
if((i__52665 < count__52664)){
var vec__52672 = chunk__52663.cljs$core$IIndexed$_nth$arity$2(null,i__52665);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52672,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52672,(1),null);
var temp__5733__auto___52754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52754)){
var effect_fn_52755 = temp__5733__auto___52754;
(effect_fn_52755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52756 = seq__52662;
var G__52757 = chunk__52663;
var G__52758 = count__52664;
var G__52759 = (i__52665 + (1));
seq__52662 = G__52756;
chunk__52663 = G__52757;
count__52664 = G__52758;
i__52665 = G__52759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52662);
if(temp__5735__auto__){
var seq__52662__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52662__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52662__$1);
var G__52760 = cljs.core.chunk_rest(seq__52662__$1);
var G__52761 = c__4609__auto__;
var G__52762 = cljs.core.count(c__4609__auto__);
var G__52763 = (0);
seq__52662 = G__52760;
chunk__52663 = G__52761;
count__52664 = G__52762;
i__52665 = G__52763;
continue;
} else {
var vec__52675 = cljs.core.first(seq__52662__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(1),null);
var temp__5733__auto___52764 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52764)){
var effect_fn_52765 = temp__5733__auto___52764;
(effect_fn_52765.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52765.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52765.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52766 = cljs.core.next(seq__52662__$1);
var G__52767 = null;
var G__52768 = (0);
var G__52769 = (0);
seq__52662 = G__52766;
chunk__52663 = G__52767;
count__52664 = G__52768;
i__52665 = G__52769;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52393__auto___52770 = re_frame.interop.now();
var duration__52394__auto___52771 = (end__52393__auto___52770 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52394__auto___52771,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52393__auto___52770);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52660);
}} else {
var seq__52678 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52679 = null;
var count__52680 = (0);
var i__52681 = (0);
while(true){
if((i__52681 < count__52680)){
var vec__52688 = chunk__52679.cljs$core$IIndexed$_nth$arity$2(null,i__52681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(1),null);
var temp__5733__auto___52780 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52780)){
var effect_fn_52784 = temp__5733__auto___52780;
(effect_fn_52784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52784.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52785 = seq__52678;
var G__52786 = chunk__52679;
var G__52787 = count__52680;
var G__52788 = (i__52681 + (1));
seq__52678 = G__52785;
chunk__52679 = G__52786;
count__52680 = G__52787;
i__52681 = G__52788;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52678);
if(temp__5735__auto__){
var seq__52678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52678__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52678__$1);
var G__52789 = cljs.core.chunk_rest(seq__52678__$1);
var G__52790 = c__4609__auto__;
var G__52791 = cljs.core.count(c__4609__auto__);
var G__52792 = (0);
seq__52678 = G__52789;
chunk__52679 = G__52790;
count__52680 = G__52791;
i__52681 = G__52792;
continue;
} else {
var vec__52692 = cljs.core.first(seq__52678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52692,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52692,(1),null);
var temp__5733__auto___52793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52793)){
var effect_fn_52794 = temp__5733__auto___52793;
(effect_fn_52794.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52794.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52794.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52796 = cljs.core.next(seq__52678__$1);
var G__52797 = null;
var G__52798 = (0);
var G__52799 = (0);
seq__52678 = G__52796;
chunk__52679 = G__52797;
count__52680 = G__52798;
i__52681 = G__52799;
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
var seq__52695 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52696 = null;
var count__52697 = (0);
var i__52698 = (0);
while(true){
if((i__52698 < count__52697)){
var map__52704 = chunk__52696.cljs$core$IIndexed$_nth$arity$2(null,i__52698);
var map__52704__$1 = (((((!((map__52704 == null))))?(((((map__52704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52704):map__52704);
var effect = map__52704__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52704__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52704__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52695,chunk__52696,count__52697,i__52698,map__52704,map__52704__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52695,chunk__52696,count__52697,i__52698,map__52704,map__52704__$1,effect,ms,dispatch))
,ms);
}


var G__52800 = seq__52695;
var G__52801 = chunk__52696;
var G__52802 = count__52697;
var G__52803 = (i__52698 + (1));
seq__52695 = G__52800;
chunk__52696 = G__52801;
count__52697 = G__52802;
i__52698 = G__52803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52695);
if(temp__5735__auto__){
var seq__52695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52695__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52695__$1);
var G__52804 = cljs.core.chunk_rest(seq__52695__$1);
var G__52805 = c__4609__auto__;
var G__52806 = cljs.core.count(c__4609__auto__);
var G__52807 = (0);
seq__52695 = G__52804;
chunk__52696 = G__52805;
count__52697 = G__52806;
i__52698 = G__52807;
continue;
} else {
var map__52707 = cljs.core.first(seq__52695__$1);
var map__52707__$1 = (((((!((map__52707 == null))))?(((((map__52707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52707):map__52707);
var effect = map__52707__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52695,chunk__52696,count__52697,i__52698,map__52707,map__52707__$1,effect,ms,dispatch,seq__52695__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52695,chunk__52696,count__52697,i__52698,map__52707,map__52707__$1,effect,ms,dispatch,seq__52695__$1,temp__5735__auto__))
,ms);
}


var G__52816 = cljs.core.next(seq__52695__$1);
var G__52817 = null;
var G__52818 = (0);
var G__52819 = (0);
seq__52695 = G__52816;
chunk__52696 = G__52817;
count__52697 = G__52818;
i__52698 = G__52819;
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
var seq__52711 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52712 = null;
var count__52713 = (0);
var i__52714 = (0);
while(true){
if((i__52714 < count__52713)){
var event = chunk__52712.cljs$core$IIndexed$_nth$arity$2(null,i__52714);
re_frame.router.dispatch(event);


var G__52829 = seq__52711;
var G__52830 = chunk__52712;
var G__52831 = count__52713;
var G__52832 = (i__52714 + (1));
seq__52711 = G__52829;
chunk__52712 = G__52830;
count__52713 = G__52831;
i__52714 = G__52832;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52711);
if(temp__5735__auto__){
var seq__52711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52711__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52711__$1);
var G__52833 = cljs.core.chunk_rest(seq__52711__$1);
var G__52834 = c__4609__auto__;
var G__52835 = cljs.core.count(c__4609__auto__);
var G__52836 = (0);
seq__52711 = G__52833;
chunk__52712 = G__52834;
count__52713 = G__52835;
i__52714 = G__52836;
continue;
} else {
var event = cljs.core.first(seq__52711__$1);
re_frame.router.dispatch(event);


var G__52837 = cljs.core.next(seq__52711__$1);
var G__52838 = null;
var G__52839 = (0);
var G__52840 = (0);
seq__52711 = G__52837;
chunk__52712 = G__52838;
count__52713 = G__52839;
i__52714 = G__52840;
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
var seq__52715 = cljs.core.seq(value);
var chunk__52716 = null;
var count__52717 = (0);
var i__52718 = (0);
while(true){
if((i__52718 < count__52717)){
var event = chunk__52716.cljs$core$IIndexed$_nth$arity$2(null,i__52718);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52841 = seq__52715;
var G__52842 = chunk__52716;
var G__52843 = count__52717;
var G__52844 = (i__52718 + (1));
seq__52715 = G__52841;
chunk__52716 = G__52842;
count__52717 = G__52843;
i__52718 = G__52844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52715);
if(temp__5735__auto__){
var seq__52715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52715__$1);
var G__52846 = cljs.core.chunk_rest(seq__52715__$1);
var G__52847 = c__4609__auto__;
var G__52848 = cljs.core.count(c__4609__auto__);
var G__52849 = (0);
seq__52715 = G__52846;
chunk__52716 = G__52847;
count__52717 = G__52848;
i__52718 = G__52849;
continue;
} else {
var event = cljs.core.first(seq__52715__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52850 = cljs.core.next(seq__52715__$1);
var G__52851 = null;
var G__52852 = (0);
var G__52853 = (0);
seq__52715 = G__52850;
chunk__52716 = G__52851;
count__52717 = G__52852;
i__52718 = G__52853;
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
