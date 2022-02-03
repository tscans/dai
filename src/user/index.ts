export interface IUserHomePreferences{
    ownerId:string;
    updatedAt:string;
    homePriceStart:number;
    homePriceEnd:number;
    location:string;
    locationLng:number;
    locationLat:number;
    minBeds:number;
    minBaths:number;
    minSqft:number;
    additionalDescription:string;
}