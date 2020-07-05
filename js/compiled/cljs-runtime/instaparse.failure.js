goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__63670 = (line + (1));
var G__63671 = (1);
var G__63672 = (counter + (1));
line = G__63670;
col = G__63671;
counter = G__63672;
continue;
} else {
var G__63673 = line;
var G__63674 = (col + (1));
var G__63675 = (counter + (1));
line = G__63673;
col = G__63674;
counter = G__63675;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__63677 = cljs.core.next(chars);
var G__63678 = (n__$1 - (1));
chars = G__63677;
n__$1 = G__63678;
continue;
} else {
var G__63679 = cljs.core.next(chars);
var G__63680 = n__$1;
chars = G__63679;
n__$1 = G__63680;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63658){
var map__63659 = p__63658;
var map__63659__$1 = (((((!((map__63659 == null))))?(((((map__63659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63659):map__63659);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__63661_63682 = cljs.core.seq(full_reasons);
var chunk__63662_63683 = null;
var count__63663_63684 = (0);
var i__63664_63685 = (0);
while(true){
if((i__63664_63685 < count__63663_63684)){
var r_63686 = chunk__63662_63683.cljs$core$IIndexed$_nth$arity$2(null,i__63664_63685);
instaparse.failure.print_reason(r_63686);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63687 = seq__63661_63682;
var G__63688 = chunk__63662_63683;
var G__63689 = count__63663_63684;
var G__63690 = (i__63664_63685 + (1));
seq__63661_63682 = G__63687;
chunk__63662_63683 = G__63688;
count__63663_63684 = G__63689;
i__63664_63685 = G__63690;
continue;
} else {
var temp__5735__auto___63691 = cljs.core.seq(seq__63661_63682);
if(temp__5735__auto___63691){
var seq__63661_63692__$1 = temp__5735__auto___63691;
if(cljs.core.chunked_seq_QMARK_(seq__63661_63692__$1)){
var c__4609__auto___63693 = cljs.core.chunk_first(seq__63661_63692__$1);
var G__63694 = cljs.core.chunk_rest(seq__63661_63692__$1);
var G__63695 = c__4609__auto___63693;
var G__63696 = cljs.core.count(c__4609__auto___63693);
var G__63697 = (0);
seq__63661_63682 = G__63694;
chunk__63662_63683 = G__63695;
count__63663_63684 = G__63696;
i__63664_63685 = G__63697;
continue;
} else {
var r_63698 = cljs.core.first(seq__63661_63692__$1);
instaparse.failure.print_reason(r_63698);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63699 = cljs.core.next(seq__63661_63692__$1);
var G__63700 = null;
var G__63701 = (0);
var G__63702 = (0);
seq__63661_63682 = G__63699;
chunk__63662_63683 = G__63700;
count__63663_63684 = G__63701;
i__63664_63685 = G__63702;
continue;
}
} else {
}
}
break;
}

var seq__63665 = cljs.core.seq(partial_reasons);
var chunk__63666 = null;
var count__63667 = (0);
var i__63668 = (0);
while(true){
if((i__63668 < count__63667)){
var r = chunk__63666.cljs$core$IIndexed$_nth$arity$2(null,i__63668);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63706 = seq__63665;
var G__63707 = chunk__63666;
var G__63708 = count__63667;
var G__63709 = (i__63668 + (1));
seq__63665 = G__63706;
chunk__63666 = G__63707;
count__63667 = G__63708;
i__63668 = G__63709;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63665);
if(temp__5735__auto__){
var seq__63665__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63665__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63665__$1);
var G__63710 = cljs.core.chunk_rest(seq__63665__$1);
var G__63711 = c__4609__auto__;
var G__63712 = cljs.core.count(c__4609__auto__);
var G__63713 = (0);
seq__63665 = G__63710;
chunk__63666 = G__63711;
count__63667 = G__63712;
i__63668 = G__63713;
continue;
} else {
var r = cljs.core.first(seq__63665__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63715 = cljs.core.next(seq__63665__$1);
var G__63716 = null;
var G__63717 = (0);
var G__63718 = (0);
seq__63665 = G__63715;
chunk__63666 = G__63716;
count__63667 = G__63717;
i__63668 = G__63718;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
