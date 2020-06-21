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
var G__78473 = arguments.length;
switch (G__78473) {
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
var G__78477 = arguments.length;
switch (G__78477) {
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
var G__78484 = arguments.length;
switch (G__78484) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__78482_SHARP_){
return (!((p1__78482_SHARP_ === base)));
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
var len__4789__auto___79170 = arguments.length;
var i__4790__auto___79171 = (0);
while(true){
if((i__4790__auto___79171 < len__4789__auto___79170)){
args__4795__auto__.push((arguments[i__4790__auto___79171]));

var G__79176 = (i__4790__auto___79171 + (1));
i__4790__auto___79171 = G__79176;
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
var seq__78494_79178 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__78495_79179 = null;
var count__78496_79180 = (0);
var i__78497_79181 = (0);
while(true){
if((i__78497_79181 < count__78496_79180)){
var vec__78504_79183 = chunk__78495_79179.cljs$core$IIndexed$_nth$arity$2(null,i__78497_79181);
var k_79184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78504_79183,(0),null);
var v_79185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78504_79183,(1),null);
style.setProperty(dommy.utils.as_str(k_79184),v_79185);


var G__79187 = seq__78494_79178;
var G__79188 = chunk__78495_79179;
var G__79189 = count__78496_79180;
var G__79190 = (i__78497_79181 + (1));
seq__78494_79178 = G__79187;
chunk__78495_79179 = G__79188;
count__78496_79180 = G__79189;
i__78497_79181 = G__79190;
continue;
} else {
var temp__5735__auto___79193 = cljs.core.seq(seq__78494_79178);
if(temp__5735__auto___79193){
var seq__78494_79194__$1 = temp__5735__auto___79193;
if(cljs.core.chunked_seq_QMARK_(seq__78494_79194__$1)){
var c__4609__auto___79195 = cljs.core.chunk_first(seq__78494_79194__$1);
var G__79196 = cljs.core.chunk_rest(seq__78494_79194__$1);
var G__79197 = c__4609__auto___79195;
var G__79198 = cljs.core.count(c__4609__auto___79195);
var G__79199 = (0);
seq__78494_79178 = G__79196;
chunk__78495_79179 = G__79197;
count__78496_79180 = G__79198;
i__78497_79181 = G__79199;
continue;
} else {
var vec__78507_79201 = cljs.core.first(seq__78494_79194__$1);
var k_79202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78507_79201,(0),null);
var v_79203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78507_79201,(1),null);
style.setProperty(dommy.utils.as_str(k_79202),v_79203);


var G__79204 = cljs.core.next(seq__78494_79194__$1);
var G__79205 = null;
var G__79206 = (0);
var G__79207 = (0);
seq__78494_79178 = G__79204;
chunk__78495_79179 = G__79205;
count__78496_79180 = G__79206;
i__78497_79181 = G__79207;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq78492){
var G__78493 = cljs.core.first(seq78492);
var seq78492__$1 = cljs.core.next(seq78492);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78493,seq78492__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___79208 = arguments.length;
var i__4790__auto___79209 = (0);
while(true){
if((i__4790__auto___79209 < len__4789__auto___79208)){
args__4795__auto__.push((arguments[i__4790__auto___79209]));

var G__79210 = (i__4790__auto___79209 + (1));
i__4790__auto___79209 = G__79210;
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
var seq__78514_79211 = cljs.core.seq(keywords);
var chunk__78515_79212 = null;
var count__78516_79213 = (0);
var i__78517_79214 = (0);
while(true){
if((i__78517_79214 < count__78516_79213)){
var kw_79215 = chunk__78515_79212.cljs$core$IIndexed$_nth$arity$2(null,i__78517_79214);
style.removeProperty(dommy.utils.as_str(kw_79215));


var G__79216 = seq__78514_79211;
var G__79217 = chunk__78515_79212;
var G__79218 = count__78516_79213;
var G__79219 = (i__78517_79214 + (1));
seq__78514_79211 = G__79216;
chunk__78515_79212 = G__79217;
count__78516_79213 = G__79218;
i__78517_79214 = G__79219;
continue;
} else {
var temp__5735__auto___79220 = cljs.core.seq(seq__78514_79211);
if(temp__5735__auto___79220){
var seq__78514_79221__$1 = temp__5735__auto___79220;
if(cljs.core.chunked_seq_QMARK_(seq__78514_79221__$1)){
var c__4609__auto___79222 = cljs.core.chunk_first(seq__78514_79221__$1);
var G__79223 = cljs.core.chunk_rest(seq__78514_79221__$1);
var G__79224 = c__4609__auto___79222;
var G__79225 = cljs.core.count(c__4609__auto___79222);
var G__79226 = (0);
seq__78514_79211 = G__79223;
chunk__78515_79212 = G__79224;
count__78516_79213 = G__79225;
i__78517_79214 = G__79226;
continue;
} else {
var kw_79228 = cljs.core.first(seq__78514_79221__$1);
style.removeProperty(dommy.utils.as_str(kw_79228));


var G__79229 = cljs.core.next(seq__78514_79221__$1);
var G__79230 = null;
var G__79231 = (0);
var G__79232 = (0);
seq__78514_79211 = G__79229;
chunk__78515_79212 = G__79230;
count__78516_79213 = G__79231;
i__78517_79214 = G__79232;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq78510){
var G__78511 = cljs.core.first(seq78510);
var seq78510__$1 = cljs.core.next(seq78510);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78511,seq78510__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___79233 = arguments.length;
var i__4790__auto___79234 = (0);
while(true){
if((i__4790__auto___79234 < len__4789__auto___79233)){
args__4795__auto__.push((arguments[i__4790__auto___79234]));

var G__79235 = (i__4790__auto___79234 + (1));
i__4790__auto___79234 = G__79235;
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

var seq__78523_79237 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__78524_79238 = null;
var count__78525_79239 = (0);
var i__78526_79240 = (0);
while(true){
if((i__78526_79240 < count__78525_79239)){
var vec__78534_79245 = chunk__78524_79238.cljs$core$IIndexed$_nth$arity$2(null,i__78526_79240);
var k_79246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78534_79245,(0),null);
var v_79247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78534_79245,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_79246,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_79247),"px"].join('')], 0));


var G__79248 = seq__78523_79237;
var G__79249 = chunk__78524_79238;
var G__79250 = count__78525_79239;
var G__79251 = (i__78526_79240 + (1));
seq__78523_79237 = G__79248;
chunk__78524_79238 = G__79249;
count__78525_79239 = G__79250;
i__78526_79240 = G__79251;
continue;
} else {
var temp__5735__auto___79252 = cljs.core.seq(seq__78523_79237);
if(temp__5735__auto___79252){
var seq__78523_79253__$1 = temp__5735__auto___79252;
if(cljs.core.chunked_seq_QMARK_(seq__78523_79253__$1)){
var c__4609__auto___79254 = cljs.core.chunk_first(seq__78523_79253__$1);
var G__79255 = cljs.core.chunk_rest(seq__78523_79253__$1);
var G__79256 = c__4609__auto___79254;
var G__79257 = cljs.core.count(c__4609__auto___79254);
var G__79258 = (0);
seq__78523_79237 = G__79255;
chunk__78524_79238 = G__79256;
count__78525_79239 = G__79257;
i__78526_79240 = G__79258;
continue;
} else {
var vec__78537_79259 = cljs.core.first(seq__78523_79253__$1);
var k_79260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78537_79259,(0),null);
var v_79261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78537_79259,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_79260,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_79261),"px"].join('')], 0));


var G__79263 = cljs.core.next(seq__78523_79253__$1);
var G__79264 = null;
var G__79265 = (0);
var G__79266 = (0);
seq__78523_79237 = G__79263;
chunk__78524_79238 = G__79264;
count__78525_79239 = G__79265;
i__78526_79240 = G__79266;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq78521){
var G__78522 = cljs.core.first(seq78521);
var seq78521__$1 = cljs.core.next(seq78521);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78522,seq78521__$1);
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
var G__78546 = arguments.length;
switch (G__78546) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79270 = arguments.length;
var i__4790__auto___79271 = (0);
while(true){
if((i__4790__auto___79271 < len__4789__auto___79270)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79271]));

var G__79273 = (i__4790__auto___79271 + (1));
i__4790__auto___79271 = G__79273;
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
var G__78547 = elem;
(G__78547[k__$1] = v);

return G__78547;
} else {
var G__78548 = elem;
G__78548.setAttribute(k__$1,v);

return G__78548;
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

var seq__78551_79277 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__78552_79278 = null;
var count__78553_79279 = (0);
var i__78554_79280 = (0);
while(true){
if((i__78554_79280 < count__78553_79279)){
var vec__78562_79281 = chunk__78552_79278.cljs$core$IIndexed$_nth$arity$2(null,i__78554_79280);
var k_79282__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78562_79281,(0),null);
var v_79283__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78562_79281,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_79282__$1,v_79283__$1);


var G__79284 = seq__78551_79277;
var G__79285 = chunk__78552_79278;
var G__79286 = count__78553_79279;
var G__79287 = (i__78554_79280 + (1));
seq__78551_79277 = G__79284;
chunk__78552_79278 = G__79285;
count__78553_79279 = G__79286;
i__78554_79280 = G__79287;
continue;
} else {
var temp__5735__auto___79289 = cljs.core.seq(seq__78551_79277);
if(temp__5735__auto___79289){
var seq__78551_79290__$1 = temp__5735__auto___79289;
if(cljs.core.chunked_seq_QMARK_(seq__78551_79290__$1)){
var c__4609__auto___79291 = cljs.core.chunk_first(seq__78551_79290__$1);
var G__79292 = cljs.core.chunk_rest(seq__78551_79290__$1);
var G__79293 = c__4609__auto___79291;
var G__79294 = cljs.core.count(c__4609__auto___79291);
var G__79295 = (0);
seq__78551_79277 = G__79292;
chunk__78552_79278 = G__79293;
count__78553_79279 = G__79294;
i__78554_79280 = G__79295;
continue;
} else {
var vec__78565_79296 = cljs.core.first(seq__78551_79290__$1);
var k_79297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78565_79296,(0),null);
var v_79298__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78565_79296,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_79297__$1,v_79298__$1);


var G__79299 = cljs.core.next(seq__78551_79290__$1);
var G__79300 = null;
var G__79301 = (0);
var G__79302 = (0);
seq__78551_79277 = G__79299;
chunk__78552_79278 = G__79300;
count__78553_79279 = G__79301;
i__78554_79280 = G__79302;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq78542){
var G__78543 = cljs.core.first(seq78542);
var seq78542__$1 = cljs.core.next(seq78542);
var G__78544 = cljs.core.first(seq78542__$1);
var seq78542__$2 = cljs.core.next(seq78542__$1);
var G__78545 = cljs.core.first(seq78542__$2);
var seq78542__$3 = cljs.core.next(seq78542__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78543,G__78544,G__78545,seq78542__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__78572 = arguments.length;
switch (G__78572) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79305 = arguments.length;
var i__4790__auto___79306 = (0);
while(true){
if((i__4790__auto___79306 < len__4789__auto___79305)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79306]));

var G__79307 = (i__4790__auto___79306 + (1));
i__4790__auto___79306 = G__79307;
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
var k_79308__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__78576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__78576.cljs$core$IFn$_invoke$arity$1 ? fexpr__78576.cljs$core$IFn$_invoke$arity$1(k_79308__$1) : fexpr__78576.call(null,k_79308__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_79308__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__78578_79309 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__78579_79310 = null;
var count__78580_79311 = (0);
var i__78581_79312 = (0);
while(true){
if((i__78581_79312 < count__78580_79311)){
var k_79314__$1 = chunk__78579_79310.cljs$core$IIndexed$_nth$arity$2(null,i__78581_79312);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_79314__$1);


var G__79317 = seq__78578_79309;
var G__79318 = chunk__78579_79310;
var G__79319 = count__78580_79311;
var G__79320 = (i__78581_79312 + (1));
seq__78578_79309 = G__79317;
chunk__78579_79310 = G__79318;
count__78580_79311 = G__79319;
i__78581_79312 = G__79320;
continue;
} else {
var temp__5735__auto___79321 = cljs.core.seq(seq__78578_79309);
if(temp__5735__auto___79321){
var seq__78578_79322__$1 = temp__5735__auto___79321;
if(cljs.core.chunked_seq_QMARK_(seq__78578_79322__$1)){
var c__4609__auto___79323 = cljs.core.chunk_first(seq__78578_79322__$1);
var G__79324 = cljs.core.chunk_rest(seq__78578_79322__$1);
var G__79325 = c__4609__auto___79323;
var G__79326 = cljs.core.count(c__4609__auto___79323);
var G__79327 = (0);
seq__78578_79309 = G__79324;
chunk__78579_79310 = G__79325;
count__78580_79311 = G__79326;
i__78581_79312 = G__79327;
continue;
} else {
var k_79328__$1 = cljs.core.first(seq__78578_79322__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_79328__$1);


var G__79329 = cljs.core.next(seq__78578_79322__$1);
var G__79330 = null;
var G__79331 = (0);
var G__79332 = (0);
seq__78578_79309 = G__79329;
chunk__78579_79310 = G__79330;
count__78580_79311 = G__79331;
i__78581_79312 = G__79332;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq78569){
var G__78570 = cljs.core.first(seq78569);
var seq78569__$1 = cljs.core.next(seq78569);
var G__78571 = cljs.core.first(seq78569__$1);
var seq78569__$2 = cljs.core.next(seq78569__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78570,G__78571,seq78569__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__78588 = arguments.length;
switch (G__78588) {
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
var G__78595 = arguments.length;
switch (G__78595) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79337 = arguments.length;
var i__4790__auto___79338 = (0);
while(true){
if((i__4790__auto___79338 < len__4789__auto___79337)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79338]));

var G__79340 = (i__4790__auto___79338 + (1));
i__4790__auto___79338 = G__79340;
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
var temp__5733__auto___79341 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___79341)){
var class_list_79342 = temp__5733__auto___79341;
var seq__78598_79343 = cljs.core.seq(classes__$1);
var chunk__78599_79344 = null;
var count__78600_79345 = (0);
var i__78601_79346 = (0);
while(true){
if((i__78601_79346 < count__78600_79345)){
var c_79347 = chunk__78599_79344.cljs$core$IIndexed$_nth$arity$2(null,i__78601_79346);
class_list_79342.add(c_79347);


var G__79348 = seq__78598_79343;
var G__79349 = chunk__78599_79344;
var G__79350 = count__78600_79345;
var G__79351 = (i__78601_79346 + (1));
seq__78598_79343 = G__79348;
chunk__78599_79344 = G__79349;
count__78600_79345 = G__79350;
i__78601_79346 = G__79351;
continue;
} else {
var temp__5735__auto___79352 = cljs.core.seq(seq__78598_79343);
if(temp__5735__auto___79352){
var seq__78598_79353__$1 = temp__5735__auto___79352;
if(cljs.core.chunked_seq_QMARK_(seq__78598_79353__$1)){
var c__4609__auto___79354 = cljs.core.chunk_first(seq__78598_79353__$1);
var G__79355 = cljs.core.chunk_rest(seq__78598_79353__$1);
var G__79356 = c__4609__auto___79354;
var G__79357 = cljs.core.count(c__4609__auto___79354);
var G__79358 = (0);
seq__78598_79343 = G__79355;
chunk__78599_79344 = G__79356;
count__78600_79345 = G__79357;
i__78601_79346 = G__79358;
continue;
} else {
var c_79359 = cljs.core.first(seq__78598_79353__$1);
class_list_79342.add(c_79359);


var G__79360 = cljs.core.next(seq__78598_79353__$1);
var G__79361 = null;
var G__79362 = (0);
var G__79363 = (0);
seq__78598_79343 = G__79360;
chunk__78599_79344 = G__79361;
count__78600_79345 = G__79362;
i__78601_79346 = G__79363;
continue;
}
} else {
}
}
break;
}
} else {
var seq__78608_79364 = cljs.core.seq(classes__$1);
var chunk__78609_79365 = null;
var count__78610_79366 = (0);
var i__78611_79367 = (0);
while(true){
if((i__78611_79367 < count__78610_79366)){
var c_79368 = chunk__78609_79365.cljs$core$IIndexed$_nth$arity$2(null,i__78611_79367);
var class_name_79369 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_79369,c_79368))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_79369 === ""))?c_79368:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_79369)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_79368)].join('')));
}


