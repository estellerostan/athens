goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__81863 = xs;
args__$2 = G__81863;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__81864 = xs;
args__$2 = G__81864;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81865 = arguments.length;
var i__4790__auto___81866 = (0);
while(true){
if((i__4790__auto___81866 < len__4789__auto___81865)){
args__4795__auto__.push((arguments[i__4790__auto___81866]));

var G__81867 = (i__4790__auto___81866 + (1));
i__4790__auto___81866 = G__81867;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__81868 = ctx__$2;
var G__81869 = rest_let_bindings;
ctx__$1 = G__81868;
let_bindings__$1 = G__81869;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__81870 = nexprs;
exprs__$1 = G__81870;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq81082){
var G__81083 = cljs.core.first(seq81082);
var seq81082__$1 = cljs.core.next(seq81082);
var G__81084 = cljs.core.first(seq81082__$1);
var seq81082__$2 = cljs.core.next(seq81082__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81083,G__81084,seq81082__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__81088){
var vec__81089 = p__81088;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81089,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81089,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81089,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81089,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__81092 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__81093 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81092,G__81093) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81092,G__81093));
})())?(function (){var G__81094 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__81094,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__81094;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__81098 = libspec;
var seq__81099 = cljs.core.seq(vec__81098);
var first__81100 = cljs.core.first(seq__81099);
var seq__81099__$1 = cljs.core.next(seq__81099);
var lib_name = first__81100;
var opts = seq__81099__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__81104 = opts;
var vec__81107 = G__81104;
var seq__81108 = cljs.core.seq(vec__81107);
var first__81109 = cljs.core.first(seq__81108);
var seq__81108__$1 = cljs.core.next(seq__81108);
var opt_name = first__81109;
var first__81109__$1 = cljs.core.first(seq__81108__$1);
var seq__81108__$2 = cljs.core.next(seq__81108__$1);
var fst_opt = first__81109__$1;
var rst_opts = seq__81108__$2;
var ret__$1 = ret;
var G__81104__$1 = G__81104;
while(true){
var ret__$2 = ret__$1;
var vec__81118 = G__81104__$1;
var seq__81119 = cljs.core.seq(vec__81118);
var first__81120 = cljs.core.first(seq__81119);
var seq__81119__$1 = cljs.core.next(seq__81119);
var opt_name__$1 = first__81120;
var first__81120__$1 = cljs.core.first(seq__81119__$1);
var seq__81119__$2 = cljs.core.next(seq__81119__$1);
var fst_opt__$1 = first__81120__$1;
var rst_opts__$1 = seq__81119__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__81121 = opt_name__$1;
var G__81121__$1 = (((G__81121 instanceof cljs.core.Keyword))?G__81121.fqn:null);
switch (G__81121__$1) {
case "as":
var G__81872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__81873 = rst_opts__$1;
ret__$1 = G__81872;
G__81104__$1 = G__81873;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__81874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__81875 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__81874;
G__81104__$1 = G__81875;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__81876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__81877 = rst_opts__$1;
ret__$1 = G__81876;
G__81104__$1 = G__81877;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81121__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__81125){
var vec__81126 = p__81125;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81126,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__81129){
var map__81130 = p__81129;
var map__81130__$1 = (((((!((map__81130 == null))))?(((((map__81130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81130):map__81130);
var _parsed_libspec = map__81130__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81130__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81130__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81130__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81130__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81130__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__81134 = new cljs.core.Keyword(null,"all","all",892129742);
var G__81135 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81134,G__81135) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81134,G__81135));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81139 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81139,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__81142 = sci.impl.interpreter.parse_libspec(libspec);
var map__81142__$1 = (((((!((map__81142 == null))))?(((((map__81142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81142):map__81142);
var parsed_libspec = map__81142__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81142__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81142__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__81148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__81148) : load_fn.call(null,G__81148));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__81149 = temp__5733__auto____$2;
var map__81149__$1 = (((((!((map__81149 == null))))?(((((map__81149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81149):map__81149);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__81152_81884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__81153_81885 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__81152_81884,G__81153_81885) : sci.impl.interpreter.eval_string_STAR_.call(null,G__81152_81884,G__81153_81885));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e81151){if((e81151 instanceof Error)){
var e_81886 = e81151;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_81886;
} else {
throw e81151;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81889 = arguments.length;
var i__4790__auto___81890 = (0);
while(true){
if((i__4790__auto___81890 < len__4789__auto___81889)){
args__4795__auto__.push((arguments[i__4790__auto___81890]));

var G__81891 = (i__4790__auto___81890 + (1));
i__4790__auto___81890 = G__81891;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__81162 = ctx;
var G__81163 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81162,G__81163) : sci.impl.interpreter.interpret.call(null,G__81162,G__81163));
})();
if((ret instanceof cljs.core.Symbol)){
var G__81892 = (function (){var G__81164 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81164,current_libspec);
} else {
return G__81164;
}
})();
var G__81893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__81894 = cljs.core.next(args__$1);
libspecs = G__81892;
current_libspec = G__81893;
args__$1 = G__81894;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__81895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__81896 = null;
var G__81897 = cljs.core.next(args__$1);
libspecs = G__81895;
current_libspec = G__81896;
args__$1 = G__81897;
continue;
} else {
var G__81898 = (function (){var G__81165 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81165,current_libspec);
} else {
return G__81165;
}
})();
var G__81899 = ret;
var G__81900 = cljs.core.next(args__$1);
libspecs = G__81898;
current_libspec = G__81899;
args__$1 = G__81900;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__81166 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81166,current_libspec);
} else {
return G__81166;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__81154_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__81154_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq81155){
var G__81156 = cljs.core.first(seq81155);
var seq81155__$1 = cljs.core.next(seq81155);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81156,seq81155__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81910 = arguments.length;
var i__4790__auto___81911 = (0);
while(true){
if((i__4790__auto___81911 < len__4789__auto___81910)){
args__4795__auto__.push((arguments[i__4790__auto___81911]));

var G__81912 = (i__4790__auto___81911 + (1));
i__4790__auto___81911 = G__81912;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq81167){
var G__81168 = cljs.core.first(seq81167);
var seq81167__$1 = cljs.core.next(seq81167);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81168,seq81167__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__81169){
var vec__81170 = p__81169;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81170,(0),null);
var map__81173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81170,(1),null);
var map__81173__$1 = (((((!((map__81173 == null))))?(((((map__81173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81173):map__81173);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81173__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81173__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81173__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81175 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81175,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81175,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__81178 = ctx;
var G__81179 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81178,G__81179) : sci.impl.interpreter.interpret.call(null,G__81178,G__81179));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__81180 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__81180__$1 = (((((!((map__81180 == null))))?(((((map__81180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81180):map__81180);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81180__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81180__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81180__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__81189 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__81190 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__81190);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__81189);
}}catch (e81183){if((e81183 instanceof Error)){
var e = e81183;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__81184 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__81185 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81184,G__81185) : sci.impl.interpreter.interpret.call(null,G__81184,G__81185));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__81186 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81186,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81186,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e81183;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__81191){
var vec__81192 = p__81191;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81192,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81192,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81196_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81196_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81196_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__81201){
var vec__81202 = p__81201;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81202,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81202,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81202,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81200_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81200_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81200_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__81210,p__81211){
var map__81212 = p__81210;
var map__81212__$1 = (((((!((map__81212 == null))))?(((((map__81212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81212):map__81212);
var ctx = map__81212__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81212__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__81213 = p__81211;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81213,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81209_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81209_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81209_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__81220){
var vec__81221 = p__81220;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81221,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81221,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__81225){
var vec__81226 = p__81225;
var seq__81227 = cljs.core.seq(vec__81226);
var first__81228 = cljs.core.first(seq__81227);
var seq__81227__$1 = cljs.core.next(seq__81227);
var _ = first__81228;
var first__81228__$1 = cljs.core.first(seq__81227__$1);
var seq__81227__$2 = cljs.core.next(seq__81227__$1);
var ns_sym = first__81228__$1;
var exprs = seq__81227__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__81229 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81229,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81229,(1),null);
var G__81232_81927 = k;
var G__81232_81928__$1 = (((G__81232_81927 instanceof cljs.core.Keyword))?G__81232_81927.fqn:null);
switch (G__81232_81928__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__81232_81927,G__81232_81928__$1,vec__81229,k,v,ns_sym__$1,vec__81226,seq__81227,first__81228,seq__81227__$1,_,first__81228__$1,seq__81227__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__81232_81927,G__81232_81928__$1,vec__81229,k,v,ns_sym__$1,vec__81226,seq__81227,first__81228,seq__81227__$1,_,first__81228__$1,seq__81227__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81232_81928__$1)].join('')));

}

var G__81931 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__81931;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__81248){
var vec__81249 = p__81248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81249,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81249,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81249,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__81255 = exprs;
var vec__81256 = G__81255;
var seq__81257 = cljs.core.seq(vec__81256);
var first__81258 = cljs.core.first(seq__81257);
var seq__81257__$1 = cljs.core.next(seq__81257);
var expr = first__81258;
var exprs__$1 = seq__81257__$1;
var G__81255__$1 = G__81255;
while(true){
var vec__81259 = G__81255__$1;
var seq__81260 = cljs.core.seq(vec__81259);
var first__81261 = cljs.core.first(seq__81260);
var seq__81260__$1 = cljs.core.next(seq__81260);
var expr__$1 = first__81261;
var exprs__$2 = seq__81260__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e81262){if((e81262 instanceof Error)){
var e = e81262;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e81262;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__81940 = exprs__$3;
G__81255__$1 = G__81940;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__81455 = cljs.core.count(args);
switch (G__81455) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg81265 = (function (){var G__81456 = ctx;
var G__81457 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81456,G__81457) : sci.impl.interpreter.interpret.call(null,G__81456,G__81457));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg81265) : f.call(null,arg81265));

break;
case (2):
var arg81266 = (function (){var G__81458 = ctx;
var G__81459 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81458,G__81459) : sci.impl.interpreter.interpret.call(null,G__81458,G__81459));
})();
var args__$1 = cljs.core.rest(args);
var arg81267 = (function (){var G__81460 = ctx;
var G__81461 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81460,G__81461) : sci.impl.interpreter.interpret.call(null,G__81460,G__81461));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg81266,arg81267) : f.call(null,arg81266,arg81267));

break;
case (3):
var arg81268 = (function (){var G__81462 = ctx;
var G__81463 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81462,G__81463) : sci.impl.interpreter.interpret.call(null,G__81462,G__81463));
})();
var args__$1 = cljs.core.rest(args);
var arg81269 = (function (){var G__81464 = ctx;
var G__81465 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81464,G__81465) : sci.impl.interpreter.interpret.call(null,G__81464,G__81465));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81270 = (function (){var G__81466 = ctx;
var G__81467 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81466,G__81467) : sci.impl.interpreter.interpret.call(null,G__81466,G__81467));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg81268,arg81269,arg81270) : f.call(null,arg81268,arg81269,arg81270));

break;
case (4):
var arg81271 = (function (){var G__81468 = ctx;
var G__81469 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81468,G__81469) : sci.impl.interpreter.interpret.call(null,G__81468,G__81469));
})();
var args__$1 = cljs.core.rest(args);
var arg81272 = (function (){var G__81470 = ctx;
var G__81471 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81470,G__81471) : sci.impl.interpreter.interpret.call(null,G__81470,G__81471));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81273 = (function (){var G__81472 = ctx;
var G__81473 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81472,G__81473) : sci.impl.interpreter.interpret.call(null,G__81472,G__81473));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81274 = (function (){var G__81474 = ctx;
var G__81475 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81474,G__81475) : sci.impl.interpreter.interpret.call(null,G__81474,G__81475));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg81271,arg81272,arg81273,arg81274) : f.call(null,arg81271,arg81272,arg81273,arg81274));

break;
case (5):
var arg81275 = (function (){var G__81476 = ctx;
var G__81477 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81476,G__81477) : sci.impl.interpreter.interpret.call(null,G__81476,G__81477));
})();
var args__$1 = cljs.core.rest(args);
var arg81276 = (function (){var G__81478 = ctx;
var G__81479 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81478,G__81479) : sci.impl.interpreter.interpret.call(null,G__81478,G__81479));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81277 = (function (){var G__81480 = ctx;
var G__81481 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81480,G__81481) : sci.impl.interpreter.interpret.call(null,G__81480,G__81481));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81278 = (function (){var G__81482 = ctx;
var G__81483 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81482,G__81483) : sci.impl.interpreter.interpret.call(null,G__81482,G__81483));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81279 = (function (){var G__81484 = ctx;
var G__81485 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81484,G__81485) : sci.impl.interpreter.interpret.call(null,G__81484,G__81485));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg81275,arg81276,arg81277,arg81278,arg81279) : f.call(null,arg81275,arg81276,arg81277,arg81278,arg81279));

break;
case (6):
var arg81280 = (function (){var G__81486 = ctx;
var G__81487 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81486,G__81487) : sci.impl.interpreter.interpret.call(null,G__81486,G__81487));
})();
var args__$1 = cljs.core.rest(args);
var arg81281 = (function (){var G__81488 = ctx;
var G__81489 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81488,G__81489) : sci.impl.interpreter.interpret.call(null,G__81488,G__81489));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81282 = (function (){var G__81490 = ctx;
var G__81491 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81490,G__81491) : sci.impl.interpreter.interpret.call(null,G__81490,G__81491));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81283 = (function (){var G__81492 = ctx;
var G__81493 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81492,G__81493) : sci.impl.interpreter.interpret.call(null,G__81492,G__81493));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81284 = (function (){var G__81494 = ctx;
var G__81495 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81494,G__81495) : sci.impl.interpreter.interpret.call(null,G__81494,G__81495));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81285 = (function (){var G__81496 = ctx;
var G__81497 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81496,G__81497) : sci.impl.interpreter.interpret.call(null,G__81496,G__81497));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg81280,arg81281,arg81282,arg81283,arg81284,arg81285) : f.call(null,arg81280,arg81281,arg81282,arg81283,arg81284,arg81285));

