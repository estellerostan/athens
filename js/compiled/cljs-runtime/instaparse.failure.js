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
var G__80114 = (line + (1));
var G__80115 = (1);
var G__80116 = (counter + (1));
line = G__80114;
col = G__80115;
counter = G__80116;
continue;
} else {
var G__80117 = line;
var G__80118 = (col + (1));
var G__80119 = (counter + (1));
line = G__80117;
col = G__80118;
counter = G__80119;
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
var G__80120 = cljs.core.next(chars);
var G__80121 = (n__$1 - (1));
chars = G__80120;
n__$1 = G__80121;
continue;
} else {
var G__80122 = cljs.core.next(chars);
var G__80123 = n__$1;
chars = G__80122;
n__$1 = G__80123;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__80101){
var map__80102 = p__80101;
var map__80102__$1 = (((((!((map__80102 == null))))?(((((map__80102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80102):map__80102);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80102__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80102__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80102__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80102__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__80105_80124 = cljs.core.seq(full_reasons);
var chunk__80106_80125 = null;
var count__80107_80126 = (0);
var i__80108_80127 = (0);
while(true){
if((i__80108_80127 < count__80107_80126)){
var r_80128 = chunk__80106_80125.cljs$core$IIndexed$_nth$arity$2(null,i__80108_80127);
instaparse.failure.print_reason(r_80128);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__80129 = seq__80105_80124;
var G__80130 = chunk__80106_80125;
var G__80131 = count__80107_80126;
var G__80132 = (i__80108_80127 + (1));
seq__80105_80124 = G__80129;
chunk__80106_80125 = G__80130;
count__80107_80126 = G__80131;
i__80108_80127 = G__80132;
continue;
} else {
var temp__5735__auto___80133 = cljs.core.seq(seq__80105_80124);
if(temp__5735__auto___80133){
var seq__80105_80135__$1 = temp__5735__auto___80133;
if(cljs.core.chunked_seq_QMARK_(seq__80105_80135__$1)){
var c__4609__auto___80137 = cljs.core.chunk_first(seq__80105_80135__$1);
var G__80139 = cljs.core.chunk_rest(seq__80105_80135__$1);
var G__80140 = c__4609__auto___80137;
var G__80141 = cljs.core.count(c__4609__auto___80137);
var G__80142 = (0);
seq__80105_80124 = G__80139;
chunk__80106_80125 = G__80140;
count__80107_80126 = G__80141;
i__80108_80127 = G__80142;
continue;
} else {
var r_80143 = cljs.core.first(seq__80105_80135__$1);
instaparse.failure.print_reason(r_80143);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__80144 = cljs.core.next(seq__80105_80135__$1);
var G__80145 = null;
var G__80146 = (0);
var G__80147 = (0);
seq__80105_80124 = G__80144;
chunk__80106_80125 = G__80145;
count__80107_80126 = G__80146;
i__80108_80127 = G__80147;
continue;
}
} else {
}
}
break;
}

var seq__80110 = cljs.core.seq(partial_reasons);
var chunk__80111 = null;
var count__80112 = (0);
var i__80113 = (0);
while(true){
if((i__80113 < count__80112)){
var r = chunk__80111.cljs$core$IIndexed$_nth$arity$2(null,i__80113);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__80150 = seq__80110;
var G__80151 = chunk__80111;
var G__80152 = count__80112;
var G__80153 = (i__80113 + (1));
seq__80110 = G__80150;
chunk__80111 = G__80151;
count__80112 = G__80152;
i__80113 = G__80153;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80110);
if(temp__5735__auto__){
var seq__80110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80110__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80110__$1);
var G__80155 = cljs.core.chunk_rest(seq__80110__$1);
var G__80156 = c__4609__auto__;
var G__80157 = cljs.core.count(c__4609__auto__);
var G__80158 = (0);
seq__80110 = G__80155;
chunk__80111 = G__80156;
count__80112 = G__80157;
i__80113 = G__80158;
continue;
} else {
var r = cljs.core.first(seq__80110__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__80159 = cljs.core.next(seq__80110__$1);
var G__80160 = null;
var G__80161 = (0);
var G__80162 = (0);
seq__80110 = G__80159;
chunk__80111 = G__80160;
count__80112 = G__80161;
i__80113 = G__80162;
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