var G__79370 = seq__78608_79364;
var G__79371 = chunk__78609_79365;
var G__79372 = count__78610_79366;
var G__79373 = (i__78611_79367 + (1));
seq__78608_79364 = G__79370;
chunk__78609_79365 = G__79371;
count__78610_79366 = G__79372;
i__78611_79367 = G__79373;
continue;
} else {
var temp__5735__auto___79374 = cljs.core.seq(seq__78608_79364);
if(temp__5735__auto___79374){
var seq__78608_79375__$1 = temp__5735__auto___79374;
if(cljs.core.chunked_seq_QMARK_(seq__78608_79375__$1)){
var c__4609__auto___79376 = cljs.core.chunk_first(seq__78608_79375__$1);
var G__79377 = cljs.core.chunk_rest(seq__78608_79375__$1);
var G__79378 = c__4609__auto___79376;
var G__79379 = cljs.core.count(c__4609__auto___79376);
var G__79380 = (0);
seq__78608_79364 = G__79377;
chunk__78609_79365 = G__79378;
count__78610_79366 = G__79379;
i__78611_79367 = G__79380;
continue;
} else {
var c_79381 = cljs.core.first(seq__78608_79375__$1);
var class_name_79382 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_79382,c_79381))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_79382 === ""))?c_79381:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_79382)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_79381)].join('')));
}