break;
case (7):
var arg81286 = (function (){var G__81498 = ctx;
var G__81499 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81498,G__81499) : sci.impl.interpreter.interpret.call(null,G__81498,G__81499));
})();
var args__$1 = cljs.core.rest(args);
var arg81287 = (function (){var G__81500 = ctx;
var G__81501 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81500,G__81501) : sci.impl.interpreter.interpret.call(null,G__81500,G__81501));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81288 = (function (){var G__81502 = ctx;
var G__81503 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81502,G__81503) : sci.impl.interpreter.interpret.call(null,G__81502,G__81503));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81289 = (function (){var G__81504 = ctx;
var G__81505 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81504,G__81505) : sci.impl.interpreter.interpret.call(null,G__81504,G__81505));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81290 = (function (){var G__81506 = ctx;
var G__81507 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81506,G__81507) : sci.impl.interpreter.interpret.call(null,G__81506,G__81507));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81291 = (function (){var G__81508 = ctx;
var G__81509 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81508,G__81509) : sci.impl.interpreter.interpret.call(null,G__81508,G__81509));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81292 = (function (){var G__81510 = ctx;
var G__81511 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81510,G__81511) : sci.impl.interpreter.interpret.call(null,G__81510,G__81511));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg81286,arg81287,arg81288,arg81289,arg81290,arg81291,arg81292) : f.call(null,arg81286,arg81287,arg81288,arg81289,arg81290,arg81291,arg81292));

