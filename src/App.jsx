import React from 'react'
import Line from './components/Line'
import Svg from './components/Svg'
import DriveLessSection from './components/DriveLessSection'
import HowItWorks from './components/HowItWork'
import TrustSection from './components/TrustSection'
import ReliabilitySection from './components/ReliabilitySection'
import EventFeatures from './components/EventFeatures'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <EventFeatures />
      <HowItWorks />
      <TrustSection />
      <ReliabilitySection />
      <Footer />
    </div>
  )
}

export default App