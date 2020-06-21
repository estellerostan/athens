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
var G__52906 = arguments.length;
switch (G__52906) {
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
var seq__52916 = cljs.core.seq(Object.keys(localStorage));
var chunk__52917 = null;
var count__52918 = (0);
var i__52919 = (0);
while(true){
if((i__52919 < count__52918)){
var k = chunk__52917.cljs$core$IIndexed$_nth$arity$2(null,i__52919);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52939 = seq__52916;
var G__52940 = chunk__52917;
var G__52941 = count__52918;
var G__52942 = (i__52919 + (1));
seq__52916 = G__52939;
chunk__52917 = G__52940;
count__52918 = G__52941;
i__52919 = G__52942;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52916);
if(temp__5735__auto__){
var seq__52916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52916__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52916__$1);
var G__52947 = cljs.core.chunk_rest(seq__52916__$1);
var G__52948 = c__4609__auto__;
var G__52949 = cljs.core.count(c__4609__auto__);
var G__52950 = (0);
seq__52916 = G__52947;
chunk__52917 = G__52948;
count__52918 = G__52949;
i__52919 = G__52950;
continue;
} else {
var k = cljs.core.first(seq__52916__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52951 = cljs.core.next(seq__52916__$1);
var G__52952 = null;
var G__52953 = (0);
var G__52954 = (0);
seq__52916 = G__52951;
chunk__52917 = G__52952;
count__52918 = G__52953;
i__52919 = G__52954;
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
