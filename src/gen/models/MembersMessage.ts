/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Members } from './Members';

export type MembersMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Members;
};

