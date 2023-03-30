/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Funder } from './Funder';
import type { Query } from './Query';

export type Funders = {
    'items-per-page': number;
    query: Query;
    'total-results': number;
    items: Array<Funder>;
};

