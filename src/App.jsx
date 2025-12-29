import { Routes, Route } from 'react-router-dom'
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
import ThankYou from './components/ThankYou'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  )
}

export default App
