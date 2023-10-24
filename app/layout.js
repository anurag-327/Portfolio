import './globals.css'
import './app.css'
import { Inter,Montserrat, Poppins } from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight:['100','200','300','400','500'] })

export const metadata = {
  title: 'Anurag Srivastav',
  description: 'Portfolio created with create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-grid [--grid-opacity:0.08] scroll-smooth [--grid-size:100px]  m-0 p-0  `}>{children}</body>
    </html>
  )
}
