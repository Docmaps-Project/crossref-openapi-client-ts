import localVarRequest from 'request';

export * from './affiliation';
export * from './agency';
export * from './agencyMessage';
export * from './author';
export * from './coverage';
export * from './coverageFull';
export * from './dateParts';
export * from './deposit';
export * from './depositMessage';
export * from './deposits';
export * from './depositsMessage';
export * from './doiAgency';
export * from './doiCounts';
export * from './flags';
export * from './funder';
export * from './funderFull';
export * from './funderHierarchy';
export * from './funderMessage';
export * from './funders';
export * from './fundersMessage';
export * from './journal';
export * from './journalIssnType';
export * from './journalMessage';
export * from './journalMessageMessageBreakdowns';
export * from './journalMessageMessageCoverageType';
export * from './journals';
export * from './journalsMessage';
export * from './journalsMessageMessageItemsBreakdowns';
export * from './journalsMessageMessageItemsCoverageType';
export * from './license';
export * from './licenses';
export * from './licensesMessage';
export * from './member';
export * from './memberMessage';
export * from './memberMessageMessageBreakdowns';
export * from './memberMessageMessageCountsType';
export * from './memberMessageMessageCoverageType';
export * from './memberPrefix';
export * from './members';
export * from './membersMessage';
export * from './membersMessageMessageItemsBreakdowns';
export * from './membersMessageMessageItemsCountsType';
export * from './membersMessageMessageItemsCoverageType';
export * from './modelDate';
export * from './prefix';
export * from './prefixMessage';
export * from './query';
export * from './reference';
export * from './type';
export * from './typeMessage';
export * from './types';
export * from './typesMessage';
export * from './work';
export * from './workAssertion';
export * from './workClinicalTrial';
export * from './workDomain';
export * from './workFreeToRead';
export * from './workFunder';
export * from './workISSNType';
export * from './workInstitution';
export * from './workJournalIssue';
export * from './workLicense';
export * from './workLink';
export * from './workMessage';
export * from './workMessageMessageAssertionExplanation';
export * from './workMessageMessageAssertionGroup';
export * from './workMessageMessageRelationJavaLangString39107';
export * from './workReview';
export * from './workStandardsBody';
export * from './workUpdate';
export * from './works';
export * from './worksMessage';
export * from './worksMessageMessageItemsAssertionExplanation';
export * from './worksMessageMessageItemsAssertionGroup';
export * from './worksMessageMessageItemsRelationJavaLangString39101';
export * from './worksMessageMessageItemsRelationJavaLangString39102';
export * from './worksMessageMessageItemsRelationJavaLangString39103';
export * from './worksMessageMessageItemsRelationJavaLangString39104';
export * from './worksMessageMessageItemsRelationJavaLangString39108';
export * from './worksMessageMessageItemsRelationJavaLangString39109';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Affiliation } from './affiliation';
import { Agency } from './agency';
import { AgencyMessage } from './agencyMessage';
import { Author } from './author';
import { Coverage } from './coverage';
import { CoverageFull } from './coverageFull';
import { DateParts } from './dateParts';
import { Deposit } from './deposit';
import { DepositMessage } from './depositMessage';
import { Deposits } from './deposits';
import { DepositsMessage } from './depositsMessage';
import { DoiAgency } from './doiAgency';
import { DoiCounts } from './doiCounts';
import { Flags } from './flags';
import { Funder } from './funder';
import { FunderFull } from './funderFull';
import { FunderHierarchy } from './funderHierarchy';
import { FunderMessage } from './funderMessage';
import { Funders } from './funders';
import { FundersMessage } from './fundersMessage';
import { Journal } from './journal';
import { JournalIssnType } from './journalIssnType';
import { JournalMessage } from './journalMessage';
import { JournalMessageMessageBreakdowns } from './journalMessageMessageBreakdowns';
import { JournalMessageMessageCoverageType } from './journalMessageMessageCoverageType';
import { Journals } from './journals';
import { JournalsMessage } from './journalsMessage';
import { JournalsMessageMessageItemsBreakdowns } from './journalsMessageMessageItemsBreakdowns';
import { JournalsMessageMessageItemsCoverageType } from './journalsMessageMessageItemsCoverageType';
import { License } from './license';
import { Licenses } from './licenses';
import { LicensesMessage } from './licensesMessage';
import { Member } from './member';
import { MemberMessage } from './memberMessage';
import { MemberMessageMessageBreakdowns } from './memberMessageMessageBreakdowns';
import { MemberMessageMessageCountsType } from './memberMessageMessageCountsType';
import { MemberMessageMessageCoverageType } from './memberMessageMessageCoverageType';
import { MemberPrefix } from './memberPrefix';
import { Members } from './members';
import { MembersMessage } from './membersMessage';
import { MembersMessageMessageItemsBreakdowns } from './membersMessageMessageItemsBreakdowns';
import { MembersMessageMessageItemsCountsType } from './membersMessageMessageItemsCountsType';
import { MembersMessageMessageItemsCoverageType } from './membersMessageMessageItemsCoverageType';
import { ModelDate } from './modelDate';
import { Prefix } from './prefix';
import { PrefixMessage } from './prefixMessage';
import { Query } from './query';
import { Reference } from './reference';
import { Type } from './type';
import { TypeMessage } from './typeMessage';
import { Types } from './types';
import { TypesMessage } from './typesMessage';
import { Work } from './work';
import { WorkAssertion } from './workAssertion';
import { WorkClinicalTrial } from './workClinicalTrial';
import { WorkDomain } from './workDomain';
import { WorkFreeToRead } from './workFreeToRead';
import { WorkFunder } from './workFunder';
import { WorkISSNType } from './workISSNType';
import { WorkInstitution } from './workInstitution';
import { WorkJournalIssue } from './workJournalIssue';
import { WorkLicense } from './workLicense';
import { WorkLink } from './workLink';
import { WorkMessage } from './workMessage';
import { WorkMessageMessageAssertionExplanation } from './workMessageMessageAssertionExplanation';
import { WorkMessageMessageAssertionGroup } from './workMessageMessageAssertionGroup';
import { WorkMessageMessageRelationJavaLangString39107 } from './workMessageMessageRelationJavaLangString39107';
import { WorkReview } from './workReview';
import { WorkStandardsBody } from './workStandardsBody';
import { WorkUpdate } from './workUpdate';
import { Works } from './works';
import { WorksMessage } from './worksMessage';
import { WorksMessageMessageItemsAssertionExplanation } from './worksMessageMessageItemsAssertionExplanation';
import { WorksMessageMessageItemsAssertionGroup } from './worksMessageMessageItemsAssertionGroup';
import { WorksMessageMessageItemsRelationJavaLangString39101 } from './worksMessageMessageItemsRelationJavaLangString39101';
import { WorksMessageMessageItemsRelationJavaLangString39102 } from './worksMessageMessageItemsRelationJavaLangString39102';
import { WorksMessageMessageItemsRelationJavaLangString39103 } from './worksMessageMessageItemsRelationJavaLangString39103';
import { WorksMessageMessageItemsRelationJavaLangString39104 } from './worksMessageMessageItemsRelationJavaLangString39104';
import { WorksMessageMessageItemsRelationJavaLangString39108 } from './worksMessageMessageItemsRelationJavaLangString39108';
import { WorksMessageMessageItemsRelationJavaLangString39109 } from './worksMessageMessageItemsRelationJavaLangString39109';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "Affiliation": Affiliation,
    "Agency": Agency,
    "AgencyMessage": AgencyMessage,
    "Author": Author,
    "Coverage": Coverage,
    "CoverageFull": CoverageFull,
    "DateParts": DateParts,
    "Deposit": Deposit,
    "DepositMessage": DepositMessage,
    "Deposits": Deposits,
    "DepositsMessage": DepositsMessage,
    "DoiAgency": DoiAgency,
    "DoiCounts": DoiCounts,
    "Flags": Flags,
    "Funder": Funder,
    "FunderFull": FunderFull,
    "FunderHierarchy": FunderHierarchy,
    "FunderMessage": FunderMessage,
    "Funders": Funders,
    "FundersMessage": FundersMessage,
    "Journal": Journal,
    "JournalIssnType": JournalIssnType,
    "JournalMessage": JournalMessage,
    "JournalMessageMessageBreakdowns": JournalMessageMessageBreakdowns,
    "JournalMessageMessageCoverageType": JournalMessageMessageCoverageType,
    "Journals": Journals,
    "JournalsMessage": JournalsMessage,
    "JournalsMessageMessageItemsBreakdowns": JournalsMessageMessageItemsBreakdowns,
    "JournalsMessageMessageItemsCoverageType": JournalsMessageMessageItemsCoverageType,
    "License": License,
    "Licenses": Licenses,
    "LicensesMessage": LicensesMessage,
    "Member": Member,
    "MemberMessage": MemberMessage,
    "MemberMessageMessageBreakdowns": MemberMessageMessageBreakdowns,
    "MemberMessageMessageCountsType": MemberMessageMessageCountsType,
    "MemberMessageMessageCoverageType": MemberMessageMessageCoverageType,
    "MemberPrefix": MemberPrefix,
    "Members": Members,
    "MembersMessage": MembersMessage,
    "MembersMessageMessageItemsBreakdowns": MembersMessageMessageItemsBreakdowns,
    "MembersMessageMessageItemsCountsType": MembersMessageMessageItemsCountsType,
    "MembersMessageMessageItemsCoverageType": MembersMessageMessageItemsCoverageType,
    "ModelDate": ModelDate,
    "Prefix": Prefix,
    "PrefixMessage": PrefixMessage,
    "Query": Query,
    "Reference": Reference,
    "Type": Type,
    "TypeMessage": TypeMessage,
    "Types": Types,
    "TypesMessage": TypesMessage,
    "Work": Work,
    "WorkAssertion": WorkAssertion,
    "WorkClinicalTrial": WorkClinicalTrial,
    "WorkDomain": WorkDomain,
    "WorkFreeToRead": WorkFreeToRead,
    "WorkFunder": WorkFunder,
    "WorkISSNType": WorkISSNType,
    "WorkInstitution": WorkInstitution,
    "WorkJournalIssue": WorkJournalIssue,
    "WorkLicense": WorkLicense,
    "WorkLink": WorkLink,
    "WorkMessage": WorkMessage,
    "WorkMessageMessageAssertionExplanation": WorkMessageMessageAssertionExplanation,
    "WorkMessageMessageAssertionGroup": WorkMessageMessageAssertionGroup,
    "WorkMessageMessageRelationJavaLangString39107": WorkMessageMessageRelationJavaLangString39107,
    "WorkReview": WorkReview,
    "WorkStandardsBody": WorkStandardsBody,
    "WorkUpdate": WorkUpdate,
    "Works": Works,
    "WorksMessage": WorksMessage,
    "WorksMessageMessageItemsAssertionExplanation": WorksMessageMessageItemsAssertionExplanation,
    "WorksMessageMessageItemsAssertionGroup": WorksMessageMessageItemsAssertionGroup,
    "WorksMessageMessageItemsRelationJavaLangString39101": WorksMessageMessageItemsRelationJavaLangString39101,
    "WorksMessageMessageItemsRelationJavaLangString39102": WorksMessageMessageItemsRelationJavaLangString39102,
    "WorksMessageMessageItemsRelationJavaLangString39103": WorksMessageMessageItemsRelationJavaLangString39103,
    "WorksMessageMessageItemsRelationJavaLangString39104": WorksMessageMessageItemsRelationJavaLangString39104,
    "WorksMessageMessageItemsRelationJavaLangString39108": WorksMessageMessageItemsRelationJavaLangString39108,
    "WorksMessageMessageItemsRelationJavaLangString39109": WorksMessageMessageItemsRelationJavaLangString39109,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
