/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Author } from './Author';
import type { Date } from './Date';
import type { DateParts } from './DateParts';
import type { Reference } from './Reference';
import type { WorkAssertion } from './WorkAssertion';
import type { WorkClinicalTrial } from './WorkClinicalTrial';
import type { WorkDomain } from './WorkDomain';
import type { WorkFreeToRead } from './WorkFreeToRead';
import type { WorkFunder } from './WorkFunder';
import type { WorkInstitution } from './WorkInstitution';
import type { WorkISSNType } from './WorkISSNType';
import type { WorkJournalIssue } from './WorkJournalIssue';
import type { WorkLicense } from './WorkLicense';
import type { WorkLink } from './WorkLink';
import type { WorkRelation } from './WorkRelation';
import type { WorkReview } from './WorkReview';
import type { WorkStandardsBody } from './WorkStandardsBody';
import type { WorkUpdate } from './WorkUpdate';

export type Work = {
    institution?: WorkInstitution;
    indexed: Date;
    posted?: DateParts;
    'publisher-location'?: string;
    'update-to'?: Array<WorkUpdate>;
    'standards-body'?: Array<WorkStandardsBody>;
    'edition-number'?: string;
    'group-title'?: Array<string>;
    'reference-count': number;
    publisher: string;
    issue?: string;
    'isbn-type'?: Array<WorkISSNType>;
    license?: Array<WorkLicense>;
    funder?: Array<WorkFunder>;
    'content-domain': WorkDomain;
    chair?: Array<Author>;
    'short-container-title'?: string;
    accepted?: DateParts;
    'content-updated'?: DateParts;
    'published-print'?: DateParts;
    abstract?: string;
    /**
     * The DOI identifier associated with the work
     */
    DOI: string;
    type: string;
    created: Date;
    approved?: DateParts;
    page?: string;
    'update-policy'?: string;
    source: string;
    'is-referenced-by-count': number;
    title: Array<string>;
    prefix: string;
    volume?: string;
    'clinical-trial-number'?: Array<WorkClinicalTrial>;
    author: Array<Author>;
    member: string;
    'content-created'?: DateParts;
    'published-online'?: DateParts;
    reference?: Reference;
    'container-title'?: Array<string>;
    review?: WorkReview;
    'original-title'?: Array<string>;
    language?: string;
    link?: Array<WorkLink>;
    deposited: Date;
    score: number;
    degree?: string;
    subtitle?: Array<string>;
    translator?: Array<Author>;
    'free-to-read'?: WorkFreeToRead;
    editor?: Array<Author>;
    'component-number'?: string;
    'short-title'?: Array<string>;
    issued: DateParts;
    ISBN?: Array<string>;
    'references-count': number;
    'part-number'?: string;
    'journal-issue'?: WorkJournalIssue;
    'alternative-id'?: Array<string>;
    URL: string;
    archive?: Array<string>;
    relation?: Record<string, WorkRelation>;
    ISSN?: Array<string>;
    'issn-type'?: Array<WorkISSNType>;
    subject?: Array<string>;
    'published-other'?: DateParts;
    published?: DateParts;
    assertion?: Array<WorkAssertion>;
    subtype?: string;
    'article-number'?: string;
};

