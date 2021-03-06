// To parse this data:
//
//   import { Convert, ParasAPIResponse } from "./file";
//
//   const parasAPIResponse = Convert.toParasAPIResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ParasAPIResponse {
    status: number;
    data:   Data;
}

export interface Data {
    buyers:      Buyer[];
    sellers:     Buyer[];
    collections: Collection[];
    skip:        number;
    limit:       number;
}

export interface Buyer {
    contract_token_ids: string[];
    account_id:         string;
    total_sum:          string;
}

export interface Collection {
    contract_token_ids: string[];
    collection_id:      string;
    total_sum:          string;
}

// Generated by https://quicktype.io

export interface ParasSingleCollectionResponse {
    status: number;
    data:   Data;
}

export interface Data {
    results: Result[];
    skip:    number;
    limit:   number;
}

export interface Result {
    _id:           string;
    collection_id: string;
    collection:    string;
    creator_id:    string;
    description:   string;
    media:         string;
    isCreator:     boolean;
    volume:        string;
    total_owners:  number;
    total_cards:   number;
}

