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
var _STAR_current_trace_STAR__orig_val__59810 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__59811 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__59811);

try{try{var seq__59812 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59813 = null;
var count__59814 = (0);
var i__59815 = (0);
while(true){
if((i__59815 < count__59814)){
var vec__59822 = chunk__59813.cljs$core$IIndexed$_nth$arity$2(null,i__59815);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59822,(1),null);
var temp__5733__auto___59892 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59892)){
var effect_fn_59893 = temp__5733__auto___59892;
(effect_fn_59893.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59893.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59893.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59894 = seq__59812;
var G__59895 = chunk__59813;
var G__59896 = count__59814;
var G__59897 = (i__59815 + (1));
seq__59812 = G__59894;
chunk__59813 = G__59895;
count__59814 = G__59896;
i__59815 = G__59897;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59812);
if(temp__5735__auto__){
var seq__59812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59812__$1);
var G__59898 = cljs.core.chunk_rest(seq__59812__$1);
var G__59899 = c__4609__auto__;
var G__59900 = cljs.core.count(c__4609__auto__);
var G__59901 = (0);
seq__59812 = G__59898;
chunk__59813 = G__59899;
count__59814 = G__59900;
i__59815 = G__59901;
continue;
} else {
var vec__59825 = cljs.core.first(seq__59812__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59825,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59825,(1),null);
var temp__5733__auto___59902 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59902)){
var effect_fn_59903 = temp__5733__auto___59902;
(effect_fn_59903.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59903.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59903.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59904 = cljs.core.next(seq__59812__$1);
var G__59905 = null;
var G__59906 = (0);
var G__59907 = (0);
seq__59812 = G__59904;
chunk__59813 = G__59905;
count__59814 = G__59906;
i__59815 = G__59907;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__59543__auto___59908 = re_frame.interop.now();
var duration__59544__auto___59909 = (end__59543__auto___59908 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59544__auto___59909,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__59543__auto___59908);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__59810);
}} else {
var seq__59828 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59829 = null;
var count__59830 = (0);
var i__59831 = (0);
while(true){
if((i__59831 < count__59830)){
var vec__59841 = chunk__59829.cljs$core$IIndexed$_nth$arity$2(null,i__59831);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59841,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59841,(1),null);
var temp__5733__auto___59922 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59922)){
var effect_fn_59923 = temp__5733__auto___59922;
(effect_fn_59923.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59923.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59923.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59924 = seq__59828;
var G__59925 = chunk__59829;
var G__59926 = count__59830;
var G__59927 = (i__59831 + (1));
seq__59828 = G__59924;
chunk__59829 = G__59925;
count__59830 = G__59926;
i__59831 = G__59927;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59828);
if(temp__5735__auto__){
var seq__59828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59828__$1);
var G__59932 = cljs.core.chunk_rest(seq__59828__$1);
var G__59933 = c__4609__auto__;
var G__59934 = cljs.core.count(c__4609__auto__);
var G__59935 = (0);
seq__59828 = G__59932;
chunk__59829 = G__59933;
count__59830 = G__59934;
i__59831 = G__59935;
continue;
} else {
var vec__59846 = cljs.core.first(seq__59828__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59846,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59846,(1),null);
var temp__5733__auto___59936 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___59936)){
var effect_fn_59937 = temp__5733__auto___59936;
(effect_fn_59937.cljs$core$IFn$_invoke$arity$1 ? effect_fn_59937.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_59937.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__59938 = cljs.core.next(seq__59828__$1);
var G__59939 = null;
var G__59940 = (0);
var G__59941 = (0);
seq__59828 = G__59938;
chunk__59829 = G__59939;
count__59830 = G__59940;
i__59831 = G__59941;
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
var seq__59851 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59852 = null;
var count__59853 = (0);
var i__59854 = (0);
while(true){
if((i__59854 < count__59853)){
var map__59864 = chunk__59852.cljs$core$IIndexed$_nth$arity$2(null,i__59854);
var map__59864__$1 = (((((!((map__59864 == null))))?(((((map__59864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59864):map__59864);
var effect = map__59864__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59864__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59864__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59851,chunk__59852,count__59853,i__59854,map__59864,map__59864__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59851,chunk__59852,count__59853,i__59854,map__59864,map__59864__$1,effect,ms,dispatch))
,ms);
}


var G__59942 = seq__59851;
var G__59943 = chunk__59852;
var G__59944 = count__59853;
var G__59945 = (i__59854 + (1));
seq__59851 = G__59942;
chunk__59852 = G__59943;
count__59853 = G__59944;
i__59854 = G__59945;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59851);
if(temp__5735__auto__){
var seq__59851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59851__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59851__$1);
var G__59946 = cljs.core.chunk_rest(seq__59851__$1);
var G__59947 = c__4609__auto__;
var G__59948 = cljs.core.count(c__4609__auto__);
var G__59949 = (0);
seq__59851 = G__59946;
chunk__59852 = G__59947;
count__59853 = G__59948;
i__59854 = G__59949;
continue;
} else {
var map__59870 = cljs.core.first(seq__59851__$1);
var map__59870__$1 = (((((!((map__59870 == null))))?(((((map__59870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59870):map__59870);
var effect = map__59870__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59870__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__59851,chunk__59852,count__59853,i__59854,map__59870,map__59870__$1,effect,ms,dispatch,seq__59851__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__59851,chunk__59852,count__59853,i__59854,map__59870,map__59870__$1,effect,ms,dispatch,seq__59851__$1,temp__5735__auto__))
,ms);
}


var G__59952 = cljs.core.next(seq__59851__$1);
var G__59953 = null;
var G__59954 = (0);
var G__59955 = (0);
seq__59851 = G__59952;
chunk__59852 = G__59953;
count__59853 = G__59954;
i__59854 = G__59955;
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
var seq__59874 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__59875 = null;
var count__59876 = (0);
var i__59877 = (0);
while(true){
if((i__59877 < count__59876)){
var event = chunk__59875.cljs$core$IIndexed$_nth$arity$2(null,i__59877);
re_frame.router.dispatch(event);


var G__59956 = seq__59874;
var G__59957 = chunk__59875;
var G__59958 = count__59876;
var G__59959 = (i__59877 + (1));
seq__59874 = G__59956;
chunk__59875 = G__59957;
count__59876 = G__59958;
i__59877 = G__59959;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59874);
if(temp__5735__auto__){
var seq__59874__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59874__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59874__$1);
var G__59960 = cljs.core.chunk_rest(seq__59874__$1);
var G__59961 = c__4609__auto__;
var G__59962 = cljs.core.count(c__4609__auto__);
var G__59963 = (0);
seq__59874 = G__59960;
chunk__59875 = G__59961;
count__59876 = G__59962;
i__59877 = G__59963;
continue;
} else {
var event = cljs.core.first(seq__59874__$1);
re_frame.router.dispatch(event);


var G__59964 = cljs.core.next(seq__59874__$1);
var G__59965 = null;
var G__59966 = (0);
var G__59967 = (0);
seq__59874 = G__59964;
chunk__59875 = G__59965;
count__59876 = G__59966;
i__59877 = G__59967;
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
var seq__59882 = cljs.core.seq(value);
var chunk__59883 = null;
var count__59884 = (0);
var i__59885 = (0);
while(true){
if((i__59885 < count__59884)){
var event = chunk__59883.cljs$core$IIndexed$_nth$arity$2(null,i__59885);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__59968 = seq__59882;
var G__59969 = chunk__59883;
var G__59970 = count__59884;
var G__59971 = (i__59885 + (1));
seq__59882 = G__59968;
chunk__59883 = G__59969;
count__59884 = G__59970;
i__59885 = G__59971;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59882);
if(temp__5735__auto__){
var seq__59882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59882__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59882__$1);
var G__59976 = cljs.core.chunk_rest(seq__59882__$1);
var G__59977 = c__4609__auto__;
var G__59978 = cljs.core.count(c__4609__auto__);
var G__59979 = (0);
seq__59882 = G__59976;
chunk__59883 = G__59977;
count__59884 = G__59978;
i__59885 = G__59979;
continue;
} else {
var event = cljs.core.first(seq__59882__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__59980 = cljs.core.next(seq__59882__$1);
var G__59981 = null;
var G__59982 = (0);
var G__59983 = (0);
seq__59882 = G__59980;
chunk__59883 = G__59981;
count__59884 = G__59982;
i__59885 = G__59983;
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