var G__79384 = cljs.core.next(seq__78608_79375__$1);
var G__79385 = null;
var G__79386 = (0);
var G__79387 = (0);
seq__78608_79364 = G__79384;
chunk__78609_79365 = G__79385;
count__78610_79366 = G__79386;
i__78611_79367 = G__79387;
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
var seq__78618_79388 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__78619_79389 = null;
var count__78620_79390 = (0);
var i__78621_79391 = (0);
while(true){
if((i__78621_79391 < count__78620_79390)){
var c_79392 = chunk__78619_79389.cljs$core$IIndexed$_nth$arity$2(null,i__78621_79391);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_79392);


var G__79393 = seq__78618_79388;
var G__79394 = chunk__78619_79389;
var G__79395 = count__78620_79390;
var G__79396 = (i__78621_79391 + (1));
seq__78618_79388 = G__79393;
chunk__78619_79389 = G__79394;
count__78620_79390 = G__79395;
i__78621_79391 = G__79396;
continue;
} else {
var temp__5735__auto___79397 = cljs.core.seq(seq__78618_79388);
if(temp__5735__auto___79397){
var seq__78618_79398__$1 = temp__5735__auto___79397;
if(cljs.core.chunked_seq_QMARK_(seq__78618_79398__$1)){
var c__4609__auto___79399 = cljs.core.chunk_first(seq__78618_79398__$1);
var G__79400 = cljs.core.chunk_rest(seq__78618_79398__$1);
var G__79401 = c__4609__auto___79399;
var G__79402 = cljs.core.count(c__4609__auto___79399);
var G__79403 = (0);
seq__78618_79388 = G__79400;
chunk__78619_79389 = G__79401;
count__78620_79390 = G__79402;
i__78621_79391 = G__79403;
continue;
} else {
var c_79404 = cljs.core.first(seq__78618_79398__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_79404);


var G__79407 = cljs.core.next(seq__78618_79398__$1);
var G__79408 = null;
var G__79409 = (0);
var G__79410 = (0);
seq__78618_79388 = G__79407;
chunk__78619_79389 = G__79408;
count__78620_79390 = G__79409;
i__78621_79391 = G__79410;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq78592){
var G__78593 = cljs.core.first(seq78592);
var seq78592__$1 = cljs.core.next(seq78592);
var G__78594 = cljs.core.first(seq78592__$1);
var seq78592__$2 = cljs.core.next(seq78592__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78593,G__78594,seq78592__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__78631 = arguments.length;
switch (G__78631) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79432 = arguments.length;
var i__4790__auto___79433 = (0);
while(true){
if((i__4790__auto___79433 < len__4789__auto___79432)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79433]));

var G__79434 = (i__4790__auto___79433 + (1));
i__4790__auto___79433 = G__79434;
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
var temp__5733__auto___79435 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___79435)){
var class_list_79438 = temp__5733__auto___79435;
class_list_79438.remove(c__$1);
} else {
var class_name_79439 = dommy.core.class$(elem);
var new_class_name_79440 = dommy.utils.remove_class_str(class_name_79439,c__$1);
if((class_name_79439 === new_class_name_79440)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_79440);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__78636 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__78637 = null;
var count__78638 = (0);
var i__78639 = (0);
while(true){
if((i__78639 < count__78638)){
var c = chunk__78637.cljs$core$IIndexed$_nth$arity$2(null,i__78639);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__79444 = seq__78636;
var G__79445 = chunk__78637;
var G__79446 = count__78638;
var G__79447 = (i__78639 + (1));
seq__78636 = G__79444;
chunk__78637 = G__79445;
count__78638 = G__79446;
i__78639 = G__79447;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__78636);
if(temp__5735__auto__){
var seq__78636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78636__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__78636__$1);
var G__79451 = cljs.core.chunk_rest(seq__78636__$1);
var G__79452 = c__4609__auto__;
var G__79453 = cljs.core.count(c__4609__auto__);
var G__79454 = (0);
seq__78636 = G__79451;
chunk__78637 = G__79452;
count__78638 = G__79453;
i__78639 = G__79454;
continue;
} else {
var c = cljs.core.first(seq__78636__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__79455 = cljs.core.next(seq__78636__$1);
var G__79456 = null;
var G__79457 = (0);
var G__79458 = (0);
seq__78636 = G__79455;
chunk__78637 = G__79456;
count__78638 = G__79457;
i__78639 = G__79458;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq78628){
var G__78629 = cljs.core.first(seq78628);
var seq78628__$1 = cljs.core.next(seq78628);
var G__78630 = cljs.core.first(seq78628__$1);
var seq78628__$2 = cljs.core.next(seq78628__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78629,G__78630,seq78628__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__78651 = arguments.length;
switch (G__78651) {
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
var temp__5733__auto___79464 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___79464)){
var class_list_79465 = temp__5733__auto___79464;
class_list_79465.toggle(c__$1);
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
var G__78654 = arguments.length;
switch (G__78654) {
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
var G__78663 = arguments.length;
switch (G__78663) {
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
var G__78678 = arguments.length;
switch (G__78678) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79469 = arguments.length;
var i__4790__auto___79470 = (0);
while(true){
if((i__4790__auto___79470 < len__4789__auto___79469)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79470]));

var G__79471 = (i__4790__auto___79470 + (1));
i__4790__auto___79470 = G__79471;
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
var G__78679 = parent;
G__78679.appendChild(child);

return G__78679;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__78681_79472 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__78682_79473 = null;
var count__78683_79474 = (0);
var i__78684_79475 = (0);
while(true){
if((i__78684_79475 < count__78683_79474)){
var c_79476 = chunk__78682_79473.cljs$core$IIndexed$_nth$arity$2(null,i__78684_79475);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_79476);


var G__79478 = seq__78681_79472;
var G__79479 = chunk__78682_79473;
var G__79480 = count__78683_79474;
var G__79481 = (i__78684_79475 + (1));
seq__78681_79472 = G__79478;
chunk__78682_79473 = G__79479;
count__78683_79474 = G__79480;
i__78684_79475 = G__79481;
continue;
} else {
var temp__5735__auto___79482 = cljs.core.seq(seq__78681_79472);
if(temp__5735__auto___79482){
var seq__78681_79483__$1 = temp__5735__auto___79482;
if(cljs.core.chunked_seq_QMARK_(seq__78681_79483__$1)){
var c__4609__auto___79484 = cljs.core.chunk_first(seq__78681_79483__$1);
var G__79485 = cljs.core.chunk_rest(seq__78681_79483__$1);
var G__79486 = c__4609__auto___79484;
var G__79487 = cljs.core.count(c__4609__auto___79484);
var G__79488 = (0);
seq__78681_79472 = G__79485;
chunk__78682_79473 = G__79486;
count__78683_79474 = G__79487;
i__78684_79475 = G__79488;
continue;
} else {
var c_79489 = cljs.core.first(seq__78681_79483__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_79489);


var G__79490 = cljs.core.next(seq__78681_79483__$1);
var G__79491 = null;
var G__79492 = (0);
var G__79493 = (0);
seq__78681_79472 = G__79490;
chunk__78682_79473 = G__79491;
count__78683_79474 = G__79492;
i__78684_79475 = G__79493;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq78675){
var G__78676 = cljs.core.first(seq78675);
var seq78675__$1 = cljs.core.next(seq78675);
var G__78677 = cljs.core.first(seq78675__$1);
var seq78675__$2 = cljs.core.next(seq78675__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78676,G__78677,seq78675__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__78694 = arguments.length;
switch (G__78694) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___79495 = arguments.length;
var i__4790__auto___79496 = (0);
while(true){
if((i__4790__auto___79496 < len__4789__auto___79495)){
args_arr__4810__auto__.push((arguments[i__4790__auto___79496]));

var G__79497 = (i__4790__auto___79496 + (1));
i__4790__auto___79496 = G__79497;
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
var G__78696 = parent;
G__78696.insertBefore(child,parent.firstChild);

return G__78696;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__78698_79498 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__78699_79499 = null;
var count__78700_79500 = (0);
var i__78701_79501 = (0);
while(true){
if((i__78701_79501 < count__78700_79500)){
var c_79502 = chunk__78699_79499.cljs$core$IIndexed$_nth$arity$2(null,i__78701_79501);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_79502);


var G__79503 = seq__78698_79498;
var G__79504 = chunk__78699_79499;
var G__79505 = count__78700_79500;
var G__79506 = (i__78701_79501 + (1));
seq__78698_79498 = G__79503;
chunk__78699_79499 = G__79504;
count__78700_79500 = G__79505;
i__78701_79501 = G__79506;
continue;
} else {
var temp__5735__auto___79507 = cljs.core.seq(seq__78698_79498);
if(temp__5735__auto___79507){
var seq__78698_79508__$1 = temp__5735__auto___79507;
if(cljs.core.chunked_seq_QMARK_(seq__78698_79508__$1)){
var c__4609__auto___79509 = cljs.core.chunk_first(seq__78698_79508__$1);
var G__79510 = cljs.core.chunk_rest(seq__78698_79508__$1);
var G__79511 = c__4609__auto___79509;
var G__79512 = cljs.core.count(c__4609__auto___79509);
var G__79513 = (0);
seq__78698_79498 = G__79510;
chunk__78699_79499 = G__79511;
count__78700_79500 = G__79512;
i__78701_79501 = G__79513;
continue;
} else {
var c_79514 = cljs.core.first(seq__78698_79508__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_79514);


var G__79515 = cljs.core.next(seq__78698_79508__$1);
var G__79516 = null;
var G__79517 = (0);
var G__79518 = (0);
seq__78698_79498 = G__79515;
chunk__78699_79499 = G__79516;
count__78700_79500 = G__79517;
i__78701_79501 = G__79518;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq78691){
var G__78692 = cljs.core.first(seq78691);
var seq78691__$1 = cljs.core.next(seq78691);
var G__78693 = cljs.core.first(seq78691__$1);
var seq78691__$2 = cljs.core.next(seq78691__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78692,G__78693,seq78691__$2);
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
var temp__5733__auto___79520 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___79520)){
var next_79521 = temp__5733__auto___79520;
dommy.core.insert_before_BANG_(elem,next_79521);
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
var G__78712 = arguments.length;
switch (G__78712) {
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
var G__78713 = p;
G__78713.removeChild(elem);

return G__78713;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78714){
var vec__78715 = p__78714;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78715,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78715,(1),null);
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
var len__4789__auto___79523 = arguments.length;
var i__4790__auto___79524 = (0);
while(true){
if((i__4790__auto___79524 < len__4789__auto___79523)){
args__4795__auto__.push((arguments[i__4790__auto___79524]));

var G__79525 = (i__4790__auto___79524 + (1));
i__4790__auto___79524 = G__79525;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq78720){
var G__78721 = cljs.core.first(seq78720);
var seq78720__$1 = cljs.core.next(seq78720);
var G__78722 = cljs.core.first(seq78720__$1);
var seq78720__$2 = cljs.core.next(seq78720__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78721,G__78722,seq78720__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__78725 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__78725.cljs$core$IFn$_invoke$arity$1 ? fexpr__78725.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__78725.call(null,elem_sel));
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
var len__4789__auto___79526 = arguments.length;
var i__4790__auto___79527 = (0);
while(true){
if((i__4790__auto___79527 < len__4789__auto___79526)){
args__4795__auto__.push((arguments[i__4790__auto___79527]));

var G__79528 = (i__4790__auto___79527 + (1));
i__4790__auto___79527 = G__79528;
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

var vec__78732_79529 = dommy.core.elem_and_selector(elem_sel);
var elem_79530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78732_79529,(0),null);
var selector_79531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78732_79529,(1),null);
var seq__78735_79532 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__78742_79533 = null;
var count__78743_79534 = (0);
var i__78744_79535 = (0);
while(true){
if((i__78744_79535 < count__78743_79534)){
var vec__78824_79536 = chunk__78742_79533.cljs$core$IIndexed$_nth$arity$2(null,i__78744_79535);
var orig_type_79537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78824_79536,(0),null);
var f_79538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78824_79536,(1),null);
var seq__78745_79539 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_79537,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_79537,cljs.core.identity])));
var chunk__78747_79540 = null;
var count__78748_79541 = (0);
var i__78749_79542 = (0);
while(true){
if((i__78749_79542 < count__78748_79541)){
var vec__78844_79543 = chunk__78747_79540.cljs$core$IIndexed$_nth$arity$2(null,i__78749_79542);
var actual_type_79544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78844_79543,(0),null);
var factory_79545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78844_79543,(1),null);
var canonical_f_79546 = (function (){var G__78849 = (factory_79545.cljs$core$IFn$_invoke$arity$1 ? factory_79545.cljs$core$IFn$_invoke$arity$1(f_79538) : factory_79545.call(null,f_79538));
var fexpr__78848 = (cljs.core.truth_(selector_79531)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_79530,selector_79531):cljs.core.identity);
return (fexpr__78848.cljs$core$IFn$_invoke$arity$1 ? fexpr__78848.cljs$core$IFn$_invoke$arity$1(G__78849) : fexpr__78848.call(null,G__78849));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79530,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79531,actual_type_79544,f_79538], null),canonical_f_79546], 0));

if(cljs.core.truth_(elem_79530.addEventListener)){
elem_79530.addEventListener(cljs.core.name(actual_type_79544),canonical_f_79546);
} else {
elem_79530.attachEvent(cljs.core.name(actual_type_79544),canonical_f_79546);
}


var G__79547 = seq__78745_79539;
var G__79548 = chunk__78747_79540;
var G__79549 = count__78748_79541;
var G__79550 = (i__78749_79542 + (1));
seq__78745_79539 = G__79547;
chunk__78747_79540 = G__79548;
count__78748_79541 = G__79549;
i__78749_79542 = G__79550;
continue;
} else {
var temp__5735__auto___79551 = cljs.core.seq(seq__78745_79539);
if(temp__5735__auto___79551){
var seq__78745_79552__$1 = temp__5735__auto___79551;
if(cljs.core.chunked_seq_QMARK_(seq__78745_79552__$1)){
var c__4609__auto___79553 = cljs.core.chunk_first(seq__78745_79552__$1);
var G__79554 = cljs.core.chunk_rest(seq__78745_79552__$1);
var G__79555 = c__4609__auto___79553;
var G__79556 = cljs.core.count(c__4609__auto___79553);
var G__79557 = (0);
seq__78745_79539 = G__79554;
chunk__78747_79540 = G__79555;
count__78748_79541 = G__79556;
i__78749_79542 = G__79557;
continue;
} else {
var vec__78854_79558 = cljs.core.first(seq__78745_79552__$1);
var actual_type_79559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78854_79558,(0),null);
var factory_79560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78854_79558,(1),null);
var canonical_f_79561 = (function (){var G__78859 = (factory_79560.cljs$core$IFn$_invoke$arity$1 ? factory_79560.cljs$core$IFn$_invoke$arity$1(f_79538) : factory_79560.call(null,f_79538));
var fexpr__78858 = (cljs.core.truth_(selector_79531)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_79530,selector_79531):cljs.core.identity);
return (fexpr__78858.cljs$core$IFn$_invoke$arity$1 ? fexpr__78858.cljs$core$IFn$_invoke$arity$1(G__78859) : fexpr__78858.call(null,G__78859));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79530,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79531,actual_type_79559,f_79538], null),canonical_f_79561], 0));

if(cljs.core.truth_(elem_79530.addEventListener)){
elem_79530.addEventListener(cljs.core.name(actual_type_79559),canonical_f_79561);
} else {
elem_79530.attachEvent(cljs.core.name(actual_type_79559),canonical_f_79561);
}


var G__79562 = cljs.core.next(seq__78745_79552__$1);
var G__79563 = null;
var G__79564 = (0);
var G__79565 = (0);
seq__78745_79539 = G__79562;
chunk__78747_79540 = G__79563;
count__78748_79541 = G__79564;
i__78749_79542 = G__79565;
continue;
}
} else {
}
}
break;
}

