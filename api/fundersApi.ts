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
import { FunderMessage } from '../model/funderMessage';
import { FundersMessage } from '../model/fundersMessage';
import { WorksMessage } from '../model/worksMessage';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FundersApiApiKeys {
}

export class FundersApi {
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

    public setApiKey(key: FundersApiApiKeys, value: string) {
        (this.authentications as any)[FundersApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of all funders in the [Funder Registry](https://gitlab.com/crossref/open_funder_registry). ## Queries  Free form search queries can be made, for example, funders that include `research` and `foundation`:  ##  ``` /funders?query=research+foundation ```   ## Filters  Filters allow you to select items based on specific criteria. All filter results are lists.  ##  Example:  ## ``` /funders?filter=location:Spain ``` ##  This endpoint supports the following filters:  ##  + `location` - funders located in given country ## Pagination with offsets  Offsets can be used to iterate over the results. For this route, the maximum number of available results is 80,000, which in this case allows to retrieve all the indexed items. This limit applies to the sum of values of parameters `offset` + `rows`.  ##  The number of items returned in a single response is controlled by `rows` parameter (default is 20, and maximum is 1,000). To limit results to 5, for example, you could do the following:  ##  ``` /works?query=allen+renear&rows=5 ```  ##  `offset` parameter can be used to retrieve items starting from a specific index of the result list. For example, to select the second set of 5 results (i.e. results 6 through 10), you would do the following:  ##  ``` /works?query=allen+renear&rows=5&offset=5 ```  ##  ## Deep paging  Deep paging using cursors can be used to iterate over large result sets, without any limits on their size.  ##  To use deep paging make a query as normal, but include the `cursor` parameter with a value of `*`, for example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=* ```  ##  A `next-cursor` field will be provided in the JSON response. To get the next page of results, pass the value of `next-cursor` as the cursor parameter (remember to URL-encode). For example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=<value of next-cursor parameter> ```  ##  Clients should check the number of returned items. If the number of returned items is equal to the number of expected rows then the end of the result set has been reached. Using next-cursor beyond this point will result in responses with an empty items list.  ## 
     * @param filter Exposes the ability to search funders by location using a Lucene based syntax
     * @param cursor Exposes the ability to deep page through large result sets, where offset would cause performance problems
     * @param query Exposes the ability to free text query certain fields
     * @param rows The number of rows per page
     * @param mailto The email address to identify yourself and be in the \&quot;polite pool\&quot;
     * @param offset The number of rows to skip before returning
     */
    public async fundersGet (filter?: string, cursor?: string, query?: string, rows?: number, mailto?: string, offset?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FundersMessage;  }> {
        const localVarPath = this.basePath + '/funders';
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

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
        }

        if (query !== undefined) {
            localVarQueryParameters['query'] = ObjectSerializer.serialize(query, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: FundersMessage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FundersMessage");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns metadata for specified funder **and** its suborganizations, as an example use id 501100006004
     * @param id The id of the funder
     */
    public async fundersIdGet (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: FunderMessage;  }> {
        const localVarPath = this.basePath + '/funders/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fundersIdGet.');
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
            return new Promise<{ response: http.IncomingMessage; body: FunderMessage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "FunderMessage");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns list of works associated with the specified {id}. ## Queries  Free form search queries can be made, for example, works that include `renear` or `ontologies` (or both):  ##  ``` /works?query=renear+ontologies ```   ## Field Queries Field queries allow for queries that match only particular fields of metadata. For example, this query matches records that contain the tokens `richard` or `feynman` (or both) in any author field:  ##  ``` /works?query.author=richard+feynman ```  ##  Field queries can be combined with the general `query` parameter and each other. Each query parameter is ANDed with the others:  ## ``` /works?query.title=room+at+the+bottom&query.author=richard+feynman ```  ##  This endpoint supports the following field queries:  ##  + `query.affiliation` - query contributor affiliations + `query.author` - query author given and family names + `query.bibliographic` - query bibliographic information, useful for citation look up, includes titles, authors, ISSNs and publication years + `query.chair` - query chair given and family names + `query.container-title` - query container title aka. publication name + `query.contributor` - query author, editor, chair and translator given and family names + `query.degree` - query degree + `query.description` - query description + `query.editor` - query editor given and family names + `query.event-acronym` - query acronym of the event + `query.event-location` - query location of the event + `query.event-name` - query name of the event + `query.event-sponsor` - query sponsor of the event + `query.event-theme` - query theme of the event + `query.funder-name` - query name of the funder + `query.publisher-location` - query location of the publisher + `query.publisher-name` - query publisher name + `query.standards-body-acronym` - query acronym of the standards body + `query.standards-body-name` - query standards body name + `query.title` - query title + `query.translator` - query translator given and family names ## Sort  Results can be sorted by applying the `sort` and `order` parameters. `sort` sets the field by which results will be sorted. `order` sets the result ordering, either `asc` or `desc` (default is `desc`).  An example that sorts results in order of publication, beginning with the least recent:  ##  ``` /works?query=josiah+carberry&sort=published&order=asc ```  ##  This endpoint supports sorting by the following elements:  ##  + `created` - sort by created date + `deposited` - sort by time of most recent deposit + `indexed` - sort by time of most recent index + `is-referenced-by-count` - sort by number of times this DOI is referenced by other Crossref DOIs + `issued` - sort by issued date (earliest known publication date) + `published` - sort by publication date + `published-online` - sort by online publication date + `published-print` - sort by print publication date + `references-count` - sort by number of references included in the references section of the document identified by this DOI + `relevance` - sort by relevance score + `score` - sort by relevance score + `updated` - sort by date of most recent change to metadata, currently the same as deposited ## Facets  Facet counts can be retrieved by enabling faceting. Facets are enabled by providing facet field names along with a maximum number of returned term values. The larger the number of returned values, the longer the query will take. Some facet fields can accept a `*` as their maximum, which indicates that all values should be returned.  ##  For example, to get facet counts for all work types:  ## ``` /works?facet=type-name:* ```  ##  This endpoint supports the following facets:  ##  + `affiliation` - author affiliation + `archive` - archive location + `assertion` - custom Crossmark assertion name + `assertion-group` - custom Crossmark assertion group name + `category-name` - category name of work + `container-title` - [max value 100], work container title, such as journal title, or book title + `funder-doi` - funder DOI + `funder-name` - funder literal name as deposited alongside DOI + `issn` - [max value 100], journal ISSN (any - print, electronic, link) + `journal-issue` - journal issue number + `journal-volume` - journal volume + `license` - license URI of work + `link-application` - intended application of the full text link + `orcid` - [max value 100], contributor ORCID + `published` - earliest year of publication + `publisher-name` - publisher name of work + `relation-type` - relation type described by work or described by another work with work as object + `ror-id` - institution ROR ID + `source` - source of the DOI + `type-name` - work type name, such as journal-article or book-chapter + `update-type` - significant update type ## Filters  Filters allow you to select items based on specific criteria. All filter results are lists.  ##  For example:  ## ``` /works?filter=type:dataset ```  ### Multiple filters  Multiple filters can be specified in a single query. In such a case, different filters will be applied with AND semantics, while specifying the same filter multiple times will result in OR semantics - that is, specifying the filters:  - `is-update:true` - `from-pub-date:2014-03-03` - `funder:10.13039/100000001` - `funder:10.13039/100000050`  would locate documents that are updates, were published on or after 3rd March 2014 and were funded by either the National Science Foundation (`10.13039/100000001`) or the National Heart, Lung, and Blood Institute (`10.13039/100000050`). These filters would be specified by joining each filter together with a comma:  ## ``` /works?filter=is-update:true,from-pub-date:2014-03-03,funder:10.13039/100000001,funder:10.13039/100000050 ```  ### Dot filters  A filter with a dot in its name is special. The dot signifies that the filter will be applied to some other record type that is related to primary resource record type. For example, with work queries, one can filter on works that have an award, where the same award has a particular award number and award-giving funding agency:  ## ``` /works?filter=award.number:CBET-0756451,award.funder:10.13039/100000001 ``` ##  Here we filter on works that have an award by the National Science Foundation that also has the award number `CBET-0756451`.  ### Note on dates  The dates in filters should always be of the form YYYY-MM-DD, YYYY-MM or YYYY. The date filters are inclusive. For example:  * `from-pub-date:2018-09-18` filters works published on or after 18th September 2018 * `from-created-date:2016-02-29,until-created-date:2016-02-29` filters works first deposited on 29th February 2016 * `until-created-date:2010-06` filters works first deposited in or before June 2010 * `from-update-date:2017,until-update-date:2017` filters works with metadata updated in 2017  Also note that date information in Crossref metadata can often be incomplete. So, for example, a publisher may only include the year and month of publication for a journal article. For a monograph they might just include the year. In these cases the API selects the earliest possible date given the information provided. So, for instance, if the publisher only provided 2013-02 as the published date, then the date would be treated as 2013-02-01. Similarly, if the publisher only provided the year 2013 as the date, it would be treated at 2013-01-01.  ### Note on owner prefixes  The prefix of a Crossref DOI does **NOT** indicate who currently owns the DOI. It only reflects who originally registered the DOI. Crossref metadata has an **prefix** element that records the current owner of the Crossref DOI in question.  ##  Crossref also has member IDs for depositing organisations. A single member may control multiple owner prefixes, which in turn may control a number of DOIs. When looking at works published by a certain organisaton, member IDs and the member routes should be used.  ### Notes on incremental metadata updates  When using time filters to retrieve periodic, incremental metadata updates, the `from-index-date` filter should be used over `from-update-date`, `from-deposit-date`, `from-created-date` and `from-pub-date`. The timestamp that `from-index-date` filters on is guaranteed to be updated every time there is a change to metadata requiring a reindex.  ##  This endpoint supports the following filters:  ##  + `alternative-id` - metadata for records with the given alternative ID, which may be a publisher-specific ID, or any other identifier a publisher may have provided + `archive` - metadata where value of archive partner equals given archive name + `article-number` - metadata for records with a given article number + `assertion` - metadata for records with a given named assertion + `assertion-group` - metadata for records with an assertion in a given group + `award`   + `award.funder` - metadata for records with award funder equal to given funder, optionally combine with `award.number`   + `award.number` - metadata for records with award number equal to given number, optionally combine with `award.funder` + `category-name` - metadata for records with category label equal to given name, category labels come from the list published by Scopus + `citation-id` + `clinical-trial-number` - metadata for records with given clinical trial number + `container-title` - metadata with a publication title that exactly equals given title + `content-domain` - metadata where the publisher records a given domain name as the location Crossmark content will appear + `doi` - metadata describing given DOI + `from-accepted-date` - [date], metadata where accepted date is since given date (inclusive) + `from-approved-date` - [date], metadata where approved date is since given date (inclusive) + `from-awarded-date` - [date], metadata where award date is since given date (inclusive) + `from-created-date` - [date], metadata first deposited since given date (inclusive) + `from-deposit-date` - [date], metadata last (re)deposited since given date (inclusive) + `from-event-end-date` - [date], metadata where event end date is since given date (inclusive) + `from-event-start-date` - [date], metadata where event start date is since given date  (inclusive) + `from-index-date` - [date], metadata indexed since given date (inclusive) + `from-issued-date` - [date], metadata where issued date is since given date  (inclusive) + `from-online-pub-date` - [date], metadata where online published date is since given date (inclusive) + `from-posted-date` - [date], metadata where posted date is since given date (inclusive) + `from-print-pub-date` - [date], metadata where print published date is since given date (inclusive) + `from-pub-date` - [date], metadata where published date is since given date (inclusive) + `from-update-date` - [date], metadata updated since given date (inclusive), currently the same as `from-deposit-date` + `full-text`   + `full-text.type` - metadata where `resource` element\'s `content_type` attribute equals given version mime type (e.g. application/pdf)   + `full-text.application` - [text-mining, similarity-checking or unspecified], metadata where `resource` link has given application   + `full-text.version` - metadata where `resource` element\'s `content_version` attribute equals given version + `funder` - metadata which include given funder id in FundRef data + `funder-doi-asserted-by` - metadata where funder DOI was asserted by given body + `group-title` - metadata with given group title + `gte-award-amount` - metadata where award is greater than or equals given number + `has-abstract` - [0 or 1], metadata for records with/without an abstract + `has-affiliation` - [0 or 1], metadata for records with/without affiliation information + `has-archive` - [0 or 1], metadata which includes/does not include name of archive partner + `has-assertion` - [0 or 1], metadata for records with/without assertions + `has-authenticated-orcid` - [0 or 1], metadata which includes/does not include one or more ORCIDs where the depositing publisher claims to have witness the ORCID owner authenticate with ORCID + `has-award` - [0 or 1], metadata for records with/without award + `has-clinical-trial-number` - [0 or 1], metadata for records with/without a clinical trial number + `has-content-domain` - [0 or 1], metadata where the publisher records/does not record a domain name location for Crossmark content + `has-description` + `has-domain-restriction` - [0 or 1], metadata where the publisher restricts/does not restrict Crossmark usage to content domains + `has-event` - [0 or 1], metadata for records with/without event + `has-full-text` - [0 or 1], metadata that includes/does not include any full text `resource` elements + `has-funder` - [0 or 1], metadata which includes/does not include one or more funder entry + `has-funder-doi` - [0 or 1], metadata for records with/without funder DOI + `has-license` - [0 or 1], metadata that includes/does not include any `license_ref` elements + `has-orcid` - [0 or 1], metadata which includes/does not include one or more ORCIDs + `has-references` - [0 or 1], metadata for works that have/don\'t have a list of references + `has-relation` - [0 or 1], metadata for records that either assert/do not assert or are/are not the object of a relation + `has-ror-id` - [0 or 1], metadata for records with/without ROR ID + `has-update` - [0 or 1], metadata for records with/without update information + `has-update-policy` - [0 or 1], metadata for records that include/do not include a link to an editorial update policy + `is-update` - [0 or 1], metadata for records that represent/do not represent editorial updates + `isbn` - metadata with given ISBN + `issn` - metadata with given ISSN, format is xxxx-xxxx + `license`   + `license.url` - metadata where `license_ref` value equals given url   + `license.version` - metadata where the `license_ref`\'s `applies_to` attribute equals given version   + `license.delay` - metadata where difference between publication date and the `license_ref`\'s `start_date` attribute is <= than given delay (in days) + `lte-award-amount` - metadata where award is less than or equals given number + `member` - metadata belonging to a given Crossref member + `orcid` - metadata where there is a contributor with given ORCID + `prefix` - metadata belonging to a given DOI owner prefix (e.g. 10.1016) + `relation`   + `relation.type` - metadata for records with a relation with the given type from the Crossref relations schema (e.g. is-referenced-by, is-parent-of, is-preprint-of)   + `relation.object-type` - metadata for records with a relation, where the object type matches given type from the Crossref relations schema (e.g. doi, issn)   + `relation.object` - metadata for records with a relation, where the object identifier matches given identifier + `ror-id` - metadata with given ROR ID + `type` - metadata records whose type equals given type, type must be an ID value from the list of types returned by the /types resource + `type-name` - metadata for records with type name equal to given name + `until-accepted-date` - [date], metadata where accepted date is before given date (inclusive) + `until-approved-date` - [date], metadata where approved date is before given date (inclusive) + `until-awarded-date` - [date], metadata where award date is before given date (inclusive) + `until-created-date` - [date], metadata first deposited before given date (inclusive) + `until-deposit-date` - [date], metadata last (re)deposited before given date (inclusive) + `until-event-end-date` - [date], metadata where event end date is before given date (inclusive) + `until-event-start-date` - [date], metadata where event start date is before given date  (inclusive) + `until-index-date` - [date], metadata indexed before given date (inclusive) + `until-issued-date` - [date], metadata where issued date is before given date  (inclusive) + `until-online-pub-date` - [date], metadata where online published date is before given date (inclusive) + `until-posted-date` - [date], metadata where posted date is before given date (inclusive) + `until-print-pub-date` - [date], metadata where print published date is before given date (inclusive) + `until-pub-date` - [date], metadata where published date is before given date (inclusive) + `until-update-date` - [date], metadata updated before given date (inclusive), currently the same as `until-deposit-date` + `update-type` - metadata with given update type + `updates` - metadata for records that represent editorial updates to given DOI ## Elements  Crossref metadata records can be quite large. Sometimes you just want a few elements from the schema. You can \\\"select\\\" a subset of elements to return using the `select` parameter. This can make your API calls much more efficient. For example:  ## ``` /works?select=DOI,prefix,title ```  ##  This endpoint supports selecting the following elements.  ##  + `DOI` + `ISBN` + `ISSN` + `URL` + `abstract` + `accepted` + `alternative-id` + `approved` + `archive` + `article-number` + `assertion` + `author` + `chair` + `clinical-trial-number` + `container-title` + `content-created` + `content-domain` + `created` + `degree` + `deposited` + `editor` + `event` + `funder` + `group-title` + `indexed` + `is-referenced-by-count` + `issn-type` + `issue` + `issued` + `license` + `link` + `member` + `original-title` + `page` + `posted` + `prefix` + `published` + `published-online` + `published-print` + `publisher` + `publisher-location` + `reference` + `references-count` + `relation` + `score` + `short-container-title` + `short-title` + `standards-body` + `subject` + `subtitle` + `title` + `translator` + `type` + `update-policy` + `update-to` + `updated-by` + `volume` ## Pagination with offsets  Offsets are an easy way to iterate over results sets up to 10,000 items. This limit applies to the sum of values of parameters `offset` + `rows`.  ##  The number of items returned in a single response is controlled by `rows` parameter (default is 20, and maximum is 1,000). To limit results to 5, for example, you could do the following:  ##  ``` /works?query=allen+renear&rows=5 ```  ##  `offset` parameter can be used to retrieve items starting from a specific index of the result list. For example, to select the second set of 5 results (i.e. results 6 through 10), you would do the following:  ##  ``` /works?query=allen+renear&rows=5&offset=5 ```  ##  ## Deep paging  Deep paging using cursors can be used to iterate over large result sets, without any limits on their size.  ##  To use deep paging make a query as normal, but include the `cursor` parameter with a value of `*`, for example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=* ```  ##  A `next-cursor` field will be provided in the JSON response. To get the next page of results, pass the value of `next-cursor` as the cursor parameter (remember to URL-encode). For example:  ##  ``` /members/311/works?filter=type:journal-article&cursor=<value of next-cursor parameter> ```  ##  Clients should check the number of returned items. If the number of returned items is equal to the number of expected rows then the end of the result set has been reached. Using next-cursor beyond this point will result in responses with an empty items list.  ##  ## Sample  Being able to select random results is useful for both testing and sampling. You can use the `sample` parameter to retrieve random results. So, for example, the following selects 10 random works:  ## ``` /works?sample=10 ``` ##  Note that when you use the `sample` parameter, the `rows` and `offset` parameters are ignored.   ## Parameter combinations  Any combination of `query`, `query.*`, `filter`, `facet`, `select` and `sort` can be used with offsets. Sampling cannot be combined with offsets.  ##  Any combination of `query`, `query.*`, `filter`, `facet`, `select` and `sort` may also be used with deep paging cursors. `rows` may also be specified.  ##  `offset` and `sample` cannot be used in combination with cursors.  ## 
     * @param id The id of the funder
     * @param rows The number of rows per page
     * @param order Combined with sort can be used to specify the order of results, e.g. asc or desc
     * @param facet Exposes the ability to retrieve counts for pre-defined facets e.g. &#x60;type-name:*&#x60; returns counts of all works by type
     * @param sample Exposes the ability to return &#x60;N&#x60; randomly sampled items
     * @param sort Exposes the ability to sort results by a certain field, e.g. &#x60;score&#x60;
     * @param offset The number of rows to skip before returning
     * @param mailto The email address to identify yourself and be in the \&quot;polite pool\&quot;
     * @param select Exposes the ability to select certain fields, supports a comma separated list of fields, e.g. &#x60;DOI,volume&#x60;
     * @param query Exposes the ability to free text query certain fields
     * @param filter Exposes the ability to filter by certain fields, supports a comma separated list of lucene filters, e.g. &#x60;content-domain:psychoceramics.labs.crossref.org&#x60;
     * @param cursor Exposes the ability to deep page through large result sets, where offset would cause performance problems
     */
    public async fundersIdWorksGet (id: string, rows?: number, order?: string, facet?: string, sample?: number, sort?: string, offset?: number, mailto?: string, select?: string, query?: string, filter?: string, cursor?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: WorksMessage;  }> {
        const localVarPath = this.basePath + '/funders/{id}/works'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
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

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fundersIdWorksGet.');
        }

        if (rows !== undefined) {
            localVarQueryParameters['rows'] = ObjectSerializer.serialize(rows, "number");
        }

        if (order !== undefined) {
            localVarQueryParameters['order'] = ObjectSerializer.serialize(order, "string");
        }

        if (facet !== undefined) {
            localVarQueryParameters['facet'] = ObjectSerializer.serialize(facet, "string");
        }

        if (sample !== undefined) {
            localVarQueryParameters['sample'] = ObjectSerializer.serialize(sample, "number");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "string");
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (mailto !== undefined) {
            localVarQueryParameters['mailto'] = ObjectSerializer.serialize(mailto, "string");
        }

        if (select !== undefined) {
            localVarQueryParameters['select'] = ObjectSerializer.serialize(select, "string");
        }

        if (query !== undefined) {
            localVarQueryParameters['query'] = ObjectSerializer.serialize(query, "string");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (cursor !== undefined) {
            localVarQueryParameters['cursor'] = ObjectSerializer.serialize(cursor, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: WorksMessage;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "WorksMessage");
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
