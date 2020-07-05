goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__36573 = arguments.length;
switch (G__36573) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__36575 = arguments.length;
switch (G__36575) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__36578 = arguments.length;
switch (G__36578) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36576_SHARP_){
return (!((p1__36576_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36965 = arguments.length;
var i__4790__auto___36967 = (0);
while(true){
if((i__4790__auto___36967 < len__4789__auto___36965)){
args__4795__auto__.push((arguments[i__4790__auto___36967]));

var G__36968 = (i__4790__auto___36967 + (1));
i__4790__auto___36967 = G__36968;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36581_36969 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36582_36970 = null;
var count__36583_36971 = (0);
var i__36584_36972 = (0);
while(true){
if((i__36584_36972 < count__36583_36971)){
var vec__36591_36973 = chunk__36582_36970.cljs$core$IIndexed$_nth$arity$2(null,i__36584_36972);
var k_36974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_36973,(0),null);
var v_36975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36591_36973,(1),null);
style.setProperty(dommy.utils.as_str(k_36974),v_36975);


var G__36976 = seq__36581_36969;
var G__36977 = chunk__36582_36970;
var G__36978 = count__36583_36971;
var G__36979 = (i__36584_36972 + (1));
seq__36581_36969 = G__36976;
chunk__36582_36970 = G__36977;
count__36583_36971 = G__36978;
i__36584_36972 = G__36979;
continue;
} else {
var temp__5735__auto___36980 = cljs.core.seq(seq__36581_36969);
if(temp__5735__auto___36980){
var seq__36581_36981__$1 = temp__5735__auto___36980;
if(cljs.core.chunked_seq_QMARK_(seq__36581_36981__$1)){
var c__4609__auto___36982 = cljs.core.chunk_first(seq__36581_36981__$1);
var G__36983 = cljs.core.chunk_rest(seq__36581_36981__$1);
var G__36984 = c__4609__auto___36982;
var G__36985 = cljs.core.count(c__4609__auto___36982);
var G__36986 = (0);
seq__36581_36969 = G__36983;
chunk__36582_36970 = G__36984;
count__36583_36971 = G__36985;
i__36584_36972 = G__36986;
continue;
} else {
var vec__36594_36987 = cljs.core.first(seq__36581_36981__$1);
var k_36988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_36987,(0),null);
var v_36989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36594_36987,(1),null);
style.setProperty(dommy.utils.as_str(k_36988),v_36989);


var G__36990 = cljs.core.next(seq__36581_36981__$1);
var G__36991 = null;
var G__36992 = (0);
var G__36993 = (0);
seq__36581_36969 = G__36990;
chunk__36582_36970 = G__36991;
count__36583_36971 = G__36992;
i__36584_36972 = G__36993;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36579){
var G__36580 = cljs.core.first(seq36579);
var seq36579__$1 = cljs.core.next(seq36579);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36580,seq36579__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36994 = arguments.length;
var i__4790__auto___36995 = (0);
while(true){
if((i__4790__auto___36995 < len__4789__auto___36994)){
args__4795__auto__.push((arguments[i__4790__auto___36995]));

var G__36996 = (i__4790__auto___36995 + (1));
i__4790__auto___36995 = G__36996;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__36601_37000 = cljs.core.seq(keywords);
var chunk__36602_37001 = null;
var count__36603_37002 = (0);
var i__36604_37003 = (0);
while(true){
if((i__36604_37003 < count__36603_37002)){
var kw_37005 = chunk__36602_37001.cljs$core$IIndexed$_nth$arity$2(null,i__36604_37003);
style.removeProperty(dommy.utils.as_str(kw_37005));


var G__37006 = seq__36601_37000;
var G__37007 = chunk__36602_37001;
var G__37008 = count__36603_37002;
var G__37009 = (i__36604_37003 + (1));
seq__36601_37000 = G__37006;
chunk__36602_37001 = G__37007;
count__36603_37002 = G__37008;
i__36604_37003 = G__37009;
continue;
} else {
var temp__5735__auto___37010 = cljs.core.seq(seq__36601_37000);
if(temp__5735__auto___37010){
var seq__36601_37011__$1 = temp__5735__auto___37010;
if(cljs.core.chunked_seq_QMARK_(seq__36601_37011__$1)){
var c__4609__auto___37012 = cljs.core.chunk_first(seq__36601_37011__$1);
var G__37013 = cljs.core.chunk_rest(seq__36601_37011__$1);
var G__37014 = c__4609__auto___37012;
var G__37015 = cljs.core.count(c__4609__auto___37012);
var G__37016 = (0);
seq__36601_37000 = G__37013;
chunk__36602_37001 = G__37014;
count__36603_37002 = G__37015;
i__36604_37003 = G__37016;
continue;
} else {
var kw_37017 = cljs.core.first(seq__36601_37011__$1);
style.removeProperty(dommy.utils.as_str(kw_37017));


var G__37018 = cljs.core.next(seq__36601_37011__$1);
var G__37019 = null;
var G__37020 = (0);
var G__37021 = (0);
seq__36601_37000 = G__37018;
chunk__36602_37001 = G__37019;
count__36603_37002 = G__37020;
i__36604_37003 = G__37021;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36597){
var G__36598 = cljs.core.first(seq36597);
var seq36597__$1 = cljs.core.next(seq36597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36598,seq36597__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37022 = arguments.length;
var i__4790__auto___37024 = (0);
while(true){
if((i__4790__auto___37024 < len__4789__auto___37022)){
args__4795__auto__.push((arguments[i__4790__auto___37024]));

var G__37025 = (i__4790__auto___37024 + (1));
i__4790__auto___37024 = G__37025;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36607_37032 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36608_37033 = null;
var count__36609_37034 = (0);
var i__36610_37035 = (0);
while(true){
if((i__36610_37035 < count__36609_37034)){
var vec__36617_37040 = chunk__36608_37033.cljs$core$IIndexed$_nth$arity$2(null,i__36610_37035);
var k_37041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37040,(0),null);
var v_37042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37040,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37041,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37042),"px"].join('')], 0));


var G__37050 = seq__36607_37032;
var G__37051 = chunk__36608_37033;
var G__37052 = count__36609_37034;
var G__37053 = (i__36610_37035 + (1));
seq__36607_37032 = G__37050;
chunk__36608_37033 = G__37051;
count__36609_37034 = G__37052;
i__36610_37035 = G__37053;
continue;
} else {
var temp__5735__auto___37055 = cljs.core.seq(seq__36607_37032);
if(temp__5735__auto___37055){
var seq__36607_37060__$1 = temp__5735__auto___37055;
if(cljs.core.chunked_seq_QMARK_(seq__36607_37060__$1)){
var c__4609__auto___37061 = cljs.core.chunk_first(seq__36607_37060__$1);
var G__37062 = cljs.core.chunk_rest(seq__36607_37060__$1);
var G__37063 = c__4609__auto___37061;
var G__37064 = cljs.core.count(c__4609__auto___37061);
var G__37065 = (0);
seq__36607_37032 = G__37062;
chunk__36608_37033 = G__37063;
count__36609_37034 = G__37064;
i__36610_37035 = G__37065;
continue;
} else {
var vec__36620_37066 = cljs.core.first(seq__36607_37060__$1);
var k_37067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37066,(0),null);
var v_37068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_37066,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37067,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37068),"px"].join('')], 0));


var G__37069 = cljs.core.next(seq__36607_37060__$1);
var G__37070 = null;
var G__37071 = (0);
var G__37072 = (0);
seq__36607_37032 = G__37069;
chunk__36608_37033 = G__37070;
count__36609_37034 = G__37071;
i__36610_37035 = G__37072;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36605){
var G__36606 = cljs.core.first(seq36605);
var seq36605__$1 = cljs.core.next(seq36605);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36606,seq36605__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__36628 = arguments.length;
switch (G__36628) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37074 = arguments.length;
var i__4790__auto___37075 = (0);
while(true){
if((i__4790__auto___37075 < len__4789__auto___37074)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37075]));

var G__37076 = (i__4790__auto___37075 + (1));
i__4790__auto___37075 = G__37076;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__36629 = elem;
(G__36629[k__$1] = v);

return G__36629;
} else {
var G__36630 = elem;
G__36630.setAttribute(k__$1,v);

return G__36630;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36631_37082 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36632_37083 = null;
var count__36633_37084 = (0);
var i__36634_37085 = (0);
while(true){
if((i__36634_37085 < count__36633_37084)){
var vec__36641_37087 = chunk__36632_37083.cljs$core$IIndexed$_nth$arity$2(null,i__36634_37085);
var k_37088__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641_37087,(0),null);
var v_37089__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36641_37087,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37088__$1,v_37089__$1);


var G__37095 = seq__36631_37082;
var G__37096 = chunk__36632_37083;
var G__37097 = count__36633_37084;
var G__37098 = (i__36634_37085 + (1));
seq__36631_37082 = G__37095;
chunk__36632_37083 = G__37096;
count__36633_37084 = G__37097;
i__36634_37085 = G__37098;
continue;
} else {
var temp__5735__auto___37101 = cljs.core.seq(seq__36631_37082);
if(temp__5735__auto___37101){
var seq__36631_37106__$1 = temp__5735__auto___37101;
if(cljs.core.chunked_seq_QMARK_(seq__36631_37106__$1)){
var c__4609__auto___37107 = cljs.core.chunk_first(seq__36631_37106__$1);
var G__37109 = cljs.core.chunk_rest(seq__36631_37106__$1);
var G__37110 = c__4609__auto___37107;
var G__37111 = cljs.core.count(c__4609__auto___37107);
var G__37112 = (0);
seq__36631_37082 = G__37109;
chunk__36632_37083 = G__37110;
count__36633_37084 = G__37111;
i__36634_37085 = G__37112;
continue;
} else {
var vec__36644_37113 = cljs.core.first(seq__36631_37106__$1);
var k_37114__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644_37113,(0),null);
var v_37115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644_37113,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37114__$1,v_37115__$1);


var G__37120 = cljs.core.next(seq__36631_37106__$1);
var G__37121 = null;
var G__37122 = (0);
var G__37123 = (0);
seq__36631_37082 = G__37120;
chunk__36632_37083 = G__37121;
count__36633_37084 = G__37122;
i__36634_37085 = G__37123;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36624){
var G__36625 = cljs.core.first(seq36624);
var seq36624__$1 = cljs.core.next(seq36624);
var G__36626 = cljs.core.first(seq36624__$1);
var seq36624__$2 = cljs.core.next(seq36624__$1);
var G__36627 = cljs.core.first(seq36624__$2);
var seq36624__$3 = cljs.core.next(seq36624__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36625,G__36626,G__36627,seq36624__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36651 = arguments.length;
switch (G__36651) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37125 = arguments.length;
var i__4790__auto___37126 = (0);
while(true){
if((i__4790__auto___37126 < len__4789__auto___37125)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37126]));

var G__37127 = (i__4790__auto___37126 + (1));
i__4790__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_37128__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36652 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36652.cljs$core$IFn$_invoke$arity$1 ? fexpr__36652.cljs$core$IFn$_invoke$arity$1(k_37128__$1) : fexpr__36652.call(null,k_37128__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37128__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36653_37129 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36654_37130 = null;
var count__36655_37131 = (0);
var i__36656_37132 = (0);
while(true){
if((i__36656_37132 < count__36655_37131)){
var k_37134__$1 = chunk__36654_37130.cljs$core$IIndexed$_nth$arity$2(null,i__36656_37132);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37134__$1);


var G__37137 = seq__36653_37129;
var G__37138 = chunk__36654_37130;
var G__37139 = count__36655_37131;
var G__37140 = (i__36656_37132 + (1));
seq__36653_37129 = G__37137;
chunk__36654_37130 = G__37138;
count__36655_37131 = G__37139;
i__36656_37132 = G__37140;
continue;
} else {
var temp__5735__auto___37141 = cljs.core.seq(seq__36653_37129);
if(temp__5735__auto___37141){
var seq__36653_37142__$1 = temp__5735__auto___37141;
if(cljs.core.chunked_seq_QMARK_(seq__36653_37142__$1)){
var c__4609__auto___37143 = cljs.core.chunk_first(seq__36653_37142__$1);
var G__37144 = cljs.core.chunk_rest(seq__36653_37142__$1);
var G__37145 = c__4609__auto___37143;
var G__37146 = cljs.core.count(c__4609__auto___37143);
var G__37147 = (0);
seq__36653_37129 = G__37144;
chunk__36654_37130 = G__37145;
count__36655_37131 = G__37146;
i__36656_37132 = G__37147;
continue;
} else {
var k_37148__$1 = cljs.core.first(seq__36653_37142__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37148__$1);


var G__37149 = cljs.core.next(seq__36653_37142__$1);
var G__37150 = null;
var G__37151 = (0);
var G__37152 = (0);
seq__36653_37129 = G__37149;
chunk__36654_37130 = G__37150;
count__36655_37131 = G__37151;
i__36656_37132 = G__37152;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36648){
var G__36649 = cljs.core.first(seq36648);
var seq36648__$1 = cljs.core.next(seq36648);
var G__36650 = cljs.core.first(seq36648__$1);
var seq36648__$2 = cljs.core.next(seq36648__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36649,G__36650,seq36648__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36658 = arguments.length;
switch (G__36658) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36663 = arguments.length;
switch (G__36663) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37156 = arguments.length;
var i__4790__auto___37157 = (0);
while(true){
if((i__4790__auto___37157 < len__4789__auto___37156)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37157]));

var G__37158 = (i__4790__auto___37157 + (1));
i__4790__auto___37157 = G__37158;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___37160 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37160)){
var class_list_37161 = temp__5733__auto___37160;
var seq__36664_37162 = cljs.core.seq(classes__$1);
var chunk__36665_37163 = null;
var count__36666_37164 = (0);
var i__36667_37165 = (0);
while(true){
if((i__36667_37165 < count__36666_37164)){
var c_37166 = chunk__36665_37163.cljs$core$IIndexed$_nth$arity$2(null,i__36667_37165);
class_list_37161.add(c_37166);


var G__37167 = seq__36664_37162;
var G__37168 = chunk__36665_37163;
var G__37169 = count__36666_37164;
var G__37170 = (i__36667_37165 + (1));
seq__36664_37162 = G__37167;
chunk__36665_37163 = G__37168;
count__36666_37164 = G__37169;
i__36667_37165 = G__37170;
continue;
} else {
var temp__5735__auto___37171 = cljs.core.seq(seq__36664_37162);
if(temp__5735__auto___37171){
var seq__36664_37172__$1 = temp__5735__auto___37171;
if(cljs.core.chunked_seq_QMARK_(seq__36664_37172__$1)){
var c__4609__auto___37173 = cljs.core.chunk_first(seq__36664_37172__$1);
var G__37174 = cljs.core.chunk_rest(seq__36664_37172__$1);
var G__37175 = c__4609__auto___37173;
var G__37176 = cljs.core.count(c__4609__auto___37173);
var G__37177 = (0);
seq__36664_37162 = G__37174;
chunk__36665_37163 = G__37175;
count__36666_37164 = G__37176;
i__36667_37165 = G__37177;
continue;
} else {
var c_37178 = cljs.core.first(seq__36664_37172__$1);
class_list_37161.add(c_37178);


var G__37179 = cljs.core.next(seq__36664_37172__$1);
var G__37180 = null;
var G__37181 = (0);
var G__37182 = (0);
seq__36664_37162 = G__37179;
chunk__36665_37163 = G__37180;
count__36666_37164 = G__37181;
i__36667_37165 = G__37182;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36668_37183 = cljs.core.seq(classes__$1);
var chunk__36669_37184 = null;
var count__36670_37185 = (0);
var i__36671_37186 = (0);
while(true){
if((i__36671_37186 < count__36670_37185)){
var c_37187 = chunk__36669_37184.cljs$core$IIndexed$_nth$arity$2(null,i__36671_37186);
var class_name_37188 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37188,c_37187))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37188 === ""))?c_37187:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37188)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37187)].join('')));
}


var G__37189 = seq__36668_37183;
var G__37190 = chunk__36669_37184;
var G__37191 = count__36670_37185;
var G__37192 = (i__36671_37186 + (1));
seq__36668_37183 = G__37189;
chunk__36669_37184 = G__37190;
count__36670_37185 = G__37191;
i__36671_37186 = G__37192;
continue;
} else {
var temp__5735__auto___37193 = cljs.core.seq(seq__36668_37183);
if(temp__5735__auto___37193){
var seq__36668_37194__$1 = temp__5735__auto___37193;
if(cljs.core.chunked_seq_QMARK_(seq__36668_37194__$1)){
var c__4609__auto___37195 = cljs.core.chunk_first(seq__36668_37194__$1);
var G__37196 = cljs.core.chunk_rest(seq__36668_37194__$1);
var G__37197 = c__4609__auto___37195;
var G__37198 = cljs.core.count(c__4609__auto___37195);
var G__37199 = (0);
seq__36668_37183 = G__37196;
chunk__36669_37184 = G__37197;
count__36670_37185 = G__37198;
i__36671_37186 = G__37199;
continue;
} else {
var c_37200 = cljs.core.first(seq__36668_37194__$1);
var class_name_37201 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37201,c_37200))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37201 === ""))?c_37200:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37201)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37200)].join('')));
}


