/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MemberMessageMessageCountsTypeAll } from './MemberMessageMessageCountsTypeAll';
import type { MemberMessageMessageCountsTypeBackfile } from './MemberMessageMessageCountsTypeBackfile';
import type { MemberMessageMessageCountsTypeCurrent } from './MemberMessageMessageCountsTypeCurrent';

export type MemberMessageMessageCountsType = {
    all: MemberMessageMessageCountsTypeAll;
    current: MemberMessageMessageCountsTypeCurrent;
    backfile: MemberMessageMessageCountsTypeBackfile;
};

