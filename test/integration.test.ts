import test from 'ava'
import { CrossrefClient} from '../src'


// TODO: improve this API in the client
const CONTACT = 'docmaps@knowledgefutures.org'
const AGENT = 'CrossrefOpenapiClientTs/1.0'
const REPO = 'github.com/docmaps-project/crossref-openapi-client-ts'
const PLATFORM = 'AVAJS'

const CLIENT = new CrossrefClient({
  // TODO hardcode this by extracting a constructor
  BASE: 'https://api.crossref.org',
  HEADERS: {
    // to be polite; see https://api.crossref.org/swagger-ui/index.html#Etiquette
    "User-Agent": `${AGENT} (${REPO}; mailto:${CONTACT}) ${PLATFORM}`
  }
});

test('Integration test: /works/$doi', async (t) => {
  t.timeout(15000, 'These tests make actual API calls; crossref may be slow.')

  // https://api.crossref.org/works/10.3410/f.3011964.2691062
  const ExampleWork = await CLIENT.works.getWorks({doi: '10.3410/f.3011964.2691062'})
  t.is(ExampleWork.status, 'ok')
  t.is(ExampleWork.message.publisher, 'Faculty Opinions Ltd')
  t.deepEqual(ExampleWork.message.title, ["Faculty Opinions recommendation of Evaluation design of a systematic, selective, internet-based, Chlamydia screening implementation in the Netherlands, 2008-2010: implications of first results for the analysis."])
  t.deepEqual(ExampleWork.message.relation, {
    "is-review-of": [
      { "id-type":"doi",
        "id":"10.1186/1471-2334-10-89",
        "asserted-by":"subject"
      }
    ]
  })

  t.deepEqual(ExampleWork.message.created, {
    "date-parts":[[2012,8,21]],
    "date-time":"2012-08-21T06:46:54Z",
    "timestamp":1345531614000,
  })

  t.deepEqual(ExampleWork.message.published, {
    "date-parts":[[2010,4,22]],
  })
})

test('Integration test: /works?...', async (t) => {
  t.timeout(30000, 'These tests make actual API calls; crossref may be slow.')
  const MultiWorks = await CLIENT.works.getWorks1({
    rows: 2,
    offset: 1000,
    order: 'asc',
    sort: 'created',
    filter: 'prefix:10.21428', // PubPub DOI prefix
    // alternative prefix: 10.1162 for Rapid Review 19
  })
  t.is(MultiWorks.status, 'ok')
  // TODO : include this response key in multi-works
  //    "items-per-page":2
  t.deepEqual(MultiWorks.message.items[0]?.title, ["GroupMe to SecondLife"])
  t.deepEqual(MultiWorks.message.items[1]?.title, ["GroupMe - Analog Crime Problem"])
})
