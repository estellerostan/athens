goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__56141 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56141) : stop_at_QMARK_.call(null,G__56141));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__56142 = stop_at_QMARK_;
var G__56143 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__56142,G__56143) : posh.lib.q_analyze.take_until.call(null,G__56142,G__56143));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__56145 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56145) : rest_at_QMARK_.call(null,G__56145));
}
})())){
return ls;
} else {
var G__56846 = rest_at_QMARK_;
var G__56847 = cljs.core.rest(ls);
rest_at_QMARK_ = G__56846;
ls = G__56847;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__56152 = split_at_QMARK_;
var G__56153 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__56152,G__56153) : posh.lib.q_analyze.split_list_at.call(null,G__56152,G__56153));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__56154 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56154) : posh.lib.q_analyze.get_all_vars.call(null,G__56154));
})(),(function (){var G__56155 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56155) : posh.lib.q_analyze.get_all_vars.call(null,G__56155));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__56165 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56165) : posh.lib.q_analyze.get_all_vars.call(null,G__56165));
})(),cljs.core.first(query));
} else {
var G__56166 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__56166) : posh.lib.q_analyze.get_all_vars.call(null,G__56166));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__56167 = cljs.core.rest(eav);
var G__56168 = (n - (1));
var G__56169 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__56170 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__56167,G__56168,G__56169,G__56170) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__56167,G__56168,G__56169,G__56170));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__56171 = cljs.core.rest(eav);
var G__56172 = (n - (1));
var G__56173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__56174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__56171,G__56172,G__56173,G__56174) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__56171,G__56172,G__56173,G__56174));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__56177 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__56177) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__56177));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__56178 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__56178) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__56178));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__56179 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56179) : posh.lib.q_analyze.get_eavs.call(null,G__56179));
})(),(function (){var G__56180 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56180) : posh.lib.q_analyze.get_eavs.call(null,G__56180));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__56181 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56181) : posh.lib.q_analyze.get_eavs.call(null,G__56181));
})(),(function (){var G__56182 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56182) : posh.lib.q_analyze.get_eavs.call(null,G__56182));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__56183 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56183) : posh.lib.q_analyze.get_eavs.call(null,G__56183));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_56184 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_56184)) && ((cljs.core.count(ocr_56184) === 2)))){
try{var ocr_56184_0__56194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184,(0));
if(((cljs.core.vector_QMARK_(ocr_56184_0__56194)) && ((cljs.core.count(ocr_56184_0__56194) === 5)))){
try{var ocr_56184_0__56194_0__56196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184_0__56194,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56184_0__56194_0__56196,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184_0__56194,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184_0__56194,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184_0__56194,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56184,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__56224 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56224) : posh.lib.q_analyze.get_eavs.call(null,G__56224));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e56223){if((e56223 instanceof Error)){
var e__54909__auto__ = e56223;
if((e__54909__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto__;
}
} else {
throw e56223;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56222){if((e56222 instanceof Error)){
var e__54909__auto__ = e56222;
if((e__54909__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto__;
}
} else {
throw e56222;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56220){if((e56220 instanceof Error)){
var e__54909__auto__ = e56220;
if((e__54909__auto__ === cljs.core.match.backtrack)){
var G__56221 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56221) : posh.lib.q_analyze.get_eavs.call(null,G__56221));
} else {
throw e__54909__auto__;
}
} else {
throw e56220;

}
}} else {
var G__56225 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__56225) : posh.lib.q_analyze.get_eavs.call(null,G__56225));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__56230){
var vec__56231 = p__56230;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56241_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__56241_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__56241_SHARP_);
} else {
return p1__56241_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__56252 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56252) : posh.lib.q_analyze.count_qvars.call(null,G__56252));
})(),(function (){var G__56253 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56253) : posh.lib.q_analyze.count_qvars.call(null,G__56253));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__56263 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__56263) : posh.lib.q_analyze.count_qvars.call(null,G__56263));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__56270(s__56271){
return (new cljs.core.LazySeq(null,(function (){
var s__56271__$1 = s__56271;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56271__$1);
if(temp__5735__auto__){
var s__56271__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56271__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56271__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56273 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56272 = (0);
while(true){
if((i__56272 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56272);
cljs.core.chunk_append(b__56273,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__56883 = (i__56272 + (1));
i__56272 = G__56883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56273),posh$lib$q_analyze$fill_qvar_set_$_iter__56270(cljs.core.chunk_rest(s__56271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56273),null);
}
} else {
var r = cljs.core.first(s__56271__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__56270(cljs.core.rest(s__56271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__56275 = cljs.core.first(seq1);
var G__56276 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__56275,G__56276) : f.call(null,G__56275,G__56276));
})(),(function (){var G__56277 = f;
var G__56278 = cljs.core.rest(seq1);
var G__56279 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__56277,G__56278,G__56279) : posh.lib.q_analyze.seq_merge_with.call(null,G__56277,G__56278,G__56279));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__56287){
var vec__56288 = p__56287;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56288,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56288,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56288,(2),null);
var eav = vec__56288;
var vec__56291 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56291,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56291,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56291,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295(s__56296){
return (new cljs.core.LazySeq(null,(function (){
var s__56296__$1 = s__56296;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56296__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__56296__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295_$_iter__56297(s__56298){
return (new cljs.core.LazySeq(null,((function (s__56296__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (){
var s__56298__$1 = s__56298;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56298__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__56298__$1,s__56296__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295_$_iter__56297_$_iter__56299(s__56300){
return (new cljs.core.LazySeq(null,((function (s__56298__$1,s__56296__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (){
var s__56300__$1 = s__56300;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__56300__$1);
if(temp__5735__auto____$2){
var s__56300__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__56300__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56300__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56302 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56301 = (0);
while(true){
if((i__56301 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56301);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56301,s__56300__$1,s__56298__$1,s__56296__$1,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p1__56285_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__56285_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__56301,s__56300__$1,s__56298__$1,s__56296__$1,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56301,s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p__56303){
var vec__56304 = p__56303;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__56301,s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__56301,s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p1__56286_SHARP_){
if(cljs.core.truth_(p1__56286_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__56301,s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__56302,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__56302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__56903 = (i__56301 + (1));
i__56301 = G__56903;
continue;
} else {
var G__56904 = (i__56301 + (1));
i__56301 = G__56904;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56302),posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295_$_iter__56297_$_iter__56299(cljs.core.chunk_rest(s__56300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56302),null);
}
} else {
var vv = cljs.core.first(s__56300__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56300__$1,s__56298__$1,s__56296__$1,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p1__56285_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__56285_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__56300__$1,s__56298__$1,s__56296__$1,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p__56307){
var vec__56309 = p__56307;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,exposed_qvars,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav){
return (function (p1__56286_SHARP_){
if(cljs.core.truth_(p1__56286_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__56300__$1,s__56298__$1,s__56296__$1,wildcard_count,exposed_qvars,vv,s__56300__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295_$_iter__56297_$_iter__56299(cljs.core.rest(s__56300__$2)));
} else {
var G__56907 = cljs.core.rest(s__56300__$2);
s__56300__$1 = G__56907;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__56298__$1,s__56296__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,null,null));
});})(s__56298__$1,s__56296__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295_$_iter__56297(cljs.core.rest(s__56298__$1)));
} else {
var G__56908 = cljs.core.rest(s__56298__$1);
s__56298__$1 = G__56908;
continue;
}
} else {
return null;
}
break;
}
});})(s__56296__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
,null,null));
});})(s__56296__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__56291,qe,qa,qv,vec__56288,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__56295(cljs.core.rest(s__56296__$1)));
} else {
var G__56909 = cljs.core.rest(s__56296__$1);
s__56296__$1 = G__56909;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_56322 = cljs.core.vec(eav);
var ocr_56323 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_56322)) && ((cljs.core.count(ocr_56322) === 3)))){
try{var ocr_56322_0__56351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_0__56351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56490){if((e56490 instanceof Error)){
var e__54909__auto__ = e56490;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56323)) && ((cljs.core.count(ocr_56323) === 3)))){
try{var ocr_56323_2__56360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56360 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56492){if((e56492 instanceof Error)){
var e__54909__auto____$1 = e56492;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56360 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56493){if((e56493 instanceof Error)){
var e__54909__auto____$2 = e56493;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56493;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56491){if((e56491 instanceof Error)){
var e__54909__auto____$1 = e56491;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56491;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56480){if((e56480 instanceof Error)){
var e__54909__auto__ = e56480;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_56323)) && ((cljs.core.count(ocr_56323) === 3)))){
try{var ocr_56323_1__56362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56362 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56487){if((e56487 instanceof Error)){
var e__54909__auto____$1 = e56487;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56323_1__56362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56362 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56488){if((e56488 instanceof Error)){
var e__54909__auto____$2 = e56488;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56488;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56486){if((e56486 instanceof Error)){
var e__54909__auto____$1 = e56486;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56481){if((e56481 instanceof Error)){
var e__54909__auto____$1 = e56481;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56481;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56391){if((e56391 instanceof Error)){
var e__54909__auto__ = e56391;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56323)) && ((cljs.core.count(ocr_56323) === 3)))){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56479){if((e56479 instanceof Error)){
var e__54909__auto____$1 = e56479;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56479;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56469){if((e56469 instanceof Error)){
var e__54909__auto____$1 = e56469;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56393){if((e56393 instanceof Error)){
var e__54909__auto____$1 = e56393;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56457){if((e56457 instanceof Error)){
var e__54909__auto____$2 = e56457;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56467){if((e56467 instanceof Error)){
var e__54909__auto____$3 = e56467;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56468){if((e56468 instanceof Error)){
var e__54909__auto____$4 = e56468;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56468;

}
}} else {
throw e__54909__auto____$3;
}
} else {
throw e56467;

}
}} else {
throw e__54909__auto____$2;
}
} else {
throw e56457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56456){if((e56456 instanceof Error)){
var e__54909__auto____$2 = e56456;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56394){if((e56394 instanceof Error)){
var e__54909__auto____$2 = e56394;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56454){if((e56454 instanceof Error)){
var e__54909__auto____$3 = e56454;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$3;
}
} else {
throw e56454;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56451){if((e56451 instanceof Error)){
var e__54909__auto____$3 = e56451;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
try{var ocr_56322_2__56353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_2__56353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56453){if((e56453 instanceof Error)){
var e__54909__auto____$4 = e56453;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56452){if((e56452 instanceof Error)){
var e__54909__auto____$4 = e56452;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56452;

}
}} else {
throw e__54909__auto____$3;
}
} else {
throw e56451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56395){if((e56395 instanceof Error)){
var e__54909__auto____$3 = e56395;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56450){if((e56450 instanceof Error)){
var e__54909__auto____$4 = e56450;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56450;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56449){if((e56449 instanceof Error)){
var e__54909__auto____$4 = e56449;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56397){if((e56397 instanceof Error)){
var e__54909__auto____$4 = e56397;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56448){if((e56448 instanceof Error)){
var e__54909__auto____$5 = e56448;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$5;
}
} else {
throw e56448;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56447){if((e56447 instanceof Error)){
var e__54909__auto____$5 = e56447;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$5;
}
} else {
throw e56447;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56398){if((e56398 instanceof Error)){
var e__54909__auto____$5 = e56398;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56446){if((e56446 instanceof Error)){
var e__54909__auto____$6 = e56446;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$6;
}
} else {
throw e56446;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56445){if((e56445 instanceof Error)){
var e__54909__auto____$6 = e56445;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$6;
}
} else {
throw e56445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56399){if((e56399 instanceof Error)){
var e__54909__auto____$6 = e56399;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56322_1__56352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_1__56352,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56444){if((e56444 instanceof Error)){
var e__54909__auto____$7 = e56444;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56444;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56443){if((e56443 instanceof Error)){
var e__54909__auto____$7 = e56443;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56443;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56400){if((e56400 instanceof Error)){
var e__54909__auto____$7 = e56400;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
try{var ocr_56322_0__56351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_0__56351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56442){if((e56442 instanceof Error)){
var e__54909__auto____$8 = e56442;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$8;
}
} else {
throw e56442;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56441){if((e56441 instanceof Error)){
var e__54909__auto____$8 = e56441;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$8;
}
} else {
throw e56441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56401){if((e56401 instanceof Error)){
var e__54909__auto____$8 = e56401;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
try{var ocr_56322_0__56351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_0__56351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56440){if((e56440 instanceof Error)){
var e__54909__auto____$9 = e56440;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$9;
}
} else {
throw e56440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56439){if((e56439 instanceof Error)){
var e__54909__auto____$9 = e56439;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$9;
}
} else {
throw e56439;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56406){if((e56406 instanceof Error)){
var e__54909__auto____$9 = e56406;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
try{var ocr_56322_0__56351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_0__56351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56438){if((e56438 instanceof Error)){
var e__54909__auto____$10 = e56438;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56435){if((e56435 instanceof Error)){
var e__54909__auto____$10 = e56435;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56407){if((e56407 instanceof Error)){
var e__54909__auto____$10 = e56407;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
try{var ocr_56322_0__56351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56322_0__56351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56432){if((e56432 instanceof Error)){
var e__54909__auto____$11 = e56432;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$11;
}
} else {
throw e56432;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56431){if((e56431 instanceof Error)){
var e__54909__auto____$11 = e56431;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$11;
}
} else {
throw e56431;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56408){if((e56408 instanceof Error)){
var e__54909__auto____$11 = e56408;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56430){if((e56430 instanceof Error)){
var e__54909__auto____$12 = e56430;
if((e__54909__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$12;
}
} else {
throw e56430;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56425){if((e56425 instanceof Error)){
var e__54909__auto____$12 = e56425;
if((e__54909__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56429){if((e56429 instanceof Error)){
var e__54909__auto____$13 = e56429;
if((e__54909__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$13;
}
} else {
throw e56429;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56426){if((e56426 instanceof Error)){
var e__54909__auto____$13 = e56426;
if((e__54909__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56428){if((e56428 instanceof Error)){
var e__54909__auto____$14 = e56428;
if((e__54909__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$14;
}
} else {
throw e56428;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56427){if((e56427 instanceof Error)){
var e__54909__auto____$14 = e56427;
if((e__54909__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$14;
}
} else {
throw e56427;

}
}} else {
throw e__54909__auto____$13;
}
} else {
throw e56426;

}
}} else {
throw e__54909__auto____$12;
}
} else {
throw e56425;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56409){if((e56409 instanceof Error)){
var e__54909__auto____$12 = e56409;
if((e__54909__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56424){if((e56424 instanceof Error)){
var e__54909__auto____$13 = e56424;
if((e__54909__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$13;
}
} else {
throw e56424;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56423){if((e56423 instanceof Error)){
var e__54909__auto____$13 = e56423;
if((e__54909__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$13;
}
} else {
throw e56423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56410){if((e56410 instanceof Error)){
var e__54909__auto____$13 = e56410;
if((e__54909__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === true)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56421){if((e56421 instanceof Error)){
var e__54909__auto____$14 = e56421;
if((e__54909__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$14;
}
} else {
throw e56421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56420){if((e56420 instanceof Error)){
var e__54909__auto____$14 = e56420;
if((e__54909__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$14;
}
} else {
throw e56420;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56411){if((e56411 instanceof Error)){
var e__54909__auto____$14 = e56411;
if((e__54909__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_56323_2__56371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(2));
if((ocr_56323_2__56371 === false)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === true)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56418){if((e56418 instanceof Error)){
var e__54909__auto____$15 = e56418;
if((e__54909__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$15;
}
} else {
throw e56418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56414){if((e56414 instanceof Error)){
var e__54909__auto____$15 = e56414;
if((e__54909__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_56323_0__56369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(0));
if((ocr_56323_0__56369 === false)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56416){if((e56416 instanceof Error)){
var e__54909__auto____$16 = e56416;
if((e__54909__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_56323_1__56370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56323,(1));
if((ocr_56323_1__56370 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56322,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56417){if((e56417 instanceof Error)){
var e__54909__auto____$17 = e56417;
if((e__54909__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$17;
}
} else {
throw e56417;

}
}} else {
throw e__54909__auto____$16;
}
} else {
throw e56416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56415){if((e56415 instanceof Error)){
var e__54909__auto____$16 = e56415;
if((e__54909__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$16;
}
} else {
throw e56415;

}
}} else {
throw e__54909__auto____$15;
}
} else {
throw e56414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56412){if((e56412 instanceof Error)){
var e__54909__auto____$15 = e56412;
if((e__54909__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$15;
}
} else {
throw e56412;

}
}} else {
throw e__54909__auto____$14;
}
} else {
throw e56411;

}
}} else {
throw e__54909__auto____$13;
}
} else {
throw e56410;

}
}} else {
throw e__54909__auto____$12;
}
} else {
throw e56409;

}
}} else {
throw e__54909__auto____$11;
}
} else {
throw e56408;

}
}} else {
throw e__54909__auto____$10;
}
} else {
throw e56407;

}
}} else {
throw e__54909__auto____$9;
}
} else {
throw e56406;

}
}} else {
throw e__54909__auto____$8;
}
} else {
throw e56401;

}
}} else {
throw e__54909__auto____$7;
}
} else {
throw e56400;

}
}} else {
throw e__54909__auto____$6;
}
} else {
throw e56399;

}
}} else {
throw e__54909__auto____$5;
}
} else {
throw e56398;

}
}} else {
throw e__54909__auto____$4;
}
} else {
throw e56397;

}
}} else {
throw e__54909__auto____$3;
}
} else {
throw e56395;

}
}} else {
throw e__54909__auto____$2;
}
} else {
throw e56394;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56393;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56392){if((e56392 instanceof Error)){
var e__54909__auto____$1 = e56392;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56392;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56387){if((e56387 instanceof Error)){
var e__54909__auto__ = e56387;
if((e__54909__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__54909__auto__;
}
} else {
throw e56387;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_56502 = cljs.core.vec(eav);
var ocr_56503 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_56502)) && ((cljs.core.count(ocr_56502) === 3)))){
try{var ocr_56502_0__56528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_0__56528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56502_2__56530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_2__56530,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e56670){if((e56670 instanceof Error)){
var e__54909__auto__ = e56670;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56503)) && ((cljs.core.count(ocr_56503) === 3)))){
try{var ocr_56503_2__56533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56533 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56672){if((e56672 instanceof Error)){
var e__54909__auto____$1 = e56672;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56533 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56673){if((e56673 instanceof Error)){
var e__54909__auto____$2 = e56673;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56673;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56671){if((e56671 instanceof Error)){
var e__54909__auto____$1 = e56671;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56671;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56661){if((e56661 instanceof Error)){
var e__54909__auto__ = e56661;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{var ocr_56502_2__56530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_2__56530,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_56503)) && ((cljs.core.count(ocr_56503) === 3)))){
try{var ocr_56503_1__56535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56535 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56665){if((e56665 instanceof Error)){
var e__54909__auto____$1 = e56665;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56535 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56669){if((e56669 instanceof Error)){
var e__54909__auto____$2 = e56669;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56669;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56665;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56663){if((e56663 instanceof Error)){
var e__54909__auto____$1 = e56663;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56662){if((e56662 instanceof Error)){
var e__54909__auto____$1 = e56662;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56662;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56661;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56572){if((e56572 instanceof Error)){
var e__54909__auto__ = e56572;
if((e__54909__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_56503)) && ((cljs.core.count(ocr_56503) === 3)))){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56502_2__56530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_2__56530,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56660){if((e56660 instanceof Error)){
var e__54909__auto____$1 = e56660;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56659){if((e56659 instanceof Error)){
var e__54909__auto____$1 = e56659;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56581){if((e56581 instanceof Error)){
var e__54909__auto____$1 = e56581;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
try{var ocr_56502_2__56530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_2__56530,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56656){if((e56656 instanceof Error)){
var e__54909__auto____$2 = e56656;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56657){if((e56657 instanceof Error)){
var e__54909__auto____$3 = e56657;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56658){if((e56658 instanceof Error)){
var e__54909__auto____$4 = e56658;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56658;

}
}} else {
throw e__54909__auto____$3;
}
} else {
throw e56657;

}
}} else {
throw e__54909__auto____$2;
}
} else {
throw e56656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56655){if((e56655 instanceof Error)){
var e__54909__auto____$2 = e56655;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$2;
}
} else {
throw e56655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56582){if((e56582 instanceof Error)){
var e__54909__auto____$2 = e56582;
if((e__54909__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
try{var ocr_56502_2__56530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_2__56530,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56654){if((e56654 instanceof Error)){
var e__54909__auto____$3 = e56654;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$3;
}
} else {
throw e56654;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56653){if((e56653 instanceof Error)){
var e__54909__auto____$3 = e56653;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$3;
}
} else {
throw e56653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56583){if((e56583 instanceof Error)){
var e__54909__auto____$3 = e56583;
if((e__54909__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === true)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56652){if((e56652 instanceof Error)){
var e__54909__auto____$4 = e56652;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56651){if((e56651 instanceof Error)){
var e__54909__auto____$4 = e56651;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$4;
}
} else {
throw e56651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56584){if((e56584 instanceof Error)){
var e__54909__auto____$4 = e56584;
if((e__54909__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === false)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56650){if((e56650 instanceof Error)){
var e__54909__auto____$5 = e56650;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$5;
}
} else {
throw e56650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56649){if((e56649 instanceof Error)){
var e__54909__auto____$5 = e56649;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$5;
}
} else {
throw e56649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56585){if((e56585 instanceof Error)){
var e__54909__auto____$5 = e56585;
if((e__54909__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === true)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
try{var ocr_56502_1__56529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_1__56529,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56644){if((e56644 instanceof Error)){
var e__54909__auto____$6 = e56644;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$6;
}
} else {
throw e56644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56629){if((e56629 instanceof Error)){
var e__54909__auto____$6 = e56629;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
try{var ocr_56502_0__56528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_0__56528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56637){if((e56637 instanceof Error)){
var e__54909__auto____$7 = e56637;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56630){if((e56630 instanceof Error)){
var e__54909__auto____$7 = e56630;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56630;

}
}} else {
throw e__54909__auto____$6;
}
} else {
throw e56629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56586){if((e56586 instanceof Error)){
var e__54909__auto____$6 = e56586;
if((e__54909__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === false)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
try{var ocr_56502_0__56528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_0__56528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56628){if((e56628 instanceof Error)){
var e__54909__auto____$7 = e56628;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56627){if((e56627 instanceof Error)){
var e__54909__auto____$7 = e56627;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$7;
}
} else {
throw e56627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56587){if((e56587 instanceof Error)){
var e__54909__auto____$7 = e56587;
if((e__54909__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === true)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === false)){
try{var ocr_56502_0__56528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_56502_0__56528,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56622){if((e56622 instanceof Error)){
var e__54909__auto____$8 = e56622;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$8;
}
} else {
throw e56622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56610){if((e56610 instanceof Error)){
var e__54909__auto____$8 = e56610;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56614){if((e56614 instanceof Error)){
var e__54909__auto____$9 = e56614;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56615){if((e56615 instanceof Error)){
var e__54909__auto____$10 = e56615;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56615;

}
}} else {
throw e__54909__auto____$9;
}
} else {
throw e56614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56611){if((e56611 instanceof Error)){
var e__54909__auto____$9 = e56611;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === false)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56613){if((e56613 instanceof Error)){
var e__54909__auto____$10 = e56613;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56612){if((e56612 instanceof Error)){
var e__54909__auto____$10 = e56612;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56612;

}
}} else {
throw e__54909__auto____$9;
}
} else {
throw e56611;

}
}} else {
throw e__54909__auto____$8;
}
} else {
throw e56610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56590){if((e56590 instanceof Error)){
var e__54909__auto____$8 = e56590;
if((e__54909__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === false)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56609){if((e56609 instanceof Error)){
var e__54909__auto____$9 = e56609;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$9;
}
} else {
throw e56609;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56608){if((e56608 instanceof Error)){
var e__54909__auto____$9 = e56608;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$9;
}
} else {
throw e56608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56593){if((e56593 instanceof Error)){
var e__54909__auto____$9 = e56593;
if((e__54909__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === true)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56604){if((e56604 instanceof Error)){
var e__54909__auto____$10 = e56604;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56600){if((e56600 instanceof Error)){
var e__54909__auto____$10 = e56600;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$10;
}
} else {
throw e56600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56594){if((e56594 instanceof Error)){
var e__54909__auto____$10 = e56594;
if((e__54909__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_56503_2__56555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(2));
if((ocr_56503_2__56555 === false)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === true)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56599){if((e56599 instanceof Error)){
var e__54909__auto____$11 = e56599;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$11;
}
} else {
throw e56599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56596){if((e56596 instanceof Error)){
var e__54909__auto____$11 = e56596;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_56503_0__56553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(0));
if((ocr_56503_0__56553 === false)){
try{var ocr_56503_1__56554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56503,(1));
if((ocr_56503_1__56554 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_56502,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56598){if((e56598 instanceof Error)){
var e__54909__auto____$12 = e56598;
if((e__54909__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$12;
}
} else {
throw e56598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56597){if((e56597 instanceof Error)){
var e__54909__auto____$12 = e56597;
if((e__54909__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$12;
}
} else {
throw e56597;

}
}} else {
throw e__54909__auto____$11;
}
} else {
throw e56596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56595){if((e56595 instanceof Error)){
var e__54909__auto____$11 = e56595;
if((e__54909__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$11;
}
} else {
throw e56595;

}
}} else {
throw e__54909__auto____$10;
}
} else {
throw e56594;

}
}} else {
throw e__54909__auto____$9;
}
} else {
throw e56593;

}
}} else {
throw e__54909__auto____$8;
}
} else {
throw e56590;

}
}} else {
throw e__54909__auto____$7;
}
} else {
throw e56587;

}
}} else {
throw e__54909__auto____$6;
}
} else {
throw e56586;

}
}} else {
throw e__54909__auto____$5;
}
} else {
throw e56585;

}
}} else {
throw e__54909__auto____$4;
}
} else {
throw e56584;

}
}} else {
throw e__54909__auto____$3;
}
} else {
throw e56583;

}
}} else {
throw e__54909__auto____$2;
}
} else {
throw e56582;

}
}} else {
throw e__54909__auto____$1;
}
} else {
throw e56581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56573){if((e56573 instanceof Error)){
var e__54909__auto____$1 = e56573;
if((e__54909__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__54909__auto____$1;
}
} else {
throw e56573;

}
}} else {
throw e__54909__auto__;
}
} else {
throw e56572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56571){if((e56571 instanceof Error)){
var e__54909__auto__ = e56571;
if((e__54909__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__54909__auto__;
}
} else {
throw e56571;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56680){
var vec__56681 = p__56680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56681,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56678_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__56678_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56685){
var vec__56687 = p__56685;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56687,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56684_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__56684_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__56690 = cljs.core.rest(ins);
var G__56691 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__56690,G__56691) : posh.lib.q_analyze.just_qvars.call(null,G__56690,G__56691));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56692_SHARP_){
return cljs.core.zipmap(qvars,p1__56692_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__56699 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56699,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__57146 = var$;
var G__57147 = dbvarmap;
var G__57148 = cljs.core.rest(dbeavs);
var$ = G__57146;
dbvarmap = G__57147;
dbeavs = G__57148;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__56707 = cljs.core.rest(vars);
var G__56708 = dbvarmap;
var G__56709 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__56707,G__56708,G__56709) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__56707,G__56708,G__56709));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__57150 = (n + (1));
var G__57151 = cljs.core.rest(xs__$1);
n = G__57150;
xs__$1 = G__57151;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56714_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__56714_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__56714_SHARP_) : type.call(null,p1__56714_SHARP_));
} else {
return p1__56714_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__56724 = cljs.core.rest(ins);
var G__56725 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__56724,G__56725) : posh.lib.q_analyze.make_dbarg_map.call(null,G__56724,G__56725));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56737){
var vec__56738 = p__56737;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56738,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56738,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__56747_SHARP_,p2__56746_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__56746_SHARP_)){
return p1__56747_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__56774 = cljs.core._EQ_;
var expr__56775 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__56774.cljs$core$IFn$_invoke$arity$2 ? pred__56774.cljs$core$IFn$_invoke$arity$2((1),expr__56775) : pred__56774.call(null,(1),expr__56775)))){
return true;
} else {
if(cljs.core.truth_((pred__56774.cljs$core$IFn$_invoke$arity$2 ? pred__56774.cljs$core$IFn$_invoke$arity$2((3),expr__56775) : pred__56774.call(null,(3),expr__56775)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__57153 = cljs.core.first(remaining);
var G__57154 = cljs.core.rest(remaining);
clause = G__57153;
remaining = G__57154;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__57155 = cljs.core.first(remaining);
var G__57156 = cljs.core.rest(remaining);
clause = G__57155;
remaining = G__57156;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__56777(s__56778){
return (new cljs.core.LazySeq(null,(function (){
var s__56778__$1 = s__56778;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56778__$1);
if(temp__5735__auto__){
var s__56778__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56778__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56778__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56780 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56779 = (0);
while(true){
if((i__56779 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56779);
cljs.core.chunk_append(b__56780,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__57157 = (i__56779 + (1));
i__56779 = G__57157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56780),posh$lib$q_analyze$resolve_any_idents_$_iter__56777(cljs.core.chunk_rest(s__56778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56780),null);
}
} else {
var var_value = cljs.core.first(s__56778__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__56777(cljs.core.rest(s__56778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56807){
var vec__56808 = p__56807;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56808,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56808,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56815){
var vec__56816 = p__56815;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56816,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56821){
var vec__56822 = p__56821;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56822,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56822,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56831){
var vec__56832 = p__56831;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56832,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56832,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__56836 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__56837 = cljs.core.vec(r);
var fexpr__56835 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__56835.cljs$core$IFn$_invoke$arity$2 ? fexpr__56835.cljs$core$IFn$_invoke$arity$2(G__56836,G__56837) : fexpr__56835.call(null,G__56836,G__56837));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56838){
var vec__56839 = p__56838;
var seq__56840 = cljs.core.seq(vec__56839);
var first__56841 = cljs.core.first(seq__56840);
var seq__56840__$1 = cljs.core.next(seq__56840);
var db = first__56841;
var eav = seq__56840__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56842){
var vec__56843 = p__56842;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56843,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__56801_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__56801_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__56801_SHARP_) : linked_qvars.call(null,p1__56801_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__56801_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__56802_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__56802_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__56802_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
