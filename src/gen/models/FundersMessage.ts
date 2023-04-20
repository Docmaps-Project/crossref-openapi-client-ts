/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Funders } from './Funders';

export type FundersMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Funders;
};

