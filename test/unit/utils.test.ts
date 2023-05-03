import test from 'ava'
import * as U from '../../src/utils'

const CONSISTENT_DATE: U.Datemorph = {
  'date-parts': [[2021, 1, 21]],
  'date-time': '2021-01-21T04:58:23Z',
  timestamp: 1611205103000,
}

// three date fields that disagree, for testing priority and failure modes
const INCONSISTENT_DATE: U.Datemorph = {
  'date-parts': [[2000, 1, 21]],
  'date-time': '2011-01-21T04:58:23Z',
  timestamp: 1611205103000,
}

test('date utilities: DateParts only', async (t) => {
  const result = U.DatemorphISOString({ 'date-parts': CONSISTENT_DATE['date-parts'] })
  t.is(result, '2021-01-21T00:00:00.000Z')
})

test('date utilities: DateParts only with only year and month', async (t) => {
  const result = U.DatemorphISOString({ 'date-parts': [CONSISTENT_DATE['date-parts'][0].slice(0,1)] })
  t.is(result, '2021-01-01T00:00:00.000Z')
})

test('date utilities: Inconsistent date, strict', async (t) => {
  t.throws(() => {
    U.DatemorphISOString(INCONSISTENT_DATE)
  })
})

test('date utilities: Inconsistent date, optimistic', async (t) => {
  const result = U.DatemorphISOString(INCONSISTENT_DATE, { strict: false })
  t.is(result, '2011-01-21T04:58:23Z')
})

test('date utilities: Full, consistent date', async (t) => {
  const result = U.DatemorphISOString(CONSISTENT_DATE)
  t.is(result, '2021-01-21T04:58:23Z')
})
