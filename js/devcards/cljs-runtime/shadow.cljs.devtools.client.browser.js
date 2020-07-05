goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49706 = arguments.length;
var i__4790__auto___49707 = (0);
while(true){
if((i__4790__auto___49707 < len__4789__auto___49706)){
args__4795__auto__.push((arguments[i__4790__auto___49707]));

var G__49708 = (i__4790__auto___49707 + (1));
i__4790__auto___49707 = G__49708;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49505){
var G__49506 = cljs.core.first(seq49505);
var seq49505__$1 = cljs.core.next(seq49505);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49506,seq49505__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49526){
var map__49527 = p__49526;
var map__49527__$1 = (((((!((map__49527 == null))))?(((((map__49527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49527):map__49527);
var src = map__49527__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49527__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49527__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49532 = cljs.core.seq(sources);
var chunk__49534 = null;
var count__49535 = (0);
var i__49536 = (0);
while(true){
if((i__49536 < count__49535)){
var map__49548 = chunk__49534.cljs$core$IIndexed$_nth$arity$2(null,i__49536);
var map__49548__$1 = (((((!((map__49548 == null))))?(((((map__49548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49548):map__49548);
var src = map__49548__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49548__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49548__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49548__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49548__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49551){var e_49710 = e49551;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49710);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49710.message)].join('')));
}

var G__49711 = seq__49532;
var G__49712 = chunk__49534;
var G__49713 = count__49535;
var G__49714 = (i__49536 + (1));
seq__49532 = G__49711;
chunk__49534 = G__49712;
count__49535 = G__49713;
i__49536 = G__49714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49532);
if(temp__5735__auto__){
var seq__49532__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49532__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49532__$1);
var G__49716 = cljs.core.chunk_rest(seq__49532__$1);
var G__49717 = c__4609__auto__;
var G__49718 = cljs.core.count(c__4609__auto__);
var G__49719 = (0);
seq__49532 = G__49716;
chunk__49534 = G__49717;
count__49535 = G__49718;
i__49536 = G__49719;
continue;
} else {
var map__49552 = cljs.core.first(seq__49532__$1);
var map__49552__$1 = (((((!((map__49552 == null))))?(((((map__49552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49552):map__49552);
var src = map__49552__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49554){var e_49720 = e49554;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49720);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49720.message)].join('')));
}

var G__49721 = cljs.core.next(seq__49532__$1);
var G__49722 = null;
var G__49723 = (0);
var G__49724 = (0);
seq__49532 = G__49721;
chunk__49534 = G__49722;
count__49535 = G__49723;
i__49536 = G__49724;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49558 = cljs.core.seq(js_requires);
var chunk__49559 = null;
var count__49560 = (0);
var i__49561 = (0);
while(true){
if((i__49561 < count__49560)){
var js_ns = chunk__49559.cljs$core$IIndexed$_nth$arity$2(null,i__49561);
var require_str_49725 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49725);


var G__49726 = seq__49558;
var G__49727 = chunk__49559;
var G__49728 = count__49560;
var G__49729 = (i__49561 + (1));
seq__49558 = G__49726;
chunk__49559 = G__49727;
count__49560 = G__49728;
i__49561 = G__49729;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49558);
if(temp__5735__auto__){
var seq__49558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49558__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49558__$1);
var G__49731 = cljs.core.chunk_rest(seq__49558__$1);
var G__49732 = c__4609__auto__;
var G__49733 = cljs.core.count(c__4609__auto__);
var G__49734 = (0);
seq__49558 = G__49731;
chunk__49559 = G__49732;
count__49560 = G__49733;
i__49561 = G__49734;
continue;
} else {
var js_ns = cljs.core.first(seq__49558__$1);
var require_str_49735 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49735);


var G__49736 = cljs.core.next(seq__49558__$1);
var G__49737 = null;
var G__49738 = (0);
var G__49739 = (0);
seq__49558 = G__49736;
chunk__49559 = G__49737;
count__49560 = G__49738;
i__49561 = G__49739;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49563 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49563) : callback.call(null,G__49563));
} else {
var G__49564 = shadow.cljs.devtools.client.env.files_url();
var G__49565 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49566 = "POST";
var G__49567 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49568 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49564,G__49565,G__49566,G__49567,G__49568);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49571){
var map__49572 = p__49571;
var map__49572__$1 = (((((!((map__49572 == null))))?(((((map__49572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49572):map__49572);
var msg = map__49572__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49572__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49572__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49574 = info;
var map__49574__$1 = (((((!((map__49574 == null))))?(((((map__49574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49574):map__49574);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49574__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49574__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49576(s__49577){
return (new cljs.core.LazySeq(null,(function (){
var s__49577__$1 = s__49577;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49577__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49582 = cljs.core.first(xs__6292__auto__);
var map__49582__$1 = (((((!((map__49582 == null))))?(((((map__49582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49582):map__49582);
var src = map__49582__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49582__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49577__$1,map__49582,map__49582__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49574,map__49574__$1,sources,compiled,map__49572,map__49572__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49576_$_iter__49578(s__49579){
return (new cljs.core.LazySeq(null,((function (s__49577__$1,map__49582,map__49582__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49574,map__49574__$1,sources,compiled,map__49572,map__49572__$1,msg,info,reload_info){
return (function (){
var s__49579__$1 = s__49579;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49579__$1);
if(temp__5735__auto____$1){
var s__49579__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49579__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49579__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49581 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49580 = (0);
while(true){
if((i__49580 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49580);
cljs.core.chunk_append(b__49581,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49741 = (i__49580 + (1));
i__49580 = G__49741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49576_$_iter__49578(cljs.core.chunk_rest(s__49579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49581),null);
}
} else {
var warning = cljs.core.first(s__49579__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49576_$_iter__49578(cljs.core.rest(s__49579__$2)));
}
} else {
return null;
}
break;
}
});})(s__49577__$1,map__49582,map__49582__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49574,map__49574__$1,sources,compiled,map__49572,map__49572__$1,msg,info,reload_info))
,null,null));
});})(s__49577__$1,map__49582,map__49582__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49574,map__49574__$1,sources,compiled,map__49572,map__49572__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49576(cljs.core.rest(s__49577__$1)));
} else {
var G__49742 = cljs.core.rest(s__49577__$1);
s__49577__$1 = G__49742;
continue;
}
} else {
var G__49743 = cljs.core.rest(s__49577__$1);
s__49577__$1 = G__49743;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__49587_49744 = cljs.core.seq(warnings);
var chunk__49588_49745 = null;
var count__49589_49746 = (0);
var i__49590_49747 = (0);
while(true){
if((i__49590_49747 < count__49589_49746)){
var map__49595_49749 = chunk__49588_49745.cljs$core$IIndexed$_nth$arity$2(null,i__49590_49747);
var map__49595_49750__$1 = (((((!((map__49595_49749 == null))))?(((((map__49595_49749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49595_49749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49595_49749):map__49595_49749);
var w_49751 = map__49595_49750__$1;
var msg_49752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49750__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49755)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49753),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49754),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49752__$1)].join(''));


var G__49756 = seq__49587_49744;
var G__49757 = chunk__49588_49745;
var G__49758 = count__49589_49746;
var G__49759 = (i__49590_49747 + (1));
seq__49587_49744 = G__49756;
chunk__49588_49745 = G__49757;
count__49589_49746 = G__49758;
i__49590_49747 = G__49759;
continue;
} else {
var temp__5735__auto___49760 = cljs.core.seq(seq__49587_49744);
if(temp__5735__auto___49760){
var seq__49587_49761__$1 = temp__5735__auto___49760;
if(cljs.core.chunked_seq_QMARK_(seq__49587_49761__$1)){
var c__4609__auto___49762 = cljs.core.chunk_first(seq__49587_49761__$1);
var G__49763 = cljs.core.chunk_rest(seq__49587_49761__$1);
var G__49764 = c__4609__auto___49762;
var G__49765 = cljs.core.count(c__4609__auto___49762);
var G__49766 = (0);
seq__49587_49744 = G__49763;
chunk__49588_49745 = G__49764;
count__49589_49746 = G__49765;
i__49590_49747 = G__49766;
continue;
} else {
var map__49597_49767 = cljs.core.first(seq__49587_49761__$1);
var map__49597_49768__$1 = (((((!((map__49597_49767 == null))))?(((((map__49597_49767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49597_49767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49597_49767):map__49597_49767);
var w_49769 = map__49597_49768__$1;
var msg_49770__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597_49768__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597_49768__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597_49768__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597_49768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49773)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49771),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49772),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49770__$1)].join(''));


var G__49774 = cljs.core.next(seq__49587_49761__$1);
var G__49775 = null;
var G__49776 = (0);
var G__49777 = (0);
seq__49587_49744 = G__49774;
chunk__49588_49745 = G__49775;
count__49589_49746 = G__49776;
i__49590_49747 = G__49777;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49600){
var map__49601 = p__49600;
var map__49601__$1 = (((((!((map__49601 == null))))?(((((map__49601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49601):map__49601);
var src = map__49601__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49603){
var map__49604 = p__49603;
var map__49604__$1 = (((((!((map__49604 == null))))?(((((map__49604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49604):map__49604);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49607){
var map__49608 = p__49607;
var map__49608__$1 = (((((!((map__49608 == null))))?(((((map__49608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49608):map__49608);
var rc = map__49608__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49608__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49569_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49569_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49610){
var map__49611 = p__49610;
var map__49611__$1 = (((((!((map__49611 == null))))?(((((map__49611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49611):map__49611);
var msg = map__49611__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49611__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49613 = cljs.core.seq(updates);
var chunk__49615 = null;
var count__49616 = (0);
var i__49617 = (0);
while(true){
if((i__49617 < count__49616)){
var path = chunk__49615.cljs$core$IIndexed$_nth$arity$2(null,i__49617);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49645_49780 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49648_49781 = null;
var count__49649_49782 = (0);
var i__49650_49783 = (0);
while(true){
if((i__49650_49783 < count__49649_49782)){
var node_49784 = chunk__49648_49781.cljs$core$IIndexed$_nth$arity$2(null,i__49650_49783);
var path_match_49785 = shadow.cljs.devtools.client.browser.match_paths(node_49784.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49785)){
var new_link_49786 = (function (){var G__49655 = node_49784.cloneNode(true);
G__49655.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49785),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49655;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49785], 0));

goog.dom.insertSiblingAfter(new_link_49786,node_49784);

goog.dom.removeNode(node_49784);


var G__49788 = seq__49645_49780;
var G__49789 = chunk__49648_49781;
var G__49790 = count__49649_49782;
var G__49791 = (i__49650_49783 + (1));
seq__49645_49780 = G__49788;
chunk__49648_49781 = G__49789;
count__49649_49782 = G__49790;
i__49650_49783 = G__49791;
continue;
} else {
var G__49792 = seq__49645_49780;
var G__49793 = chunk__49648_49781;
var G__49794 = count__49649_49782;
var G__49795 = (i__49650_49783 + (1));
seq__49645_49780 = G__49792;
chunk__49648_49781 = G__49793;
count__49649_49782 = G__49794;
i__49650_49783 = G__49795;
continue;
}
} else {
var temp__5735__auto___49796 = cljs.core.seq(seq__49645_49780);
if(temp__5735__auto___49796){
var seq__49645_49797__$1 = temp__5735__auto___49796;
if(cljs.core.chunked_seq_QMARK_(seq__49645_49797__$1)){
var c__4609__auto___49798 = cljs.core.chunk_first(seq__49645_49797__$1);
var G__49799 = cljs.core.chunk_rest(seq__49645_49797__$1);
var G__49800 = c__4609__auto___49798;
var G__49801 = cljs.core.count(c__4609__auto___49798);
var G__49802 = (0);
seq__49645_49780 = G__49799;
chunk__49648_49781 = G__49800;
count__49649_49782 = G__49801;
i__49650_49783 = G__49802;
continue;
} else {
var node_49803 = cljs.core.first(seq__49645_49797__$1);
var path_match_49804 = shadow.cljs.devtools.client.browser.match_paths(node_49803.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49804)){
var new_link_49805 = (function (){var G__49656 = node_49803.cloneNode(true);
G__49656.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49804),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49656;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49804], 0));

goog.dom.insertSiblingAfter(new_link_49805,node_49803);

goog.dom.removeNode(node_49803);


var G__49806 = cljs.core.next(seq__49645_49797__$1);
var G__49807 = null;
var G__49808 = (0);
var G__49809 = (0);
seq__49645_49780 = G__49806;
chunk__49648_49781 = G__49807;
count__49649_49782 = G__49808;
i__49650_49783 = G__49809;
continue;
} else {
var G__49810 = cljs.core.next(seq__49645_49797__$1);
var G__49811 = null;
var G__49812 = (0);
var G__49813 = (0);
seq__49645_49780 = G__49810;
chunk__49648_49781 = G__49811;
count__49649_49782 = G__49812;
i__49650_49783 = G__49813;
continue;
}
}
} else {
}
}
break;
}


var G__49814 = seq__49613;
var G__49815 = chunk__49615;
var G__49816 = count__49616;
var G__49817 = (i__49617 + (1));
seq__49613 = G__49814;
chunk__49615 = G__49815;
count__49616 = G__49816;
i__49617 = G__49817;
continue;
} else {
var G__49818 = seq__49613;
var G__49819 = chunk__49615;
var G__49820 = count__49616;
var G__49821 = (i__49617 + (1));
seq__49613 = G__49818;
chunk__49615 = G__49819;
count__49616 = G__49820;
i__49617 = G__49821;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49613);
if(temp__5735__auto__){
var seq__49613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49613__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49613__$1);
var G__49822 = cljs.core.chunk_rest(seq__49613__$1);
var G__49823 = c__4609__auto__;
var G__49824 = cljs.core.count(c__4609__auto__);
var G__49825 = (0);
seq__49613 = G__49822;
chunk__49615 = G__49823;
count__49616 = G__49824;
i__49617 = G__49825;
continue;
} else {
var path = cljs.core.first(seq__49613__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49658_49827 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49661_49828 = null;
var count__49662_49829 = (0);
var i__49663_49830 = (0);
while(true){
if((i__49663_49830 < count__49662_49829)){
var node_49831 = chunk__49661_49828.cljs$core$IIndexed$_nth$arity$2(null,i__49663_49830);
var path_match_49832 = shadow.cljs.devtools.client.browser.match_paths(node_49831.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49832)){
var new_link_49833 = (function (){var G__49669 = node_49831.cloneNode(true);
G__49669.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49832),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49669;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49832], 0));

goog.dom.insertSiblingAfter(new_link_49833,node_49831);

goog.dom.removeNode(node_49831);


var G__49834 = seq__49658_49827;
var G__49835 = chunk__49661_49828;
var G__49836 = count__49662_49829;
var G__49837 = (i__49663_49830 + (1));
seq__49658_49827 = G__49834;
chunk__49661_49828 = G__49835;
count__49662_49829 = G__49836;
i__49663_49830 = G__49837;
continue;
} else {
var G__49838 = seq__49658_49827;
var G__49839 = chunk__49661_49828;
var G__49840 = count__49662_49829;
var G__49841 = (i__49663_49830 + (1));
seq__49658_49827 = G__49838;
chunk__49661_49828 = G__49839;
count__49662_49829 = G__49840;
i__49663_49830 = G__49841;
continue;
}
} else {
var temp__5735__auto___49842__$1 = cljs.core.seq(seq__49658_49827);
if(temp__5735__auto___49842__$1){
var seq__49658_49843__$1 = temp__5735__auto___49842__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49658_49843__$1)){
var c__4609__auto___49844 = cljs.core.chunk_first(seq__49658_49843__$1);
var G__49845 = cljs.core.chunk_rest(seq__49658_49843__$1);
var G__49846 = c__4609__auto___49844;
var G__49847 = cljs.core.count(c__4609__auto___49844);
var G__49848 = (0);
seq__49658_49827 = G__49845;
chunk__49661_49828 = G__49846;
count__49662_49829 = G__49847;
i__49663_49830 = G__49848;
continue;
} else {
var node_49849 = cljs.core.first(seq__49658_49843__$1);
var path_match_49850 = shadow.cljs.devtools.client.browser.match_paths(node_49849.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49850)){
var new_link_49851 = (function (){var G__49670 = node_49849.cloneNode(true);
G__49670.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49850),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49670;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49850], 0));

goog.dom.insertSiblingAfter(new_link_49851,node_49849);

goog.dom.removeNode(node_49849);


var G__49852 = cljs.core.next(seq__49658_49843__$1);
var G__49853 = null;
var G__49854 = (0);
var G__49855 = (0);
seq__49658_49827 = G__49852;
chunk__49661_49828 = G__49853;
count__49662_49829 = G__49854;
i__49663_49830 = G__49855;
continue;
} else {
var G__49856 = cljs.core.next(seq__49658_49843__$1);
var G__49857 = null;
var G__49858 = (0);
var G__49859 = (0);
seq__49658_49827 = G__49856;
chunk__49661_49828 = G__49857;
count__49662_49829 = G__49858;
i__49663_49830 = G__49859;
continue;
}
}
} else {
}
}
break;
}


var G__49860 = cljs.core.next(seq__49613__$1);
var G__49861 = null;
var G__49862 = (0);
var G__49863 = (0);
seq__49613 = G__49860;
chunk__49615 = G__49861;
count__49616 = G__49862;
i__49617 = G__49863;
continue;
} else {
var G__49864 = cljs.core.next(seq__49613__$1);
var G__49865 = null;
var G__49866 = (0);
var G__49867 = (0);
seq__49613 = G__49864;
chunk__49615 = G__49865;
count__49616 = G__49866;
i__49617 = G__49867;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49672){
var map__49673 = p__49672;
var map__49673__$1 = (((((!((map__49673 == null))))?(((((map__49673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49673):map__49673);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49676,done){
var map__49677 = p__49676;
var map__49677__$1 = (((((!((map__49677 == null))))?(((((map__49677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49677):map__49677);
var msg = map__49677__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49679){
var map__49680 = p__49679;
var map__49680__$1 = (((((!((map__49680 == null))))?(((((map__49680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49680):map__49680);
var src = map__49680__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49680__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49682){var e = e49682;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49684,done){
var map__49685 = p__49684;
var map__49685__$1 = (((((!((map__49685 == null))))?(((((map__49685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49685):map__49685);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49685__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49687){
var map__49688 = p__49687;
var map__49688__$1 = (((((!((map__49688 == null))))?(((((map__49688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49688):map__49688);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49691,done){
var map__49692 = p__49691;
var map__49692__$1 = (((((!((map__49692 == null))))?(((((map__49692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49692):map__49692);
var msg = map__49692__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49694_49871 = type;
var G__49694_49872__$1 = (((G__49694_49871 instanceof cljs.core.Keyword))?G__49694_49871.fqn:null);
switch (G__49694_49872__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__49695 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49696 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49697 = "POST";
var G__49698 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49699 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49695,G__49696,G__49697,G__49698,G__49699);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49702 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49701 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49701.cljs$core$IFn$_invoke$arity$1 ? fexpr__49701.cljs$core$IFn$_invoke$arity$1(G__49702) : fexpr__49701.call(null,G__49702));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e49704){var e = e49704;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___49876 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___49876)){
var s_49877 = temp__5735__auto___49876;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_49877.onclose = (function (e){
return null;
}));

s_49877.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
