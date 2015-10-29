import request from 'superagent'

const endpoint = 'http://rdf.pubannotation.org/sparql',
  url = 'http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseases/74'

let query = `select ?label where { <${url}>  rdfs:label ?label }`

request
  .get(`${endpoint}?query=${encodeURI(query)}`)
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(res.body, null, 2));
    }
  })
