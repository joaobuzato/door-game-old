import Link from "next/link"
import { useEffect, useState } from "react"

const Game = () => {
    const [path, setPath ] = useState<string>()
    useEffect(() => {
        setPath(window.location.pathname)
    })

    return (
        <div>
            <p>Este é um jogo sobre abrir portas. Você verá.</p>
            <Link href="/game/0000">Começar jogo.</Link>
        </div>
    )
}

export default Game