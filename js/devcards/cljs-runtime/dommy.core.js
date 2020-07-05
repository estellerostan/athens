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
var G__64730 = arguments.length;
switch (G__64730) {
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
var G__64742 = arguments.length;
switch (G__64742) {
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
var G__64746 = arguments.length;
switch (G__64746) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__64744_SHARP_){
return (!((p1__64744_SHARP_ === base)));
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
var len__4789__auto___65428 = arguments.length;
var i__4790__auto___65429 = (0);
while(true){
if((i__4790__auto___65429 < len__4789__auto___65428)){
args__4795__auto__.push((arguments[i__4790__auto___65429]));

var G__65430 = (i__4790__auto___65429 + (1));
i__4790__auto___65429 = G__65430;
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
var seq__64764_65431 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__64765_65432 = null;
var count__64766_65433 = (0);
var i__64767_65434 = (0);
while(true){
if((i__64767_65434 < count__64766_65433)){
var vec__64777_65435 = chunk__64765_65432.cljs$core$IIndexed$_nth$arity$2(null,i__64767_65434);
var k_65436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64777_65435,(0),null);
var v_65437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64777_65435,(1),null);
style.setProperty(dommy.utils.as_str(k_65436),v_65437);


var G__65438 = seq__64764_65431;
var G__65439 = chunk__64765_65432;
var G__65440 = count__64766_65433;
var G__65441 = (i__64767_65434 + (1));
seq__64764_65431 = G__65438;
chunk__64765_65432 = G__65439;
count__64766_65433 = G__65440;
i__64767_65434 = G__65441;
continue;
} else {
var temp__5735__auto___65442 = cljs.core.seq(seq__64764_65431);
if(temp__5735__auto___65442){
var seq__64764_65447__$1 = temp__5735__auto___65442;
if(cljs.core.chunked_seq_QMARK_(seq__64764_65447__$1)){
var c__4609__auto___65448 = cljs.core.chunk_first(seq__64764_65447__$1);
var G__65449 = cljs.core.chunk_rest(seq__64764_65447__$1);
var G__65450 = c__4609__auto___65448;
var G__65451 = cljs.core.count(c__4609__auto___65448);
var G__65452 = (0);
seq__64764_65431 = G__65449;
chunk__64765_65432 = G__65450;
count__64766_65433 = G__65451;
i__64767_65434 = G__65452;
continue;
} else {
var vec__64781_65453 = cljs.core.first(seq__64764_65447__$1);
var k_65454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64781_65453,(0),null);
var v_65455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64781_65453,(1),null);
style.setProperty(dommy.utils.as_str(k_65454),v_65455);


var G__65456 = cljs.core.next(seq__64764_65447__$1);
var G__65457 = null;
var G__65458 = (0);
var G__65459 = (0);
seq__64764_65431 = G__65456;
chunk__64765_65432 = G__65457;
count__64766_65433 = G__65458;
i__64767_65434 = G__65459;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq64754){
var G__64757 = cljs.core.first(seq64754);
var seq64754__$1 = cljs.core.next(seq64754);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64757,seq64754__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65461 = arguments.length;
var i__4790__auto___65462 = (0);
while(true){
if((i__4790__auto___65462 < len__4789__auto___65461)){
args__4795__auto__.push((arguments[i__4790__auto___65462]));

var G__65463 = (i__4790__auto___65462 + (1));
i__4790__auto___65462 = G__65463;
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
var seq__64788_65464 = cljs.core.seq(keywords);
var chunk__64789_65465 = null;
var count__64790_65466 = (0);
var i__64791_65467 = (0);
while(true){
if((i__64791_65467 < count__64790_65466)){
var kw_65468 = chunk__64789_65465.cljs$core$IIndexed$_nth$arity$2(null,i__64791_65467);
style.removeProperty(dommy.utils.as_str(kw_65468));


var G__65469 = seq__64788_65464;
var G__65470 = chunk__64789_65465;
var G__65471 = count__64790_65466;
var G__65472 = (i__64791_65467 + (1));
seq__64788_65464 = G__65469;
chunk__64789_65465 = G__65470;
count__64790_65466 = G__65471;
i__64791_65467 = G__65472;
continue;
} else {
var temp__5735__auto___65473 = cljs.core.seq(seq__64788_65464);
if(temp__5735__auto___65473){
var seq__64788_65474__$1 = temp__5735__auto___65473;
if(cljs.core.chunked_seq_QMARK_(seq__64788_65474__$1)){
var c__4609__auto___65475 = cljs.core.chunk_first(seq__64788_65474__$1);
var G__65476 = cljs.core.chunk_rest(seq__64788_65474__$1);
var G__65477 = c__4609__auto___65475;
var G__65478 = cljs.core.count(c__4609__auto___65475);
var G__65479 = (0);
seq__64788_65464 = G__65476;
chunk__64789_65465 = G__65477;
count__64790_65466 = G__65478;
i__64791_65467 = G__65479;
continue;
} else {
var kw_65480 = cljs.core.first(seq__64788_65474__$1);
style.removeProperty(dommy.utils.as_str(kw_65480));


var G__65481 = cljs.core.next(seq__64788_65474__$1);
var G__65482 = null;
var G__65483 = (0);
var G__65484 = (0);
seq__64788_65464 = G__65481;
chunk__64789_65465 = G__65482;
count__64790_65466 = G__65483;
i__64791_65467 = G__65484;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq64785){
var G__64786 = cljs.core.first(seq64785);
var seq64785__$1 = cljs.core.next(seq64785);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64786,seq64785__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65485 = arguments.length;
var i__4790__auto___65486 = (0);
while(true){
if((i__4790__auto___65486 < len__4789__auto___65485)){
args__4795__auto__.push((arguments[i__4790__auto___65486]));

var G__65487 = (i__4790__auto___65486 + (1));
i__4790__auto___65486 = G__65487;
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

var seq__64804_65489 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__64805_65490 = null;
var count__64806_65491 = (0);
var i__64807_65492 = (0);
while(true){
if((i__64807_65492 < count__64806_65491)){
var vec__64814_65493 = chunk__64805_65490.cljs$core$IIndexed$_nth$arity$2(null,i__64807_65492);
var k_65494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64814_65493,(0),null);
var v_65495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64814_65493,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_65494,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_65495),"px"].join('')], 0));


var G__65496 = seq__64804_65489;
var G__65497 = chunk__64805_65490;
var G__65498 = count__64806_65491;
var G__65499 = (i__64807_65492 + (1));
seq__64804_65489 = G__65496;
chunk__64805_65490 = G__65497;
count__64806_65491 = G__65498;
i__64807_65492 = G__65499;
continue;
} else {
var temp__5735__auto___65500 = cljs.core.seq(seq__64804_65489);
if(temp__5735__auto___65500){
var seq__64804_65501__$1 = temp__5735__auto___65500;
if(cljs.core.chunked_seq_QMARK_(seq__64804_65501__$1)){
var c__4609__auto___65502 = cljs.core.chunk_first(seq__64804_65501__$1);
var G__65503 = cljs.core.chunk_rest(seq__64804_65501__$1);
var G__65504 = c__4609__auto___65502;
var G__65505 = cljs.core.count(c__4609__auto___65502);
var G__65506 = (0);
seq__64804_65489 = G__65503;
chunk__64805_65490 = G__65504;
count__64806_65491 = G__65505;
i__64807_65492 = G__65506;
continue;
} else {
var vec__64817_65507 = cljs.core.first(seq__64804_65501__$1);
var k_65508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64817_65507,(0),null);
var v_65509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64817_65507,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_65508,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_65509),"px"].join('')], 0));


var G__65510 = cljs.core.next(seq__64804_65501__$1);
var G__65511 = null;
var G__65512 = (0);
var G__65513 = (0);
seq__64804_65489 = G__65510;
chunk__64805_65490 = G__65511;
count__64806_65491 = G__65512;
i__64807_65492 = G__65513;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq64798){
var G__64799 = cljs.core.first(seq64798);
var seq64798__$1 = cljs.core.next(seq64798);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64799,seq64798__$1);
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
var G__64825 = arguments.length;
switch (G__64825) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65515 = arguments.length;
var i__4790__auto___65516 = (0);
while(true){
if((i__4790__auto___65516 < len__4789__auto___65515)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65516]));

var G__65517 = (i__4790__auto___65516 + (1));
i__4790__auto___65516 = G__65517;
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
var G__64827 = elem;
(G__64827[k__$1] = v);

return G__64827;
} else {
var G__64828 = elem;
G__64828.setAttribute(k__$1,v);

return G__64828;
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

var seq__64829_65518 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__64830_65519 = null;
var count__64831_65520 = (0);
var i__64832_65521 = (0);
while(true){
if((i__64832_65521 < count__64831_65520)){
var vec__64844_65522 = chunk__64830_65519.cljs$core$IIndexed$_nth$arity$2(null,i__64832_65521);
var k_65523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64844_65522,(0),null);
var v_65524__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64844_65522,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_65523__$1,v_65524__$1);


var G__65528 = seq__64829_65518;
var G__65529 = chunk__64830_65519;
var G__65530 = count__64831_65520;
var G__65531 = (i__64832_65521 + (1));
seq__64829_65518 = G__65528;
chunk__64830_65519 = G__65529;
count__64831_65520 = G__65530;
i__64832_65521 = G__65531;
continue;
} else {
var temp__5735__auto___65532 = cljs.core.seq(seq__64829_65518);
if(temp__5735__auto___65532){
var seq__64829_65533__$1 = temp__5735__auto___65532;
if(cljs.core.chunked_seq_QMARK_(seq__64829_65533__$1)){
var c__4609__auto___65534 = cljs.core.chunk_first(seq__64829_65533__$1);
var G__65535 = cljs.core.chunk_rest(seq__64829_65533__$1);
var G__65536 = c__4609__auto___65534;
var G__65537 = cljs.core.count(c__4609__auto___65534);
var G__65538 = (0);
seq__64829_65518 = G__65535;
chunk__64830_65519 = G__65536;
count__64831_65520 = G__65537;
i__64832_65521 = G__65538;
continue;
} else {
var vec__64847_65539 = cljs.core.first(seq__64829_65533__$1);
var k_65540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64847_65539,(0),null);
var v_65541__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64847_65539,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_65540__$1,v_65541__$1);


var G__65543 = cljs.core.next(seq__64829_65533__$1);
var G__65544 = null;
var G__65545 = (0);
var G__65546 = (0);
seq__64829_65518 = G__65543;
chunk__64830_65519 = G__65544;
count__64831_65520 = G__65545;
i__64832_65521 = G__65546;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq64821){
var G__64822 = cljs.core.first(seq64821);
var seq64821__$1 = cljs.core.next(seq64821);
var G__64823 = cljs.core.first(seq64821__$1);
var seq64821__$2 = cljs.core.next(seq64821__$1);
var G__64824 = cljs.core.first(seq64821__$2);
var seq64821__$3 = cljs.core.next(seq64821__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64822,G__64823,G__64824,seq64821__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__64854 = arguments.length;
switch (G__64854) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65548 = arguments.length;
var i__4790__auto___65549 = (0);
while(true){
if((i__4790__auto___65549 < len__4789__auto___65548)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65549]));

var G__65550 = (i__4790__auto___65549 + (1));
i__4790__auto___65549 = G__65550;
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
var k_65552__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__64855 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__64855.cljs$core$IFn$_invoke$arity$1 ? fexpr__64855.cljs$core$IFn$_invoke$arity$1(k_65552__$1) : fexpr__64855.call(null,k_65552__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_65552__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__64856_65553 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__64857_65554 = null;
var count__64858_65555 = (0);
var i__64859_65556 = (0);
while(true){
if((i__64859_65556 < count__64858_65555)){
var k_65557__$1 = chunk__64857_65554.cljs$core$IIndexed$_nth$arity$2(null,i__64859_65556);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_65557__$1);


var G__65562 = seq__64856_65553;
var G__65563 = chunk__64857_65554;
var G__65564 = count__64858_65555;
var G__65565 = (i__64859_65556 + (1));
seq__64856_65553 = G__65562;
chunk__64857_65554 = G__65563;
count__64858_65555 = G__65564;
i__64859_65556 = G__65565;
continue;
} else {
var temp__5735__auto___65567 = cljs.core.seq(seq__64856_65553);
if(temp__5735__auto___65567){
var seq__64856_65568__$1 = temp__5735__auto___65567;
if(cljs.core.chunked_seq_QMARK_(seq__64856_65568__$1)){
var c__4609__auto___65569 = cljs.core.chunk_first(seq__64856_65568__$1);
var G__65571 = cljs.core.chunk_rest(seq__64856_65568__$1);
var G__65572 = c__4609__auto___65569;
var G__65573 = cljs.core.count(c__4609__auto___65569);
var G__65574 = (0);
seq__64856_65553 = G__65571;
chunk__64857_65554 = G__65572;
count__64858_65555 = G__65573;
i__64859_65556 = G__65574;
continue;
} else {
var k_65576__$1 = cljs.core.first(seq__64856_65568__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_65576__$1);


var G__65577 = cljs.core.next(seq__64856_65568__$1);
var G__65578 = null;
var G__65579 = (0);
var G__65580 = (0);
seq__64856_65553 = G__65577;
chunk__64857_65554 = G__65578;
count__64858_65555 = G__65579;
i__64859_65556 = G__65580;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq64851){
var G__64852 = cljs.core.first(seq64851);
var seq64851__$1 = cljs.core.next(seq64851);
var G__64853 = cljs.core.first(seq64851__$1);
var seq64851__$2 = cljs.core.next(seq64851__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64852,G__64853,seq64851__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__64870 = arguments.length;
switch (G__64870) {
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
var G__64880 = arguments.length;
switch (G__64880) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65587 = arguments.length;
var i__4790__auto___65588 = (0);
while(true){
if((i__4790__auto___65588 < len__4789__auto___65587)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65588]));

var G__65589 = (i__4790__auto___65588 + (1));
i__4790__auto___65588 = G__65589;
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
var temp__5733__auto___65590 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___65590)){
var class_list_65591 = temp__5733__auto___65590;
var seq__64881_65592 = cljs.core.seq(classes__$1);
var chunk__64882_65593 = null;
var count__64883_65594 = (0);
var i__64884_65595 = (0);
while(true){
if((i__64884_65595 < count__64883_65594)){
var c_65596 = chunk__64882_65593.cljs$core$IIndexed$_nth$arity$2(null,i__64884_65595);
class_list_65591.add(c_65596);


var G__65597 = seq__64881_65592;
var G__65599 = chunk__64882_65593;
var G__65600 = count__64883_65594;
var G__65601 = (i__64884_65595 + (1));
seq__64881_65592 = G__65597;
chunk__64882_65593 = G__65599;
count__64883_65594 = G__65600;
i__64884_65595 = G__65601;
continue;
} else {
var temp__5735__auto___65602 = cljs.core.seq(seq__64881_65592);
if(temp__5735__auto___65602){
var seq__64881_65603__$1 = temp__5735__auto___65602;
if(cljs.core.chunked_seq_QMARK_(seq__64881_65603__$1)){
var c__4609__auto___65604 = cljs.core.chunk_first(seq__64881_65603__$1);
var G__65605 = cljs.core.chunk_rest(seq__64881_65603__$1);
var G__65606 = c__4609__auto___65604;
var G__65607 = cljs.core.count(c__4609__auto___65604);
var G__65608 = (0);
seq__64881_65592 = G__65605;
chunk__64882_65593 = G__65606;
count__64883_65594 = G__65607;
i__64884_65595 = G__65608;
continue;
} else {
var c_65609 = cljs.core.first(seq__64881_65603__$1);
class_list_65591.add(c_65609);


var G__65610 = cljs.core.next(seq__64881_65603__$1);
var G__65611 = null;
var G__65612 = (0);
var G__65613 = (0);
seq__64881_65592 = G__65610;
chunk__64882_65593 = G__65611;
count__64883_65594 = G__65612;
i__64884_65595 = G__65613;
continue;
}
} else {
}
}
break;
}
} else {
var seq__64886_65614 = cljs.core.seq(classes__$1);
var chunk__64887_65615 = null;
var count__64888_65616 = (0);
var i__64889_65617 = (0);
while(true){
if((i__64889_65617 < count__64888_65616)){
var c_65618 = chunk__64887_65615.cljs$core$IIndexed$_nth$arity$2(null,i__64889_65617);
var class_name_65619 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_65619,c_65618))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_65619 === ""))?c_65618:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_65619)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_65618)].join('')));
}