var G__37202 = cljs.core.next(seq__36668_37194__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__36668_37183 = G__37202;
chunk__36669_37184 = G__37203;
count__36670_37185 = G__37204;
i__36671_37186 = G__37205;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36673_37206 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36674_37207 = null;
var count__36675_37208 = (0);
var i__36676_37209 = (0);
while(true){
if((i__36676_37209 < count__36675_37208)){
var c_37210 = chunk__36674_37207.cljs$core$IIndexed$_nth$arity$2(null,i__36676_37209);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37210);


var G__37211 = seq__36673_37206;
var G__37212 = chunk__36674_37207;
var G__37213 = count__36675_37208;
var G__37214 = (i__36676_37209 + (1));
seq__36673_37206 = G__37211;
chunk__36674_37207 = G__37212;
count__36675_37208 = G__37213;
i__36676_37209 = G__37214;
continue;
} else {
var temp__5735__auto___37215 = cljs.core.seq(seq__36673_37206);
if(temp__5735__auto___37215){
var seq__36673_37216__$1 = temp__5735__auto___37215;
if(cljs.core.chunked_seq_QMARK_(seq__36673_37216__$1)){
var c__4609__auto___37217 = cljs.core.chunk_first(seq__36673_37216__$1);
var G__37218 = cljs.core.chunk_rest(seq__36673_37216__$1);
var G__37219 = c__4609__auto___37217;
var G__37220 = cljs.core.count(c__4609__auto___37217);
var G__37221 = (0);
seq__36673_37206 = G__37218;
chunk__36674_37207 = G__37219;
count__36675_37208 = G__37220;
i__36676_37209 = G__37221;
continue;
} else {
var c_37222 = cljs.core.first(seq__36673_37216__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37222);


var G__37223 = cljs.core.next(seq__36673_37216__$1);
var G__37224 = null;
var G__37225 = (0);
var G__37226 = (0);
seq__36673_37206 = G__37223;
chunk__36674_37207 = G__37224;
count__36675_37208 = G__37225;
i__36676_37209 = G__37226;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36660){
var G__36661 = cljs.core.first(seq36660);
var seq36660__$1 = cljs.core.next(seq36660);
var G__36662 = cljs.core.first(seq36660__$1);
var seq36660__$2 = cljs.core.next(seq36660__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36661,G__36662,seq36660__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36681 = arguments.length;
switch (G__36681) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37228 = arguments.length;
var i__4790__auto___37229 = (0);
while(true){
if((i__4790__auto___37229 < len__4789__auto___37228)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37229]));

var G__37230 = (i__4790__auto___37229 + (1));
i__4790__auto___37229 = G__37230;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37231 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37231)){
var class_list_37232 = temp__5733__auto___37231;
class_list_37232.remove(c__$1);
} else {
var class_name_37233 = dommy.core.class$(elem);
var new_class_name_37234 = dommy.utils.remove_class_str(class_name_37233,c__$1);
if((class_name_37233 === new_class_name_37234)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37234);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36683 = null;
var count__36684 = (0);
var i__36685 = (0);
while(true){
if((i__36685 < count__36684)){
var c = chunk__36683.cljs$core$IIndexed$_nth$arity$2(null,i__36685);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37235 = seq__36682;
var G__37236 = chunk__36683;
var G__37237 = count__36684;
var G__37238 = (i__36685 + (1));
seq__36682 = G__37235;
chunk__36683 = G__37236;
count__36684 = G__37237;
i__36685 = G__37238;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36682);
if(temp__5735__auto__){
var seq__36682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36682__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36682__$1);
var G__37239 = cljs.core.chunk_rest(seq__36682__$1);
var G__37240 = c__4609__auto__;
var G__37241 = cljs.core.count(c__4609__auto__);
var G__37242 = (0);
seq__36682 = G__37239;
chunk__36683 = G__37240;
count__36684 = G__37241;
i__36685 = G__37242;
continue;
} else {
var c = cljs.core.first(seq__36682__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37243 = cljs.core.next(seq__36682__$1);
var G__37244 = null;
var G__37245 = (0);
var G__37246 = (0);
seq__36682 = G__37243;
chunk__36683 = G__37244;
count__36684 = G__37245;
i__36685 = G__37246;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36678){
var G__36679 = cljs.core.first(seq36678);
var seq36678__$1 = cljs.core.next(seq36678);
var G__36680 = cljs.core.first(seq36678__$1);
var seq36678__$2 = cljs.core.next(seq36678__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36679,G__36680,seq36678__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36687 = arguments.length;
switch (G__36687) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37248 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37248)){
var class_list_37249 = temp__5733__auto___37248;
class_list_37249.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36689 = arguments.length;
switch (G__36689) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36691 = arguments.length;
switch (G__36691) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36696 = arguments.length;
switch (G__36696) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37253 = arguments.length;
var i__4790__auto___37254 = (0);
while(true){
if((i__4790__auto___37254 < len__4789__auto___37253)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37254]));

var G__37255 = (i__4790__auto___37254 + (1));
i__4790__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36697 = parent;
G__36697.appendChild(child);

return G__36697;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36698_37256 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36699_37257 = null;
var count__36700_37258 = (0);
var i__36701_37259 = (0);
while(true){
if((i__36701_37259 < count__36700_37258)){
var c_37260 = chunk__36699_37257.cljs$core$IIndexed$_nth$arity$2(null,i__36701_37259);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37260);


var G__37261 = seq__36698_37256;
var G__37262 = chunk__36699_37257;
var G__37263 = count__36700_37258;
var G__37264 = (i__36701_37259 + (1));
seq__36698_37256 = G__37261;
chunk__36699_37257 = G__37262;
count__36700_37258 = G__37263;
i__36701_37259 = G__37264;
continue;
} else {
var temp__5735__auto___37265 = cljs.core.seq(seq__36698_37256);
if(temp__5735__auto___37265){
var seq__36698_37266__$1 = temp__5735__auto___37265;
if(cljs.core.chunked_seq_QMARK_(seq__36698_37266__$1)){
var c__4609__auto___37267 = cljs.core.chunk_first(seq__36698_37266__$1);
var G__37268 = cljs.core.chunk_rest(seq__36698_37266__$1);
var G__37269 = c__4609__auto___37267;
var G__37270 = cljs.core.count(c__4609__auto___37267);
var G__37271 = (0);
seq__36698_37256 = G__37268;
chunk__36699_37257 = G__37269;
count__36700_37258 = G__37270;
i__36701_37259 = G__37271;
continue;
} else {
var c_37272 = cljs.core.first(seq__36698_37266__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37272);


var G__37274 = cljs.core.next(seq__36698_37266__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__36698_37256 = G__37274;
chunk__36699_37257 = G__37275;
count__36700_37258 = G__37276;
i__36701_37259 = G__37277;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36693){
var G__36694 = cljs.core.first(seq36693);
var seq36693__$1 = cljs.core.next(seq36693);
var G__36695 = cljs.core.first(seq36693__$1);
var seq36693__$2 = cljs.core.next(seq36693__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36694,G__36695,seq36693__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36706 = arguments.length;
switch (G__36706) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___37280 = arguments.length;
var i__4790__auto___37281 = (0);
while(true){
if((i__4790__auto___37281 < len__4789__auto___37280)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37281]));

var G__37282 = (i__4790__auto___37281 + (1));
i__4790__auto___37281 = G__37282;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36707 = parent;
G__36707.insertBefore(child,parent.firstChild);

return G__36707;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36708_37283 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36709_37284 = null;
var count__36710_37285 = (0);
var i__36711_37286 = (0);
while(true){
if((i__36711_37286 < count__36710_37285)){
var c_37287 = chunk__36709_37284.cljs$core$IIndexed$_nth$arity$2(null,i__36711_37286);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37287);


var G__37288 = seq__36708_37283;
var G__37289 = chunk__36709_37284;
var G__37290 = count__36710_37285;
var G__37291 = (i__36711_37286 + (1));
seq__36708_37283 = G__37288;
chunk__36709_37284 = G__37289;
count__36710_37285 = G__37290;
i__36711_37286 = G__37291;
continue;
} else {
var temp__5735__auto___37292 = cljs.core.seq(seq__36708_37283);
if(temp__5735__auto___37292){
var seq__36708_37293__$1 = temp__5735__auto___37292;
if(cljs.core.chunked_seq_QMARK_(seq__36708_37293__$1)){
var c__4609__auto___37294 = cljs.core.chunk_first(seq__36708_37293__$1);
var G__37295 = cljs.core.chunk_rest(seq__36708_37293__$1);
var G__37296 = c__4609__auto___37294;
var G__37297 = cljs.core.count(c__4609__auto___37294);
var G__37298 = (0);
seq__36708_37283 = G__37295;
chunk__36709_37284 = G__37296;
count__36710_37285 = G__37297;
i__36711_37286 = G__37298;
continue;
} else {
var c_37299 = cljs.core.first(seq__36708_37293__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37299);


var G__37300 = cljs.core.next(seq__36708_37293__$1);
var G__37301 = null;
var G__37302 = (0);
var G__37303 = (0);
seq__36708_37283 = G__37300;
chunk__36709_37284 = G__37301;
count__36710_37285 = G__37302;
i__36711_37286 = G__37303;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36703){
var G__36704 = cljs.core.first(seq36703);
var seq36703__$1 = cljs.core.next(seq36703);
var G__36705 = cljs.core.first(seq36703__$1);
var seq36703__$2 = cljs.core.next(seq36703__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36704,G__36705,seq36703__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___37306 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37306)){
var next_37307 = temp__5733__auto___37306;
dommy.core.insert_before_BANG_(elem,next_37307);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__36713 = arguments.length;
switch (G__36713) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36714 = p;
G__36714.removeChild(elem);

return G__36714;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36715){
var vec__36716 = p__36715;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36716,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37311 = arguments.length;
var i__4790__auto___37312 = (0);
while(true){
if((i__4790__auto___37312 < len__4789__auto___37311)){
args__4795__auto__.push((arguments[i__4790__auto___37312]));

var G__37313 = (i__4790__auto___37312 + (1));
i__4790__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36719){
var G__36720 = cljs.core.first(seq36719);
var seq36719__$1 = cljs.core.next(seq36719);
var G__36721 = cljs.core.first(seq36719__$1);
var seq36719__$2 = cljs.core.next(seq36719__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36720,G__36721,seq36719__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__36722 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__36722.cljs$core$IFn$_invoke$arity$1 ? fexpr__36722.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__36722.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37314 = arguments.length;
var i__4790__auto___37315 = (0);
while(true){
if((i__4790__auto___37315 < len__4789__auto___37314)){
args__4795__auto__.push((arguments[i__4790__auto___37315]));

var G__37316 = (i__4790__auto___37315 + (1));
i__4790__auto___37315 = G__37316;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36726_37317 = dommy.core.elem_and_selector(elem_sel);
var elem_37318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36726_37317,(0),null);
var selector_37319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36726_37317,(1),null);
var seq__36729_37320 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36736_37321 = null;
var count__36737_37322 = (0);
var i__36738_37323 = (0);
while(true){
if((i__36738_37323 < count__36737_37322)){
var vec__36793_37324 = chunk__36736_37321.cljs$core$IIndexed$_nth$arity$2(null,i__36738_37323);
var orig_type_37325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793_37324,(0),null);
var f_37326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36793_37324,(1),null);
var seq__36739_37327 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37325,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37325,cljs.core.identity])));
var chunk__36741_37328 = null;
var count__36742_37329 = (0);
var i__36743_37330 = (0);
while(true){
if((i__36743_37330 < count__36742_37329)){
var vec__36806_37331 = chunk__36741_37328.cljs$core$IIndexed$_nth$arity$2(null,i__36743_37330);
var actual_type_37332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37331,(0),null);
var factory_37333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806_37331,(1),null);
var canonical_f_37334 = (function (){var G__36810 = (factory_37333.cljs$core$IFn$_invoke$arity$1 ? factory_37333.cljs$core$IFn$_invoke$arity$1(f_37326) : factory_37333.call(null,f_37326));
var fexpr__36809 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36809.cljs$core$IFn$_invoke$arity$1 ? fexpr__36809.cljs$core$IFn$_invoke$arity$1(G__36810) : fexpr__36809.call(null,G__36810));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37332,f_37326], null),canonical_f_37334], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37332),canonical_f_37334);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37332),canonical_f_37334);
}


var G__37335 = seq__36739_37327;
var G__37336 = chunk__36741_37328;
var G__37337 = count__36742_37329;
var G__37338 = (i__36743_37330 + (1));
seq__36739_37327 = G__37335;
chunk__36741_37328 = G__37336;
count__36742_37329 = G__37337;
i__36743_37330 = G__37338;
continue;
} else {
var temp__5735__auto___37339 = cljs.core.seq(seq__36739_37327);
if(temp__5735__auto___37339){
var seq__36739_37340__$1 = temp__5735__auto___37339;
if(cljs.core.chunked_seq_QMARK_(seq__36739_37340__$1)){
var c__4609__auto___37341 = cljs.core.chunk_first(seq__36739_37340__$1);
var G__37342 = cljs.core.chunk_rest(seq__36739_37340__$1);
var G__37343 = c__4609__auto___37341;
var G__37344 = cljs.core.count(c__4609__auto___37341);
var G__37345 = (0);
seq__36739_37327 = G__37342;
chunk__36741_37328 = G__37343;
count__36742_37329 = G__37344;
i__36743_37330 = G__37345;
continue;
} else {
var vec__36811_37346 = cljs.core.first(seq__36739_37340__$1);
var actual_type_37347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36811_37346,(0),null);
var factory_37348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36811_37346,(1),null);
var canonical_f_37349 = (function (){var G__36815 = (factory_37348.cljs$core$IFn$_invoke$arity$1 ? factory_37348.cljs$core$IFn$_invoke$arity$1(f_37326) : factory_37348.call(null,f_37326));
var fexpr__36814 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36814.cljs$core$IFn$_invoke$arity$1 ? fexpr__36814.cljs$core$IFn$_invoke$arity$1(G__36815) : fexpr__36814.call(null,G__36815));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37347,f_37326], null),canonical_f_37349], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37347),canonical_f_37349);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37347),canonical_f_37349);
}


