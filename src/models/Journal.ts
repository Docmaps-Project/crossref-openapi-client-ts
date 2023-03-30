/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CoverageFull } from './CoverageFull';
import type { DoiCounts } from './DoiCounts';
import type { Flags } from './Flags';
import type { JournalIssnType } from './JournalIssnType';
import type { JournalsMessageMessageItemsBreakdowns } from './JournalsMessageMessageItemsBreakdowns';
import type { JournalsMessageMessageItemsCoverageType } from './JournalsMessageMessageItemsCoverageType';

export type Journal = {
    'last-status-check-time': number;
    counts: DoiCounts;
    breakdowns: JournalsMessageMessageItemsBreakdowns;
    /**
     * The publisher of the journal
     */
    publisher: string;
    coverage: CoverageFull;
    /**
     * The title of the journal
     */
    title: string;
    subjects: Array<string>;
    'coverage-type': JournalsMessageMessageItemsCoverageType;
    flags: Flags;
    /**
     * The ISSN identifier associated with the journal
     */
    ISSN: Array<string>;
    'issn-type': JournalIssnType;
};

