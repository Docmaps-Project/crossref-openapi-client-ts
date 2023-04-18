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
})

test('Integration test: /works?...', async (t) => {
  t.timeout(30000, 'These tests make actual API calls; crossref may be slow.')
  const MultiWorks = await CLIENT.works.getWorks1({
    rows: 2,
    order: 'asc',
    sort: 'created',
    filter: 'prefix:10.1101',
  })
  t.is(MultiWorks.status, 'ok')
  // TODO : include this response key in multi-works
  //    "items-per-page":2
  t.deepEqual(MultiWorks.message.items[0]?.title, ["Assembly, Annotation, and Integration of UNIGENE Clusters into the Human Genome Draft"])
  t.deepEqual(MultiWorks.message.items[1]?.title, ["INNER NO OUTER regulates abaxial- adaxial patterning in Arabidopsis ovules"])
})