var G__37350 = cljs.core.next(seq__36739_37340__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__36739_37327 = G__37350;
chunk__36741_37328 = G__37351;
count__36742_37329 = G__37352;
i__36743_37330 = G__37353;
continue;
}
} else {
}
}
break;
}

var G__37354 = seq__36729_37320;
var G__37355 = chunk__36736_37321;
var G__37356 = count__36737_37322;
var G__37357 = (i__36738_37323 + (1));
seq__36729_37320 = G__37354;
chunk__36736_37321 = G__37355;
count__36737_37322 = G__37356;
i__36738_37323 = G__37357;
continue;
} else {
var temp__5735__auto___37358 = cljs.core.seq(seq__36729_37320);
if(temp__5735__auto___37358){
var seq__36729_37359__$1 = temp__5735__auto___37358;
if(cljs.core.chunked_seq_QMARK_(seq__36729_37359__$1)){
var c__4609__auto___37360 = cljs.core.chunk_first(seq__36729_37359__$1);
var G__37361 = cljs.core.chunk_rest(seq__36729_37359__$1);
var G__37362 = c__4609__auto___37360;
var G__37363 = cljs.core.count(c__4609__auto___37360);
var G__37364 = (0);
seq__36729_37320 = G__37361;
chunk__36736_37321 = G__37362;
count__36737_37322 = G__37363;
i__36738_37323 = G__37364;
continue;
} else {
var vec__36816_37365 = cljs.core.first(seq__36729_37359__$1);
var orig_type_37366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37365,(0),null);
var f_37367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36816_37365,(1),null);
var seq__36730_37368 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37366,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37366,cljs.core.identity])));
var chunk__36732_37369 = null;
var count__36733_37370 = (0);
var i__36734_37371 = (0);
while(true){
if((i__36734_37371 < count__36733_37370)){
var vec__36829_37372 = chunk__36732_37369.cljs$core$IIndexed$_nth$arity$2(null,i__36734_37371);
var actual_type_37373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829_37372,(0),null);
var factory_37374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829_37372,(1),null);
var canonical_f_37375 = (function (){var G__36833 = (factory_37374.cljs$core$IFn$_invoke$arity$1 ? factory_37374.cljs$core$IFn$_invoke$arity$1(f_37367) : factory_37374.call(null,f_37367));
var fexpr__36832 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36832.cljs$core$IFn$_invoke$arity$1 ? fexpr__36832.cljs$core$IFn$_invoke$arity$1(G__36833) : fexpr__36832.call(null,G__36833));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37373,f_37367], null),canonical_f_37375], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37373),canonical_f_37375);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37373),canonical_f_37375);
}


