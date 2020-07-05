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
var G__63980__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__63782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__63783 = cljs.core.seq(vec__63782);
var first__63784 = cljs.core.first(seq__63783);
var seq__63783__$1 = cljs.core.next(seq__63783);
var tag = first__63784;
var body = seq__63783__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__63980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63986__i = 0, G__63986__a = new Array(arguments.length -  0);
while (G__63986__i < G__63986__a.length) {G__63986__a[G__63986__i] = arguments[G__63986__i + 0]; ++G__63986__i;}
  args = new cljs.core.IndexedSeq(G__63986__a,0,null);
} 
return G__63980__delegate.call(this,args);};
G__63980.cljs$lang$maxFixedArity = 0;
G__63980.cljs$lang$applyTo = (function (arglist__63987){
var args = cljs.core.seq(arglist__63987);
return G__63980__delegate(args);
});
G__63980.cljs$core$IFn$_invoke$arity$variadic = G__63980__delegate;
return G__63980;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__63785(s__63786){
return (new cljs.core.LazySeq(null,(function (){
var s__63786__$1 = s__63786;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63786__$1);
if(temp__5735__auto__){
var s__63786__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63786__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63786__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63788 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63787 = (0);
while(true){
if((i__63787 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63787);
cljs.core.chunk_append(b__63788,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__63989 = (i__63787 + (1));
i__63787 = G__63989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63788),sablono$core$update_arglists_$_iter__63785(cljs.core.chunk_rest(s__63786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63788),null);
}
} else {
var args = cljs.core.first(s__63786__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__63785(cljs.core.rest(s__63786__$2)));
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
var len__4789__auto___63991 = arguments.length;
var i__4790__auto___63992 = (0);
while(true){
if((i__4790__auto___63992 < len__4789__auto___63991)){
args__4795__auto__.push((arguments[i__4790__auto___63992]));

var G__63993 = (i__4790__auto___63992 + (1));
i__4790__auto___63992 = G__63993;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__63790(s__63791){
return (new cljs.core.LazySeq(null,(function (){
var s__63791__$1 = s__63791;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63791__$1);
if(temp__5735__auto__){
var s__63791__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63791__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63791__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63793 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63792 = (0);
while(true){
if((i__63792 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63792);
cljs.core.chunk_append(b__63793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__63995 = (i__63792 + (1));
i__63792 = G__63995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63793),sablono$core$iter__63790(cljs.core.chunk_rest(s__63791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63793),null);
}
} else {
var style = cljs.core.first(s__63791__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__63790(cljs.core.rest(s__63791__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq63789){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63789));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__63794 = goog.dom.getDocument().body;
var G__63795 = (function (){var G__63796 = "script";
var G__63797 = ({"src": src});
return goog.dom.createDom(G__63796,G__63797);
})();
return goog.dom.appendChild(G__63794,G__63795);
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
sablono.core.link_to63799 = (function sablono$core$link_to63799(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63997 = arguments.length;
var i__4790__auto___63998 = (0);
while(true){
if((i__4790__auto___63998 < len__4789__auto___63997)){
args__4795__auto__.push((arguments[i__4790__auto___63998]));

var G__63999 = (i__4790__auto___63998 + (1));
i__4790__auto___63998 = G__63999;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to63799.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to63799.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to63799.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to63799.cljs$lang$applyTo = (function (seq63801){
var G__63802 = cljs.core.first(seq63801);
var seq63801__$1 = cljs.core.next(seq63801);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63802,seq63801__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to63799);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to63808 = (function sablono$core$mail_to63808(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64001 = arguments.length;
var i__4790__auto___64002 = (0);
while(true){
if((i__4790__auto___64002 < len__4789__auto___64001)){
args__4795__auto__.push((arguments[i__4790__auto___64002]));

var G__64003 = (i__4790__auto___64002 + (1));
i__4790__auto___64002 = G__64003;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to63808.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to63808.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__63826){
var vec__63827 = p__63826;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63827,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to63808.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to63808.cljs$lang$applyTo = (function (seq63809){
var G__63810 = cljs.core.first(seq63809);
var seq63809__$1 = cljs.core.next(seq63809);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63810,seq63809__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to63808);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list63830 = (function sablono$core$unordered_list63830(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list63830_$_iter__63831(s__63832){
return (new cljs.core.LazySeq(null,(function (){
var s__63832__$1 = s__63832;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63832__$1);
if(temp__5735__auto__){
var s__63832__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63832__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63832__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63834 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63833 = (0);
while(true){
if((i__63833 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63833);
cljs.core.chunk_append(b__63834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__64007 = (i__63833 + (1));
i__63833 = G__64007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63834),sablono$core$unordered_list63830_$_iter__63831(cljs.core.chunk_rest(s__63832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63834),null);
}
} else {
var x = cljs.core.first(s__63832__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list63830_$_iter__63831(cljs.core.rest(s__63832__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list63830);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list63835 = (function sablono$core$ordered_list63835(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list63835_$_iter__63836(s__63837){
return (new cljs.core.LazySeq(null,(function (){
var s__63837__$1 = s__63837;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63837__$1);
if(temp__5735__auto__){
var s__63837__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63837__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63837__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63839 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63838 = (0);
while(true){
if((i__63838 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63838);
cljs.core.chunk_append(b__63839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__64011 = (i__63838 + (1));
i__63838 = G__64011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63839),sablono$core$ordered_list63835_$_iter__63836(cljs.core.chunk_rest(s__63837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63839),null);
}
} else {
var x = cljs.core.first(s__63837__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list63835_$_iter__63836(cljs.core.rest(s__63837__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list63835);
/**
 * Create an image element.
 */
sablono.core.image63840 = (function sablono$core$image63840(var_args){
var G__63842 = arguments.length;
switch (G__63842) {
case 1:
return sablono.core.image63840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image63840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image63840.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image63840.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image63840.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image63840);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__63843_SHARP_,p2__63844_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63843_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__63844_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__63845_SHARP_,p2__63846_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63845_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__63846_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__63848 = arguments.length;
switch (G__63848) {
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
sablono.core.color_field63849 = (function sablono$core$color_field63849(var_args){
var G__63851 = arguments.length;
switch (G__63851) {
case 1:
return sablono.core.color_field63849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field63849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field63849.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__63774__auto__);
}));

(sablono.core.color_field63849.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.color_field63849.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field63849);

/**
 * Creates a date input field.
 */
sablono.core.date_field63852 = (function sablono$core$date_field63852(var_args){
var G__63854 = arguments.length;
switch (G__63854) {
case 1:
return sablono.core.date_field63852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field63852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field63852.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__63774__auto__);
}));

(sablono.core.date_field63852.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.date_field63852.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field63852);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field63855 = (function sablono$core$datetime_field63855(var_args){
var G__63857 = arguments.length;
switch (G__63857) {
case 1:
return sablono.core.datetime_field63855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field63855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field63855.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__63774__auto__);
}));

(sablono.core.datetime_field63855.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.datetime_field63855.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field63855);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field63858 = (function sablono$core$datetime_local_field63858(var_args){
var G__63860 = arguments.length;
switch (G__63860) {
case 1:
return sablono.core.datetime_local_field63858.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field63858.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field63858.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__63774__auto__);
}));

(sablono.core.datetime_local_field63858.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.datetime_local_field63858.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field63858);

/**
 * Creates a email input field.
 */
sablono.core.email_field63863 = (function sablono$core$email_field63863(var_args){
var G__63865 = arguments.length;
switch (G__63865) {
case 1:
return sablono.core.email_field63863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field63863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field63863.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__63774__auto__);
}));

(sablono.core.email_field63863.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.email_field63863.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field63863);

/**
 * Creates a file input field.
 */
sablono.core.file_field63867 = (function sablono$core$file_field63867(var_args){
var G__63872 = arguments.length;
switch (G__63872) {
case 1:
return sablono.core.file_field63867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field63867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field63867.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__63774__auto__);
}));

(sablono.core.file_field63867.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.file_field63867.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field63867);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field63873 = (function sablono$core$hidden_field63873(var_args){
var G__63875 = arguments.length;
switch (G__63875) {
case 1:
return sablono.core.hidden_field63873.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field63873.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field63873.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__63774__auto__);
}));

(sablono.core.hidden_field63873.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.hidden_field63873.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field63873);

/**
 * Creates a month input field.
 */
sablono.core.month_field63876 = (function sablono$core$month_field63876(var_args){
var G__63879 = arguments.length;
switch (G__63879) {
case 1:
return sablono.core.month_field63876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field63876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field63876.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__63774__auto__);
}));

(sablono.core.month_field63876.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.month_field63876.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field63876);

/**
 * Creates a number input field.
 */
sablono.core.number_field63882 = (function sablono$core$number_field63882(var_args){
var G__63884 = arguments.length;
switch (G__63884) {
case 1:
return sablono.core.number_field63882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field63882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field63882.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__63774__auto__);
}));

(sablono.core.number_field63882.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.number_field63882.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field63882);

/**
 * Creates a password input field.
 */
sablono.core.password_field63885 = (function sablono$core$password_field63885(var_args){
var G__63888 = arguments.length;
switch (G__63888) {
case 1:
return sablono.core.password_field63885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field63885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field63885.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__63774__auto__);
}));

(sablono.core.password_field63885.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.password_field63885.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field63885);

/**
 * Creates a range input field.
 */
sablono.core.range_field63889 = (function sablono$core$range_field63889(var_args){
var G__63891 = arguments.length;
switch (G__63891) {
case 1:
return sablono.core.range_field63889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field63889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field63889.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__63774__auto__);
}));

(sablono.core.range_field63889.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.range_field63889.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field63889);

/**
 * Creates a search input field.
 */
sablono.core.search_field63894 = (function sablono$core$search_field63894(var_args){
var G__63896 = arguments.length;
switch (G__63896) {
case 1:
return sablono.core.search_field63894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field63894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field63894.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__63774__auto__);
}));

(sablono.core.search_field63894.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.search_field63894.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field63894);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field63897 = (function sablono$core$tel_field63897(var_args){
var G__63899 = arguments.length;
switch (G__63899) {
case 1:
return sablono.core.tel_field63897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field63897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field63897.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__63774__auto__);
}));

(sablono.core.tel_field63897.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.tel_field63897.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field63897);

/**
 * Creates a text input field.
 */
sablono.core.text_field63900 = (function sablono$core$text_field63900(var_args){
var G__63902 = arguments.length;
switch (G__63902) {
case 1:
return sablono.core.text_field63900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field63900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field63900.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__63774__auto__);
}));

(sablono.core.text_field63900.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.text_field63900.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field63900);

/**
 * Creates a time input field.
 */
sablono.core.time_field63903 = (function sablono$core$time_field63903(var_args){
var G__63905 = arguments.length;
switch (G__63905) {
case 1:
return sablono.core.time_field63903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field63903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field63903.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__63774__auto__);
}));

(sablono.core.time_field63903.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.time_field63903.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field63903);

/**
 * Creates a url input field.
 */
sablono.core.url_field63906 = (function sablono$core$url_field63906(var_args){
var G__63908 = arguments.length;
switch (G__63908) {
case 1:
return sablono.core.url_field63906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field63906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field63906.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__63774__auto__);
}));

(sablono.core.url_field63906.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.url_field63906.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field63906);

/**
 * Creates a week input field.
 */
sablono.core.week_field63909 = (function sablono$core$week_field63909(var_args){
var G__63911 = arguments.length;
switch (G__63911) {
case 1:
return sablono.core.week_field63909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field63909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field63909.cljs$core$IFn$_invoke$arity$1 = (function (name__63774__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__63774__auto__);
}));

(sablono.core.week_field63909.cljs$core$IFn$_invoke$arity$2 = (function (name__63774__auto__,value__63775__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__63774__auto__,value__63775__auto__);
}));

(sablono.core.week_field63909.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field63909);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box63913 = (function sablono$core$check_box63913(var_args){
var G__63915 = arguments.length;
switch (G__63915) {
case 1:
return sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box63913.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box63913.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box63913);
/**
 * Creates a radio button.
 */
sablono.core.radio_button63917 = (function sablono$core$radio_button63917(var_args){
var G__63919 = arguments.length;
switch (G__63919) {
case 1:
return sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button63917.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button63917.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button63917);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__63928 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__63928);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options63929 = (function sablono$core$select_options63929(coll){
var iter__4582__auto__ = (function sablono$core$select_options63929_$_iter__63931(s__63932){
return (new cljs.core.LazySeq(null,(function (){
var s__63932__$1 = s__63932;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63932__$1);
if(temp__5735__auto__){
var s__63932__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63932__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63932__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63934 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63933 = (0);
while(true){
if((i__63933 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63933);
cljs.core.chunk_append(b__63934,((cljs.core.sequential_QMARK_(x))?(function (){var vec__63937 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63937,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options63929.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options63929.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options63929.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__64052 = (i__63933 + (1));
i__63933 = G__64052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63934),sablono$core$select_options63929_$_iter__63931(cljs.core.chunk_rest(s__63932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63934),null);
}
} else {
var x = cljs.core.first(s__63932__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__63942 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options63929.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options63929.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options63929.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options63929_$_iter__63931(cljs.core.rest(s__63932__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options63929);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down63945 = (function sablono$core$drop_down63945(var_args){
var G__63949 = arguments.length;
switch (G__63949) {
case 2:
return sablono.core.drop_down63945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down63945.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down63945.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down63945.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down63945.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down63945.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down63945);
/**
 * Creates a text area element.
 */
sablono.core.text_area63950 = (function sablono$core$text_area63950(var_args){
var G__63952 = arguments.length;
switch (G__63952) {
case 1:
return sablono.core.text_area63950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area63950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area63950.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area63950.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area63950.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area63950);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label63954 = (function sablono$core$label63954(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label63954);
/**
 * Creates a submit button.
 */
sablono.core.submit_button63955 = (function sablono$core$submit_button63955(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button63955);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button63956 = (function sablono$core$reset_button63956(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button63956);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to63960 = (function sablono$core$form_to63960(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64084 = arguments.length;
var i__4790__auto___64085 = (0);
while(true){
if((i__4790__auto___64085 < len__4789__auto___64084)){
args__4795__auto__.push((arguments[i__4790__auto___64085]));

var G__64086 = (i__4790__auto___64085 + (1));
i__4790__auto___64085 = G__64086;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to63960.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to63960.cljs$core$IFn$_invoke$arity$variadic = (function (p__63966,body){
var vec__63967 = p__63966;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63967,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63967,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__63970 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__63971 = "_method";
var G__63972 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__63970,G__63971,G__63972) : sablono.core.hidden_field.call(null,G__63970,G__63971,G__63972));
})()], null)),body));
}));

(sablono.core.form_to63960.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to63960.cljs$lang$applyTo = (function (seq63961){
var G__63962 = cljs.core.first(seq63961);
var seq63961__$1 = cljs.core.next(seq63961);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63962,seq63961__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to63960);

//# sourceMappingURL=sablono.core.js.map
