/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Member } from './Member';

export type MemberMessage = {
    status: string;
    'message-type': string;
    'message-version': string;
    message: Member;
};

