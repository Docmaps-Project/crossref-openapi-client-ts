/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Journal } from './Journal';

export type JournalMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Journal;
};