break;
case (8):
var arg81293 = (function (){var G__81512 = ctx;
var G__81513 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81512,G__81513) : sci.impl.interpreter.interpret.call(null,G__81512,G__81513));
})();
var args__$1 = cljs.core.rest(args);
var arg81294 = (function (){var G__81514 = ctx;
var G__81515 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81514,G__81515) : sci.impl.interpreter.interpret.call(null,G__81514,G__81515));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81295 = (function (){var G__81516 = ctx;
var G__81517 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81516,G__81517) : sci.impl.interpreter.interpret.call(null,G__81516,G__81517));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81296 = (function (){var G__81518 = ctx;
var G__81519 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81518,G__81519) : sci.impl.interpreter.interpret.call(null,G__81518,G__81519));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81297 = (function (){var G__81520 = ctx;
var G__81521 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81520,G__81521) : sci.impl.interpreter.interpret.call(null,G__81520,G__81521));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81298 = (function (){var G__81522 = ctx;
var G__81523 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81522,G__81523) : sci.impl.interpreter.interpret.call(null,G__81522,G__81523));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81299 = (function (){var G__81524 = ctx;
var G__81525 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81524,G__81525) : sci.impl.interpreter.interpret.call(null,G__81524,G__81525));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81300 = (function (){var G__81526 = ctx;
var G__81527 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81526,G__81527) : sci.impl.interpreter.interpret.call(null,G__81526,G__81527));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg81293,arg81294,arg81295,arg81296,arg81297,arg81298,arg81299,arg81300) : f.call(null,arg81293,arg81294,arg81295,arg81296,arg81297,arg81298,arg81299,arg81300));

break;
case (9):
var arg81301 = (function (){var G__81528 = ctx;
var G__81529 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81528,G__81529) : sci.impl.interpreter.interpret.call(null,G__81528,G__81529));
})();
var args__$1 = cljs.core.rest(args);
var arg81302 = (function (){var G__81530 = ctx;
var G__81531 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81530,G__81531) : sci.impl.interpreter.interpret.call(null,G__81530,G__81531));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81303 = (function (){var G__81532 = ctx;
var G__81533 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81532,G__81533) : sci.impl.interpreter.interpret.call(null,G__81532,G__81533));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81304 = (function (){var G__81534 = ctx;
var G__81535 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81534,G__81535) : sci.impl.interpreter.interpret.call(null,G__81534,G__81535));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81305 = (function (){var G__81536 = ctx;
var G__81537 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81536,G__81537) : sci.impl.interpreter.interpret.call(null,G__81536,G__81537));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81306 = (function (){var G__81538 = ctx;
var G__81539 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81538,G__81539) : sci.impl.interpreter.interpret.call(null,G__81538,G__81539));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81307 = (function (){var G__81540 = ctx;
var G__81541 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81540,G__81541) : sci.impl.interpreter.interpret.call(null,G__81540,G__81541));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81308 = (function (){var G__81542 = ctx;
var G__81543 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81542,G__81543) : sci.impl.interpreter.interpret.call(null,G__81542,G__81543));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81309 = (function (){var G__81544 = ctx;
var G__81545 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81544,G__81545) : sci.impl.interpreter.interpret.call(null,G__81544,G__81545));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg81301,arg81302,arg81303,arg81304,arg81305,arg81306,arg81307,arg81308,arg81309) : f.call(null,arg81301,arg81302,arg81303,arg81304,arg81305,arg81306,arg81307,arg81308,arg81309));

