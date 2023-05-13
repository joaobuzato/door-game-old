import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
      <title>Door Game</title>
    </Head>
      <main>
        <h1 id="play"><Link href={"/game"}>Play Door Game</Link></h1>
      </main>
    </>
  )
}
