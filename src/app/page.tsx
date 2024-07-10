import CallToActionBanner from '@/components/CallToAction'
import CaseStudies from '@/components/CaseStudies'
import GpaToTestScores from '@/components/GpaToScore'
import Hero from '@/components/Hero'
import InfoSection from '@/components/InfoSection'
import PotentialSection from '@/components/Potential'
import ScoresSection from '@/components/ScoresSection'
import StatisticsSection from '@/components/StatisticsSection'
import StepsSection from '@/components/Steps'
import StrategySection from '@/components/StrategySection'
import TestPrepPrograms from '@/components/TestPrepProgram'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero/>
      <StrategySection />
      <StatisticsSection />
      <PotentialSection />
      <InfoSection/>
      <ScoresSection/>
      <CallToActionBanner/>
      <StepsSection/>
      <TestPrepPrograms/>
      <GpaToTestScores/>
      <CaseStudies/>
    </div>
  )
}

export default Page