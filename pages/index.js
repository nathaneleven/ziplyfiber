import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import Plans from '../src/components/organisms/Plans'
import About from '../src/components/organisms/About'
import Advantages from '../src/components/organisms/Advantages'
import Xtream from '../src/components/organisms/Xtream'
import Support from '../src/components/organisms/Support'


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <Plans/>
      <About/>
      <Advantages/>
      <Xtream/>
      <Support/>
      <Footer/>
    </div>
  )
}
