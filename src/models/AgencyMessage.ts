/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DoiAgency } from './DoiAgency';

export type AgencyMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: DoiAgency;
};

