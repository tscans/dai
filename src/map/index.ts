//location
//every month
//residential and rent
//closed vs active

import { ISRListing } from "../srets";
import {first,last} from 'underscore';

export enum EAreaType{
    city = "city",
    neighborhood = "neighborhood"
}

export interface IMapLocation{
    id:string;
    updatedAt?:Date;
    locationName:string;
    centerLocationLat:number;
    centerLocationLng:number
    coordinateBoundaries:number[][];
    smallerCoordinates:number[][];
    usState:string;
}

export interface IMetricSplitsNumeric{
    entityCount:number;
    average:number;
    median:number;
    p10:number;
    p25:number;
    p75:number;
    p90:number;
    min:number;
    max:number;
}

export interface IMetricSplitsString{
    median:string;
    p10:string;
    p25:string;
    p75:string;
    p90:string;
    min:string;
    max:string;
}

export interface IMetricSplits{
    values:IMetricSplitsNumeric;
    mlsListingIdPointers:IMetricSplitsString;
}

export interface IMetric{
    id: string;
    locationId: string;
    dateId:number;
    updatedAt: Date;
    totalClosedHomes:number;
    totalActiveHomes:number;
    totalNewlyActiveHomes:number;
    totalSalesVolume:number;
    totalPotentialSalesVolume:number;

    homesDaysOnMarket?:IMetricSplits | null;
    listingPrice?:IMetricSplits | null;
    closingPrice?:IMetricSplits | null;
    totalHomesSoldOverListingPrice:number;
    closePriceAsPercentOfListPrice?:IMetricSplits | null;
    squareFt?:IMetricSplits | null;
    pricePerSquareFt?: IMetricSplits | null;
    
    medianYearBuilt?: number | null;
    mlsListingIdDrilldown: string[];
}

export interface IGeneratedMetrics{
    [locationId:string]:IMetric[];
}

export interface ILocationListingsObject {[locationId:string]: ISRListing[]}

export enum EHomeStatus{
    closed = "Closed",
    pending = "Pending",
    activeUnderContract = "ActiveUnderContract",
    active = "Active",
}

export enum EHomeType{
    residential = "RES",
    rental = "RNT",
    land = "LND",
    multifamily = "MLF",
    commercial = "CRE",
}

export interface IMapListing {
    mlsListingId:string;
    closePrice?:number | null;
    closeDate?:Date | null;
    listPrice?:number | null;
    longitude?:number | null;
    latitude?:number | null;
    retsJson:ISRListing;
    updatedAt:Date;
    locationId:string;
    homeType?: EHomeType | null;
    homeStatus?: EHomeStatus | null;
}

export const mlsListingIdBreakPointCharacter = "|";

export const getMlsListingId = (mlsId:string,listingId:string) =>{
    return `${mlsId}${mlsListingIdBreakPointCharacter}${listingId}`;
}

export const getMlsListingIdFromListing = (listing:ISRListing) =>{
    let mlsName = listing.mls.originatingSystemName;
    if(mlsName.toUpperCase().includes("NAPLES")){
        mlsName = 'swfla';
    }
    return `${mlsName.toUpperCase()}${mlsListingIdBreakPointCharacter}${listing.listingId}`;
}

export const stripMlsListingId = (mlsListingId:string) =>{
    const split = mlsListingId.split(mlsListingIdBreakPointCharacter);
    const mlsId = first(split);
    const listingId = last(split);
    return {mlsId,listingId};
}