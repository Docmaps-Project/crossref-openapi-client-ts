/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { DepositsService } from './services/DepositsService';
import { FundersService } from './services/FundersService';
import { JournalsService } from './services/JournalsService';
import { LicensesService } from './services/LicensesService';
import { MembersService } from './services/MembersService';
import { PrefixesService } from './services/PrefixesService';
import { TypesService } from './services/TypesService';
import { WorksService } from './services/WorksService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class CrossrefClient {

    public readonly deposits: DepositsService;
    public readonly funders: FundersService;
    public readonly journals: JournalsService;
    public readonly licenses: LicensesService;
    public readonly members: MembersService;
    public readonly prefixes: PrefixesService;
    public readonly types: TypesService;
    public readonly works: WorksService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.deposits = new DepositsService(this.request);
        this.funders = new FundersService(this.request);
        this.journals = new JournalsService(this.request);
        this.licenses = new LicensesService(this.request);
        this.members = new MembersService(this.request);
        this.prefixes = new PrefixesService(this.request);
        this.types = new TypesService(this.request);
        this.works = new WorksService(this.request);
    }
}

