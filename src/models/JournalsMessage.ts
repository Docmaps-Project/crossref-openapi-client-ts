/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Journals } from './Journals';

export type JournalsMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Journals;
};

