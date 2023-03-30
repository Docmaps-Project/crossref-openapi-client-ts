/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Journal } from './Journal';
import type { Query } from './Query';

export type Journals = {
    'items-per-page': number;
    query: Query;
    'total-results': number;
    items: Array<Journal>;
};

