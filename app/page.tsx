import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from './components/widgets/Hero'
import IntroSec from './components/widgets/IntroSec'
import ServiceSection from './components/widgets/ServiceSection'
import HireMe from './components/widgets/HireMe'
import PortfolioSection from './components/widgets/PortfolioSection'
import ContactUs from './components/widgets/ContactUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Intro Section */}
      <IntroSec />
      {/* Servies Section */}
      <ServiceSection />
      {/* Hire Me Section */}
      <HireMe />
      {/* Portfolio Section */}
      <PortfolioSection />
      {/* ContactUs Section */}
      <ContactUs />
    </main>
  )
}
