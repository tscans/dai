export interface IUserHomePreferences{
    ownerId:string;
    updatedAt:string;
    priceRangeStart:string;
    priceRangeEnd:string;
    location:string;
    locationLng:number;
    locationLat:number;
    bedroomRangeStart:string;
    bathroomRangeStart:string;
    houseSqftStart:number | null;
    houseSqftEnd:number | null;
    additionalDescription:string;
}