var G__79566 = seq__78735_79532;
var G__79567 = chunk__78742_79533;
var G__79568 = count__78743_79534;
var G__79569 = (i__78744_79535 + (1));
seq__78735_79532 = G__79566;
chunk__78742_79533 = G__79567;
count__78743_79534 = G__79568;
i__78744_79535 = G__79569;
continue;
} else {
var temp__5735__auto___79570 = cljs.core.seq(seq__78735_79532);
if(temp__5735__auto___79570){
var seq__78735_79572__$1 = temp__5735__auto___79570;
if(cljs.core.chunked_seq_QMARK_(seq__78735_79572__$1)){
var c__4609__auto___79573 = cljs.core.chunk_first(seq__78735_79572__$1);
var G__79574 = cljs.core.chunk_rest(seq__78735_79572__$1);
var G__79575 = c__4609__auto___79573;
var G__79576 = cljs.core.count(c__4609__auto___79573);
var G__79577 = (0);
seq__78735_79532 = G__79574;
chunk__78742_79533 = G__79575;
count__78743_79534 = G__79576;
i__78744_79535 = G__79577;
continue;
} else {
var vec__78861_79578 = cljs.core.first(seq__78735_79572__$1);
var orig_type_79579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78861_79578,(0),null);
var f_79580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78861_79578,(1),null);
var seq__78736_79581 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_79579,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_79579,cljs.core.identity])));
var chunk__78738_79582 = null;
var count__78739_79583 = (0);
var i__78740_79584 = (0);
while(true){
if((i__78740_79584 < count__78739_79583)){
var vec__78887_79585 = chunk__78738_79582.cljs$core$IIndexed$_nth$arity$2(null,i__78740_79584);
var actual_type_79586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78887_79585,(0),null);
var factory_79587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78887_79585,(1),null);
var canonical_f_79588 = (function (){var G__78891 = (factory_79587.cljs$core$IFn$_invoke$arity$1 ? factory_79587.cljs$core$IFn$_invoke$arity$1(f_79580) : factory_79587.call(null,f_79580));
var fexpr__78890 = (cljs.core.truth_(selector_79531)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_79530,selector_79531):cljs.core.identity);
return (fexpr__78890.cljs$core$IFn$_invoke$arity$1 ? fexpr__78890.cljs$core$IFn$_invoke$arity$1(G__78891) : fexpr__78890.call(null,G__78891));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79530,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79531,actual_type_79586,f_79580], null),canonical_f_79588], 0));

