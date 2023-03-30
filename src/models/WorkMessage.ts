/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Work } from './Work';

export type WorkMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Work;
};

