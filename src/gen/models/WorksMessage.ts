/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Works } from './Works';

export type WorksMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Works;
};

