/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Prefix } from './Prefix';

export type PrefixMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Prefix;
};

