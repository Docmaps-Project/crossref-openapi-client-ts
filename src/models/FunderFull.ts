/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FunderHierarchy } from './FunderHierarchy';
import type { FunderMessageMessageHierarchyNames } from './FunderMessageMessageHierarchyNames';

export type FunderFull = {
    'hierarchy-names': FunderMessageMessageHierarchyNames;
    'replaced-by': Array<string>;
    'work-count': number;
    name: string;
    descendants: Array<string>;
    'descendant-work-count': number;
    /**
     * The id of the funder
     */
    id: string;
    tokens: Array<string>;
    replaces: Array<string>;
    uri: string;
    hierarchy: FunderHierarchy;
    /**
     * Other names this funder may be identified with
     */
    'alt-names': Array<string>;
    /**
     * The geographic location of the funder
     */
    location: string;
};

