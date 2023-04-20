/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CoverageFull } from './CoverageFull';
import type { DoiCounts } from './DoiCounts';
import type { Flags } from './Flags';
import type { MemberPrefix } from './MemberPrefix';
import type { MembersMessageMessageItemsBreakdowns } from './MembersMessageMessageItemsBreakdowns';
import type { MembersMessageMessageItemsCountsType } from './MembersMessageMessageItemsCountsType';
import type { MembersMessageMessageItemsCoverageType } from './MembersMessageMessageItemsCoverageType';

export type Member = {
    'last-status-check-time': number;
    'primary-name': string;
    counts: DoiCounts;
    breakdowns: MembersMessageMessageItemsBreakdowns;
    prefixes: Array<string>;
    coverage: CoverageFull;
    prefix: Array<MemberPrefix>;
    id: number;
    tokens: Array<string>;
    'counts-type': MembersMessageMessageItemsCountsType;
    'coverage-type': MembersMessageMessageItemsCoverageType;
    flags: Flags;
    location: string;
    names: Array<string>;
};

