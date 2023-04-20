/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Query } from './Query';
import type { Type } from './Type';

export type Types = {
    'items-per-page': number;
    query: Query;
    'total-results': number;
    items: Array<Type>;
};