if(cljs.core.truth_(elem_79530.addEventListener)){
elem_79530.addEventListener(cljs.core.name(actual_type_79586),canonical_f_79588);
} else {
elem_79530.attachEvent(cljs.core.name(actual_type_79586),canonical_f_79588);
}


var G__79593 = seq__78736_79581;
var G__79594 = chunk__78738_79582;
var G__79595 = count__78739_79583;
var G__79596 = (i__78740_79584 + (1));
seq__78736_79581 = G__79593;
chunk__78738_79582 = G__79594;
count__78739_79583 = G__79595;
i__78740_79584 = G__79596;
continue;
} else {
var temp__5735__auto___79597__$1 = cljs.core.seq(seq__78736_79581);
if(temp__5735__auto___79597__$1){
var seq__78736_79598__$1 = temp__5735__auto___79597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78736_79598__$1)){
var c__4609__auto___79599 = cljs.core.chunk_first(seq__78736_79598__$1);
var G__79600 = cljs.core.chunk_rest(seq__78736_79598__$1);
var G__79601 = c__4609__auto___79599;
var G__79602 = cljs.core.count(c__4609__auto___79599);
var G__79603 = (0);
seq__78736_79581 = G__79600;
chunk__78738_79582 = G__79601;
count__78739_79583 = G__79602;
i__78740_79584 = G__79603;
continue;
} else {
var vec__78894_79604 = cljs.core.first(seq__78736_79598__$1);
var actual_type_79605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78894_79604,(0),null);
var factory_79606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78894_79604,(1),null);
var canonical_f_79607 = (function (){var G__78899 = (factory_79606.cljs$core$IFn$_invoke$arity$1 ? factory_79606.cljs$core$IFn$_invoke$arity$1(f_79580) : factory_79606.call(null,f_79580));
var fexpr__78898 = (cljs.core.truth_(selector_79531)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_79530,selector_79531):cljs.core.identity);
return (fexpr__78898.cljs$core$IFn$_invoke$arity$1 ? fexpr__78898.cljs$core$IFn$_invoke$arity$1(G__78899) : fexpr__78898.call(null,G__78899));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79530,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79531,actual_type_79605,f_79580], null),canonical_f_79607], 0));

