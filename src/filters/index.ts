export const lookupGenerator = (arr:string[]) =>{
    return arr.reduce((obj,str)=>{
        obj[str] = str;
        return obj;
    },{} as any);
}

export const filtersPreferenceBuyingUrgencyExchange = {
    "Distant Plans":0,
    "Within the Next Year":1,
    "Within the Next Few Months":2,
    "Urgent":3
}

export const filtersPreferenceBuyingUrgencyValues = Object.keys(filtersPreferenceBuyingUrgencyExchange);
export const filtersPreferenceBuyingUrgencyLookup = lookupGenerator(filtersPreferenceBuyingUrgencyValues);

export const filtersPriceRangeExchange = {
    "No Min":0,
    "$10k":10000,
    "$20k":20000,
    "$30k":30000,
    "$50k":50000,
    "$100k":100000,
    "$130k":130000,
    "$150k":150000,
    "$200k":200000,
    "$250k":250000,
    "$300k":300000,
    "$350k":350000,
    "$400k":400000,
    "$450k":450000,
    "$500k":500000,
    "$550k":550000,
    "$600k":600000,
    "$650k":650000,
    "$700k":700000,
    "$750k":750000,
    "$800k":800000,
    "$850k":850000,
    "$900k":900000,
    "$950k":950000,
    "$1m":1000000,
    "$1.1m":1100000,
    "$1.2m":1200000,
    "$1.25m":1250000,
    "$1.3m":1300000,
    "$1.4m":1400000,
    "$1.5m":1500000,
    "$1.6m":1600000,
    "$1.7m":1700000,
    "$1.75m":1750000,
    "$1.8m":1800000,
    "$1.9m":1900000,
    "$2m":2000000,
    "$2.25m":2250000,
    "$2.5m":2500000,
    "$2.75m":2750000,
    "$3m":3000000,
    "$3.5m":3500000,
    "$4m":4000000,
    "$5m":5000000,
    "$10m":10000000,
    "$20m":20000000,
    "No Max": 99999999999
};

export const filtersPriceRangeValues = Object.keys(filtersPriceRangeExchange);
export const filtersPriceRangeLookup = lookupGenerator(filtersPriceRangeValues);

export const filtersBedRangeExchange = {
    "No Min":0,
    "1+":1,
    "2+":2,
    "3+":3,
    "4+":4,
    "5+":999
}

export const filtersBedRangeValues = Object.keys(filtersBedRangeExchange);
export const filtersBedRangeLookup = lookupGenerator(filtersBedRangeValues);

export const filtersBathRangeExchange = {
    "No Min":0,
    "1+":1,
    "2+":2,
    "3+":3,
    "4+":4,
    "5+":999
}

export const filtersBathRangeValues = Object.keys(filtersBathRangeExchange);
export const filtersBathRangeLookup = lookupGenerator(filtersBathRangeValues);

export const filtersPropertyTypeExchange = {
    "All":null,
    "Residential": "residential",
    "Condominium": "condominium",
    "Multifamily": "multifamily",
    "Commercial": "commercial",
    "Land": "land",
    "Farm": "farm",
    "Mobilehome": "mobilehome",
    "Rental":"rental"
}

export const filtersPropertyTypeValues = Object.keys(filtersPropertyTypeExchange);
export const filtersPropertyTypeLookup = lookupGenerator(filtersPropertyTypeValues);

export const filtersHomeStatusExchange = {
    "All":null,
    "Active": "Active",
    "Pending": "Pending",
    "Closed": "Closed",
    "Active Under Contract": "ActiveUnderContract",
    "Hold": "Hold",
    "Coming Soon": "ComingSoon"
}

export const filtersHomeStatusValues = Object.keys(filtersHomeStatusExchange);
export const filtersHomeStatusLookup = lookupGenerator(filtersHomeStatusValues);

export interface IMlsFilters{
    priceRangeStart:keyof typeof filtersPriceRangeValues;
    priceRangeEnd:keyof typeof filtersPriceRangeValues;
    bedroomRangeStart:keyof typeof filtersBedRangeValues;
    bathroomRangeStart:keyof typeof filtersBathRangeValues;
    propertyType:keyof typeof filtersPropertyTypeValues;
    houseSqftStart:number | null;
    houseSqftEnd:number | null;
    yearBuiltStart:number | null;
    yearBuiltEnd:number | null;
    homeStatus:keyof typeof filtersHomeStatusValues;
    houseSort: keyof typeof sortingHousingValues;
}

export interface IMlsFiltersSaved extends IMlsFilters{
    id:string;
    createdAt:string;
    filterName:string;
    createdBy:string;
}

export interface IMlsMapRegion{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export const sortingHousingExchange = {
    "None":null,
    "Price High-Low":"listprice",
    "Price Low-High":"-listprice",
    "List Date High-Low":"listdate",
    "List Date Low-High":"-listdate",
    "Close Date High-Low":"closedate",
    "Close Date Low-High":"-closedate",
    "Beds High-Low":"beds",
    "Beds Low-High":"-beds",
    "Baths High-Low":"baths",
    "Baths Low-High":"-baths"
}

export const sortingHousingValues = Object.keys(filtersBathRangeExchange);
export const sortingHousingLookup = lookupGenerator(filtersBathRangeValues);
