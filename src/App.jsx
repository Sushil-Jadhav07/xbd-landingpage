import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import VideoSection from './components/VideoSection'
import QuestionsSection from './components/QuestionsSection'
import WhoShouldAttendSection from './components/WhoShouldAttendSection'
import ComparisonSection from './components/ComparisonSection'
import LayersSection from './components/LayersSection'
import AuthorSection from './components/AuthorSection'
import AgendaSection from './components/AgendaSection'
import MainCTA from './components/MainCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <IntroSection />
      <VideoSection />
      <QuestionsSection />
      <WhoShouldAttendSection />
      <ComparisonSection />
      <LayersSection />
      <AuthorSection />
      <AgendaSection />
      {/* Main CTA */}
      <MainCTA />
      <Footer />
    </div>
  )
}

export default App
