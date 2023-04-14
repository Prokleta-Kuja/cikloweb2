export interface IBike {
    frame: string;
    fork?: string;
    suspension: Suspension;
}

export interface IChildBike extends IBike{
    trainingWheels: TrainingWheels;
}

export interface IAdultBike extends IBike{
    sizes: Sizes[];
}

export enum Suspension{
    Full,
    HardTail,
    Rigid,
}

export enum Sizes {
    "S",
    "M",
    "L",
    "XL",
    "XXL",
}

export enum TrainingWheels {
    YesIncluded,
    YesAdditional,
    No,
}
