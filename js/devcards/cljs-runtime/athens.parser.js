goog.provide('athens.parser');
goog.require('cljs.core');
goog.require('instaparse.core');
athens.parser.block_parser = instaparse.core.map__GT_Parser(instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"url-link-url-parts","url-link-url-parts",-2147102656),new cljs.core.Keyword(null,"url-link-url-part","url-link-url-part",1855236896),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"backslash-escaped-paren","backslash-escaped-paren",985643170),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"url-image","url-image",535142411),new cljs.core.Keyword(null,"backslash-escaped-right-bracket","backslash-escaped-right-bracket",768120908),new cljs.core.Keyword(null,"url-link-text","url-link-text",817616429),new cljs.core.Keyword(null,"url-link-url","url-link-url",-1479971123),new cljs.core.Keyword(null,"any-chars","any-chars",1675129711),new cljs.core.Keyword(null,"page-link","page-link",-169621200),new cljs.core.Keyword(null,"any-char","any-char",283527091),new cljs.core.Keyword(null,"url-link-text-contents","url-link-text-contents",1624765749),new cljs.core.Keyword(null,"syntax-in-block","syntax-in-block",-2137145448),new cljs.core.Keyword(null,"hashtag-bare","hashtag-bare",433895900),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"hashtag-delimited","hashtag-delimited",-2108270243),new cljs.core.Keyword(null,"url-link","url-link",1615670141)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-url-part","url-link-url-part",1855236896)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"url-link-url-parts","url-link-url-parts",-2147102656)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"backslash-escaped-paren","backslash-escaped-paren",985643170)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"("], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-url-part","url-link-url-part",1855236896)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),")"], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null))], null),new cljs.core.Keyword(null,"parser2","parser2",1013754688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-char","any-char",283527091)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"**",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-chars","any-chars",1675129711)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"**",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"\\",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"("], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),")"], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-in-block","syntax-in-block",-2137145448)], null),new cljs.core.Keyword(null,"parser2","parser2",1013754688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-char","any-char",283527091)], null)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"block","block",664686210)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"!",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-text","url-link-text",817616429)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-url","url-link-url",-1479971123)], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"url-image","url-image",535142411)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"\\",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"]"], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"[",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-text-contents","url-link-text-contents",1624765749)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"]",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"(",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-url-parts","url-link-url-parts",-2147102656)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),")",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-char","any-char",283527091)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"any-chars","any-chars",1675129711)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"[[",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-chars","any-chars",1675129711)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"]]",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"page-link","page-link",-169621200)], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\w|\\W"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"backslash-escaped-right-bracket","backslash-escaped-right-bracket",768120908)], null),null,(1),null)),(2),null))], null),new cljs.core.Keyword(null,"parser2","parser2",1013754688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any-char","any-char",283527091)], null)], null),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"url-link-text-contents","url-link-text-contents",1624765749)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"page-link","page-link",-169621200)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"block-ref","block-ref",362929756)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-image","url-image",535142411)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link","url-link",1615670141)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"#",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\p{L}\\p{M}\\p{N}_]+"),cljs.core.PersistentArrayMap.EMPTY], 0)),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"((",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[a-zA-Z0-9_\\-]+"),cljs.core.PersistentArrayMap.EMPTY], 0)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"))",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"block-ref","block-ref",362929756)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hashtag-bare","hashtag-bare",433895900)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"hashtag-delimited","hashtag-delimited",-2108270243)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"#",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"[[",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[^\\]]+"),cljs.core.PersistentArrayMap.EMPTY], 0)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),"]]",new cljs.core.Keyword(null,"hide","hide",-596913169),true], null),null,(1),null)),(2),null)),(3),null)),(4),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-text","url-link-text",817616429)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"url-link-url","url-link-url",-1479971123)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"url-link","url-link",1615670141)], null)], null)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"block","block",664686210)], 0)));
/**
 * In a sequence of strings mixed with other values, returns the same sequence with adjacent strings concatenated.
 * (If the sequence contains only strings, use clojure.string/join instead.)
 */
athens.parser.combine_adjacent_strings = (function athens$parser$combine_adjacent_strings(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (elements_so_far,elmt){
if(((typeof elmt === 'string') && (typeof cljs.core.peek(elements_so_far) === 'string'))){
var previous_elements = cljs.core.pop(elements_so_far);
var combined_last_string = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(elements_so_far)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(elmt)].join('');
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(previous_elements,combined_last_string);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elements_so_far,elmt);
}
}),cljs.core.PersistentVector.EMPTY,coll);
});
/**
 * Transforms the Instaparse output tree to an abstract syntax tree for Athens markup.
 */
