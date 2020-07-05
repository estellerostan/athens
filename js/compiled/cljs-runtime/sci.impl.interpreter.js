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
var G__60570 = xs;
args__$2 = G__60570;
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
var G__60574 = xs;
args__$2 = G__60574;
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
var len__4789__auto___60578 = arguments.length;
var i__4790__auto___60579 = (0);
while(true){
if((i__4790__auto___60579 < len__4789__auto___60578)){
args__4795__auto__.push((arguments[i__4790__auto___60579]));

var G__60580 = (i__4790__auto___60579 + (1));
i__4790__auto___60579 = G__60580;
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
var G__60586 = ctx__$2;
var G__60587 = rest_let_bindings;
ctx__$1 = G__60586;
let_bindings__$1 = G__60587;
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
var G__60588 = nexprs;
exprs__$1 = G__60588;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59599){
var G__59600 = cljs.core.first(seq59599);
var seq59599__$1 = cljs.core.next(seq59599);
var G__59601 = cljs.core.first(seq59599__$1);
var seq59599__$2 = cljs.core.next(seq59599__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59600,G__59601,seq59599__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59606){
var vec__59607 = p__59606;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59614 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59615 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59614,G__59615) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59614,G__59615));
})())?(function (){var G__59616 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59616,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59616;
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
var vec__59617 = libspec;
var seq__59618 = cljs.core.seq(vec__59617);
var first__59619 = cljs.core.first(seq__59618);
var seq__59618__$1 = cljs.core.next(seq__59618);
var lib_name = first__59619;
var opts = seq__59618__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59626 = opts;
var vec__59627 = G__59626;
var seq__59628 = cljs.core.seq(vec__59627);
var first__59629 = cljs.core.first(seq__59628);
var seq__59628__$1 = cljs.core.next(seq__59628);
var opt_name = first__59629;
var first__59629__$1 = cljs.core.first(seq__59628__$1);
var seq__59628__$2 = cljs.core.next(seq__59628__$1);
var fst_opt = first__59629__$1;
var rst_opts = seq__59628__$2;
var ret__$1 = ret;
var G__59626__$1 = G__59626;
while(true){
var ret__$2 = ret__$1;
var vec__59637 = G__59626__$1;
var seq__59638 = cljs.core.seq(vec__59637);
var first__59639 = cljs.core.first(seq__59638);
var seq__59638__$1 = cljs.core.next(seq__59638);
var opt_name__$1 = first__59639;
var first__59639__$1 = cljs.core.first(seq__59638__$1);
var seq__59638__$2 = cljs.core.next(seq__59638__$1);
var fst_opt__$1 = first__59639__$1;
var rst_opts__$1 = seq__59638__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59640 = opt_name__$1;
var G__59640__$1 = (((G__59640 instanceof cljs.core.Keyword))?G__59640.fqn:null);
switch (G__59640__$1) {
case "as":
var G__60635 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60636 = rst_opts__$1;
ret__$1 = G__60635;
G__59626__$1 = G__60636;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60638 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60637;
G__59626__$1 = G__60638;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60640 = rst_opts__$1;
ret__$1 = G__60639;
G__59626__$1 = G__60640;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59640__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59641){
var vec__59645 = p__59641;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59645,(1),null);
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
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59648){
var map__59649 = p__59648;
var map__59649__$1 = (((((!((map__59649 == null))))?(((((map__59649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59649):map__59649);
var _parsed_libspec = map__59649__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59649__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59649__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59649__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59649__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59649__$1,new cljs.core.Keyword(null,"only","only",1907811652));
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
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59653 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59654 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59653,G__59654) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59653,G__59654));
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
var vec__59658 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59658,(1),null);
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
var map__59662 = sci.impl.interpreter.parse_libspec(libspec);
var map__59662__$1 = (((((!((map__59662 == null))))?(((((map__59662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59662):map__59662);
var parsed_libspec = map__59662__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59662__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59662__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59664 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59664) : load_fn.call(null,G__59664));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59665 = temp__5733__auto____$2;
var map__59665__$1 = (((((!((map__59665 == null))))?(((((map__59665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59665):map__59665);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59668_60652 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59669_60653 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59668_60652,G__59669_60653) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59668_60652,G__59669_60653));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59667){if((e59667 instanceof Error)){
var e_60654 = e59667;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60654;
} else {
throw e59667;

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
var len__4789__auto___60657 = arguments.length;
var i__4790__auto___60658 = (0);
while(true){
if((i__4790__auto___60658 < len__4789__auto___60657)){
args__4795__auto__.push((arguments[i__4790__auto___60658]));

var G__60659 = (i__4790__auto___60658 + (1));
i__4790__auto___60658 = G__60659;
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
var ret = (function (){var G__59682 = ctx;
var G__59683 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59682,G__59683) : sci.impl.interpreter.interpret.call(null,G__59682,G__59683));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60660 = (function (){var G__59686 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59686,current_libspec);
} else {
return G__59686;
}
})();
var G__60661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60662 = cljs.core.next(args__$1);
libspecs = G__60660;
current_libspec = G__60661;
args__$1 = G__60662;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60663 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60664 = null;
var G__60665 = cljs.core.next(args__$1);
libspecs = G__60663;
current_libspec = G__60664;
args__$1 = G__60665;
continue;
} else {
var G__60666 = (function (){var G__59688 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59688,current_libspec);
} else {
return G__59688;
}
})();
var G__60667 = ret;
var G__60668 = cljs.core.next(args__$1);
libspecs = G__60666;
current_libspec = G__60667;
args__$1 = G__60668;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59689 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59689,current_libspec);
} else {
return G__59689;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59670_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59670_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59671){
var G__59672 = cljs.core.first(seq59671);
var seq59671__$1 = cljs.core.next(seq59671);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59672,seq59671__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60669 = arguments.length;
var i__4790__auto___60670 = (0);
while(true){
if((i__4790__auto___60670 < len__4789__auto___60669)){
args__4795__auto__.push((arguments[i__4790__auto___60670]));

var G__60672 = (i__4790__auto___60670 + (1));
i__4790__auto___60670 = G__60672;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59690){
var G__59691 = cljs.core.first(seq59690);
var seq59690__$1 = cljs.core.next(seq59690);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59691,seq59690__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59692){
var vec__59693 = p__59692;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59693,(0),null);
var map__59696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59693,(1),null);
var map__59696__$1 = (((((!((map__59696 == null))))?(((((map__59696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59696):map__59696);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59696__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59696__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59696__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59698 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59698,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59698,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59705 = ctx;
var G__59706 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59705,G__59706) : sci.impl.interpreter.interpret.call(null,G__59705,G__59706));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59709 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59709__$1 = (((((!((map__59709 == null))))?(((((map__59709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59709):map__59709);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59729 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59730 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59730);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59729);
}}catch (e59711){if((e59711 instanceof Error)){
var e = e59711;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59717 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59718 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59717,G__59718) : sci.impl.interpreter.interpret.call(null,G__59717,G__59718));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59720 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59720,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59720,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59711;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59733){
var vec__59734 = p__59733;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59734,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59734,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59737_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59737_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59737_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59739){
var vec__59740 = p__59739;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59740,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59740,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59740,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59738_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59738_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59738_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59746,p__59747){
var map__59749 = p__59746;
var map__59749__$1 = (((((!((map__59749 == null))))?(((((map__59749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59749):map__59749);
var ctx = map__59749__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59749__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59750 = p__59747;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59750,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59750,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59750,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59750,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59744_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59744_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59744_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59756){
var vec__59757 = p__59756;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59761){
var vec__59763 = p__59761;
var seq__59764 = cljs.core.seq(vec__59763);
var first__59765 = cljs.core.first(seq__59764);
var seq__59764__$1 = cljs.core.next(seq__59764);
var _ = first__59765;
var first__59765__$1 = cljs.core.first(seq__59764__$1);
var seq__59764__$2 = cljs.core.next(seq__59764__$1);
var ns_sym = first__59765__$1;
var exprs = seq__59764__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59766 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59766,(1),null);
var G__59769_60680 = k;
var G__59769_60681__$1 = (((G__59769_60680 instanceof cljs.core.Keyword))?G__59769_60680.fqn:null);
switch (G__59769_60681__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59769_60680,G__59769_60681__$1,vec__59766,k,v,ns_sym__$1,vec__59763,seq__59764,first__59765,seq__59764__$1,_,first__59765__$1,seq__59764__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59769_60680,G__59769_60681__$1,vec__59766,k,v,ns_sym__$1,vec__59763,seq__59764,first__59765,seq__59764__$1,_,first__59765__$1,seq__59764__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59769_60681__$1)].join('')));

}

var G__60683 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60683;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59773){
var vec__59774 = p__59773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59774,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59774,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59774,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59780 = exprs;
var vec__59781 = G__59780;
var seq__59782 = cljs.core.seq(vec__59781);
var first__59783 = cljs.core.first(seq__59782);
var seq__59782__$1 = cljs.core.next(seq__59782);
var expr = first__59783;
var exprs__$1 = seq__59782__$1;
var G__59780__$1 = G__59780;
while(true){
var vec__59790 = G__59780__$1;
var seq__59791 = cljs.core.seq(vec__59790);
var first__59792 = cljs.core.first(seq__59791);
var seq__59791__$1 = cljs.core.next(seq__59791);
var expr__$1 = first__59792;
var exprs__$2 = seq__59791__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59793){if((e59793 instanceof Error)){
var e = e59793;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59793;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60684 = exprs__$3;
G__59780__$1 = G__60684;
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
var G__59999 = cljs.core.count(args);
switch (G__59999) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59808 = (function (){var G__60003 = ctx;
var G__60004 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60003,G__60004) : sci.impl.interpreter.interpret.call(null,G__60003,G__60004));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59808) : f.call(null,arg59808));

break;
case (2):
var arg59809 = (function (){var G__60005 = ctx;
var G__60006 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : sci.impl.interpreter.interpret.call(null,G__60005,G__60006));
})();
var args__$1 = cljs.core.rest(args);
var arg59810 = (function (){var G__60007 = ctx;
var G__60008 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60007,G__60008) : sci.impl.interpreter.interpret.call(null,G__60007,G__60008));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59809,arg59810) : f.call(null,arg59809,arg59810));

break;
case (3):
var arg59811 = (function (){var G__60012 = ctx;
var G__60013 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60012,G__60013) : sci.impl.interpreter.interpret.call(null,G__60012,G__60013));
})();
var args__$1 = cljs.core.rest(args);
var arg59812 = (function (){var G__60014 = ctx;
var G__60015 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60014,G__60015) : sci.impl.interpreter.interpret.call(null,G__60014,G__60015));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59813 = (function (){var G__60016 = ctx;
var G__60017 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60016,G__60017) : sci.impl.interpreter.interpret.call(null,G__60016,G__60017));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59811,arg59812,arg59813) : f.call(null,arg59811,arg59812,arg59813));

break;
case (4):
var arg59814 = (function (){var G__60018 = ctx;
var G__60019 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60018,G__60019) : sci.impl.interpreter.interpret.call(null,G__60018,G__60019));
})();
var args__$1 = cljs.core.rest(args);
var arg59815 = (function (){var G__60021 = ctx;
var G__60022 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60021,G__60022) : sci.impl.interpreter.interpret.call(null,G__60021,G__60022));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59816 = (function (){var G__60023 = ctx;
var G__60024 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60023,G__60024) : sci.impl.interpreter.interpret.call(null,G__60023,G__60024));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59817 = (function (){var G__60051 = ctx;
var G__60052 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60051,G__60052) : sci.impl.interpreter.interpret.call(null,G__60051,G__60052));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59814,arg59815,arg59816,arg59817) : f.call(null,arg59814,arg59815,arg59816,arg59817));

break;
case (5):
var arg59818 = (function (){var G__60057 = ctx;
var G__60058 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60057,G__60058) : sci.impl.interpreter.interpret.call(null,G__60057,G__60058));
})();
var args__$1 = cljs.core.rest(args);
var arg59819 = (function (){var G__60059 = ctx;
var G__60060 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60059,G__60060) : sci.impl.interpreter.interpret.call(null,G__60059,G__60060));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59820 = (function (){var G__60065 = ctx;
var G__60066 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60065,G__60066) : sci.impl.interpreter.interpret.call(null,G__60065,G__60066));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59821 = (function (){var G__60069 = ctx;
var G__60070 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60069,G__60070) : sci.impl.interpreter.interpret.call(null,G__60069,G__60070));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59822 = (function (){var G__60071 = ctx;
var G__60072 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60071,G__60072) : sci.impl.interpreter.interpret.call(null,G__60071,G__60072));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59818,arg59819,arg59820,arg59821,arg59822) : f.call(null,arg59818,arg59819,arg59820,arg59821,arg59822));

break;
case (6):
var arg59823 = (function (){var G__60075 = ctx;
var G__60076 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60075,G__60076) : sci.impl.interpreter.interpret.call(null,G__60075,G__60076));
})();
var args__$1 = cljs.core.rest(args);
var arg59824 = (function (){var G__60078 = ctx;
var G__60079 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60078,G__60079) : sci.impl.interpreter.interpret.call(null,G__60078,G__60079));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59825 = (function (){var G__60080 = ctx;
var G__60081 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60080,G__60081) : sci.impl.interpreter.interpret.call(null,G__60080,G__60081));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59826 = (function (){var G__60084 = ctx;
var G__60085 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60084,G__60085) : sci.impl.interpreter.interpret.call(null,G__60084,G__60085));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59827 = (function (){var G__60086 = ctx;
var G__60087 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60086,G__60087) : sci.impl.interpreter.interpret.call(null,G__60086,G__60087));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59828 = (function (){var G__60088 = ctx;
var G__60089 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60088,G__60089) : sci.impl.interpreter.interpret.call(null,G__60088,G__60089));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59823,arg59824,arg59825,arg59826,arg59827,arg59828) : f.call(null,arg59823,arg59824,arg59825,arg59826,arg59827,arg59828));

