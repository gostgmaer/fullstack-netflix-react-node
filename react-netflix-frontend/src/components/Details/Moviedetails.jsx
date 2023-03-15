import React from 'react'
import { useGlobalAppContext } from '../../context/AppGlobalContent'
import Aboutmovie from './Aboutmovie'
import Details from './Details'
import MoreList from './MoreList'
import './style.scss'
import VideoContent from './VideoContent'



const Moviedetails = () => {
  

  return (
    <div className='Moviedetails'>
   <div className="video">
   <VideoContent/>
   </div>
    <div className="contentElements">
    <Details/>
    <MoreList/>
    <Aboutmovie/>
    </div>
   
    </div>
  )
}

export default Moviedetails