var G__65620 = seq__64886_65614;
var G__65621 = chunk__64887_65615;
var G__65622 = count__64888_65616;
var G__65623 = (i__64889_65617 + (1));
seq__64886_65614 = G__65620;
chunk__64887_65615 = G__65621;
count__64888_65616 = G__65622;
i__64889_65617 = G__65623;
continue;
} else {
var temp__5735__auto___65624 = cljs.core.seq(seq__64886_65614);
if(temp__5735__auto___65624){
var seq__64886_65625__$1 = temp__5735__auto___65624;
if(cljs.core.chunked_seq_QMARK_(seq__64886_65625__$1)){
var c__4609__auto___65626 = cljs.core.chunk_first(seq__64886_65625__$1);
var G__65627 = cljs.core.chunk_rest(seq__64886_65625__$1);
var G__65628 = c__4609__auto___65626;
var G__65629 = cljs.core.count(c__4609__auto___65626);
var G__65630 = (0);
seq__64886_65614 = G__65627;
chunk__64887_65615 = G__65628;
count__64888_65616 = G__65629;
i__64889_65617 = G__65630;
continue;
} else {
var c_65632 = cljs.core.first(seq__64886_65625__$1);
var class_name_65633 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_65633,c_65632))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_65633 === ""))?c_65632:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_65633)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_65632)].join('')));
}


