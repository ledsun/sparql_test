# お題

SPAQLを使ってエンドポイトからURLのラベルを取得する

## エンドポイト情報
http://rdf.pubannotation.org/sparql

このendpointはVirtuosoを使っている

## テストデータ
### URL
```
http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseases/74
```

### SPARQL構文
```
select ?label where { ?r rdfs:label ?label }
```
?rにURLを入れる

### SPARQL例
```spaql
select ?label where { <http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/genes> rdfs:label ?label }
```

# 動かす
## Node.js
```
npm i
babel-node index.js
```

## ブラウザ
```
npm i
npm start
open index.html
```

# CURLサンプル
## GET
```
curl "http://rdf.pubannotation.org/sparql?query=select%20%3flabel%20where%20%7b%20%3chttp%3a%2f%2fwww4%2ewiwiss%2efu%2dberlin%2ede%2fdiseasome%2fresource%2fdiseases%2f74%3e%20rdfs%3alabel%20%3flabel%20%7d" -H "Accept:application/sparql-results+json"
```
クエリパラメーターのURLエンコードが必要

## POST
```
curl -F "query=select ?label where { <http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseases/74> rdfs:label ?label }" http://rdf.pubannotation.org/sparql -H "Accept:application/sparql-results+json"
```

# 結果サンプル
AcceptヘッダーにAccept:application/jsonかAccept:application/sparql-results+jsonをしていするとJSONが帰ってくる

## ラベルを取得できた時のレスポンス
```json
{
  "head": {
    "link": [],
    "vars": [
      "label"
    ]
  },
  "results": {
    "distinct": false,
    "ordered": true,
    "bindings": [
      {
        "label": {
          "type": "literal",
          "value": "Alzheimer disease"
        }
      }
    ]
  }
}
```

## ラベルを取得できなかった時のレスポンス
```json
{
  "head": {
    "link": [],
    "vars": [
      "label"
    ]
  },
  "results": {
    "distinct": false,
    "ordered": true,
    "bindings": []
  }
}
```

# 参考
- [SPARQL - Wikipedia](https://ja.wikipedia.org/wiki/SPARQL)
- [RDFストア環境構築(Virtuoso編)1 | 合同会社 緑ＩＴ事務所](http://midoriit.com/2014/04/rdf%E3%82%B9%E3%83%88%E3%82%A2%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89virtuoso%E7%B7%A81.html)
- [Getting started using Virtuoso as a triplestore - bobdc.blog](http://www.snee.com/bobdc.blog/2009/02/getting-started-using-virtuoso.html)