break;
case (7):
var arg59829 = (function (){var G__60090 = ctx;
var G__60091 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60090,G__60091) : sci.impl.interpreter.interpret.call(null,G__60090,G__60091));
})();
var args__$1 = cljs.core.rest(args);
var arg59830 = (function (){var G__60092 = ctx;
var G__60093 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60092,G__60093) : sci.impl.interpreter.interpret.call(null,G__60092,G__60093));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59831 = (function (){var G__60094 = ctx;
var G__60095 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60094,G__60095) : sci.impl.interpreter.interpret.call(null,G__60094,G__60095));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59832 = (function (){var G__60096 = ctx;
var G__60097 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60096,G__60097) : sci.impl.interpreter.interpret.call(null,G__60096,G__60097));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59833 = (function (){var G__60098 = ctx;
var G__60099 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60098,G__60099) : sci.impl.interpreter.interpret.call(null,G__60098,G__60099));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59834 = (function (){var G__60100 = ctx;
var G__60101 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60100,G__60101) : sci.impl.interpreter.interpret.call(null,G__60100,G__60101));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59835 = (function (){var G__60102 = ctx;
var G__60103 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60102,G__60103) : sci.impl.interpreter.interpret.call(null,G__60102,G__60103));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59829,arg59830,arg59831,arg59832,arg59833,arg59834,arg59835) : f.call(null,arg59829,arg59830,arg59831,arg59832,arg59833,arg59834,arg59835));

