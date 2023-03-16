export type Room = {
    id: string,
    title:string,
    text:string,
    doors:{path:string, text:string}[]
}

export type Door = {
    path: string,
    text: string
}