break;
case (10):
var arg81310 = (function (){var G__81546 = ctx;
var G__81547 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81546,G__81547) : sci.impl.interpreter.interpret.call(null,G__81546,G__81547));
})();
var args__$1 = cljs.core.rest(args);
var arg81311 = (function (){var G__81548 = ctx;
var G__81549 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81548,G__81549) : sci.impl.interpreter.interpret.call(null,G__81548,G__81549));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81312 = (function (){var G__81550 = ctx;
var G__81551 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81550,G__81551) : sci.impl.interpreter.interpret.call(null,G__81550,G__81551));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81313 = (function (){var G__81552 = ctx;
var G__81553 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81552,G__81553) : sci.impl.interpreter.interpret.call(null,G__81552,G__81553));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81314 = (function (){var G__81554 = ctx;
var G__81555 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81554,G__81555) : sci.impl.interpreter.interpret.call(null,G__81554,G__81555));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81315 = (function (){var G__81556 = ctx;
var G__81557 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81556,G__81557) : sci.impl.interpreter.interpret.call(null,G__81556,G__81557));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81316 = (function (){var G__81558 = ctx;
var G__81559 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81558,G__81559) : sci.impl.interpreter.interpret.call(null,G__81558,G__81559));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81317 = (function (){var G__81560 = ctx;
var G__81561 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81560,G__81561) : sci.impl.interpreter.interpret.call(null,G__81560,G__81561));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81318 = (function (){var G__81562 = ctx;
var G__81563 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81562,G__81563) : sci.impl.interpreter.interpret.call(null,G__81562,G__81563));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81319 = (function (){var G__81564 = ctx;
var G__81565 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81564,G__81565) : sci.impl.interpreter.interpret.call(null,G__81564,G__81565));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg81310,arg81311,arg81312,arg81313,arg81314,arg81315,arg81316,arg81317,arg81318,arg81319) : f.call(null,arg81310,arg81311,arg81312,arg81313,arg81314,arg81315,arg81316,arg81317,arg81318,arg81319));

break;
case (11):
var arg81320 = (function (){var G__81566 = ctx;
var G__81567 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81566,G__81567) : sci.impl.interpreter.interpret.call(null,G__81566,G__81567));
})();
var args__$1 = cljs.core.rest(args);
var arg81321 = (function (){var G__81568 = ctx;
var G__81569 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81568,G__81569) : sci.impl.interpreter.interpret.call(null,G__81568,G__81569));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81322 = (function (){var G__81570 = ctx;
var G__81571 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81570,G__81571) : sci.impl.interpreter.interpret.call(null,G__81570,G__81571));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81323 = (function (){var G__81572 = ctx;
var G__81573 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81572,G__81573) : sci.impl.interpreter.interpret.call(null,G__81572,G__81573));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81324 = (function (){var G__81574 = ctx;
var G__81575 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81574,G__81575) : sci.impl.interpreter.interpret.call(null,G__81574,G__81575));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81325 = (function (){var G__81576 = ctx;
var G__81577 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81576,G__81577) : sci.impl.interpreter.interpret.call(null,G__81576,G__81577));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81326 = (function (){var G__81578 = ctx;
var G__81579 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81578,G__81579) : sci.impl.interpreter.interpret.call(null,G__81578,G__81579));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81327 = (function (){var G__81580 = ctx;
var G__81581 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81580,G__81581) : sci.impl.interpreter.interpret.call(null,G__81580,G__81581));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81328 = (function (){var G__81582 = ctx;
var G__81583 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81582,G__81583) : sci.impl.interpreter.interpret.call(null,G__81582,G__81583));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81329 = (function (){var G__81584 = ctx;
var G__81585 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81584,G__81585) : sci.impl.interpreter.interpret.call(null,G__81584,G__81585));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81330 = (function (){var G__81586 = ctx;
var G__81587 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81586,G__81587) : sci.impl.interpreter.interpret.call(null,G__81586,G__81587));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg81320,arg81321,arg81322,arg81323,arg81324,arg81325,arg81326,arg81327,arg81328,arg81329,arg81330) : f.call(null,arg81320,arg81321,arg81322,arg81323,arg81324,arg81325,arg81326,arg81327,arg81328,arg81329,arg81330));

break;
case (12):
var arg81331 = (function (){var G__81588 = ctx;
var G__81589 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81588,G__81589) : sci.impl.interpreter.interpret.call(null,G__81588,G__81589));
})();
var args__$1 = cljs.core.rest(args);
var arg81332 = (function (){var G__81590 = ctx;
var G__81591 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81590,G__81591) : sci.impl.interpreter.interpret.call(null,G__81590,G__81591));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81333 = (function (){var G__81592 = ctx;
var G__81593 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81592,G__81593) : sci.impl.interpreter.interpret.call(null,G__81592,G__81593));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81334 = (function (){var G__81594 = ctx;
var G__81595 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81594,G__81595) : sci.impl.interpreter.interpret.call(null,G__81594,G__81595));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81335 = (function (){var G__81596 = ctx;
var G__81597 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81596,G__81597) : sci.impl.interpreter.interpret.call(null,G__81596,G__81597));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81336 = (function (){var G__81598 = ctx;
var G__81599 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81598,G__81599) : sci.impl.interpreter.interpret.call(null,G__81598,G__81599));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81337 = (function (){var G__81600 = ctx;
var G__81601 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81600,G__81601) : sci.impl.interpreter.interpret.call(null,G__81600,G__81601));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81338 = (function (){var G__81602 = ctx;
var G__81603 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81602,G__81603) : sci.impl.interpreter.interpret.call(null,G__81602,G__81603));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81339 = (function (){var G__81604 = ctx;
var G__81605 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81604,G__81605) : sci.impl.interpreter.interpret.call(null,G__81604,G__81605));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81340 = (function (){var G__81606 = ctx;
var G__81607 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81606,G__81607) : sci.impl.interpreter.interpret.call(null,G__81606,G__81607));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81341 = (function (){var G__81608 = ctx;
var G__81609 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81608,G__81609) : sci.impl.interpreter.interpret.call(null,G__81608,G__81609));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81342 = (function (){var G__81610 = ctx;
var G__81611 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81610,G__81611) : sci.impl.interpreter.interpret.call(null,G__81610,G__81611));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg81331,arg81332,arg81333,arg81334,arg81335,arg81336,arg81337,arg81338,arg81339,arg81340,arg81341,arg81342) : f.call(null,arg81331,arg81332,arg81333,arg81334,arg81335,arg81336,arg81337,arg81338,arg81339,arg81340,arg81341,arg81342));