break;
case (8):
var arg59836 = (function (){var G__60112 = ctx;
var G__60113 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60112,G__60113) : sci.impl.interpreter.interpret.call(null,G__60112,G__60113));
})();
var args__$1 = cljs.core.rest(args);
var arg59837 = (function (){var G__60126 = ctx;
var G__60127 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60126,G__60127) : sci.impl.interpreter.interpret.call(null,G__60126,G__60127));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59838 = (function (){var G__60128 = ctx;
var G__60129 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60128,G__60129) : sci.impl.interpreter.interpret.call(null,G__60128,G__60129));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59839 = (function (){var G__60130 = ctx;
var G__60131 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60130,G__60131) : sci.impl.interpreter.interpret.call(null,G__60130,G__60131));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59840 = (function (){var G__60132 = ctx;
var G__60133 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60132,G__60133) : sci.impl.interpreter.interpret.call(null,G__60132,G__60133));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59841 = (function (){var G__60134 = ctx;
var G__60135 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60134,G__60135) : sci.impl.interpreter.interpret.call(null,G__60134,G__60135));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59842 = (function (){var G__60136 = ctx;
var G__60137 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60136,G__60137) : sci.impl.interpreter.interpret.call(null,G__60136,G__60137));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59843 = (function (){var G__60138 = ctx;
var G__60139 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60138,G__60139) : sci.impl.interpreter.interpret.call(null,G__60138,G__60139));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59836,arg59837,arg59838,arg59839,arg59840,arg59841,arg59842,arg59843) : f.call(null,arg59836,arg59837,arg59838,arg59839,arg59840,arg59841,arg59842,arg59843));

break;
case (9):
var arg59844 = (function (){var G__60140 = ctx;
var G__60141 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60140,G__60141) : sci.impl.interpreter.interpret.call(null,G__60140,G__60141));
})();
var args__$1 = cljs.core.rest(args);
var arg59845 = (function (){var G__60142 = ctx;
var G__60143 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60142,G__60143) : sci.impl.interpreter.interpret.call(null,G__60142,G__60143));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59846 = (function (){var G__60144 = ctx;
var G__60145 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60144,G__60145) : sci.impl.interpreter.interpret.call(null,G__60144,G__60145));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59847 = (function (){var G__60146 = ctx;
var G__60147 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60146,G__60147) : sci.impl.interpreter.interpret.call(null,G__60146,G__60147));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59848 = (function (){var G__60148 = ctx;
var G__60149 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60148,G__60149) : sci.impl.interpreter.interpret.call(null,G__60148,G__60149));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59849 = (function (){var G__60150 = ctx;
var G__60151 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60150,G__60151) : sci.impl.interpreter.interpret.call(null,G__60150,G__60151));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59850 = (function (){var G__60152 = ctx;
var G__60153 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60152,G__60153) : sci.impl.interpreter.interpret.call(null,G__60152,G__60153));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59851 = (function (){var G__60174 = ctx;
var G__60175 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60174,G__60175) : sci.impl.interpreter.interpret.call(null,G__60174,G__60175));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59852 = (function (){var G__60176 = ctx;
var G__60177 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60176,G__60177) : sci.impl.interpreter.interpret.call(null,G__60176,G__60177));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59844,arg59845,arg59846,arg59847,arg59848,arg59849,arg59850,arg59851,arg59852) : f.call(null,arg59844,arg59845,arg59846,arg59847,arg59848,arg59849,arg59850,arg59851,arg59852));

