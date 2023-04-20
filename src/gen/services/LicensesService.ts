/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicensesMessage } from '../models/LicensesMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LicensesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns a list of licenses.
     * ## Querying
     *
     * This endpoint accepts `query` parameter, which allows for free text querying. The result contains aggregated licenses from the works that match given query.
     *
     * ##
     *
     * For example, this request:
     *
     * ##
     *
     * ```
     * /licenses?query=richard+feynman
     * ```
     *
     * ##
     *
     * will first select works matching `richard+feynman`, and aggregate their licenses.
     *
     * ## Pagination with offsets
     *
     * Offsets are an easy way to iterate over results sets up to 10,000 items. This limit applies to the sum of values of parameters `offset` + `rows`.
     *
     * ##
     *
     * The number of items returned in a single response is controlled by `rows` parameter (default is 20, and maximum is 1,000). To limit results to 5, for example, you could do the following:
     *
     * ##
     *
     * ```
     * /works?query=allen+renear&rows=5
     * ```
     *
     * ##
     *
     * `offset` parameter can be used to retrieve items starting from a specific index of the result list. For example, to select the second set of 5 results (i.e. results 6 through 10), you would do the following:
     *
     * ##
     *
     * ```
     * /works?query=allen+renear&rows=5&offset=5
     * ```
     *
     * ##
     *
     * ## Deep paging
     *
     * Deep paging using cursors can be used to iterate over large result sets, without any limits on their size.
     *
     * ##
     *
     * To use deep paging make a query as normal, but include the `cursor` parameter with a value of `*`, for example:
     *
     * ##
     *
     * ```
     * /members/311/works?filter=type:journal-article&cursor=*
     * ```
     *
     * ##
     *
     * A `next-cursor` field will be provided in the JSON response. To get the next page of results, pass the value of `next-cursor` as the cursor parameter (remember to URL-encode). For example:
     *
     * ##
     *
     * ```
     * /members/311/works?filter=type:journal-article&cursor=<value of next-cursor parameter>
     * ```
     *
     * ##
     *
     * Clients should check the number of returned items. If the number of returned items is equal to the number of expected rows then the end of the result set has been reached. Using next-cursor beyond this point will result in responses with an empty items list.
     *
     * ##
     *
     * @returns LicensesMessage A list of licenses
     * @throws ApiError
     */
    public getLicenses({
        query,
        cursor,
        rows,
        mailto,
        offset,
    }: {
        /**
         * Exposes the ability to free text query certain fields
         */
        query?: string,
        /**
         * Exposes the ability to deep page through large result sets, where offset would cause performance problems
         */
        cursor?: string,
        /**
         * The number of rows per page
         */
        rows?: number,
        /**
         * The email address to identify yourself and be in the "polite pool"
         */
        mailto?: string,
        /**
         * The number of rows to skip before returning
         */
        offset?: number,
    }): CancelablePromise<LicensesMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/licenses',
            query: {
                'query': query,
                'cursor': cursor,
                'rows': rows,
                'mailto': mailto,
                'offset': offset,
            },
        });
    }

}
