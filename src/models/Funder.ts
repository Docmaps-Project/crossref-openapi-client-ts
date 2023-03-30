/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Funder = {
    /**
     * The id of the funder
     */
    id: string;
    /**
     * The geographic location of the funder
     */
    location: string;
    name: string;
    /**
     * Other names this funder may be identified with
     */
    'alt-names': Array<string>;
    uri: string;
    replaces: Array<string>;
    'replaced-by': Array<string>;
    tokens: Array<string>;
};