break;
case (13):
var arg81343 = (function (){var G__81612 = ctx;
var G__81613 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81612,G__81613) : sci.impl.interpreter.interpret.call(null,G__81612,G__81613));
})();
var args__$1 = cljs.core.rest(args);
var arg81344 = (function (){var G__81614 = ctx;
var G__81615 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81614,G__81615) : sci.impl.interpreter.interpret.call(null,G__81614,G__81615));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81345 = (function (){var G__81616 = ctx;
var G__81617 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81616,G__81617) : sci.impl.interpreter.interpret.call(null,G__81616,G__81617));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81346 = (function (){var G__81618 = ctx;
var G__81619 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81618,G__81619) : sci.impl.interpreter.interpret.call(null,G__81618,G__81619));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81347 = (function (){var G__81620 = ctx;
var G__81621 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81620,G__81621) : sci.impl.interpreter.interpret.call(null,G__81620,G__81621));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81348 = (function (){var G__81622 = ctx;
var G__81623 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81622,G__81623) : sci.impl.interpreter.interpret.call(null,G__81622,G__81623));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81349 = (function (){var G__81624 = ctx;
var G__81625 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81624,G__81625) : sci.impl.interpreter.interpret.call(null,G__81624,G__81625));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81350 = (function (){var G__81626 = ctx;
var G__81627 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81626,G__81627) : sci.impl.interpreter.interpret.call(null,G__81626,G__81627));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81351 = (function (){var G__81628 = ctx;
var G__81629 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81628,G__81629) : sci.impl.interpreter.interpret.call(null,G__81628,G__81629));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81352 = (function (){var G__81630 = ctx;
var G__81631 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81630,G__81631) : sci.impl.interpreter.interpret.call(null,G__81630,G__81631));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81353 = (function (){var G__81632 = ctx;
var G__81633 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81632,G__81633) : sci.impl.interpreter.interpret.call(null,G__81632,G__81633));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81354 = (function (){var G__81634 = ctx;
var G__81635 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81634,G__81635) : sci.impl.interpreter.interpret.call(null,G__81634,G__81635));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81355 = (function (){var G__81636 = ctx;
var G__81637 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81636,G__81637) : sci.impl.interpreter.interpret.call(null,G__81636,G__81637));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg81343,arg81344,arg81345,arg81346,arg81347,arg81348,arg81349,arg81350,arg81351,arg81352,arg81353,arg81354,arg81355) : f.call(null,arg81343,arg81344,arg81345,arg81346,arg81347,arg81348,arg81349,arg81350,arg81351,arg81352,arg81353,arg81354,arg81355));

break;
case (14):
var arg81356 = (function (){var G__81638 = ctx;
var G__81639 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81638,G__81639) : sci.impl.interpreter.interpret.call(null,G__81638,G__81639));
})();
var args__$1 = cljs.core.rest(args);
var arg81357 = (function (){var G__81640 = ctx;
var G__81641 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81640,G__81641) : sci.impl.interpreter.interpret.call(null,G__81640,G__81641));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81358 = (function (){var G__81642 = ctx;
var G__81643 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81642,G__81643) : sci.impl.interpreter.interpret.call(null,G__81642,G__81643));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81359 = (function (){var G__81644 = ctx;
var G__81645 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81644,G__81645) : sci.impl.interpreter.interpret.call(null,G__81644,G__81645));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81360 = (function (){var G__81646 = ctx;
var G__81647 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81646,G__81647) : sci.impl.interpreter.interpret.call(null,G__81646,G__81647));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81361 = (function (){var G__81648 = ctx;
var G__81649 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81648,G__81649) : sci.impl.interpreter.interpret.call(null,G__81648,G__81649));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81362 = (function (){var G__81650 = ctx;
var G__81651 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81650,G__81651) : sci.impl.interpreter.interpret.call(null,G__81650,G__81651));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81363 = (function (){var G__81652 = ctx;
var G__81653 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81652,G__81653) : sci.impl.interpreter.interpret.call(null,G__81652,G__81653));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81364 = (function (){var G__81654 = ctx;
var G__81655 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81654,G__81655) : sci.impl.interpreter.interpret.call(null,G__81654,G__81655));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81365 = (function (){var G__81656 = ctx;
var G__81657 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81656,G__81657) : sci.impl.interpreter.interpret.call(null,G__81656,G__81657));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81366 = (function (){var G__81658 = ctx;
var G__81659 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81658,G__81659) : sci.impl.interpreter.interpret.call(null,G__81658,G__81659));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81367 = (function (){var G__81660 = ctx;
var G__81661 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81660,G__81661) : sci.impl.interpreter.interpret.call(null,G__81660,G__81661));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81368 = (function (){var G__81662 = ctx;
var G__81663 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81662,G__81663) : sci.impl.interpreter.interpret.call(null,G__81662,G__81663));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81369 = (function (){var G__81664 = ctx;
var G__81665 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81664,G__81665) : sci.impl.interpreter.interpret.call(null,G__81664,G__81665));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg81356,arg81357,arg81358,arg81359,arg81360,arg81361,arg81362,arg81363,arg81364,arg81365,arg81366,arg81367,arg81368,arg81369) : f.call(null,arg81356,arg81357,arg81358,arg81359,arg81360,arg81361,arg81362,arg81363,arg81364,arg81365,arg81366,arg81367,arg81368,arg81369));