break;
case (10):
var arg59853 = (function (){var G__60178 = ctx;
var G__60179 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60178,G__60179) : sci.impl.interpreter.interpret.call(null,G__60178,G__60179));
})();
var args__$1 = cljs.core.rest(args);
var arg59854 = (function (){var G__60180 = ctx;
var G__60181 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60180,G__60181) : sci.impl.interpreter.interpret.call(null,G__60180,G__60181));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59855 = (function (){var G__60182 = ctx;
var G__60183 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60182,G__60183) : sci.impl.interpreter.interpret.call(null,G__60182,G__60183));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59856 = (function (){var G__60184 = ctx;
var G__60185 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60184,G__60185) : sci.impl.interpreter.interpret.call(null,G__60184,G__60185));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59857 = (function (){var G__60186 = ctx;
var G__60187 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60186,G__60187) : sci.impl.interpreter.interpret.call(null,G__60186,G__60187));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59858 = (function (){var G__60188 = ctx;
var G__60189 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60188,G__60189) : sci.impl.interpreter.interpret.call(null,G__60188,G__60189));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59859 = (function (){var G__60190 = ctx;
var G__60191 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60190,G__60191) : sci.impl.interpreter.interpret.call(null,G__60190,G__60191));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59860 = (function (){var G__60192 = ctx;
var G__60193 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60192,G__60193) : sci.impl.interpreter.interpret.call(null,G__60192,G__60193));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59861 = (function (){var G__60194 = ctx;
var G__60195 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60194,G__60195) : sci.impl.interpreter.interpret.call(null,G__60194,G__60195));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59862 = (function (){var G__60196 = ctx;
var G__60197 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60196,G__60197) : sci.impl.interpreter.interpret.call(null,G__60196,G__60197));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59853,arg59854,arg59855,arg59856,arg59857,arg59858,arg59859,arg59860,arg59861,arg59862) : f.call(null,arg59853,arg59854,arg59855,arg59856,arg59857,arg59858,arg59859,arg59860,arg59861,arg59862));

break;
case (11):
var arg59863 = (function (){var G__60198 = ctx;
var G__60199 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60198,G__60199) : sci.impl.interpreter.interpret.call(null,G__60198,G__60199));
})();
var args__$1 = cljs.core.rest(args);
var arg59864 = (function (){var G__60200 = ctx;
var G__60201 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60200,G__60201) : sci.impl.interpreter.interpret.call(null,G__60200,G__60201));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59865 = (function (){var G__60202 = ctx;
var G__60203 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60202,G__60203) : sci.impl.interpreter.interpret.call(null,G__60202,G__60203));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59866 = (function (){var G__60204 = ctx;
var G__60205 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60204,G__60205) : sci.impl.interpreter.interpret.call(null,G__60204,G__60205));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59867 = (function (){var G__60206 = ctx;
var G__60207 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60206,G__60207) : sci.impl.interpreter.interpret.call(null,G__60206,G__60207));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59868 = (function (){var G__60208 = ctx;
var G__60209 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60208,G__60209) : sci.impl.interpreter.interpret.call(null,G__60208,G__60209));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59869 = (function (){var G__60213 = ctx;
var G__60214 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60213,G__60214) : sci.impl.interpreter.interpret.call(null,G__60213,G__60214));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59870 = (function (){var G__60215 = ctx;
var G__60216 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60215,G__60216) : sci.impl.interpreter.interpret.call(null,G__60215,G__60216));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59871 = (function (){var G__60220 = ctx;
var G__60221 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60220,G__60221) : sci.impl.interpreter.interpret.call(null,G__60220,G__60221));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59872 = (function (){var G__60228 = ctx;
var G__60229 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60228,G__60229) : sci.impl.interpreter.interpret.call(null,G__60228,G__60229));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59873 = (function (){var G__60230 = ctx;
var G__60231 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60230,G__60231) : sci.impl.interpreter.interpret.call(null,G__60230,G__60231));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59863,arg59864,arg59865,arg59866,arg59867,arg59868,arg59869,arg59870,arg59871,arg59872,arg59873) : f.call(null,arg59863,arg59864,arg59865,arg59866,arg59867,arg59868,arg59869,arg59870,arg59871,arg59872,arg59873));

break;
case (12):
var arg59874 = (function (){var G__60232 = ctx;
var G__60233 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60232,G__60233) : sci.impl.interpreter.interpret.call(null,G__60232,G__60233));
})();
var args__$1 = cljs.core.rest(args);
var arg59875 = (function (){var G__60234 = ctx;
var G__60235 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60234,G__60235) : sci.impl.interpreter.interpret.call(null,G__60234,G__60235));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59876 = (function (){var G__60236 = ctx;
var G__60237 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60236,G__60237) : sci.impl.interpreter.interpret.call(null,G__60236,G__60237));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59877 = (function (){var G__60238 = ctx;
var G__60239 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60238,G__60239) : sci.impl.interpreter.interpret.call(null,G__60238,G__60239));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59878 = (function (){var G__60240 = ctx;
var G__60241 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60240,G__60241) : sci.impl.interpreter.interpret.call(null,G__60240,G__60241));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59879 = (function (){var G__60242 = ctx;
var G__60243 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60242,G__60243) : sci.impl.interpreter.interpret.call(null,G__60242,G__60243));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59880 = (function (){var G__60244 = ctx;
var G__60245 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60244,G__60245) : sci.impl.interpreter.interpret.call(null,G__60244,G__60245));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59881 = (function (){var G__60246 = ctx;
var G__60247 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60246,G__60247) : sci.impl.interpreter.interpret.call(null,G__60246,G__60247));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59882 = (function (){var G__60248 = ctx;
var G__60249 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60248,G__60249) : sci.impl.interpreter.interpret.call(null,G__60248,G__60249));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59883 = (function (){var G__60250 = ctx;
var G__60251 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60250,G__60251) : sci.impl.interpreter.interpret.call(null,G__60250,G__60251));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59884 = (function (){var G__60252 = ctx;
var G__60253 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60252,G__60253) : sci.impl.interpreter.interpret.call(null,G__60252,G__60253));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59885 = (function (){var G__60254 = ctx;
var G__60255 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60254,G__60255) : sci.impl.interpreter.interpret.call(null,G__60254,G__60255));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59874,arg59875,arg59876,arg59877,arg59878,arg59879,arg59880,arg59881,arg59882,arg59883,arg59884,arg59885) : f.call(null,arg59874,arg59875,arg59876,arg59877,arg59878,arg59879,arg59880,arg59881,arg59882,arg59883,arg59884,arg59885));

