export type Room = {
    id: string,
    text:string,
    doors:{path:string, text:string}[]
}


export const map :Room[]= [
    {
        id : "0000",
        text : "Você acorda em um quarto com duas portas, em qual você entra?",
        doors: [
            { path: "/game/1000", text: "Porta de madeira"},
            { path: "/game/2000", text: "Porta de aço"}
        ]

    },
    {
        id : "1000",
        text : "Você entrou na porta de madeira! ",
        doors: [
            { path: "/game/2000", text: "Porta de aço"},
            { path: "/game/3000", text: "Cair no buraco"},
        ]

    },
    {
        id : "2000",
        text : "Você entrou na porta de aço! ",
        doors: [
            { path: "/game/1000", text: "Porta de madeira"},
            { path: "/game/3000", text: "Cair no buraco"},
        ]

    },
    {
        id : "3000",
        text : "Você caiu no buraco! ",
        doors: [
            { path: "/game/0000", text: "Começar novamente"},
        ]

    },
    
]