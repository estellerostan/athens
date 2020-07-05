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
var len__4789__auto___59884 = arguments.length;
var i__4790__auto___59885 = (0);
while(true){
if((i__4790__auto___59885 < len__4789__auto___59884)){
args__4795__auto__.push((arguments[i__4790__auto___59885]));

var G__59886 = (i__4790__auto___59885 + (1));
i__4790__auto___59885 = G__59886;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59463){
var G__59464 = cljs.core.first(seq59463);
var seq59463__$1 = cljs.core.next(seq59463);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59464,seq59463__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59465){
var map__59466 = p__59465;
var map__59466__$1 = (((((!((map__59466 == null))))?(((((map__59466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59466):map__59466);
var src = map__59466__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__59480 = cljs.core.seq(sources);
var chunk__59481 = null;
var count__59482 = (0);
var i__59483 = (0);
while(true){
if((i__59483 < count__59482)){
var map__59510 = chunk__59481.cljs$core$IIndexed$_nth$arity$2(null,i__59483);
var map__59510__$1 = (((((!((map__59510 == null))))?(((((map__59510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59510):map__59510);
var src = map__59510__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59521){var e_59892 = e59521;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59892);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59892.message)].join('')));
}

var G__59893 = seq__59480;
var G__59894 = chunk__59481;
var G__59895 = count__59482;
var G__59896 = (i__59483 + (1));
seq__59480 = G__59893;
chunk__59481 = G__59894;
count__59482 = G__59895;
i__59483 = G__59896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59480);
if(temp__5735__auto__){
var seq__59480__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59480__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59480__$1);
var G__59897 = cljs.core.chunk_rest(seq__59480__$1);
var G__59898 = c__4609__auto__;
var G__59899 = cljs.core.count(c__4609__auto__);
var G__59900 = (0);
seq__59480 = G__59897;
chunk__59481 = G__59898;
count__59482 = G__59899;
i__59483 = G__59900;
continue;
} else {
var map__59526 = cljs.core.first(seq__59480__$1);
var map__59526__$1 = (((((!((map__59526 == null))))?(((((map__59526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59526):map__59526);
var src = map__59526__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59526__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59526__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59526__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59529){var e_59905 = e59529;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_59905);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_59905.message)].join('')));
}

var G__59906 = cljs.core.next(seq__59480__$1);
var G__59907 = null;
var G__59908 = (0);
var G__59909 = (0);
seq__59480 = G__59906;
chunk__59481 = G__59907;
count__59482 = G__59908;
i__59483 = G__59909;
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
var seq__59548 = cljs.core.seq(js_requires);
var chunk__59549 = null;
var count__59550 = (0);
var i__59551 = (0);
while(true){
if((i__59551 < count__59550)){
var js_ns = chunk__59549.cljs$core$IIndexed$_nth$arity$2(null,i__59551);
var require_str_59912 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59912);


var G__59913 = seq__59548;
var G__59914 = chunk__59549;
var G__59915 = count__59550;
var G__59916 = (i__59551 + (1));
seq__59548 = G__59913;
chunk__59549 = G__59914;
count__59550 = G__59915;
i__59551 = G__59916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59548);
if(temp__5735__auto__){
var seq__59548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59548__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59548__$1);
var G__59917 = cljs.core.chunk_rest(seq__59548__$1);
var G__59918 = c__4609__auto__;
var G__59919 = cljs.core.count(c__4609__auto__);
var G__59920 = (0);
seq__59548 = G__59917;
chunk__59549 = G__59918;
count__59550 = G__59919;
i__59551 = G__59920;
continue;
} else {
var js_ns = cljs.core.first(seq__59548__$1);
var require_str_59921 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_59921);


var G__59922 = cljs.core.next(seq__59548__$1);
var G__59923 = null;
var G__59924 = (0);
var G__59925 = (0);
seq__59548 = G__59922;
chunk__59549 = G__59923;
count__59550 = G__59924;
i__59551 = G__59925;
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
var G__59561 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59561) : callback.call(null,G__59561));
} else {
var G__59563 = shadow.cljs.devtools.client.env.files_url();
var G__59564 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59565 = "POST";
var G__59566 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59567 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59563,G__59564,G__59565,G__59566,G__59567);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59580){
var map__59581 = p__59580;
var map__59581__$1 = (((((!((map__59581 == null))))?(((((map__59581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59581):map__59581);
var msg = map__59581__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59581__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59581__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59587 = info;
var map__59587__$1 = (((((!((map__59587 == null))))?(((((map__59587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59587):map__59587);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59587__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59587__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59591(s__59592){
return (new cljs.core.LazySeq(null,(function (){
var s__59592__$1 = s__59592;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59592__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59597 = cljs.core.first(xs__6292__auto__);
var map__59597__$1 = (((((!((map__59597 == null))))?(((((map__59597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59597):map__59597);
var src = map__59597__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59597__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59597__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59592__$1,map__59597,map__59597__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59587,map__59587__$1,sources,compiled,map__59581,map__59581__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59591_$_iter__59593(s__59594){
return (new cljs.core.LazySeq(null,((function (s__59592__$1,map__59597,map__59597__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59587,map__59587__$1,sources,compiled,map__59581,map__59581__$1,msg,info,reload_info){
return (function (){
var s__59594__$1 = s__59594;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59594__$1);
if(temp__5735__auto____$1){
var s__59594__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59594__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59594__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59596 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59595 = (0);
while(true){
if((i__59595 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59595);
cljs.core.chunk_append(b__59596,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__59944 = (i__59595 + (1));
i__59595 = G__59944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59596),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59591_$_iter__59593(cljs.core.chunk_rest(s__59594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59596),null);
}
} else {
var warning = cljs.core.first(s__59594__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59591_$_iter__59593(cljs.core.rest(s__59594__$2)));
}
} else {
return null;
}
break;
}
});})(s__59592__$1,map__59597,map__59597__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59587,map__59587__$1,sources,compiled,map__59581,map__59581__$1,msg,info,reload_info))
,null,null));
});})(s__59592__$1,map__59597,map__59597__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59587,map__59587__$1,sources,compiled,map__59581,map__59581__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59591(cljs.core.rest(s__59592__$1)));
} else {
var G__59945 = cljs.core.rest(s__59592__$1);
s__59592__$1 = G__59945;
continue;
}
} else {
var G__59946 = cljs.core.rest(s__59592__$1);
s__59592__$1 = G__59946;
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
var seq__59638_59947 = cljs.core.seq(warnings);
var chunk__59639_59948 = null;
var count__59640_59949 = (0);
var i__59641_59950 = (0);
while(true){
if((i__59641_59950 < count__59640_59949)){
var map__59651_59951 = chunk__59639_59948.cljs$core$IIndexed$_nth$arity$2(null,i__59641_59950);
var map__59651_59952__$1 = (((((!((map__59651_59951 == null))))?(((((map__59651_59951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59651_59951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59651_59951):map__59651_59951);
var w_59953 = map__59651_59952__$1;
var msg_59954__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59651_59952__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59651_59952__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59651_59952__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59651_59952__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59957)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59955),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59956),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59954__$1)].join(''));


var G__59958 = seq__59638_59947;
var G__59959 = chunk__59639_59948;
var G__59960 = count__59640_59949;
var G__59961 = (i__59641_59950 + (1));
seq__59638_59947 = G__59958;
chunk__59639_59948 = G__59959;
count__59640_59949 = G__59960;
i__59641_59950 = G__59961;
continue;
} else {
var temp__5735__auto___59962 = cljs.core.seq(seq__59638_59947);
if(temp__5735__auto___59962){
var seq__59638_59963__$1 = temp__5735__auto___59962;
if(cljs.core.chunked_seq_QMARK_(seq__59638_59963__$1)){
var c__4609__auto___59964 = cljs.core.chunk_first(seq__59638_59963__$1);
var G__59965 = cljs.core.chunk_rest(seq__59638_59963__$1);
var G__59966 = c__4609__auto___59964;
var G__59967 = cljs.core.count(c__4609__auto___59964);
var G__59968 = (0);
seq__59638_59947 = G__59965;
chunk__59639_59948 = G__59966;
count__59640_59949 = G__59967;
i__59641_59950 = G__59968;
continue;
} else {
var map__59687_59970 = cljs.core.first(seq__59638_59963__$1);
var map__59687_59971__$1 = (((((!((map__59687_59970 == null))))?(((((map__59687_59970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59687_59970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59687_59970):map__59687_59970);
var w_59972 = map__59687_59971__$1;
var msg_59973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59687_59971__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_59974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59687_59971__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_59975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59687_59971__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_59976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59687_59971__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_59976)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_59974),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_59975),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_59973__$1)].join(''));


var G__59977 = cljs.core.next(seq__59638_59963__$1);
var G__59978 = null;
var G__59979 = (0);
var G__59980 = (0);
seq__59638_59947 = G__59977;
chunk__59639_59948 = G__59978;
count__59640_59949 = G__59979;
i__59641_59950 = G__59980;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59695){
var map__59697 = p__59695;
var map__59697__$1 = (((((!((map__59697 == null))))?(((((map__59697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59697):map__59697);
var src = map__59697__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59697__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59697__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59729){
var map__59730 = p__59729;
var map__59730__$1 = (((((!((map__59730 == null))))?(((((map__59730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59730):map__59730);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59734){
var map__59735 = p__59734;
var map__59735__$1 = (((((!((map__59735 == null))))?(((((map__59735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59735):map__59735);
var rc = map__59735__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59579_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59579_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59738){
var map__59739 = p__59738;
var map__59739__$1 = (((((!((map__59739 == null))))?(((((map__59739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59739):map__59739);
var msg = map__59739__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59741 = cljs.core.seq(updates);
var chunk__59743 = null;
var count__59744 = (0);
var i__59745 = (0);
while(true){
if((i__59745 < count__59744)){
var path = chunk__59743.cljs$core$IIndexed$_nth$arity$2(null,i__59745);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59777_59985 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59780_59986 = null;
var count__59781_59987 = (0);
var i__59782_59988 = (0);
while(true){
if((i__59782_59988 < count__59781_59987)){
var node_59989 = chunk__59780_59986.cljs$core$IIndexed$_nth$arity$2(null,i__59782_59988);
var path_match_59990 = shadow.cljs.devtools.client.browser.match_paths(node_59989.getAttribute("href"),path);
if(cljs.core.truth_(path_match_59990)){
var new_link_59991 = (function (){var G__59787 = node_59989.cloneNode(true);
G__59787.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_59990),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59787;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_59990], 0));

goog.dom.insertSiblingAfter(new_link_59991,node_59989);

goog.dom.removeNode(node_59989);


var G__59992 = seq__59777_59985;
var G__59993 = chunk__59780_59986;
var G__59994 = count__59781_59987;
var G__59995 = (i__59782_59988 + (1));
seq__59777_59985 = G__59992;
chunk__59780_59986 = G__59993;
count__59781_59987 = G__59994;
i__59782_59988 = G__59995;
continue;
} else {
var G__59996 = seq__59777_59985;
var G__59997 = chunk__59780_59986;
var G__59998 = count__59781_59987;
var G__59999 = (i__59782_59988 + (1));
seq__59777_59985 = G__59996;
chunk__59780_59986 = G__59997;
count__59781_59987 = G__59998;
i__59782_59988 = G__59999;
continue;
}
} else {
var temp__5735__auto___60000 = cljs.core.seq(seq__59777_59985);
if(temp__5735__auto___60000){
var seq__59777_60001__$1 = temp__5735__auto___60000;
if(cljs.core.chunked_seq_QMARK_(seq__59777_60001__$1)){
var c__4609__auto___60002 = cljs.core.chunk_first(seq__59777_60001__$1);
var G__60003 = cljs.core.chunk_rest(seq__59777_60001__$1);
var G__60004 = c__4609__auto___60002;
var G__60005 = cljs.core.count(c__4609__auto___60002);
var G__60006 = (0);
seq__59777_59985 = G__60003;
chunk__59780_59986 = G__60004;
count__59781_59987 = G__60005;
i__59782_59988 = G__60006;
continue;
} else {
var node_60007 = cljs.core.first(seq__59777_60001__$1);
var path_match_60008 = shadow.cljs.devtools.client.browser.match_paths(node_60007.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60008)){
var new_link_60009 = (function (){var G__59788 = node_60007.cloneNode(true);
G__59788.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59788;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60008], 0));

goog.dom.insertSiblingAfter(new_link_60009,node_60007);

goog.dom.removeNode(node_60007);


var G__60010 = cljs.core.next(seq__59777_60001__$1);
var G__60011 = null;
var G__60012 = (0);
var G__60013 = (0);
seq__59777_59985 = G__60010;
chunk__59780_59986 = G__60011;
count__59781_59987 = G__60012;
i__59782_59988 = G__60013;
continue;
} else {
var G__60014 = cljs.core.next(seq__59777_60001__$1);
var G__60015 = null;
var G__60016 = (0);
var G__60017 = (0);
seq__59777_59985 = G__60014;
chunk__59780_59986 = G__60015;
count__59781_59987 = G__60016;
i__59782_59988 = G__60017;
continue;
}
}
} else {
}
}
break;
}


var G__60018 = seq__59741;
var G__60019 = chunk__59743;
var G__60020 = count__59744;
var G__60021 = (i__59745 + (1));
seq__59741 = G__60018;
chunk__59743 = G__60019;
count__59744 = G__60020;
i__59745 = G__60021;
continue;
} else {
var G__60022 = seq__59741;
var G__60023 = chunk__59743;
var G__60024 = count__59744;
var G__60025 = (i__59745 + (1));
seq__59741 = G__60022;
chunk__59743 = G__60023;
count__59744 = G__60024;
i__59745 = G__60025;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59741);
if(temp__5735__auto__){
var seq__59741__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59741__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59741__$1);
var G__60026 = cljs.core.chunk_rest(seq__59741__$1);
var G__60027 = c__4609__auto__;
var G__60028 = cljs.core.count(c__4609__auto__);
var G__60029 = (0);
seq__59741 = G__60026;
chunk__59743 = G__60027;
count__59744 = G__60028;
i__59745 = G__60029;
continue;
} else {
var path = cljs.core.first(seq__59741__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59789_60030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59792_60031 = null;
var count__59793_60032 = (0);
var i__59794_60033 = (0);
while(true){
if((i__59794_60033 < count__59793_60032)){
var node_60034 = chunk__59792_60031.cljs$core$IIndexed$_nth$arity$2(null,i__59794_60033);
var path_match_60035 = shadow.cljs.devtools.client.browser.match_paths(node_60034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60035)){
var new_link_60036 = (function (){var G__59801 = node_60034.cloneNode(true);
G__59801.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59801;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60035], 0));

goog.dom.insertSiblingAfter(new_link_60036,node_60034);

goog.dom.removeNode(node_60034);


var G__60037 = seq__59789_60030;
var G__60038 = chunk__59792_60031;
var G__60039 = count__59793_60032;
var G__60040 = (i__59794_60033 + (1));
seq__59789_60030 = G__60037;
chunk__59792_60031 = G__60038;
count__59793_60032 = G__60039;
i__59794_60033 = G__60040;
continue;
} else {
var G__60041 = seq__59789_60030;
var G__60042 = chunk__59792_60031;
var G__60043 = count__59793_60032;
var G__60044 = (i__59794_60033 + (1));
seq__59789_60030 = G__60041;
chunk__59792_60031 = G__60042;
count__59793_60032 = G__60043;
i__59794_60033 = G__60044;
continue;
}
} else {
var temp__5735__auto___60045__$1 = cljs.core.seq(seq__59789_60030);
if(temp__5735__auto___60045__$1){
var seq__59789_60046__$1 = temp__5735__auto___60045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59789_60046__$1)){
var c__4609__auto___60047 = cljs.core.chunk_first(seq__59789_60046__$1);
var G__60048 = cljs.core.chunk_rest(seq__59789_60046__$1);
var G__60049 = c__4609__auto___60047;
var G__60050 = cljs.core.count(c__4609__auto___60047);
var G__60051 = (0);
seq__59789_60030 = G__60048;
chunk__59792_60031 = G__60049;
count__59793_60032 = G__60050;
i__59794_60033 = G__60051;
continue;
} else {
var node_60054 = cljs.core.first(seq__59789_60046__$1);
var path_match_60055 = shadow.cljs.devtools.client.browser.match_paths(node_60054.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60055)){
var new_link_60058 = (function (){var G__59806 = node_60054.cloneNode(true);
G__59806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60055),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59806;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60055], 0));

goog.dom.insertSiblingAfter(new_link_60058,node_60054);

goog.dom.removeNode(node_60054);


var G__60059 = cljs.core.next(seq__59789_60046__$1);
var G__60060 = null;
var G__60061 = (0);
var G__60062 = (0);
seq__59789_60030 = G__60059;
chunk__59792_60031 = G__60060;
count__59793_60032 = G__60061;
i__59794_60033 = G__60062;
continue;
} else {
var G__60063 = cljs.core.next(seq__59789_60046__$1);
var G__60064 = null;
var G__60065 = (0);
var G__60066 = (0);
seq__59789_60030 = G__60063;
chunk__59792_60031 = G__60064;
count__59793_60032 = G__60065;
i__59794_60033 = G__60066;
continue;
}
}
} else {
}
}
break;
}


var G__60067 = cljs.core.next(seq__59741__$1);
var G__60068 = null;
var G__60069 = (0);
var G__60070 = (0);
seq__59741 = G__60067;
chunk__59743 = G__60068;
count__59744 = G__60069;
i__59745 = G__60070;
continue;
} else {
var G__60071 = cljs.core.next(seq__59741__$1);
var G__60072 = null;
var G__60073 = (0);
var G__60074 = (0);
seq__59741 = G__60071;
chunk__59743 = G__60072;
count__59744 = G__60073;
i__59745 = G__60074;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59815){
var map__59816 = p__59815;
var map__59816__$1 = (((((!((map__59816 == null))))?(((((map__59816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59816):map__59816);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59816__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59824,done){
var map__59825 = p__59824;
var map__59825__$1 = (((((!((map__59825 == null))))?(((((map__59825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59825):map__59825);
var msg = map__59825__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59827){
var map__59828 = p__59827;
var map__59828__$1 = (((((!((map__59828 == null))))?(((((map__59828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59828):map__59828);
var src = map__59828__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59828__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e59830){var e = e59830;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59836,done){
var map__59837 = p__59836;
var map__59837__$1 = (((((!((map__59837 == null))))?(((((map__59837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59837):map__59837);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59843){
var map__59845 = p__59843;
var map__59845__$1 = (((((!((map__59845 == null))))?(((((map__59845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59845):map__59845);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59845__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__59849,done){
var map__59850 = p__59849;
var map__59850__$1 = (((((!((map__59850 == null))))?(((((map__59850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59850):map__59850);
var msg = map__59850__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59850__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__59853_60077 = type;
var G__59853_60078__$1 = (((G__59853_60077 instanceof cljs.core.Keyword))?G__59853_60077.fqn:null);
switch (G__59853_60078__$1) {
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
var G__59861 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__59862 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__59863 = "POST";
var G__59864 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__59865 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59861,G__59862,G__59863,G__59864,G__59865);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__59874 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__59873 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__59873.cljs$core$IFn$_invoke$arity$1 ? fexpr__59873.cljs$core$IFn$_invoke$arity$1(G__59874) : fexpr__59873.call(null,G__59874));
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
}catch (e59877){var e = e59877;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60080 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60080)){
var s_60081 = temp__5735__auto___60080;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60081.onclose = (function (e){
return null;
}));

s_60081.close();

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