break;
case (13):
var arg59886 = (function (){var G__60256 = ctx;
var G__60257 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60256,G__60257) : sci.impl.interpreter.interpret.call(null,G__60256,G__60257));
})();
var args__$1 = cljs.core.rest(args);
var arg59887 = (function (){var G__60258 = ctx;
var G__60259 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60258,G__60259) : sci.impl.interpreter.interpret.call(null,G__60258,G__60259));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59888 = (function (){var G__60260 = ctx;
var G__60261 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60260,G__60261) : sci.impl.interpreter.interpret.call(null,G__60260,G__60261));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59889 = (function (){var G__60262 = ctx;
var G__60263 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60262,G__60263) : sci.impl.interpreter.interpret.call(null,G__60262,G__60263));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59890 = (function (){var G__60264 = ctx;
var G__60265 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60264,G__60265) : sci.impl.interpreter.interpret.call(null,G__60264,G__60265));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59891 = (function (){var G__60266 = ctx;
var G__60267 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60266,G__60267) : sci.impl.interpreter.interpret.call(null,G__60266,G__60267));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59892 = (function (){var G__60268 = ctx;
var G__60269 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60268,G__60269) : sci.impl.interpreter.interpret.call(null,G__60268,G__60269));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59893 = (function (){var G__60270 = ctx;
var G__60271 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60270,G__60271) : sci.impl.interpreter.interpret.call(null,G__60270,G__60271));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59894 = (function (){var G__60272 = ctx;
var G__60273 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60272,G__60273) : sci.impl.interpreter.interpret.call(null,G__60272,G__60273));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59895 = (function (){var G__60274 = ctx;
var G__60275 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60274,G__60275) : sci.impl.interpreter.interpret.call(null,G__60274,G__60275));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59896 = (function (){var G__60276 = ctx;
var G__60277 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60276,G__60277) : sci.impl.interpreter.interpret.call(null,G__60276,G__60277));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59897 = (function (){var G__60278 = ctx;
var G__60279 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60278,G__60279) : sci.impl.interpreter.interpret.call(null,G__60278,G__60279));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59898 = (function (){var G__60284 = ctx;
var G__60285 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60284,G__60285) : sci.impl.interpreter.interpret.call(null,G__60284,G__60285));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59886,arg59887,arg59888,arg59889,arg59890,arg59891,arg59892,arg59893,arg59894,arg59895,arg59896,arg59897,arg59898) : f.call(null,arg59886,arg59887,arg59888,arg59889,arg59890,arg59891,arg59892,arg59893,arg59894,arg59895,arg59896,arg59897,arg59898));

break;
case (14):
var arg59899 = (function (){var G__60287 = ctx;
var G__60288 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60287,G__60288) : sci.impl.interpreter.interpret.call(null,G__60287,G__60288));
})();
var args__$1 = cljs.core.rest(args);
var arg59900 = (function (){var G__60289 = ctx;
var G__60290 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60289,G__60290) : sci.impl.interpreter.interpret.call(null,G__60289,G__60290));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59901 = (function (){var G__60291 = ctx;
var G__60292 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60291,G__60292) : sci.impl.interpreter.interpret.call(null,G__60291,G__60292));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59902 = (function (){var G__60293 = ctx;
var G__60294 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60293,G__60294) : sci.impl.interpreter.interpret.call(null,G__60293,G__60294));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59903 = (function (){var G__60295 = ctx;
var G__60296 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60295,G__60296) : sci.impl.interpreter.interpret.call(null,G__60295,G__60296));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59904 = (function (){var G__60297 = ctx;
var G__60298 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60297,G__60298) : sci.impl.interpreter.interpret.call(null,G__60297,G__60298));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59905 = (function (){var G__60299 = ctx;
var G__60300 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60299,G__60300) : sci.impl.interpreter.interpret.call(null,G__60299,G__60300));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59906 = (function (){var G__60301 = ctx;
var G__60302 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60301,G__60302) : sci.impl.interpreter.interpret.call(null,G__60301,G__60302));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59907 = (function (){var G__60303 = ctx;
var G__60304 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60303,G__60304) : sci.impl.interpreter.interpret.call(null,G__60303,G__60304));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59908 = (function (){var G__60305 = ctx;
var G__60306 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60305,G__60306) : sci.impl.interpreter.interpret.call(null,G__60305,G__60306));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59909 = (function (){var G__60307 = ctx;
var G__60308 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60307,G__60308) : sci.impl.interpreter.interpret.call(null,G__60307,G__60308));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59910 = (function (){var G__60309 = ctx;
var G__60310 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60309,G__60310) : sci.impl.interpreter.interpret.call(null,G__60309,G__60310));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59911 = (function (){var G__60316 = ctx;
var G__60317 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60316,G__60317) : sci.impl.interpreter.interpret.call(null,G__60316,G__60317));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59912 = (function (){var G__60318 = ctx;
var G__60319 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60318,G__60319) : sci.impl.interpreter.interpret.call(null,G__60318,G__60319));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59899,arg59900,arg59901,arg59902,arg59903,arg59904,arg59905,arg59906,arg59907,arg59908,arg59909,arg59910,arg59911,arg59912) : f.call(null,arg59899,arg59900,arg59901,arg59902,arg59903,arg59904,arg59905,arg59906,arg59907,arg59908,arg59909,arg59910,arg59911,arg59912));

