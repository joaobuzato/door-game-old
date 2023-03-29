import { Room } from "./types"


export const map :Room[]= [
    {
        id : "0000",
        title: "O quarto mais escuro que você já viu (ou não viu)",
        text : "Você abre os olhos e não vê absolutamente nada. Este é o quarto mais escuro que você já viu em toda a sua vida. O preto no quarto é tão preto que você não enxerga nem seus pensamentos. É como estar cego. Você tateia e consegue encontrar duas portas.",
        actions: [
            {type:"get", element:"faca", param: 1, text:"Você pegou a faca. Agora vai ficar mais fácil.", conditions:[]},
            {type:"use", element:"faca", param: 1, text:"Você USOU a faca puta merdaaaaaaaaaaaaaaaaaaaaaaaa!", conditions:[{element1:"faca", type:"greater", element2:3}]}
        ],
        doors: [
            { path: "1000", text: "Porta de madeira", color:"#FFD700"},
            { path: "2000", text: "Porta de aço", color:"#808080"},
        ]

    },
    {
        id : "1000",
        title:"O Quarto com cheiro de tudo que você pode imaginar",
        text : `O quarto que está em volta de você é do amarelo mais feio que você já viu. O cheiro é tão ruim que o ar do quarto chega a ser mais pesado. Há de tudo: algodão doce, pipoca, plástico queimado, sangue e [CENSURADO]. Seus pés pisam em algo que faz "crec". É uma barata. Você costuma sentir cheiro de baratas? De qualquer maneira, você vê mais duas portas. Suas narinas vão amar sair desse inferno olfativo.`,
        actions: [],
        doors: [
            { path: "2000", text: "Porta de aço", color:"#808080"},
            { path: "3000", text: "Porta rosa", color:"#FF00FF"},
        ]

    },
    {
        id : "2000",
        title:"Quarto-submarino",
        text : "Este quarto está debaixo dágua. Você de alguma maneira sabe disso. Sua cabeça dói com a pressão de várias atmosferas na sua cabeça. No chão você encontra uma carta, que diz simplesmente 'Infelizmente não poderei comparecer ao café da manhã de quinta feira.'. Você fica muito triste, queria o café da manhã.  ",
        actions: [],
        doors: [
            { path: "3000", text: "Porta rosa", color:"#FF00FF"},
            { path: "4000", text: "Porta de material desconhecido", color:"#GGGGGG"},
        ]

    },
    {
        id : "3000",
        title:"O quarto de bebê",
        text : "O quarto tem cheirinho de criança, mas não uma criança qualquer. Essa é a criança de uma não-mãe. Uma descrição em texto não seria suficientemente imprecisa para descrever a monstruosidade que está no porta retrato da não-criança. Os brinquedinhos dela são dedos. Humanos? Humanos. Subumanos. Superumanos. Você teme nunca mais ser feliz. ",
        actions: [],
        doors: [
            { path: "0001", text: "A porta."},
        ]

    },
    {
        id : "4000",
        title:"A sala da escola da infância dos tios dos seus pais.",
        text : "Minha nossa, quantas carteiras desenhadas! Essa sala é certamente dos anos [CENSURADO], quase 300 anos antes de você nascer, ou parece ser. Não importa, as escolas são iguais, você pensa. Não importa. ",
        actions: [],
        doors: [
            { path: "0001", text: "A porta. "},
        ]

    },
    {
        id : "0001",
        title:"Não dá mais, você se perdeu. ",
        text : "",
        actions: [],
        doors: [
            { path: "0001", text: "A porta. "},
        ]

    },

    
]