if(cljs.core.truth_(elem_79530.addEventListener)){
elem_79530.addEventListener(cljs.core.name(actual_type_79605),canonical_f_79607);
} else {
elem_79530.attachEvent(cljs.core.name(actual_type_79605),canonical_f_79607);
}


var G__79608 = cljs.core.next(seq__78736_79598__$1);
var G__79609 = null;
var G__79610 = (0);
var G__79611 = (0);
seq__78736_79581 = G__79608;
chunk__78738_79582 = G__79609;
count__78739_79583 = G__79610;
i__78740_79584 = G__79611;
continue;
}
} else {
}
}
break;
}

var G__79612 = cljs.core.next(seq__78735_79572__$1);
var G__79613 = null;
var G__79614 = (0);
var G__79615 = (0);
seq__78735_79532 = G__79612;
chunk__78742_79533 = G__79613;
count__78743_79534 = G__79614;
i__78744_79535 = G__79615;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq78726){
var G__78727 = cljs.core.first(seq78726);
var seq78726__$1 = cljs.core.next(seq78726);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78727,seq78726__$1);
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
var len__4789__auto___79616 = arguments.length;
var i__4790__auto___79617 = (0);
while(true){
if((i__4790__auto___79617 < len__4789__auto___79616)){
args__4795__auto__.push((arguments[i__4790__auto___79617]));

var G__79618 = (i__4790__auto___79617 + (1));
i__4790__auto___79617 = G__79618;
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

var vec__78906_79619 = dommy.core.elem_and_selector(elem_sel);
var elem_79620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78906_79619,(0),null);
var selector_79621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78906_79619,(1),null);
var seq__78909_79622 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__78916_79623 = null;
var count__78917_79624 = (0);
var i__78918_79625 = (0);
while(true){
if((i__78918_79625 < count__78917_79624)){
var vec__79067_79626 = chunk__78916_79623.cljs$core$IIndexed$_nth$arity$2(null,i__78918_79625);
var orig_type_79627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79067_79626,(0),null);
var f_79628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79067_79626,(1),null);
var seq__78919_79630 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_79627,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_79627,cljs.core.identity])));
var chunk__78921_79631 = null;
var count__78922_79632 = (0);
var i__78923_79633 = (0);
while(true){
if((i__78923_79633 < count__78922_79632)){
var vec__79085_79635 = chunk__78921_79631.cljs$core$IIndexed$_nth$arity$2(null,i__78923_79633);
var actual_type_79636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79085_79635,(0),null);
var __79637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79085_79635,(1),null);
var keys_79638 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79621,actual_type_79636,f_79628], null);
var canonical_f_79639 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_79620),keys_79638);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79620,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_79638], 0));

