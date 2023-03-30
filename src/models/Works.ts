/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Query } from './Query';
import type { Work } from './Work';

export type Works = {
    'items-per-page': number;
    query: Query;
    'total-results': number;
    /**
     * Used to navigate to the next page of results when using cursor deep paging
     */
    'next-cursor'?: string;
    items: Array<Work>;
};

