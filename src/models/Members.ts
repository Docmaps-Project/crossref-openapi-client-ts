/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Member } from './Member';
import type { Query } from './Query';

export type Members = {
    'items-per-page': number;
    query: Query;
    'total-results': number;
    items: Array<Member>;
};