var G__37376 = seq__36730_37368;
var G__37377 = chunk__36732_37369;
var G__37378 = count__36733_37370;
var G__37379 = (i__36734_37371 + (1));
seq__36730_37368 = G__37376;
chunk__36732_37369 = G__37377;
count__36733_37370 = G__37378;
i__36734_37371 = G__37379;
continue;
} else {
var temp__5735__auto___37380__$1 = cljs.core.seq(seq__36730_37368);
if(temp__5735__auto___37380__$1){
var seq__36730_37381__$1 = temp__5735__auto___37380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36730_37381__$1)){
var c__4609__auto___37382 = cljs.core.chunk_first(seq__36730_37381__$1);
var G__37383 = cljs.core.chunk_rest(seq__36730_37381__$1);
var G__37384 = c__4609__auto___37382;
var G__37385 = cljs.core.count(c__4609__auto___37382);
var G__37386 = (0);
seq__36730_37368 = G__37383;
chunk__36732_37369 = G__37384;
count__36733_37370 = G__37385;
i__36734_37371 = G__37386;
continue;
} else {
var vec__36834_37387 = cljs.core.first(seq__36730_37381__$1);
var actual_type_37388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834_37387,(0),null);
var factory_37389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834_37387,(1),null);
var canonical_f_37390 = (function (){var G__36840 = (factory_37389.cljs$core$IFn$_invoke$arity$1 ? factory_37389.cljs$core$IFn$_invoke$arity$1(f_37367) : factory_37389.call(null,f_37367));
var fexpr__36839 = (cljs.core.truth_(selector_37319)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37318,selector_37319):cljs.core.identity);
return (fexpr__36839.cljs$core$IFn$_invoke$arity$1 ? fexpr__36839.cljs$core$IFn$_invoke$arity$1(G__36840) : fexpr__36839.call(null,G__36840));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37318,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37319,actual_type_37388,f_37367], null),canonical_f_37390], 0));

