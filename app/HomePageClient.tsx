import CategorySection from '@/components/Custom/CategorySection'
import Navber from '@/components/Custom/Navber'
import React from 'react'

function HomePageClient() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navber/>
      <CategorySection/>
    </div>
  )
}

export default HomePageClient
