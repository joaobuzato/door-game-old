import { Room } from "./types"


export const map :Room[]= [
    {
        id : "0000",
        title: "O quarto mais escuro que você já viu (ou não viu)",
        text : "Este é o quarto mais escuro que você já viu em toda a sua vida. O preto no quarto é tão preto que você não enxerga nem seus pensamentos. É como estar cego. Você tateia e consegue encontrar duas portas.",
        doors: [
            { path: "1000", text: "Porta de madeira", color:"green"},
            { path: "2000", text: "Porta de aço", color:"brown"},
        ]

    },
    {
        id : "1000",
        title:"",
        text : "Você entrou na porta de madeira! ",
        doors: [
            { path: "2000", text: "Porta de aço"},
            { path: "3000", text: "Cair no buraco"},
        ]

    },
    {
        id : "2000",
        title:"",
        text : "Você entrou na porta de aço! ",
        doors: [
            { path: "1000", text: "Porta de madeira"},
            { path: "3000", text: "Cair no buraco"},
        ]

    },
    {
        id : "3000",
        title:"",
        text : "Você caiu no buraco! ",
        doors: [
            { path: "0000", text: "Começar novamente"},
        ]

    },
    {
        id : "4000",
        title:"",
        text : "<p>Quarto da maria</p><p>A maria te mordeu e você morreu</p>",
        doors: [
            { path: "0000", text: "Começar novamente"},
        ]

    },

    
]