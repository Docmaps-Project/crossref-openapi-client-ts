/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorksMessageMessageItemsAssertionExplanation } from './WorksMessageMessageItemsAssertionExplanation';
import type { WorksMessageMessageItemsAssertionGroup } from './WorksMessageMessageItemsAssertionGroup';

export type WorkAssertion = {
    group: WorksMessageMessageItemsAssertionGroup;
    explanation: WorksMessageMessageItemsAssertionExplanation;
    name: string;
    value: string;
    URL: string;
    order: number;
};

