import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { InventoryProvider } from "../contexts/InventoryContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InventoryProvider>
      <Component {...pageProps} />
    </InventoryProvider>
  );
}
