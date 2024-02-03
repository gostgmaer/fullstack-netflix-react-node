import Header from '@/components/global/blocks/header'
import React from 'react'
import Index from '@/components/pages/home'

const Page = () => {
  return (
    <div className='bg-gray-700 min-h-screen '>
      <header className=' sticky top-0 z-50'>
      <Header></Header>
      </header>
      <Index />
    </div>
  )
}

export default Page