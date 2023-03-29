export type Room = {
    id: string,
    title:string,
    text:string,
    doors?:Door[],
    actions?:Action[]
}

export type Door = {
    path: string,
    text: string,
    color?: string
}

export type Action = {
    type:string,
    element:string,
    param:number,
    text:String,
    conditions:Condition[]
}
export type Condition = {
    type:string,
    element1: string|number
    element2: string|number
}

export type Item = {
    name:string
    param:number
}