goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55890 = arguments.length;
var i__4790__auto___55891 = (0);
while(true){
if((i__4790__auto___55891 < len__4789__auto___55890)){
args__4795__auto__.push((arguments[i__4790__auto___55891]));

var G__55892 = (i__4790__auto___55891 + (1));
i__4790__auto___55891 = G__55892;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55876){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55876));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55893 = arguments.length;
var i__4790__auto___55894 = (0);
while(true){
if((i__4790__auto___55894 < len__4789__auto___55893)){
args__4795__auto__.push((arguments[i__4790__auto___55894]));

var G__55895 = (i__4790__auto___55894 + (1));
i__4790__auto___55894 = G__55895;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55877){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55877));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55878 = "";
var G__55878__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55878,"i"].join(''):G__55878);
var G__55878__$2 = (cljs.core.truth_(re.multiline)?[G__55878__$1,"m"].join(''):G__55878__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55878__$2,"u"].join('');
} else {
return G__55878__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