var G__65634 = cljs.core.next(seq__64886_65625__$1);
var G__65635 = null;
var G__65636 = (0);
var G__65637 = (0);
seq__64886_65614 = G__65634;
chunk__64887_65615 = G__65635;
count__64888_65616 = G__65636;
i__64889_65617 = G__65637;
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
var seq__64895_65638 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__64896_65639 = null;
var count__64897_65640 = (0);
var i__64898_65641 = (0);
while(true){
if((i__64898_65641 < count__64897_65640)){
var c_65642 = chunk__64896_65639.cljs$core$IIndexed$_nth$arity$2(null,i__64898_65641);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_65642);


var G__65643 = seq__64895_65638;
var G__65644 = chunk__64896_65639;
var G__65645 = count__64897_65640;
var G__65646 = (i__64898_65641 + (1));
seq__64895_65638 = G__65643;
chunk__64896_65639 = G__65644;
count__64897_65640 = G__65645;
i__64898_65641 = G__65646;
continue;
} else {
var temp__5735__auto___65647 = cljs.core.seq(seq__64895_65638);
if(temp__5735__auto___65647){
var seq__64895_65648__$1 = temp__5735__auto___65647;
if(cljs.core.chunked_seq_QMARK_(seq__64895_65648__$1)){
var c__4609__auto___65649 = cljs.core.chunk_first(seq__64895_65648__$1);
var G__65651 = cljs.core.chunk_rest(seq__64895_65648__$1);
var G__65652 = c__4609__auto___65649;
var G__65653 = cljs.core.count(c__4609__auto___65649);
var G__65654 = (0);
seq__64895_65638 = G__65651;
chunk__64896_65639 = G__65652;
count__64897_65640 = G__65653;
i__64898_65641 = G__65654;
continue;
} else {
var c_65657 = cljs.core.first(seq__64895_65648__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_65657);


var G__65658 = cljs.core.next(seq__64895_65648__$1);
var G__65659 = null;
var G__65660 = (0);
var G__65661 = (0);
seq__64895_65638 = G__65658;
chunk__64896_65639 = G__65659;
count__64897_65640 = G__65660;
i__64898_65641 = G__65661;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq64877){
var G__64878 = cljs.core.first(seq64877);
var seq64877__$1 = cljs.core.next(seq64877);
var G__64879 = cljs.core.first(seq64877__$1);
var seq64877__$2 = cljs.core.next(seq64877__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64878,G__64879,seq64877__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__64910 = arguments.length;
switch (G__64910) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65663 = arguments.length;
var i__4790__auto___65664 = (0);
while(true){
if((i__4790__auto___65664 < len__4789__auto___65663)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65664]));

var G__65665 = (i__4790__auto___65664 + (1));
i__4790__auto___65664 = G__65665;
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
var temp__5733__auto___65666 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___65666)){
var class_list_65667 = temp__5733__auto___65666;
class_list_65667.remove(c__$1);
} else {
var class_name_65668 = dommy.core.class$(elem);
var new_class_name_65669 = dommy.utils.remove_class_str(class_name_65668,c__$1);
if((class_name_65668 === new_class_name_65669)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_65669);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__64911 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__64912 = null;
var count__64913 = (0);
var i__64914 = (0);
while(true){
if((i__64914 < count__64913)){
var c = chunk__64912.cljs$core$IIndexed$_nth$arity$2(null,i__64914);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__65670 = seq__64911;
var G__65671 = chunk__64912;
var G__65672 = count__64913;
var G__65673 = (i__64914 + (1));
seq__64911 = G__65670;
chunk__64912 = G__65671;
count__64913 = G__65672;
i__64914 = G__65673;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64911);
if(temp__5735__auto__){
var seq__64911__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64911__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64911__$1);
var G__65674 = cljs.core.chunk_rest(seq__64911__$1);
var G__65675 = c__4609__auto__;
var G__65676 = cljs.core.count(c__4609__auto__);
var G__65677 = (0);
seq__64911 = G__65674;
chunk__64912 = G__65675;
count__64913 = G__65676;
i__64914 = G__65677;
continue;
} else {
var c = cljs.core.first(seq__64911__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__65678 = cljs.core.next(seq__64911__$1);
var G__65679 = null;
var G__65680 = (0);
var G__65681 = (0);
seq__64911 = G__65678;
chunk__64912 = G__65679;
count__64913 = G__65680;
i__64914 = G__65681;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq64907){
var G__64908 = cljs.core.first(seq64907);
var seq64907__$1 = cljs.core.next(seq64907);
var G__64909 = cljs.core.first(seq64907__$1);
var seq64907__$2 = cljs.core.next(seq64907__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64908,G__64909,seq64907__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__64921 = arguments.length;
switch (G__64921) {
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
var temp__5733__auto___65683 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___65683)){
var class_list_65684 = temp__5733__auto___65683;
class_list_65684.toggle(c__$1);
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
var G__64929 = arguments.length;
switch (G__64929) {
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
var G__64933 = arguments.length;
switch (G__64933) {
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
var G__64942 = arguments.length;
switch (G__64942) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65688 = arguments.length;
var i__4790__auto___65689 = (0);
while(true){
if((i__4790__auto___65689 < len__4789__auto___65688)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65689]));

var G__65690 = (i__4790__auto___65689 + (1));
i__4790__auto___65689 = G__65690;
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
var G__64944 = parent;
G__64944.appendChild(child);

return G__64944;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__64945_65691 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__64946_65692 = null;
var count__64947_65693 = (0);
var i__64948_65694 = (0);
while(true){
if((i__64948_65694 < count__64947_65693)){
var c_65695 = chunk__64946_65692.cljs$core$IIndexed$_nth$arity$2(null,i__64948_65694);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_65695);


var G__65696 = seq__64945_65691;
var G__65697 = chunk__64946_65692;
var G__65698 = count__64947_65693;
var G__65699 = (i__64948_65694 + (1));
seq__64945_65691 = G__65696;
chunk__64946_65692 = G__65697;
count__64947_65693 = G__65698;
i__64948_65694 = G__65699;
continue;
} else {
var temp__5735__auto___65700 = cljs.core.seq(seq__64945_65691);
if(temp__5735__auto___65700){
var seq__64945_65701__$1 = temp__5735__auto___65700;
if(cljs.core.chunked_seq_QMARK_(seq__64945_65701__$1)){
var c__4609__auto___65702 = cljs.core.chunk_first(seq__64945_65701__$1);
var G__65703 = cljs.core.chunk_rest(seq__64945_65701__$1);
var G__65704 = c__4609__auto___65702;
var G__65705 = cljs.core.count(c__4609__auto___65702);
var G__65706 = (0);
seq__64945_65691 = G__65703;
chunk__64946_65692 = G__65704;
count__64947_65693 = G__65705;
i__64948_65694 = G__65706;
continue;
} else {
var c_65707 = cljs.core.first(seq__64945_65701__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_65707);


var G__65708 = cljs.core.next(seq__64945_65701__$1);
var G__65709 = null;
var G__65710 = (0);
var G__65711 = (0);
seq__64945_65691 = G__65708;
chunk__64946_65692 = G__65709;
count__64947_65693 = G__65710;
i__64948_65694 = G__65711;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq64939){
var G__64940 = cljs.core.first(seq64939);
var seq64939__$1 = cljs.core.next(seq64939);
var G__64941 = cljs.core.first(seq64939__$1);
var seq64939__$2 = cljs.core.next(seq64939__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64940,G__64941,seq64939__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__64957 = arguments.length;
switch (G__64957) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___65713 = arguments.length;
var i__4790__auto___65714 = (0);
while(true){
if((i__4790__auto___65714 < len__4789__auto___65713)){
args_arr__4810__auto__.push((arguments[i__4790__auto___65714]));

var G__65715 = (i__4790__auto___65714 + (1));
i__4790__auto___65714 = G__65715;
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
var G__64958 = parent;
G__64958.insertBefore(child,parent.firstChild);

return G__64958;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__64959_65717 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__64960_65718 = null;
var count__64961_65719 = (0);
var i__64962_65720 = (0);
while(true){
if((i__64962_65720 < count__64961_65719)){
var c_65721 = chunk__64960_65718.cljs$core$IIndexed$_nth$arity$2(null,i__64962_65720);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_65721);


var G__65722 = seq__64959_65717;
var G__65723 = chunk__64960_65718;
var G__65724 = count__64961_65719;
var G__65725 = (i__64962_65720 + (1));
seq__64959_65717 = G__65722;
chunk__64960_65718 = G__65723;
count__64961_65719 = G__65724;
i__64962_65720 = G__65725;
continue;
} else {
var temp__5735__auto___65726 = cljs.core.seq(seq__64959_65717);
if(temp__5735__auto___65726){
var seq__64959_65727__$1 = temp__5735__auto___65726;
if(cljs.core.chunked_seq_QMARK_(seq__64959_65727__$1)){
var c__4609__auto___65728 = cljs.core.chunk_first(seq__64959_65727__$1);
var G__65729 = cljs.core.chunk_rest(seq__64959_65727__$1);
var G__65730 = c__4609__auto___65728;
var G__65731 = cljs.core.count(c__4609__auto___65728);
var G__65732 = (0);
seq__64959_65717 = G__65729;
chunk__64960_65718 = G__65730;
count__64961_65719 = G__65731;
i__64962_65720 = G__65732;
continue;
} else {
var c_65733 = cljs.core.first(seq__64959_65727__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_65733);


var G__65734 = cljs.core.next(seq__64959_65727__$1);
var G__65735 = null;
var G__65736 = (0);
var G__65737 = (0);
seq__64959_65717 = G__65734;
chunk__64960_65718 = G__65735;
count__64961_65719 = G__65736;
i__64962_65720 = G__65737;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq64954){
var G__64955 = cljs.core.first(seq64954);
var seq64954__$1 = cljs.core.next(seq64954);
var G__64956 = cljs.core.first(seq64954__$1);
var seq64954__$2 = cljs.core.next(seq64954__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64955,G__64956,seq64954__$2);
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
var temp__5733__auto___65738 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___65738)){
var next_65739 = temp__5733__auto___65738;
dommy.core.insert_before_BANG_(elem,next_65739);
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
var G__64970 = arguments.length;
switch (G__64970) {
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
var G__64973 = p;
G__64973.removeChild(elem);

return G__64973;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64974){
var vec__64975 = p__64974;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64975,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64975,(1),null);
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
var len__4789__auto___65755 = arguments.length;
var i__4790__auto___65756 = (0);
while(true){
if((i__4790__auto___65756 < len__4789__auto___65755)){
args__4795__auto__.push((arguments[i__4790__auto___65756]));

var G__65757 = (i__4790__auto___65756 + (1));
i__4790__auto___65756 = G__65757;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq64979){
var G__64980 = cljs.core.first(seq64979);
var seq64979__$1 = cljs.core.next(seq64979);
var G__64981 = cljs.core.first(seq64979__$1);
var seq64979__$2 = cljs.core.next(seq64979__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64980,G__64981,seq64979__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__64985 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__64985.cljs$core$IFn$_invoke$arity$1 ? fexpr__64985.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__64985.call(null,elem_sel));
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
var len__4789__auto___65759 = arguments.length;
var i__4790__auto___65760 = (0);
while(true){
if((i__4790__auto___65760 < len__4789__auto___65759)){
args__4795__auto__.push((arguments[i__4790__auto___65760]));

var G__65761 = (i__4790__auto___65760 + (1));
i__4790__auto___65760 = G__65761;
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

var vec__64992_65762 = dommy.core.elem_and_selector(elem_sel);
var elem_65763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64992_65762,(0),null);
var selector_65764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64992_65762,(1),null);
var seq__64995_65765 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__65002_65766 = null;
var count__65003_65767 = (0);
var i__65004_65768 = (0);
while(true){
if((i__65004_65768 < count__65003_65767)){
var vec__65081_65769 = chunk__65002_65766.cljs$core$IIndexed$_nth$arity$2(null,i__65004_65768);
var orig_type_65770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65081_65769,(0),null);
var f_65771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65081_65769,(1),null);
var seq__65005_65772 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_65770,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_65770,cljs.core.identity])));
var chunk__65007_65773 = null;
var count__65008_65774 = (0);
var i__65009_65775 = (0);
while(true){
if((i__65009_65775 < count__65008_65774)){
var vec__65098_65776 = chunk__65007_65773.cljs$core$IIndexed$_nth$arity$2(null,i__65009_65775);
var actual_type_65777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65098_65776,(0),null);
var factory_65778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65098_65776,(1),null);
var canonical_f_65779 = (function (){var G__65103 = (factory_65778.cljs$core$IFn$_invoke$arity$1 ? factory_65778.cljs$core$IFn$_invoke$arity$1(f_65771) : factory_65778.call(null,f_65771));
var fexpr__65101 = (cljs.core.truth_(selector_65764)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_65763,selector_65764):cljs.core.identity);
return (fexpr__65101.cljs$core$IFn$_invoke$arity$1 ? fexpr__65101.cljs$core$IFn$_invoke$arity$1(G__65103) : fexpr__65101.call(null,G__65103));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65763,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65764,actual_type_65777,f_65771], null),canonical_f_65779], 0));

if(cljs.core.truth_(elem_65763.addEventListener)){
elem_65763.addEventListener(cljs.core.name(actual_type_65777),canonical_f_65779);
} else {
elem_65763.attachEvent(cljs.core.name(actual_type_65777),canonical_f_65779);
}


var G__65783 = seq__65005_65772;
var G__65784 = chunk__65007_65773;
var G__65785 = count__65008_65774;
var G__65786 = (i__65009_65775 + (1));
seq__65005_65772 = G__65783;
chunk__65007_65773 = G__65784;
count__65008_65774 = G__65785;
i__65009_65775 = G__65786;
continue;
} else {
var temp__5735__auto___65787 = cljs.core.seq(seq__65005_65772);
if(temp__5735__auto___65787){
var seq__65005_65788__$1 = temp__5735__auto___65787;
if(cljs.core.chunked_seq_QMARK_(seq__65005_65788__$1)){
var c__4609__auto___65789 = cljs.core.chunk_first(seq__65005_65788__$1);
var G__65790 = cljs.core.chunk_rest(seq__65005_65788__$1);
var G__65791 = c__4609__auto___65789;
var G__65792 = cljs.core.count(c__4609__auto___65789);
var G__65793 = (0);
seq__65005_65772 = G__65790;
chunk__65007_65773 = G__65791;
count__65008_65774 = G__65792;
i__65009_65775 = G__65793;
continue;
} else {
var vec__65107_65794 = cljs.core.first(seq__65005_65788__$1);
var actual_type_65795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65107_65794,(0),null);
var factory_65796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65107_65794,(1),null);
var canonical_f_65797 = (function (){var G__65111 = (factory_65796.cljs$core$IFn$_invoke$arity$1 ? factory_65796.cljs$core$IFn$_invoke$arity$1(f_65771) : factory_65796.call(null,f_65771));
var fexpr__65110 = (cljs.core.truth_(selector_65764)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_65763,selector_65764):cljs.core.identity);
return (fexpr__65110.cljs$core$IFn$_invoke$arity$1 ? fexpr__65110.cljs$core$IFn$_invoke$arity$1(G__65111) : fexpr__65110.call(null,G__65111));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65763,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65764,actual_type_65795,f_65771], null),canonical_f_65797], 0));

if(cljs.core.truth_(elem_65763.addEventListener)){
elem_65763.addEventListener(cljs.core.name(actual_type_65795),canonical_f_65797);
} else {
elem_65763.attachEvent(cljs.core.name(actual_type_65795),canonical_f_65797);
}


var G__65798 = cljs.core.next(seq__65005_65788__$1);
var G__65799 = null;
var G__65800 = (0);
var G__65801 = (0);
seq__65005_65772 = G__65798;
chunk__65007_65773 = G__65799;
count__65008_65774 = G__65800;
i__65009_65775 = G__65801;
continue;
}
} else {
}
}
break;
}

