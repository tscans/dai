//All Deprecated

export interface IAnalytics{
    id:string;
    locationId:string;
    updatedAt:Date;
    location:string;
    periodName:string;
    countSold:number;
    salesVolume:number;
    averageSellingPrice:number;
    minClosedPrice:number;
    maxClosedPrice:number;
    soldOverListing:number;
    closedAsPercentofOriginalListPrice:number;
    averageSquareFt:number;
    averageClosedPrice:number;
    averagePricePerSquareFt:number;
    medianClosedPrice:number;
    medianListPrice:number;
    medianSquareFootage:number;
    medianYearBuilt:number;
    mlsListingIdDrilldown:string[];
    minDate:string;
    maxDate:string;
}

export interface IMetaLocationsStored{
    id:string;
    locationName:string;
    centerLocationLat:number;
    centerLocationLng:number
    coordinateBoundaries:string;
    friendlyName:string;
    usState:string;
}

export interface IMetaLocations{
    id:string;
    locationName:string;
    centerLocationLat:number;
    centerLocationLng:number
    coordinateBoundaries:number[][];
    friendlyName:string;
    usState:string;
}
