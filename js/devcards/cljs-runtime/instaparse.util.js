goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77977 = arguments.length;
var i__4790__auto___77978 = (0);
while(true){
if((i__4790__auto___77978 < len__4789__auto___77977)){
args__4795__auto__.push((arguments[i__4790__auto___77978]));

var G__77979 = (i__4790__auto___77978 + (1));
i__4790__auto___77978 = G__77979;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq77974){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77974));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77987 = arguments.length;
var i__4790__auto___77988 = (0);
while(true){
if((i__4790__auto___77988 < len__4789__auto___77987)){
args__4795__auto__.push((arguments[i__4790__auto___77988]));

var G__77989 = (i__4790__auto___77988 + (1));
i__4790__auto___77988 = G__77989;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq77975){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77975));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__77976 = "";
var G__77976__$1 = (cljs.core.truth_(re.ignoreCase)?[G__77976,"i"].join(''):G__77976);
var G__77976__$2 = (cljs.core.truth_(re.multiline)?[G__77976__$1,"m"].join(''):G__77976__$1);
if(cljs.core.truth_(re.unicode)){
return [G__77976__$2,"u"].join('');
} else {
return G__77976__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
