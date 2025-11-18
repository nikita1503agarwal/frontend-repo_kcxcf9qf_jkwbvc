import EmergencyBanner from '../components/EmergencyBanner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import QuickActions from '../components/QuickActions'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <EmergencyBanner />
      <Header />
      <main>
        <Hero />
        <QuickActions />
      </main>
      <Footer />
    </div>
  )
}
