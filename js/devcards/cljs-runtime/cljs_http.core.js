goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__66360 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__66360.cljs$core$IFn$_invoke$arity$1 ? fexpr__66360.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__66360.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66361){
var vec__66362 = p__66361;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66362,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__66365 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__66365)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__66365)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__66365)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__66365)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__66365)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__66365)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66365)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__66366){
var map__66367 = p__66366;
var map__66367__$1 = (((((!((map__66367 == null))))?(((((map__66367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66367):map__66367);
var request = map__66367__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__66369 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__66369,default_headers);

cljs_http.core.apply_response_type_BANG_(G__66369,response_type);

G__66369.setTimeoutInterval(timeout);

G__66369.setWithCredentials(send_credentials);

return G__66369;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__66370){
var map__66371 = p__66370;
var map__66371__$1 = (((((!((map__66371 == null))))?(((((map__66371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66371):map__66371);
var request = map__66371__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66371__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__66373 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__66373) : cljs_http.core.error_kw.call(null,G__66373));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_66415 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__66374_66416 = xhr;
G__66374_66416.setProgressEventsEnabled(true);

G__66374_66416.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_66415,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__66374_66416.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_66415,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__45937__auto___66420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45938__auto__ = (function (){var switch__45837__auto__ = (function (state_66385){
var state_val_66386 = (state_66385[(1)]);
if((state_val_66386 === (1))){
var state_66385__$1 = state_66385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66385__$1,(2),cancel);
} else {
if((state_val_66386 === (2))){
var inst_66376 = (state_66385[(2)]);
var inst_66377 = xhr.isComplete();
var inst_66378 = cljs.core.not(inst_66377);
var state_66385__$1 = (function (){var statearr_66387 = state_66385;
(statearr_66387[(7)] = inst_66376);

return statearr_66387;
})();
if(inst_66378){
var statearr_66388_66421 = state_66385__$1;
(statearr_66388_66421[(1)] = (3));

} else {
var statearr_66389_66422 = state_66385__$1;
(statearr_66389_66422[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66386 === (3))){
var inst_66380 = xhr.abort();
var state_66385__$1 = state_66385;
var statearr_66390_66423 = state_66385__$1;
(statearr_66390_66423[(2)] = inst_66380);

(statearr_66390_66423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66386 === (4))){
var state_66385__$1 = state_66385;
var statearr_66391_66424 = state_66385__$1;
(statearr_66391_66424[(2)] = null);

(statearr_66391_66424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66386 === (5))){
var inst_66383 = (state_66385[(2)]);
var state_66385__$1 = state_66385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66385__$1,inst_66383);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__45838__auto__ = null;
var cljs_http$core$xhr_$_state_machine__45838__auto____0 = (function (){
var statearr_66392 = [null,null,null,null,null,null,null,null];
(statearr_66392[(0)] = cljs_http$core$xhr_$_state_machine__45838__auto__);

(statearr_66392[(1)] = (1));

return statearr_66392;
});
var cljs_http$core$xhr_$_state_machine__45838__auto____1 = (function (state_66385){
while(true){
var ret_value__45839__auto__ = (function (){try{while(true){
var result__45840__auto__ = switch__45837__auto__(state_66385);
if(cljs.core.keyword_identical_QMARK_(result__45840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45840__auto__;
}
break;
}
}catch (e66393){if((e66393 instanceof Object)){
var ex__45841__auto__ = e66393;
var statearr_66394_66425 = state_66385;
(statearr_66394_66425[(5)] = ex__45841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66427 = state_66385;
state_66385 = G__66427;
continue;
} else {
return ret_value__45839__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__45838__auto__ = function(state_66385){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__45838__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__45838__auto____1.call(this,state_66385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__45838__auto____0;
cljs_http$core$xhr_$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__45838__auto____1;
return cljs_http$core$xhr_$_state_machine__45838__auto__;
})()
})();
var state__45939__auto__ = (function (){var statearr_66395 = (f__45938__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45938__auto__.cljs$core$IFn$_invoke$arity$0() : f__45938__auto__.call(null));
(statearr_66395[(6)] = c__45937__auto___66420);

return statearr_66395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45939__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__66396){
var map__66397 = p__66396;
var map__66397__$1 = (((((!((map__66397 == null))))?(((((map__66397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66397):map__66397);
var request = map__66397__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66397__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66397__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66397__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66397__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_66429 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_66429], null));

if(cljs.core.truth_(cancel)){
var c__45937__auto___66434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45938__auto__ = (function (){var switch__45837__auto__ = (function (state_66403){
var state_val_66404 = (state_66403[(1)]);
if((state_val_66404 === (1))){
var state_66403__$1 = state_66403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66403__$1,(2),cancel);
} else {
if((state_val_66404 === (2))){
var inst_66400 = (state_66403[(2)]);
var inst_66401 = jsonp.cancel(req_66429);
var state_66403__$1 = (function (){var statearr_66405 = state_66403;
(statearr_66405[(7)] = inst_66400);

return statearr_66405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66403__$1,inst_66401);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__45838__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__45838__auto____0 = (function (){
var statearr_66406 = [null,null,null,null,null,null,null,null];
(statearr_66406[(0)] = cljs_http$core$jsonp_$_state_machine__45838__auto__);

(statearr_66406[(1)] = (1));

return statearr_66406;
});
var cljs_http$core$jsonp_$_state_machine__45838__auto____1 = (function (state_66403){
while(true){
var ret_value__45839__auto__ = (function (){try{while(true){
var result__45840__auto__ = switch__45837__auto__(state_66403);
if(cljs.core.keyword_identical_QMARK_(result__45840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45840__auto__;
}
break;
}
}catch (e66407){if((e66407 instanceof Object)){
var ex__45841__auto__ = e66407;
var statearr_66408_66435 = state_66403;
(statearr_66408_66435[(5)] = ex__45841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66436 = state_66403;
state_66403 = G__66436;
continue;
} else {
return ret_value__45839__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__45838__auto__ = function(state_66403){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__45838__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__45838__auto____1.call(this,state_66403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__45838__auto____0;
cljs_http$core$jsonp_$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__45838__auto____1;
return cljs_http$core$jsonp_$_state_machine__45838__auto__;
})()
})();
var state__45939__auto__ = (function (){var statearr_66409 = (f__45938__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45938__auto__.cljs$core$IFn$_invoke$arity$0() : f__45938__auto__.call(null));
(statearr_66409[(6)] = c__45937__auto___66434);

return statearr_66409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45939__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__66410){
var map__66411 = p__66410;
var map__66411__$1 = (((((!((map__66411 == null))))?(((((map__66411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66411):map__66411);
var request = map__66411__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66411__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
