/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Deposits } from './Deposits';

export type DepositsMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Deposits;
};

