import React from 'react'
import { useGlobalAppContext } from '../../context/AppGlobalContent'
import Details from './Details'
import MoreList from './MoreList'
import './style.scss'
import VideoContent from './VideoContent'



const Moviedetails = () => {
  

  return (
    <div className='Moviedetails'>
    <VideoContent/>
    <Details/>
    <MoreList/>
    </div>
  )
}

export default Moviedetails