break;
case (15):
var arg81370 = (function (){var G__81666 = ctx;
var G__81667 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81666,G__81667) : sci.impl.interpreter.interpret.call(null,G__81666,G__81667));
})();
var args__$1 = cljs.core.rest(args);
var arg81371 = (function (){var G__81668 = ctx;
var G__81669 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81668,G__81669) : sci.impl.interpreter.interpret.call(null,G__81668,G__81669));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81372 = (function (){var G__81670 = ctx;
var G__81671 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81670,G__81671) : sci.impl.interpreter.interpret.call(null,G__81670,G__81671));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81373 = (function (){var G__81672 = ctx;
var G__81673 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81672,G__81673) : sci.impl.interpreter.interpret.call(null,G__81672,G__81673));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81374 = (function (){var G__81674 = ctx;
var G__81675 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81674,G__81675) : sci.impl.interpreter.interpret.call(null,G__81674,G__81675));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81375 = (function (){var G__81676 = ctx;
var G__81677 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81676,G__81677) : sci.impl.interpreter.interpret.call(null,G__81676,G__81677));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81376 = (function (){var G__81678 = ctx;
var G__81679 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81678,G__81679) : sci.impl.interpreter.interpret.call(null,G__81678,G__81679));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81377 = (function (){var G__81680 = ctx;
var G__81681 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81680,G__81681) : sci.impl.interpreter.interpret.call(null,G__81680,G__81681));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81378 = (function (){var G__81682 = ctx;
var G__81683 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81682,G__81683) : sci.impl.interpreter.interpret.call(null,G__81682,G__81683));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81379 = (function (){var G__81684 = ctx;
var G__81685 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81684,G__81685) : sci.impl.interpreter.interpret.call(null,G__81684,G__81685));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81380 = (function (){var G__81686 = ctx;
var G__81687 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81686,G__81687) : sci.impl.interpreter.interpret.call(null,G__81686,G__81687));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81381 = (function (){var G__81688 = ctx;
var G__81689 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81688,G__81689) : sci.impl.interpreter.interpret.call(null,G__81688,G__81689));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81382 = (function (){var G__81690 = ctx;
var G__81691 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81690,G__81691) : sci.impl.interpreter.interpret.call(null,G__81690,G__81691));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81383 = (function (){var G__81692 = ctx;
var G__81693 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81692,G__81693) : sci.impl.interpreter.interpret.call(null,G__81692,G__81693));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81384 = (function (){var G__81694 = ctx;
var G__81695 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81694,G__81695) : sci.impl.interpreter.interpret.call(null,G__81694,G__81695));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg81370,arg81371,arg81372,arg81373,arg81374,arg81375,arg81376,arg81377,arg81378,arg81379,arg81380,arg81381,arg81382,arg81383,arg81384) : f.call(null,arg81370,arg81371,arg81372,arg81373,arg81374,arg81375,arg81376,arg81377,arg81378,arg81379,arg81380,arg81381,arg81382,arg81383,arg81384));

break;
case (16):
var arg81385 = (function (){var G__81696 = ctx;
var G__81697 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81696,G__81697) : sci.impl.interpreter.interpret.call(null,G__81696,G__81697));
})();
var args__$1 = cljs.core.rest(args);
var arg81386 = (function (){var G__81698 = ctx;
var G__81699 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81698,G__81699) : sci.impl.interpreter.interpret.call(null,G__81698,G__81699));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81387 = (function (){var G__81700 = ctx;
var G__81701 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81700,G__81701) : sci.impl.interpreter.interpret.call(null,G__81700,G__81701));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81388 = (function (){var G__81702 = ctx;
var G__81703 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81702,G__81703) : sci.impl.interpreter.interpret.call(null,G__81702,G__81703));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81389 = (function (){var G__81704 = ctx;
var G__81705 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81704,G__81705) : sci.impl.interpreter.interpret.call(null,G__81704,G__81705));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81390 = (function (){var G__81706 = ctx;
var G__81707 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81706,G__81707) : sci.impl.interpreter.interpret.call(null,G__81706,G__81707));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81391 = (function (){var G__81708 = ctx;
var G__81709 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81708,G__81709) : sci.impl.interpreter.interpret.call(null,G__81708,G__81709));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81392 = (function (){var G__81710 = ctx;
var G__81711 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81710,G__81711) : sci.impl.interpreter.interpret.call(null,G__81710,G__81711));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81393 = (function (){var G__81712 = ctx;
var G__81713 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81712,G__81713) : sci.impl.interpreter.interpret.call(null,G__81712,G__81713));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81394 = (function (){var G__81714 = ctx;
var G__81715 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81714,G__81715) : sci.impl.interpreter.interpret.call(null,G__81714,G__81715));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81395 = (function (){var G__81716 = ctx;
var G__81717 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81716,G__81717) : sci.impl.interpreter.interpret.call(null,G__81716,G__81717));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81396 = (function (){var G__81718 = ctx;
var G__81719 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81718,G__81719) : sci.impl.interpreter.interpret.call(null,G__81718,G__81719));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81397 = (function (){var G__81720 = ctx;
var G__81721 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81720,G__81721) : sci.impl.interpreter.interpret.call(null,G__81720,G__81721));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81398 = (function (){var G__81722 = ctx;
var G__81723 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81722,G__81723) : sci.impl.interpreter.interpret.call(null,G__81722,G__81723));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81399 = (function (){var G__81724 = ctx;
var G__81725 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81724,G__81725) : sci.impl.interpreter.interpret.call(null,G__81724,G__81725));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81400 = (function (){var G__81726 = ctx;
var G__81727 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81726,G__81727) : sci.impl.interpreter.interpret.call(null,G__81726,G__81727));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg81385,arg81386,arg81387,arg81388,arg81389,arg81390,arg81391,arg81392,arg81393,arg81394,arg81395,arg81396,arg81397,arg81398,arg81399,arg81400) : f.call(null,arg81385,arg81386,arg81387,arg81388,arg81389,arg81390,arg81391,arg81392,arg81393,arg81394,arg81395,arg81396,arg81397,arg81398,arg81399,arg81400));

