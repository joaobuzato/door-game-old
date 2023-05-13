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
        <Link href={"/game"}>Play Door Game</Link>
      </main>
    </>
  )
}
