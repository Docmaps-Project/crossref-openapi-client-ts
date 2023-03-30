/**
 * Crossref Unified Resource API
 * ## Preamble  The Crossref REST API is one of [a variety of tools and APIs](https://www.crossref.org/services/metadata-retrieval/) that allow anybody to search and reuse our members\' metadata in sophisticated ways.  If you read nothing else, please at least look at the [API TIPs](https://crossref.org/documentation/retrieve-metadata/rest-api/tips-for-using-the-crossref-rest-api/) document and the \"Etiquette\" section of this document. It will save you (and us) much heartburn.  ## Meta  ### Frequency of indexing  Records typically appear in the REST API within 20 minutes of their having been successfully deposited with Crossref.  Summary information (e.g. counts, etc.) are processed in batch every 24 hours.  ### Learning about performance or availability problems  We record and report service issues on our [status page](http://status.crossref.org).  You might want to check this to see if we are already aware of a problem before you report it.  We also post notice of any ongoing performance problems with our services on our twitter feeds at [CrossrefOrg](https://twitter.com/CrossrefOrg) and [CrossrefSupport](https://twitter.com/@CrossrefSupport).  ### Reporting performance or availability problems  Report performance/availability at our [support site](https://www.crossref.org/contact/).  ### Reporting bugs, requesting features  Please report bugs with the API or the documentation on our [issue tracker](https://gitlab.com/crossref/issues).  ### Documentation License  <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://i.creativecommons.org/l/by/4.0/88x31.png\" /></a><br />This work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\">Creative Commons Attribution 4.0 International License</a>.  ### Metadata License  Crossref asserts no claims of ownership to individual items of bibliographic metadata and associated Digital Object Identifiers (DOIs) acquired through the use of the Crossref Free Services. Individual items of bibliographic metadata and associated DOIs may be cached and incorporated into the user\'s content and systems.  ### Privacy  We also have a [privacy policy](https://www.crossref.org/privacy/).  ### Libraries  You might be able to get to a quick start with this API if you instead use one of the several libraries that have been written for the Crossref REST API. For example:   - [crossref-commons](https://gitlab.com/crossref/crossref_commons_py) (Python, developed by Crossref) - [habanero](https://github.com/sckott/habanero) (Python) - [serrano](https://github.com/sckott/serrano) (Ruby) - [rcrossref](https://github.com/ropensci/rcrossref) (R) - [crossrefapi](https://github.com/fabiobatalha/crossrefapi) (Python) - [crossref-rs](https://github.com/MattsSe/crossref-rs) (rust) - [pitaya](https://github.com/naustica/Pitaya) (Julia) - [Crossref API Typescript client](https://www.npmjs.com/package/@jamesgopsill/crossref-client) (Typescript)  The above libraries are not necessarily maintained nor endorsed by Crossref. If you know of another library you would like to see listed here, please let us know by contacting us at [support@crossref.org](mailto:support@crossref.org).  ### Etiquette  We want to provide a public, open, and free API for all. And we don\'t want to unnecessarily burden developers (or ourselves) with cumbersome API tokens or registration processes in order to use the public REST API. For that to work, we ask that you be polite and try not to do anything that will take the public REST API down or otherwise make it unusable for others. Specifically, we encourage the following polite behaviour:  - Cache data so you don\'t request the same data over and over again. - Actively monitor API response times. If they start to go up, back-off for a while. For example, add pauses between requests and/or reduce the number of parallel requests. - Specify a `User-Agent` header that properly identifies your script or tool and that provides a means of contacting you via email using \"mailto:\". For example: `GroovyBib/1.1 (https://example.org/GroovyBib/; mailto:GroovyBib@example.org) BasedOnFunkyLib/1.4`. This way we can contact you if we see a problem. - report problems and/or ask questions on our [issue tracker](https://gitlab.com/crossref/issues).  Alas, not all people are polite. And for this reason we reserve the right to impose rate limits and/or to block clients that are disrupting the public service.  ### Good manners = more reliable service  But we prefer carrots to sticks. As of September 18th 2017 any API queries that **use HTTPS and have appropriate contact information** will be directed to a special pool of API machines that are reserved for polite users.  Why are we doing this? Well- we don\'t want to force users to have to register with us. But this means that if some user of the public server writes a buggy script or ignores timeouts and errors- they can really bring the API service to its knees. What\'s more, it is very hard for us to identify these problem users because they tend to work off multiple parallel machines and use generic User-Agent headers. They are effectively anonymous. We\'re starting to have to spend a lot of time dealing with these problems and the degraded performance of the public API is affecting all the polite users as well.  So... we are keeping the public service as is. It will probably continue to fluctuate widely in performance. But now, if a client connects to the API using HTTPS and provides contact information either in their User-Agent header or as a parameter on their queries, then we will send them to a separate pool of machines. We expect to be able to better control the performance of these machines because, if a script starts causing problems, we can contact the people responsible for the script to ask them to fix it. Or, in extremis, we can block it.  How does it work? Simple. You can do one of two things to get directed to the \"polite pool\":  1) Include a \"mailto\" parameter in your query. For example: `https://api.crossref.org/works?filter=has-full-text:true&mailto=GroovyBib@example.org` 2) Include a \"mailto:\" in your User-Agent header. For example: `GroovyBib/1.1 (https://example.org/GroovyBib/; mailto:GroovyBib@example.org) BasedOnFunkyLib/1.4`.  Note that this only works if you query the API using HTTPS. You really should be doing that anyway (wags finger).  #### Frequently anticipated questions  **Q:** Will you spam me with marketing [bumf](https://en.oxforddictionaries.com/definition/bumf) once you have our contact info?  **A:** No. We will only use it to contact you about problems with your scripts.   **Q:** Is this a secret plot to kill public access to your API?  **A:** No. It is an attempt to keep the public API reliable.   **Q:** What if I provide fake or incorrect contact info?  **A:** That is not very polite. If there is a problem and you don\'t respond, we\'ll block you.   **Q:** Does the contact info have to be a real name?  **A:** No. As long as somebody actually receives and pays attention to email at the address, it can be pseudo-anonymous, or whatever.   **Q:** How can I make sure that I am using the right pool?  **A:** Every API response contains an `x-api-pool` HTTP header indicating the pool that was used to generate the response.  #### Rate limits  From time to time Crossref needs to impose rate limits to ensure that the free API is usable by all. Any rate limits that are in effect will be advertised in the `X-Rate-Limit-Limit` and `X-Rate-Limit-Interval` HTTP headers.  For ease-of-parsing, the `X-Rate-Limit-Interval` will always be expressed in seconds. So, for example the following tells you that you should expect to be able to perform 50 requests a second:  ``` X-Rate-Limit-Limit: 50 X-Rate-Limit-Interval: 1s ```  Note that if we wanted to adjust the measurement window, we could specify:  ``` X-Rate-Limit-Limit: 3000 X-Rate-Limit-Interval: 60s ```  #### Blocking  This is always our last resort, and you can generally avoid it if you include contact information in the `User-Agent` header or `mailto` parameter as described above.  But seriously... this is a bummer. We really want you to use the API. If you are polite about it, you shouldn\'t have any problems.  ### Use for production services  What if you want to use our API for a production service that cannot depend on the performance uncertainties of the free and open public API? What if you don\'t want to be affected by impolite people who do not follow the API Etiquette guidelines? Well, if you’re interested in using these tools or APIs for production services, we [have a service-level offering](https://www.crossref.org/services/metadata-retrieval/metadata-plus/) called \"Plus\". This service provides you with access to all supported APIs and metadata, but with extra service and support guarantees.  #### Authorization token for Plus service  When you sign up for the Plus service, you will be issued an API token that you should put in the `Authorization` header of all your rest API requests. This token will ensure that said requests get directed to a pool of machines that are reserved for \"Plus\" SLA users. For example, with [curl](https://curl.haxx.se/):  ``` curl -X GET \\   https://api.crossref.org/works \\   -H \'Crossref-Plus-API-Token: Bearer yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vY3Jvc3NyZWYub3JnLyIsImF1ZXYZImVuaGFuY2VkY21zIiwianRpIjoiN0M5ODlFNTItMTFEQS00QkY3LUJCRUUtODFCMUM3QzE0OTZEIn0.NYe3-O066sce9R1fjMzNEvP88VqSEaYdBY622FDiG8Uq\' \\   -H \'User-Agent: GroovyBib/1.1 (https://example.org/GroovyBib/; mailto:GroovyBib@example.org) BasedOnFunkyLib/1.4\' ```  Note that you can still be \"polite\" and identify yourself as well. And, of course, replace the fake token above with the real token.  ## API overview  The API is generally RESTFUL and returns results in JSON.  The API supports HTTP and HTTPS. Examples here are provided using HTTPS.  You should always url-encode DOIs and parameter values when using the API. DOIs are notorious for including characters that break URLs (e.g. semicolons, hashes, slashes, ampersands, question marks, etc.).  Note url-encoding applies to cursors as well since they too are likely to include characters that will break URLs (e.g. `+` symbol)  Note that, for the sake of clarity, the examples in this document do *not* url-encode DOIs or parameter values.  The API will only work for Crossref DOIs. You can test the registration agency for a DOI using the following route:  `https://api.crossref.org/works/{doi}/agency`  Testing the following Crossref DOI:  `10.1037/0003-066X.59.1.29`  Using the URL:  `https://api.crossref.org/works/10.1037/0003-066X.59.1.29/agency`  Will return the following result:      {       status: \"ok\",       message-type: \"work-agency\",       message-version: \"1.0.0\",       message: {         DOI: \"10.1037/0003-066x.59.1.29\",         agency: {           id: \"crossref\",           label: \"Crossref\"         }       }     }  If you use any of the API calls listed below with a non-Crossref DOI, you will get a `404` HTTP status response. Typical agency IDs include `crossref`, `datacite`, `medra` and also `public` for test DOIs.  ## Result types  All results are returned in JSON. There are three general types of results:  - Singletons - Headers-only - Lists  The mime-type for API results is `application/vnd.crossref-api-message+json`  ### Singletons  Singletons are single results. Retrieving metadata for a specific identifier (e.g. DOI, ISSN, funder identifier) typically returns a singleton result.  ### Headers only  You can use HTTP HEAD requests to quickly determine \"existence\" of a singleton. The advantage of this technique is that it is very fast because it does not return any metadata- it only returns headers and an HTTP status code (200=exists, 404=does not exist).  To determine if member ID `98` exists:  `curl --head \"http://api.crossref.org/members/98\"`  To determine if a journal with ISSN `1549-7712` exists:  `curl --head \"http://api.crossref.org/journals/1549-7712\"`  ### Lists  Lists results can contain multiple entries. Searching or filtering typically returns a list result. A list has two parts:  - Summary, which include the following information:      - status (e.g. \"ok\", error)     - message-type (e.g. \"work-list\" )     - message-version (e.g. 1.0.0 )  - Items, which will contain the items matching the query or filter.  Note that the \"message-type\" returned will differ from the mime-type:  - funder (singleton) - prefix (singleton) - member (singleton) - work (singleton) - work-list (list) - funder-list (list) - prefix-list (list) - member-list (list)  Normally, an API list result will return both the summary and the items. If you want to just retrieve the summary, you can do so by specifying that the number of rows returned should be zero.  #### Sort order  If the API call includes a query, then the sort order will be by the relevance score. If no query is included, then the sort order will be by DOI update date.  The API allows also for custom sorting. See the documentation for each endpoint to find the list of elements that you can sort by.  #### Pagination  Large result sets can be traversed one of two ways: offsets or deep paging with cursor. Offsets are available on all `list` endpoints. Offsets are easier to use, but can be slow for larger sets, and the total number of results available through offsets is limited. Deep paging is available on selected endpoints, has better performance for large data sets, and there is no limit on total number of available results.  See the documentation for each endpoint for available paging options. 
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@crossref.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { LicensesMessage } from '../model/licensesMessage';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum LicensesApiApiKeys {
}

export class LicensesApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: LicensesApiApiKeys, value: string) {
        (this.authentications as any)[LicensesApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of licenses. ## Querying  This endpoint accepts `query` parameter, which allows for free text querying. The result contains aggregated licenses from the works that match given query.  ##  For example, this request:  ##  ``` /licenses?query=richard+feynman ```  ##  will first select works matching `richard+feynman`, and aggregate their licenses.  ## Pagination with offsets  Offsets are an easy way to iterate over results sets up to 10,000 items. This limit applies to the sum of values of parameters `offset` + `rows`.  ##  The number of items returned in a single response is controlled by `rows` parameter (default is 20, and maximum is 1,000). To limit results to 5, for example, you could do the following:  ##  ``` /works?query=allen+renear&rows=5 ```  ##  `offset` parameter can be used to retrieve items starting from a specific index of the result list. For example, to select the second set of 5 results (i.e. results 6 through 10), you would do the following:  ##  ``` /works?query=allen+renear&rows=5&offset=5 ```  ##  ## Deep paging  Deep paging using cursors can be used to iterate over large result sets, without any limits on their size.  ##  To use deep paging make a query as normal, but include the `cursor` parameter with a value of `*`, for example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=* ```  ##  A `next-cursor` field will be provided in the JSON response. To get the next page of results, pass the value of `next-cursor` as the cursor parameter (remember to URL-encode). For example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=<value of next-cursor parameter> ```  ##  Clients should check the number of returned items. If the number of returned items is equal to the number of expected rows then the end of the result set has been reached. Using next-cursor beyond this point will result in responses with an empty items list.  ## 
     * @param query Exposes the ability to free text query certain fields
     * @param cursor Exposes the ability to deep page through large result sets, where offset would cause performance problems
     * @param rows The number of rows per page
     * @param mailto The email address to identify yourself and be in the \&quot;polite pool\&quot;
     * @param offset The number of rows to skip before returning
     */
    public async licensesGet (query?: string, cursor?: string, rows?: number, mailto?: string, offset?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LicensesMessage;  }> {
        const localVarPath = this.basePath + '/licenses';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (query !== undefined) {
            localVarQueryParameters['query'] = ObjectSerializer.serialize(query, "string");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (rows !== undefined) {
            localVarQueryParameters['rows'] = ObjectSerializer.serialize(rows, "number");
        }

        if (mailto !== undefined) {
            localVarQueryParameters['mailto'] = ObjectSerializer.serialize(mailto, "string");
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: LicensesMessage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LicensesMessage");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
