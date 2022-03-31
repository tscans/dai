export interface IAnalytics{
    city:string;
    periodName:string;
    countSold:number;
    salesVolume:number;
    averageSellingPrice:number;
    minClosedPrice:number;
    maxClosedPrice:number;
    soldOverListing:number;
    closedAsPercentOfOriginalListPrice:number;
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