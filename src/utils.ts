import { Date as GDate, DateParts } from './gen'

/**
 * Known representations of dates in Crossref. Possibly more representations
 * will be discovered later.
 */
export type Datemorph = GDate | DateParts

/**
 * Options when parsing complex Crossref date-types.
 *
 * @property {boolean} strict   - If set, fail when the date type is internally inconsistent.
 */
export type DateParseOpts = {
  strict: boolean
}

const DefaultOpts: DateParseOpts = {
  strict: true
}

/**
 * Convert any allowed Crossref date type into an ISO String.
 *
 * @param {Datemorph}     d       - the date to parse and convert
 * @param {DateParseOpts} opts    - parsing options
 */
export function DatemorphISOString(d: Datemorph, opts: DateParseOpts = DefaultOpts): string {
  const strict = opts.strict

  const candidates: Date[] = []

  const knownStr = d['date-time']
  if (knownStr) {
    const date = new Date(knownStr)
    if (strict && !date) {
      throw new Error("Unable to parse: malformed date-time and strict enabled")
    }
    candidates.push(date)
  }

  const knownVal = d['timestamp']
  if (knownVal) {
    const date = new Date(knownVal)
    if (strict) {
      if (!date) {
        // I  believe this is only possible if `"timestamp":null` explicitly
        throw new Error("Unable to parse: malformed timestamp and strict enabled")
      }
      if (candidates[0] && date.valueOf() != candidates[0].valueOf()) {
        throw new Error("Unable to parse: timestamp does not match date-time and strict enabled")
      }
    }

    candidates.push(date)
  }

  const date = DateZFromDateParts({'date-parts': d['date-parts']}, opts)
  for (const c in candidates) {
    if (strict && !DateCompareTriple(candidates[c], date)) {
        throw new Error("Unable to parse: date-parts does not match and strict enabled")
    }
  }
  candidates.push(date)

  if (knownStr) {
    return knownStr
  }
  return candidates[0].toISOString()
}

/**
 * Creates a native Date object at time 00:00:00.000Z with given DateParts
 *
 * @param {DateParts}     d       - the date to parse and convert
 * @param {DateParseOpts} opts    - parsing options
 */
export function DateZFromDateParts(d: DateParts, opts: DateParseOpts = DefaultOpts): Date {
  const p = d['date-parts']
  if (p.length == 0) {
    throw new Error("Malformed DateParts: No parts found in DateParts")
  }

  if (p.length > 1 && opts.strict) {
    throw new Error("Malformed DateParts: Multiple DateParts possibilities found")
  }

  const best = p[0]
  if (best.length != 3) {
    throw new Error("Malformed DateParts: Must have exactly year, month, and day")
  }

  const yr=best[0]
  const moIdx=best[1]-1
  const day=best[2]

  return new Date(Date.UTC(yr, moIdx, day))
}

/**
 * Compare two dates only by year, month, and day-of-month
 *
 * @param {Date}  d1  - first date
 * @param {Date}  d2  - second date
 *
 * @returns {boolean} if the two dates agree on the DateParts alone
 */
export function DateCompareTriple(d1: Date, d2: Date) {
  return (
    d1.getUTCFullYear() == d2.getUTCFullYear() &&
    d1.getUTCMonth() == d2.getUTCMonth() &&
    d1.getUTCDate() == d2.getUTCDate()
  )
}
