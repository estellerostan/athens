goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__77685__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__77476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__77477 = cljs.core.seq(vec__77476);
var first__77478 = cljs.core.first(seq__77477);
var seq__77477__$1 = cljs.core.next(seq__77477);
var tag = first__77478;
var body = seq__77477__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__77685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77686__i = 0, G__77686__a = new Array(arguments.length -  0);
while (G__77686__i < G__77686__a.length) {G__77686__a[G__77686__i] = arguments[G__77686__i + 0]; ++G__77686__i;}
  args = new cljs.core.IndexedSeq(G__77686__a,0,null);
} 
return G__77685__delegate.call(this,args);};
G__77685.cljs$lang$maxFixedArity = 0;
G__77685.cljs$lang$applyTo = (function (arglist__77687){
var args = cljs.core.seq(arglist__77687);
return G__77685__delegate(args);
});
G__77685.cljs$core$IFn$_invoke$arity$variadic = G__77685__delegate;
return G__77685;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__77483(s__77484){
return (new cljs.core.LazySeq(null,(function (){
var s__77484__$1 = s__77484;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77484__$1);
if(temp__5735__auto__){
var s__77484__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77484__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__77484__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__77486 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__77485 = (0);
while(true){
if((i__77485 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__77485);
cljs.core.chunk_append(b__77486,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__77688 = (i__77485 + (1));
i__77485 = G__77688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77486),sablono$core$update_arglists_$_iter__77483(cljs.core.chunk_rest(s__77484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77486),null);
}
} else {
var args = cljs.core.first(s__77484__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__77483(cljs.core.rest(s__77484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77689 = arguments.length;
var i__4790__auto___77690 = (0);
while(true){
if((i__4790__auto___77690 < len__4789__auto___77689)){
args__4795__auto__.push((arguments[i__4790__auto___77690]));

var G__77691 = (i__4790__auto___77690 + (1));
i__4790__auto___77690 = G__77691;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__77493(s__77494){
return (new cljs.core.LazySeq(null,(function (){
var s__77494__$1 = s__77494;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77494__$1);
if(temp__5735__auto__){
var s__77494__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77494__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__77494__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__77496 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__77495 = (0);
while(true){
if((i__77495 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__77495);
cljs.core.chunk_append(b__77496,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__77692 = (i__77495 + (1));
i__77495 = G__77692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77496),sablono$core$iter__77493(cljs.core.chunk_rest(s__77494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77496),null);
}
} else {
var style = cljs.core.first(s__77494__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__77493(cljs.core.rest(s__77494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq77490){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77490));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__77511 = goog.dom.getDocument().body;
var G__77512 = (function (){var G__77513 = "script";
var G__77514 = ({"src": src});
return goog.dom.createDom(G__77513,G__77514);
})();
return goog.dom.appendChild(G__77511,G__77512);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to77517 = (function sablono$core$link_to77517(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77693 = arguments.length;
var i__4790__auto___77694 = (0);
while(true){
if((i__4790__auto___77694 < len__4789__auto___77693)){
args__4795__auto__.push((arguments[i__4790__auto___77694]));

var G__77695 = (i__4790__auto___77694 + (1));
i__4790__auto___77694 = G__77695;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to77517.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to77517.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to77517.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to77517.cljs$lang$applyTo = (function (seq77520){
var G__77521 = cljs.core.first(seq77520);
var seq77520__$1 = cljs.core.next(seq77520);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77521,seq77520__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to77517);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to77525 = (function sablono$core$mail_to77525(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77696 = arguments.length;
var i__4790__auto___77697 = (0);
while(true){
if((i__4790__auto___77697 < len__4789__auto___77696)){
args__4795__auto__.push((arguments[i__4790__auto___77697]));

var G__77698 = (i__4790__auto___77697 + (1));
i__4790__auto___77697 = G__77698;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to77525.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to77525.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__77533){
var vec__77534 = p__77533;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77534,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to77525.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to77525.cljs$lang$applyTo = (function (seq77528){
var G__77529 = cljs.core.first(seq77528);
var seq77528__$1 = cljs.core.next(seq77528);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77529,seq77528__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to77525);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list77539 = (function sablono$core$unordered_list77539(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list77539_$_iter__77541(s__77542){
return (new cljs.core.LazySeq(null,(function (){
var s__77542__$1 = s__77542;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77542__$1);
if(temp__5735__auto__){
var s__77542__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77542__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__77542__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__77544 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__77543 = (0);
while(true){
if((i__77543 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__77543);
cljs.core.chunk_append(b__77544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77701 = (i__77543 + (1));
i__77543 = G__77701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77544),sablono$core$unordered_list77539_$_iter__77541(cljs.core.chunk_rest(s__77542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77544),null);
}
} else {
var x = cljs.core.first(s__77542__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list77539_$_iter__77541(cljs.core.rest(s__77542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list77539);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list77549 = (function sablono$core$ordered_list77549(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list77549_$_iter__77550(s__77551){
return (new cljs.core.LazySeq(null,(function (){
var s__77551__$1 = s__77551;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77551__$1);
if(temp__5735__auto__){
var s__77551__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77551__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__77551__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__77553 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__77552 = (0);
while(true){
if((i__77552 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__77552);
cljs.core.chunk_append(b__77553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__77709 = (i__77552 + (1));
i__77552 = G__77709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77553),sablono$core$ordered_list77549_$_iter__77550(cljs.core.chunk_rest(s__77551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77553),null);
}
} else {
var x = cljs.core.first(s__77551__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list77549_$_iter__77550(cljs.core.rest(s__77551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list77549);
/**
 * Create an image element.
 */
sablono.core.image77560 = (function sablono$core$image77560(var_args){
var G__77562 = arguments.length;
switch (G__77562) {
case 1:
return sablono.core.image77560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image77560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image77560.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image77560.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image77560.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image77560);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77565_SHARP_,p2__77566_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77565_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77566_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__77571_SHARP_,p2__77572_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__77571_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__77572_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__77574 = arguments.length;
switch (G__77574) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field77575 = (function sablono$core$color_field77575(var_args){
var G__77577 = arguments.length;
switch (G__77577) {
case 1:
return sablono.core.color_field77575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field77575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field77575.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77467__auto__);
}));

(sablono.core.color_field77575.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.color_field77575.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field77575);

/**
 * Creates a date input field.
 */
sablono.core.date_field77578 = (function sablono$core$date_field77578(var_args){
var G__77580 = arguments.length;
switch (G__77580) {
case 1:
return sablono.core.date_field77578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field77578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field77578.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77467__auto__);
}));

(sablono.core.date_field77578.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.date_field77578.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field77578);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field77581 = (function sablono$core$datetime_field77581(var_args){
var G__77583 = arguments.length;
switch (G__77583) {
case 1:
return sablono.core.datetime_field77581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field77581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field77581.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77467__auto__);
}));

(sablono.core.datetime_field77581.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.datetime_field77581.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field77581);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field77584 = (function sablono$core$datetime_local_field77584(var_args){
var G__77586 = arguments.length;
switch (G__77586) {
case 1:
return sablono.core.datetime_local_field77584.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field77584.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field77584.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77467__auto__);
}));

(sablono.core.datetime_local_field77584.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.datetime_local_field77584.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field77584);

/**
 * Creates a email input field.
 */
sablono.core.email_field77587 = (function sablono$core$email_field77587(var_args){
var G__77589 = arguments.length;
switch (G__77589) {
case 1:
return sablono.core.email_field77587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field77587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field77587.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77467__auto__);
}));

(sablono.core.email_field77587.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.email_field77587.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field77587);

/**
 * Creates a file input field.
 */
sablono.core.file_field77590 = (function sablono$core$file_field77590(var_args){
var G__77592 = arguments.length;
switch (G__77592) {
case 1:
return sablono.core.file_field77590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field77590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field77590.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77467__auto__);
}));

(sablono.core.file_field77590.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.file_field77590.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field77590);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field77593 = (function sablono$core$hidden_field77593(var_args){
var G__77595 = arguments.length;
switch (G__77595) {
case 1:
return sablono.core.hidden_field77593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field77593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field77593.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77467__auto__);
}));

(sablono.core.hidden_field77593.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.hidden_field77593.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field77593);

/**
 * Creates a month input field.
 */
sablono.core.month_field77596 = (function sablono$core$month_field77596(var_args){
var G__77598 = arguments.length;
switch (G__77598) {
case 1:
return sablono.core.month_field77596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field77596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field77596.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77467__auto__);
}));

(sablono.core.month_field77596.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.month_field77596.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field77596);

/**
 * Creates a number input field.
 */
sablono.core.number_field77599 = (function sablono$core$number_field77599(var_args){
var G__77601 = arguments.length;
switch (G__77601) {
case 1:
return sablono.core.number_field77599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field77599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field77599.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77467__auto__);
}));

(sablono.core.number_field77599.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.number_field77599.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field77599);

/**
 * Creates a password input field.
 */
sablono.core.password_field77602 = (function sablono$core$password_field77602(var_args){
var G__77604 = arguments.length;
switch (G__77604) {
case 1:
return sablono.core.password_field77602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field77602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field77602.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77467__auto__);
}));

(sablono.core.password_field77602.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.password_field77602.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field77602);

/**
 * Creates a range input field.
 */
sablono.core.range_field77605 = (function sablono$core$range_field77605(var_args){
var G__77607 = arguments.length;
switch (G__77607) {
case 1:
return sablono.core.range_field77605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field77605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field77605.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77467__auto__);
}));

(sablono.core.range_field77605.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.range_field77605.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field77605);

/**
 * Creates a search input field.
 */
sablono.core.search_field77608 = (function sablono$core$search_field77608(var_args){
var G__77610 = arguments.length;
switch (G__77610) {
case 1:
return sablono.core.search_field77608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field77608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field77608.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77467__auto__);
}));

(sablono.core.search_field77608.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.search_field77608.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field77608);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field77611 = (function sablono$core$tel_field77611(var_args){
var G__77613 = arguments.length;
switch (G__77613) {
case 1:
return sablono.core.tel_field77611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field77611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field77611.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77467__auto__);
}));

(sablono.core.tel_field77611.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.tel_field77611.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field77611);

/**
 * Creates a text input field.
 */
sablono.core.text_field77614 = (function sablono$core$text_field77614(var_args){
var G__77616 = arguments.length;
switch (G__77616) {
case 1:
return sablono.core.text_field77614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field77614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field77614.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77467__auto__);
}));

(sablono.core.text_field77614.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.text_field77614.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field77614);

/**
 * Creates a time input field.
 */
sablono.core.time_field77617 = (function sablono$core$time_field77617(var_args){
var G__77619 = arguments.length;
switch (G__77619) {
case 1:
return sablono.core.time_field77617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field77617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field77617.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77467__auto__);
}));

(sablono.core.time_field77617.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.time_field77617.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field77617);

/**
 * Creates a url input field.
 */
sablono.core.url_field77624 = (function sablono$core$url_field77624(var_args){
var G__77627 = arguments.length;
switch (G__77627) {
case 1:
return sablono.core.url_field77624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field77624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field77624.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77467__auto__);
}));

(sablono.core.url_field77624.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.url_field77624.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field77624);

/**
 * Creates a week input field.
 */
sablono.core.week_field77630 = (function sablono$core$week_field77630(var_args){
var G__77635 = arguments.length;
switch (G__77635) {
case 1:
return sablono.core.week_field77630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field77630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field77630.cljs$core$IFn$_invoke$arity$1 = (function (name__77467__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77467__auto__);
}));

(sablono.core.week_field77630.cljs$core$IFn$_invoke$arity$2 = (function (name__77467__auto__,value__77468__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__77467__auto__,value__77468__auto__);
}));

(sablono.core.week_field77630.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field77630);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box77637 = (function sablono$core$check_box77637(var_args){
var G__77641 = arguments.length;
switch (G__77641) {
case 1:
return sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77637.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box77637.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box77637);
/**
 * Creates a radio button.
 */
sablono.core.radio_button77645 = (function sablono$core$radio_button77645(var_args){
var G__77647 = arguments.length;
switch (G__77647) {
case 1:
return sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77645.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button77645.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button77645);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__77651 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__77651);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options77652 = (function sablono$core$select_options77652(coll){
var iter__4582__auto__ = (function sablono$core$select_options77652_$_iter__77654(s__77655){
return (new cljs.core.LazySeq(null,(function (){
var s__77655__$1 = s__77655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77655__$1);
if(temp__5735__auto__){
var s__77655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77655__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__77655__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__77657 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__77656 = (0);
while(true){
if((i__77656 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__77656);
cljs.core.chunk_append(b__77657,((cljs.core.sequential_QMARK_(x))?(function (){var vec__77660 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77660,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77660,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77660,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77652.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77652.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77652.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__77795 = (i__77656 + (1));
i__77656 = G__77795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77657),sablono$core$select_options77652_$_iter__77654(cljs.core.chunk_rest(s__77655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77657),null);
}
} else {
var x = cljs.core.first(s__77655__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__77663 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77663,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77663,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77663,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options77652.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options77652.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options77652.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options77652_$_iter__77654(cljs.core.rest(s__77655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options77652);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down77666 = (function sablono$core$drop_down77666(var_args){
var G__77668 = arguments.length;
switch (G__77668) {
case 2:
return sablono.core.drop_down77666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down77666.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down77666.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down77666.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down77666.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down77666.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down77666);
/**
 * Creates a text area element.
 */
sablono.core.text_area77669 = (function sablono$core$text_area77669(var_args){
var G__77671 = arguments.length;
switch (G__77671) {
case 1:
return sablono.core.text_area77669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area77669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area77669.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area77669.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area77669.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area77669);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label77672 = (function sablono$core$label77672(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label77672);
/**
 * Creates a submit button.
 */
sablono.core.submit_button77673 = (function sablono$core$submit_button77673(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button77673);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button77674 = (function sablono$core$reset_button77674(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button77674);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to77675 = (function sablono$core$form_to77675(var_args){
var args__4795__auto__ = [];
var len__4789__auto___77813 = arguments.length;
var i__4790__auto___77814 = (0);
while(true){
if((i__4790__auto___77814 < len__4789__auto___77813)){
args__4795__auto__.push((arguments[i__4790__auto___77814]));

var G__77816 = (i__4790__auto___77814 + (1));
i__4790__auto___77814 = G__77816;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to77675.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to77675.cljs$core$IFn$_invoke$arity$variadic = (function (p__77678,body){
var vec__77679 = p__77678;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77679,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77679,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__77682 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__77683 = "_method";
var G__77684 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__77682,G__77683,G__77684) : sablono.core.hidden_field.call(null,G__77682,G__77683,G__77684));
})()], null)),body));
}));

(sablono.core.form_to77675.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to77675.cljs$lang$applyTo = (function (seq77676){
var G__77677 = cljs.core.first(seq77676);
var seq77676__$1 = cljs.core.next(seq77676);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77677,seq77676__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to77675);

//# sourceMappingURL=sablono.core.js.map