break;
case (15):
var arg59913 = (function (){var G__60320 = ctx;
var G__60321 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60320,G__60321) : sci.impl.interpreter.interpret.call(null,G__60320,G__60321));
})();
var args__$1 = cljs.core.rest(args);
var arg59914 = (function (){var G__60322 = ctx;
var G__60323 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60322,G__60323) : sci.impl.interpreter.interpret.call(null,G__60322,G__60323));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59915 = (function (){var G__60324 = ctx;
var G__60325 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60324,G__60325) : sci.impl.interpreter.interpret.call(null,G__60324,G__60325));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59916 = (function (){var G__60326 = ctx;
var G__60327 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60326,G__60327) : sci.impl.interpreter.interpret.call(null,G__60326,G__60327));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59917 = (function (){var G__60328 = ctx;
var G__60329 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60328,G__60329) : sci.impl.interpreter.interpret.call(null,G__60328,G__60329));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59918 = (function (){var G__60330 = ctx;
var G__60331 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60330,G__60331) : sci.impl.interpreter.interpret.call(null,G__60330,G__60331));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59919 = (function (){var G__60332 = ctx;
var G__60333 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60332,G__60333) : sci.impl.interpreter.interpret.call(null,G__60332,G__60333));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59920 = (function (){var G__60334 = ctx;
var G__60335 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60334,G__60335) : sci.impl.interpreter.interpret.call(null,G__60334,G__60335));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59921 = (function (){var G__60336 = ctx;
var G__60337 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60336,G__60337) : sci.impl.interpreter.interpret.call(null,G__60336,G__60337));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59922 = (function (){var G__60338 = ctx;
var G__60339 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60338,G__60339) : sci.impl.interpreter.interpret.call(null,G__60338,G__60339));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59923 = (function (){var G__60340 = ctx;
var G__60341 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60340,G__60341) : sci.impl.interpreter.interpret.call(null,G__60340,G__60341));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59924 = (function (){var G__60342 = ctx;
var G__60343 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60342,G__60343) : sci.impl.interpreter.interpret.call(null,G__60342,G__60343));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59925 = (function (){var G__60344 = ctx;
var G__60345 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60344,G__60345) : sci.impl.interpreter.interpret.call(null,G__60344,G__60345));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59926 = (function (){var G__60346 = ctx;
var G__60347 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60346,G__60347) : sci.impl.interpreter.interpret.call(null,G__60346,G__60347));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59927 = (function (){var G__60348 = ctx;
var G__60349 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60348,G__60349) : sci.impl.interpreter.interpret.call(null,G__60348,G__60349));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59913,arg59914,arg59915,arg59916,arg59917,arg59918,arg59919,arg59920,arg59921,arg59922,arg59923,arg59924,arg59925,arg59926,arg59927) : f.call(null,arg59913,arg59914,arg59915,arg59916,arg59917,arg59918,arg59919,arg59920,arg59921,arg59922,arg59923,arg59924,arg59925,arg59926,arg59927));

break;
case (16):
var arg59928 = (function (){var G__60350 = ctx;
var G__60351 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60350,G__60351) : sci.impl.interpreter.interpret.call(null,G__60350,G__60351));
})();
var args__$1 = cljs.core.rest(args);
var arg59929 = (function (){var G__60352 = ctx;
var G__60353 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60352,G__60353) : sci.impl.interpreter.interpret.call(null,G__60352,G__60353));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59930 = (function (){var G__60354 = ctx;
var G__60355 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60354,G__60355) : sci.impl.interpreter.interpret.call(null,G__60354,G__60355));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59931 = (function (){var G__60356 = ctx;
var G__60357 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60356,G__60357) : sci.impl.interpreter.interpret.call(null,G__60356,G__60357));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59932 = (function (){var G__60358 = ctx;
var G__60359 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60358,G__60359) : sci.impl.interpreter.interpret.call(null,G__60358,G__60359));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59933 = (function (){var G__60360 = ctx;
var G__60361 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60360,G__60361) : sci.impl.interpreter.interpret.call(null,G__60360,G__60361));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59934 = (function (){var G__60362 = ctx;
var G__60363 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60362,G__60363) : sci.impl.interpreter.interpret.call(null,G__60362,G__60363));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59935 = (function (){var G__60364 = ctx;
var G__60365 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60364,G__60365) : sci.impl.interpreter.interpret.call(null,G__60364,G__60365));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59936 = (function (){var G__60366 = ctx;
var G__60367 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60366,G__60367) : sci.impl.interpreter.interpret.call(null,G__60366,G__60367));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59937 = (function (){var G__60368 = ctx;
var G__60369 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60368,G__60369) : sci.impl.interpreter.interpret.call(null,G__60368,G__60369));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59938 = (function (){var G__60370 = ctx;
var G__60371 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60370,G__60371) : sci.impl.interpreter.interpret.call(null,G__60370,G__60371));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59939 = (function (){var G__60372 = ctx;
var G__60373 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60372,G__60373) : sci.impl.interpreter.interpret.call(null,G__60372,G__60373));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59940 = (function (){var G__60374 = ctx;
var G__60375 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60374,G__60375) : sci.impl.interpreter.interpret.call(null,G__60374,G__60375));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59941 = (function (){var G__60376 = ctx;
var G__60377 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60376,G__60377) : sci.impl.interpreter.interpret.call(null,G__60376,G__60377));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59942 = (function (){var G__60378 = ctx;
var G__60379 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60378,G__60379) : sci.impl.interpreter.interpret.call(null,G__60378,G__60379));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59943 = (function (){var G__60380 = ctx;
var G__60381 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60380,G__60381) : sci.impl.interpreter.interpret.call(null,G__60380,G__60381));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59928,arg59929,arg59930,arg59931,arg59932,arg59933,arg59934,arg59935,arg59936,arg59937,arg59938,arg59939,arg59940,arg59941,arg59942,arg59943) : f.call(null,arg59928,arg59929,arg59930,arg59931,arg59932,arg59933,arg59934,arg59935,arg59936,arg59937,arg59938,arg59939,arg59940,arg59941,arg59942,arg59943));

