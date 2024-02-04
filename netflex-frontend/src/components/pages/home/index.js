import React from 'react'
import { Feature } from './components'
import { MovieSlider } from '@/components/global/blocks/sliderList'
import { moviedata } from '@/helper/data'
import { serverMethod, servermovieApi } from '@/lib/network/servermethod'
import Dialogpopup from '@/components/layout/Dialogpopup'

const Index = async (prams) => {


  return (
    <div className='pb-16'>
      
      <Feature data ={{}} />

      <div className='max-w-7xl mx-auto flex flex-col gap-5 '>
        <div className=' -mt-10  '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div className=' '>
          <MovieSlider
            data={moviedata} title={"Featured"} />
        </div>
        <div>
          <Dialogpopup/>
        </div>
      </div>
    </div>
  )
}

export default Index





