export interface IAnalytics{
    id:string;
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
    minDate:Date;
    maxDate:Date;
}

export interface IMetaLocationsStored{
    id:string;
    locationName:string;
    centerLocationLat:number;
    centerLocationLng:number
    coordinateBoundaries:string;
    usState:string;
}

export interface IMetaLocations{
    id:string;
    locationName:string;
    centerLocationLat:number;
    centerLocationLng:number
    coordinateBoundaries:number[][];
    usState:string;
}