if(cljs.core.truth_(elem_37318.addEventListener)){
elem_37318.addEventListener(cljs.core.name(actual_type_37388),canonical_f_37390);
} else {
elem_37318.attachEvent(cljs.core.name(actual_type_37388),canonical_f_37390);
}


var G__37392 = cljs.core.next(seq__36730_37381__$1);
var G__37393 = null;
var G__37394 = (0);
var G__37395 = (0);
seq__36730_37368 = G__37392;
chunk__36732_37369 = G__37393;
count__36733_37370 = G__37394;
i__36734_37371 = G__37395;
continue;
}
} else {
}
}
break;
}

var G__37396 = cljs.core.next(seq__36729_37359__$1);
var G__37397 = null;
var G__37398 = (0);
var G__37399 = (0);
seq__36729_37320 = G__37396;
chunk__36736_37321 = G__37397;
count__36737_37322 = G__37398;
i__36738_37323 = G__37399;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36723){
var G__36724 = cljs.core.first(seq36723);
var seq36723__$1 = cljs.core.next(seq36723);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36724,seq36723__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37401 = arguments.length;
var i__4790__auto___37402 = (0);
while(true){
if((i__4790__auto___37402 < len__4789__auto___37401)){
args__4795__auto__.push((arguments[i__4790__auto___37402]));

var G__37403 = (i__4790__auto___37402 + (1));
i__4790__auto___37402 = G__37403;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36844_37404 = dommy.core.elem_and_selector(elem_sel);
var elem_37405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37404,(0),null);
var selector_37406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844_37404,(1),null);
var seq__36847_37408 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36854_37409 = null;
var count__36855_37410 = (0);
var i__36856_37411 = (0);
while(true){
if((i__36856_37411 < count__36855_37410)){
var vec__36896_37412 = chunk__36854_37409.cljs$core$IIndexed$_nth$arity$2(null,i__36856_37411);
var orig_type_37413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896_37412,(0),null);
var f_37414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896_37412,(1),null);
var seq__36857_37416 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37413,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37413,cljs.core.identity])));
var chunk__36859_37417 = null;
var count__36860_37418 = (0);
var i__36861_37419 = (0);
while(true){
if((i__36861_37419 < count__36860_37418)){
var vec__36905_37421 = chunk__36859_37417.cljs$core$IIndexed$_nth$arity$2(null,i__36861_37419);
var actual_type_37422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905_37421,(0),null);
var __37423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905_37421,(1),null);
var keys_37425 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37406,actual_type_37422,f_37414], null);
var canonical_f_37426 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37405),keys_37425);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37405,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37425], 0));