break;
case (17):
var arg81401 = (function (){var G__81728 = ctx;
var G__81729 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81728,G__81729) : sci.impl.interpreter.interpret.call(null,G__81728,G__81729));
})();
var args__$1 = cljs.core.rest(args);
var arg81402 = (function (){var G__81730 = ctx;
var G__81731 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81730,G__81731) : sci.impl.interpreter.interpret.call(null,G__81730,G__81731));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81403 = (function (){var G__81732 = ctx;
var G__81733 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81732,G__81733) : sci.impl.interpreter.interpret.call(null,G__81732,G__81733));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81404 = (function (){var G__81734 = ctx;
var G__81735 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81734,G__81735) : sci.impl.interpreter.interpret.call(null,G__81734,G__81735));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81405 = (function (){var G__81736 = ctx;
var G__81737 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81736,G__81737) : sci.impl.interpreter.interpret.call(null,G__81736,G__81737));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81406 = (function (){var G__81738 = ctx;
var G__81739 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81738,G__81739) : sci.impl.interpreter.interpret.call(null,G__81738,G__81739));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81407 = (function (){var G__81740 = ctx;
var G__81741 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81740,G__81741) : sci.impl.interpreter.interpret.call(null,G__81740,G__81741));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81408 = (function (){var G__81742 = ctx;
var G__81743 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81742,G__81743) : sci.impl.interpreter.interpret.call(null,G__81742,G__81743));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81409 = (function (){var G__81744 = ctx;
var G__81745 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81744,G__81745) : sci.impl.interpreter.interpret.call(null,G__81744,G__81745));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81410 = (function (){var G__81746 = ctx;
var G__81747 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81746,G__81747) : sci.impl.interpreter.interpret.call(null,G__81746,G__81747));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81411 = (function (){var G__81748 = ctx;
var G__81749 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81748,G__81749) : sci.impl.interpreter.interpret.call(null,G__81748,G__81749));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81412 = (function (){var G__81750 = ctx;
var G__81751 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81750,G__81751) : sci.impl.interpreter.interpret.call(null,G__81750,G__81751));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81413 = (function (){var G__81752 = ctx;
var G__81753 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81752,G__81753) : sci.impl.interpreter.interpret.call(null,G__81752,G__81753));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81414 = (function (){var G__81754 = ctx;
var G__81755 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81754,G__81755) : sci.impl.interpreter.interpret.call(null,G__81754,G__81755));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81415 = (function (){var G__81756 = ctx;
var G__81757 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81756,G__81757) : sci.impl.interpreter.interpret.call(null,G__81756,G__81757));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81416 = (function (){var G__81758 = ctx;
var G__81759 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81758,G__81759) : sci.impl.interpreter.interpret.call(null,G__81758,G__81759));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81417 = (function (){var G__81760 = ctx;
var G__81761 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81760,G__81761) : sci.impl.interpreter.interpret.call(null,G__81760,G__81761));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg81401,arg81402,arg81403,arg81404,arg81405,arg81406,arg81407,arg81408,arg81409,arg81410,arg81411,arg81412,arg81413,arg81414,arg81415,arg81416,arg81417) : f.call(null,arg81401,arg81402,arg81403,arg81404,arg81405,arg81406,arg81407,arg81408,arg81409,arg81410,arg81411,arg81412,arg81413,arg81414,arg81415,arg81416,arg81417));

break;
case (18):
var arg81418 = (function (){var G__81762 = ctx;
var G__81763 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81762,G__81763) : sci.impl.interpreter.interpret.call(null,G__81762,G__81763));
})();
var args__$1 = cljs.core.rest(args);
var arg81419 = (function (){var G__81764 = ctx;
var G__81765 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81764,G__81765) : sci.impl.interpreter.interpret.call(null,G__81764,G__81765));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81420 = (function (){var G__81766 = ctx;
var G__81767 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81766,G__81767) : sci.impl.interpreter.interpret.call(null,G__81766,G__81767));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81421 = (function (){var G__81768 = ctx;
var G__81769 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81768,G__81769) : sci.impl.interpreter.interpret.call(null,G__81768,G__81769));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81422 = (function (){var G__81770 = ctx;
var G__81771 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81770,G__81771) : sci.impl.interpreter.interpret.call(null,G__81770,G__81771));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81423 = (function (){var G__81772 = ctx;
var G__81773 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81772,G__81773) : sci.impl.interpreter.interpret.call(null,G__81772,G__81773));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81424 = (function (){var G__81774 = ctx;
var G__81775 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81774,G__81775) : sci.impl.interpreter.interpret.call(null,G__81774,G__81775));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81425 = (function (){var G__81776 = ctx;
var G__81777 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81776,G__81777) : sci.impl.interpreter.interpret.call(null,G__81776,G__81777));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81426 = (function (){var G__81778 = ctx;
var G__81779 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81778,G__81779) : sci.impl.interpreter.interpret.call(null,G__81778,G__81779));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81427 = (function (){var G__81780 = ctx;
var G__81781 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81780,G__81781) : sci.impl.interpreter.interpret.call(null,G__81780,G__81781));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81428 = (function (){var G__81782 = ctx;
var G__81783 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81782,G__81783) : sci.impl.interpreter.interpret.call(null,G__81782,G__81783));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81429 = (function (){var G__81784 = ctx;
var G__81785 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81784,G__81785) : sci.impl.interpreter.interpret.call(null,G__81784,G__81785));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81430 = (function (){var G__81786 = ctx;
var G__81787 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81786,G__81787) : sci.impl.interpreter.interpret.call(null,G__81786,G__81787));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81431 = (function (){var G__81788 = ctx;
var G__81789 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81788,G__81789) : sci.impl.interpreter.interpret.call(null,G__81788,G__81789));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81432 = (function (){var G__81790 = ctx;
var G__81791 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81790,G__81791) : sci.impl.interpreter.interpret.call(null,G__81790,G__81791));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81433 = (function (){var G__81792 = ctx;
var G__81793 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81792,G__81793) : sci.impl.interpreter.interpret.call(null,G__81792,G__81793));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81434 = (function (){var G__81794 = ctx;
var G__81795 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81794,G__81795) : sci.impl.interpreter.interpret.call(null,G__81794,G__81795));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81435 = (function (){var G__81796 = ctx;
var G__81797 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81796,G__81797) : sci.impl.interpreter.interpret.call(null,G__81796,G__81797));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg81418,arg81419,arg81420,arg81421,arg81422,arg81423,arg81424,arg81425,arg81426,arg81427,arg81428,arg81429,arg81430,arg81431,arg81432,arg81433,arg81434,arg81435) : f.call(null,arg81418,arg81419,arg81420,arg81421,arg81422,arg81423,arg81424,arg81425,arg81426,arg81427,arg81428,arg81429,arg81430,arg81431,arg81432,arg81433,arg81434,arg81435));