var G__65803 = seq__64995_65765;
var G__65804 = chunk__65002_65766;
var G__65805 = count__65003_65767;
var G__65806 = (i__65004_65768 + (1));
seq__64995_65765 = G__65803;
chunk__65002_65766 = G__65804;
count__65003_65767 = G__65805;
i__65004_65768 = G__65806;
continue;
} else {
var temp__5735__auto___65808 = cljs.core.seq(seq__64995_65765);
if(temp__5735__auto___65808){
var seq__64995_65809__$1 = temp__5735__auto___65808;
if(cljs.core.chunked_seq_QMARK_(seq__64995_65809__$1)){
var c__4609__auto___65810 = cljs.core.chunk_first(seq__64995_65809__$1);
var G__65812 = cljs.core.chunk_rest(seq__64995_65809__$1);
var G__65813 = c__4609__auto___65810;
var G__65814 = cljs.core.count(c__4609__auto___65810);
var G__65815 = (0);
seq__64995_65765 = G__65812;
chunk__65002_65766 = G__65813;
count__65003_65767 = G__65814;
i__65004_65768 = G__65815;
continue;
} else {
var vec__65113_65820 = cljs.core.first(seq__64995_65809__$1);
var orig_type_65821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65113_65820,(0),null);
var f_65822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65113_65820,(1),null);
var seq__64996_65823 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_65821,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_65821,cljs.core.identity])));
var chunk__64998_65824 = null;
var count__64999_65825 = (0);
var i__65000_65826 = (0);
while(true){
if((i__65000_65826 < count__64999_65825)){
var vec__65136_65829 = chunk__64998_65824.cljs$core$IIndexed$_nth$arity$2(null,i__65000_65826);
var actual_type_65830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136_65829,(0),null);
var factory_65831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65136_65829,(1),null);
var canonical_f_65832 = (function (){var G__65142 = (factory_65831.cljs$core$IFn$_invoke$arity$1 ? factory_65831.cljs$core$IFn$_invoke$arity$1(f_65822) : factory_65831.call(null,f_65822));
var fexpr__65141 = (cljs.core.truth_(selector_65764)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_65763,selector_65764):cljs.core.identity);
return (fexpr__65141.cljs$core$IFn$_invoke$arity$1 ? fexpr__65141.cljs$core$IFn$_invoke$arity$1(G__65142) : fexpr__65141.call(null,G__65142));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65763,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65764,actual_type_65830,f_65822], null),canonical_f_65832], 0));

