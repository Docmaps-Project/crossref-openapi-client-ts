export * from './depositsApi';
import { DepositsApi } from './depositsApi';
export * from './fundersApi';
import { FundersApi } from './fundersApi';
export * from './journalsApi';
import { JournalsApi } from './journalsApi';
export * from './licensesApi';
import { LicensesApi } from './licensesApi';
export * from './membersApi';
import { MembersApi } from './membersApi';
export * from './prefixesApi';
import { PrefixesApi } from './prefixesApi';
export * from './typesApi';
import { TypesApi } from './typesApi';
export * from './worksApi';
import { WorksApi } from './worksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DepositsApi, FundersApi, JournalsApi, LicensesApi, MembersApi, PrefixesApi, TypesApi, WorksApi];
