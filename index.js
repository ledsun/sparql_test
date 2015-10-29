import request from 'superagent'

request
  .get('http://rdf.pubannotation.org/sparql?query=select%20%3flabel%20where%20%7b%20%3chttp%3a%2f%2fwww4%2ewiwiss%2efu%2dberlin%2ede%2fdiseasome%2fresource%2fdiseases%2f74%3e%20rdfs%3alabel%20%3flabel%20%7d')
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(res.body, null, 2));
    }
  })