if(cljs.core.truth_(elem_37405.removeEventListener)){
elem_37405.removeEventListener(cljs.core.name(actual_type_37422),canonical_f_37426);
} else {
elem_37405.detachEvent(cljs.core.name(actual_type_37422),canonical_f_37426);
}


var G__37427 = seq__36857_37416;
var G__37428 = chunk__36859_37417;
var G__37429 = count__36860_37418;
var G__37430 = (i__36861_37419 + (1));
seq__36857_37416 = G__37427;
chunk__36859_37417 = G__37428;
count__36860_37418 = G__37429;
i__36861_37419 = G__37430;
continue;
} else {
var temp__5735__auto___37431 = cljs.core.seq(seq__36857_37416);
if(temp__5735__auto___37431){
var seq__36857_37432__$1 = temp__5735__auto___37431;
if(cljs.core.chunked_seq_QMARK_(seq__36857_37432__$1)){
var c__4609__auto___37434 = cljs.core.chunk_first(seq__36857_37432__$1);
var G__37435 = cljs.core.chunk_rest(seq__36857_37432__$1);
var G__37436 = c__4609__auto___37434;
var G__37437 = cljs.core.count(c__4609__auto___37434);
var G__37438 = (0);
seq__36857_37416 = G__37435;
chunk__36859_37417 = G__37436;
count__36860_37418 = G__37437;
i__36861_37419 = G__37438;
continue;
} else {
var vec__36908_37443 = cljs.core.first(seq__36857_37432__$1);
var actual_type_37444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908_37443,(0),null);
var __37445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36908_37443,(1),null);
var keys_37446 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37406,actual_type_37444,f_37414], null);
var canonical_f_37447 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37405),keys_37446);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37405,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37446], 0));

