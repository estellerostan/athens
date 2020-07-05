goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53441){
var map__53442 = p__53441;
var map__53442__$1 = (((((!((map__53442 == null))))?(((((map__53442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53442):map__53442);
var m = map__53442__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53444_53566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53445_53567 = null;
var count__53446_53568 = (0);
var i__53447_53569 = (0);
while(true){
if((i__53447_53569 < count__53446_53568)){
var f_53570 = chunk__53445_53567.cljs$core$IIndexed$_nth$arity$2(null,i__53447_53569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53570], 0));


var G__53571 = seq__53444_53566;
var G__53572 = chunk__53445_53567;
var G__53573 = count__53446_53568;
var G__53574 = (i__53447_53569 + (1));
seq__53444_53566 = G__53571;
chunk__53445_53567 = G__53572;
count__53446_53568 = G__53573;
i__53447_53569 = G__53574;
continue;
} else {
var temp__5735__auto___53575 = cljs.core.seq(seq__53444_53566);
if(temp__5735__auto___53575){
var seq__53444_53576__$1 = temp__5735__auto___53575;
if(cljs.core.chunked_seq_QMARK_(seq__53444_53576__$1)){
var c__4609__auto___53577 = cljs.core.chunk_first(seq__53444_53576__$1);
var G__53578 = cljs.core.chunk_rest(seq__53444_53576__$1);
var G__53579 = c__4609__auto___53577;
var G__53580 = cljs.core.count(c__4609__auto___53577);
var G__53581 = (0);
seq__53444_53566 = G__53578;
chunk__53445_53567 = G__53579;
count__53446_53568 = G__53580;
i__53447_53569 = G__53581;
continue;
} else {
var f_53582 = cljs.core.first(seq__53444_53576__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53582], 0));


var G__53583 = cljs.core.next(seq__53444_53576__$1);
var G__53584 = null;
var G__53585 = (0);
var G__53586 = (0);
seq__53444_53566 = G__53583;
chunk__53445_53567 = G__53584;
count__53446_53568 = G__53585;
i__53447_53569 = G__53586;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53587 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53587], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53587)))?cljs.core.second(arglists_53587):arglists_53587)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53451_53589 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53452_53590 = null;
var count__53453_53591 = (0);
var i__53454_53592 = (0);
while(true){
if((i__53454_53592 < count__53453_53591)){
var vec__53466_53593 = chunk__53452_53590.cljs$core$IIndexed$_nth$arity$2(null,i__53454_53592);
var name_53594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466_53593,(0),null);
var map__53469_53595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466_53593,(1),null);
var map__53469_53596__$1 = (((((!((map__53469_53595 == null))))?(((((map__53469_53595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53469_53595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53469_53595):map__53469_53595);
var doc_53597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53469_53596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53469_53596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53594], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53598], 0));

if(cljs.core.truth_(doc_53597)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53597], 0));
} else {
}


var G__53599 = seq__53451_53589;
var G__53600 = chunk__53452_53590;
var G__53601 = count__53453_53591;
var G__53602 = (i__53454_53592 + (1));
seq__53451_53589 = G__53599;
chunk__53452_53590 = G__53600;
count__53453_53591 = G__53601;
i__53454_53592 = G__53602;
continue;
} else {
var temp__5735__auto___53603 = cljs.core.seq(seq__53451_53589);
if(temp__5735__auto___53603){
var seq__53451_53604__$1 = temp__5735__auto___53603;
if(cljs.core.chunked_seq_QMARK_(seq__53451_53604__$1)){
var c__4609__auto___53606 = cljs.core.chunk_first(seq__53451_53604__$1);
var G__53607 = cljs.core.chunk_rest(seq__53451_53604__$1);
var G__53608 = c__4609__auto___53606;
var G__53609 = cljs.core.count(c__4609__auto___53606);
var G__53610 = (0);
seq__53451_53589 = G__53607;
chunk__53452_53590 = G__53608;
count__53453_53591 = G__53609;
i__53454_53592 = G__53610;
continue;
} else {
var vec__53471_53611 = cljs.core.first(seq__53451_53604__$1);
var name_53612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471_53611,(0),null);
var map__53474_53613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471_53611,(1),null);
var map__53474_53614__$1 = (((((!((map__53474_53613 == null))))?(((((map__53474_53613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53474_53613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53474_53613):map__53474_53613);
var doc_53615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474_53614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474_53614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53612], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53616], 0));

if(cljs.core.truth_(doc_53615)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53615], 0));
} else {
}


var G__53618 = cljs.core.next(seq__53451_53604__$1);
var G__53619 = null;
var G__53620 = (0);
var G__53621 = (0);
seq__53451_53589 = G__53618;
chunk__53452_53590 = G__53619;
count__53453_53591 = G__53620;
i__53454_53592 = G__53621;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53476 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53477 = null;
var count__53478 = (0);
var i__53479 = (0);
while(true){
if((i__53479 < count__53478)){
var role = chunk__53477.cljs$core$IIndexed$_nth$arity$2(null,i__53479);
var temp__5735__auto___53622__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53622__$1)){
var spec_53623 = temp__5735__auto___53622__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53623)], 0));
} else {
}


