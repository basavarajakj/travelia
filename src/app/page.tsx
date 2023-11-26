import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/preloader/Preloader'

export default function Home() {
  return (
    <>
      <Preloader /> 
      <Header />
      <Hero />
    </> 
  )
}