if(cljs.core.truth_(elem_37405.removeEventListener)){
elem_37405.removeEventListener(cljs.core.name(actual_type_37444),canonical_f_37447);
} else {
elem_37405.detachEvent(cljs.core.name(actual_type_37444),canonical_f_37447);
}


var G__37448 = cljs.core.next(seq__36857_37432__$1);
var G__37449 = null;
var G__37450 = (0);
var G__37451 = (0);
seq__36857_37416 = G__37448;
chunk__36859_37417 = G__37449;
count__36860_37418 = G__37450;
i__36861_37419 = G__37451;
continue;
}
} else {
}
}
break;
}

var G__37453 = seq__36847_37408;
var G__37454 = chunk__36854_37409;
var G__37455 = count__36855_37410;
var G__37456 = (i__36856_37411 + (1));
seq__36847_37408 = G__37453;
chunk__36854_37409 = G__37454;
count__36855_37410 = G__37455;
i__36856_37411 = G__37456;
continue;
} else {
var temp__5735__auto___37458 = cljs.core.seq(seq__36847_37408);
if(temp__5735__auto___37458){
var seq__36847_37459__$1 = temp__5735__auto___37458;
if(cljs.core.chunked_seq_QMARK_(seq__36847_37459__$1)){
var c__4609__auto___37460 = cljs.core.chunk_first(seq__36847_37459__$1);
var G__37461 = cljs.core.chunk_rest(seq__36847_37459__$1);
var G__37462 = c__4609__auto___37460;
var G__37463 = cljs.core.count(c__4609__auto___37460);
var G__37464 = (0);
seq__36847_37408 = G__37461;
chunk__36854_37409 = G__37462;
count__36855_37410 = G__37463;
i__36856_37411 = G__37464;
continue;
} else {
var vec__36911_37465 = cljs.core.first(seq__36847_37459__$1);
var orig_type_37466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911_37465,(0),null);
var f_37467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911_37465,(1),null);
var seq__36848_37468 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37466,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37466,cljs.core.identity])));
var chunk__36850_37469 = null;
var count__36851_37470 = (0);
var i__36852_37471 = (0);
while(true){
if((i__36852_37471 < count__36851_37470)){
var vec__36924_37473 = chunk__36850_37469.cljs$core$IIndexed$_nth$arity$2(null,i__36852_37471);
var actual_type_37474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924_37473,(0),null);
var __37475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924_37473,(1),null);
var keys_37477 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37406,actual_type_37474,f_37467], null);
var canonical_f_37478 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37405),keys_37477);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37405,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37477], 0));

if(cljs.core.truth_(elem_37405.removeEventListener)){
elem_37405.removeEventListener(cljs.core.name(actual_type_37474),canonical_f_37478);
} else {
elem_37405.detachEvent(cljs.core.name(actual_type_37474),canonical_f_37478);
}


