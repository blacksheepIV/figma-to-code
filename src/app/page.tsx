import Header from '@/sections/Header'
import Footer from '@/sections/Footer'
import Container from '@/components/ui/Container'
import HeroSection from '@/sections/HeroSection'

export default function Page() {
  return (
    <div className = "min-h-screen bg-white font-sans">
      <Header />
      <main>
<HeroSection/>
      </main>
      <Footer />
    </div>
  )
}