if(cljs.core.truth_(elem_65763.addEventListener)){
elem_65763.addEventListener(cljs.core.name(actual_type_65830),canonical_f_65832);
} else {
elem_65763.attachEvent(cljs.core.name(actual_type_65830),canonical_f_65832);
}


var G__65835 = seq__64996_65823;
var G__65836 = chunk__64998_65824;
var G__65837 = count__64999_65825;
var G__65838 = (i__65000_65826 + (1));
seq__64996_65823 = G__65835;
chunk__64998_65824 = G__65836;
count__64999_65825 = G__65837;
i__65000_65826 = G__65838;
continue;
} else {
var temp__5735__auto___65839__$1 = cljs.core.seq(seq__64996_65823);
if(temp__5735__auto___65839__$1){
var seq__64996_65840__$1 = temp__5735__auto___65839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64996_65840__$1)){
var c__4609__auto___65841 = cljs.core.chunk_first(seq__64996_65840__$1);
var G__65842 = cljs.core.chunk_rest(seq__64996_65840__$1);
var G__65843 = c__4609__auto___65841;
var G__65844 = cljs.core.count(c__4609__auto___65841);
var G__65845 = (0);
seq__64996_65823 = G__65842;
chunk__64998_65824 = G__65843;
count__64999_65825 = G__65844;
i__65000_65826 = G__65845;
continue;
} else {
var vec__65144_65846 = cljs.core.first(seq__64996_65840__$1);
var actual_type_65847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65144_65846,(0),null);
var factory_65848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65144_65846,(1),null);
var canonical_f_65849 = (function (){var G__65148 = (factory_65848.cljs$core$IFn$_invoke$arity$1 ? factory_65848.cljs$core$IFn$_invoke$arity$1(f_65822) : factory_65848.call(null,f_65822));
var fexpr__65147 = (cljs.core.truth_(selector_65764)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_65763,selector_65764):cljs.core.identity);
return (fexpr__65147.cljs$core$IFn$_invoke$arity$1 ? fexpr__65147.cljs$core$IFn$_invoke$arity$1(G__65148) : fexpr__65147.call(null,G__65148));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65763,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65764,actual_type_65847,f_65822], null),canonical_f_65849], 0));