break;
case (19):
var arg81436 = (function (){var G__81798 = ctx;
var G__81799 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81798,G__81799) : sci.impl.interpreter.interpret.call(null,G__81798,G__81799));
})();
var args__$1 = cljs.core.rest(args);
var arg81437 = (function (){var G__81800 = ctx;
var G__81801 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81800,G__81801) : sci.impl.interpreter.interpret.call(null,G__81800,G__81801));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81438 = (function (){var G__81802 = ctx;
var G__81803 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81802,G__81803) : sci.impl.interpreter.interpret.call(null,G__81802,G__81803));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81439 = (function (){var G__81804 = ctx;
var G__81805 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81804,G__81805) : sci.impl.interpreter.interpret.call(null,G__81804,G__81805));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81440 = (function (){var G__81806 = ctx;
var G__81807 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81806,G__81807) : sci.impl.interpreter.interpret.call(null,G__81806,G__81807));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81441 = (function (){var G__81808 = ctx;
var G__81809 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81808,G__81809) : sci.impl.interpreter.interpret.call(null,G__81808,G__81809));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81442 = (function (){var G__81810 = ctx;
var G__81811 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81810,G__81811) : sci.impl.interpreter.interpret.call(null,G__81810,G__81811));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81443 = (function (){var G__81812 = ctx;
var G__81813 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81812,G__81813) : sci.impl.interpreter.interpret.call(null,G__81812,G__81813));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81444 = (function (){var G__81814 = ctx;
var G__81815 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81814,G__81815) : sci.impl.interpreter.interpret.call(null,G__81814,G__81815));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81445 = (function (){var G__81816 = ctx;
var G__81817 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81816,G__81817) : sci.impl.interpreter.interpret.call(null,G__81816,G__81817));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81446 = (function (){var G__81818 = ctx;
var G__81819 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81818,G__81819) : sci.impl.interpreter.interpret.call(null,G__81818,G__81819));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81447 = (function (){var G__81820 = ctx;
var G__81821 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81820,G__81821) : sci.impl.interpreter.interpret.call(null,G__81820,G__81821));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81448 = (function (){var G__81822 = ctx;
var G__81823 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81822,G__81823) : sci.impl.interpreter.interpret.call(null,G__81822,G__81823));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81449 = (function (){var G__81824 = ctx;
var G__81825 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81824,G__81825) : sci.impl.interpreter.interpret.call(null,G__81824,G__81825));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81450 = (function (){var G__81826 = ctx;
var G__81827 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81826,G__81827) : sci.impl.interpreter.interpret.call(null,G__81826,G__81827));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81451 = (function (){var G__81828 = ctx;
var G__81829 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81828,G__81829) : sci.impl.interpreter.interpret.call(null,G__81828,G__81829));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81452 = (function (){var G__81830 = ctx;
var G__81831 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81830,G__81831) : sci.impl.interpreter.interpret.call(null,G__81830,G__81831));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81453 = (function (){var G__81832 = ctx;
var G__81833 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81832,G__81833) : sci.impl.interpreter.interpret.call(null,G__81832,G__81833));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg81454 = (function (){var G__81834 = ctx;
var G__81835 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81834,G__81835) : sci.impl.interpreter.interpret.call(null,G__81834,G__81835));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg81436,arg81437,arg81438,arg81439,arg81440,arg81441,arg81442,arg81443,arg81444,arg81445,arg81446,arg81447,arg81448,arg81449,arg81450,arg81451,arg81452,arg81453,arg81454) : f.call(null,arg81436,arg81437,arg81438,arg81439,arg81440,arg81441,arg81442,arg81443,arg81444,arg81445,arg81446,arg81447,arg81448,arg81449,arg81450,arg81451,arg81452,arg81453,arg81454));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__81836 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__81836)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__81836)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__81836)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__81836)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__81836)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__81836)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__81837 = ctx;
var G__81838 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81837,G__81838) : sci.impl.interpreter.interpret.call(null,G__81837,G__81838));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__81836)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__81836)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__81836)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__81836)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__81836)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__81836)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__81836)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__81836)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__81836)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__81839 = ctx;
var G__81840 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81839,G__81840) : sci.impl.interpreter.interpret.call(null,G__81839,G__81840));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__81836)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__81836)){
return (new cljs.core.LazySeq(null,(function (){var G__81841 = ctx;
var G__81842 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81841,G__81842) : sci.impl.interpreter.interpret.call(null,G__81841,G__81842));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__81836)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__81836)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__81836)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__81836)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81836)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__81844 = op;
var G__81845 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81844,G__81845) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81844,G__81845));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e81843){if((e81843 instanceof Error)){
var e = e81843;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e81843;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__81852 = op;
var G__81852__$1 = (((G__81852 instanceof cljs.core.Keyword))?G__81852.fqn:null);
switch (G__81852__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81849_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81849_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81849_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81850_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81850_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81850_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81851_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81851_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81851_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__82127 = cljs.core.rest(exprs);
var G__82128 = (function (){var G__81855 = ctx;
var G__81856 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__81855,G__81856) : sci.impl.interpreter.eval_form.call(null,G__81855,G__81856));
})();
exprs = G__82127;
ret = G__82128;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__81859 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__81860 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__81859,G__81860) : sci.impl.utils.kw_identical_QMARK_.call(null,G__81859,G__81860));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__82132 = ret__$1;
ret = G__82132;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__81862 = arguments.length;
switch (G__81862) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
