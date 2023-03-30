/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Affiliation } from './Affiliation';

export type Author = {
    ORCID?: string;
    suffix?: string;
    given?: string;
    family: string;
    affiliation: Array<Affiliation>;
    name?: string;
    'authenticated-orcid'?: boolean;
    prefix?: string;
    sequence: string;
};