var G__37481 = seq__36848_37468;
var G__37482 = chunk__36850_37469;
var G__37483 = count__36851_37470;
var G__37484 = (i__36852_37471 + (1));
seq__36848_37468 = G__37481;
chunk__36850_37469 = G__37482;
count__36851_37470 = G__37483;
i__36852_37471 = G__37484;
continue;
} else {
var temp__5735__auto___37485__$1 = cljs.core.seq(seq__36848_37468);
if(temp__5735__auto___37485__$1){
var seq__36848_37486__$1 = temp__5735__auto___37485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36848_37486__$1)){
var c__4609__auto___37487 = cljs.core.chunk_first(seq__36848_37486__$1);
var G__37488 = cljs.core.chunk_rest(seq__36848_37486__$1);
var G__37489 = c__4609__auto___37487;
var G__37490 = cljs.core.count(c__4609__auto___37487);
var G__37491 = (0);
seq__36848_37468 = G__37488;
chunk__36850_37469 = G__37489;
count__36851_37470 = G__37490;
i__36852_37471 = G__37491;
continue;
} else {
var vec__36927_37493 = cljs.core.first(seq__36848_37486__$1);
var actual_type_37494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37493,(0),null);
var __37495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36927_37493,(1),null);
var keys_37500 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37406,actual_type_37494,f_37467], null);
var canonical_f_37501 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37405),keys_37500);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37405,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37500], 0));

if(cljs.core.truth_(elem_37405.removeEventListener)){
elem_37405.removeEventListener(cljs.core.name(actual_type_37494),canonical_f_37501);
} else {
elem_37405.detachEvent(cljs.core.name(actual_type_37494),canonical_f_37501);
}


var G__37502 = cljs.core.next(seq__36848_37486__$1);
var G__37503 = null;
var G__37504 = (0);
var G__37505 = (0);
seq__36848_37468 = G__37502;
chunk__36850_37469 = G__37503;
count__36851_37470 = G__37504;
i__36852_37471 = G__37505;
continue;
}
} else {
}
}
break;
}

var G__37507 = cljs.core.next(seq__36847_37459__$1);
var G__37508 = null;
var G__37509 = (0);
var G__37510 = (0);
seq__36847_37408 = G__37507;
chunk__36854_37409 = G__37508;
count__36855_37410 = G__37509;
i__36856_37411 = G__37510;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36842){
var G__36843 = cljs.core.first(seq36842);
var seq36842__$1 = cljs.core.next(seq36842);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36843,seq36842__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37515 = arguments.length;
var i__4790__auto___37516 = (0);
while(true){
if((i__4790__auto___37516 < len__4789__auto___37515)){
args__4795__auto__.push((arguments[i__4790__auto___37516]));

var G__37517 = (i__4790__auto___37516 + (1));
i__4790__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36935_37518 = dommy.core.elem_and_selector(elem_sel);
var elem_37519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935_37518,(0),null);
var selector_37520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935_37518,(1),null);
var seq__36938_37521 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36939_37522 = null;
var count__36940_37523 = (0);
var i__36941_37524 = (0);
while(true){
if((i__36941_37524 < count__36940_37523)){
var vec__36952_37525 = chunk__36939_37522.cljs$core$IIndexed$_nth$arity$2(null,i__36941_37524);
var type_37526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37525,(0),null);
var f_37527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37525,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37526,((function (seq__36938_37521,chunk__36939_37522,count__36940_37523,i__36941_37524,vec__36952_37525,type_37526,f_37527,vec__36935_37518,elem_37519,selector_37520){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37526,dommy$core$this_fn], 0));

return (f_37527.cljs$core$IFn$_invoke$arity$1 ? f_37527.cljs$core$IFn$_invoke$arity$1(e) : f_37527.call(null,e));
});})(seq__36938_37521,chunk__36939_37522,count__36940_37523,i__36941_37524,vec__36952_37525,type_37526,f_37527,vec__36935_37518,elem_37519,selector_37520))
], 0));


var G__37528 = seq__36938_37521;
var G__37529 = chunk__36939_37522;
var G__37530 = count__36940_37523;
var G__37531 = (i__36941_37524 + (1));
seq__36938_37521 = G__37528;
chunk__36939_37522 = G__37529;
count__36940_37523 = G__37530;
i__36941_37524 = G__37531;
continue;
} else {
var temp__5735__auto___37532 = cljs.core.seq(seq__36938_37521);
if(temp__5735__auto___37532){
var seq__36938_37533__$1 = temp__5735__auto___37532;
if(cljs.core.chunked_seq_QMARK_(seq__36938_37533__$1)){
var c__4609__auto___37534 = cljs.core.chunk_first(seq__36938_37533__$1);
var G__37535 = cljs.core.chunk_rest(seq__36938_37533__$1);
var G__37536 = c__4609__auto___37534;
var G__37537 = cljs.core.count(c__4609__auto___37534);
var G__37538 = (0);
seq__36938_37521 = G__37535;
chunk__36939_37522 = G__37536;
count__36940_37523 = G__37537;
i__36941_37524 = G__37538;
continue;
} else {
var vec__36955_37539 = cljs.core.first(seq__36938_37533__$1);
var type_37540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37539,(0),null);
var f_37541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37539,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37540,((function (seq__36938_37521,chunk__36939_37522,count__36940_37523,i__36941_37524,vec__36955_37539,type_37540,f_37541,seq__36938_37533__$1,temp__5735__auto___37532,vec__36935_37518,elem_37519,selector_37520){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37540,dommy$core$this_fn], 0));

return (f_37541.cljs$core$IFn$_invoke$arity$1 ? f_37541.cljs$core$IFn$_invoke$arity$1(e) : f_37541.call(null,e));
});})(seq__36938_37521,chunk__36939_37522,count__36940_37523,i__36941_37524,vec__36955_37539,type_37540,f_37541,seq__36938_37533__$1,temp__5735__auto___37532,vec__36935_37518,elem_37519,selector_37520))
], 0));


var G__37542 = cljs.core.next(seq__36938_37533__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__36938_37521 = G__37542;
chunk__36939_37522 = G__37543;
count__36940_37523 = G__37544;
i__36941_37524 = G__37545;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36930){
var G__36931 = cljs.core.first(seq36930);
var seq36930__$1 = cljs.core.next(seq36930);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36931,seq36930__$1);
}));


//# sourceMappingURL=dommy.core.js.map
