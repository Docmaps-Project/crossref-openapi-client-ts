/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Deposit } from './Deposit';

export type DepositMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Deposit;
};

