export interface ISellerContainer{
    id:string;
    createdAt:Date;
    taskIds:string[];
    createdById:string;
    sellerId:string;
    updatedAt:Date;
}

export enum ESellerRegistrationSellTimeOptions{
    within3Days = "Within 3 days",
    within1Week = "Within 1 week",
    within1Month = "Within 1 month",
    within2Months = "Within 2 months",
    moreThan2Months = "In more than 2 months",
    notSure = "I'm not sure",
}

export enum ESellerReasonOptions{
    upgradingHome = "Upgrading my home",
    sellingSecondHome = "Selling second home",
    relocating = "Relocating",
    downsizing = "Downsizing my home",
    retiring = "Retiring",
    other = "Other",
}

export interface ISellerRegistration{
    containerId:string;
    createdAt:Date;
    label: string;
    longitude: number;
    latitude:number;
    sellingTime:ESellerRegistrationSellTimeOptions;
    sellingReason:ESellerReasonOptions;
    address: string;
    sqft: number;
    lotSize: number;
    yearBuilt: number;
    bedrooms: number;
    fullBaths: number;
    halfBaths: number;
}

export enum ESellerTaskCategory{
    registration = 'Registration',
    initialTasks = 'Initial Tasks',
    homePrep = 'Prepare Your Property',
    homeMarketing = 'Home Marketing',
    contractTasks = 'Contract Tasks',
    homeExit = 'Home Exit Planning',
    closingTasks = 'Closing Tasks',
    miscellaneous = 'Miscellaneous',
    additionalTodo = 'Additional Todo',
}

export enum ESellerTaskOwnerType{
    client = 'client',
    agent = 'agent',
}

export interface ISellerTaskItem{
    id:string;
    createdAt:Date;
    sellerUserId:string;
    itemCreatorId:string;
    description:string;
    category:ESellerTaskCategory;
    taskOwnerType: ESellerTaskOwnerType;
    isMarkedCompleted: boolean;
    title:string;
    taskActionType?:string;
    dueDate?:Date;
}

export interface ICommonSellerTask{
    id: string;
    title:string;
    category:ESellerTaskCategory;
    taskOwnerType: ESellerTaskOwnerType;
}

export const commonSellerTasks : ICommonSellerTask[] = [
    {
        id:"1",
        title:'Prepare and present to client CMA',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"2",
        title:'Review market conditions',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"3",
        title:'Discuss Home-Sale Goals',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"4",
        title:'Discuss the optimal listing price',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"5",
        title:'Prepare & Send Listing Paper Work Via Dotloop',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"6",
        title:'Client signs listing agreement',
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"7",
        title:"Send Welcome Letter with Listing Q's Survey",
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"8",
        title:"Client fill's out survey",
        category:ESellerTaskCategory.initialTasks,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"9",
        title:'Agent suggests dates and times to Schedule Photos, Floor Plan, & Video',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"10",
        title:'Client agrees to date and time for Schedule Photos, Floor Plan, & Video',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"11",
        title:'Stage Your Home For Sale',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"12",
        title:'Remove Clutter and organize',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"13",
        title:'Clean and make necessary repairs',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"14",
        title:'Facilitate Photo Video Walkthrough Shoot',
        category:ESellerTaskCategory.homePrep,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"15",
        title:'Finalize and Execute Marketing Strategy',
        category:ESellerTaskCategory.homeMarketing,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"16",
        title:'Install Yard Sign',
        category:ESellerTaskCategory.homeMarketing,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"17",
        title:'Market home through all channels',
        category:ESellerTaskCategory.homeMarketing,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"18",
        title:'Arrange and host property showings',
        category:ESellerTaskCategory.homeMarketing,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"19",
        title:'Hold broker and public open houses',
        category:ESellerTaskCategory.homeMarketing,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"20",
        title:'Evaluate offers and negotiate the best price and terms',
        category:ESellerTaskCategory.contractTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"21",
        title:'Monitor buyer financing and home appraisal',
        category:ESellerTaskCategory.contractTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"22",
        title:'Facilitate home inspections',
        category:ESellerTaskCategory.contractTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"23",
        title:'Facilitate appraisal',
        category:ESellerTaskCategory.contractTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"24",
        title:'Agent coordinate closing date time location',
        category:ESellerTaskCategory.closingTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"25",
        title:'Client coordinate closing date time location',
        category:ESellerTaskCategory.closingTasks,
        taskOwnerType: ESellerTaskOwnerType.client,
    },
    {
        id:"26",
        title:'Review closing statement',
        category:ESellerTaskCategory.closingTasks,
        taskOwnerType: ESellerTaskOwnerType.agent,
    },
    {
        id:"27",
        title:'Close the sale',
        category:ESellerTaskCategory.closingTasks,
        taskOwnerType: ESellerTaskOwnerType.client,
    },

];
