goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33549 = arguments.length;
switch (G__33549) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33564 = cljs.core.seq(Object.keys(localStorage));
var chunk__33565 = null;
var count__33566 = (0);
var i__33567 = (0);
while(true){
if((i__33567 < count__33566)){
var k = chunk__33565.cljs$core$IIndexed$_nth$arity$2(null,i__33567);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33596 = seq__33564;
var G__33597 = chunk__33565;
var G__33598 = count__33566;
var G__33599 = (i__33567 + (1));
seq__33564 = G__33596;
chunk__33565 = G__33597;
count__33566 = G__33598;
i__33567 = G__33599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33564);
if(temp__5735__auto__){
var seq__33564__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33564__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33564__$1);
var G__33600 = cljs.core.chunk_rest(seq__33564__$1);
var G__33601 = c__4609__auto__;
var G__33602 = cljs.core.count(c__4609__auto__);
var G__33603 = (0);
seq__33564 = G__33600;
chunk__33565 = G__33601;
count__33566 = G__33602;
i__33567 = G__33603;
continue;
} else {
var k = cljs.core.first(seq__33564__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33608 = cljs.core.next(seq__33564__$1);
var G__33609 = null;
var G__33610 = (0);
var G__33611 = (0);
seq__33564 = G__33608;
chunk__33565 = G__33609;
count__33566 = G__33610;
i__33567 = G__33611;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
