import '@/styles/globals.css'
import AppLayout from './layout'
import {Poppins} from "@next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400","500","600","700"],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return <main className={`${poppins.variable} font-sans`}>
     <AppLayout> 
    <Component {...pageProps} /> 
    </AppLayout>
  </main>
}