if(cljs.core.truth_(elem_65763.addEventListener)){
elem_65763.addEventListener(cljs.core.name(actual_type_65847),canonical_f_65849);
} else {
elem_65763.attachEvent(cljs.core.name(actual_type_65847),canonical_f_65849);
}


var G__65850 = cljs.core.next(seq__64996_65840__$1);
var G__65851 = null;
var G__65852 = (0);
var G__65853 = (0);
seq__64996_65823 = G__65850;
chunk__64998_65824 = G__65851;
count__64999_65825 = G__65852;
i__65000_65826 = G__65853;
continue;
}
} else {
}
}
break;
}

var G__65854 = cljs.core.next(seq__64995_65809__$1);
var G__65855 = null;
var G__65856 = (0);
var G__65857 = (0);
seq__64995_65765 = G__65854;
chunk__65002_65766 = G__65855;
count__65003_65767 = G__65856;
i__65004_65768 = G__65857;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq64988){
var G__64989 = cljs.core.first(seq64988);
var seq64988__$1 = cljs.core.next(seq64988);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64989,seq64988__$1);
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
var len__4789__auto___65860 = arguments.length;
var i__4790__auto___65861 = (0);
while(true){
if((i__4790__auto___65861 < len__4789__auto___65860)){
args__4795__auto__.push((arguments[i__4790__auto___65861]));

var G__65864 = (i__4790__auto___65861 + (1));
i__4790__auto___65861 = G__65864;
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

var vec__65158_65865 = dommy.core.elem_and_selector(elem_sel);
var elem_65866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65158_65865,(0),null);
var selector_65867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65158_65865,(1),null);
var seq__65161_65868 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__65168_65869 = null;
var count__65169_65870 = (0);
var i__65170_65871 = (0);
while(true){
if((i__65170_65871 < count__65169_65870)){
var vec__65317_65873 = chunk__65168_65869.cljs$core$IIndexed$_nth$arity$2(null,i__65170_65871);
var orig_type_65874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65317_65873,(0),null);
var f_65875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65317_65873,(1),null);
var seq__65171_65876 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_65874,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_65874,cljs.core.identity])));
var chunk__65173_65877 = null;
var count__65174_65878 = (0);
var i__65175_65879 = (0);
while(true){
if((i__65175_65879 < count__65174_65878)){
var vec__65335_65880 = chunk__65173_65877.cljs$core$IIndexed$_nth$arity$2(null,i__65175_65879);
var actual_type_65881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65335_65880,(0),null);
var __65882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65335_65880,(1),null);
var keys_65883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65867,actual_type_65881,f_65875], null);
var canonical_f_65884 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_65866),keys_65883);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65866,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_65883], 0));

