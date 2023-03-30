import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import InventoryContext from "../components/InventoryContext"

export default function App({ Component, pageProps }: AppProps) {

  const [inventory, setInventory] = useState([]);

  return (
    <InventoryContext.Provider value={{inventory:inventory, setInventory:setInventory}}>
      <Component {...pageProps} />
    </InventoryContext.Provider>
  )
}
