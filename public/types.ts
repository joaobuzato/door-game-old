export type Room = {
    id: string,
    title:string,
    text:string,
    doors:Door[]
}

export type Door = {
    path: string,
    text: string,
    color?: string
}