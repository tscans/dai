import Mocks from './mocks/index';

export * from './filters';

export const AllMocks = Mocks;
export interface ISRListing {
    privateRemarks: string;
    property: ISRProperty;
    mlsId: number;
    showingInstructions: string;
    showingContactName: string;
    showingContactPhone: string;
    specialListingConditions: string;
    ownership: string;
    office: ISROffice;
    leaseTerm: string;
    disclaimer: string;
    address: ISRAddress;
    listDate: string;
    agent: ISRAgentOrCoAgent;
    modified: string;
    school: ISRSchool;
    photos?: (string)[] | null;
    listPrice: number;
    originalListPrice: number;
    internetAddressDisplay: boolean;
    listingId: string;
    mls: ISRMls;
    internetEntireListingDisplay: boolean;
    geo: ISRGeo;
    tax: ISRTax;
    coAgent: ISRAgentOrCoAgent;
    sales: ISRSales;
    leaseType: string;
    virtualTourUrl: string;
    remarks: string;
    association: ISRAssociation;
}

export interface ISRProperty {
    roof: string;
    cooling: string;
    style: string;
    area: number;
    bathsFull: number;
    bathsHalf: number;
    stories: number;
    fireplaces: number;
    flooring: string;
    heating: string;
    foundation: string;
    poolFeatures: string;
    laundryFeatures: string;
    occupantName: string;
    ownerName: string;
    lotDescription: string;
    lotSizeAcres: number;
    subType: string;
    bedrooms: number;
    interiorFeatures: string;
    lotSize: string;
    areaSource: string;
    maintenanceExpense: number;
    additionalRooms: string;
    exteriorFeatures: string;
    water: string;
    view: string;
    lotSizeArea: number;
    subdivision: string;
    construction: string;
    subTypeRaw: string;
    parking: ISRParking;
    lotSizeAreaUnits: string;
    type: string;
    garageSpaces: number;
    bathsThreeQuarter: number;
    accessibility: string;
    occupantType: string;
    yearBuilt: number;
    rooms?: (ISRRoomsEntity)[] | null;
}

export interface ISRParking {
    leased: string;
    spaces: number;
    description: string;
}

export interface ISRRoomsEntity {
    length: number;
    features: string;
    area: number;
    width: number;
    typeText: string;
    type: string;
    dimensions: string;
    description: string;
}

export interface ISROffice {
    contact: ISRContact;
    name: string;
    servingName: string;
    brokerid: string;
}

export interface ISRContact {
    email: string;
    office: string;
    cell: string;
}

export interface ISRAddress {
    crossStreet: string;
    state: string;
    country: string;
    postalCode: string;
    streetName: string;
    streetNumberText: string;
    city: string;
    streetNumber: number;
    full: string;
    unit: string;
}

export interface ISRAgentOrCoAgent {
    lastName: string;
    contact: ISRContact;
    firstName: string;
    id: string;
}
export interface ISRSchool {
    middleSchool: string;
    highSchool: string;
    elementarySchool: string;
    district: string;
}

export interface ISRMls {
    status: string;
    area: string;
    daysOnMarket: number;
    originalEntryTimestamp: string;
    originatingSystemName: string;
    statusText: string;
    areaMinor: string;
}

export interface ISRGeo {
    county: string;
    lat: number;
    lng: number;
    marketArea: string;
    directions: string;
}

export interface ISRTax {
    taxYear: number;
    taxAnnualAmount: number;
    id: string;
}

export interface ISRSales {
    closeDate: string;
    office: ISROffice;
    closePrice: number;
    agent: ISRAgentOrCoAgent;
    contractDate: string;
}

export interface ISRAssociation {
    fee: number;
    frequency: string;
    name: string;
    amenities: string;
}
  
export interface IUserProfile{
    id:string;
    firstName:string; 
    lastName:string;
    createdAt: number;
    email:string;
    profilePictureThumbnail:string | null;
    userSavedListIds:string[];
}

export interface IHereSearchSuggestion {
    title: string;
    id: string;
    resultType: string;
    address: IHereAddress;
    position: IHereAccessEntityOrPosition;
    access?: (IHereAccessEntityOrPosition)[] | null;
    distance: number;
    categories?: (IHereCategoriesEntity)[] | null;
}
export interface IHereAddress {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    county: string;
    city: string;
    postalCode: string;
}
export interface IHereAccessEntityOrPosition {
    lat: number;
    lng: number;
}
export interface IHereCategoriesEntity {
    id: string;
    name: string;
    primary: boolean;
}

export enum EUserSavedListingRating{
    like = "Like",
    love = "Love"
}

export interface IUserSavedListing{
    id:string;
    createdAt:string;
    sretsMlsId:number;
    savedVersion: string;
    sretsMeta:ISRListing;
    lastUpdatedSrets:string;
    userRating: EUserSavedListingRating;
}