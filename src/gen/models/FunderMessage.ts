/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FunderFull } from './FunderFull';

export type FunderMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: FunderFull;
};

