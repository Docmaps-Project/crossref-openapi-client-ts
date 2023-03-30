/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepositMessage } from '../models/DepositMessage';
import type { DepositsMessage } from '../models/DepositsMessage';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DepositsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns information about a deposit.
     * @param id
     * @returns DepositMessage The deposit identified by {id}.
     * @throws ApiError
     */
    public getDeposits(
        id: string,
    ): CancelablePromise<DepositMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deposits/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The deposit identified by {id} does not exist.`,
            },
        });
    }

    /**
     * Returns a list of deposits.
     * ## Filters
     *
     * Filters allow you to select deposits based on specific criteria. All filter results are lists.
     *
     * ##
     *
     * Examples:
     *
     * ##
     * ```
     * /deposits?filter=from-submission-time:2020-06-01
     * ```
     * ##
     *
     * This endpoint supports the following filters:
     *
     * ##
     *
     * + `doi`
     * + `from-submission-time`
     * + `owner`
     * + `status`
     * + `test`
     * + `type`
     * + `until-submission-time`
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
     * @param filter Exposes the ability to filter by certain fields, supports a comma separated list of lucene filters, e.g. `content-domain:psychoceramics.labs.crossref.org`
     * @param query Exposes the ability to free text query certain fields
     * @param rows The number of rows per page
     * @param mailto The email address to identify yourself and be in the "polite pool"
     * @param offset The number of rows to skip before returning
     * @returns DepositsMessage A list of deposits
     * @throws ApiError
     */
    public getDeposits1(
        filter?: string,
        query?: string,
        rows?: number,
        mailto?: string,
        offset?: number,
    ): CancelablePromise<DepositsMessage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deposits',
            query: {
                'filter': filter,
                'query': query,
                'rows': rows,
                'mailto': mailto,
                'offset': offset,
            },
        });
    }

    /**
     * Deposit new content.
     * @param test Is the deposit for test purposes?
     * @returns DepositMessage The newly created deposit.
     * @throws ApiError
     */
    public postDeposits(
        test?: boolean,
    ): CancelablePromise<DepositMessage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deposits',
            query: {
                'test': test,
            },
            body: {},
        });
    }

}
