/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Type } from './Type';

export type TypeMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Type;
};