if(cljs.core.truth_(elem_79620.removeEventListener)){
elem_79620.removeEventListener(cljs.core.name(actual_type_79636),canonical_f_79639);
} else {
elem_79620.detachEvent(cljs.core.name(actual_type_79636),canonical_f_79639);
}


var G__79643 = seq__78919_79630;
var G__79644 = chunk__78921_79631;
var G__79645 = count__78922_79632;
var G__79646 = (i__78923_79633 + (1));
seq__78919_79630 = G__79643;
chunk__78921_79631 = G__79644;
count__78922_79632 = G__79645;
i__78923_79633 = G__79646;
continue;
} else {
var temp__5735__auto___79647 = cljs.core.seq(seq__78919_79630);
if(temp__5735__auto___79647){
var seq__78919_79648__$1 = temp__5735__auto___79647;
if(cljs.core.chunked_seq_QMARK_(seq__78919_79648__$1)){
var c__4609__auto___79654 = cljs.core.chunk_first(seq__78919_79648__$1);
var G__79655 = cljs.core.chunk_rest(seq__78919_79648__$1);
var G__79656 = c__4609__auto___79654;
var G__79657 = cljs.core.count(c__4609__auto___79654);
var G__79658 = (0);
seq__78919_79630 = G__79655;
chunk__78921_79631 = G__79656;
count__78922_79632 = G__79657;
i__78923_79633 = G__79658;
continue;
} else {
var vec__79093_79659 = cljs.core.first(seq__78919_79648__$1);
var actual_type_79660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79093_79659,(0),null);
var __79661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79093_79659,(1),null);
var keys_79662 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79621,actual_type_79660,f_79628], null);
var canonical_f_79663 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_79620),keys_79662);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79620,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_79662], 0));

if(cljs.core.truth_(elem_79620.removeEventListener)){
elem_79620.removeEventListener(cljs.core.name(actual_type_79660),canonical_f_79663);
} else {
elem_79620.detachEvent(cljs.core.name(actual_type_79660),canonical_f_79663);
}


var G__79664 = cljs.core.next(seq__78919_79648__$1);
var G__79665 = null;
var G__79666 = (0);
var G__79667 = (0);
seq__78919_79630 = G__79664;
chunk__78921_79631 = G__79665;
count__78922_79632 = G__79666;
i__78923_79633 = G__79667;
continue;
}
} else {
}
}
break;
}

var G__79668 = seq__78909_79622;
var G__79669 = chunk__78916_79623;
var G__79670 = count__78917_79624;
var G__79671 = (i__78918_79625 + (1));
seq__78909_79622 = G__79668;
chunk__78916_79623 = G__79669;
count__78917_79624 = G__79670;
i__78918_79625 = G__79671;
continue;
} else {
var temp__5735__auto___79672 = cljs.core.seq(seq__78909_79622);
if(temp__5735__auto___79672){
var seq__78909_79673__$1 = temp__5735__auto___79672;
if(cljs.core.chunked_seq_QMARK_(seq__78909_79673__$1)){
var c__4609__auto___79674 = cljs.core.chunk_first(seq__78909_79673__$1);
var G__79675 = cljs.core.chunk_rest(seq__78909_79673__$1);
var G__79676 = c__4609__auto___79674;
var G__79677 = cljs.core.count(c__4609__auto___79674);
var G__79678 = (0);
seq__78909_79622 = G__79675;
chunk__78916_79623 = G__79676;
count__78917_79624 = G__79677;
i__78918_79625 = G__79678;
continue;
} else {
var vec__79102_79679 = cljs.core.first(seq__78909_79673__$1);
var orig_type_79680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79102_79679,(0),null);
var f_79681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79102_79679,(1),null);
var seq__78910_79682 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_79680,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_79680,cljs.core.identity])));
var chunk__78912_79683 = null;
var count__78913_79684 = (0);
var i__78914_79685 = (0);
while(true){
if((i__78914_79685 < count__78913_79684)){
var vec__79117_79686 = chunk__78912_79683.cljs$core$IIndexed$_nth$arity$2(null,i__78914_79685);
var actual_type_79687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79117_79686,(0),null);
var __79688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79117_79686,(1),null);
var keys_79689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79621,actual_type_79687,f_79681], null);
var canonical_f_79690 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_79620),keys_79689);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79620,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_79689], 0));

if(cljs.core.truth_(elem_79620.removeEventListener)){
elem_79620.removeEventListener(cljs.core.name(actual_type_79687),canonical_f_79690);
} else {
elem_79620.detachEvent(cljs.core.name(actual_type_79687),canonical_f_79690);
}


