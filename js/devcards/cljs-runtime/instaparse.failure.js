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
var G__77924 = (line + (1));
var G__77925 = (1);
var G__77926 = (counter + (1));
line = G__77924;
col = G__77925;
counter = G__77926;
continue;
} else {
var G__77927 = line;
var G__77928 = (col + (1));
var G__77929 = (counter + (1));
line = G__77927;
col = G__77928;
counter = G__77929;
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
var G__77932 = cljs.core.next(chars);
var G__77933 = (n__$1 - (1));
chars = G__77932;
n__$1 = G__77933;
continue;
} else {
var G__77934 = cljs.core.next(chars);
var G__77935 = n__$1;
chars = G__77934;
n__$1 = G__77935;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__77901){
var map__77902 = p__77901;
var map__77902__$1 = (((((!((map__77902 == null))))?(((((map__77902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77902):map__77902);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77902__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77902__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77902__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__77915_77940 = cljs.core.seq(full_reasons);
var chunk__77916_77941 = null;
var count__77917_77942 = (0);
var i__77918_77943 = (0);
while(true){
if((i__77918_77943 < count__77917_77942)){
var r_77944 = chunk__77916_77941.cljs$core$IIndexed$_nth$arity$2(null,i__77918_77943);
instaparse.failure.print_reason(r_77944);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__77945 = seq__77915_77940;
var G__77946 = chunk__77916_77941;
var G__77947 = count__77917_77942;
var G__77948 = (i__77918_77943 + (1));
seq__77915_77940 = G__77945;
chunk__77916_77941 = G__77946;
count__77917_77942 = G__77947;
i__77918_77943 = G__77948;
continue;
} else {
var temp__5735__auto___77949 = cljs.core.seq(seq__77915_77940);
if(temp__5735__auto___77949){
var seq__77915_77950__$1 = temp__5735__auto___77949;
if(cljs.core.chunked_seq_QMARK_(seq__77915_77950__$1)){
var c__4609__auto___77951 = cljs.core.chunk_first(seq__77915_77950__$1);
var G__77952 = cljs.core.chunk_rest(seq__77915_77950__$1);
var G__77953 = c__4609__auto___77951;
var G__77954 = cljs.core.count(c__4609__auto___77951);
var G__77955 = (0);
seq__77915_77940 = G__77952;
chunk__77916_77941 = G__77953;
count__77917_77942 = G__77954;
i__77918_77943 = G__77955;
continue;
} else {
var r_77956 = cljs.core.first(seq__77915_77950__$1);
instaparse.failure.print_reason(r_77956);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__77957 = cljs.core.next(seq__77915_77950__$1);
var G__77958 = null;
var G__77959 = (0);
var G__77960 = (0);
seq__77915_77940 = G__77957;
chunk__77916_77941 = G__77958;
count__77917_77942 = G__77959;
i__77918_77943 = G__77960;
continue;
}
} else {
}
}
break;
}

var seq__77919 = cljs.core.seq(partial_reasons);
var chunk__77920 = null;
var count__77921 = (0);
var i__77922 = (0);
while(true){
if((i__77922 < count__77921)){
var r = chunk__77920.cljs$core$IIndexed$_nth$arity$2(null,i__77922);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__77961 = seq__77919;
var G__77962 = chunk__77920;
var G__77963 = count__77921;
var G__77964 = (i__77922 + (1));
seq__77919 = G__77961;
chunk__77920 = G__77962;
count__77921 = G__77963;
i__77922 = G__77964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77919);
if(temp__5735__auto__){
var seq__77919__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77919__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77919__$1);
var G__77965 = cljs.core.chunk_rest(seq__77919__$1);
var G__77966 = c__4609__auto__;
var G__77967 = cljs.core.count(c__4609__auto__);
var G__77968 = (0);
seq__77919 = G__77965;
chunk__77920 = G__77966;
count__77921 = G__77967;
i__77922 = G__77968;
continue;
} else {
var r = cljs.core.first(seq__77919__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__77969 = cljs.core.next(seq__77919__$1);
var G__77970 = null;
var G__77971 = (0);
var G__77972 = (0);
seq__77919 = G__77969;
chunk__77920 = G__77970;
count__77921 = G__77971;
i__77922 = G__77972;
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