var G__53624 = seq__53476;
var G__53625 = chunk__53477;
var G__53626 = count__53478;
var G__53627 = (i__53479 + (1));
seq__53476 = G__53624;
chunk__53477 = G__53625;
count__53478 = G__53626;
i__53479 = G__53627;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53476);
if(temp__5735__auto____$1){
var seq__53476__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53476__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53476__$1);
var G__53628 = cljs.core.chunk_rest(seq__53476__$1);
var G__53629 = c__4609__auto__;
var G__53630 = cljs.core.count(c__4609__auto__);
var G__53631 = (0);
seq__53476 = G__53628;
chunk__53477 = G__53629;
count__53478 = G__53630;
i__53479 = G__53631;
continue;
} else {
var role = cljs.core.first(seq__53476__$1);
var temp__5735__auto___53632__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53632__$2)){
var spec_53633 = temp__5735__auto___53632__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53633)], 0));
} else {
}


var G__53634 = cljs.core.next(seq__53476__$1);
var G__53635 = null;
var G__53636 = (0);
var G__53637 = (0);
seq__53476 = G__53634;
chunk__53477 = G__53635;
count__53478 = G__53636;
i__53479 = G__53637;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53638 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53639 = cljs.core.ex_cause(t);
via = G__53638;
t = G__53639;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53484 = datafied_throwable;
var map__53484__$1 = (((((!((map__53484 == null))))?(((((map__53484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53484):map__53484);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53484__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53485 = cljs.core.last(via);
var map__53485__$1 = (((((!((map__53485 == null))))?(((((map__53485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53485):map__53485);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53485__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53485__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53485__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53486 = data;
var map__53486__$1 = (((((!((map__53486 == null))))?(((((map__53486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53486):map__53486);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53487 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53487__$1 = (((((!((map__53487 == null))))?(((((map__53487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53487):map__53487);
var top_data = map__53487__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53487__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53492 = phase;
var G__53492__$1 = (((G__53492 instanceof cljs.core.Keyword))?G__53492.fqn:null);
switch (G__53492__$1) {
case "read-source":
var map__53493 = data;
var map__53493__$1 = (((((!((map__53493 == null))))?(((((map__53493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53493):map__53493);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53493__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53493__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53495__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53495,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53495);
var G__53495__$2 = (cljs.core.truth_((function (){var fexpr__53496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53496.cljs$core$IFn$_invoke$arity$1 ? fexpr__53496.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53496.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53495__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53495__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53495__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53497 = top_data;
var G__53497__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53497,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53497);
var G__53497__$2 = (cljs.core.truth_((function (){var fexpr__53498 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53498.cljs$core$IFn$_invoke$arity$1 ? fexpr__53498.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53498.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53497__$1);
var G__53497__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53497__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53497__$2);
var G__53497__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53497__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53497__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53497__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53497__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53500 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53500,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53500,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53500,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53500,(3),null);
var G__53503 = top_data;
var G__53503__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53503);
var G__53503__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53503__$1);
var G__53503__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53503__$2);
var G__53503__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53503__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53503__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53503__$4;
}

break;
case "execution":
var vec__53504 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53504,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53504,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53504,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53504,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53483_SHARP_){
var or__4185__auto__ = (p1__53483_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53508.cljs$core$IFn$_invoke$arity$1 ? fexpr__53508.cljs$core$IFn$_invoke$arity$1(p1__53483_SHARP_) : fexpr__53508.call(null,p1__53483_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53509 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53509__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53509,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53509);
var G__53509__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53509__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53509__$1);
var G__53509__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53509__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53509__$2);
var G__53509__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53509__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53509__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53509__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53509__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53524){
var map__53525 = p__53524;
var map__53525__$1 = (((((!((map__53525 == null))))?(((((map__53525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53525):map__53525);
var triage_data = map__53525__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53525__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53528 = phase;
var G__53528__$1 = (((G__53528 instanceof cljs.core.Keyword))?G__53528.fqn:null);
switch (G__53528__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53529 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53531 = loc;
var G__53532 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53533_53652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53534_53653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53535_53654 = true;
var _STAR_print_fn_STAR__temp_val__53536_53655 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53535_53654);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53536_53655);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53518_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53518_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53534_53653);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53533_53652);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53529,G__53530,G__53531,G__53532) : format.call(null,G__53529,G__53530,G__53531,G__53532));

break;
case "macroexpansion":
var G__53538 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53539 = cause_type;
var G__53540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53541 = loc;
var G__53542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53538,G__53539,G__53540,G__53541,G__53542) : format.call(null,G__53538,G__53539,G__53540,G__53541,G__53542));

break;
case "compile-syntax-check":
var G__53543 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53544 = cause_type;
var G__53545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53546 = loc;
var G__53547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53543,G__53544,G__53545,G__53546,G__53547) : format.call(null,G__53543,G__53544,G__53545,G__53546,G__53547));

break;
case "compilation":
var G__53548 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53549 = cause_type;
var G__53550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53551 = loc;
var G__53552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53548,G__53549,G__53550,G__53551,G__53552) : format.call(null,G__53548,G__53549,G__53550,G__53551,G__53552));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53553 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53554 = symbol;
var G__53555 = loc;
var G__53556 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53557_53656 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53558_53657 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53559_53658 = true;
var _STAR_print_fn_STAR__temp_val__53560_53659 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53559_53658);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53560_53659);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53558_53657);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53557_53656);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53553,G__53554,G__53555,G__53556) : format.call(null,G__53553,G__53554,G__53555,G__53556));
} else {
var G__53561 = "Execution error%s at %s(%s).\n%s\n";
var G__53562 = cause_type;
var G__53563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53564 = loc;
var G__53565 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53561,G__53562,G__53563,G__53564,G__53565) : format.call(null,G__53561,G__53562,G__53563,G__53564,G__53565));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53528__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
