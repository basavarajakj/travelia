import CTA from '@/components/cta/Cta'
import Destination from '@/components/destination/Destination'
import Experience from '@/components/experience/Experience'
import Gallery from '@/components/gallery/Gallery'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/preloader/Preloader'
import Service from '@/components/service/Service'

export default function Home() {
  return (
    <>
      <Preloader /> 
      <Header />
      <Hero />
      <Service />
      <Destination />
      <Experience />
      <Gallery />
      <CTA />
    </> 
  )
}