athens.parser.transform_to_ast = (function athens$parser$transform_to_ast(tree){
var G__79965 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block","block",664686210),(function() { 
var G__79989__delegate = function (raw_contents){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null),athens.parser.combine_adjacent_strings(raw_contents));
};
var G__79989 = function (var_args){
var raw_contents = null;
if (arguments.length > 0) {
var G__79990__i = 0, G__79990__a = new Array(arguments.length -  0);
while (G__79990__i < G__79990__a.length) {G__79990__a[G__79990__i] = arguments[G__79990__i + 0]; ++G__79990__i;}
  raw_contents = new cljs.core.IndexedSeq(G__79990__a,0,null);
} 
return G__79989__delegate.call(this,raw_contents);};
G__79989.cljs$lang$maxFixedArity = 0;
G__79989.cljs$lang$applyTo = (function (arglist__79991){
var raw_contents = cljs.core.seq(arglist__79991);
return G__79989__delegate(raw_contents);
});
G__79989.cljs$core$IFn$_invoke$arity$variadic = G__79989__delegate;
return G__79989;
})()
,new cljs.core.Keyword(null,"url-image","url-image",535142411),(function (p__79967,url){
var vec__79968 = p__79967;
var text_contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79968,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-image","url-image",535142411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"alt","alt",-3214426),text_contents], null)], null));
}),new cljs.core.Keyword(null,"url-link","url-link",1615670141),(function (text_contents,url){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-link","url-link",1615670141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null)], null),text_contents);
}),new cljs.core.Keyword(null,"url-link-text-contents","url-link-text-contents",1624765749),(function() { 
var G__79992__delegate = function (raw_contents){
return athens.parser.combine_adjacent_strings(raw_contents);
};
var G__79992 = function (var_args){
var raw_contents = null;
if (arguments.length > 0) {
var G__79993__i = 0, G__79993__a = new Array(arguments.length -  0);
while (G__79993__i < G__79993__a.length) {G__79993__a[G__79993__i] = arguments[G__79993__i + 0]; ++G__79993__i;}
  raw_contents = new cljs.core.IndexedSeq(G__79993__a,0,null);
} 
return G__79992__delegate.call(this,raw_contents);};
G__79992.cljs$lang$maxFixedArity = 0;
G__79992.cljs$lang$applyTo = (function (arglist__79994){
var raw_contents = cljs.core.seq(arglist__79994);
return G__79992__delegate(raw_contents);
});
G__79992.cljs$core$IFn$_invoke$arity$variadic = G__79992__delegate;
return G__79992;
})()
,new cljs.core.Keyword(null,"url-link-url-parts","url-link-url-parts",-2147102656),(function() { 
var G__79995__delegate = function (chars){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(chars);
};
var G__79995 = function (var_args){
var chars = null;
if (arguments.length > 0) {
var G__79996__i = 0, G__79996__a = new Array(arguments.length -  0);
while (G__79996__i < G__79996__a.length) {G__79996__a[G__79996__i] = arguments[G__79996__i + 0]; ++G__79996__i;}
  chars = new cljs.core.IndexedSeq(G__79996__a,0,null);
} 
return G__79995__delegate.call(this,chars);};
G__79995.cljs$lang$maxFixedArity = 0;
G__79995.cljs$lang$applyTo = (function (arglist__79997){
var chars = cljs.core.seq(arglist__79997);
return G__79995__delegate(chars);
});
G__79995.cljs$core$IFn$_invoke$arity$variadic = G__79995__delegate;
return G__79995;
})()
,new cljs.core.Keyword(null,"any-chars","any-chars",1675129711),(function() { 
var G__79998__delegate = function (chars){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(chars);
};
var G__79998 = function (var_args){
var chars = null;
if (arguments.length > 0) {
var G__79999__i = 0, G__79999__a = new Array(arguments.length -  0);
while (G__79999__i < G__79999__a.length) {G__79999__a[G__79999__i] = arguments[G__79999__i + 0]; ++G__79999__i;}
  chars = new cljs.core.IndexedSeq(G__79999__a,0,null);
} 
return G__79998__delegate.call(this,chars);};
G__79998.cljs$lang$maxFixedArity = 0;
G__79998.cljs$lang$applyTo = (function (arglist__80000){
var chars = cljs.core.seq(arglist__80000);
return G__79998__delegate(chars);
});
G__79998.cljs$core$IFn$_invoke$arity$variadic = G__79998__delegate;
return G__79998;
})()
], null);
var G__79966 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__79965,G__79966) : instaparse.core.transform.call(null,G__79965,G__79966));
});
/**
 * Converts a string of block syntax to an abstract syntax tree for Athens markup.
 */
athens.parser.parse_to_ast = (function athens$parser$parse_to_ast(string){
return athens.parser.transform_to_ast((athens.parser.block_parser.cljs$core$IFn$_invoke$arity$1 ? athens.parser.block_parser.cljs$core$IFn$_invoke$arity$1(string) : athens.parser.block_parser.call(null,string)));
});

//# sourceMappingURL=athens.parser.js.map