if(cljs.core.truth_(elem_65866.removeEventListener)){
elem_65866.removeEventListener(cljs.core.name(actual_type_65881),canonical_f_65884);
} else {
elem_65866.detachEvent(cljs.core.name(actual_type_65881),canonical_f_65884);
}


var G__65885 = seq__65171_65876;
var G__65886 = chunk__65173_65877;
var G__65887 = count__65174_65878;
var G__65888 = (i__65175_65879 + (1));
seq__65171_65876 = G__65885;
chunk__65173_65877 = G__65886;
count__65174_65878 = G__65887;
i__65175_65879 = G__65888;
continue;
} else {
var temp__5735__auto___65889 = cljs.core.seq(seq__65171_65876);
if(temp__5735__auto___65889){
var seq__65171_65890__$1 = temp__5735__auto___65889;
if(cljs.core.chunked_seq_QMARK_(seq__65171_65890__$1)){
var c__4609__auto___65891 = cljs.core.chunk_first(seq__65171_65890__$1);
var G__65892 = cljs.core.chunk_rest(seq__65171_65890__$1);
var G__65893 = c__4609__auto___65891;
var G__65894 = cljs.core.count(c__4609__auto___65891);
var G__65895 = (0);
seq__65171_65876 = G__65892;
chunk__65173_65877 = G__65893;
count__65174_65878 = G__65894;
i__65175_65879 = G__65895;
continue;
} else {
var vec__65343_65896 = cljs.core.first(seq__65171_65890__$1);
var actual_type_65897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65343_65896,(0),null);
var __65898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65343_65896,(1),null);
var keys_65899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65867,actual_type_65897,f_65875], null);
var canonical_f_65900 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_65866),keys_65899);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65866,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_65899], 0));

if(cljs.core.truth_(elem_65866.removeEventListener)){
elem_65866.removeEventListener(cljs.core.name(actual_type_65897),canonical_f_65900);
} else {
elem_65866.detachEvent(cljs.core.name(actual_type_65897),canonical_f_65900);
}


var G__65902 = cljs.core.next(seq__65171_65890__$1);
var G__65903 = null;
var G__65904 = (0);
var G__65905 = (0);
seq__65171_65876 = G__65902;
chunk__65173_65877 = G__65903;
count__65174_65878 = G__65904;
i__65175_65879 = G__65905;
continue;
}
} else {
}
}
break;
}

var G__65906 = seq__65161_65868;
var G__65907 = chunk__65168_65869;
var G__65908 = count__65169_65870;
var G__65909 = (i__65170_65871 + (1));
seq__65161_65868 = G__65906;
chunk__65168_65869 = G__65907;
count__65169_65870 = G__65908;
i__65170_65871 = G__65909;
continue;
} else {
var temp__5735__auto___65910 = cljs.core.seq(seq__65161_65868);
if(temp__5735__auto___65910){
var seq__65161_65911__$1 = temp__5735__auto___65910;
if(cljs.core.chunked_seq_QMARK_(seq__65161_65911__$1)){
var c__4609__auto___65912 = cljs.core.chunk_first(seq__65161_65911__$1);
var G__65913 = cljs.core.chunk_rest(seq__65161_65911__$1);
var G__65914 = c__4609__auto___65912;
var G__65915 = cljs.core.count(c__4609__auto___65912);
var G__65916 = (0);
seq__65161_65868 = G__65913;
chunk__65168_65869 = G__65914;
count__65169_65870 = G__65915;
i__65170_65871 = G__65916;
continue;
} else {
var vec__65354_65917 = cljs.core.first(seq__65161_65911__$1);
var orig_type_65918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65354_65917,(0),null);
var f_65919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65354_65917,(1),null);
var seq__65162_65920 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_65918,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_65918,cljs.core.identity])));
var chunk__65164_65921 = null;
var count__65165_65922 = (0);
var i__65166_65923 = (0);
while(true){
if((i__65166_65923 < count__65165_65922)){
var vec__65369_65924 = chunk__65164_65921.cljs$core$IIndexed$_nth$arity$2(null,i__65166_65923);
var actual_type_65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65369_65924,(0),null);
var __65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65369_65924,(1),null);
var keys_65927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65867,actual_type_65925,f_65919], null);
var canonical_f_65928 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_65866),keys_65927);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65866,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_65927], 0));

if(cljs.core.truth_(elem_65866.removeEventListener)){
elem_65866.removeEventListener(cljs.core.name(actual_type_65925),canonical_f_65928);
} else {
elem_65866.detachEvent(cljs.core.name(actual_type_65925),canonical_f_65928);
}