break;
case (17):
var arg59944 = (function (){var G__60383 = ctx;
var G__60384 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60383,G__60384) : sci.impl.interpreter.interpret.call(null,G__60383,G__60384));
})();
var args__$1 = cljs.core.rest(args);
var arg59945 = (function (){var G__60385 = ctx;
var G__60386 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60385,G__60386) : sci.impl.interpreter.interpret.call(null,G__60385,G__60386));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59946 = (function (){var G__60387 = ctx;
var G__60388 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60387,G__60388) : sci.impl.interpreter.interpret.call(null,G__60387,G__60388));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59947 = (function (){var G__60389 = ctx;
var G__60390 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60389,G__60390) : sci.impl.interpreter.interpret.call(null,G__60389,G__60390));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59948 = (function (){var G__60391 = ctx;
var G__60392 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60391,G__60392) : sci.impl.interpreter.interpret.call(null,G__60391,G__60392));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59949 = (function (){var G__60393 = ctx;
var G__60394 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60393,G__60394) : sci.impl.interpreter.interpret.call(null,G__60393,G__60394));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59950 = (function (){var G__60395 = ctx;
var G__60396 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60395,G__60396) : sci.impl.interpreter.interpret.call(null,G__60395,G__60396));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59951 = (function (){var G__60397 = ctx;
var G__60398 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60397,G__60398) : sci.impl.interpreter.interpret.call(null,G__60397,G__60398));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59952 = (function (){var G__60399 = ctx;
var G__60400 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60399,G__60400) : sci.impl.interpreter.interpret.call(null,G__60399,G__60400));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59953 = (function (){var G__60401 = ctx;
var G__60402 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60401,G__60402) : sci.impl.interpreter.interpret.call(null,G__60401,G__60402));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59954 = (function (){var G__60403 = ctx;
var G__60404 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60403,G__60404) : sci.impl.interpreter.interpret.call(null,G__60403,G__60404));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59955 = (function (){var G__60405 = ctx;
var G__60406 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60405,G__60406) : sci.impl.interpreter.interpret.call(null,G__60405,G__60406));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59956 = (function (){var G__60410 = ctx;
var G__60411 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60410,G__60411) : sci.impl.interpreter.interpret.call(null,G__60410,G__60411));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59957 = (function (){var G__60414 = ctx;
var G__60415 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60414,G__60415) : sci.impl.interpreter.interpret.call(null,G__60414,G__60415));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59958 = (function (){var G__60416 = ctx;
var G__60417 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60416,G__60417) : sci.impl.interpreter.interpret.call(null,G__60416,G__60417));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59959 = (function (){var G__60418 = ctx;
var G__60419 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60418,G__60419) : sci.impl.interpreter.interpret.call(null,G__60418,G__60419));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59960 = (function (){var G__60420 = ctx;
var G__60421 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60420,G__60421) : sci.impl.interpreter.interpret.call(null,G__60420,G__60421));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59944,arg59945,arg59946,arg59947,arg59948,arg59949,arg59950,arg59951,arg59952,arg59953,arg59954,arg59955,arg59956,arg59957,arg59958,arg59959,arg59960) : f.call(null,arg59944,arg59945,arg59946,arg59947,arg59948,arg59949,arg59950,arg59951,arg59952,arg59953,arg59954,arg59955,arg59956,arg59957,arg59958,arg59959,arg59960));

break;
case (18):
var arg59961 = (function (){var G__60422 = ctx;
var G__60423 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60422,G__60423) : sci.impl.interpreter.interpret.call(null,G__60422,G__60423));
})();
var args__$1 = cljs.core.rest(args);
var arg59962 = (function (){var G__60424 = ctx;
var G__60425 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60424,G__60425) : sci.impl.interpreter.interpret.call(null,G__60424,G__60425));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59963 = (function (){var G__60426 = ctx;
var G__60427 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60426,G__60427) : sci.impl.interpreter.interpret.call(null,G__60426,G__60427));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59964 = (function (){var G__60428 = ctx;
var G__60429 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60428,G__60429) : sci.impl.interpreter.interpret.call(null,G__60428,G__60429));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59965 = (function (){var G__60431 = ctx;
var G__60432 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60431,G__60432) : sci.impl.interpreter.interpret.call(null,G__60431,G__60432));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59966 = (function (){var G__60433 = ctx;
var G__60434 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60433,G__60434) : sci.impl.interpreter.interpret.call(null,G__60433,G__60434));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59967 = (function (){var G__60435 = ctx;
var G__60436 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60435,G__60436) : sci.impl.interpreter.interpret.call(null,G__60435,G__60436));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59968 = (function (){var G__60437 = ctx;
var G__60438 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60437,G__60438) : sci.impl.interpreter.interpret.call(null,G__60437,G__60438));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59969 = (function (){var G__60439 = ctx;
var G__60440 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60439,G__60440) : sci.impl.interpreter.interpret.call(null,G__60439,G__60440));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59970 = (function (){var G__60441 = ctx;
var G__60442 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60441,G__60442) : sci.impl.interpreter.interpret.call(null,G__60441,G__60442));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59971 = (function (){var G__60443 = ctx;
var G__60444 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60443,G__60444) : sci.impl.interpreter.interpret.call(null,G__60443,G__60444));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59972 = (function (){var G__60449 = ctx;
var G__60450 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60449,G__60450) : sci.impl.interpreter.interpret.call(null,G__60449,G__60450));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59973 = (function (){var G__60451 = ctx;
var G__60452 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60451,G__60452) : sci.impl.interpreter.interpret.call(null,G__60451,G__60452));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59974 = (function (){var G__60453 = ctx;
var G__60454 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60453,G__60454) : sci.impl.interpreter.interpret.call(null,G__60453,G__60454));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59975 = (function (){var G__60455 = ctx;
var G__60456 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60455,G__60456) : sci.impl.interpreter.interpret.call(null,G__60455,G__60456));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59976 = (function (){var G__60457 = ctx;
var G__60458 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60457,G__60458) : sci.impl.interpreter.interpret.call(null,G__60457,G__60458));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59977 = (function (){var G__60468 = ctx;
var G__60469 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60468,G__60469) : sci.impl.interpreter.interpret.call(null,G__60468,G__60469));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59978 = (function (){var G__60471 = ctx;
var G__60472 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60471,G__60472) : sci.impl.interpreter.interpret.call(null,G__60471,G__60472));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59961,arg59962,arg59963,arg59964,arg59965,arg59966,arg59967,arg59968,arg59969,arg59970,arg59971,arg59972,arg59973,arg59974,arg59975,arg59976,arg59977,arg59978) : f.call(null,arg59961,arg59962,arg59963,arg59964,arg59965,arg59966,arg59967,arg59968,arg59969,arg59970,arg59971,arg59972,arg59973,arg59974,arg59975,arg59976,arg59977,arg59978));