var G__79691 = seq__78910_79682;
var G__79692 = chunk__78912_79683;
var G__79693 = count__78913_79684;
var G__79694 = (i__78914_79685 + (1));
seq__78910_79682 = G__79691;
chunk__78912_79683 = G__79692;
count__78913_79684 = G__79693;
i__78914_79685 = G__79694;
continue;
} else {
var temp__5735__auto___79695__$1 = cljs.core.seq(seq__78910_79682);
if(temp__5735__auto___79695__$1){
var seq__78910_79696__$1 = temp__5735__auto___79695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78910_79696__$1)){
var c__4609__auto___79697 = cljs.core.chunk_first(seq__78910_79696__$1);
var G__79698 = cljs.core.chunk_rest(seq__78910_79696__$1);
var G__79699 = c__4609__auto___79697;
var G__79700 = cljs.core.count(c__4609__auto___79697);
var G__79701 = (0);
seq__78910_79682 = G__79698;
chunk__78912_79683 = G__79699;
count__78913_79684 = G__79700;
i__78914_79685 = G__79701;
continue;
} else {
var vec__79121_79702 = cljs.core.first(seq__78910_79696__$1);
var actual_type_79703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79121_79702,(0),null);
var __79704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79121_79702,(1),null);
var keys_79705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_79621,actual_type_79703,f_79681], null);
var canonical_f_79706 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_79620),keys_79705);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_79620,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_79705], 0));

if(cljs.core.truth_(elem_79620.removeEventListener)){
elem_79620.removeEventListener(cljs.core.name(actual_type_79703),canonical_f_79706);
} else {
elem_79620.detachEvent(cljs.core.name(actual_type_79703),canonical_f_79706);
}


var G__79707 = cljs.core.next(seq__78910_79696__$1);
var G__79708 = null;
var G__79709 = (0);
var G__79710 = (0);
seq__78910_79682 = G__79707;
chunk__78912_79683 = G__79708;
count__78913_79684 = G__79709;
i__78914_79685 = G__79710;
continue;
}
} else {
}
}
break;
}

var G__79711 = cljs.core.next(seq__78909_79673__$1);
var G__79712 = null;
var G__79713 = (0);
var G__79714 = (0);
seq__78909_79622 = G__79711;
chunk__78916_79623 = G__79712;
count__78917_79624 = G__79713;
i__78918_79625 = G__79714;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq78904){
var G__78905 = cljs.core.first(seq78904);
var seq78904__$1 = cljs.core.next(seq78904);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78905,seq78904__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___79716 = arguments.length;
var i__4790__auto___79717 = (0);
while(true){
if((i__4790__auto___79717 < len__4789__auto___79716)){
args__4795__auto__.push((arguments[i__4790__auto___79717]));

var G__79718 = (i__4790__auto___79717 + (1));
i__4790__auto___79717 = G__79718;
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

var vec__79132_79719 = dommy.core.elem_and_selector(elem_sel);
var elem_79720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79132_79719,(0),null);
var selector_79721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79132_79719,(1),null);
var seq__79135_79722 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__79136_79723 = null;
var count__79137_79724 = (0);
var i__79138_79725 = (0);
while(true){
if((i__79138_79725 < count__79137_79724)){
var vec__79145_79726 = chunk__79136_79723.cljs$core$IIndexed$_nth$arity$2(null,i__79138_79725);
var type_79727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79145_79726,(0),null);
var f_79728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79145_79726,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_79727,((function (seq__79135_79722,chunk__79136_79723,count__79137_79724,i__79138_79725,vec__79145_79726,type_79727,f_79728,vec__79132_79719,elem_79720,selector_79721){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_79727,dommy$core$this_fn], 0));

return (f_79728.cljs$core$IFn$_invoke$arity$1 ? f_79728.cljs$core$IFn$_invoke$arity$1(e) : f_79728.call(null,e));
});})(seq__79135_79722,chunk__79136_79723,count__79137_79724,i__79138_79725,vec__79145_79726,type_79727,f_79728,vec__79132_79719,elem_79720,selector_79721))
], 0));


var G__79729 = seq__79135_79722;
var G__79730 = chunk__79136_79723;
var G__79731 = count__79137_79724;
var G__79732 = (i__79138_79725 + (1));
seq__79135_79722 = G__79729;
chunk__79136_79723 = G__79730;
count__79137_79724 = G__79731;
i__79138_79725 = G__79732;
continue;
} else {
var temp__5735__auto___79733 = cljs.core.seq(seq__79135_79722);
if(temp__5735__auto___79733){
var seq__79135_79734__$1 = temp__5735__auto___79733;
if(cljs.core.chunked_seq_QMARK_(seq__79135_79734__$1)){
var c__4609__auto___79735 = cljs.core.chunk_first(seq__79135_79734__$1);
var G__79736 = cljs.core.chunk_rest(seq__79135_79734__$1);
var G__79737 = c__4609__auto___79735;
var G__79738 = cljs.core.count(c__4609__auto___79735);
var G__79739 = (0);
seq__79135_79722 = G__79736;
chunk__79136_79723 = G__79737;
count__79137_79724 = G__79738;
i__79138_79725 = G__79739;
continue;
} else {
var vec__79150_79740 = cljs.core.first(seq__79135_79734__$1);
var type_79741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79150_79740,(0),null);
var f_79742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79150_79740,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_79741,((function (seq__79135_79722,chunk__79136_79723,count__79137_79724,i__79138_79725,vec__79150_79740,type_79741,f_79742,seq__79135_79734__$1,temp__5735__auto___79733,vec__79132_79719,elem_79720,selector_79721){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_79741,dommy$core$this_fn], 0));

return (f_79742.cljs$core$IFn$_invoke$arity$1 ? f_79742.cljs$core$IFn$_invoke$arity$1(e) : f_79742.call(null,e));
});})(seq__79135_79722,chunk__79136_79723,count__79137_79724,i__79138_79725,vec__79150_79740,type_79741,f_79742,seq__79135_79734__$1,temp__5735__auto___79733,vec__79132_79719,elem_79720,selector_79721))
], 0));


var G__79743 = cljs.core.next(seq__79135_79734__$1);
var G__79744 = null;
var G__79745 = (0);
var G__79746 = (0);
seq__79135_79722 = G__79743;
chunk__79136_79723 = G__79744;
count__79137_79724 = G__79745;
i__79138_79725 = G__79746;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq79127){
var G__79128 = cljs.core.first(seq79127);
var seq79127__$1 = cljs.core.next(seq79127);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79128,seq79127__$1);
}));


//# sourceMappingURL=dommy.core.js.map