var G__65929 = seq__65162_65920;
var G__65930 = chunk__65164_65921;
var G__65931 = count__65165_65922;
var G__65932 = (i__65166_65923 + (1));
seq__65162_65920 = G__65929;
chunk__65164_65921 = G__65930;
count__65165_65922 = G__65931;
i__65166_65923 = G__65932;
continue;
} else {
var temp__5735__auto___65933__$1 = cljs.core.seq(seq__65162_65920);
if(temp__5735__auto___65933__$1){
var seq__65162_65934__$1 = temp__5735__auto___65933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65162_65934__$1)){
var c__4609__auto___65935 = cljs.core.chunk_first(seq__65162_65934__$1);
var G__65936 = cljs.core.chunk_rest(seq__65162_65934__$1);
var G__65937 = c__4609__auto___65935;
var G__65938 = cljs.core.count(c__4609__auto___65935);
var G__65939 = (0);
seq__65162_65920 = G__65936;
chunk__65164_65921 = G__65937;
count__65165_65922 = G__65938;
i__65166_65923 = G__65939;
continue;
} else {
var vec__65373_65940 = cljs.core.first(seq__65162_65934__$1);
var actual_type_65941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65373_65940,(0),null);
var __65942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65373_65940,(1),null);
var keys_65943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65867,actual_type_65941,f_65919], null);
var canonical_f_65944 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_65866),keys_65943);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_65866,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_65943], 0));

if(cljs.core.truth_(elem_65866.removeEventListener)){
elem_65866.removeEventListener(cljs.core.name(actual_type_65941),canonical_f_65944);
} else {
elem_65866.detachEvent(cljs.core.name(actual_type_65941),canonical_f_65944);
}


var G__65945 = cljs.core.next(seq__65162_65934__$1);
var G__65946 = null;
var G__65947 = (0);
var G__65948 = (0);
seq__65162_65920 = G__65945;
chunk__65164_65921 = G__65946;
count__65165_65922 = G__65947;
i__65166_65923 = G__65948;
continue;
}
} else {
}
}
break;
}

var G__65949 = cljs.core.next(seq__65161_65911__$1);
var G__65950 = null;
var G__65951 = (0);
var G__65952 = (0);
seq__65161_65868 = G__65949;
chunk__65168_65869 = G__65950;
count__65169_65870 = G__65951;
i__65170_65871 = G__65952;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq65153){
var G__65154 = cljs.core.first(seq65153);
var seq65153__$1 = cljs.core.next(seq65153);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65154,seq65153__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65953 = arguments.length;
var i__4790__auto___65954 = (0);
while(true){
if((i__4790__auto___65954 < len__4789__auto___65953)){
args__4795__auto__.push((arguments[i__4790__auto___65954]));

var G__65955 = (i__4790__auto___65954 + (1));
i__4790__auto___65954 = G__65955;
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

var vec__65384_65956 = dommy.core.elem_and_selector(elem_sel);
var elem_65957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65384_65956,(0),null);
var selector_65958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65384_65956,(1),null);
var seq__65387_65959 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__65388_65960 = null;
var count__65389_65961 = (0);
var i__65390_65962 = (0);
while(true){
if((i__65390_65962 < count__65389_65961)){
var vec__65399_65963 = chunk__65388_65960.cljs$core$IIndexed$_nth$arity$2(null,i__65390_65962);
var type_65964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65399_65963,(0),null);
var f_65965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65399_65963,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_65964,((function (seq__65387_65959,chunk__65388_65960,count__65389_65961,i__65390_65962,vec__65399_65963,type_65964,f_65965,vec__65384_65956,elem_65957,selector_65958){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_65964,dommy$core$this_fn], 0));

return (f_65965.cljs$core$IFn$_invoke$arity$1 ? f_65965.cljs$core$IFn$_invoke$arity$1(e) : f_65965.call(null,e));
});})(seq__65387_65959,chunk__65388_65960,count__65389_65961,i__65390_65962,vec__65399_65963,type_65964,f_65965,vec__65384_65956,elem_65957,selector_65958))
], 0));


var G__65966 = seq__65387_65959;
var G__65967 = chunk__65388_65960;
var G__65968 = count__65389_65961;
var G__65969 = (i__65390_65962 + (1));
seq__65387_65959 = G__65966;
chunk__65388_65960 = G__65967;
count__65389_65961 = G__65968;
i__65390_65962 = G__65969;
continue;
} else {
var temp__5735__auto___65970 = cljs.core.seq(seq__65387_65959);
if(temp__5735__auto___65970){
var seq__65387_65971__$1 = temp__5735__auto___65970;
if(cljs.core.chunked_seq_QMARK_(seq__65387_65971__$1)){
var c__4609__auto___65972 = cljs.core.chunk_first(seq__65387_65971__$1);
var G__65973 = cljs.core.chunk_rest(seq__65387_65971__$1);
var G__65974 = c__4609__auto___65972;
var G__65975 = cljs.core.count(c__4609__auto___65972);
var G__65976 = (0);
seq__65387_65959 = G__65973;
chunk__65388_65960 = G__65974;
count__65389_65961 = G__65975;
i__65390_65962 = G__65976;
continue;
} else {
var vec__65402_65977 = cljs.core.first(seq__65387_65971__$1);
var type_65978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65402_65977,(0),null);
var f_65979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65402_65977,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_65978,((function (seq__65387_65959,chunk__65388_65960,count__65389_65961,i__65390_65962,vec__65402_65977,type_65978,f_65979,seq__65387_65971__$1,temp__5735__auto___65970,vec__65384_65956,elem_65957,selector_65958){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_65978,dommy$core$this_fn], 0));

return (f_65979.cljs$core$IFn$_invoke$arity$1 ? f_65979.cljs$core$IFn$_invoke$arity$1(e) : f_65979.call(null,e));
});})(seq__65387_65959,chunk__65388_65960,count__65389_65961,i__65390_65962,vec__65402_65977,type_65978,f_65979,seq__65387_65971__$1,temp__5735__auto___65970,vec__65384_65956,elem_65957,selector_65958))
], 0));


var G__65980 = cljs.core.next(seq__65387_65971__$1);
var G__65981 = null;
var G__65982 = (0);
var G__65983 = (0);
seq__65387_65959 = G__65980;
chunk__65388_65960 = G__65981;
count__65389_65961 = G__65982;
i__65390_65962 = G__65983;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq65379){
var G__65380 = cljs.core.first(seq65379);
var seq65379__$1 = cljs.core.next(seq65379);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65380,seq65379__$1);
}));


//# sourceMappingURL=dommy.core.js.map