break;
case (19):
var arg59979 = (function (){var G__60473 = ctx;
var G__60474 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60473,G__60474) : sci.impl.interpreter.interpret.call(null,G__60473,G__60474));
})();
var args__$1 = cljs.core.rest(args);
var arg59980 = (function (){var G__60475 = ctx;
var G__60476 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60475,G__60476) : sci.impl.interpreter.interpret.call(null,G__60475,G__60476));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59981 = (function (){var G__60477 = ctx;
var G__60478 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60477,G__60478) : sci.impl.interpreter.interpret.call(null,G__60477,G__60478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59982 = (function (){var G__60482 = ctx;
var G__60483 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60482,G__60483) : sci.impl.interpreter.interpret.call(null,G__60482,G__60483));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59983 = (function (){var G__60484 = ctx;
var G__60485 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60484,G__60485) : sci.impl.interpreter.interpret.call(null,G__60484,G__60485));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59984 = (function (){var G__60486 = ctx;
var G__60487 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60486,G__60487) : sci.impl.interpreter.interpret.call(null,G__60486,G__60487));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59985 = (function (){var G__60494 = ctx;
var G__60495 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60494,G__60495) : sci.impl.interpreter.interpret.call(null,G__60494,G__60495));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59986 = (function (){var G__60497 = ctx;
var G__60498 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60497,G__60498) : sci.impl.interpreter.interpret.call(null,G__60497,G__60498));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59987 = (function (){var G__60500 = ctx;
var G__60501 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60500,G__60501) : sci.impl.interpreter.interpret.call(null,G__60500,G__60501));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59988 = (function (){var G__60502 = ctx;
var G__60503 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60502,G__60503) : sci.impl.interpreter.interpret.call(null,G__60502,G__60503));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59989 = (function (){var G__60504 = ctx;
var G__60505 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60504,G__60505) : sci.impl.interpreter.interpret.call(null,G__60504,G__60505));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59990 = (function (){var G__60506 = ctx;
var G__60507 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60506,G__60507) : sci.impl.interpreter.interpret.call(null,G__60506,G__60507));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59991 = (function (){var G__60509 = ctx;
var G__60510 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60509,G__60510) : sci.impl.interpreter.interpret.call(null,G__60509,G__60510));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59992 = (function (){var G__60513 = ctx;
var G__60514 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60513,G__60514) : sci.impl.interpreter.interpret.call(null,G__60513,G__60514));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59993 = (function (){var G__60515 = ctx;
var G__60516 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60515,G__60516) : sci.impl.interpreter.interpret.call(null,G__60515,G__60516));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59994 = (function (){var G__60517 = ctx;
var G__60518 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60517,G__60518) : sci.impl.interpreter.interpret.call(null,G__60517,G__60518));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59995 = (function (){var G__60520 = ctx;
var G__60521 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60520,G__60521) : sci.impl.interpreter.interpret.call(null,G__60520,G__60521));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59996 = (function (){var G__60522 = ctx;
var G__60523 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60522,G__60523) : sci.impl.interpreter.interpret.call(null,G__60522,G__60523));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59997 = (function (){var G__60524 = ctx;
var G__60525 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60524,G__60525) : sci.impl.interpreter.interpret.call(null,G__60524,G__60525));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59979,arg59980,arg59981,arg59982,arg59983,arg59984,arg59985,arg59986,arg59987,arg59988,arg59989,arg59990,arg59991,arg59992,arg59993,arg59994,arg59995,arg59996,arg59997) : f.call(null,arg59979,arg59980,arg59981,arg59982,arg59983,arg59984,arg59985,arg59986,arg59987,arg59988,arg59989,arg59990,arg59991,arg59992,arg59993,arg59994,arg59995,arg59996,arg59997));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60526 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60526)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60526)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60526)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60526)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60526)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60526)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60527 = ctx;
var G__60528 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60527,G__60528) : sci.impl.interpreter.interpret.call(null,G__60527,G__60528));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60526)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60526)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60526)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60526)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60526)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60526)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60526)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60526)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60526)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60531 = ctx;
var G__60532 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60531,G__60532) : sci.impl.interpreter.interpret.call(null,G__60531,G__60532));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60526)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60526)){
return (new cljs.core.LazySeq(null,(function (){var G__60536 = ctx;
var G__60537 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60536,G__60537) : sci.impl.interpreter.interpret.call(null,G__60536,G__60537));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60526)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60526)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60526)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60526)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60526)].join('')));

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
if(cljs.core.truth_((function (){var G__60539 = op;
var G__60540 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60539,G__60540) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60539,G__60540));
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
}catch (e60538){if((e60538 instanceof Error)){
var e = e60538;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60538;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60550 = op;
var G__60550__$1 = (((G__60550 instanceof cljs.core.Keyword))?G__60550.fqn:null);
switch (G__60550__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60544_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60544_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60544_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60545_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60545_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60545_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60546_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60546_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60546_SHARP_));
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
var G__60738 = cljs.core.rest(exprs);
var G__60739 = (function (){var G__60559 = ctx;
var G__60560 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60559,G__60560) : sci.impl.interpreter.eval_form.call(null,G__60559,G__60560));
})();
exprs = G__60738;
ret = G__60739;
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
if(cljs.core.truth_((function (){var G__60563 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60564 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60563,G__60564) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60563,G__60564));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60740 = ret__$1;
ret = G__60740;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60566 = arguments.length;
switch (G__60566) {
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
